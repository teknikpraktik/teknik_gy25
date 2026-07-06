// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Kapitellistan är fastställd i 02-redaktionell-specifikation.md, 06-bokstruktur.md
// och 07-kursplanetackning.md. Ändra INTE denna lista utan att först ändra där —
// se 08-claude-code-manual.md, "AI får inte ändra kapitelstrukturen utan uttryckligt beslut".
const kapitel = [
	['01-teknikhistoria', '1. Teknikhistoria'],
	['02-att-losa-tekniska-problem', '2. Att lösa tekniska problem'],
	['03-teknikutvecklingsprocessen', '3. Teknikutvecklingsprocessen'],
	['04-skiss-ritteknik-och-cad', '4. Skiss, ritteknik och CAD'],
	['05-material-och-deras-egenskaper', '5. Material och deras egenskaper'],
	['06-mekanik-och-konstruktion', '6. Mekanik och konstruktion'],
	['07-matteknik-och-dataanalys', '7. Mätteknik och dataanalys'],
	['08-modellering-och-simulering', '8. Modellering och simulering'],
	['09-it-system', '9. IT-system'],
	['10-programmering', '10. Programmering'],
	['11-projekt-och-entreprenorskap', '11. Projekt och entreprenörskap'],
	['12-kvalitet-risk-och-arbetsmiljo', '12. Kvalitet, risk och arbetsmiljö'],
	['13-teknik-manniska-och-samhalle', '13. Teknik, människa och samhälle'],
];

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Teknik Gy25 — produktionsmiljö',
			description:
				'Internt produktions- och granskningsverktyg för läroboken Teknik Gy25. Inte en publicerad produkt.',
			social: [],
			sidebar: [
				{ label: 'Start', link: '/' },
				...kapitel.map(([directory, label]) => ({
					label,
					items: [{ autogenerate: { directory } }],
				})),
			],
		}),
	],
});
