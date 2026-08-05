// PDF-export av boken:
//
//   dist/bok/teknik-niva-1-och-2.pdf
//
//   npm run export:pdf
//
// Bygger först Word-filen (scripts/export-bok.mjs, med alla dess
// efterkontroller) och konverterar den därefter till PDF.
//
// Konverteringen görs av Word självt, via COM-automation från PowerShell.
// Skälet är praktiskt: maskinen har varken LaTeX eller LibreOffice, och
// Pandocs egna PDF-vägar kräver någon av dem. Word kan dessutom det som en
// HTML-baserad väg inte klarar utan vidare, nämligen att räkna om
// innehållsförteckningens fält så att den får riktiga sidnummer. Fältet
// uppdateras därför här, och läsaren slipper göra det för hand.
//
// Word körs osynligt och dokumentet stängs utan att sparas, så docx-filen på
// disk är oförändrad efter körningen. Har du filen öppen i Word samtidigt
// avbryts exporten med ett tydligt fel i stället för att skriva sönder något.

import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const root = path.dirname(fileURLToPath(import.meta.url));
const projektRoot = path.join(root, '..');
const bokDir = path.join(projektRoot, 'dist', 'bok');
const docxPath = path.join(bokDir, 'teknik-niva-1-och-2.docx');
const pdfPath = path.join(bokDir, 'teknik-niva-1-och-2.pdf');

// ------------------------------------------------------------------- Word-steg
//
// wdExportFormatPDF = 17, wdExportOptimizeForPrint = 0,
// wdExportDocumentWithMarkup = 7 (rubriker blir PDF-bokmärken),
// wdExportCreateHeadingBookmarks = 1, wdDoNotSaveChanges = 0.

const PS = String.raw`
$ErrorActionPreference = 'Stop'
$docx = '${docxPath}'
$pdf  = '${pdfPath}'

# En docx som är öppen i Word går inte att automatisera säkert.
try {
  $fs = [System.IO.File]::Open($docx, 'Open', 'Read', 'None')
  $fs.Close()
} catch {
  Write-Error "Word-filen ar oppen i ett annat program. Stang den och kor om."
  exit 1
}

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
  $doc = $word.Documents.Open($docx, [ref]$false, [ref]$true)

  # Innehållsförteckningen är ett fält och är tomt tills det räknas om. Fälten
  # uppdateras två gånger: först alla fält, sedan TOC:en igen, eftersom
  # sidnumren inte är kända förrän dokumentet har brutits om en gång.
  $doc.Fields.Update() | Out-Null
  foreach ($toc in $doc.TablesOfContents) { $toc.Update() | Out-Null }
  $doc.Repaginate()
  foreach ($toc in $doc.TablesOfContents) { $toc.Update() | Out-Null }

  $sidor = $doc.ComputeStatistics(2)

  $doc.ExportAsFixedFormat($pdf, 17, $false, 0, 0, 0, 0, 7, $true, $true, 1, $true, $true, $false)
  $doc.Close(0)
  Write-Output "SIDOR=$sidor"
} finally {
  $word.Quit()
  [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
}
`;

// --------------------------------------------------------------------- körning

console.log('Bygger Word-filen först …\n');
const bok = await execFileAsync(process.execPath, [path.join(root, 'export-bok.mjs')], {
	maxBuffer: 64 * 1024 * 1024,
	cwd: projektRoot,
});
process.stdout.write(bok.stdout);

console.log('\nKonverterar till PDF med Word …');
let sidor = null;
try {
	const { stdout } = await execFileAsync(
		'powershell.exe',
		['-NoProfile', '-NonInteractive', '-Command', PS],
		{ maxBuffer: 32 * 1024 * 1024 },
	);
	sidor = Number((stdout.match(/SIDOR=(\d+)/) ?? [])[1]) || null;
} catch (err) {
	console.error('\n✗ Word-konverteringen misslyckades.');
	console.error(String(err.stderr || err.message).trim());
	console.error('\nKontrollera att boken inte är öppen i Word och kör om.');
	process.exit(1);
}

console.log(`\nPDF byggd${sidor ? ` (${sidor} sidor)` : ''} →`);
console.log(`  ${path.relative(process.cwd(), pdfPath)}`);

// ------------------------------------------------------------ efterkontroller

const fel = [];
const ok = [];
function kontroll(namn, villkor, detalj = '') {
	if (villkor) ok.push(namn);
	else fel.push(`${namn}${detalj ? ` — ${detalj}` : ''}`);
}

await access(pdfPath);
const buf = await readFile(pdfPath);
const text = buf.toString('latin1');

kontroll('Filen är en PDF', buf.subarray(0, 5).toString() === '%PDF-');
kontroll('PDF:en är komplett (slutmarkör finns)', text.trimEnd().endsWith('%%EOF'));
kontroll('Boken har rimligt sidantal', sidor !== null && sidor > 100, `fick ${sidor}`);

// Rubrikerna exporteras som PDF-bokmärken (dispositionsträd). Att de finns
// visar samtidigt att rubrikstilarna gick fram som rubriker och inte som
// brödtext.
kontroll('Rubrikerna finns som bokmärken i PDF:en', text.includes('/Outlines'));

// Innehållsförteckningen räknades om i Word. Ett ouppdaterat fält skulle ha
// lämnat kvar platshållartexten ur bok-filter.lua.
const { stdout: docxPlain } = await execFileAsync('pandoc', [docxPath, '--from', 'docx', '--to', 'plain'], {
	maxBuffer: 64 * 1024 * 1024,
});
kontroll('Word-filen på disk är orörd av konverteringen', docxPlain.includes('Uppdatera innehållsförteckningen'));

console.log('\nEfterkontroller:');
for (const n of ok) console.log(`  ✓ ${n}`);
for (const f of fel) console.log(`  ✗ ${f}`);
if (fel.length > 0) {
	console.error(`\n${fel.length} kontroll(er) föll — PDF-exporten är INTE giltig.`);
	process.exit(1);
}
console.log('\nSamtliga efterkontroller passerade.');
