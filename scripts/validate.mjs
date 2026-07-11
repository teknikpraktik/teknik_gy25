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

// Formuleringar som hör hemma i Instuderingsfrågor/Praktiska uppgifter, inte i
// Begreppsdelen (03-bokens-arkitektur.md, "Begrepp"; redaktionellt beslut).
const analysOrd = [
	'jämför', 'jämföra', 'jämförelse',
	'skilj', 'skiljer', 'skilja',
	'avgör', 'avgöra',
	'motivera', 'motivering',
	'välj rätt', 'väljer rätt',
	'koppla till', 'kopplar till',
	'analysera', 'analys av',
];

// Stammar som visar att en praktisk uppgift har ett producerande/genomförande
// moment (03-bokens-arkitektur.md, "Praktiska uppgifter"). Mjuk heuristik —
// varnar bara, tvingar aldrig fram en omskrivning.
const praktiskOrd = [
	'bygg', 'skiss', 'rita', 'ritning', 'mät', 'testa', 'test', 'konstruera',
	'simulera', 'programmera', 'modellera', 'undersök', 'presentera', 'presentation',
	'muntlig', 'film', 'podd', 'prototyp', 'plansch', 'kalkylblad',
	'excel', 'flödesdiagram', 'foto', 'protokoll', 'genomför', 'mätning',
	'demonstrera', 'tillverka',
];

// Extraherar texten under samtliga förekomster av en rubrik (##–####) fram
// till nästa rubrik på samma nivå eller lägre, eller filens slut. Fleruppslagsmål
// har en rubrikförekomst per uppslag (13-produktionsmanual.md, "Skriv") — därför
// en lista, inte bara den första träffen.
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

// Delar upp en uppgiftsdels text i enskilda numrerade uppgifter (inklusive
// eventuella a)/b)/c)-deluppgifter, som hör till samma numrerade uppgift).
function numreradeUppgifter(sectionText) {
	return sectionText
		.split(/^(?=\d+\.\s)/m)
		.map((s) => s.trim())
		.filter(Boolean);
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

for (const file of files) {
	const raw = await readFile(file, 'utf8');
	const { data, content } = matter(raw);
	const relPath = path.relative(contentDir, file).replaceAll(path.sep, '/');

	if (data.id === undefined) {
		// Enda tillåtna strukturella sidan är startsidan — kapitel- och
		// modulöversikter är genererade vyer och ska inte finnas i content/.
		if (relPath !== 'index.md') {
			warnings.push(`${relPath}: strukturell sida utan id — kapitel-/modulöversikter genereras av webbplatsen och filen bör tas bort.`);
		}
		continue;
	}

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

// Begrepp i concepts_used ska faktiskt förekomma i brödtexten. Ett begrepp
// räknas som använt om shortcoden [[begrepp:namn]] finns, om namnet står i
// löptexten (skiftlägesokänsligt — fångar även böjda och sammansatta former
// som "teknikskiften") eller, för flerordsbegrepp, om initialförkortningen
// står som eget ord ("artificiell intelligens" → AI, jfr 11 "Förkortningar").
// HTML-kommentarer skannas inte; frontmattern ingår inte i body.
for (const lm of larandemal) {
	const synligBody = lm.body.replace(/<!--[\s\S]*?-->/g, '');
	const synligLower = synligBody.toLowerCase();
	for (const concept of lm.concepts_used) {
		const somShortcode = synligBody.includes(`[[begrepp:${concept}]]`);
		const iLoptext = synligLower.includes(concept.toLowerCase());
		const ord = concept.split(/\s+/);
		// Böjda former ("de industriella revolutionerna", "teknikskiften"):
		// matcha varje ords stam (allt utom de sista två tecknen, minst fyra)
		// följt av valfri ändelse, i ordföljd.
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
	// Fullständig platshållarspecifikation (08, 12): fyra fält per figur.
	const saknade = ['syfte', 'innehall', 'referens', 'pedagogisk_funktion'].filter((f) => !figureRegistry[figId]?.[f]);
	if (saknade.length > 0) {
		warnings.push(`figures/registry.yml: figur "${figId}" saknar fält: ${saknade.join(', ')} — platshållaren är inte komplett (09, "Förlagsgranskning").`);
	}
	// Figurtext är elevtext: inga tankstreck/talstreck (05, "Tankstreck") och
	// inget "uppslag" som självreferens (05, "Självreferenser").
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

// Shortcodes i brödtext: [[figur:ID]] måste finnas i registret och bör stå i
// filens figures-fält; [[begrepp:namn]] måste ha ett huvudställe någonstans
// (webbygget felar annars — kontrollen här fångar det före bygget) och bör
// stå i filens concepts_used/concepts_introduced. Kommentarer skannas inte.
for (const lm of larandemal) {
	const synligText = lm.body.replace(/<!--[\s\S]*?-->/g, '');
	for (const m of synligText.matchAll(/\[\[figur:([a-zA-Z0-9_.-]+)\]\]/g)) {
		const figId = m[1];
		if (!figureRegistry[figId]) {
			errors.push(`${lm.file}: [[figur:${figId}]] i texten men figuren saknas i figures/registry.yml.`);
		} else if (!lm.figures.includes(figId)) {
			warnings.push(`${lm.file}: [[figur:${figId}]] används i texten men står inte i frontmatterfältet figures.`);
		}
	}
	for (const m of synligText.matchAll(/\[\[begrepp:([^\]]+)\]\]/g)) {
		const namn = m[1].trim();
		if (!conceptOwners.has(namn)) {
			errors.push(`${lm.file}: [[begrepp:${namn}]] i texten men begreppet introduceras (concepts_introduced) inte i någon fil — skriv huvudstället först eller rätta namnet.`);
		} else if (!lm.concepts_used.includes(namn) && !lm.concepts_introduced.includes(namn)) {
			warnings.push(`${lm.file}: [[begrepp:${namn}]] används i texten men står inte i concepts_used.`);
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

	// Obs: inte \b efter rubriken — JS \b bygger på ASCII-\w, så tecken som
	// "å"/"ö" bildar ingen ordgräns; därför matchas radslut i stället.
	for (const rubrik of ['Instuderingsfrågor', 'Begrepp', 'Praktiska uppgifter']) {
		if (!new RegExp(`^#{2,4}\\s+${rubrik}\\s*$`, 'm').test(lm.body)) {
			errors.push(`${beskr}: uppgiftsdelen "${rubrik}" saknas (03-bokens-arkitektur.md, "Aktiv bearbetning").`);
		}
	}
	// Äldre uppgiftsrubriker och synliga uppslagsrubriker får inte förekomma
	// (redaktionellt beslut; 12 "Produktionsenhet", 13 "Skriv").
	for (const forbjuden of [/^#{2,4}\s+(Förstå|Utveckla|Utmana)\s*$/m, /^#{2,4}\s+Uppslag\b/m]) {
		const traff = lm.body.match(forbjuden);
		if (traff) {
			errors.push(`${beskr}: rubriken "${traff[0].replace(/^#+\s*/, '')}" får inte förekomma i elevtexten (03/12/13).`);
		}
	}
	// Uppgiftsantal per del: normalspann enligt 03 (per rubrikförekomst, dvs.
	// per uppslag i fleruppslagsmål). Mjuk kontroll — 03 säger "normalt".
	const normalspann = { 'Instuderingsfrågor': [10, 15], Begrepp: [3, 6], 'Praktiska uppgifter': [2, 5] };
	{
		const rader = lm.body.split('\n');
		let aktuellDel = null;
		let antal = 0;
		const flush = () => {
			if (!aktuellDel) return;
			const [min, max] = normalspann[aktuellDel];
			if (antal < min || antal > max) {
				if (aktuellDel === 'Praktiska uppgifter' && lm.praktiska_uppgifter_undantag) {
					// Dokumenterat redaktionellt undantag (03, "Praktiska uppgifter") — ingen varning.
				} else {
					warnings.push(`${beskr}: ${antal} uppgifter under "${aktuellDel}" — normalspannet är ${min}–${max} per uppslag (03).`);
				}
			}
		};
		for (const rad of rader) {
			const rubrik = rad.match(/^#{2,4}\s+(Instuderingsfrågor|Begrepp|Praktiska uppgifter)\s*$/);
			if (rubrik) {
				flush();
				aktuellDel = rubrik[1];
				antal = 0;
			} else if (/^#{2,4}\s/.test(rad)) {
				flush();
				aktuellDel = null;
			} else if (aktuellDel && /^\d+\.\s/.test(rad)) {
				antal++;
			}
		}
		flush();
	}
	// Begreppsdelen: standardformulering och inga analys-/jämförelsekrav
	// (03-bokens-arkitektur.md, "Begrepp"). En sektion per uppslag.
	{
		const sektioner = extractSections(lm.body, 'Begrepp');
		sektioner.forEach((text, i) => {
			if (text.trim() === '') return;
			const uppslagsref = sektioner.length > 1 ? ` (uppslag ${i + 1})` : '';
			if (!/förklara följande begrepp med en mening/i.test(text)) {
				warnings.push(`${beskr}${uppslagsref}: Begreppsdelen saknar standardformuleringen "Förklara följande begrepp med en mening:" (03-bokens-arkitektur.md, "Begrepp").`);
			}
			const lower = text.toLowerCase();
			const traffade = analysOrd.filter((ord) => lower.includes(ord));
			if (traffade.length > 0) {
				warnings.push(`${beskr}${uppslagsref}: Begreppsdelen innehåller möjliga analys-/jämförelse-/motiveringsformuleringar (${traffade.join(', ')}) — sådana krav hör inte hemma under Begrepp (03).`);
			}
		});
	}
	// Praktiska uppgifter: varje uppgift bör ha ett tydligt producerande/
	// genomförande moment (03-bokens-arkitektur.md, "Praktiska uppgifter").
	// Mjuk heuristik, varnar bara — tvingar inte fram en viss formulering.
	// En sektion per uppslag.
	{
		const sektioner = extractSections(lm.body, 'Praktiska uppgifter');
		sektioner.forEach((text, i) => {
			if (text.trim() === '') return;
			const uppslagsref = sektioner.length > 1 ? ` (uppslag ${i + 1})` : '';
			const utanPraktik = numreradeUppgifter(text)
				.map((u, idx) => ({ idx: idx + 1, harPraktik: praktiskOrd.some((ord) => u.toLowerCase().includes(ord)) }))
				.filter((u) => !u.harPraktik)
				.map((u) => u.idx);
			if (utanPraktik.length > 0) {
				warnings.push(`${beskr}${uppslagsref}: praktisk uppgift ${utanPraktik.join(', ')} saknar ett tydligt producerande/genomförande moment (skiss, mätning, konstruktion, test, ...) — kontrollera mot definitionen i 03, "Praktiska uppgifter".`);
			}
		});
	}
	// "Uppslag" som självreferens i elevtexten (05-forfattarmanual.md,
	// "Självreferenser"). Frontmatterfältet uppslag ingår inte i body.
	{
		const synlig = lm.body.replace(/<!--[\s\S]*?-->/g, '');
		const traffar = synlig.match(/\buppslag(et|en|ets)?\b/gi);
		if (traffar) {
			warnings.push(`${beskr}: ordet "uppslag" förekommer ${traffar.length} gång(er) i elevtexten — troligen en självreferens som ska skrivas om (05-forfattarmanual.md, "Självreferenser").`);
		}
	}
	// Inga markdownlänkar i elevtext, utom i ett uttryckligt käll-/resursavsnitt
	// (12-produktionsarkitektur.md, "Länkar i elevtext").
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
	// Synlig rubriknumrering med fler än tre nivåer (12-produktionsarkitektur.md,
	// "Rubriknumrering"), t.ex. "6.1.1.1" i en rubrik.
	{
		const traff = lm.body.match(/^#{1,6}\s+.*\b\d+\.\d+\.\d+\.\d+\b/m);
		if (traff) {
			errors.push(`${beskr}: fjärde rubriknivån "${traff[0].replace(/^#+\s*/, '')}" får inte förekomma (12-produktionsarkitektur.md, "Rubriknumrering").`);
		}
	}
	// Personnamnsheuristik (05, "Personnamn"): två versalinledda ord i följd
	// på samma rad räknas som namnkandidat. Grov träffbild med falska
	// positiva (platser, produkter) — därför bara en mjuk varning med
	// kandidaterna listade, så att en människa avgör. Tröskel: fler än 6
	// distinkta kandidater räknas som ovanligt många (ungefär hälften av
	// träffarna brukar vara platser eller produkter).
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
	// Tankstreck/talstreck används inte i elevtexten (05, "Tankstreck").
	// Kodblock undantas; bindestreck (-) berörs inte av regeln.
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
