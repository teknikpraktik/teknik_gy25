// Datakälla för den redaktionella granskningsvyn (/review/). Hämtar samma
// content collection som resten av webbplatsen, filtrerar på status
// (fardig-forsta-version eller högre), följer bokstrukturens kanoniska
// ordning (06 via bokstruktur-data.mjs) och rensar den renderade HTML:en
// från produktionsmetadata och figurplatshållare I BYGGSTEGET — ingenting
// döljs med CSS. Granskningsvyn är ett rent läsmanus för bedömning av
// språk, flyt, progression och helhet.

import { getCollection } from 'astro:content';
import { kapitel, avsnittId, slugify } from '../../../../scripts/bokstruktur-data.mjs';
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

// Brödtextens delavsnitt ligger på h2–h3 i källfilerna (06-bokstruktur.md,
// "Avsnittens och delavsnittens format"). I granskningsvyn är h1 kapitel och
// h2 avsnittets titel (infogas av sidan, inte av källfilen), så brödtextens
// egna rubriker sänks ett steg för att bli h3 (delavsnitt) / h4.
function sankRubriker(html) {
	return html
		.replace(/<(\/?)h3([ >])/g, '<$1h4$2')
		.replace(/<(\/?)h2([ >])/g, '<$1h3$2');
}

export async function hamtaReviewKapitel() {
	const docs = await getCollection('docs');
	const byId = new Map(docs.filter((e) => e.data.id !== undefined).map((e) => [e.data.id, e]));
	const byTypeChapter = new Map(); // "<kapitel>:<type>" -> entry
	for (const e of docs) {
		if (e.data.type === undefined) continue;
		byTypeChapter.set(`${e.data.chapter}:${e.data.type}`, e);
	}

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
		const avsnitt = [];
		for (let i = 0; i < k.avsnitt.length; i++) {
			const plan = k.avsnitt[i];
			const id = plan.type ? undefined : avsnittId(k, i);
			const entry = plan.type ? byTypeChapter.get(`${k.nr}:${plan.type}`) : byId.get(id);
			if (!entry) continue;
			if (statusEnum.indexOf(entry.data.status) < MIN_STATUS_IDX) continue;
			const html = entry.rendered?.html;
			if (!html) {
				throw new Error(`Review: renderad HTML saknas för ${id ?? `${k.nr}/${plan.type}`} — content layer-API:t kan ha ändrats.`);
			}
			avsnitt.push({
				id,
				nr: `${k.nr}.${i + 1}`,
				titel: entry.data.title,
				type: plan.type,
				anchor: unikAnkare(entry.data.title),
				html: sankRubriker(taBortBegreppslankar(rensaHtml(html, id ?? `${k.nr}/${plan.type}`))),
			});
		}
		if (avsnitt.length > 0) {
			resultat.push({
				nr: k.nr,
				titel: k.titel,
				avsnitt,
				antal: avsnitt.filter((a) => !a.type).length,
			});
		}
	}
	return resultat;
}
