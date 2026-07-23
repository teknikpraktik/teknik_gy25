// Tvärgående valideringar som inte kan uttryckas i ett per-fil Zod-schema:
// synk mellan bokstruktur (06) och content/, begreppsunikhet, figur-ID,
// förkunskapsordning, kursplantaggning (punkt-id), statusstyrda innehålls-
// kontroller samt status- och täckningsöversikt.
// Körs som "prebuild" innan webbplatsen byggs (se site/package.json) och kan
// köras fristående med `npm run validate`.
//
// Filtyp avgörs av frontmattern: "id" → avsnitt (H2, med lärandemål), "type" →
// kapitelavslutning (också ett H2-avsnitt, men utan lärandemål), annars
// strukturell sida (bara index.md är tillåten).

import { readFile, readdir } from 'node:fs/promises';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import YAML from 'yaml';
import {
	larandemalRequiredSchema,
	kapitelavslutningRequiredSchema,
	statusEnum,
} from '../schemas/larandemal.schema.mjs';
import { allaAvsnitt, kapitel } from './bokstruktur-data.mjs';
import { niva1, niva2, syftesmal, allaPunkter } from './kursplan-data.mjs';
import {
	migreradeKapitel,
	lastaKapitel,
	strukturskuldKategorier,
	legacyOvningsrubrikFiler,
	legacyBegreppFiler,
	klassificeraStrukturskuld,
} from './migreringsstatus.mjs';

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
// Förväntad, känd migreringsskuld (produktionslogg.md 2026-07-22). Poster här
// grupperas separat i utdata och räknas aldrig som aktiva fel. Varje post är
// { kategori, msg }. Fylls dels direkt (utfasad övningsrubrik i legacy-filer),
// dels genom omklassning av redan genererade strukturfel i slutet.
let skuld = [];

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
const avsnittFiler = []; // teoriavsnitt med "id" och learningGoals
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
		avsnittFiler.push({ file: relPath, body: content, ...result.data });
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
		warnings.push(`${relPath}: sida utan "id" eller "type" — kapitelöversikter genereras av webbplatsen och filen bör tas bort.`);
	}
}

// Synk mellan bokstruktur (06, tolkad av bokstruktur-data.mjs) och content/.
const plan = allaAvsnitt();
const planById = new Map(plan.map((p) => [p.id, p]));
const filesById = new Map(avsnittFiler.map((a) => [a.id, a]));

for (const [id, dup] of Object.entries(
	avsnittFiler.reduce((acc, a) => ((acc[a.id] ??= []).push(a.file), acc), {}),
)) {
	if (dup.length > 1) {
		errors.push(`Avsnitts-id "${id}" används av flera filer: ${dup.join(', ')}.`);
	}
}

for (const p of plan) {
	if (p.type) continue; // kapitelavslutningar valideras separat nedan
	const avs = filesById.get(p.id);
	if (!avs) {
		errors.push(`Planerat avsnitt ${p.id} "${p.titel}" saknar fil (${p.relPath}) — kör \`npm run skeleton\`.`);
		continue;
	}
	if (avs.file !== p.relPath) {
		errors.push(`${avs.file}: fel sökväg för ${p.id} — ska vara ${p.relPath} (byt namn på filen).`);
	}
	if (avs.chapter !== p.chapter || avs.sectionNumber !== p.sectionNumber) {
		errors.push(`${avs.file}: chapter/sectionNumber (${avs.chapter}/${avs.sectionNumber}) stämmer inte med bokstrukturen (${p.chapter}/${p.sectionNumber}).`);
	}
	if (avs.title !== p.titel) {
		warnings.push(`${avs.file}: titeln "${avs.title}" avviker från bokstrukturens "${p.titel}" — uppdatera 06-bokstruktur.md eller filen.`);
	}
	const planMal = new Set(p.larandemal);
	const filMal = new Set(avs.learningGoals);
	const saknas = [...planMal].filter((m) => !filMal.has(m));
	const extra = [...filMal].filter((m) => !planMal.has(m));
	if (saknas.length > 0 || extra.length > 0) {
		warnings.push(`${avs.file}: learningGoals avviker från bokstrukturens lärandemål för ${p.id} — uppdatera 06-bokstruktur.md eller filens frontmatter.`);
	}
}

for (const avs of avsnittFiler) {
	if (!planById.has(avs.id)) {
		errors.push(`${avs.file}: avsnittet ${avs.id} finns inte i bokstrukturen — uppdatera 06-bokstruktur.md (målskelettet styr).`);
	}
}

// Begreppsunikhet
const conceptOwners = new Map();
for (const avs of avsnittFiler) {
	for (const concept of avs.concepts_introduced) {
		if (conceptOwners.has(concept)) {
			errors.push(`Begreppet "${concept}" introduceras i både ${conceptOwners.get(concept)} och ${avs.file} — ska bara ha ett huvudställe (11-begreppsfilosofi.md).`);
		} else {
			conceptOwners.set(concept, avs.file);
		}
	}
}

// Begrepp som används utan att introduceras någonstans.
for (const avs of avsnittFiler) {
	for (const concept of avs.concepts_used) {
		if (!conceptOwners.has(concept)) {
			warnings.push(`${avs.file}: använder begreppet "${concept}" som inte introduceras (concepts_introduced) i någon fil ännu.`);
		}
	}
}

// Begrepp i concepts_used ska faktiskt förekomma i brödtexten.
for (const avs of avsnittFiler) {
	const synligBody = avs.body.replace(/<!--[\s\S]*?-->/g, '');
	const synligLower = synligBody.toLowerCase();
	for (const concept of avs.concepts_used) {
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
			warnings.push(`${avs.file}: begreppet "${concept}" står i concepts_used men förekommer inte i brödtexten — ta bort ur listan eller använd begreppet.`);
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
for (const avs of avsnittFiler) {
	for (const figId of avs.figures) {
		usedFigures.add(figId);
		if (!figureRegistry[figId]) {
			errors.push(`${avs.file}: refererar figur "${figId}" som saknas i figures/registry.yml.`);
		}
	}
}
for (const figId of Object.keys(figureRegistry)) {
	if (!usedFigures.has(figId)) {
		warnings.push(`figures/registry.yml: figur "${figId}" är registrerad men refereras av ingen avsnittsfil.`);
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

// Shortcodes i brödtext (avsnitt och kapitelavslutningar): [[figur:ID]] måste
// finnas i registret; [[begrepp:namn]] måste ha ett huvudställe. För teori-
// avsnitt kontrolleras dessutom att shortcoden speglas i frontmatterfälten.
const allaMedBody = [
	...avsnittFiler.map((a) => ({ ...a, arAvsnitt: true })),
	...kapitelavslutningsFiler.map((ka) => ({ ...ka, arAvsnitt: false, figures: [], concepts_used: [], concepts_introduced: [] })),
];
for (const f of allaMedBody) {
	const synligText = f.body.replace(/<!--[\s\S]*?-->/g, '');
	for (const m of synligText.matchAll(/\[\[figur:([a-zA-Z0-9_.-]+)\]\]/g)) {
		const figId = m[1];
		if (!figureRegistry[figId]) {
			errors.push(`${f.file}: [[figur:${figId}]] i texten men figuren saknas i figures/registry.yml.`);
		} else if (f.arAvsnitt && !f.figures.includes(figId)) {
			warnings.push(`${f.file}: [[figur:${figId}]] används i texten men står inte i frontmatterfältet figures.`);
		}
	}
	for (const m of synligText.matchAll(/\[\[begrepp:([^\]]+)\]\]/g)) {
		const namn = m[1].trim();
		if (!conceptOwners.has(namn)) {
			errors.push(`${f.file}: [[begrepp:${namn}]] i texten men begreppet introduceras (concepts_introduced) inte i någon fil — skriv huvudstället först eller rätta namnet.`);
		} else if (f.arAvsnitt && !f.concepts_used.includes(namn) && !f.concepts_introduced.includes(namn)) {
			warnings.push(`${f.file}: [[begrepp:${namn}]] används i texten men står inte i concepts_used.`);
		}
	}
	// Gransknings-/utkastnotiser får aldrig stå i brödtext (05, "Granskningsnotiser";
	// CLAUDE.md, "Hårda regler"). Mönstret är riktat mot hakparentesformen [UTKAST …]
	// så att strukturerade [BILD X.Y-N]-platshållare och frontmatter inte träffas;
	// en [UTKAST]-markör inne i en [BILD]-bildtext fångas dock (den ska bort).
	// Utkaststatus spåras på kapitelnivå via migreradeKapitel, inte via inline-taggar.
	for (const m of synligText.matchAll(/\[\s*UTKAST\b[^\]]*\]/gi)) {
		errors.push(`${f.file}: granskningsnotis "${m[0]}" i brödtext — får aldrig stå i elevtexten (05-forfattarmanual.md, "Granskningsnotiser"). Flytta till rapport/produktionslogg.md; utkaststatus spåras via migreradeKapitel.`);
	}
}

// Förkunskapsordning
const byId = new Map(avsnittFiler.map((a) => [a.id, a]));
for (const avs of avsnittFiler) {
	for (const prereqId of avs.prerequisites) {
		const prereq = byId.get(prereqId);
		if (!prereq) {
			warnings.push(`${avs.file}: förkunskapen "${prereqId}" finns inte som avsnitt ännu.`);
			continue;
		}
		if (compareIds(prereqId, avs.id) >= 0) {
			errors.push(`${avs.file}: anger "${prereqId}" som förkunskap, men den ligger inte tidigare i läsordningen (04-redaktionsprinciper.md §10).`);
		}
	}
}

// Kursplantaggning
const punkter = allaPunkter();
const giltigaTaggar = {
	niva1: new Set([...niva1.map((p) => p.id), ...syftesmal.map((p) => p.id)]),
	niva2: new Set([...niva2.map((p) => p.id), ...syftesmal.map((p) => p.id)]),
};
for (const avs of avsnittFiler) {
	for (const niva of ['niva1', 'niva2']) {
		for (const tag of avs.curriculumReferences[niva] ?? []) {
			if (!giltigaTaggar[niva].has(tag)) {
				errors.push(`${avs.file}: okänt punkt-id "${tag}" i curriculumReferences.${niva}. Giltiga id:n finns i 07-kursplanetackning.md / scripts/kursplan-data.mjs.`);
				continue;
			}
			const punkt = punkter.get(tag);
			const kapitelOk =
				punkt.primar === avs.chapter ||
				punkt.berors.includes(avs.chapter) ||
				punkt.berors.includes('löpande');
			if (!kapitelOk) {
				warnings.push(`${avs.file}: taggen ${tag} hör hemma i kapitel ${punkt.primar} (berörs: ${punkt.berors.join(', ') || '—'}) — kapitel ${avs.chapter} finns inte i 07:s matris för punkten.`);
			}
		}
	}
}

// Statusstyrda innehållskontroller för teoriavsnitt: från fardig-forsta-version.
for (const avs of avsnittFiler) {
	if (statusEnum.indexOf(avs.status) < GRANSKNINGSSTATUS) continue;
	const beskr = `${avs.file} (status ${avs.status})`;

	// Avsnittet ska avslutas med en icke-tom sektion Instuderingsfrågor
	// (inget bestämt antal, 03-bokens-arkitektur.md).
	const isSektioner = extractSections(avs.body, 'Instuderingsfrågor');
	if (isSektioner.length === 0) {
		errors.push(`${beskr}: sektionen "Instuderingsfrågor" saknas (03-bokens-arkitektur.md, "Aktiv bearbetning").`);
	} else if (!isSektioner.some((text) => /^\s*\d+\.\s+\S/m.test(text))) {
		errors.push(`${beskr}: sektionen "Instuderingsfrågor" är tom — minst en numrerad fråga krävs (03).`);
	} else if (isSektioner.length > 1) {
		errors.push(`${beskr}: flera "Instuderingsfrågor"-sektioner — avsnittet ska avslutas med EN samlad sektion, inte en per delavsnitt.`);
	}

	// Antal instuderingsfrågor: 5–15 per avsnitt (03-bokens-arkitektur.md,
	// "Instuderingsfrågor", redaktionellt beslut 2026-07-23). Hård regel från
	// granskningsstatus. Låsta kapitel undantas — de nya reglerna gäller inte
	// retroaktivt mot handredigerat, låst innehåll (migreringsstatus.mjs, lastaKapitel).
	if (isSektioner.length === 1 && !lastaKapitel.has(avs.chapter)) {
		const antalFragor = (isSektioner[0].match(/^\s*\d+\.\s+\S/gm) || []).length;
		if (antalFragor >= 1 && (antalFragor < 5 || antalFragor > 15)) {
			errors.push(`${beskr}: ${antalFragor} instuderingsfrågor — spannet är 5–15 per avsnitt (03-bokens-arkitektur.md, "Instuderingsfrågor").`);
		}
	}

	// Mjukt regressionsskydd (03, "Helkapitelövningar", 2026-07-23): den utskrivna
	// nivåstaplingen "Bygg ut"/"Bygg ut vidare" utgår ur helkapitelövningar.
	// Varnar men felar inte — befintlig text är ännu inte deflaterad. Låsta kapitel
	// undantas (kapitel 2 är auktoritativt och exemt).
	if (!lastaKapitel.has(avs.chapter)) {
		const harByggUt = ['Övningar', 'Praktiska uppgifter']
			.flatMap((r) => extractSections(avs.body, r))
			.some((sekt) => /\bBygg ut\b/.test(sekt));
		if (harByggUt) {
			warnings.push(`${beskr}: "Bygg ut" i en övningssektion — utskriven nivåstapling utgår ur helkapitelövningar (03-bokens-arkitektur.md, "Helkapitelövningar"); skriv om till EN sammanhållen uppgift.`);
		}
	}

	// Mjuk varning vid hög semikolontäthet i prosa (05-forfattarmanual.md, "Kolon
	// och semikolon", 2026-07-23). Endast avsnittsfiler — definitionslistor bor i
	// begreppsövningar och träffas alltså inte. Ingen hård kontroll (falska träffar
	// på strukturella kolon). Låsta kapitel undantas.
	if (!lastaKapitel.has(avs.chapter)) {
		const antalSemikolon = (avs.body.match(/;/g) || []).length;
		if (antalSemikolon > 4) {
			warnings.push(`${beskr}: ${antalSemikolon} semikolon i avsnittet — kolon och semikolon används sparsamt i prosa, aldrig som pausmarkörer (05-forfattarmanual.md, "Kolon och semikolon").`);
		}
	}

	// Övningssektionen. Nya modellen (03, redaktionellt beslut 2026-07-22):
	// avsnittets uppgifter samlas under EN rubrik "Övningar". Rubriken "Praktiska
	// uppgifter" är utfasad (task 3, 2026-07-22). En kvarvarande "Praktiska
	// uppgifter"-rubrik flaggas — grupperad migreringsskuld om filen är en känd
	// legacy-fil i ett ej migrerat kapitel, annars aktivt fel (nyskrivet eller
	// migrerat innehåll ska använda "Övningar"; 05-forfattarmanual.md, termlista.md).
	if (/^#{2,4}\s+Praktiska uppgifter\s*$/m.test(avs.body)) {
		const msg = `${beskr}: utfasad rubrik "Praktiska uppgifter" — enda tillåtna övningsrubrik är "Övningar" (05-forfattarmanual.md, termlista.md).`;
		// Klassificering styrs av kapitlets migreringsstatus, samma mekanism för
		// alla kapitel: i ett migrerat kapitel måste innehållet följa nya standarden
		// (aktivt fel), i ett ej migrerat kapitel är den gamla rubriken förväntad
		// skuld. Ingen fil får ett handlagt undantag (migreringsstatus.mjs).
		if (migreradeKapitel.has(avs.chapter)) {
			errors.push(msg);
		} else {
			skuld.push({ kategori: strukturskuldKategorier.OVNINGSRUBRIK, msg });
		}
	}
	// Tomhets- och ordningskontroll för den övningssektion som faktiskt finns
	// (nya "Övningar" eller utfasade "Praktiska uppgifter"). Sektionen är frivillig.
	for (const rubrik of ['Övningar', 'Praktiska uppgifter']) {
		const sektioner = extractSections(avs.body, rubrik);
		if (sektioner.length > 1) {
			errors.push(`${beskr}: flera "${rubrik}"-sektioner — avsnittet ska ha EN samlad sektion.`);
		} else if (sektioner.length === 1) {
			if (!/^\s*\d+\.\s+\S/m.test(sektioner[0])) {
				errors.push(`${beskr}: sektionen "${rubrik}" är tom — minst en numrerad uppgift krävs (03).`);
			}
			const iIndex = avs.body.search(/^#{2,4}\s+Instuderingsfrågor\s*$/m);
			const oIndex = avs.body.search(new RegExp(`^#{2,4}\\s+${rubrik}\\s*$`, 'm'));
			if (iIndex >= 0 && oIndex >= 0 && oIndex < iIndex) {
				errors.push(`${beskr}: "${rubrik}" ligger före "Instuderingsfrågor" — ordningen ska vara löptext, instuderingsfrågor, övningar (03).`);
			}
		}
	}

	// Äldre eller uppdelade uppgiftsrubriker och synliga uppslagsrubriker får inte
	// förekomma. Uppgiftstypen styrs av uppgiften själv, inte av en egen rubrik
	// (03-bokens-arkitektur.md, "Avsnittets struktur").
	const forbjudnaRubriker = [
		/^#{2,4}\s+(Förstå|Utveckla|Utmana)\s*$/m,
		/^#{2,4}\s+Uppslag\b/m,
		/^#{2,4}\s+Begrepp\s*$/m,
		/^#{2,4}\s+Projektuppgifter\s*$/m,
		/^#{2,4}\s+(Beräkningsuppgifter|Rituppgifter|CAD-uppgifter|Programmeringsuppgifter|Laborationer|Konstruktionsuppgifter|Tillämpningsuppgifter|Tillämpningsproblem|Analysuppgifter|Fördjupningsuppgifter|Projekt|Kortare uppgifter)\s*$/m,
	];
	for (const forbjuden of forbjudnaRubriker) {
		const traff = avs.body.match(forbjuden);
		if (traff) {
			errors.push(`${beskr}: rubriken "${traff[0].replace(/^#+\s*/, '')}" får inte förekomma i ett avsnitt — avsnittets uppgifter ligger under "Övningar", kapitlets större uppgifter som helkapitelövningar i senare avsnitts "Övningar" (03, redaktionellt beslut 2026-07-22).`);
		}
	}

	// "Uppslag" som självreferens i elevtexten (05-forfattarmanual.md).
	{
		const synlig = avs.body.replace(/<!--[\s\S]*?-->/g, '');
		const traffar = synlig.match(/\buppslag(et|en|ets)?\b/gi);
		if (traffar) {
			warnings.push(`${beskr}: ordet "uppslag" förekommer ${traffar.length} gång(er) i elevtexten — troligen en självreferens som ska skrivas om (05-forfattarmanual.md, "Självreferenser").`);
		}
	}

	// Inga markdownlänkar i elevtext, utom i ett uttryckligt käll-/resursavsnitt.
	{
		const rader = avs.body.split('\n');
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

	// Numrerade rubriker (kvarleva av den gamla lärandemålsnumreringen) får inte
	// förekomma — synlig rubriknumrering har bara kapitel.avsnitt (06, "Struktur").
	{
		const traff = avs.body.match(/^#{1,6}\s+.*\b\d+\.\d+\.\d+\b/m);
		if (traff) {
			errors.push(`${beskr}: numrerad rubrik "${traff[0].replace(/^#+\s*/, '')}" får inte förekomma — delavsnitt (H2/H3 i källfilen) är onumrerade (06-bokstruktur.md, "Avsnittens och delavsnittens format").`);
		}
	}

	// Personnamnsheuristik (05, "Personnamn").
	{
		const synlig = avs.body.replace(/<!--[\s\S]*?-->/g, '');
		const kandidater = new Set();
		for (const m of synlig.matchAll(/\b([A-ZÅÄÖ][a-zåäö]{2,}) ([A-ZÅÄÖ][a-zåäö]{2,})\b/g)) {
			kandidater.add(`${m[1]} ${m[2]}`);
		}
		if (kandidater.size > 6) {
			warnings.push(`${beskr}: ${kandidater.size} möjliga personnamn (${[...kandidater].join(', ')}) — kontrollera mot 05, "Personnamn" (heuristiken träffar även platser och produkter).`);
		}
	}

	if (avs.body.includes('<!--')) {
		errors.push(`${beskr}: HTML-kommentar kvar i texten — arbetsanteckningar får inte finnas i granskningsklart innehåll (09).`);
	}
	if (/\bTODO\b/.test(avs.body)) {
		errors.push(`${beskr}: "TODO" kvar i texten.`);
	}
	if (avs.learningGoals.length === 0) {
		errors.push(`${beskr}: learningGoals är tomt — ett teoriavsnitt ska ha minst ett lärandemål (06-bokstruktur.md).`);
	}
	if ((avs.curriculumReferences.niva1?.length ?? 0) + (avs.curriculumReferences.niva2?.length ?? 0) === 0) {
		errors.push(`${beskr}: curriculumReferences är tomt — tagga med punkt-id från 07 innan status höjs.`);
	}
	if (avs.figures.length === 0) {
		warnings.push(`${beskr}: inga figurer — kontrollera att detta är ett medvetet beslut (03: "minst en figur när den förbättrar förståelsen").`);
	}
	if (avs.abilities.length === 0) {
		warnings.push(`${beskr}: abilities är tomt — tagga vilken/vilka av de fem bedömda förmågorna (07) avsnittet primärt tränar.`);
	}
	const bodyLower = avs.body.toLowerCase();
	for (const fras of aiFraser) {
		if (bodyLower.includes(fras)) {
			warnings.push(`${beskr}: AI-typisk formulering "${fras}" förekommer (05-forfattarmanual.md, "AI-språk som ska undvikas").`);
		}
	}
	// Tankstreck/talstreck används inte i elevtexten (05). Kodblock undantas.
	let inCodeBlock = false;
	let tankstreck = 0;
	for (const line of avs.body.split('\n')) {
		if (/^(```|~~~)/.test(line)) inCodeBlock = !inCodeBlock;
		if (!inCodeBlock) tankstreck += (line.match(/—|–/g) ?? []).length;
	}
	if (tankstreck > 0) {
		warnings.push(`${beskr}: tankstreck/talstreck förekommer ${tankstreck} gång(er) i elevtexten (05-forfattarmanual.md, "Tankstreck").`);
	}
}

// Hygien för legacyOvningsrubrikFiler: registret ska bara innehålla filer som
// FAKTISKT ännu bär den utfasade rubriken "Praktiska uppgifter". Har en post
// migrerats (fått "Övningar") utan att avregistreras, eller saknas filen, flaggas
// den så registret inte ruttnar (migreringsstatus.mjs).
for (const relPath of legacyOvningsrubrikFiler) {
	const avs = avsnittFiler.find((a) => a.file === relPath);
	if (!avs) {
		warnings.push(`legacyOvningsrubrikFiler: posten ${relPath} saknar avsnittsfil — ta bort den ur scripts/migreringsstatus.mjs.`);
	} else if (!/^#{2,4}\s+Praktiska uppgifter\s*$/m.test(avs.body)) {
		warnings.push(`legacyOvningsrubrikFiler: ${relPath} bär inte längre rubriken "Praktiska uppgifter" — ta bort den ur scripts/migreringsstatus.mjs.`);
	}
}

// -------------------------------------------------------- Kapitelavslutningar
// Strukturkällan är 06-bokstruktur.md självt (via bokstruktur-data.mjs) — varje
// kapitel har (nya modellen, 2026-07-22) Sammanfattning och Begrepp som sina två
// sista avsnitt. Stäm av mot filerna åt båda håll.
const planKapitelavslutningPaths = new Set(plan.filter((p) => p.type).map((p) => p.relPath));
for (const p of plan) {
	if (!p.type) continue;
	const ka = kapitelavslutningsFiler.find((f) => f.file === p.relPath);
	if (!ka) {
		errors.push(`Planerad kapitelavslutning saknar fil: ${p.relPath} (type ${p.type}, kapitel ${p.chapter}) — kör \`npm run skeleton\`.`);
		continue;
	}
	if (ka.type !== p.type) {
		errors.push(`${ka.file}: type "${ka.type}" stämmer inte med bokstrukturens "${p.type}".`);
	}
	if (ka.chapter !== p.chapter || ka.sectionNumber !== p.sectionNumber) {
		errors.push(`${ka.file}: chapter/sectionNumber stämmer inte med bokstrukturen (${p.chapter}/${p.sectionNumber}).`);
	}
	if (ka.title !== p.titel) {
		warnings.push(`${ka.file}: titeln "${ka.title}" avviker från bokstrukturens "${p.titel}".`);
	}
}

for (const ka of kapitelavslutningsFiler) {
	if (!planKapitelavslutningPaths.has(ka.file)) {
		// Utfasade uppgiftsbanksfiler (NN-projektuppgifter.md) fångas här och
		// klassas som migreringsskuld nedan. De valideras inte längre som banker.
		errors.push(`${ka.file}: kapitelavslutning (type ${ka.type}) finns inte i 06-bokstruktur.md.`);
	}
}

// Begreppslistans format (03-bokens-arkitektur.md, "Begrepp", redaktionellt beslut
// 2026-07-22): en kompakt ordlista utan punktmarkering, en post per rad på formen
// "**Begrepp:** Definition." — fetstilt begrepp med kolon inom fetstilen, inga
// tankstreck, definition som fullständig mening med avslutande punkt. Kontrolleras
// från granskningsstatus. Filer i legacyBegreppFiler har ännu det gamla
// ifyllnadsformatet och redovisas som migreringsskuld i stället för aktivt fel.
for (const ka of kapitelavslutningsFiler) {
	if (ka.type !== 'begreppsovning') continue;
	if (statusEnum.indexOf(ka.status) < GRANSKNINGSSTATUS) continue;
	if (legacyBegreppFiler.has(ka.file)) {
		skuld.push({
			kategori: strukturskuldKategorier.BEGREPP_FORMAT,
			msg: `${ka.file}: gammalt ifyllnadsformat i begreppslistan — migreras till ordlisteformatet "**Begrepp:** Definition." när kapitlet revideras.`,
		});
		continue;
	}
	const rader = ka.body.split('\n').map((r) => r.replace(/\r$/, '')).filter((r) => r.trim() !== '');
	if (rader.length === 0) {
		errors.push(`${ka.file}: begreppslistan är tom (03-bokens-arkitektur.md, "Begrepp").`);
		continue;
	}
	for (const rad of rader) {
		const kärna = rad.replace(/\\\s*$/, '').trimEnd(); // ta bort hård radbrytning (\)
		const utdrag = kärna.length > 45 ? `${kärna.slice(0, 45)}…` : kärna;
		if (/^\s*[-*+]\s/.test(kärna)) {
			errors.push(`${ka.file}: punktmarkering i begreppslistan ("${utdrag}") — ordlistan skrivs utan punkter, en post per rad "**Begrepp:** Definition." (03-bokens-arkitektur.md, "Begrepp").`);
		} else if (/[—–]/.test(kärna)) {
			errors.push(`${ka.file}: tankstreck i begreppslistan ("${utdrag}") — använd formen "**Begrepp:** Definition." utan tankstreck (03-bokens-arkitektur.md, "Begrepp").`);
		} else if (!/^\*\*[^*]+:\*\*\s/.test(kärna)) {
			errors.push(`${ka.file}: begreppet är inte fetstilt med kolon inom fetstilen ("${utdrag}") — formen är "**Begrepp:** Definition." (03-bokens-arkitektur.md, "Begrepp").`);
		} else if (!/\.$/.test(kärna)) {
			errors.push(`${ka.file}: definitionen saknar avslutande punkt ("${utdrag}") — definitionen ska vara en fullständig mening (03-bokens-arkitektur.md, "Begrepp").`);
		}
	}
}

// -------------------------------------------------------------- Statusöversikt
const statusCount = {};
const chapterStatus = new Map();
for (const avs of avsnittFiler) {
	statusCount[avs.status] = (statusCount[avs.status] ?? 0) + 1;
	if (!chapterStatus.has(avs.chapter)) chapterStatus.set(avs.chapter, { totalt: 0, klara: 0, paborjade: 0 });
	const cs = chapterStatus.get(avs.chapter);
	cs.totalt++;
	if (avs.status === 'klar') cs.klara++;
	if (avs.status !== 'ej-paborjad') cs.paborjade++;
}

const totaltAntalAvsnitt = plan.filter((p) => !p.type).length;
console.log(`Kontrollerade ${avsnittFiler.length} avsnittsfiler och ${kapitelavslutningsFiler.length} kapitelavslutningar av ${files.length} markdown-filer totalt (${totaltAntalAvsnitt} avsnitt i bokstrukturen, ${kapitel.length} kapitel).\n`);

if (avsnittFiler.length > 0) {
	console.log('Statusöversikt (avsnitt):');
	for (const [status, count] of Object.entries(statusCount)) {
		console.log(`  ${status}: ${count}`);
	}
	console.log('\nPer kapitel (påbörjade/klara av totalt; migreringsläge):');
	for (const [chapter, cs] of [...chapterStatus.entries()].sort((a, b) => a[0] - b[0])) {
		const mig = migreradeKapitel.has(chapter) ? 'migrerad' : 'ej migrerad';
		console.log(`  Kapitel ${chapter}: ${cs.paborjade} påbörjade, ${cs.klara} klara av ${cs.totalt} — ${mig}`);
	}
	console.log('');
}

// Kursplanetäckningsöversikt per punkt.
function tackningsrad(punkt, nivaKey) {
	const taggade = avsnittFiler.filter((avs) => {
		const taggar = nivaKey === 'bada' ? [...(avs.curriculumReferences.niva1 ?? []), ...(avs.curriculumReferences.niva2 ?? [])] : (avs.curriculumReferences[nivaKey] ?? []);
		return taggar.includes(punkt.id) && avs.status !== 'ej-paborjad';
	});
	const primar = taggade.filter((avs) => avs.chapter === punkt.primar).length;
	const ovriga = taggade.length - primar;
	const symbol = primar > 0 ? '●' : taggade.length > 0 ? '◐' : '·';
	return `  ${symbol} ${punkt.id} [kap ${String(punkt.primar).padStart(2)}] ${punkt.text.slice(0, 80)}${punkt.text.length > 80 ? '…' : ''} (${primar} i primärkapitlet${ovriga > 0 ? `, ${ovriga} övriga` : ''})`;
}
console.log('Kursplanetäckning (påbörjade avsnitt per punkt; ● = täckt i primärkapitlet, ◐ = endast i övriga):');
console.log(' Nivå 1:');
for (const punkt of niva1) console.log(tackningsrad(punkt, 'niva1'));
console.log(' Nivå 2:');
for (const punkt of niva2) console.log(tackningsrad(punkt, 'niva2'));
console.log(' Syftesmål:');
for (const punkt of syftesmal) console.log(tackningsrad(punkt, 'bada'));
console.log('');

// Skilj känd, förväntad migreringsskuld från aktiva fel. Strukturskulden
// (kapitel 1-mappen + de utfasade projektuppgiftsfilerna) genereras som vanliga
// fel ovan och flyttas hit genom omklassning; övningsrubriksskulden lades redan
// direkt i `skuld`. Allt som inte matchar en känd skuldsignatur förblir aktivt
// fel — så ett nytt, äkta fel kan aldrig gömma sig i skuldlistan
// (migreringsstatus.mjs; produktionslogg.md 2026-07-22).
{
	const kvarErrors = [];
	for (const e of errors) {
		const kategori = klassificeraStrukturskuld(e);
		if (kategori) skuld.push({ kategori, msg: e });
		else kvarErrors.push(e);
	}
	errors = kvarErrors;
}

// ------------------------------------------------ Låsta kapitel (redigeringsskydd)
// Ett låst kapitel (migreringsstatus.mjs, lastaKapitel) får aldrig ändras av Claude
// Code (CLAUDE.md, "Låsta kapitel"). Vakten fångar en oavsiktlig redigering INNAN den
// committas: skiljer sig någon fil under kapitlets mapp från HEAD (oincheckad ändring
// — modifierad, staged eller untracked) ges aktivt fel. Läggs efter skuldomklassningen
// så att det alltid blir ett hårt aktivt fel, aldrig omklassat till migreringsskuld.
if (lastaKapitel.size > 0) {
	const repoRoot = path.join(root, '..');
	const contentEntries = await readdir(contentDir, { withFileTypes: true });
	for (const kap of [...lastaKapitel].sort((a, b) => a - b)) {
		const prefix = `${String(kap).padStart(2, '0')}-`;
		const mapp = contentEntries.find((e) => e.isDirectory() && e.name.startsWith(prefix));
		if (!mapp) continue;
		const relPath = `content/${mapp.name}`;
		let porslin;
		try {
			porslin = execSync(`git status --porcelain -- "${relPath}"`, { cwd: repoRoot, encoding: 'utf8' });
		} catch {
			warnings.push(`Låst kapitel ${kap}: kunde inte kontrollera ${relPath} mot HEAD (git ej tillgängligt) — redigeringsskyddet gick inte att verifiera.`);
			continue;
		}
		for (const rad of porslin.split('\n').map((r) => r.trimEnd()).filter(Boolean)) {
			const fil = rad.slice(3).replace(/^"(.*)"$/, '$1'); // porslin: XY <path>
			errors.push(`Låst kapitel ${kap}: "${fil}" har oincheckade ändringar men kapitel ${kap} är låst för redigering (CLAUDE.md, "Låsta kapitel"). Återställ filen eller be projektägaren lyfta låset.`);
		}
	}
}

if (warnings.length > 0) {
	console.log(`Varningar (${warnings.length}):`);
	for (const w of warnings) console.log(`  ⚠ ${w}`);
	console.log('');
}

if (skuld.length > 0) {
	const grupper = new Map();
	for (const s of skuld) {
		if (!grupper.has(s.kategori)) grupper.set(s.kategori, []);
		grupper.get(s.kategori).push(s.msg);
	}
	console.log(`Förväntad migreringsskuld (${skuld.length}) — känd och väntad tills berörda kapitel migreras, räknas inte som fel (produktionslogg.md 2026-07-22):`);
	for (const [kategori, msgs] of grupper) {
		console.log(`  ${kategori} (${msgs.length}):`);
		for (const m of msgs) console.log(`    · ${m}`);
	}
	console.log('');
}

if (errors.length > 0) {
	console.log(`Aktiva fel (${errors.length}):`);
	for (const e of errors) console.log(`  ✗ ${e}`);
	console.log('');
	console.error(`Validering misslyckades: ${errors.length} aktiva fel (förväntad migreringsskuld: ${skuld.length}, räknas inte som fel).`);
	process.exit(1);
}

console.log(`Validering OK — 0 aktiva fel. Förväntad migreringsskuld: ${skuld.length} (se lista ovan; känd, väntad tills kapitlen migreras).`);
