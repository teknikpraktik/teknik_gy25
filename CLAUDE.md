# Teknik Gy25 — lärobok

Lärobok i Teknik nivå 1+2 (Gy25) som utvecklas som en modulär kunskapsdatabas: ett avsnitt (H2) = en fil under `content/`, direkt under kapitlets mapp. Kapitel är bokens högsta nivå (H1); avsnittet är den minsta producerade och publicerade enheten; H3-delavsnitt är naturliga onumrerade underrubriker inom ett avsnitt, inte en egen fil eller sida. Lärandemål är metadata på avsnittet (`learningGoals`), inte en rubriknivå — ett avsnitt kan ha ett eller flera. Det finns ingen "modul"-nivå. Utöver startsidan och kapitelavslutningarna (per kapitel: en sammanfattning och en begreppslista, egna `type`-avsnitt utan `learningGoals`) finns inga andra filer i content/ — kapitelsidan är en genererad vy (`site/src/pages/[...oversikt].astro`) som härleds ur 06 + frontmatter vid varje bygge. Produktionsmålet är förlagsfärdig text.

**Migreringsläge (redaktionellt beslut 2026-07-22, se produktionslogg.md):** avsnittsmönstret är löptext (med `[BILD X.Y-N]`-platshållare) → Instuderingsfrågor → Övningar; kapitlet avslutas med bara Sammanfattning och Begrepp (ingen uppgiftsbank/Projektuppgifter); kapitlets större uppgifter skrivs som helkapitelövningar i de senare avsnittens Övningar. Referensimplementationen är `referensimplementation-avsnitt-1-1.md` (projektroten) — läs den innan nytt avsnitt skrivs. Styrdokumenten (03, 05, 06, 07, 09, 11, 12) är omskrivna för hela boken enligt denna modell, men **skript och content/ migreras kapitel för kapitel** när respektive kapitel produceras eller revideras. Fram till dess visar `npm run validate` kända, väntade fel för icke-migrerat innehåll (fel mappnamn för kapitel 1, kvarvarande `NN-projektuppgifter.md`-filer i alla kapitel) — dessa är inte nya fel att jaga, utan migreringsskuld som löses när kapitlet väl tas om hand.

## Källor — vad som styr vad

- **06-bokstruktur.md** är enda källan till kapitel/avsnitt/delavsnitt/lärandemål. `scripts/bokstruktur-data.mjs` *parsar 06 direkt* — det finns ingen datafil att synka. Radformatet är strikt (se 06, "Avsnittens och delavsnittens format"); validate stannar med radnummer vid formatfel.
- **07-kursplanetackning.md** styr kursplanetäckningen. Varje punkt har ett stabilt id (n1-01…, n2-01…, s-01) som används som tagg i avsnittsfilernas `curriculumReferences`. Maskinläsbar spegling: `scripts/kursplan-data.mjs` — uppdateras i samma steg som 07.
- **Skolverket Kursplan Teknik GY25.md** — kursplanens ordagranna lydelser (facit vid formuleringsfrågor).
- Vid konflikt mellan styrdokument gäller prioriteringsordningen i **08-claude-code-manual.md**.

## Kommandon (körs från projektroten)

- `npm run skeleton` — skapar mappar och tomma avsnittsfiler ur 06. Skriver aldrig över, tar aldrig bort.
- `npm run validate` — alla kontroller + status- och täckningsrapport. **Snabb grind under redaktionell iteration:** vid vanliga textändringar (rubriktext, frågor, faktarättning, brödtext, uppgift, figurspec) räcker detta — kör inte webbygge/export/deploy per ändring, rensa inte Astro-cachen (13-produktionsmanual.md, "Arbetslägen").
- `npm run kapitel-klar` — samlad "uppdatera allt" (validering + begreppsregister + webbygge + båda exporterna). Körs vid **kapitelavslut**, inte per ändring. Fullt bygge krävs dock direkt vid ändring i schema, remark-plugin, figurregister, Astro-config eller routing/struktur.
- `npm run begrepp` — genererar begreppsregistret till `export/begreppsregister.md`.
- `npm run export` — förlagsmanus från status `fardig-forsta-version` och uppåt (`-- --status=alla` för allt).
- `npm run export:review` — redaktionellt granskningsmanus (Word + fristående HTML) till `dist/review/`, med automatiska efterkontroller. Sammanställningen delas med export via `scripts/manuscript-core.mjs`.
- Webbplats (granskning): `cd site && npm run build` (kör validate som prebuild). Astro cachar renderade sidor per källfil — efter ändringar i `site/src/remark-granskning.mjs` eller `figures/registry.yml`, rensa `site/.astro` och `site/node_modules/.astro` före bygget. Basepath är `/teknik_gy25/` (GitHub Pages, `site/src/site-base.mjs`); efter push till master publiceras sajten automatiskt via `.github/workflows/deploy.yml`. Redaktionell läsvy utan produktionsmetadata: `/review/`.

## Arbetsflöde för ett avsnitt (detaljer i 13-produktionsmanual.md)

1. Välj nästa avsnitt i kapitlets ordning; kontrollera att `learningGoals` är rätt avgränsat.
2. Sätt `status: under-utveckling`. Fyll i `prerequisites` (avsnitts-id:n), planera begrepp, registrera figurer i `figures/registry.yml`, tagga `curriculumReferences` med punkt-id från 07 och `abilities` med relevanta förmågor.
3. Skriv löptext, `[BILD X.Y-N]`-platshållare, delavsnitt (H3) vid behov, en avslutande samlad sektion Instuderingsfrågor (5–10) och en samlad sektion Övningar (2–10) enligt 03 + 05 (inget Begrepp-block i avsnittet; begreppen kursiveras vid huvudställe, aldrig fetstil). Ta bort platshållarkommentaren. Kalibrera mot referensimplementationen 1.1.
4. Egengranska (08) och granska mot 09. Kör `npm run validate`. Sätt `status: fardig-forsta-version`.
5. Committa: ett commit per avsnitt, t.ex. `Avsnitt 6.1 Krafter — färdig första version`.

## Läs innan du skriver bokinnehåll

Alltid: 03 (pedagogisk modell), 05 (språk), 11 (begreppshantering). Vid taggning: 07. Före statushöjning: 09 (checklistor). 01/02/04/10 ger vision, avgränsningar, beslutsprinciper och tekniksyn — läs vid behov, följ alltid.

## Hårda regler

- Skriv aldrig innehåll utanför kursplanen; hitta aldrig på fakta eller fiktiva exempel när verkliga finns.
- Inga gransknings-, process- eller utkastnotiser i brödtext (t.ex. `[UTKAST …]`, "vad som ändrats", betygsresonemang). Elevtexten ska vara ren; utkaststatus spåras via `migreradeKapitel` (kapitelnivå), inte inline-taggar. Sådant hör i rapporten och/eller produktionslogg.md (05-forfattarmanual.md, "Granskningsnotiser"). `[BILD X.Y-N]`-platshållare är legitima och undantagna. Validate flaggar `[UTKAST …]` i brödtext som aktivt fel.
- Aldrig ett helt kapitel i ett steg — ett avsnitt i taget (08).
- Ett begrepp introduceras i exakt en fil (`concepts_introduced`); återanvänd via `concepts_used`/`[[begrepp:namn]]`.
- Ett avsnitt har inget fast sid-/uppslagsomfång; uppslag är en layout-/tryckfråga, inte en nivå i datamodellen. Fälten `module`, `uppslag` och `practical_component` är pensionerade.
- Avsnittet avslutas med EN samlad sektion Instuderingsfrågor (5–10) och därefter EN samlad sektion Övningar (2–10), som tillsammans täcker alla dess lärandemål och delavsnitt. Inget synligt Begrepp-block per avsnitt; inga separata projektuppgifter — kapitlets större, integrerande uppgifter är helkapitelövningar i de senare avsnittens Övningar. Varje kapitel avslutas med två onumrerade H2-avsnitt utan `learningGoals` — sammanfattning, begrepp (`type: kapitelsammanfattning`/`begreppsovning`) — listade direkt i 06-bokstruktur.md som kapitlets två sista avsnitt, inte i något separat manifest.
- Statusflödet är: ej-paborjad → under-utveckling → fardig-forsta-version → fackgranskad → sprakgranskad → klar. Från fardig-forsta-version ställer validate innehållskrav (icke-tom instuderingsfrågesektion, taggning, inga kommentarer).
- Filnamn nollutfylls (`01-krafter.md`), frontmatter-id gör det inte (`6.1`). Skeleton skapar rätt namn.
- Delning/sammanslagning av avsnitt: redigera 06, kör `npm run skeleton`, flytta ev. innehåll, radera överflödiga filer manuellt, kör `npm run validate`.
- Kapitel-/avsnittsstruktur och kursplanetäckning ändras aldrig utan uttryckligt beslut av projektägaren.
