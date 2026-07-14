// Kapitelmanifest för kapitelavslutningarna (12-produktionsarkitektur.md,
// "Kapitelavslutningar"). Detta är den EXPLICITA strukturkällan: den avgör
// vilka kapitelavslutningar som finns och i vilken ordning de placeras sist i
// respektive kapitel. Filnamnskonventionen (content/<kapitelSlug>/<slug>.md)
// används bara för att lokalisera filen, aldrig som enda strukturkälla.
//
// scripts/validate.mjs stämmer av manifestet mot filerna åt båda håll: varje
// deklarerad post ska ha en fil med rätt type/chapter, och varje type-fil på
// disk ska vara deklarerad här. Manifestet stödjer hela boken; poster läggs
// till när ett kapitel produceras (inga tomma filer skapas i förväg).
//
// Post: { type: 'kapitelsammanfattning' | 'begreppsovning' | 'uppgiftsbank', slug, title }
//   type  — innehållstypen (schemats kapitelavslutningTyper)
//   slug  — filnamn utan .md, under kapitlets mapp; även URL-segment på webben
//   title — sidtitel (h1 på webben, sektionsrubrik i export)

export const kapitelavslutningar = {
  // Ordningen i listan är placeringsordningen sist i kapitlet (kapitel-
  // sammanfattning, sedan begreppsövning, sedan uppgiftsbank som avslutar
  // kapitlet — redaktionellt beslut 2026-07-14, produktionslogg.md).
  1: [
    { type: 'kapitelsammanfattning', slug: 'sammanfattning', title: 'Sammanfattning' },
    { type: 'begreppsovning', slug: 'begreppsovning', title: 'Begreppsövning' },
    { type: 'uppgiftsbank', slug: 'uppgifter-och-projekt', title: 'Praktiska uppgifter och projekt' },
  ],
  2: [
    { type: 'kapitelsammanfattning', slug: 'sammanfattning', title: 'Sammanfattning' },
    { type: 'begreppsovning', slug: 'begreppsovning', title: 'Begreppsövning' },
    { type: 'uppgiftsbank', slug: 'uppgifter-och-projekt', title: 'Praktiska uppgifter och projekt' },
  ],
};

// Alla deklarerade kapitelavslutningar för ett kapitelnummer, i manifestordning.
export function kapitelavslutningarForKapitel(nr) {
  return kapitelavslutningar[nr] ?? [];
}

// Platt lista: { chapter, type, slug, title } i kapitel- och manifestordning.
export function allaKapitelavslutningar() {
  const result = [];
  for (const nr of Object.keys(kapitelavslutningar).map(Number).sort((a, b) => a - b)) {
    for (const post of kapitelavslutningar[nr]) {
      result.push({ chapter: nr, ...post });
    }
  }
  return result;
}
