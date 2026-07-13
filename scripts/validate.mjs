// Tvärgående valideringar som inte kan uttryckas i ett per-fil Zod-schema:
// synk mellan bokstruktur (06) och content/, begreppsunikhet, figur-ID,
// förkunskapsordning, kursplantaggning (punkt-id), statusstyrda innehålls-
// kontroller, kapitelavslutningar (begreppsövning/uppgiftsbank mot manifest)
// samt status- och täckningsöversikt.
// Körs som "prebuild" innan webbplatsen byggs (se site/package.json) och kan
// köras fristående med `npm run validate`.
//
// Filtyp avgörs av frontmattern: "id" → lärandemål, "type" → kapitelavslutning,
// annars strukturell sida (bara index.md är tillåten).

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import YAML from 'yaml';
import {
	larandemalRequiredSchema,
	kapitelavslutningRequiredSchema,
	statusEnum,
} from '../schemas/larandemal.schema.mjs';
import { allaLarandemal } from './bokstruktur-data.mjs';
import { kapitelavslutningar, allaKapitelavslutningar } from './kapitelavslutningar-data.mjs';
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

// Extraherar texten under samtliga förekomster av en rubrik (##–####) fram
// till nästa rubrik på samma nivå eller lägre, eller filens slut.
function extractSections(body, rubrik) {
	const re = new RegExp(`^#{2,4}\\s+${rubrik}\\s*$`, 'gm');
	const sektioner = [];
	let m;
	while ((m = re.exec(body)) !== null) {
		const rest = body.slice(m.index + m[0].length);
		const next = rest.search(/^#{2,4}\s+/m);
		sektioner.push(next === -1 ? rest : rest.slice(0, next));
	}
	return sektioner;
}

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
const kapitelavslutningsFiler = []; // { file, body, relPath, ...data }

for (const file of files) {
	const raw = await readFile(file, 'utf8');
	const { data, content } = matter(raw);
	const relPath = path.relative(contentDir, file).replaceAll(path.sep, '/');

	if (data.id !== undefined) {
		const result = larandemalRequiredSchema.safeParse(data);
		if (!result.success) {
			errors.push(`${relPath}: ogiltig metadata — ${result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`);
			continue;
		}
		larandemal.push({ file: relPath, body: content, ...result.data });
		continue;
	}

	if (data.type !== undefined) {
		const result = kapitelavslutningRequiredSchema.safeParse(data);
		if (!result.success) {
			errors.push(`${relPath}: ogiltig kapitelavslutning — ${result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`);
			continue;
		}
		kapitelavslutningsFiler.push({ file: relPath, body: content, ...result.data });
		continue;
	}

	// Enda tillåtna rent strukturella sidan är startsidan.
	if (relPath !== 'index.md') {
		warnings.push(`${relPath}: sida utan "id" eller "type" — kapitel-/modulöversikter genereras av webbplatsen och filen bör tas bort.`);
	}
}

// Synk mellan bokstruktur (06, tolkad av bokstruktur-data.mjs) och content/.
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

// Begrepp som används utan att introduceras någonstans.
for (const lm of larandemal) {
	for (const concept of lm.concepts_used) {
		if (!conceptOwners.has(concept)) {
			warnings.push(`${lm.file}: använder begreppet "${concept}" som inte introduceras (concepts_introduced) i någon fil ännu.`);
		}
	}
}

// Begrepp i concepts_used ska faktiskt förekomma i brödtexten.
for (const lm of larandemal) {
	const synligBody = lm.body.replace(/<!--[\s\S]*?-->/g, '');
	const synligLower = synligBody.toLowerCase();
	for (const concept of lm.concepts_used) {
		const somShortcode = synligBody.includes(`[[begrepp:${concept}]]`);
		const iLoptext = synligLower.includes(concept.toLowerCase());
		const ord = concept.split(/\s+/);
		const stamMonster = ord
			.map((o) => o.toLowerCase().slice(0, Math.max(4, o.length - 2)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-zåäö]*')
			.join('\\s+');
		const somBojdForm = new RegExp(stamMonster).test(synligLower);
		const somForkortning =
			ord.length > 1 && new RegExp(`\\b${ord.map((o) => o[0].toUpperCase()).join('')}\\b`).test(synligBody);
		if (!somShortcode && !iLoptext && !somBojdForm && !somForkortning) {
			warnings.push(`${lm.file}: begreppet "${concept}" står i concepts_used men förekommer inte i brödtexten — ta bort ur listan eller använd begreppet.`);
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
	const saknade = ['syfte', 'innehall', 'referens', 'pedagogisk_funktion'].filter((f) => !figureRegistry[figId]?.[f]);
	if (saknade.length > 0) {
		warnings.push(`figures/registry.yml: figur "${figId}" saknar fält: ${saknade.join(', ')} — platshållaren är inte komplett (09, "Förlagsgranskning").`);
	}
	for (const f of ['syfte', 'innehall', 'referens', 'pedagogisk_funktion']) {
		const varde = figureRegistry[figId]?.[f] ?? '';
		if (/—|–/.test(varde)) {
			warnings.push(`figures/registry.yml: figur "${figId}", fältet ${f}: tankstreck/talstreck i figurtexten (05-forfattarmanual.md, "Tankstreck").`);
		}
		if (/\buppslag(et|en|ets)?\b/i.test(varde)) {
			warnings.push(`figures/registry.yml: figur "${figId}", fältet ${f}: ordet "uppslag" förekommer som möjlig självreferens (05-forfattarmanual.md, "Självreferenser").`);
		}
	}
}

// Shortcodes i brödtext (lärandemål och kapitelavslutningar): [[figur:ID]] måste
// finnas i registret; [[begrepp:namn]] måste ha ett huvudställe. För lärandemål
// kontrolleras dessutom att shortcoden speglas i frontmatterfälten.
const allaMedBody = [
	...larandemal.map((lm) => ({ ...lm, arLarandemal: true })),
	...kapitelavslutningsFiler.map((ka) => ({ ...ka, arLarandemal: false, figures: [], concepts_used: [], concepts_introduced: [] })),
];
for (const f of allaMedBody) {
	const synligText = f.body.replace(/<!--[\s\S]*?-->/g, '');
	for (const m of synligText.matchAll(/\[\[figur:([a-zA-Z0-9_.-]+)\]\]/g)) {
		const figId = m[1];
		if (!figureRegistry[figId]) {
			errors.push(`${f.file}: [[figur:${figId}]] i texten men figuren saknas i figures/registry.yml.`);
		} else if (f.arLarandemal && !f.figures.includes(figId)) {
			warnings.push(`${f.file}: [[figur:${figId}]] används i texten men står inte i frontmatterfältet figures.`);
		}
	}
	for (const m of synligText.matchAll(/\[\[begrepp:([^\]]+)\]\]/g)) {
		const namn = m[1].trim();
		if (!conceptOwners.has(namn)) {
			errors.push(`${f.file}: [[begrepp:${namn}]] i texten men begreppet introduceras (concepts_introduced) inte i någon fil — skriv huvudstället först eller rätta namnet.`);
		} else if (f.arLarandemal && !f.concepts_used.includes(namn) && !f.concepts_introduced.includes(namn)) {
			warnings.push(`${f.file}: [[begrepp:${namn}]] används i texten men står inte i concepts_used.`);
		}
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

// Kursplantaggning
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

// Statusstyrda innehållskontroller för lärandemål: från fardig-forsta-version.
for (const lm of larandemal) {
	if (statusEnum.indexOf(lm.status) < GRANSKNINGSSTATUS) continue;
	const beskr = `${lm.file} (status ${lm.status})`;

	// Lärandemålet ska avslutas med en icke-tom sektion Instuderingsfrågor
	// (inget bestämt antal, 03-bokens-arkitektur.md).
	const isSektioner = extractSections(lm.body, 'Instuderingsfrågor');
	if (isSektioner.length === 0) {
		errors.push(`${beskr}: sektionen "Instuderingsfrågor" saknas (03-bokens-arkitektur.md, "Aktiv bearbetning").`);
	} else if (!isSektioner.some((text) => /^\s*\d+\.\s+\S/m.test(text))) {
		errors.push(`${beskr}: sektionen "Instuderingsfrågor" är tom — minst en numrerad fråga krävs (03).`);
	}

	// Äldre uppgiftsrubriker och synliga uppslagsrubriker får inte förekomma.
	for (const forbjuden of [/^#{2,4}\s+(Förstå|Utveckla|Utmana)\s*$/m, /^#{2,4}\s+Uppslag\b/m]) {
		const traff = lm.body.match(forbjuden);
		if (traff) {
			errors.push(`${beskr}: rubriken "${traff[0].replace(/^#+\s*/, '')}" får inte förekomma i elevtexten (03/12/13).`);
		}
	}

	// "Uppslag" som självreferens i elevtexten (05-forfattarmanual.md).
	{
		const synlig = lm.body.replace(/<!--[\s\S]*?-->/g, '');
		const traffar = synlig.match(/\buppslag(et|en|ets)?\b/gi);
		if (traffar) {
			warnings.push(`${beskr}: ordet "uppslag" förekommer ${traffar.length} gång(er) i elevtexten — troligen en självreferens som ska skrivas om (05-forfattarmanual.md, "Självreferenser").`);
		}
	}

	// Inga markdownlänkar i elevtext, utom i ett uttryckligt käll-/resursavsnitt.
	{
		const rader = lm.body.split('\n');
		let iKallavsnitt = false;
		let lankar = 0;
		for (const rad of rader) {
			const rubrik = rad.match(/^#{2,4}\s+(.+?)\s*$/);
			if (rubrik) {
				iKallavsnitt = /^(Källor|Resurser)\b/i.test(rubrik[1]);
				continue;
			}
			if (iKallavsnitt) continue;
			const utanKommentarer = rad.replace(/<!--[\s\S]*?-->/g, '');
			const traffar2 = utanKommentarer.match(/\[[^\[\]]+\]\([^\s)]+\)/g);
			if (traffar2) lankar += traffar2.length;
		}
		if (lankar > 0) {
			warnings.push(`${beskr}: ${lankar} markdownlänk(ar) i elevtext utanför ett käll-/resursavsnitt (12-produktionsarkitektur.md, "Länkar i elevtext").`);
		}
	}

	// Synlig rubriknumrering med fler än tre nivåer.
	{
		const traff = lm.body.match(/^#{1,6}\s+.*\b\d+\.\d+\.\d+\.\d+\b/m);
		if (traff) {
			errors.push(`${beskr}: fjärde rubriknivån "${traff[0].replace(/^#+\s*/, '')}" får inte förekomma (12-produktionsarkitektur.md, "Rubriknumrering").`);
		}
	}

	// Personnamnsheuristik (05, "Personnamn").
	{
		const synlig = lm.body.replace(/<!--[\s\S]*?-->/g, '');
		const kandidater = new Set();
		for (const m of synlig.matchAll(/\b([A-ZÅÄÖ][a-zåäö]{2,}) ([A-ZÅÄÖ][a-zåäö]{2,})\b/g)) {
			kandidater.add(`${m[1]} ${m[2]}`);
		}
		if (kandidater.size > 6) {
			warnings.push(`${beskr}: ${kandidater.size} möjliga personnamn (${[...kandidater].join(', ')}) — kontrollera mot 05, "Personnamn" (heuristiken träffar även platser och produkter).`);
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
	// Tankstreck/talstreck används inte i elevtexten (05). Kodblock undantas.
	let inCodeBlock = false;
	let tankstreck = 0;
	for (const line of lm.body.split('\n')) {
		if (/^(```|~~~)/.test(line)) inCodeBlock = !inCodeBlock;
		if (!inCodeBlock) tankstreck += (line.match(/—|–/g) ?? []).length;
	}
	if (tankstreck > 0) {
		warnings.push(`${beskr}: tankstreck/talstreck förekommer ${tankstreck} gång(er) i elevtexten (05-forfattarmanual.md, "Tankstreck").`);
	}
}

// -------------------------------------------------------- Kapitelavslutningar
// Manifestet (kapitelavslutningar-data.mjs) är strukturkällan. Stäm av mot
// filerna åt båda håll och validera uppgiftsbankens kopplingar mot lärandemålen.
const kapitelSlugById = new Map(); // kapNr -> kapitelSlug (från planen)
for (const p of plan) {
	const seg = p.relPath.split('/')[0];
	kapitelSlugById.set(p.chapter, seg);
}
const kaFilerByPath = new Map(kapitelavslutningsFiler.map((ka) => [ka.file, ka]));
const deklareradePaths = new Set();

for (const post of allaKapitelavslutningar()) {
	const kapitelSlug = kapitelSlugById.get(post.chapter);
	if (!kapitelSlug) {
		errors.push(`kapitelavslutningar-data.mjs: kapitel ${post.chapter} finns inte i bokstrukturen.`);
		continue;
	}
	const relPath = `${kapitelSlug}/${post.slug}.md`;
	deklareradePaths.add(relPath);
	const ka = kaFilerByPath.get(relPath);
	if (!ka) {
		errors.push(`Deklarerad kapitelavslutning saknar fil: ${relPath} (type ${post.type}, kapitel ${post.chapter}) — skapa filen eller ta bort posten ur manifestet.`);
		continue;
	}
	if (ka.type !== post.type) {
		errors.push(`${relPath}: type "${ka.type}" stämmer inte med manifestets "${post.type}".`);
	}
	if (ka.chapter !== post.chapter) {
		errors.push(`${relPath}: chapter ${ka.chapter} stämmer inte med manifestets kapitel ${post.chapter}.`);
	}
	if (ka.title !== post.title) {
		warnings.push(`${relPath}: titeln "${ka.title}" avviker från manifestets "${post.title}".`);
	}
}

// Varje type-fil på disk ska vara deklarerad i manifestet.
for (const ka of kapitelavslutningsFiler) {
	if (!deklareradePaths.has(ka.file)) {
		errors.push(`${ka.file}: kapitelavslutning (type ${ka.type}) är inte deklarerad i kapitelavslutningar-data.mjs — lägg till den i manifestet eller ta bort filen.`);
	}
}

// Uppgiftsbankernas kopplingar: varje uppgift ska peka på lärandemål i samma
// kapitel, ref:erna ska vara unika, och kroppen bör innehålla varje ref.
const praktiskTackning = new Map(); // kapNr -> Set(lärandemåls-id som tränas)
for (const ka of kapitelavslutningsFiler) {
	if (ka.type !== 'uppgiftsbank') continue;
	const refar = new Set();
	if (!praktiskTackning.has(ka.chapter)) praktiskTackning.set(ka.chapter, new Set());
	for (const u of ka.uppgifter ?? []) {
		if (refar.has(u.ref)) {
			errors.push(`${ka.file}: uppgifts-ref "${u.ref}" förekommer flera gånger.`);
		}
		refar.add(u.ref);
		if (!ka.body.includes(u.ref)) {
			warnings.push(`${ka.file}: uppgiften "${u.ref}" finns i frontmattern men ref:en förekommer inte i kroppen.`);
		}
		for (const lmId of u.larandemal) {
			const p = planById.get(lmId);
			if (!p) {
				errors.push(`${ka.file}: uppgift "${u.ref}" kopplar till lärandemål "${lmId}" som inte finns i bokstrukturen.`);
			} else if (p.chapter !== ka.chapter) {
				errors.push(`${ka.file}: uppgift "${u.ref}" kopplar till lärandemål "${lmId}" i kapitel ${p.chapter}, men banken hör till kapitel ${ka.chapter}.`);
			} else {
				praktiskTackning.get(ka.chapter).add(lmId);
			}
		}
	}
}

// -------------------------------------------------------------- Statusöversikt
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

console.log(`Kontrollerade ${larandemal.length} lärandemålsfiler och ${kapitelavslutningsFiler.length} kapitelavslutningar av ${files.length} markdown-filer totalt (${plan.length} lärandemål i bokstrukturen).\n`);

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

// Praktisk täckning per kapitel: vilka lärandemål tränas av uppgiftsbanken.
if (Object.keys(kapitelavslutningar).length > 0) {
	console.log('Praktisk täckning (lärandemål som tränas av kapitlets uppgiftsbank):');
	for (const nr of [...praktiskTackning.keys()].sort((a, b) => a - b)) {
		const kapitletsLm = plan.filter((p) => p.chapter === nr).map((p) => p.id);
		const tackta = praktiskTackning.get(nr);
		const otackta = kapitletsLm.filter((id) => !tackta.has(id));
		console.log(`  Kapitel ${nr}: ${tackta.size}/${kapitletsLm.length} lärandemål tränas${otackta.length > 0 ? ` (otäckta: ${otackta.join(', ')})` : ''}`);
	}
	console.log('');
}

// Kursplanetäckningsöversikt per punkt.
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
