// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { kapitel, kapitelSlug, modulSlug, larandemalFilnamn, larandemalId } from '../scripts/bokstruktur-data.mjs';
import { remarkGranskning } from './src/remark-granskning.mjs';

// Sidopanelen byggs ur 06-bokstruktur.md (via bokstruktur-data.mjs, som tolkar
// 06 direkt) — samma enda källa som skeleton/validate/export. Starlights
// autogenerate kan inte användas: den matchar på filePath relativt
// src/content/docs, och vår collection läser från ../content utanför site/.
// Explicit slug-baserade poster ger dessutom byggfel om en sida saknas,
// vilket fungerar som extra synkkontroll.

// Astros routes slugifierar sökvägssegment genom att ta bort punkter:
// "1.01-krafter" → "101-krafter". Våra slugs är redan ASCII/gemener.
function routeSegment(segment) {
	return segment.replaceAll('.', '');
}

// Kapitel- och modulöversikterna är genererade vyer (src/pages/[...oversikt].astro),
// inte content-poster — de länkas därför med `link`. Lärandemålen är content-poster
// och länkas med `slug`, vilket ger byggfel om en sida i 06 saknas i content/.
const sidebar = [
	{ label: 'Start', link: '/' },
	...kapitel.map((k) => ({
		label: `${k.nr}. ${k.titel}`,
		collapsed: true,
		items: [
			{ label: 'Kapitelöversikt', link: `/${kapitelSlug(k)}/` },
			...k.moduler.map((m, i) => ({
				label: `${k.nr}.${i + 1} ${m.titel}`,
				collapsed: true,
				items: [
					{ label: 'Modulöversikt', link: `/${kapitelSlug(k)}/${routeSegment(modulSlug(k, i))}/` },
					...m.larandemal.map((lm, j) => ({
						label: `${larandemalId(k, i, j)} ${lm.titel}`,
						slug: [
							kapitelSlug(k),
							routeSegment(modulSlug(k, i)),
							routeSegment(larandemalFilnamn(k, i, j).replace(/\.md$/, '')),
						].join('/'),
					})),
				],
			})),
		],
	})),
];

// https://astro.build/config
export default defineConfig({
	// Löser upp [[figur:...]]/[[begrepp:...]] och injicerar granskningsrutan
	// på lärandemålssidor. Gäller bara webbvyn — exporten läser källfilerna.
	markdown: {
		remarkPlugins: [remarkGranskning],
	},
	integrations: [
		starlight({
			title: 'Teknik Gy25 — produktionsmiljö',
			description:
				'Internt produktions- och granskningsverktyg för läroboken Teknik Gy25. Inte en publicerad produkt.',
			social: [],
			customCss: ['./src/styles/granskning.css'],
			sidebar,
		}),
	],
});
