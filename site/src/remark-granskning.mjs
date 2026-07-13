// Remark-plugin för granskningsmiljön. Gör två saker med lärandemålssidorna:
//
// 1. Löser upp shortcodes vid rendering:
//    [[begrepp:namn]] → länk till begreppets huvudställe (filen där det står
//    i concepts_introduced). [[figur:ID]] → figurplatshållarruta med data ur
//    figures/registry.yml. Okänt begrepp eller okänd figur ger byggfel med
//    filnamn — validate.mjs fångar samma fel före bygget.
//
// 2. Injicerar en granskningsruta överst på varje lärandemålssida (frontmatter
//    med "id") med mål, status, kursplanetaggar, begrepp, figurer, förkunskaper
//    och uppslag. Rutan finns bara i webbvyn — exporten läser källfilerna
//    direkt och påverkas inte (12-produktionsarkitektur.md, "Webbformat").
//
// Innehållsindexet (begrepp → sida, id → sida) byggs vid första anropet och
// cachas under processens livstid. I dev-läge kräver ändrade frontmatterfält
// i ANDRA filer därför omstart av dev-servern; produktionsbyggen påverkas inte.
//
// OBS: Astros innehållslager cachar renderade sidor och invaliderar bara när
// KÄLLFILEN ändras. Efter ändringar i denna plugin (eller i figurregistret)
// måste site/.astro och site/node_modules/.astro rensas för att alla sidor
// ska renderas om.

import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import YAML from 'yaml';
import { niva1, niva2, syftesmal } from '../../scripts/kursplan-data.mjs';
import { SITE_BASE } from './site-base.mjs';

const projektRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const contentDir = path.join(projektRoot, 'content');
const registryPath = path.join(projektRoot, 'figures', 'registry.yml');

const punkter = new Map([...niva1, ...niva2, ...syftesmal].map((p) => [p.id, p]));

// Astros routes slugifierar sökvägssegment genom att ta bort punkter.
// Länkarna prefixas med webbplatsens base path (GitHub Pages-projektprefix).
function routeFromRel(rel) {
	return (
		SITE_BASE +
		'/' +
		rel
			.replace(/\.md$/, '')
			.split('/')
			.map((s) => s.replaceAll('.', ''))
			.join('/') +
		'/'
	);
}

let index;
function getIndex() {
	if (index) return index;
	const begreppTill = new Map(); // begrepp → { route, id, title }
	const larandemalInfo = new Map(); // id → { route, title }

	function walk(dir, rel = '') {
		for (const entry of readdirSync(dir, { withFileTypes: true })) {
			const full = path.join(dir, entry.name);
			const childRel = rel ? `${rel}/${entry.name}` : entry.name;
			if (entry.isDirectory()) walk(full, childRel);
			else if (entry.isFile() && entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
				const { data } = matter(readFileSync(full, 'utf8'));
				if (data.id === undefined) continue;
				const route = routeFromRel(childRel);
				larandemalInfo.set(data.id, { route, title: data.title ?? data.id });
				for (const namn of data.concepts_introduced ?? []) {
					begreppTill.set(namn, { route, id: data.id, title: data.title ?? data.id });
				}
			}
		}
	}
	walk(contentDir);

	const figurer = YAML.parse(readFileSync(registryPath, 'utf8')) || {};
	index = { begreppTill, larandemalInfo, figurer };
	return index;
}

function esc(s) {
	return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function begreppLank(namn) {
	const mal = getIndex().begreppTill.get(namn);
	if (!mal) return null;
	return `<a class="begreppslank" href="${mal.route}" title="Huvudställe: ${esc(mal.id)} ${esc(mal.title)}">${esc(namn)}</a>`;
}

function figurRuta(figId) {
	const fig = getIndex().figurer[figId];
	if (!fig) return null;
	return (
		`<aside class="figurplatshallare" aria-label="Figurplatshållare">` +
		`<span class="fig-etikett">FIGUR ${esc(figId)}</span>` +
		`<p class="fig-syfte">${esc(fig.syfte ?? '')}</p>` +
		`<p class="fig-innehall">${esc(fig.innehall ?? '')}</p>` +
		(fig.referens ? `<p class="fig-referens"><strong>Referens:</strong> ${esc(fig.referens)}</p>` : '') +
		(fig.pedagogisk_funktion ? `<p class="fig-funktion"><strong>Pedagogisk funktion:</strong> ${esc(fig.pedagogisk_funktion)}</p>` : '') +
		`</aside>`
	);
}

const shortcodeRe = /\[\[(figur|begrepp):([^\]]+)\]\]/g;

function renderShortcode(typ, namn, filePath) {
	const html = typ === 'figur' ? figurRuta(namn) : begreppLank(namn);
	if (html === null) {
		throw new Error(
			typ === 'figur'
				? `${filePath}: [[figur:${namn}]] finns inte i figures/registry.yml.`
				: `${filePath}: [[begrepp:${namn}]] introduceras inte (concepts_introduced) i någon fil.`,
		);
	}
	return html;
}

function splitTextNode(value, filePath) {
	const out = [];
	let last = 0;
	for (const m of value.matchAll(shortcodeRe)) {
		if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
		out.push({ type: 'html', value: renderShortcode(m[1], m[2].trim(), filePath) });
		last = m.index + m[0].length;
	}
	if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
	return out;
}

// Starlight kör remark-directive, som tolkar kolonet i [[figur:ID]] som en
// textdirective och styckar noden i text "[[figur" + directive "…" + text "…]]".
// Denna pass fogar ihop sådana styckningar till hela textnoder igen — men bara
// när en oavslutad [[figur/[[begrepp föregår direktivet, så att legitima
// directives lämnas orörda.
function mergeDirectiveSplits(children) {
	const out = [];
	let buf = '';
	const flush = () => {
		if (buf !== '') {
			out.push({ type: 'text', value: buf });
			buf = '';
		}
	};
	for (const child of children) {
		if (child.type === 'text') {
			buf += child.value;
			continue;
		}
		if (child.type === 'textDirective' && /\[\[(figur|begrepp)[^\]]*$/.test(buf)) {
			const inre = (child.children ?? []).map((c) => c.value ?? '').join('');
			buf += ':' + child.name + (inre ? `[${inre}]` : '');
			continue;
		}
		flush();
		out.push(child);
	}
	flush();
	return out;
}

function transformTree(node, filePath) {
	if (!node.children) return;
	const children = mergeDirectiveSplits(node.children);
	const out = [];
	for (let i = 0; i < children.length; i++) {
		const child = children[i];

		// Remark parserar `[[typ:namn]]` som text som slutar med "[" +
		// linkReference (utan definition) + text som börjar med "]".
		// Fångas här och ersätts med renderad HTML.
		if (child.type === 'linkReference' && /^(figur|begrepp):/.test(child.label ?? '')) {
			const prev = out[out.length - 1];
			const next = children[i + 1];
			if (prev?.type === 'text' && prev.value.endsWith('[') && next?.type === 'text' && next.value.startsWith(']')) {
				prev.value = prev.value.slice(0, -1);
				if (prev.value === '') out.pop();
				const [, typ, namn] = child.label.match(/^(figur|begrepp):(.+)$/);
				out.push({ type: 'html', value: renderShortcode(typ, namn.trim(), filePath) });
				next.value = next.value.slice(1);
				continue;
			}
		}

		if (child.type === 'text' && shortcodeRe.test(child.value)) {
			shortcodeRe.lastIndex = 0;
			out.push(...splitTextNode(child.value, filePath));
		} else {
			transformTree(child, filePath);
			if (!(child.type === 'text' && child.value === '')) out.push(child);
		}
	}
	node.children = out;
}

function rad(rubrik, inneh) {
	return `<dt>${rubrik}</dt><dd>${inneh || '—'}</dd>`;
}

function granskningsruta(fm) {
	const { larandemalInfo } = getIndex();

	const taggar = [
		...(fm.curriculum?.niva1 ?? []).map((t) => ({ t, niva: 'nivå 1' })),
		...(fm.curriculum?.niva2 ?? []).map((t) => ({ t, niva: 'nivå 2' })),
	]
		.map(({ t, niva }) => {
			const p = punkter.get(t);
			return p
				? `<span title="${esc(p.text)}">${esc(t)}</span> <span class="gr-dammig">(${niva}: ${esc(p.text.length > 70 ? p.text.slice(0, 70) + '…' : p.text)})</span>`
				: esc(t);
		})
		.join('<br>');

	const introducerar = (fm.concepts_introduced ?? []).map(esc).join(', ');
	const anvander = (fm.concepts_used ?? [])
		.map((namn) => begreppLank(namn) ?? `${esc(namn)} <span class="gr-dammig">(saknar huvudställe ännu)</span>`)
		.join(', ');
	const figurer = (fm.figures ?? [])
		.map((id) => {
			const fig = getIndex().figurer[id];
			return fig ? `${esc(id)} <span class="gr-dammig">— ${esc(fig.syfte ?? '')}</span>` : `${esc(id)} <span class="gr-dammig">(saknas i registret!)</span>`;
		})
		.join('<br>');
	const forkunskaper = (fm.prerequisites ?? [])
		.map((id) => {
			const info = larandemalInfo.get(id);
			return info ? `<a href="${info.route}">${esc(id)} ${esc(info.title)}</a>` : esc(id);
		})
		.join(', ');

	return (
		`<aside class="granskningsruta" aria-label="Granskningsinformation">` +
		`<p class="gr-rubrik">Granskningsinfo — visas inte i boken</p>` +
		`<dl>` +
		rad('Lärandemål', esc(fm.goal ?? '')) +
		rad('Status', `<span class="gr-status gr-status-${esc(fm.status ?? '')}">${esc(fm.status ?? '')}</span>`) +
		rad('Kursplan', taggar) +
		rad('Introducerar', introducerar) +
		rad('Använder', anvander) +
		rad('Figurer', figurer) +
		rad('Förkunskaper', forkunskaper) +
		`</dl>` +
		`</aside>`
	);
}

export function remarkGranskning() {
	return (tree, file) => {
		const fm = file.data?.astro?.frontmatter;
		const filePath = file.path ? path.relative(projektRoot, file.path) : '(okänd fil)';
		transformTree(tree, filePath);
		if (fm?.id !== undefined) {
			tree.children.unshift({ type: 'html', value: granskningsruta(fm) });
		}
	};
}
