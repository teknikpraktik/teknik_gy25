import { z } from 'zod';

// Enda källan till metadataschemat. Både site/src/content.config.ts
// (byggtidsvalidering i Astro) och scripts/validate.mjs (tvärgående
// kontroller: begreppsunikhet, figur-ID, kursplanetäckning, förkunskapsordning,
// avsnittstyper) importerar detta schema. Ändra bara här.
//
// Filens namn (larandemal.schema.mjs) är historiskt — schemat beskriver i dag
// avsnittet (H2), bokens minsta produktionsenhet, inte ett enskilt lärandemål.
// Lärandemål är ett metadatafält (`learningGoals`) på avsnittet, inte en egen
// filtyp. Se 12-produktionsarkitektur.md, "Produktionsenhet".

export const statusEnum = [
  'ej-paborjad',
  'under-utveckling',
  'fardig-forsta-version',
  'fackgranskad',
  'sprakgranskad',
  'klar',
];

// De fem bedömda förmågorna (07-kursplanetackning.md, "Förmågekontroll"),
// stabila id:n för taggning i frontmatterfältet `abilities`.
export const formagor = [
  { id: 'f1', text: 'Kunskaper om teknikutvecklingsprocessens delar och hur de samverkar' },
  { id: 'f2', text: 'Lösa tekniska problem (praktiskt + teoretiskt); analysera och värdera lösningar utifrån hållbarhet' },
  { id: 'f3', text: 'Använda teknikvetenskapliga begrepp, teorier och modeller; beräkningar och rimlighetsbedömningar' },
  { id: 'f4', text: 'Kunskaper om teknikens och samhällets växelverkan (ekonomiskt, socialt, miljömässigt)' },
  { id: 'f5', text: 'Dokumentera, visualisera och kommunicera tekniska lösningar' },
];
export const formagaIds = formagor.map((f) => f.id);

// Kapitelavslutningarnas innehållstyper (12-produktionsarkitektur.md,
// "Kapitelavslutningar"). Egna innehållstyper, aldrig ett teoriavsnitt med
// lärandemål. De är H2-avsnitt som vilka andra som helst i 06-bokstruktur.md,
// alltid sist i kapitlet i ordningen sammanfattning, begreppsövning,
// uppgiftsbank.
//
// Kapitelsammanfattningen är löpande brödtext, cirka 300 ord, utan ordlista.
// Uppgiftsbanken har ingen uppgiftsmetadata: uppgifterna skrivs som en enkel
// numrerad lista i brödtexten (löpnummer + namn), utan nivåer, arbetsform,
// tidsåtgång eller lärandemålskoppling — utförandet överlåts till läraren och
// eleven (redaktionellt beslut). Begreppsövningen är en punktlista (`ordlista`)
// där eleven förklarar varje begrepp med en egen mening.
export const kapitelavslutningTyper = ['kapitelsammanfattning', 'begreppsovning', 'uppgiftsbank'];

// Fält som gäller för content-filer i den delade collectionen. Allt är valfritt
// så att teoriavsnitt, kapitelavslutningar (type-filer) och startsidan
// (index.md) alla validerar mot samma permissiva schema. De strikta varianterna
// längre ned används av scripts/validate.mjs för att kräva rätt fält per filtyp.
//
// Fälten `module`, `uppslag`, `practical_component`, `praktiska_uppgifter_undantag`
// och uppgiftsmetadatan `uppgifter[]` är pensionerade (12-produktionsarkitektur.md)
// och ingår inte längre. Kvarvarande förekomster i äldre filer ignoreras
// (okända nycklar strippas av Zod).
export const larandemalFields = {
  id: z.string().describe('Avsnittets id, t.ex. "6.1" (kapitel.sektionsnummer)').optional(),
  chapter: z.number().int().optional(),
  sectionNumber: z.number().int().optional(),
  title: z.string().optional(),
  status: z.enum(statusEnum).optional(),
  levels: z.array(z.enum(['niva1', 'niva2'])).default([]).optional().describe(
    'Vilken/vilka kursnivåer (TEKI1000X/TEKI2000X) avsnittet är obligatoriskt innehåll för. Härleds normalt ur curriculumReferences men kan sättas explicit när ett avsnitt är rent fördjupande för nivå 2.',
  ),
  curriculumReferences: z
    .object({
      niva1: z.array(z.string()).default([]).describe('Punkt-id:n (n1-xx, s-01) från 07/kursplan-data.mjs'),
      niva2: z.array(z.string()).default([]).describe('Punkt-id:n (n2-xx, s-01) från 07/kursplan-data.mjs'),
    })
    .optional(),
  learningGoals: z.array(z.string()).default([]).optional().describe(
    'Avsnittets lärandemål: mätbara målformuleringar ur 06-bokstruktur.md. Metadata och kvalitetskriterium, ingen synlig rubriknivå (03-bokens-arkitektur.md).',
  ),
  abilities: z.array(z.enum(formagaIds)).default([]).optional().describe('Vilka av de fem bedömda förmågorna (07) avsnittet primärt tränar.'),
  concepts_introduced: z.array(z.string()).default([]).optional(),
  concepts_used: z.array(z.string()).default([]).optional(),
  figures: z.array(z.string()).default([]).optional(),
  prerequisites: z.array(z.string()).default([]).optional().describe('Id:n på avsnitt (t.ex. "6.1") som måste komma tidigare i läsordningen.'),
  // Kapitelavslutningar (12): type identifierar innehållstypen; begreppsövningen
  // får ha en ordlista.
  type: z.enum(kapitelavslutningTyper).optional(),
  ordlista: z.array(z.string()).optional(),
};

export const larandemalSchema = z.object(larandemalFields);

// Striktare variant: används av scripts/validate.mjs för filer som har
// ett "id" (dvs. utger sig för att vara ett riktigt avsnitt) — då krävs hela
// fältuppsättningen, inte bara valfria fält.
export const larandemalRequiredSchema = z.object({
  id: z.string(),
  chapter: z.number().int(),
  sectionNumber: z.number().int(),
  title: z.string(),
  status: z.enum(statusEnum),
  levels: z.array(z.enum(['niva1', 'niva2'])).default([]),
  curriculumReferences: z.object({
    niva1: z.array(z.string()).default([]),
    niva2: z.array(z.string()).default([]),
  }),
  learningGoals: z.array(z.string()).default([]),
  abilities: z.array(z.enum(formagaIds)).default([]),
  concepts_introduced: z.array(z.string()).default([]),
  concepts_used: z.array(z.string()).default([]),
  figures: z.array(z.string()).default([]),
  prerequisites: z.array(z.string()).default([]),
});

// Striktare variant för kapitelavslutningsavsnitt (känns igen på "type", saknar
// "learningGoals"). Uppgiftsbankens uppgifter ligger som numrerad lista i
// brödtexten och har ingen frontmatter-metadata; endast begreppsövningen har en
// valfri ordlista.
export const kapitelavslutningRequiredSchema = z.object({
  type: z.enum(kapitelavslutningTyper),
  chapter: z.number().int(),
  sectionNumber: z.number().int(),
  title: z.string(),
  status: z.enum(statusEnum),
  ordlista: z.array(z.string()).optional(),
});
