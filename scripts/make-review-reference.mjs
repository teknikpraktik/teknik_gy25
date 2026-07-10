// Återskapar scripts/review-reference.docx — Word-referensdokumentet för den
// redaktionella granskningsexporten (npm run export:review) — helt utan
// manuell redigering i Word:
//
//   node scripts/make-review-reference.mjs
//
// Skriptet hämtar Pandocs inbyggda standardreferens (pandoc -o …
// --print-default-data-file reference.docx) och injicerar därefter två saker
// direkt i OOXML-paketet:
//
//   1. En sidfot med centrerat sidnummerfält (word/footer1.xml + relation +
//      innehållstyp + footerReference i dokumentets sectPr).
//   2. Styckestilen "Figurblock" (ram + ljusgrå platta) som granskningens
//      figurplatshållare renderas med via custom-style.
//
// Zip-läsning/-skrivning görs med Nodes inbyggda zlib — inga beroenden.
// Utfilen committas; kör om skriptet om Pandocs standardreferens eller
// stilarna behöver uppdateras.

import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import zlib from 'node:zlib';

const execFileAsync = promisify(execFile);
const root = path.dirname(fileURLToPath(import.meta.url));
const utfil = path.join(root, 'review-reference.docx');

// ---------------------------------------------------------------- zip-läsning

function lasZip(buf) {
	// Hitta End of Central Directory (sig 0x06054b50) bakifrån.
	let eocd = -1;
	for (let i = buf.length - 22; i >= 0; i--) {
		if (buf.readUInt32LE(i) === 0x06054b50) {
			eocd = i;
			break;
		}
	}
	if (eocd === -1) throw new Error('Ingen EOCD-post — inte en zip-fil.');
	const antal = buf.readUInt16LE(eocd + 10);
	let pos = buf.readUInt32LE(eocd + 16); // central directory offset
	const filer = []; // { namn, data } i arkivordning
	for (let n = 0; n < antal; n++) {
		if (buf.readUInt32LE(pos) !== 0x02014b50) throw new Error('Trasig central directory.');
		const metod = buf.readUInt16LE(pos + 10);
		const compSize = buf.readUInt32LE(pos + 20);
		const nameLen = buf.readUInt16LE(pos + 28);
		const extraLen = buf.readUInt16LE(pos + 30);
		const commentLen = buf.readUInt16LE(pos + 32);
		const lokalOffset = buf.readUInt32LE(pos + 42);
		const namn = buf.toString('utf8', pos + 46, pos + 46 + nameLen);
		const lokalNameLen = buf.readUInt16LE(lokalOffset + 26);
		const lokalExtraLen = buf.readUInt16LE(lokalOffset + 28);
		const dataStart = lokalOffset + 30 + lokalNameLen + lokalExtraLen;
		const komprimerad = buf.subarray(dataStart, dataStart + compSize);
		const data = metod === 8 ? zlib.inflateRawSync(komprimerad) : Buffer.from(komprimerad);
		filer.push({ namn, data });
		pos += 46 + nameLen + extraLen + commentLen;
	}
	return filer;
}

// -------------------------------------------------------------- zip-skrivning

const crcTabell = (() => {
	const t = new Uint32Array(256);
	for (let n = 0; n < 256; n++) {
		let c = n;
		for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
		t[n] = c >>> 0;
	}
	return t;
})();

function crc32(data) {
	let c = 0xffffffff;
	for (const byte of data) c = crcTabell[(c ^ byte) & 0xff] ^ (c >>> 8);
	return (c ^ 0xffffffff) >>> 0;
}

function skrivZip(filer) {
	const delar = [];
	const cd = [];
	let offset = 0;
	for (const { namn, data } of filer) {
		const namnBuf = Buffer.from(namn, 'utf8');
		const crc = crc32(data);
		const lokal = Buffer.alloc(30);
		lokal.writeUInt32LE(0x04034b50, 0);
		lokal.writeUInt16LE(20, 4); // version
		lokal.writeUInt16LE(0, 6); // flaggor
		lokal.writeUInt16LE(0, 8); // metod: stored
		lokal.writeUInt16LE(0, 10); // tid
		lokal.writeUInt16LE(0x21, 12); // datum (1980-01-01)
		lokal.writeUInt32LE(crc, 14);
		lokal.writeUInt32LE(data.length, 18);
		lokal.writeUInt32LE(data.length, 22);
		lokal.writeUInt16LE(namnBuf.length, 26);
		lokal.writeUInt16LE(0, 28);
		delar.push(lokal, namnBuf, data);

		const post = Buffer.alloc(46);
		post.writeUInt32LE(0x02014b50, 0);
		post.writeUInt16LE(20, 4);
		post.writeUInt16LE(20, 6);
		post.writeUInt16LE(0, 8);
		post.writeUInt16LE(0, 10); // metod: stored
		post.writeUInt16LE(0, 12);
		post.writeUInt16LE(0x21, 14);
		post.writeUInt32LE(crc, 16);
		post.writeUInt32LE(data.length, 20);
		post.writeUInt32LE(data.length, 24);
		post.writeUInt16LE(namnBuf.length, 28);
		post.writeUInt32LE(offset, 42);
		cd.push(Buffer.concat([post, namnBuf]));
		offset += 30 + namnBuf.length + data.length;
	}
	const cdBuf = Buffer.concat(cd);
	const eocd = Buffer.alloc(22);
	eocd.writeUInt32LE(0x06054b50, 0);
	eocd.writeUInt16LE(filer.length, 8);
	eocd.writeUInt16LE(filer.length, 10);
	eocd.writeUInt32LE(cdBuf.length, 12);
	eocd.writeUInt32LE(offset, 16);
	return Buffer.concat([...delar, cdBuf, eocd]);
}

// ------------------------------------------------------------- injektionerna

const FOOTER_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>1</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r></w:p></w:ftr>`;

const FOOTER_RELATION = '<Relationship Id="rIdRevFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>';

const FOOTER_CONTENT_TYPE = '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>';

const FIGURBLOCK_STIL = '<w:style w:type="paragraph" w:customStyle="1" w:styleId="Figurblock"><w:name w:val="Figurblock"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:pBdr><w:top w:val="single" w:sz="8" w:space="6" w:color="808080"/><w:bottom w:val="single" w:sz="8" w:space="6" w:color="808080"/><w:left w:val="single" w:sz="8" w:space="6" w:color="808080"/><w:right w:val="single" w:sz="8" w:space="6" w:color="808080"/></w:pBdr><w:shd w:val="clear" w:color="auto" w:fill="F2F2F2"/><w:ind w:left="227" w:right="227"/><w:spacing w:before="60" w:after="60"/></w:pPr></w:style>';

function ersattEnGang(text, sok, ersattning, fil) {
	if (!text.includes(sok)) throw new Error(`Hittar inte "${sok}" i ${fil} — Pandocs referensformat kan ha ändrats.`);
	return text.replace(sok, ersattning);
}

// --------------------------------------------------------------------- körning

const tmp = await mkdtemp(path.join(tmpdir(), 'review-ref-'));
try {
	const standardRef = path.join(tmp, 'default-reference.docx');
	await execFileAsync('pandoc', ['-o', standardRef, '--print-default-data-file', 'reference.docx']);
	const filer = lasZip(await readFile(standardRef));
	const byNamn = new Map(filer.map((f) => [f.namn, f]));

	const rels = byNamn.get('word/_rels/document.xml.rels');
	rels.data = Buffer.from(
		ersattEnGang(rels.data.toString('utf8'), '</Relationships>', `${FOOTER_RELATION}</Relationships>`, rels.namn),
		'utf8',
	);

	const contentTypes = byNamn.get('[Content_Types].xml');
	contentTypes.data = Buffer.from(
		ersattEnGang(contentTypes.data.toString('utf8'), '</Types>', `${FOOTER_CONTENT_TYPE}</Types>`, contentTypes.namn),
		'utf8',
	);

	const doc = byNamn.get('word/document.xml');
	const docXml = doc.data.toString('utf8');
	const sectPr = docXml.match(/<w:sectPr[^>]*>/);
	if (!sectPr) throw new Error('Hittar ingen <w:sectPr> i word/document.xml.');
	doc.data = Buffer.from(
		docXml.replace(sectPr[0], `${sectPr[0]}<w:footerReference w:type="default" r:id="rIdRevFooter"/>`),
		'utf8',
	);

	const styles = byNamn.get('word/styles.xml');
	styles.data = Buffer.from(
		ersattEnGang(styles.data.toString('utf8'), '</w:styles>', `${FIGURBLOCK_STIL}</w:styles>`, styles.namn),
		'utf8',
	);

	filer.push({ namn: 'word/footer1.xml', data: Buffer.from(FOOTER_XML, 'utf8') });

	await writeFile(utfil, skrivZip(filer));
	console.log(`Referensdokument återskapat → ${path.relative(process.cwd(), utfil)} (${filer.length} zip-poster)`);
} finally {
	await rm(tmp, { recursive: true, force: true });
}
