// Tvärgående valideringar som inte kan uttryckas i ett per-fil Zod-schema:
// synk mellan bokstruktur (06) och content/, begreppsunikhet, figur-ID,
// förkunskapsordning, kursplantaggning (punkt-id), statusstyrda innehålls-
// kontroller samt status- och täckningsöversikt.
// Körs som "prebuild" innan webbplatsen byggs (se site/package.json) och kan
// köras fristående med `npm run validate`.
//
// Skriptet avgör vad som är en "riktig" lärandemålsfil genom att den har ett
// "id"-fält i sin frontmatter. Strukturella sidor (index.md, kapitelöversikter)
// saknar "id" och hoppas över.

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import YAML from 'yaml';
import { larandemalRequiredSchema, statusEnum } from '../schemas/larandemal.schema.mjs';
import { allaLarandemal } from './bokstruktur-data.mjs';
import { niva1, niva2, syftesmal, allaPunkter } from './kursplan-data.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, '..', 'content');
const figuresRegistryPath = path.join(root, '..', 'figures', 'registry.yml');

// Statusnivå från vilken de statusstyrda innehållskontrollerna gäller.
const GRANSKNINGSSTATUS = statusEnum.indexOf('fardig-forsta-version');

// AI-typiska formuleringar som inte får förekomma (05-forfattarmanual.md).
const aiFraser = [
	'det är viktigt att',
	'låt oss',
	'vi ska nu',
	'i dagens samhälle',
	'som vi kommer att se',
	'det är värt att notera',
	'tänk på att',
	'sammanfattningsvis',
	'det handlar inte om',
];

let errors = [];
let warnings = [];

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	let files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files = files.concat(await walk(full));
		} else if (entry.isFile() && entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
			files.push(full);
		}
	}
	return files;
}

function idToTuple(id) {
	return id.split('.').map((n) => Number.parseInt(n, 10));
}

function compareIds(a, b) {
	const ta = idToTuple(a);
	const tb = idToTuple(b);
	for (let i = 0; i < Math.max(ta.length, tb.length); i++) {
		const diff = (ta[i] ?? 0) - (tb[i] ?? 0);
		if (diff !== 0) return diff;
	}
	return 0;
}

const files = await walk(contentDir);
const larandemal = [];

for (const file of files) {
	const raw = await readFile(file, 'utf8');
	const { data, content } = matter(raw);
	const relPath = path.relative(contentDir, file).replaceAll(path.sep, '/');

	if (data.id === undefined) continue; // strukturell sida, inte lärandemål

	const result = larandemalRequiredSchema.safeParse(data);
	if (!result.success) {
		errors.push(`${relPath}: ogiltig metadata — ${result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`);
		continue;
	}
	larandemal.push({ file: relPath, body: content, ...result.data });
}

// Synk mellan bokstruktur (06, tolkad av bokstruktur-data.mjs) och content/.
// 06 är målskelettet och enda källan: varje planerat lärandemål ska ha en fil
// på förväntad sökväg, och varje lärandemålsfil ska finnas i planen.
const plan = allaLarandemal();
const planById = new Map(plan.map((p) => [p.id, p]));
const filesById = new Map(larandemal.map((lm) => [lm.id, lm]));

for (const [id, dup] of Object.entries(
	larandemal.reduce((acc, lm) => ((acc[lm.id] ??= []).push(lm.file), acc), {}),
)) {
	if (dup.length > 1) {
		errors.push(`Lärandemåls-id "${id}" används av flera filer: ${dup.join(', ')}.`);
	}
}

for (const p of plan) {
	const lm = filesById.get(p.id);
	if (!lm) {
		errors.push(`Planerat lärandemål ${p.id} "${p.titel}" saknar fil (${p.relPath}) — kör \`npm run skeleton\`.`);
		continue;
	}
	if (lm.file !== p.relPath) {
		errors.push(`${lm.file}: fel sökväg för ${p.id} — ska vara ${p.relPath} (byt namn på filen/mappen).`);
	}
	if (lm.chapter !== p.chapter || lm.module !== p.module) {
		errors.push(`${lm.file}: chapter/module (${lm.chapter}/${lm.module}) stämmer inte med bokstrukturen (${p.chapter}/${p.module}).`);
	}
	if (lm.title !== p.titel) {
		warnings.push(`${lm.file}: titeln "${lm.title}" avviker från bokstrukturens "${p.titel}" — uppdatera 06-bokstruktur.md eller filen.`);
	}
	if (lm.goal !== p.mal) {
		warnings.push(`${lm.file}: målformuleringen avviker från bokstrukturens — uppdatera 06-bokstruktur.md eller filen.`);
	}
	if (lm.uppslag !== p.uppslag) {
		warnings.push(`${lm.file}: uppslag (${lm.uppslag}) avviker från bokstrukturens (${p.uppslag}).`);
	}
}

for (const lm of larandemal) {
	if (!planById.has(lm.id)) {
		errors.push(`${lm.file}: lärandemålet ${lm.id} finns inte i bokstrukturen — uppdatera 06-bokstruktur.md (målskelettet styr).`);
	}
}

// Begreppsunikhet
const conceptOwners = new Map();
for (const lm of larandemal) {
	for (const concept of lm.concepts_introduced) {
		if (conceptOwners.has(concept)) {
			errors.push(`Begreppet "${concept}" introduceras i både ${conceptOwners.get(concept)} och ${lm.file} — ska bara ha ett huvudställe (11-begreppsfilosofi.md).`);
		} else {
			conceptOwners.set(concept, lm.file);
		}
	}
}

// Begrepp som används utan att introduceras någonstans (varning: huvudstället
// kan vara planerat men ännu inte skrivet).
for (const lm of larandemal) {
	for (const concept of lm.concepts_used) {
		if (!conceptOwners.has(concept)) {
			warnings.push(`${lm.file}: använder begreppet "${concept}" som inte introduceras (concepts_introduced) i någon fil ännu.`);
		}
	}
}

// Figur-ID
let figureRegistry = {};
try {
	figureRegistry = YAML.parse(await readFile(figuresRegistryPath, 'utf8')) || {};
} catch {
	warnings.push('Kunde inte läsa figures/registry.yml — hoppar över figurkontroll.');
}
const usedFigures = new Set();
for (const lm of larandemal) {
	for (const figId of lm.figures) {
		usedFigures.add(figId);
		if (!figureRegistry[figId]) {
			errors.push(`${lm.file}: refererar figur "${figId}" som saknas i figures/registry.yml.`);
		}
	}
}
for (const figId of Object.keys(figureRegistry)) {
	if (!usedFigures.has(figId)) {
		warnings.push(`figures/registry.yml: figur "${figId}" är registrerad men refereras av ingen lärandemålsfil.`);
	}
}

// Förkunskapsordning
const byId = new Map(larandemal.map((lm) => [lm.id, lm]));
for (const lm of larandemal) {
	for (const prereqId of lm.prerequisites) {
		const prereq = byId.get(prereqId);
		if (!prereq) {
			warnings.push(`${lm.file}: förkunskapen "${prereqId}" finns inte som lärandemål ännu.`);
			continue;
		}
		if (compareIds(prereqId, lm.id) >= 0) {
			errors.push(`${lm.file}: anger "${prereqId}" som förkunskap, men den ligger inte tidigare i läsordningen (04-redaktionsprinciper.md §10).`);
		}
	}
}

// Kursplantaggning: taggar är punkt-id:n (n1-xx/n2-xx/s-01) enligt 07 och
// kursplan-data.mjs. Syftesmål (s-xx) är giltiga på båda nivåerna.
const punkter = allaPunkter();
const giltigaTaggar = {
	niva1: new Set([...niva1.map((p) => p.id), ...syftesmal.map((p) => p.id)]),
	niva2: new Set([...niva2.map((p) => p.id), ...syftesmal.map((p) => p.id)]),
};
for (const lm of larandemal) {
	for (const niva of ['niva1', 'niva2']) {
		for (const tag of lm.curriculum[niva] ?? []) {
			if (!giltigaTaggar[niva].has(tag)) {
				errors.push(`${lm.file}: okänt punkt-id "${tag}" i curriculum.${niva}. Giltiga id:n finns i 07-kursplanetackning.md / scripts/kursplan-data.mjs.`);
				continue;
			}
			const punkt = punkter.get(tag);
			const kapitelOk =
				punkt.primar === lm.chapter ||
				punkt.berors.includes(lm.chapter) ||
				punkt.berors.includes('löpande');
			if (!kapitelOk) {
				warnings.push(`${lm.file}: taggen ${tag} hör hemma i kapitel ${punkt.primar} (berörs: ${punkt.berors.join(', ') || '—'}) — kapitel ${lm.chapter} finns inte i 07:s matris för punkten.`);
			}
		}
	}
}

// Statusstyrda innehållskontroller: från fardig-forsta-version och uppåt ska
// filen uppfylla de mekaniskt kontrollerbara delarna av 09-kvalitetssakring.md.
for (const lm of larandemal) {
	if (statusEnum.indexOf(lm.status) < GRANSKNINGSSTATUS) continue;
	const beskr = `${lm.file} (status ${lm.status})`;

	for (const rubrik of ['Förstå', 'Utveckla', 'Utmana']) {
		if (!new RegExp(`^#{2,4}\\s+${rubrik}\\b`, 'm').test(lm.body)) {
			errors.push(`${beskr}: uppgiftsdelen "${rubrik}" saknas (03-bokens-arkitektur.md, "Aktiv bearbetning").`);
		}
	}
	if (lm.body.includes('<!--')) {
		errors.push(`${beskr}: HTML-kommentar kvar i texten — arbetsanteckningar får inte finnas i granskningsklart innehåll (09).`);
	}
	if (/\bTODO\b/.test(lm.body)) {
		errors.push(`${beskr}: "TODO" kvar i texten.`);
	}
	if ((lm.curriculum.niva1?.length ?? 0) + (lm.curriculum.niva2?.length ?? 0) === 0) {
		errors.push(`${beskr}: curriculum är tomt — tagga med punkt-id från 07 innan status höjs.`);
	}
	if (lm.figures.length === 0) {
		warnings.push(`${beskr}: inga figurer — kontrollera att detta är ett medvetet beslut (03: "minst en figur när den förbättrar förståelsen").`);
	}
	const bodyLower = lm.body.toLowerCase();
	for (const fras of aiFraser) {
		if (bodyLower.includes(fras)) {
			warnings.push(`${beskr}: AI-typisk formulering "${fras}" förekommer (05-forfattarmanual.md, "AI-språk som ska undvikas").`);
		}
	}
}

// Statusöversikt (totalt och per kapitel)
const statusCount = {};
const chapterStatus = new Map();
for (const lm of larandemal) {
	statusCount[lm.status] = (statusCount[lm.status] ?? 0) + 1;
	if (!chapterStatus.has(lm.chapter)) chapterStatus.set(lm.chapter, { totalt: 0, klara: 0, paborjade: 0 });
	const cs = chapterStatus.get(lm.chapter);
	cs.totalt++;
	if (lm.status === 'klar') cs.klara++;
	if (lm.status !== 'ej-paborjad') cs.paborjade++;
}

console.log(`Kontrollerade ${larandemal.length} lärandemålsfiler av ${files.length} markdown-filer totalt (${plan.length} lärandemål i bokstrukturen).\n`);

if (larandemal.length > 0) {
	console.log('Statusöversikt:');
	for (const [status, count] of Object.entries(statusCount)) {
		console.log(`  ${status}: ${count}`);
	}
	console.log('\nPer kapitel (påbörjade/klara av totalt):');
	for (const [chapter, cs] of [...chapterStatus.entries()].sort((a, b) => a[0] - b[0])) {
		console.log(`  Kapitel ${chapter}: ${cs.paborjade} påbörjade, ${cs.klara} klara av ${cs.totalt}`);
	}
	console.log('');
}

// Kursplanetäckningsöversikt per punkt: antal påbörjade lärandemål taggade med
// punktens id, uppdelat på primärkapitlet och övriga kapitel. Informativ
// rapport — 07 förblir den redaktionella auktoriteten.
function tackningsrad(punkt, nivaKey) {
	const taggade = larandemal.filter((lm) => {
		const taggar = nivaKey === 'bada' ? [...(lm.curriculum.niva1 ?? []), ...(lm.curriculum.niva2 ?? [])] : (lm.curriculum[nivaKey] ?? []);
		return taggar.includes(punkt.id) && lm.status !== 'ej-paborjad';
	});
	const primar = taggade.filter((lm) => lm.chapter === punkt.primar).length;
	const ovriga = taggade.length - primar;
	const symbol = primar > 0 ? '●' : taggade.length > 0 ? '◐' : '·';
	return `  ${symbol} ${punkt.id} [kap ${String(punkt.primar).padStart(2)}] ${punkt.text.slice(0, 80)}${punkt.text.length > 80 ? '…' : ''} (${primar} i primärkapitlet${ovriga > 0 ? `, ${ovriga} övriga` : ''})`;
}
console.log('Kursplanetäckning (påbörjade lärandemål per punkt; ● = täckt i primärkapitlet, ◐ = endast i övriga):');
console.log(' Nivå 1:');
for (const punkt of niva1) console.log(tackningsrad(punkt, 'niva1'));
console.log(' Nivå 2:');
for (const punkt of niva2) console.log(tackningsrad(punkt, 'niva2'));
console.log(' Syftesmål:');
for (const punkt of syftesmal) console.log(tackningsrad(punkt, 'bada'));
console.log('');

if (warnings.length > 0) {
	console.log(`Varningar (${warnings.length}):`);
	for (const w of warnings) console.log(`  ⚠ ${w}`);
	console.log('');
}

if (errors.length > 0) {
	console.log(`Fel (${errors.length}):`);
	for (const e of errors) console.log(`  ✗ ${e}`);
	console.log('');
	console.error('Validering misslyckades.');
	process.exit(1);
}

console.log('Validering OK.');
