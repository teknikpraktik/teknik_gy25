// Datakälla för den redaktionella granskningsvyn (/review/). Hämtar samma
// content collection som resten av webbplatsen, filtrerar på status
// (fardig-forsta-version eller högre), följer bokstrukturens kanoniska
// ordning (06 via bokstruktur-data.mjs) och rensar den renderade HTML:en
// från produktionsmetadata och figurplatshållare I BYGGSTEGET — ingenting
// döljs med CSS. Granskningsvyn är ett rent läsmanus för bedömning av
// språk, flyt, progression och helhet.

import { getCollection } from 'astro:content';
import { kapitel, larandemalId, slugify } from '../../../../scripts/bokstruktur-data.mjs';
import { statusEnum } from '../../../../schemas/larandemal.schema.mjs';

const MIN_STATUS_IDX = statusEnum.indexOf('fardig-forsta-version');

// Tar bort granskningsrutan (produktionsmetadata) och figurplatshållarna ur
// den renderade HTML:en. Båda är flata <aside>-element som remark-pluginen
// själv genererar, så mönstren är exakta. Bygget felar om något blir kvar —
// då har pluginens markup ändrats och rensningen måste följa med.
function rensaHtml(html, id) {
	const rensad = html
		.replace(/<aside class="granskningsruta"[\s\S]*?<\/aside>/g, '')
		.replace(/<aside class="figurplatshallare"[\s\S]*?<\/aside>/g, '')
		.trim();
	if (/granskningsruta|figurplatshallare/.test(rensad)) {
		throw new Error(`Review: rensningen av ${id} lämnade produktionsmarkup kvar — remark-pluginens markup har ändrats.`);
	}
	return rensad;
}

// Elevtext ska inte innehålla klickbara begreppslänkar (12-produktionsarkitektur.md,
// "Länkar i elevtext") — granskningsvyn är läsmanuset, inte det administrativa
// produktionsläget. Begreppslänken (remark-granskning.mjs, begreppLank) är alltid
// en flat <a class="begreppslank">, så länken tas bort och texten behålls.
function taBortBegreppslankar(html) {
	return html.replace(/<a class="begreppslank"[^>]*>([\s\S]*?)<\/a>/g, '$1');
}

// Brödtextens rubriker ligger på h2–h4 i källfilerna. I granskningsvyn är
// h1 kapitel, h2 modul och h3 lärandemålets titel, så brödtextens rubriker
// sänks två steg (samma hierarki som i Word-exporten).
function sankRubriker(html) {
	return html
		.replace(/<(\/?)h4([ >])/g, '<$1h6$2')
		.replace(/<(\/?)h3([ >])/g, '<$1h5$2')
		.replace(/<(\/?)h2([ >])/g, '<$1h4$2');
}

export async function hamtaReviewKapitel() {
	const docs = await getCollection('docs');
	const byId = new Map(docs.filter((e) => e.data.id !== undefined).map((e) => [e.data.id, e]));

	const upptagna = new Set();
	function unikAnkare(text) {
		const bas = slugify(text);
		let a = bas;
		let n = 2;
		while (upptagna.has(a)) a = `${bas}-${n++}`;
		upptagna.add(a);
		return a;
	}

	const resultat = [];
	for (const k of kapitel) {
		const moduler = [];
		for (let i = 0; i < k.moduler.length; i++) {
			const larandemal = [];
			for (let j = 0; j < k.moduler[i].larandemal.length; j++) {
				const id = larandemalId(k, i, j);
				const entry = byId.get(id);
				if (!entry) continue;
				if (statusEnum.indexOf(entry.data.status) < MIN_STATUS_IDX) continue;
				const html = entry.rendered?.html;
				if (!html) {
					throw new Error(`Review: renderad HTML saknas för ${id} — content layer-API:t kan ha ändrats.`);
				}
				larandemal.push({
					id,
					titel: entry.data.title,
					anchor: unikAnkare(entry.data.title),
					html: sankRubriker(taBortBegreppslankar(rensaHtml(html, id))),
				});
			}
			if (larandemal.length > 0) {
				moduler.push({
					nr: `${k.nr}.${i + 1}`,
					titel: k.moduler[i].titel,
					anchor: unikAnkare(`modul-${k.nr}-${i + 1}`),
					larandemal,
				});
			}
		}
		if (moduler.length > 0) {
			resultat.push({
				nr: k.nr,
				titel: k.titel,
				moduler,
				antal: moduler.reduce((s, m) => s + m.larandemal.length, 0),
			});
		}
	}
	return resultat;
}
