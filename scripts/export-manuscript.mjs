// Sammanställer lärandemålsfilerna till ett bokmanus i kanonisk läsordning
// (kapitel → modul → lärandemål, ordningen ur 06 via bokstruktur-data.mjs) och
// kör resultatet genom Pandoc till .docx (till förlaget). Körs fristående
// (`npm run export`), frikopplat från webbplatsens build — samma källfiler
// används av båda, i linje med 12-produktionsarkitektur.md.
//
// Endast lärandemål som nått en viss status exporteras (arbetsmaterial ska
// aldrig hamna i en leverans, se 09 "Förlagsgranskning"):
//
//   npm run export                                  → fardig-forsta-version och uppåt
//   npm run export -- --status=sprakgranskad        → sprakgranskad och uppåt
//   npm run export -- --status=alla                 → allt, oavsett status (internt bruk)
//
// HTML-kommentarer (arbetsanteckningar) strippas ur manuset. Figur- och
// begreppsshortcodes ([[figur:ID]], [[begrepp:namn]]) löses upp till
// figurplatshållartext respektive löptext — ett bokmanus har inga länkar.

import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import matter from 'gray-matter';
import YAML from 'yaml';
import { statusEnum } from '../schemas/larandemal.schema.mjs';
import { kapitel, kapitelSlug, modulSlug, larandemalId, larandemalFilnamn } from './bokstruktur-data.mjs';

const execFileAsync = promisify(execFile);

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, '..', 'content');
const exportDir = path.join(root, '..', 'export');
const figuresRegistryPath = path.join(root, '..', 'figures', 'registry.yml');

// --status=<minstatus|alla>
const statusArg = process.argv.find((a) => a.startsWith('--status='))?.split('=')[1] ?? 'fardig-forsta-version';
let minStatusIdx;
if (statusArg === 'alla') {
	minStatusIdx = 0;
} else {
	minStatusIdx = statusEnum.indexOf(statusArg);
	if (minStatusIdx === -1) {
		console.error(`Okänd status "${statusArg}". Giltiga värden: ${statusEnum.join(', ')}, alla.`);
		process.exit(1);
	}
}

const figureRegistry = YAML.parse(await readFile(figuresRegistryPath, 'utf8')) || {};

function resolveShortcodes(body) {
	return body
		.replace(/\[\[figur:([a-zA-Z0-9_.-]+)\]\]/g, (_match, figId) => {
			const fig = figureRegistry[figId];
			if (!fig) return `\n\n> **[FIGUR SAKNAS: ${figId}]**\n\n`;
			return `\n\n> **[FIGUR ${figId}]** ${fig.syfte ?? ''} — ${fig.innehall ?? ''}\n\n`;
		})
		.replace(/\[\[begrepp:([^\]]+)\]\]/g, (_match, concept) => concept);
}

function stripArbetsanteckningar(body) {
	return body.replace(/<!--[\s\S]*?-->/g, '').replace(/\n{3,}/g, '\n\n').trim();
}

let manuscript = '';
let exporterade = 0;
const utelamnade = {}; // status → antal
const saknadeFiler = [];

for (const k of kapitel) {
	let kapitelDel = '';
	for (let i = 0; i < k.moduler.length; i++) {
		const m = k.moduler[i];
		let modulDel = '';
		for (let j = 0; j < m.larandemal.length; j++) {
			const id = larandemalId(k, i, j);
			const filePath = path.join(contentDir, kapitelSlug(k), modulSlug(k, i), larandemalFilnamn(k, i, j));
			let raw;
			try {
				raw = await readFile(filePath, 'utf8');
			} catch {
				saknadeFiler.push(id);
				continue;
			}
			const { data, content } = matter(raw);
			const statusIdx = statusEnum.indexOf(data.status);
			if (statusIdx < minStatusIdx) {
				utelamnade[data.status] = (utelamnade[data.status] ?? 0) + 1;
				continue;
			}
			modulDel += `\n\n### ${data.title}\n\n${resolveShortcodes(stripArbetsanteckningar(content))}\n`;
			exporterade++;
		}
		if (modulDel !== '') {
			kapitelDel += `\n\n## ${k.nr}.${i + 1} ${m.titel}\n${modulDel}`;
		}
	}
	if (kapitelDel !== '') {
		manuscript += `\n\n# Kapitel ${k.nr} – ${k.titel}\n${kapitelDel}`;
	}
}

const antalUtelamnade = Object.values(utelamnade).reduce((a, b) => a + b, 0);
if (saknadeFiler.length > 0) {
	console.log(`⚠ ${saknadeFiler.length} planerade lärandemål saknar fil (kör npm run skeleton / npm run validate): ${saknadeFiler.join(', ')}`);
}
if (antalUtelamnade > 0) {
	console.log(`Utelämnade (status under ${statusArg === 'alla' ? '—' : statusArg}): ${antalUtelamnade} lärandemål`);
	for (const [status, antal] of Object.entries(utelamnade)) {
		console.log(`  ${status}: ${antal}`);
	}
}

if (exporterade === 0) {
	console.log(`\nInget lärandemål har nått status ${statusArg} ännu — inget manus att exportera.`);
	process.exit(0);
}

await mkdir(exportDir, { recursive: true });
const manuscriptPath = path.join(exportDir, 'manuscript.md');
await writeFile(manuscriptPath, manuscript.trim() + '\n', 'utf8');
console.log(`\nManus sammanställt (${exporterade} lärandemål, lägsta status ${statusArg}) → ${path.relative(process.cwd(), manuscriptPath)}`);

try {
	await execFileAsync('pandoc', ['--version']);
} catch {
	console.log('\nPandoc hittades inte på systemet. Installera det för att slutföra export till .docx/PDF, t.ex.:');
	console.log('  winget install --id JohnMacFarlane.Pandoc');
	console.log('Källfilen export/manuscript.md är skapad och kan konverteras manuellt när Pandoc finns installerat.');
	process.exit(0);
}

const docxPath = path.join(exportDir, 'manuscript.docx');
await execFileAsync('pandoc', [manuscriptPath, '-o', docxPath]);
console.log(`Word-manus skapat → ${path.relative(process.cwd(), docxPath)}`);
