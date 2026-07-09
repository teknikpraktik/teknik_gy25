// Läser bokens struktur (kapitel, moduler, lärandemål) direkt ur
// 06-bokstruktur.md, som är den enda källan — det finns ingen separat datafil
// att hålla i synk. Radformatet som tolkas är dokumenterat i 06 under
// "Lärandemålens format". Vid formatfel kastas ett fel med radnummer, vilket
// får `npm run validate` (och alla andra skript) att stanna.
//
// Filnamn i content/ nollutfylls (6.01-krafter/6.01.02-kraftresultanter.md)
// så att lexikografisk sortering i webbplatsens sidopanel och navigering
// stämmer även vid tvåsiffriga modul- och löpnummer. Id:t i frontmattern
// förblir opaddat ("6.1.2").

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const bokstrukturPath = path.join(root, '..', '06-bokstruktur.md');

function parseBokstruktur(text) {
	const lines = text.split(/\r?\n/);
	const kapitelLista = [];
	const fel = [];
	let k = null; // aktuellt kapitel
	let m = null; // aktuell modul
	let inCodeBlock = false;

	lines.forEach((line, idx) => {
		const rad = idx + 1;

		if (/^```/.test(line)) {
			inCodeBlock = !inCodeBlock;
			return;
		}
		if (inCodeBlock) return;

		const kap = line.match(/^# Kapitel (\d+) – (.+)$/);
		if (kap) {
			k = { nr: Number(kap[1]), titel: kap[2].trim(), moduler: [] };
			if (k.nr !== kapitelLista.length + 1) {
				fel.push(`rad ${rad}: kapitel ${k.nr} följer inte löpande på föregående (${kapitelLista.length}).`);
			}
			kapitelLista.push(k);
			m = null;
			return;
		}
		if (/^# /.test(line)) {
			// Annan huvudrubrik (Dokumentnamn, Struktur, Produktionsstatus …)
			// avslutar kapitelkontexten.
			k = null;
			m = null;
			return;
		}

		const mod = line.match(/^## Modul (\d+)\.(\d+) (.+)$/);
		if (mod) {
			if (!k) {
				fel.push(`rad ${rad}: modulrubrik utanför ett kapitel.`);
				return;
			}
			if (Number(mod[1]) !== k.nr) {
				fel.push(`rad ${rad}: modulens kapitelnummer ${mod[1]} matchar inte kapitel ${k.nr}.`);
			}
			if (Number(mod[2]) !== k.moduler.length + 1) {
				fel.push(`rad ${rad}: modulnummer ${mod[1]}.${mod[2]} följer inte löpande (väntade ${k.nr}.${k.moduler.length + 1}).`);
			}
			m = { titel: mod[3].trim(), larandemal: [] };
			k.moduler.push(m);
			return;
		}
		if (/^## /.test(line)) {
			m = null;
			return;
		}

		if (m && /^- /.test(line)) {
			const lm = line.match(/^- \*\*(\d+)\.(\d+)\.(\d+) (.+?)\*\* — (.+?)(?:\s*\*\*\((\d+) uppslag\)\*\*)?$/);
			if (!lm) {
				fel.push(`rad ${rad}: lärandemålsrad följer inte formatet "- **K.M.L Titel** — Mål." (ev. följt av "**(N uppslag)**"). Se 06, "Lärandemålens format".`);
				return;
			}
			const [, kNr, mNr, lNr, titel, mal, uppslag] = lm;
			const vantatId = `${k.nr}.${k.moduler.length}.${m.larandemal.length + 1}`;
			const radId = `${kNr}.${mNr}.${lNr}`;
			if (radId !== vantatId) {
				fel.push(`rad ${rad}: lärandemåls-id ${radId} följer inte löpande (väntade ${vantatId}).`);
			}
			m.larandemal.push({
				titel: titel.trim(),
				mal: mal.trim(),
				...(uppslag ? { uppslag: Number(uppslag) } : {}),
			});
		}
	});

	for (const kap of kapitelLista) {
		if (kap.moduler.length === 0) fel.push(`kapitel ${kap.nr} saknar moduler.`);
		kap.moduler.forEach((mod, i) => {
			if (mod.larandemal.length === 0) fel.push(`modul ${kap.nr}.${i + 1} saknar lärandemål.`);
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

export function kapitelSlug(k) {
	return `${pad2(k.nr)}-${slugify(k.titel)}`;
}

export function modulSlug(k, moduleIndex) {
	return `${k.nr}.${pad2(moduleIndex + 1)}-${slugify(k.moduler[moduleIndex].titel)}`;
}

export function larandemalId(k, moduleIndex, lmIndex) {
	return `${k.nr}.${moduleIndex + 1}.${lmIndex + 1}`;
}

export function larandemalFilnamn(k, moduleIndex, lmIndex) {
	const lm = k.moduler[moduleIndex].larandemal[lmIndex];
	return `${k.nr}.${pad2(moduleIndex + 1)}.${pad2(lmIndex + 1)}-${slugify(lm.titel)}.md`;
}

// Platt lista över alla planerade lärandemål — används av validate.mjs för
// synkkontrollen mellan bokstrukturen och content/-mapparna samt av exporten.
export function allaLarandemal() {
	const result = [];
	for (const k of kapitel) {
		for (let i = 0; i < k.moduler.length; i++) {
			const m = k.moduler[i];
			for (let j = 0; j < m.larandemal.length; j++) {
				const lm = m.larandemal[j];
				result.push({
					id: larandemalId(k, i, j),
					chapter: k.nr,
					module: `${k.nr}.${i + 1}`,
					titel: lm.titel,
					mal: lm.mal,
					uppslag: lm.uppslag ?? 1,
					relPath: `${kapitelSlug(k)}/${modulSlug(k, i)}/${larandemalFilnamn(k, i, j)}`,
				});
			}
		}
	}
	return result;
}
