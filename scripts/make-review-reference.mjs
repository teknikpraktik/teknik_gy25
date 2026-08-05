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
// Zip-läsning/-skrivning ligger i scripts/docx-zip.mjs och delas med
// make-bok-reference.mjs — inga externa beroenden.
// Utfilen committas; kör om skriptet om Pandocs standardreferens eller
// stilarna behöver uppdateras.

import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { lasZip, skrivZip, ersattEnGang } from './docx-zip.mjs';

const execFileAsync = promisify(execFile);
const root = path.dirname(fileURLToPath(import.meta.url));
const utfil = path.join(root, 'review-reference.docx');

// ------------------------------------------------------------- injektionerna

const FOOTER_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>1</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r></w:p></w:ftr>`;

const FOOTER_RELATION = '<Relationship Id="rIdRevFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>';

const FOOTER_CONTENT_TYPE = '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>';

const FIGURBLOCK_STIL = '<w:style w:type="paragraph" w:customStyle="1" w:styleId="Figurblock"><w:name w:val="Figurblock"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:pBdr><w:top w:val="single" w:sz="8" w:space="6" w:color="808080"/><w:bottom w:val="single" w:sz="8" w:space="6" w:color="808080"/><w:left w:val="single" w:sz="8" w:space="6" w:color="808080"/><w:right w:val="single" w:sz="8" w:space="6" w:color="808080"/></w:pBdr><w:shd w:val="clear" w:color="auto" w:fill="F2F2F2"/><w:ind w:left="227" w:right="227"/><w:spacing w:before="60" w:after="60"/></w:pPr></w:style>';

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
