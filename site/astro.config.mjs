// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { kapitel, kapitelSlug, avsnittFilnamn, routeSegment } from '../scripts/bokstruktur-data.mjs';
import { remarkGranskning } from './src/remark-granskning.mjs';
import { SITE_BASE } from './src/site-base.mjs';

// Sidopanelen byggs ur 06-bokstruktur.md (via bokstruktur-data.mjs, som tolkar
// 06 direkt) — samma enda källa som skeleton/validate/export. Starlights
// autogenerate kan inte användas: den matchar på filePath relativt
// src/content/docs, och vår collection läser från ../content utanför site/.
// Explicit slug-baserade poster ger dessutom byggfel om en sida saknas,
// vilket fungerar som extra synkkontroll.

// Kapitelöversikten är en genererad vy (src/pages/[...oversikt].astro), inte
// en content-post — den länkas därför med `link`. Avsnitten är content-poster
// och länkas med `slug`, vilket ger byggfel om en sida i 06 saknas i content/.
const sidebar = [
	{ label: 'Start', link: '/' },
	...kapitel.map((k) => ({
		label: `${k.nr}. ${k.titel}`,
		collapsed: true,
		items: [
			{ label: 'Kapitelöversikt', link: `/${kapitelSlug(k)}/` },
			...k.avsnitt.map((avs, i) => ({
				label: `${k.nr}.${i + 1} ${avs.titel}`,
				slug: [kapitelSlug(k), routeSegment(avsnittFilnamn(k, i).replace(/\.md$/, ''))].join('/'),
			})),
		],
	})),
];

// https://astro.build/config
export default defineConfig({
	// Publiceras på GitHub Pages under projektprefix — inte på domänroten.
	// SITE_BASE delas med remark-pluginens och vyernas länkbyggen.
	site: 'https://teknikpraktik.github.io',
	base: SITE_BASE,
	// Löser upp [[figur:...]]/[[begrepp:...]] och injicerar granskningsrutan
	// på avsnittssidor. Gäller bara webbvyn — exporten läser källfilerna.
	markdown: {
		remarkPlugins: [remarkGranskning],
	},
	integrations: [
		starlight({
			title: 'Teknik Gy25 — produktionsmiljö',
			description:
				'Internt produktions- och granskningsverktyg för läroboken Teknik Gy25. Inte en publicerad produkt.',
			// Internt verktyg: hela webbplatsen undantas från indexering.
			// Obs: detta är ingen åtkomstkontroll — Pages-sajten är publikt läsbar.
			head: [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }],
			social: [],
			customCss: ['./src/styles/granskning.css'],
			sidebar,
		}),
	],
});
