// Genererar det centrala begreppsregistret ur lärandemålsfilernas frontmatter
// (concepts_introduced / concepts_used) till export/begreppsregister.md.
//
// Registret är HÄRLETT, aldrig handredigerat: källan till varje begrepps
// huvudställe är frontmatterfältet concepts_introduced i exakt en fil
// (12-produktionsarkitektur.md, "Begrepp"; 11-begreppsfilosofi.md, "Begrepp
// introduceras en gång"). Unikheten kontrolleras av validate.mjs — detta
// skript sammanställer bara översikten. Kör med `npm run begrepp`.

import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, '..', 'content');
const exportDir = path.join(root, '..', 'export');

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

const files = await walk(contentDir);
const larandemal = [];
for (const file of files) {
	const raw = await readFile(file, 'utf8');
	const { data } = matter(raw);
	if (data.id === undefined) continue;
	larandemal.push(data);
}

// begrepp → { introduceras: id|null, anvands: [id, ...] }
const begrepp = new Map();
function post(namn) {
	if (!begrepp.has(namn)) begrepp.set(namn, { introduceras: null, anvands: [] });
	return begrepp.get(namn);
}
for (const lm of larandemal) {
	for (const namn of lm.concepts_introduced ?? []) post(namn).introduceras = lm.id;
	for (const namn of lm.concepts_used ?? []) post(namn).anvands.push(lm.id);
}

const rader = [...begrepp.entries()].sort((a, b) => a[0].localeCompare(b[0], 'sv'));

let md = `# Begreppsregister (genererat)

Genererat ur lärandemålsfilernas frontmatter av \`scripts/begreppsregister.mjs\`.
Redigera aldrig denna fil — ändra \`concepts_introduced\`/\`concepts_used\` i
respektive lärandemålsfil och generera om med \`npm run begrepp\`.

Antal begrepp: ${rader.length}

| Begrepp | Introduceras i | Används i |
|---|---|---|
`;
for (const [namn, info] of rader) {
	md += `| ${namn} | ${info.introduceras ?? '**saknar huvudställe**'} | ${info.anvands.join(', ') || '—'} |\n`;
}

const utanHuvudstalle = rader.filter(([, info]) => info.introduceras === null);
if (utanHuvudstalle.length > 0) {
	md += `\n## Begrepp utan huvudställe\n\nFöljande begrepp används men introduceras ingenstans ännu (validate.mjs varnar också för detta):\n\n`;
	for (const [namn, info] of utanHuvudstalle) {
		md += `- ${namn} (används i ${info.anvands.join(', ')})\n`;
	}
}

await mkdir(exportDir, { recursive: true });
const outPath = path.join(exportDir, 'begreppsregister.md');
await writeFile(outPath, md, 'utf8');
console.log(`Begreppsregister: ${rader.length} begrepp (${utanHuvudstalle.length} utan huvudställe) → ${path.relative(process.cwd(), outPath)}`);
