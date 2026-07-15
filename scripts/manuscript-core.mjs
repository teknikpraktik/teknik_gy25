// Gemensam manussammanställning för exporterna. Bryter ut logiken som
// tidigare låg i export-manuscript.mjs så att förlagsexporten (npm run export)
// och den redaktionella granskningsexporten (npm run export:review) bygger
// från exakt samma kärna: kanonisk läsordning ur 06 (via bokstruktur-data),
// statusfilter, shortcode-upplösning, rensning av arbetsanteckningar och
// rubriksänkning. Se 12-produktionsarkitektur.md, "Export".
//
// Kärnan är parametriserbar på två punkter som skiljer exporterna åt:
//   figurBlock(figId, fig)  — hur en figurplatshållare återges i markdown.
//                             Standard är förlagsexportens blockquote-format.
//   avsnittPrefix           — markdown som skjuts in före varje avsnittsrubrik
//                             (granskningsexporten lägger en sidbrytnings-
//                             markör här). Standard: tom sträng.

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import YAML from 'yaml';
import { statusEnum } from '../schemas/larandemal.schema.mjs';
import { kapitel, kapitelSlug, avsnittFilnamn } from './bokstruktur-data.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, '..', 'content');
const figuresRegistryPath = path.join(root, '..', 'figures', 'registry.yml');

export function defaultFigurBlock(figId, fig) {
	if (!fig) return `\n\n> **[FIGUR SAKNAS: ${figId}]**\n\n`;
	// Fullständig platshållarspecifikation till förlaget (08, 12):
	// syfte, innehåll, referens i texten och pedagogisk funktion.
	const rader = [
		`> **[FIGUR ${figId}]**`,
		`> **Syfte:** ${fig.syfte ?? ''}`,
		`> **Innehåll:** ${fig.innehall ?? ''}`,
		fig.referens ? `> **Referens i texten:** ${fig.referens}` : null,
		fig.pedagogisk_funktion ? `> **Pedagogisk funktion:** ${fig.pedagogisk_funktion}` : null,
	].filter(Boolean);
	return `\n\n${rader.join('\n>\n')}\n\n`;
}

function resolveShortcodes(body, figureRegistry, figurBlock) {
	return body
		.replace(/\[\[figur:([a-zA-Z0-9_.-]+)\]\]/g, (_match, figId) => figurBlock(figId, figureRegistry[figId]))
		.replace(/\[\[begrepp:([^\]]+)\]\]/g, (_match, concept) => concept);
}

function stripArbetsanteckningar(body) {
	return body.replace(/<!--[\s\S]*?-->/g, '').replace(/\n{3,}/g, '\n\n').trim();
}

// Manuset lägger kapitel på #, avsnitt på ## och delavsnitt/Instuderingsfrågor
// på ###. Källfilernas rubriker (##-nivå enligt 13-produktionsmanual.md, eftersom
// frontmatterns "title" är sidans egen h1) sänks därför ett steg så att
// hierarkin i Word blir rätt: kapitel(#) → avsnitt(##, infogas av assemblern)
// → delavsnitt(###) → undantagsvis ####. Rader i kodblock rörs inte.
function demoteHeadings(body) {
	let inCodeBlock = false;
	return body
		.split('\n')
		.map((line) => {
			if (/^(```|~~~)/.test(line)) inCodeBlock = !inCodeBlock;
			if (inCodeBlock) return line;
			return line.replace(/^(#{2,3})(\s)/, '$1#$2');
		})
		.join('\n');
}

// Sammanställer manuset i kanonisk läsordning. Returnerar den råa
// manussträngen (otrimmad, som tidigare) tillsammans med uppgifter om vad
// som togs med och vad som utelämnades, så att anropande skript kan logga
// och efterkontrollera.
export async function sammanstallManus({ minStatusIdx, figurBlock = defaultFigurBlock, avsnittPrefix = '' } = {}) {
	const figureRegistry = YAML.parse(await readFile(figuresRegistryPath, 'utf8')) || {};

	let manuscript = '';
	let exporterade = 0;
	const utelamnade = {}; // status → antal
	const saknadeFiler = [];
	const inkluderade = []; // { id, titel } i manusordning

	for (const k of kapitel) {
		let kapitelDel = '';
		for (let i = 0; i < k.avsnitt.length; i++) {
			const avs = k.avsnitt[i];
			const id = `${k.nr}.${i + 1}`;
			const filePath = path.join(contentDir, kapitelSlug(k), avsnittFilnamn(k, i));
			let raw;
			try {
				raw = await readFile(filePath, 'utf8');
			} catch {
				saknadeFiler.push(avs.type ? `${id} (${avs.type})` : id);
				continue;
			}
			const { data, content } = matter(raw);
			const statusIdx = statusEnum.indexOf(data.status);
			if (statusIdx < minStatusIdx) {
				utelamnade[data.status] = (utelamnade[data.status] ?? 0) + 1;
				continue;
			}
			const brodtext = resolveShortcodes(demoteHeadings(stripArbetsanteckningar(content)), figureRegistry, figurBlock);
			// Kapitelavslutningar har ingen synlig sektionsnumrering i den
			// publicerade rubriken (06-bokstruktur.md, "Kapitelavslutningar").
			const rubrik = avs.type ? data.title : `${id} ${data.title}`;
			kapitelDel += `\n\n${avsnittPrefix}## ${rubrik}\n\n${brodtext}\n`;
			if (!avs.type) inkluderade.push({ id, titel: data.title });
			exporterade++;
		}
		if (kapitelDel !== '') {
			manuscript += `\n\n# Kapitel ${k.nr} · ${k.titel}\n${kapitelDel}`;
		}
	}

	return { manuscript, exporterade, utelamnade, saknadeFiler, inkluderade };
}
