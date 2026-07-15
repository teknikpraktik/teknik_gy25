// Skapar mapp-/filskelettet för content/ utifrån 06-bokstruktur.md:s kapitel
// och avsnitt (se bokstruktur-data.mjs). Skapar tomma avsnittsfiler med
// komplett frontmatter (id, titel, lärandemål, status ej-paborjad) men skriver
// INGEN lärobokstext — det är produktionsarbete, inte uppsättning.
// Säker att köra flera gånger: skriver aldrig över en fil som redan finns.
//
// Kapitelöversikter genereras INTE här: de är härledda vyer som webbplatsen
// bygger vid varje bygge (site/src/pages/[...oversikt].astro). Content-
// databasen består enbart av avsnittsfiler och startsidan.

import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { kapitel, kapitelSlug, avsnittId, avsnittFilnamn } from './bokstruktur-data.mjs';

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
den redaktionella statusen per avsnitt.

Denna sida är inte bokinnehåll.
`,
	)
) {
	created++;
}

for (const k of kapitel) {
	const kDir = path.join(contentDir, kapitelSlug(k));
	await mkdir(kDir, { recursive: true });

	for (let i = 0; i < k.avsnitt.length; i++) {
		const avs = k.avsnitt[i];
		const avsPath = path.join(kDir, avsnittFilnamn(k, i));
		const arKapitelavslutning = Boolean(avs.type);

		const frontmatterData = arKapitelavslutning
			? {
					type: avs.type,
					chapter: k.nr,
					sectionNumber: i + 1,
					title: avs.titel,
					status: 'ej-paborjad',
					...(avs.type === 'begreppsovning' ? { ordlista: [] } : {}),
				}
			: {
					id: avsnittId(k, i),
					chapter: k.nr,
					sectionNumber: i + 1,
					title: avs.titel,
					status: 'ej-paborjad',
					levels: [],
					curriculumReferences: { niva1: [], niva2: [] },
					learningGoals: avs.larandemal,
					abilities: [],
					concepts_introduced: [],
					concepts_used: [],
					figures: [],
					prerequisites: [],
				};
		const frontmatter = YAML.stringify(frontmatterData);
		const kommentar = arKapitelavslutning
			? `<!--
Kapitelavslutning — skapas inte i förväg för kapitel som inte är påbörjade,
men skelettfilen finns här som utgångspunkt (12-produktionsarkitektur.md,
"Kapitelavslutningar"; 13-produktionsmanual.md). Skriv ingen text här förrän
kapitlets avsnitt är producerade och status sätts till under-utveckling.
-->
`
			: `<!--
Avsnittsfil — innehållet skrivs under produktion, ett avsnitt i taget
(08-claude-code-manual.md, "Kapitelproduktion"; 13-produktionsmanual.md).
Avsnittets lärandemål finns i frontmatterfältet "learningGoals". Skriv ingen
text här förrän avsnittet tas i produktion och status sätts till
under-utveckling. Delavsnitt (06) skrivs som ###-rubriker i löptexten.
-->
`;
		const body = `---
${frontmatter}---

${kommentar}`;
		if (await writeIfMissing(avsPath, body)) created++;
	}
}

console.log(`Klart. ${created} nya filer/mappar skapade under ${path.relative(process.cwd(), contentDir)}.`);
