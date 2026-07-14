import { z } from 'zod';

// Enda källan till metadataschemat. Både site/src/content.config.ts
// (byggtidsvalidering i Astro) och scripts/validate.mjs (tvärgående
// kontroller: begreppsunikhet, figur-ID, kursplanetäckning, förkunskapsordning,
// kapitelavslutningar) importerar detta schema. Ändra bara här.

export const statusEnum = [
  'ej-paborjad',
  'under-utveckling',
  'fardig-forsta-version',
  'fackgranskad',
  'sprakgranskad',
  'klar',
];

// Kapitelavslutningarnas innehållstyper (12-produktionsarkitektur.md,
// "Kapitelavslutningar"). Egna innehållstyper, aldrig lärandemål. Ordningen
// sist i kapitlet är kapitelsammanfattning, begreppsövning, uppgiftsbank
// (scripts/kapitelavslutningar-data.mjs styr faktisk ordning).
//
// Kapitelsammanfattningen är löpande brödtext, cirka 300 ord, utan ordlista.
// Uppgiftsbanken har ingen uppgiftsmetadata: uppgifterna skrivs som en enkel
// numrerad lista i brödtexten (löpnummer + namn), utan nivåer, arbetsform,
// tidsåtgång eller lärandemålskoppling — utförandet överlåts till läraren och
// eleven (redaktionellt beslut). Begreppsövningen är en punktlista (`ordlista`)
// där eleven förklarar varje begrepp med en egen mening.
export const kapitelavslutningTyper = ['kapitelsammanfattning', 'begreppsovning', 'uppgiftsbank'];

// Fält som gäller för content-filer i den delade collectionen. Allt är valfritt
// så att lärandemål, kapitelavslutningar (type-filer) och startsidan (index.md)
// alla validerar mot samma permissiva schema. De strikta varianterna längre ned
// används av scripts/validate.mjs för att kräva rätt fält per filtyp.
//
// Fälten `uppslag`, `practical_component`, `praktiska_uppgifter_undantag` och
// uppgiftsmetadatan `uppgifter[]` är pensionerade (12-produktionsarkitektur.md)
// och ingår inte längre. Kvarvarande förekomster i äldre filer ignoreras
// (okända nycklar strippas av Zod).
export const larandemalFields = {
  id: z.string().describe('T.ex. "6.1.2"').optional(),
  chapter: z.number().int().optional(),
  module: z.string().optional(),
  goal: z.string().describe('Mätbar målformulering, inleds med observerbart verb').optional(),
  status: z.enum(statusEnum).optional(),
  curriculum: z
    .object({
      niva1: z.array(z.string()).default([]).describe('Punkt-id:n (n1-xx, s-01) från 07/kursplan-data.mjs'),
      niva2: z.array(z.string()).default([]).describe('Punkt-id:n (n2-xx, s-01) från 07/kursplan-data.mjs'),
    })
    .optional(),
  concepts_introduced: z.array(z.string()).default([]).optional(),
  concepts_used: z.array(z.string()).default([]).optional(),
  figures: z.array(z.string()).default([]).optional(),
  prerequisites: z.array(z.string()).default([]).optional(),
  // Kapitelavslutningar (12): type identifierar innehållstypen; begreppsövningen
  // får ha en ordlista.
  type: z.enum(kapitelavslutningTyper).optional(),
  ordlista: z.array(z.string()).optional(),
};

export const larandemalSchema = z.object(larandemalFields);

// Striktare variant: används av scripts/validate.mjs för filer som har
// ett "id" (dvs. utger sig för att vara en riktig lärandemålsfil) —
// då krävs hela fältuppsättningen, inte bara valfria fält.
export const larandemalRequiredSchema = z.object({
  id: z.string(),
  chapter: z.number().int(),
  module: z.string(),
  title: z.string(),
  goal: z.string(),
  status: z.enum(statusEnum),
  curriculum: z.object({
    niva1: z.array(z.string()).default([]),
    niva2: z.array(z.string()).default([]),
  }),
  concepts_introduced: z.array(z.string()).default([]),
  concepts_used: z.array(z.string()).default([]),
  figures: z.array(z.string()).default([]),
  prerequisites: z.array(z.string()).default([]),
});

// Striktare variant för kapitelavslutningsfiler (känns igen på "type", saknar
// "id"). Uppgiftsbankens uppgifter ligger som numrerad lista i brödtexten och
// har ingen frontmatter-metadata; endast begreppsövningen har en valfri ordlista.
export const kapitelavslutningRequiredSchema = z.object({
  type: z.enum(kapitelavslutningTyper),
  chapter: z.number().int(),
  title: z.string(),
  status: z.enum(statusEnum),
  ordlista: z.array(z.string()).optional(),
});
