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
// "Kapitelavslutningar"). Egna innehållstyper, aldrig lärandemål.
export const kapitelavslutningTyper = ['begreppsovning', 'uppgiftsbank'];
export const omfattningNivaer = ['kort-aktivitet', 'lektionsuppgift', 'miniprojekt'];
export const arbetsformer = ['individuell', 'par', 'grupp'];

// En uppgift i en uppgiftsbank. Obligatoriska fält enligt redaktionellt beslut:
// ref, omfattning, larandemal, tid, arbetsform, produkt. Övriga är valfria.
export const uppgiftSchema = z.object({
  ref: z.string(),
  omfattning: z.enum(omfattningNivaer),
  larandemal: z.array(z.string()).min(1),
  tid: z.string(),
  arbetsform: z.enum(arbetsformer),
  produkt: z.string(),
  material: z.array(z.string()).optional(),
  digitala_verktyg: z.array(z.string()).optional(),
  forkunskaper: z.array(z.string()).optional(),
  extern_tillgang: z.string().optional(),
  alternativ: z.string().optional(),
});

// Fält som gäller för content-filer i den delade collectionen. Allt är valfritt
// så att lärandemål, kapitelavslutningar (type-filer) och startsidan (index.md)
// alla validerar mot samma permissiva schema. De strikta varianterna längre ned
// används av scripts/validate.mjs för att kräva rätt fält per filtyp.
//
// Fälten `uppslag`, `practical_component` och `praktiska_uppgifter_undantag` är
// pensionerade (12-produktionsarkitektur.md) och ingår inte längre. Kvarvarande
// förekomster i äldre skelettfiler ignoreras (okända nycklar strippas av Zod).
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
  // Kapitelavslutningar (12): type identifierar innehållstypen; uppgifter/ordlista
  // hör till respektive typ.
  type: z.enum(kapitelavslutningTyper).optional(),
  uppgifter: z.array(uppgiftSchema).optional(),
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
// "id"). uppgiftsbank kräver en icke-tom uppgifter-lista; begreppsovning gör det
// inte. Kontrollen av kopplingar mot lärandemål och manifest ligger i validate.mjs.
export const kapitelavslutningRequiredSchema = z
  .object({
    type: z.enum(kapitelavslutningTyper),
    chapter: z.number().int(),
    title: z.string(),
    status: z.enum(statusEnum),
    uppgifter: z.array(uppgiftSchema).optional(),
    ordlista: z.array(z.string()).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === 'uppgiftsbank' && (!data.uppgifter || data.uppgifter.length === 0)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'uppgiftsbank kräver minst en post i uppgifter[]', path: ['uppgifter'] });
    }
  });
