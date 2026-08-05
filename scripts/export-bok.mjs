// Bokexport: sätter samman hela läroboken som en färdig Word-fil.
//
//   dist/bok/teknik-niva-1-och-2.docx
//
//   npm run export:bok
//
// Skillnaden mot de två befintliga exporterna (12-produktionsarkitektur.md,
// "Export") är att den här bygger en läsfärdig bok och inte ett manus:
//
//   npm run export         förlagsmanus, figurspecifikationer som blockcitat
//   npm run export:review  granskningsmanus, sidbrytning per avsnitt
//   npm run export:bok     bok, med titelsida, innehållsförteckning, förord,
//                          kapitel med sidbrytning, facit och baksidestext
//
// Det enda som följer med ur produktionsledet är bildplatshållarna, som
// bokens illustrationer ännu inte är producerade. Frontmatter, status,
// lärandemål, kursplanetaggar och arbetsanteckningar rensas av manuskärnan
// respektive kontrolleras bort i efterkontrollerna sist i filen.
//
// För- och eftertexterna ligger i bokdelar/ och är fri redigeringsyta. De hör
// inte till kursplanestyrt innehåll och ligger därför inte under content/,
// som enligt CLAUDE.md bara rymmer avsnitt och kapitelavslutningar.
//
// Typografin kommer ur scripts/bok-reference.docx (byggs av
// scripts/make-bok-reference.mjs): titelsida, kapitel- och avsnittsrubriker,
// sidfot med sidnummer och ingen siffra på omslaget. Innehållsförteckningen är
// ett Word-fält och är tom tills den räknas om, vilket sker automatiskt i
// npm run export:pdf och annars görs med Ctrl+A följt av F9 i Word.

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import matter from 'gray-matter';
import { statusEnum } from '../schemas/larandemal.schema.mjs';
import { allaAvsnitt, kapitel } from './bokstruktur-data.mjs';
import { sammanstallManus } from './manuscript-core.mjs';

const execFileAsync = promisify(execFile);
const root = path.dirname(fileURLToPath(import.meta.url));
const projektRoot = path.join(root, '..');
const bokDir = path.join(projektRoot, 'dist', 'bok');
const bokdelarDir = path.join(projektRoot, 'bokdelar');
const referenceDoc = path.join(root, 'bok-reference.docx');
const luaFilter = path.join(root, 'bok-filter.lua');

const MIN_STATUS = 'fardig-forsta-version';
const minStatusIdx = statusEnum.indexOf(MIN_STATUS);

const SIDBRYTNING = '::: {.page-break}\n:::\n\n';

// --------------------------------------------------------------- omvandlingar

// Bildplatshållarna står som ett stycke i löptexten på formen
//   [BILD X.Y-N] Innehåll: ... Bildtext: "..."
// I boken bryts stycket i tre delar och läggs i ett markerat block, så att
// platshållaren går att skilja från brödtexten med blotta ögat. Klamrarna
// escapas för att pandoc inte ska tolka dem som en länkreferens.
function bildblock(md) {
	return md.replace(
		/^\[BILD ([0-9.\-]+)\] Innehåll: (.*?) Bildtext: (.*)$/gm,
		(_rad, id, innehall, bildtext) =>
			[
				'::: {custom-style="Figurblock"}',
				`**\\[BILD ${id}\\]**`,
				'',
				`**Innehåll:** ${innehall.trim()}`,
				'',
				`**Bildtext:** ${bildtext.trim()}`,
				':::',
			].join('\n'),
	);
}

// Sidbrytning före varje rubrik på nivå 1, alltså varje kapitel och facitdelen.
//
// Rader i kodblock måste undantas. Kapitel 10 innehåller Python med
// kommentarrader som börjar med nummertecken, och en enkel radregex skulle
// stoppa in en sidbrytningsmarkör mitt i koden, där den blir synlig text i
// boken. Samma undantag görs i manuscript-core.mjs för rubriksänkningen.
function sidbrytPerKapitel(md) {
	let inCodeBlock = false;
	return md
		.split('\n')
		.map((line) => {
			if (/^(```|~~~)/.test(line)) inCodeBlock = !inCodeBlock;
			if (inCodeBlock) return line;
			return line.replace(/^# /, `${SIDBRYTNING}# `);
		})
		.join('\n');
}

// ------------------------------------------------------------ sammanställning

const { manuscript, exporterade, inkluderade, saknadeFiler } = await sammanstallManus({ minStatusIdx });

if (saknadeFiler.length > 0) {
	console.error(`✗ ${saknadeFiler.length} planerade avsnitt saknar fil: ${saknadeFiler.join(', ')} — kör npm run validate.`);
	process.exit(1);
}
if (exporterade === 0) {
	console.log(`Inget avsnitt har nått status ${MIN_STATUS} ännu — ingen bok att bygga.`);
	process.exit(0);
}

const [titelsida, forord, baksidestext] = await Promise.all(
	['titelsida.md', 'forord.md', 'baksidestext.md'].map((f) => readFile(path.join(bokdelarDir, f), 'utf8')),
);

const bokMd = [
	titelsida.trim(),
	'',
	SIDBRYTNING,
	'::: {custom-style="Delrubrik"}',
	'Innehåll',
	':::',
	'',
	'::: {.toc-field}',
	':::',
	'',
	SIDBRYTNING,
	'# Förord',
	'',
	forord.trim(),
	'',
	sidbrytPerKapitel(bildblock(manuscript)).trim(),
	'',
	SIDBRYTNING,
	'::: {custom-style="Delrubrik"}',
	'Baksidestext',
	':::',
	'',
	baksidestext.trim(),
	'',
].join('\n');

await mkdir(bokDir, { recursive: true });
const mdPath = path.join(bokDir, 'teknik-niva-1-och-2.md');
await writeFile(mdPath, bokMd, 'utf8');

const docxPath = path.join(bokDir, 'teknik-niva-1-och-2.docx');
await execFileAsync('pandoc', [
	mdPath,
	'-o', docxPath,
	'--from', 'markdown',
	'--reference-doc', referenceDoc,
	'--lua-filter', luaFilter,
	'-M', 'lang=sv',
], { maxBuffer: 64 * 1024 * 1024 });

console.log(`Bok byggd (${exporterade} avsnitt ur ${kapitel.length} kapitel) →`);
console.log(`  ${path.relative(process.cwd(), docxPath)}`);
console.log('Obs: uppdatera innehållsförteckningen i Word med Ctrl+A och därefter F9.');

// ------------------------------------------------------------ efterkontroller

const fel = [];
const ok = [];
function kontroll(namn, villkor, detalj = '') {
	if (villkor) ok.push(namn);
	else fel.push(`${namn}${detalj ? ` — ${detalj}` : ''}`);
}

// Förväntad mängd, oberoende av kärnan: planen (06) filtrerad på status direkt
// ur källfilerna, samma grepp som granskningsexporten använder.
const forvantade = [];
for (const p of allaAvsnitt()) {
	if (p.type) continue;
	const raw = await readFile(path.join(projektRoot, 'content', p.relPath), 'utf8');
	const { data } = matter(raw);
	if (statusEnum.indexOf(data.status) >= minStatusIdx) forvantade.push({ id: p.id, titel: p.titel });
}

kontroll(
	'Alla kvalificerade avsnitt ingår, inga andra, i bokstrukturens ordning (källnivå)',
	JSON.stringify(inkluderade.map((l) => l.id)) === JSON.stringify(forvantade.map((f) => f.id)),
	`väntade ${forvantade.length}, fick ${inkluderade.length}`,
);

function inlinesTillText(inlines) {
	let s = '';
	for (const il of inlines) {
		if (il.t === 'Str') s += il.c;
		else if (il.t === 'Space' || il.t === 'SoftBreak') s += ' ';
		else if (il.c && Array.isArray(il.c)) s += inlinesTillText(il.c.find(Array.isArray) ?? []);
	}
	return s;
}

const { stdout: astJson } = await execFileAsync('pandoc', [docxPath, '--from', 'docx', '--to', 'json'], { maxBuffer: 64 * 1024 * 1024 });
const ast = JSON.parse(astJson);
const rubriker = (niva) => ast.blocks.filter((b) => b.t === 'Header' && b.c[0] === niva).map((b) => inlinesTillText(b.c[2]).trim());

const avsnittsrubriker = rubriker(2).filter((t) => /^\d+\.\d+\s/.test(t));
const forvantadeTitlar = forvantade.map((f) => `${f.id} ${f.titel}`);
kontroll('Word innehåller alla avsnitt i rätt ordning', JSON.stringify(avsnittsrubriker) === JSON.stringify(forvantadeTitlar),
	`väntade ${forvantadeTitlar.length} rubriker, fick ${avsnittsrubriker.length}`);

const nivå1 = rubriker(1);
kontroll('Förordet finns som egen del', nivå1.includes('Förord'));
kontroll('Facit finns som egen del', nivå1.includes('Facit'));
kontroll(`Samtliga ${kapitel.length} kapitel finns som egna delar`,
	kapitel.every((k) => nivå1.some((t) => t.startsWith(`Kapitel ${k.nr} `))),
	`hittade ${nivå1.length} delar på nivå 1`);

const { stdout: plain } = await execFileAsync('pandoc', [docxPath, '--from', 'docx', '--to', 'plain'], { maxBuffer: 64 * 1024 * 1024 });

const bilderIKallan = (manuscript.match(/^\[BILD /gm) ?? []).length;
const bilderIBoken = (plain.match(/\[BILD /g) ?? []).length;
kontroll(`Alla ${bilderIKallan} bildplatshållare följde med`, bilderIBoken === bilderIKallan, `fick ${bilderIBoken}`);

kontroll('Baksidestexten finns med', plain.includes('Baksidestext'));
kontroll('Inga råa shortcodes', !/\[\[(figur|begrepp):/.test(plain));

const lackor = [
	/^---\s*$/m,
	/\bconcepts_introduced\b/, /\bconcepts_used\b/,
	/\bprerequisites\b/, /\bcurriculumReferences\b/, /\bniva1\b/, /\bniva2\b/,
	/\blearningGoals\b/, /\babilities\b/, /\bsectionNumber\b/,
	/\bfardig-forsta-version\b/, /\bunder-utveckling\b/, /\bej-paborjad\b/,
	/\bfackgranskad\b/, /\bsprakgranskad\b/,
].filter((re) => re.test(plain));
kontroll('Ingen produktionsmetadata utöver bildplatshållarna', lackor.length === 0, lackor.map((r) => r.source).join(', '));

const docxBuf = await readFile(docxPath);
kontroll('Word-filen har giltig ZIP-signatur', docxBuf.length > 4 && docxBuf.readUInt32LE(0) === 0x04034b50);
kontroll('Word-filen kan läsas tillbaka med Pandoc', plain.length > 1000);
// Sidnumreringen ligger i sidfoten, som pandoc tar med ur reference-dokumentet.
// Filnamnen i en zip står okomprimerade i posthuvudena och går därför att söka
// direkt i bufferten, till skillnad från dokumentets XML.
kontroll('Sidfot med sidnummer följde med i dokumentet', docxBuf.includes('footer1.xml'));

// TOC-fältet är rå OpenXML. Dess platshållartext ligger däremot i fältets
// resultatdel och läses tillbaka av pandoc, vilket samtidigt bevisar att
// lua-filtret körde på docx-målet.
kontroll('Innehållsförteckningen finns som Word-fält', plain.includes('Uppdatera innehållsförteckningen'));

// Sidbrytningarna går samma väg genom filtret som TOC-fältet. De räknas därför
// i den genererade markdownen: en före varje kapitel, en före facit och tre
// kring för- och eftertexterna.
const forvantadeBrytningar = kapitel.length + 1 + 3;
const brytningar = (bokMd.match(/^::: \{\.page-break\}$/gm) ?? []).length;
kontroll(`Sidbrytning före varje kapitel, facit och eftertexterna (${forvantadeBrytningar} st)`,
	brytningar === forvantadeBrytningar, `fick ${brytningar}`);

console.log('\nEfterkontroller:');
for (const n of ok) console.log(`  ✓ ${n}`);
for (const f of fel) console.log(`  ✗ ${f}`);
if (fel.length > 0) {
	console.error(`\n${fel.length} kontroll(er) föll — bokexporten är INTE giltig.`);
	process.exit(1);
}
console.log('\nSamtliga efterkontroller passerade.');
