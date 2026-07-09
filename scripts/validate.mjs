// Tvärgående valideringar som inte kan uttryckas i ett per-fil Zod-schema:
// synk mellan bokstruktur och content/, begreppsunikhet, figur-ID,
// förkunskapsordning, kursplantaggning samt status- och täckningsöversikt.
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
import { larandemalRequiredSchema } from '../schemas/larandemal.schema.mjs';
import { allaLarandemal } from './bokstruktur-data.mjs';
import { kursplanKategorier, niva1, niva2 } from './kursplan-data.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, '..', 'content');
const figuresRegistryPath = path.join(root, '..', 'figures', 'registry.yml');

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
	const { data } = matter(raw);
	const relPath = path.relative(contentDir, file).replaceAll(path.sep, '/');

	if (data.id === undefined) continue; // strukturell sida, inte lärandemål

	const result = larandemalRequiredSchema.safeParse(data);
	if (!result.success) {
		errors.push(`${relPath}: ogiltig metadata — ${result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`);
		continue;
	}
	larandemal.push({ file: relPath, ...result.data });
}

// Synk mellan bokstruktur (06 via bokstruktur-data.mjs) och content/.
// Bokstrukturen är målskelettet: varje planerat lärandemål ska ha en fil,
// och varje lärandemålsfil ska finnas i planen. Delas/slås lärandemål ihop
// under produktionen uppdateras 06 + bokstruktur-data.mjs i samma steg.
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
	if (lm.chapter !== p.chapter || lm.module !== p.module) {
		errors.push(`${lm.file}: chapter/module (${lm.chapter}/${lm.module}) stämmer inte med bokstrukturen (${p.chapter}/${p.module}).`);
	}
	if (lm.title !== p.titel) {
		warnings.push(`${lm.file}: titeln "${lm.title}" avviker från bokstrukturens "${p.titel}" — uppdatera 06-bokstruktur.md + bokstruktur-data.mjs eller filen.`);
	}
	if (lm.goal !== p.mal) {
		warnings.push(`${lm.file}: målformuleringen avviker från bokstrukturens — uppdatera 06-bokstruktur.md + bokstruktur-data.mjs eller filen.`);
	}
	if (lm.uppslag !== p.uppslag) {
		warnings.push(`${lm.file}: uppslag (${lm.uppslag}) avviker från bokstrukturens (${p.uppslag}).`);
	}
}

for (const lm of larandemal) {
	if (!planById.has(lm.id)) {
		errors.push(`${lm.file}: lärandemålet ${lm.id} finns inte i bokstrukturen — uppdatera 06-bokstruktur.md + bokstruktur-data.mjs (målskelettet styr).`);
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

// Kursplanetaggning (kontrollerat vokabulär från kursplan-data.mjs, som speglar 07)
for (const lm of larandemal) {
	for (const niva of ['niva1', 'niva2']) {
		for (const tag of lm.curriculum[niva] ?? []) {
			if (!kursplanKategorier.includes(tag)) {
				errors.push(`${lm.file}: okänd kursplankategori "${tag}" i curriculum.${niva}. Giltiga kategorier: ${kursplanKategorier.join(', ')}.`);
			}
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

// Kursplanetäckningsöversikt: för varje punkt i centralt innehåll, hur många
// lärandemål i punktens primärkapitel är taggade med punktens kategori och
// påbörjade? Informativ rapport — 07 förblir den redaktionella auktoriteten.
function tackningsrad(punkt, nivaKey) {
	const traffar = larandemal.filter(
		(lm) => lm.chapter === punkt.primar && (lm.curriculum[nivaKey] ?? []).includes(punkt.kategori) && lm.status !== 'ej-paborjad',
	);
	return `  ${traffar.length > 0 ? '●' : '·'} [kap ${String(punkt.primar).padStart(2)}] ${punkt.text.slice(0, 90)}${punkt.text.length > 90 ? '…' : ''} (${traffar.length} lärandemål)`;
}
console.log('Kursplanetäckning (påbörjade lärandemål taggade i punktens primärkapitel):');
console.log(' Nivå 1:');
for (const punkt of niva1) console.log(tackningsrad(punkt, 'niva1'));
console.log(' Nivå 2:');
for (const punkt of niva2) console.log(tackningsrad(punkt, 'niva2'));
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
