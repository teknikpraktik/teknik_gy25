// Läser bokens struktur (kapitel, avsnitt, delavsnitt, lärandemål) direkt ur
// 06-bokstruktur.md, som är den enda källan — det finns ingen separat datafil
// att hålla i synk. Radformatet som tolkas är dokumenterat i 06 under
// "Avsnittens och delavsnittens format". Vid formatfel kastas ett fel med
// radnummer, vilket får `npm run validate` (och alla andra skript) att stanna.
//
// Avsnittet (H2) är produktionens och publiceringens minsta enhet — en fil per
// avsnitt, direkt under kapitlets mapp (ingen egen undermapp längre). Delavsnitt
// (H3) och lärandemål är inte filer eller mappar, bara innehåll i avsnittsfilen
// respektive metadata i dess frontmatter.
//
// Filnamn i content/ nollutfylls (6.02-att-losa-tekniska-problem/02-...) så att
// lexikografisk sortering i webbplatsens sidopanel och navigering stämmer även
// vid tvåsiffriga sektionsnummer. Id:t i frontmattern förblir opaddat ("6.2").

import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Kapitelavslutningarnas fasta titlar → type, i den ordning de alltid avslutar
// ett kapitel (06-bokstruktur.md, "Kapitelavslutningar"). Redaktionellt beslut
// 2026-07-22: Projektuppgifter avvecklat som egen kapitelavslutning (uppgifter
// flyttar in i avsnittens Övningar som helkapitelövningar). Kapitelavslutningarna
// är nu två och skrivs onumrerade i 06 ("## Sammanfattning", "## Begrepp").
const KAPITELAVSLUTNING_TYP_AV_TITEL = {
	Sammanfattning: 'kapitelsammanfattning',
	Begrepp: 'begreppsovning',
};
const KAPITELAVSLUTNING_TITLAR = Object.keys(KAPITELAVSLUTNING_TYP_AV_TITEL);
const ANTAL_KAPITELAVSLUTNINGAR = KAPITELAVSLUTNING_TITLAR.length;

// Filen importeras både direkt av Node (skripten, astro.config) och bundlad av
// Vite (webbplatsens genererade kapitel-/avsnittsvyer). I det senare fallet
// pekar import.meta.url på byggartefakten — därför söks projektroten uppåt från
// både filens plats och processens arbetskatalog.
function hittaProjektRoot() {
	const kandidater = [path.dirname(fileURLToPath(import.meta.url)), process.cwd()];
	for (const start of kandidater) {
		let dir = start;
		for (let steg = 0; steg < 6; steg++) {
			if (existsSync(path.join(dir, '06-bokstruktur.md'))) return dir;
			const upp = path.dirname(dir);
			if (upp === dir) break;
			dir = upp;
		}
	}
	throw new Error(`Hittar inte 06-bokstruktur.md (projektroten) utifrån ${kandidater.join(' eller ')}.`);
}

const bokstrukturPath = path.join(hittaProjektRoot(), '06-bokstruktur.md');

function parseBokstruktur(text) {
	const lines = text.split(/\r?\n/);
	const kapitelLista = [];
	const fel = [];
	let k = null; // aktuellt kapitel
	let a = null; // aktuellt avsnitt
	let avsnittFas = null; // 'mal' medan lärandemålslistan fortfarande kan fortsätta, annars null
	let inCodeBlock = false;

	lines.forEach((line, idx) => {
		const rad = idx + 1;

		if (/^```/.test(line)) {
			inCodeBlock = !inCodeBlock;
			return;
		}
		if (inCodeBlock) return;

		const kap = line.match(/^# Kapitel (\d+) · (.+)$/);
		if (kap) {
			k = { nr: Number(kap[1]), titel: kap[2].trim(), avsnitt: [] };
			if (k.nr !== kapitelLista.length + 1) {
				fel.push(`rad ${rad}: kapitel ${k.nr} följer inte löpande på föregående (${kapitelLista.length}).`);
			}
			kapitelLista.push(k);
			a = null;
			avsnittFas = null;
			return;
		}
		if (/^# /.test(line)) {
			// Annan huvudrubrik (Dokumentnamn, Struktur, Produktionsstatus …)
			// avslutar kapitelkontexten.
			k = null;
			a = null;
			avsnittFas = null;
			return;
		}

		const avs = line.match(/^## (\d+)\.(\d+) (.+)$/);
		if (avs) {
			if (!k) {
				fel.push(`rad ${rad}: avsnittsrubrik utanför ett kapitel.`);
				return;
			}
			if (Number(avs[1]) !== k.nr) {
				fel.push(`rad ${rad}: avsnittets kapitelnummer ${avs[1]} matchar inte kapitel ${k.nr}.`);
			}
			if (Number(avs[2]) !== k.avsnitt.length + 1) {
				fel.push(`rad ${rad}: sektionsnummer ${avs[1]}.${avs[2]} följer inte löpande (väntade ${k.nr}.${k.avsnitt.length + 1}).`);
			}
			const titel = avs[3].trim();
			a = { titel, larandemal: [], delavsnitt: [], type: KAPITELAVSLUTNING_TYP_AV_TITEL[titel] };
			k.avsnitt.push(a);
			avsnittFas = 'mal';
			return;
		}
		const kapitelavslutningTitel = KAPITELAVSLUTNING_TITLAR.find((t) => line === `## ${t}`);
		if (kapitelavslutningTitel) {
			if (!k) {
				fel.push(`rad ${rad}: kapitelavslutning utanför ett kapitel.`);
				return;
			}
			a = {
				titel: kapitelavslutningTitel,
				larandemal: [],
				delavsnitt: [],
				type: KAPITELAVSLUTNING_TYP_AV_TITEL[kapitelavslutningTitel],
			};
			k.avsnitt.push(a);
			avsnittFas = null; // kapitelavslutningar är onumrerade och har ingen lärandemålslista
			return;
		}
		if (/^## /.test(line)) {
			fel.push(`rad ${rad}: avsnittsrubrik följer inte formatet "## <kapitel>.<sektionsnr> <Titel>" eller en kapitelavslutning ("## ${KAPITELAVSLUTNING_TITLAR.join('" / "## ')}"). Se 06, "Avsnittens och delavsnittens format".`);
			a = null;
			avsnittFas = null;
			return;
		}

		const delavs = line.match(/^### (.+)$/);
		if (delavs) {
			if (!a) {
				fel.push(`rad ${rad}: delavsnittsrubrik utanför ett avsnitt.`);
				return;
			}
			a.delavsnitt.push(delavs[1].trim());
			avsnittFas = null; // lärandemålslistan är avslutad så fort ett delavsnitt eller annat innehåll setts
			return;
		}

		if (a && avsnittFas === 'mal' && /^- /.test(line)) {
			a.larandemal.push(line.replace(/^- /, '').trim());
			return;
		}

		// Tom rad avslutar inte lärandemålslistan (tillåter blankrad mellan
		// avsnittsraden och punktlistan, eller mellan punktlistan och första
		// delavsnittet); allt annat innehåll gör det.
		if (line.trim() !== '') {
			avsnittFas = null;
		}
	});

	for (const kap of kapitelLista) {
		if (kap.avsnitt.length === 0) {
			fel.push(`kapitel ${kap.nr} saknar avsnitt.`);
			continue;
		}
		const sistaN = kap.avsnitt.slice(-ANTAL_KAPITELAVSLUTNINGAR).map((a) => a.titel);
		if (JSON.stringify(sistaN) !== JSON.stringify(KAPITELAVSLUTNING_TITLAR)) {
			fel.push(`kapitel ${kap.nr}: de sista ${ANTAL_KAPITELAVSLUTNINGAR} avsnitten ska vara ${KAPITELAVSLUTNING_TITLAR.join(' → ')} (hittade: ${sistaN.join(' → ') || '—'}).`);
		}
		kap.avsnitt.forEach((avs, i) => {
			const arKapitelavslutning = i >= kap.avsnitt.length - ANTAL_KAPITELAVSLUTNINGAR;
			if (!arKapitelavslutning && avs.larandemal.length === 0) {
				fel.push(`avsnitt ${kap.nr}.${i + 1} "${avs.titel}" saknar lärandemål.`);
			}
			if (arKapitelavslutning && avs.larandemal.length > 0) {
				fel.push(`avsnitt ${kap.nr}.${i + 1} "${avs.titel}" är en kapitelavslutning och ska inte ha lärandemål.`);
			}
		});
	}
	if (kapitelLista.length === 0) fel.push('inga kapitel hittades.');

	if (fel.length > 0) {
		throw new Error('06-bokstruktur.md kunde inte tolkas:\n' + fel.map((f) => `  ✗ ${f}`).join('\n'));
	}
	return kapitelLista;
}

export const kapitel = parseBokstruktur(readFileSync(bokstrukturPath, 'utf8'));

export function slugify(text) {
	return text
		.toLowerCase()
		.replace(/å/g, 'a')
		.replace(/ä/g, 'a')
		.replace(/ö/g, 'o')
		.replace(/é/g, 'e')
		.replace(/ü/g, 'u')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function pad2(n) {
	return String(n).padStart(2, '0');
}

// Astros routes slugifierar sökvägssegment genom att ta bort punkter:
// "6.02-..." → "602-...". Används av webbplatsens sidopanel och genererade
// vyer för att bygga URL:er som matchar content-sidornas routes.
export function routeSegment(segment) {
	return segment.replaceAll('.', '');
}

export function kapitelSlug(k) {
	return `${pad2(k.nr)}-${slugify(k.titel)}`;
}

export function avsnittId(k, avsnittIndex) {
	return `${k.nr}.${avsnittIndex + 1}`;
}

export function avsnittFilnamn(k, avsnittIndex) {
	const avs = k.avsnitt[avsnittIndex];
	return `${pad2(avsnittIndex + 1)}-${slugify(avs.titel)}.md`;
}

// Platt lista över alla planerade avsnitt — används av validate.mjs för
// synkkontrollen mellan bokstrukturen och content/-mapparna samt av exporten.
export function allaAvsnitt() {
	const result = [];
	for (const k of kapitel) {
		for (let i = 0; i < k.avsnitt.length; i++) {
			const a = k.avsnitt[i];
			result.push({
				id: avsnittId(k, i),
				chapter: k.nr,
				sectionNumber: i + 1,
				titel: a.titel,
				larandemal: a.larandemal,
				delavsnitt: a.delavsnitt,
				type: a.type,
				relPath: `${kapitelSlug(k)}/${avsnittFilnamn(k, i)}`,
			});
		}
	}
	return result;
}
