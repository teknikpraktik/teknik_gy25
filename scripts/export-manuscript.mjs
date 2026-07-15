// Sammanställer avsnittsfilerna till ett bokmanus i kanonisk läsordning
// (kapitel → avsnitt → delavsnitt, ordningen ur 06 via bokstruktur-data.mjs)
// och kör resultatet genom Pandoc till .docx (till förlaget). Körs fristående
// (`npm run export`), frikopplat från webbplatsens build — samma källfiler
// används av båda, i linje med 12-produktionsarkitektur.md.
//
// Själva sammanställningen (ordning, statusfilter, shortcodes, rensning,
// rubriksänkning) ligger i scripts/manuscript-core.mjs och delas med den
// redaktionella granskningsexporten (npm run export:review).
//
// Endast avsnitt som nått en viss status exporteras (arbetsmaterial ska
// aldrig hamna i en leverans, se 09 "Förlagsgranskning"):
//
//   npm run export                                  → fardig-forsta-version och uppåt
//   npm run export -- --status=sprakgranskad        → sprakgranskad och uppåt
//   npm run export -- --status=alla                 → allt, oavsett status (internt bruk)
//
// HTML-kommentarer (arbetsanteckningar) strippas ur manuset. Figur- och
// begreppsshortcodes ([[figur:ID]], [[begrepp:namn]]) löses upp till
// figurplatshållartext respektive löptext — ett bokmanus har inga länkar.

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { statusEnum } from '../schemas/larandemal.schema.mjs';
import { sammanstallManus } from './manuscript-core.mjs';

const execFileAsync = promisify(execFile);

const root = path.dirname(fileURLToPath(import.meta.url));
const exportDir = path.join(root, '..', 'export');

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

const { manuscript, exporterade, utelamnade, saknadeFiler } = await sammanstallManus({ minStatusIdx });

const antalUtelamnade = Object.values(utelamnade).reduce((a, b) => a + b, 0);
if (saknadeFiler.length > 0) {
	console.log(`⚠ ${saknadeFiler.length} planerade avsnitt saknar fil (kör npm run skeleton / npm run validate): ${saknadeFiler.join(', ')}`);
}
if (antalUtelamnade > 0) {
	console.log(`Utelämnade (status under ${statusArg === 'alla' ? '—' : statusArg}): ${antalUtelamnade} avsnitt`);
	for (const [status, antal] of Object.entries(utelamnade)) {
		console.log(`  ${status}: ${antal}`);
	}
}

if (exporterade === 0) {
	console.log(`\nInget avsnitt har nått status ${statusArg} ännu — inget manus att exportera.`);
	process.exit(0);
}

await mkdir(exportDir, { recursive: true });
const manuscriptPath = path.join(exportDir, 'manuscript.md');
await writeFile(manuscriptPath, manuscript.trim() + '\n', 'utf8');
console.log(`\nManus sammanställt (${exporterade} avsnitt, lägsta status ${statusArg}) → ${path.relative(process.cwd(), manuscriptPath)}`);

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
