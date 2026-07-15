// Redaktionell granskningsexport: bygger hela manuset som ett sammanhängande
// läsdokument i två format ur exakt samma sammanställning i samma körning:
//
//   dist/review/granskningsmanus.docx   (Word: titelblad, TOC-fält, sidnummer,
//                                        sidbrytning per avsnitt, Figurblock-stil)
//   dist/review/granskningsmanus.html   (fristående fil, inbäddad CSS, klickbar
//                                        TOC, print-stylesheet)
//
//   npm run export:review
//
// Endast avsnitt med status fardig-forsta-version eller högre ingår, i
// kanonisk ordning ur 06 (via manuscript-core.mjs — samma kärna som
// npm run export). Körningen avslutas med automatiska efterkontroller och
// felar om någon av dem inte håller. Obs: Words innehållsförteckning är ett
// fält — uppdatera med Ctrl+A följt av F9 vid första öppningen.

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import matter from 'gray-matter';
import { statusEnum } from '../schemas/larandemal.schema.mjs';
import { allaAvsnitt } from './bokstruktur-data.mjs';
import { sammanstallManus } from './manuscript-core.mjs';

const execFileAsync = promisify(execFile);
const root = path.dirname(fileURLToPath(import.meta.url));
const projektRoot = path.join(root, '..');
const reviewDir = path.join(projektRoot, 'dist', 'review');
const referenceDoc = path.join(root, 'review-reference.docx');
const luaFilter = path.join(root, 'review-filter.lua');

const MIN_STATUS = 'fardig-forsta-version';
const minStatusIdx = statusEnum.indexOf(MIN_STATUS);

// ------------------------------------------------------------ sammanställning

// Figurplatshållare som markerat figurblock: klassen styr HTML-CSS:en och
// custom-style pekar på styckestilen i review-reference.docx.
function reviewFigurBlock(figId, fig) {
	if (!fig) return `\n\n::: {.figurblock custom-style="Figurblock"}\n**[FIGUR SAKNAS: ${figId}]**\n:::\n\n`;
	const falt = [
		`**Figur ${figId}**`,
		`**Syfte:** ${fig.syfte ?? ''}`,
		`**Innehåll:** ${fig.innehall ?? ''}`,
		fig.referens ? `**Referens i texten:** ${fig.referens}` : null,
		fig.pedagogisk_funktion ? `**Pedagogisk funktion:** ${fig.pedagogisk_funktion}` : null,
	].filter(Boolean);
	return `\n\n::: {.figurblock custom-style="Figurblock"}\n${falt.join('\n\n')}\n:::\n\n`;
}

const { manuscript, exporterade, inkluderade, saknadeFiler } = await sammanstallManus({
	minStatusIdx,
	figurBlock: reviewFigurBlock,
	avsnittPrefix: '::: {.page-break}\n:::\n\n',
});

if (saknadeFiler.length > 0) {
	console.error(`✗ ${saknadeFiler.length} planerade avsnitt saknar fil: ${saknadeFiler.join(', ')} — kör npm run validate.`);
	process.exit(1);
}
if (exporterade === 0) {
	console.log(`Inget avsnitt har nått status ${MIN_STATUS} ännu — inget granskningsmanus att bygga.`);
	process.exit(0);
}

const datum = new Date().toISOString().slice(0, 10);
const titel = 'Teknik nivå 1 och 2';
const undertitel = 'Redaktionellt granskningsmanus (arbetsmaterial)';
const datumrad = `Genererat ${datum} · ${exporterade} avsnitt med status färdig första version eller högre`;

await mkdir(reviewDir, { recursive: true });
const mdPath = path.join(reviewDir, 'granskningsmanus.md');
await writeFile(mdPath, manuscript.trim() + '\n', 'utf8');

// ---------------------------------------------------------------- rendering

const htmlCssPath = path.join(reviewDir, '.review-head.html');
await writeFile(
	htmlCssPath,
	`<style>
:root { color-scheme: light; }
body { max-width: 46rem; margin: 0 auto; padding: 2rem 1.5rem 6rem;
  font-family: Georgia, 'Times New Roman', serif; font-size: 1.05rem;
  line-height: 1.6; color: #1a1a1a; background: #fff; }
header#title-block-header { text-align: center; margin: 3rem 0 4rem; }
header#title-block-header .subtitle { color: #555; }
header#title-block-header .date { color: #777; font-size: 0.95rem; }
h1 { font-size: 1.7rem; margin-top: 4rem; border-bottom: 2px solid #333; padding-bottom: 0.3rem; }
h2 { font-size: 1.35rem; margin-top: 3rem; color: #222; }
h3 { font-size: 1.2rem; margin-top: 2.5rem; }
h4 { font-size: 1.05rem; margin-top: 1.8rem; }
nav#TOC { background: #f7f7f5; border: 1px solid #ddd; border-radius: 6px;
  padding: 1rem 1.5rem; margin: 0 0 3rem; }
nav#TOC > ul { padding-left: 1rem; }
nav#TOC a { text-decoration: none; color: #234; }
nav#TOC a:hover { text-decoration: underline; }
.figurblock { border: 1px solid #999; background: #f2f2f2; border-radius: 4px;
  padding: 0.8rem 1.1rem; margin: 1.4rem 0; font-size: 0.95rem; }
.figurblock p { margin: 0.3rem 0; }
table { border-collapse: collapse; margin: 1.2rem 0; }
th, td { border: 1px solid #bbb; padding: 0.35rem 0.7rem; }
ol { padding-left: 1.4rem; }
@media print {
  body { max-width: none; padding: 0; font-size: 11pt; }
  nav#TOC { display: none; }
  .page-break { break-before: page; page-break-before: always; }
  .figurblock { break-inside: avoid; page-break-inside: avoid; }
  a { color: inherit; text-decoration: none; }
}
</style>`,
	'utf8',
);

const gemensamt = [
	'--from', 'markdown',
	'--lua-filter', luaFilter,
	'--toc', '--toc-depth=3',
	'-M', `title=${titel}`,
	'-M', `subtitle=${undertitel}`,
	'-M', `date=${datumrad}`,
	'-M', 'lang=sv',
];

const docxPath = path.join(reviewDir, 'granskningsmanus.docx');
await execFileAsync('pandoc', [mdPath, '-o', docxPath, '--reference-doc', referenceDoc, ...gemensamt]);

const htmlPath = path.join(reviewDir, 'granskningsmanus.html');
await execFileAsync('pandoc', [mdPath, '-o', htmlPath, '--standalone', '--include-in-header', htmlCssPath, ...gemensamt]);

console.log(`Granskningsmanus byggt (${exporterade} avsnitt) →`);
console.log(`  ${path.relative(process.cwd(), docxPath)}`);
console.log(`  ${path.relative(process.cwd(), htmlPath)}`);
console.log('Obs: uppdatera Words innehållsförteckning med Ctrl+A och därefter F9.');

// ------------------------------------------------------------ efterkontroller

const fel = [];
const ok = [];

function kontroll(namn, villkor, detalj = '') {
	if (villkor) ok.push(namn);
	else fel.push(`${namn}${detalj ? ` — ${detalj}` : ''}`);
}

// Förväntad mängd, oberoende av kärnan: planen (06) filtrerad på status
// direkt ur källfilerna. Kapitelavslutningar (type) räknas inte som avsnitt
// här — sammanstallManus() lägger bara riktiga avsnitt i "inkluderade".
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
	`väntade [${forvantade.map((f) => f.id).join(', ')}], fick [${inkluderade.map((l) => l.id).join(', ')}]`,
);

// Läs tillbaka båda utfilerna med Pandoc och extrahera avsnittsrubrikerna
// (nivå 2 — kapitel(#) → avsnitt(##) → delavsnitt(###)) ur dokumentens AST —
// HTML analyseras som HTML, Word som Word.
function inlinesTillText(inlines) {
	let s = '';
	for (const il of inlines) {
		if (il.t === 'Str') s += il.c;
		else if (il.t === 'Space' || il.t === 'SoftBreak') s += ' ';
		else if (il.c && Array.isArray(il.c)) s += inlinesTillText(il.c.find(Array.isArray) ?? []);
	}
	return s;
}

// Nivå 2 = avsnitt OCH kapitelavslutningar (båda infogas som ## av
// manuscript-core.mjs). Avsnitt har alltid en numrerad rubrik ("1.1 Titel");
// kapitelavslutningarna (Sammanfattning/Begrepp/Praktiska uppgifter och
// projekt) har det aldrig — det skiljer dem åt utan att läsa frontmatter.
async function rubrikerAvsnitt(fil, format) {
	const { stdout } = await execFileAsync('pandoc', [fil, '--from', format, '--to', 'json'], { maxBuffer: 64 * 1024 * 1024 });
	const ast = JSON.parse(stdout);
	return ast.blocks
		.filter((b) => b.t === 'Header' && b.c[0] === 2)
		.map((b) => inlinesTillText(b.c[2]).trim())
		.filter((titel) => /^\d+\.\d+\s/.test(titel));
}

const docxRubriker = await rubrikerAvsnitt(docxPath, 'docx');
const htmlRubriker = await rubrikerAvsnitt(htmlPath, 'html');
const forvantadeTitlar = forvantade.map((f) => `${f.id} ${f.titel}`);

kontroll('Word innehåller alla avsnitt i rätt ordning', JSON.stringify(docxRubriker) === JSON.stringify(forvantadeTitlar),
	`väntade ${forvantadeTitlar.length} rubriker, fick ${docxRubriker.length}`);
kontroll('HTML innehåller alla avsnitt i rätt ordning', JSON.stringify(htmlRubriker) === JSON.stringify(forvantadeTitlar),
	`väntade ${forvantadeTitlar.length} rubriker, fick ${htmlRubriker.length}`);
kontroll('Word och HTML innehåller samma avsnitt', JSON.stringify(docxRubriker) === JSON.stringify(htmlRubriker));
kontroll(`Antal avsnitt i utfilerna är ${forvantade.length}`, docxRubriker.length === forvantade.length && htmlRubriker.length === forvantade.length);

// Råtext ur båda formaten för shortcode- och fältkontrollerna.
const { stdout: docxPlain } = await execFileAsync('pandoc', [docxPath, '--from', 'docx', '--to', 'plain'], { maxBuffer: 64 * 1024 * 1024 });
const { stdout: htmlPlain } = await execFileAsync('pandoc', [htmlPath, '--from', 'html', '--to', 'plain'], { maxBuffer: 64 * 1024 * 1024 });

for (const [namn, text] of [['Word', docxPlain], ['HTML', htmlPlain]]) {
	kontroll(`${namn}: inga råa shortcodes`, !/\[\[(figur|begrepp):/.test(text));
	// Riktade fältkontroller: frontmattern tas bort redan i parsersteget
	// (gray-matter), så det här är en sista spärr mot konkreta fältnamn och
	// statusvärden — inte breda mönster som kan träffa brödtext.
	const lackor = [
		/^---\s*$/m,
		/\bconcepts_introduced\b/, /\bconcepts_used\b/,
		/\bprerequisites\b/, /\bcurriculumReferences\b/, /\bniva1\b/, /\bniva2\b/,
		/\blearningGoals\b/, /\babilities\b/, /\bsectionNumber\b/,
		/\bfardig-forsta-version\b/, /\bunder-utveckling\b/, /\bej-paborjad\b/,
		/\bfackgranskad\b/, /\bsprakgranskad\b/,
	].filter((re) => re.test(text));
	kontroll(`${namn}: inga frontmatter- eller produktionsfält`, lackor.length === 0, lackor.map((r) => r.source).join(', '));
}

const docxBuf = await readFile(docxPath);
kontroll('Word-filen har giltig ZIP-signatur', docxBuf.length > 4 && docxBuf.readUInt32LE(0) === 0x04034b50);
kontroll('Word-filen kan läsas tillbaka med Pandoc', docxPlain.length > 1000);

const htmlText = await readFile(htmlPath, 'utf8');
kontroll('HTML-filen är komplett (doctype, body och avslutande html-tagg)',
	/^<!DOCTYPE html>/i.test(htmlText.trim()) && /<body[\s>]/i.test(htmlText) && /<\/html>\s*$/i.test(htmlText.trim()));

console.log('\nEfterkontroller:');
for (const n of ok) console.log(`  ✓ ${n}`);
for (const f of fel) console.log(`  ✗ ${f}`);
if (fel.length > 0) {
	console.error(`\n${fel.length} kontroll(er) föll — granskningsexporten är INTE giltig.`);
	process.exit(1);
}
console.log('\nSamtliga efterkontroller passerade.');
