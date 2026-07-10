# Teknik Gy25 — lärobok

Lärobok i Teknik nivå 1+2 (Gy25) som utvecklas som en modulär kunskapsdatabas: ett lärandemål = en fil under `content/`. Utöver startsidan finns inga andra filer i content/ — kapitel- och modulsidor är genererade vyer (`site/src/pages/[...oversikt].astro`) som härleds ur 06 + frontmatter vid varje bygge. Produktionsmålet är förlagsfärdig text.

## Källor — vad som styr vad

- **06-bokstruktur.md** är enda källan till kapitel/moduler/lärandemål. `scripts/bokstruktur-data.mjs` *parsar 06 direkt* — det finns ingen datafil att synka. Radformatet är strikt (se 06, "Lärandemålens format"); validate stannar med radnummer vid formatfel.
- **07-kursplanetackning.md** styr kursplanetäckningen. Varje punkt har ett stabilt id (n1-01…, n2-01…, s-01) som används som tagg i lärandemålsfilernas `curriculum`. Maskinläsbar spegling: `scripts/kursplan-data.mjs` — uppdateras i samma steg som 07.
- **Skolverket Kursplan Teknik GY25.md** — kursplanens ordagranna lydelser (facit vid formuleringsfrågor).
- Vid konflikt mellan styrdokument gäller prioriteringsordningen i **08-claude-code-manual.md**.

## Kommandon (körs från projektroten)

- `npm run skeleton` — skapar mappar och tomma lärandemålsfiler ur 06. Skriver aldrig över, tar aldrig bort.
- `npm run validate` — alla kontroller + status- och täckningsrapport. Kör efter varje ändring.
- `npm run begrepp` — genererar begreppsregistret till `export/begreppsregister.md`.
- `npm run export` — förlagsmanus från status `fardig-forsta-version` och uppåt (`-- --status=alla` för allt).
- `npm run export:review` — redaktionellt granskningsmanus (Word + fristående HTML) till `dist/review/`, med automatiska efterkontroller. Sammanställningen delas med export via `scripts/manuscript-core.mjs`.
- Webbplats (granskning): `cd site && npm run build` (kör validate som prebuild). Astro cachar renderade sidor per källfil — efter ändringar i `site/src/remark-granskning.mjs` eller `figures/registry.yml`, rensa `site/.astro` och `site/node_modules/.astro` före bygget. Basepath är `/teknik_gy25/` (GitHub Pages, `site/src/site-base.mjs`); efter push till master publiceras sajten automatiskt via `.github/workflows/deploy.yml`. Redaktionell läsvy utan produktionsmetadata: `/review/`.

## Arbetsflöde för ett lärandemål (detaljer i 13-produktionsmanual.md)

1. Välj nästa mål i modulens ordning; kontrollera att `goal` är rätt avgränsat.
2. Sätt `status: under-utveckling`. Fyll i `prerequisites`, planera begrepp, registrera figurer i `figures/registry.yml`, tagga `curriculum` med punkt-id från 07, sätt `practical_component`.
3. Skriv teori, figurplatshållare och uppgifter (Förstå/Utveckla/Utmana) enligt 03 + 05. Ta bort platshållarkommentaren.
4. Egengranska (08) och granska mot 09. Kör `npm run validate`. Sätt `status: fardig-forsta-version`.
5. Committa: ett commit per lärandemål, t.ex. `Lärandemål 6.1.1 Kraftbegreppet — färdig första version`.

## Läs innan du skriver bokinnehåll

Alltid: 03 (pedagogisk modell), 05 (språk), 11 (begreppshantering). Vid taggning: 07. Före statushöjning: 09 (checklistor). 01/02/04/10 ger vision, avgränsningar, beslutsprinciper och tekniksyn — läs vid behov, följ alltid.

## Hårda regler

- Skriv aldrig innehåll utanför kursplanen; hitta aldrig på fakta eller fiktiva exempel när verkliga finns.
- Aldrig ett helt kapitel i ett steg — ett lärandemål i taget (08).
- Ett begrepp introduceras i exakt en fil (`concepts_introduced`); återanvänd via `concepts_used`/`[[begrepp:namn]]`.
- Statusflödet är: ej-paborjad → under-utveckling → fardig-forsta-version → fackgranskad → sprakgranskad → klar. Från fardig-forsta-version ställer validate innehållskrav (uppgiftsdelar, taggning, inga kommentarer).
- Filnamn nollutfylls (`6.01.02-kraftresultanter.md`), frontmatter-id gör det inte (`6.1.2`). Skeleton skapar rätt namn.
- Delning/sammanslagning av lärandemål: redigera 06, kör `npm run skeleton`, flytta ev. innehåll, radera överflödiga filer manuellt, kör `npm run validate`.
- Kapitel-/modulstruktur och kursplanetäckning ändras aldrig utan uttryckligt beslut av projektägaren.
