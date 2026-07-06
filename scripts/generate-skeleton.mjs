// Skapar mapp-/filskelettet för content/ utifrån 06-bokstruktur.md:s kapitel-
// och modulnamn (se bokstruktur-data.mjs). Skapar INGA lärandemålsfiler och
// hittar inte på titlar — det är produktionsarbete, inte arkitekturuppsättning.
// Säker att köra flera gånger: skriver aldrig över en fil som redan finns.

import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { kapitel, kapitelSlug, modulSlug } from './bokstruktur-data.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, '..', 'content');

async function writeIfMissing(filePath, content) {
	try {
		await access(filePath);
		return false;
	} catch {
		await writeFile(filePath, content, 'utf8');
		return true;
	}
}

let created = 0;

// Startsida för webbplatsen.
await mkdir(contentDir, { recursive: true });
const indexPath = path.join(contentDir, 'index.md');
if (
	await writeIfMissing(
		indexPath,
		`---
title: Teknik Gy25 — produktionsöversikt
---

Detta är den interna produktions- och granskningsmiljön för läroboken Teknik Gy25.
Se 12-produktionsarkitektur.md för hur miljön fungerar och 06-bokstruktur.md för
den redaktionella statusen per modul.

Denna sida är inte bokinnehåll.
`,
	)
) {
	created++;
}

for (const k of kapitel) {
	const kSlug = kapitelSlug(k);
	const kDir = path.join(contentDir, kSlug);
	await mkdir(kDir, { recursive: true });

	const kIndexPath = path.join(kDir, 'index.md');
	if (
		await writeIfMissing(
			kIndexPath,
			`---
title: "${k.nr}. ${k.titel}"
chapter: ${k.nr}
---

Kapitelöversikt. Innehåll skrivs modul för modul, lärandemål för lärandemål
(se 08-claude-code-manual.md, "Kapitelproduktion"). Denna sida är strukturell,
inte bokinnehåll.
`,
		)
	) {
		created++;
	}

	for (let i = 0; i < k.moduler.length; i++) {
		const mSlug = modulSlug(k, i);
		const mDir = path.join(kDir, mSlug);
		await mkdir(mDir, { recursive: true });

		const modulePath = path.join(mDir, '_module.yml');
		const doc = YAML.stringify({
			title: k.moduler[i],
			chapter: k.nr,
			module: `${k.nr}.${i + 1}`,
			order: i + 1,
		});
		if (await writeIfMissing(modulePath, doc)) created++;
	}
}

console.log(`Klart. ${created} nya filer/mappar skapade under ${path.relative(process.cwd(), contentDir)}.`);
