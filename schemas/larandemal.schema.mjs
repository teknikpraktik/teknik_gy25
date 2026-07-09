import { z } from 'zod';

// Enda källan till lärandemålsschemat. Både site/src/content.config.ts
// (byggtidsvalidering i Astro) och scripts/validate.mjs (tvärgående
// kontroller: begreppsunikhet, figur-ID, kursplanetäckning, förkunskapsordning)
// importerar detta schema. Ändra bara här.

export const statusEnum = [
  'ej-paborjad',
  'under-utveckling',
  'fardig-forsta-version',
  'fackgranskad',
  'sprakgranskad',
  'klar',
];

// Fält som gäller för en riktig lärandemålsfil. Strukturella sidor
// (kapitel-/modulöversikter, startsida) sätter inget av detta och
// behandlas då inte som lärandemål av valideringsskripten.
export const larandemalFields = {
  id: z.string().describe('T.ex. "6.1.2"').optional(),
  chapter: z.number().int().optional(),
  module: z.string().optional(),
  goal: z.string().describe('Mätbar målformulering, inleds med observerbart verb').optional(),
  uppslag: z.number().int().min(1).describe('Planerat antal uppslag (03-bokens-arkitektur.md)').optional(),
  status: z.enum(statusEnum).optional(),
  curriculum: z
    .object({
      niva1: z.array(z.string()).default([]),
      niva2: z.array(z.string()).default([]),
    })
    .optional(),
  concepts_introduced: z.array(z.string()).default([]).optional(),
  concepts_used: z.array(z.string()).default([]).optional(),
  figures: z.array(z.string()).default([]).optional(),
  prerequisites: z.array(z.string()).default([]).optional(),
  practical_component: z.boolean().optional(),
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
  uppslag: z.number().int().min(1).default(1),
  status: z.enum(statusEnum),
  curriculum: z.object({
    niva1: z.array(z.string()).default([]),
    niva2: z.array(z.string()).default([]),
  }),
  concepts_introduced: z.array(z.string()).default([]),
  concepts_used: z.array(z.string()).default([]),
  figures: z.array(z.string()).default([]),
  prerequisites: z.array(z.string()).default([]),
  practical_component: z.boolean().default(false),
});
