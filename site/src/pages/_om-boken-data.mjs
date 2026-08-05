// Datakälla för den publika infosidan /om-boken/. Allt som är ett tal på den
// sidan räknas fram här ur samma källor som resten av produktionen: content
// collection (avsnittsfilerna), 06-bokstruktur.md via bokstruktur-data.mjs och
// 07:s maskinläsbara spegling kursplan-data.mjs. Ingenting skrivs in för hand,
// eftersom en infosida med handskrivna siffror glider isär från manuset.
//
// Filnamn med inledande understreck routas inte av Astro.

import { getCollection } from 'astro:content';
import { kapitel } from '../../../scripts/bokstruktur-data.mjs';
import { allaPunkter } from '../../../scripts/kursplan-data.mjs';

// Räknar numrerade poster i en H2-sektion i källmarkdownen. Avsnittsfilernas
// delavsnitt ligger på H2, så sektionen sträcker sig till nästa H2 eller filslut.
function raknaSektionsposter(body, rubrik) {
	const delar = body.split(new RegExp(`^## ${rubrik}\\s*$`, 'm'));
	if (delar.length < 2) return 0;
	const sektion = delar[1].split(/^## /m)[0];
	return (sektion.match(/^\d+\. /gm) || []).length;
}

export async function hamtaNyckeltal() {
	const docs = await getCollection('docs');
	const avsnitt = docs.filter((e) => e.data.id !== undefined);
	const avslutningar = docs.filter((e) => e.data.type !== undefined);

	let ord = 0;
	let bildplatshallare = 0;
	let instuderingsfragor = 0;
	let ovningar = 0;
	const begrepp = new Set();

	for (const e of docs) {
		const body = e.body ?? '';
		ord += body.split(/\s+/).filter(Boolean).length;
		bildplatshallare += (body.match(/\[BILD \d/g) || []).length;
		instuderingsfragor += raknaSektionsposter(body, 'Instuderingsfrågor');
		ovningar += raknaSektionsposter(body, 'Övningar');
		for (const b of e.data.concepts_introduced ?? []) begrepp.add(b);
	}

	// Avrundas nedåt till närmaste tusental: ett exakt ordantal ger ett intryck
	// av precision som ett manus under bearbetning inte har.
	const ordAvrundat = Math.floor(ord / 1000) * 1000;

	return {
		kapitel: kapitel.length,
		avsnitt: avsnitt.length,
		avslutningar: avslutningar.length,
		ord: ordAvrundat.toLocaleString('sv-SE'),
		bildplatshallare,
		instuderingsfragor,
		ovningar,
		begrepp: begrepp.size,
	};
}

// Hela innehållsmatrisen ur 07, med kapitlets titel utskriven och antalet
// avsnitt som faktiskt taggat punkten. Täckningen på sidan är alltså mätt i
// manuset, inte avskriven ur en avsiktsförklaring.
export async function hamtaTackning() {
	const docs = await getCollection('docs');
	const taggar = new Map();
	for (const e of docs) {
		const ref = e.data.curriculumReferences;
		if (!ref) continue;
		for (const id of [...(ref.niva1 ?? []), ...(ref.niva2 ?? [])]) {
			taggar.set(id, (taggar.get(id) ?? 0) + 1);
		}
	}

	const kapitelTitel = new Map(kapitel.map((k) => [k.nr, k.titel]));

	// allaPunkter() returnerar en Map (id → punkt) där varje punkt redan bär sin
	// nivåtillhörighet i fältet niva ('niva1' | 'niva2' | 'syftesmal').
	const nivaEtikett = { niva1: 'Nivå 1', niva2: 'Nivå 2', syftesmal: 'Syftesmål' };

	const rader = [...allaPunkter().values()].map((p) => ({
		id: p.id,
		text: p.text,
		kategori: p.kategori,
		niva: nivaEtikett[p.niva] ?? p.niva,
		primar: p.primar,
		primarTitel: kapitelTitel.get(p.primar) ?? '',
		berors: p.berors ?? [],
		antalAvsnitt: taggar.get(p.id) ?? 0,
	}));

	return {
		rader,
		antalPunkter: rader.length,
		utanPrimarkapitel: rader.filter((r) => !r.primar).length,
		utanTaggatAvsnitt: rader.filter((r) => r.antalAvsnitt === 0).length,
	};
}
