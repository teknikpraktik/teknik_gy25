// Zip-läsning och zip-skrivning för OOXML-paket, med Nodes inbyggda zlib och
// utan externa beroenden. Delas av de två skripten som bygger Word-referens-
// dokument (make-review-reference.mjs och make-bok-reference.mjs), som båda
// hämtar Pandocs standardreferens och injicerar delar direkt i paketet.
//
// Skrivningen lagrar posterna okomprimerat (metod 0). Filerna blir något
// större men går att jämföra byte för byte mellan körningar, vilket gör det
// möjligt att se att en ändring i ett skript inte råkat ändra det andra
// referensdokumentet.

import zlib from 'node:zlib';

export function lasZip(buf) {
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

export function skrivZip(filer) {
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

// Kastar om söksträngen inte finns, så att en ändring i Pandocs referensformat
// upptäcks direkt i stället för att tyst ge ett referensdokument utan
// injektionen.
export function ersattEnGang(text, sok, ersattning, fil) {
	if (!text.includes(sok)) throw new Error(`Hittar inte "${sok}" i ${fil} — Pandocs referensformat kan ha ändrats.`);
	return text.replace(sok, ersattning);
}

// Skriver om en befintlig stildefinition i word/styles.xml: byter ut stilens
// <w:pPr> och <w:rPr> mot de angivna, och lägger till dem om de saknas. Pandocs
// standardreferens definierar redan alla stilar vi rör, så att lägga till en ny
// <w:style> med samma id vore ogiltigt OOXML.
export function sattStil(xml, styleId, { pPr = null, rPr = null }) {
	const re = new RegExp(`<w:style [^>]*w:styleId="${styleId}"[\\s\\S]*?</w:style>`);
	const m = xml.match(re);
	if (!m) throw new Error(`Hittar ingen stil med id "${styleId}" i styles.xml — Pandocs referensformat kan ha ändrats.`);
	let stil = m[0];
	for (const [tagg, innehall] of [['w:pPr', pPr], ['w:rPr', rPr]]) {
		if (innehall === null) continue;
		const finns = new RegExp(`<${tagg}>[\\s\\S]*?</${tagg}>`);
		stil = finns.test(stil)
			? stil.replace(finns, `<${tagg}>${innehall}</${tagg}>`)
			: stil.replace('</w:style>', `<${tagg}>${innehall}</${tagg}></w:style>`);
	}
	return xml.replace(m[0], stil);
}
