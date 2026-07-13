// Skapar mapp-/filskelettet för content/ utifrån 06-bokstruktur.md:s kapitel,
// moduler och lärandemål (se bokstruktur-data.mjs). Skapar tomma lärandemåls-
// filer med komplett frontmatter (id, titel, mål, status ej-paborjad) men
// skriver INGEN lärobokstext — det är produktionsarbete, inte uppsättning.
// Säker att köra flera gånger: skriver aldrig över en fil som redan finns.
//
// Kapitel- och modulöversikter genereras INTE här: de är härledda vyer som
// webbplatsen bygger vid varje bygge (site/src/pages/[...oversikt].astro).
// Content-databasen består enbart av lärandemålsfiler och startsidan.

import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { kapitel, kapitelSlug, modulSlug, larandemalId, larandemalFilnamn } from './bokstruktur-data.mjs';

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
	const kDir = path.join(contentDir, kapitelSlug(k));
	await mkdir(kDir, { recursive: true });

	for (let i = 0; i < k.moduler.length; i++) {
		const m = k.moduler[i];
		const mDir = path.join(kDir, modulSlug(k, i));
		await mkdir(mDir, { recursive: true });

		for (let j = 0; j < m.larandemal.length; j++) {
			const lm = m.larandemal[j];
			const lmPath = path.join(mDir, larandemalFilnamn(k, i, j));
			const frontmatter = YAML.stringify({
				id: larandemalId(k, i, j),
				chapter: k.nr,
				module: `${k.nr}.${i + 1}`,
				title: lm.titel,
				goal: lm.mal,
				status: 'ej-paborjad',
				curriculum: { niva1: [], niva2: [] },
				concepts_introduced: [],
				concepts_used: [],
				figures: [],
				prerequisites: [],
			});
			const body = `---
${frontmatter}---

<!--
Lärandemålsfil — innehållet skrivs under produktion, ett lärandemål i taget
(08-claude-code-manual.md, "Kapitelproduktion"; 13-produktionsmanual.md).
Målformuleringen finns i frontmatterfältet "goal". Skriv ingen text här förrän
lärandemålet tas i produktion och status sätts till under-utveckling.
-->
`;
			if (await writeIfMissing(lmPath, body)) created++;
		}
	}
}

console.log(`Klart. ${created} nya filer/mappar skapade under ${path.relative(process.cwd(), contentDir)}.`);
