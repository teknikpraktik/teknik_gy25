// Bygger scripts/bok-reference.docx — Word-referensdokumentet för bokexporten
// (npm run export:bok och npm run export:pdf):
//
//   node scripts/make-bok-reference.mjs
//
// Skilt från review-reference.docx, som är ett manus och avsiktligt ser ut som
// ett manus. Det här är en läsfärdig bok och har därför en egen typografi:
// titelsida, kapitel- och avsnittsrubriker i bokens mörkblå, luft omkring
// rubrikerna, sidfot med sidnummer och ingen siffra på omslagssidan.
//
// Utgångspunkten är Pandocs standardreferens (pandoc --print-default-data-file
// reference.docx). Skriptet skriver om befintliga stildefinitioner i
// word/styles.xml och lägger till sidfötterna direkt i OOXML-paketet. Måtten är
// i Words egna enheter: teckenstorlek i halva punkter (w:sz), avstånd och
// indrag i tjugondels punkter (twips).
//
// Utfilen committas. Kör om skriptet när typografin ska ändras — redigera
// aldrig docx-filen för hand, då går ändringen förlorad vid nästa körning.

import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { lasZip, skrivZip, ersattEnGang, sattStil } from './docx-zip.mjs';

const execFileAsync = promisify(execFile);
const root = path.dirname(fileURLToPath(import.meta.url));
const utfil = path.join(root, 'bok-reference.docx');

// Bokens mörkblå, samma som granskningsvyns rubrikfärg.
const BLA = '1D3A5F';
const GRA = '5A5A5A';

// ------------------------------------------------------------------- sidfötter
//
// Två sidfötter: en med centrerat sidnummerfält för brödsidorna, och en tom
// för dokumentets första sida. <w:titlePg/> i sectPr gör att omslaget använder
// den tomma, så att titelsidan slipper sin siffra utan att numreringen skiftar.

const FOOTER_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>1</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r></w:p></w:ftr>`;

const FOOTER_FORSTA_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p/></w:ftr>`;

const RELATIONER =
	'<Relationship Id="rIdBokFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>' +
	'<Relationship Id="rIdBokFooterForsta" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer2.xml"/>';

const INNEHALLSTYPER =
	'<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' +
	'<Override PartName="/word/footer2.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>';

// Figurblocket är detsamma som i granskningsmanuset: bildplatshållarna ska
// synas som produktionsmaterial även i en läsfärdig bok, eftersom
// illustrationerna ännu inte är producerade.
// Delrubrik: för bokens delar som inte är kapitel och inte ska stå i
// innehållsförteckningen, alltså Innehåll och Baksidestext. Ser ut som en
// kapitelrubrik men saknar outlineLvl, så Words TOC-fält plockar inte upp den.
const DELRUBRIK_STIL =
	'<w:style w:type="paragraph" w:customStyle="1" w:styleId="Delrubrik"><w:name w:val="Delrubrik"/><w:basedOn w:val="Normal"/><w:next w:val="BodyText"/><w:qFormat/>' +
	`<w:pPr><w:keepNext/><w:spacing w:before="480" w:after="360"/><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="8" w:color="${BLA}"/></w:pBdr></w:pPr>` +
	`<w:rPr><w:rFonts w:asciiTheme="majorHAnsi" w:hAnsiTheme="majorHAnsi"/><w:b/><w:color w:val="${BLA}"/><w:sz w:val="48"/><w:szCs w:val="48"/></w:rPr></w:style>`;

const FIGURBLOCK_STIL =
	'<w:style w:type="paragraph" w:customStyle="1" w:styleId="Figurblock"><w:name w:val="Figurblock"/><w:basedOn w:val="Normal"/><w:qFormat/>' +
	'<w:pPr><w:pBdr><w:top w:val="single" w:sz="8" w:space="6" w:color="808080"/><w:bottom w:val="single" w:sz="8" w:space="6" w:color="808080"/>' +
	'<w:left w:val="single" w:sz="8" w:space="6" w:color="808080"/><w:right w:val="single" w:sz="8" w:space="6" w:color="808080"/></w:pBdr>' +
	'<w:shd w:val="clear" w:color="auto" w:fill="F2F2F2"/><w:ind w:left="227" w:right="227"/><w:spacing w:before="120" w:after="120"/></w:pPr></w:style>';

// ---------------------------------------------------------------------- stilar

const stilar = [
	// Titelsidan. Titeln skjuts ned en bit på sidan i stället för att stå högst
	// upp, vilket är det enda greppet som behövs för att omslaget ska läsa som
	// ett omslag och inte som en första textsida.
	['Title', {
		pPr: '<w:jc w:val="center"/><w:spacing w:before="3600" w:after="240"/>',
		rPr: `<w:rFonts w:asciiTheme="majorHAnsi" w:hAnsiTheme="majorHAnsi"/><w:color w:val="${BLA}"/><w:sz w:val="96"/><w:szCs w:val="96"/><w:spacing w:val="20"/>`,
	}],
	['Subtitle', {
		pPr: '<w:jc w:val="center"/><w:spacing w:before="0" w:after="960"/>',
		rPr: `<w:rFonts w:asciiTheme="majorHAnsi" w:hAnsiTheme="majorHAnsi"/><w:color w:val="${GRA}"/><w:sz w:val="40"/><w:szCs w:val="40"/>`,
	}],
	['Author', {
		pPr: '<w:jc w:val="center"/><w:spacing w:before="0" w:after="120"/>',
		rPr: `<w:color w:val="${GRA}"/><w:sz w:val="24"/><w:szCs w:val="24"/>`,
	}],
	['Date', {
		pPr: '<w:jc w:val="center"/><w:spacing w:before="240" w:after="0"/>',
		rPr: `<w:i/><w:color w:val="${GRA}"/><w:sz w:val="20"/><w:szCs w:val="20"/>`,
	}],

	// Kapitelrubrik. Sidbrytningen läggs av bok-filter.lua, så rubriken behöver
	// inget stort avstånd uppåt — däremot en linje under och rejält med luft ned
	// till brödtexten.
	['Heading1', {
		pPr: `<w:keepNext/><w:keepLines/><w:spacing w:before="480" w:after="360"/><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="8" w:color="${BLA}"/></w:pBdr><w:outlineLvl w:val="0"/>`,
		rPr: `<w:rFonts w:asciiTheme="majorHAnsi" w:hAnsiTheme="majorHAnsi"/><w:b/><w:color w:val="${BLA}"/><w:sz w:val="48"/><w:szCs w:val="48"/>`,
	}],
	// Avsnittsrubrik.
	['Heading2', {
		pPr: '<w:keepNext/><w:keepLines/><w:spacing w:before="480" w:after="160"/><w:outlineLvl w:val="1"/>',
		rPr: `<w:rFonts w:asciiTheme="majorHAnsi" w:hAnsiTheme="majorHAnsi"/><w:b/><w:color w:val="${BLA}"/><w:sz w:val="32"/><w:szCs w:val="32"/>`,
	}],
	// Delavsnitt och de underrubriker som avsnitten själva sätter
	// (Instuderingsfrågor, Övningar).
	['Heading3', {
		pPr: '<w:keepNext/><w:keepLines/><w:spacing w:before="360" w:after="120"/><w:outlineLvl w:val="2"/>',
		rPr: `<w:rFonts w:asciiTheme="majorHAnsi" w:hAnsiTheme="majorHAnsi"/><w:b/><w:color w:val="${BLA}"/><w:sz w:val="26"/><w:szCs w:val="26"/>`,
	}],
	['Heading4', {
		pPr: '<w:keepNext/><w:keepLines/><w:spacing w:before="280" w:after="80"/><w:outlineLvl w:val="3"/>',
		rPr: `<w:i/><w:color w:val="${BLA}"/><w:sz w:val="24"/><w:szCs w:val="24"/>`,
	}],

	// Brödtext: något luftigare radavstånd än Words standard, och avstånd
	// mellan styckena i stället för indrag på första raden.
	['Normal', {
		pPr: '<w:spacing w:before="0" w:after="160" w:line="276" w:lineRule="auto"/>',
		rPr: '<w:sz w:val="22"/><w:szCs w:val="22"/>',
	}],
	['BodyText', {
		pPr: '<w:spacing w:before="0" w:after="160" w:line="276" w:lineRule="auto"/>',
	}],
	// Rubriken över Words genererade innehållsförteckning.
	['TOCHeading', {
		pPr: '<w:keepNext/><w:spacing w:before="0" w:after="240"/><w:outlineLvl w:val="9"/>',
		rPr: `<w:rFonts w:asciiTheme="majorHAnsi" w:hAnsiTheme="majorHAnsi"/><w:b/><w:color w:val="${BLA}"/><w:sz w:val="40"/><w:szCs w:val="40"/>`,
	}],
];

// --------------------------------------------------------------------- körning

const tmp = await mkdtemp(path.join(tmpdir(), 'bok-ref-'));
try {
	const standardRef = path.join(tmp, 'default-reference.docx');
	await execFileAsync('pandoc', ['-o', standardRef, '--print-default-data-file', 'reference.docx']);
	const filer = lasZip(await readFile(standardRef));
	const byNamn = new Map(filer.map((f) => [f.namn, f]));

	const rels = byNamn.get('word/_rels/document.xml.rels');
	rels.data = Buffer.from(
		ersattEnGang(rels.data.toString('utf8'), '</Relationships>', `${RELATIONER}</Relationships>`, rels.namn),
		'utf8',
	);

	const contentTypes = byNamn.get('[Content_Types].xml');
	contentTypes.data = Buffer.from(
		ersattEnGang(contentTypes.data.toString('utf8'), '</Types>', `${INNEHALLSTYPER}</Types>`, contentTypes.namn),
		'utf8',
	);

	const doc = byNamn.get('word/document.xml');
	const docXml = doc.data.toString('utf8');
	const sectPr = docXml.match(/<w:sectPr[^>]*>/);
	if (!sectPr) throw new Error('Hittar ingen <w:sectPr> i word/document.xml.');
	doc.data = Buffer.from(
		docXml.replace(
			sectPr[0],
			`${sectPr[0]}<w:footerReference w:type="default" r:id="rIdBokFooter"/>` +
				'<w:footerReference w:type="first" r:id="rIdBokFooterForsta"/><w:titlePg/>',
		),
		'utf8',
	);

	const styles = byNamn.get('word/styles.xml');
	let stilXml = styles.data.toString('utf8');
	for (const [id, def] of stilar) stilXml = sattStil(stilXml, id, def);
	stilXml = ersattEnGang(stilXml, '</w:styles>', `${DELRUBRIK_STIL}${FIGURBLOCK_STIL}</w:styles>`, styles.namn);
	styles.data = Buffer.from(stilXml, 'utf8');

	filer.push({ namn: 'word/footer1.xml', data: Buffer.from(FOOTER_XML, 'utf8') });
	filer.push({ namn: 'word/footer2.xml', data: Buffer.from(FOOTER_FORSTA_XML, 'utf8') });

	await writeFile(utfil, skrivZip(filer));
	console.log(`Bokens referensdokument byggt → ${path.relative(process.cwd(), utfil)} (${filer.length} zip-poster, ${stilar.length} omskrivna stilar)`);
} finally {
	await rm(tmp, { recursive: true, force: true });
}
