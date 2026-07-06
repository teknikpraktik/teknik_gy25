// Samlar alla lärandemålsfiler i kanonisk läsordning (kapitel → modul → id)
// till ett sammanhängande manus och kör det genom Pandoc till .docx (till
// förlaget) och valfritt PDF. Körs fristående (`npm run export`), frikopplat
// från webbplatsens build — samma källfiler används av båda, i linje med
// 12-produktionsarkitektur.md:s princip om presentationsoberoende källmaterial.
//
// Figur- och begreppsshortcodes ([[figur:ID]], [[begrepp:namn]]) löses upp till
// löptext/figurplatshållare istället för webblänkar, eftersom ett bokmanus
// inte har klickbara länkar.

import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import matter from 'gray-matter';
import YAML from 'yaml';

const execFileAsync = promisify(execFile);

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, '..', 'content');
const exportDir = path.join(root, '..', 'export');
const figuresRegistryPath = path.join(root, '..', 'figures', 'registry.yml');

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

const files = await walk(contentDir);
const larandemal = [];

for (const file of files) {
	const raw = await readFile(file, 'utf8');
	const { data, content } = matter(raw);
	if (data.id === undefined) continue;
	larandemal.push({ file, data, content });
}

larandemal.sort((a, b) => compareIds(a.data.id, b.data.id));

if (larandemal.length === 0) {
	console.log('Inga lärandemålsfiler hittades — inget att exportera ännu.');
	process.exit(0);
}

let manuscript = '';
let currentChapter = null;
for (const lm of larandemal) {
	if (lm.data.chapter !== currentChapter) {
		currentChapter = lm.data.chapter;
		manuscript += `\n\n# Kapitel ${currentChapter}\n\n`;
	}
	manuscript += `\n\n## ${lm.data.title}\n\n${resolveShortcodes(lm.content)}\n`;
}

await mkdir(exportDir, { recursive: true });
const manuscriptPath = path.join(exportDir, 'manuscript.md');
await writeFile(manuscriptPath, manuscript, 'utf8');
console.log(`Manus sammanställt (${larandemal.length} lärandemål) → ${path.relative(process.cwd(), manuscriptPath)}`);

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
