# Dokumentnamn

12-produktionsarkitektur.md

---

# Produktionsarkitektur

## Syfte

Projektet utvecklas som en modulär kunskapsdatabas.

Den färdiga boken är en export av denna databas.

Projektets interna struktur styrs därför inte av hur en tryckt bok ser ut, utan av hur innehållet effektivast utvecklas, granskas och underhålls. Produktionsstrukturen och den publicerade strukturen är dessutom identiska: det finns ingen intern administrativ nivå som skiljer sig från vad läsaren ser.

---

## Produktionsenhet

Projektets minsta produktionsenhet är ett **avsnitt**. Avsnittet på H2-nivå är den fasta pedagogiska, redaktionella, navigerbara och producerbara enheten. Det finns ingen mellannivå ("modul") mellan kapitel och avsnitt.

Varje avsnitt lagras i en egen Markdown-fil med YAML-frontmatter, direkt under `content/<kapitel>/`.

Ett avsnitt kan omfatta ett eller flera lärandemål och ett eller flera H3-delavsnitt. Lärandemålen är metadata och kvalitetskriterier (frontmatterfältet `learningGoals`), inte en rubriknivå, en fil eller en sida.

Ett avsnitt har inget fast sid- eller uppslagsomfång (03-bokens-arkitektur.md). Det får flöda över så många sidor som förståelsen kräver och delas bara vid flera tydligt skilda delområden. Uppslag och sidbrytningar är frågor för layout och tryckexport, inte en nivå i datamodellen. Formuleringar som "Uppslag 1" får inte förekomma i elevtexten.

Utöver de vanliga avsnitten finns per kapitel två **kapitelavslutande avsnitt** — en sammanfattning och en begreppslista (se "Kapitelavslutningar" nedan). De listas i 06-bokstruktur.md som onumrerade H2-rader sist i kapitlet, saknar `learningGoals` och identifieras i stället av frontmatterfältet `type`.

**Migreringsläge (2026-07-22):** kapitelmodellen med två onumrerade kapitelavslutningar, avsnittsmönstret löptext/instuderingsfrågor/övningar och `[BILD]`-platshållare är fastställd (03, 06), men skripten (`bokstruktur-data.mjs`, `validate.mjs`, `generate-skeleton.mjs`, exporter, webbvyer) och delar av content/ följer ännu den tidigare modellen. Migreringen görs kapitel för kapitel; beskrivningarna i detta dokument anger målmodellen och markerar där skriptsidan släpar. Se produktionslogg.md, posten 2026-07-22.

Claude Code får aldrig skriva ett helt kapitel i en fil.

---

## Rubriknumrering

All synlig rubriknumrering i manus, webb och export har exakt två hierarkiska nivåer: kapitel (`1`) och avsnitt (`1.1`). Delavsnitt (H3) är onumrerade underrubriker, och en eventuell ytterligare nedbrytning (H4, undantagsvis) är det också. Ingen synlig tredje numreringsnivå (`1.1.1`) förekommer, varken i markdown-rubriker, genererade sidtitlar, menyer, sidopaneler, brödsmulor, innehållsförteckningar, exportformat eller ankarlänkar/etiketter.

Begreppet uppslag hör hemma i layout och tryckexport, inte i datamodellen, och skapar aldrig en egen synlig rubriknivå. Ett avsnitt som flödar över flera sidor struktureras med delavsnitt i löptexten (se 13-produktionsmanual.md, "Skriv"), inte med egen numrering.

---

## Mappstruktur

```
content/
  index.md                          # startsida för produktionsmiljön (enda strukturella sidan)
  06-mekanik-och-konstruktion/       # kapitel: <nr>-<slug>, slug från kapitlets titel
    01-krafter.md                   # avsnitt: <sektionsnr>-<slug>, sektionsnr nollutfyllt
    02-moment.md
    03-jamvikt.md
    ...
    07-sammanfattning.md            # kapitelavslutning: type: kapitelsammanfattning (inga learningGoals)
    08-begrepp.md                   # kapitelavslutning: type: begreppsovning (begreppslista, se "Kapitelavslutningar")
figures/
  registry.yml                      # centralt figur-ID-register
schemas/
  larandemal.schema.mjs             # enda källan till metadataschemat (Zod) — beskriver i dag avsnittet
scripts/
  bokstruktur-data.mjs              # tolkar 06-bokstruktur.md direkt (06 är enda källan)
  kursplan-data.mjs                 # maskinläsbar spegling av 07:s innehållsmatris
  generate-skeleton.mjs             # skapar mapp-/avsnittsskelett (tomma filer, ingen text)
  validate.mjs                      # tvärgående kvalitetskontroller (se nedan)
  begreppsregister.mjs              # genererar centralt begreppsregister till export/
  export-manuscript.mjs             # sammanställer och exporterar bokmanus
site/                               # Astro + Starlight, se "Webbformat" nedan
export/                             # genererade manusfiler (gitignorad, byggs på nytt varje gång)
```

Kapitel- och avsnittsnamn i mappstrukturen speglar 06-bokstruktur.md exakt. 06 är enda redigeringsytan: `scripts/bokstruktur-data.mjs` tolkar dokumentet direkt vid varje körning, så det finns ingen datafil att hålla i synk. Efter en strukturändring i 06 räcker `npm run skeleton` — `scripts/validate.mjs` felar när content/ och 06 inte stämmer överens, inklusive fel filnamn. Kapitelavslutningarnas existens och ordning styrs direkt av 06, precis som för vilket annat avsnitt — det finns inget separat manifest att hålla i synk.

Sektionsnummer i filnamn nollutfylls (`01-krafter.md` … `10-...`) så att lexikografisk sortering i webbplatsens sidopanel och navigering stämmer även vid tvåsiffriga nummer. Id:t i frontmattern skrivs utan utfyllnad (`6.1`). Det operativa arbetsflödet beskrivs i 13-produktionsmanual.md.

---

## Metadata

Varje avsnittsfil har YAML-frontmatter enligt schemat i `schemas/larandemal.schema.mjs`:

```yaml
id: "6.1"
chapter: 6
sectionNumber: 1
title: "Krafter"
status: under-utveckling     # ej-paborjad | under-utveckling | fardig-forsta-version | fackgranskad | sprakgranskad | klar
levels: [niva1]               # vilka kursnivåer (niva1/niva2) avsnittet är obligatoriskt för
curriculumReferences:
  niva1: ["n1-09"]            # punkt-id från 07-kursplanetackning.md (n1-xx, n2-xx, s-01)
  niva2: []
learningGoals:
  - "Beskriva en kraft med storlek, riktning och angreppspunkt samt rita krafter som vektorer."
  - "Bestämma resultanten av flera krafter grafiskt och genom beräkning med komposanter."
abilities: [f3]                # vilka av de fem bedömda förmågorna (07) avsnittet primärt tränar
concepts_introduced: ["kraft", "kraftresultant"]
concepts_used: ["vektor"]
figures: ["fig-6.1.1-a", "fig-6.1.2-a"]
prerequisites: []              # id:n på andra avsnitt (t.ex. "5.2"), inte enskilda lärandemål
```

Fälten `module`, `uppslag` och `practical_component` är **pensionerade** (redaktionellt beslut). Modul fanns bara som mellannivå i den tidigare, nu avvecklade arkitekturen. Uppslag är en layoutfråga, och praktisk täckning härleds från uppgiftsbankens kopplingar till avsnitten, inte från en boolesk flagga.

Schemat är gemensamt för webbplatsens byggtidsvalidering (Astro content collections) och `scripts/validate.mjs`. Det finns bara på ett ställe och importeras av båda — ändra bara i `schemas/larandemal.schema.mjs`.

Enda rent strukturella sidan i content/ är startsidan (`index.md`), som bara sätter `title`. Kapitelöversikten är inte en fil utan en genererad vy (se "Webbformat") och har därför ingen frontmatter alls. Kapitelavslutningarna (sammanfattning, begreppsövning, uppgiftsbank) är egna avsnitt med `type`-baserad frontmatter (se "Kapitelavslutningar").

---

## Webbformat

Projektet har en statisk dokumentationswebbplats byggd med **Astro + Starlight** (`site/`), som läser innehåll direkt från `content/`.

**Webbplatsen är ett internt produktions- och granskningsverktyg. Den är inte en publicerad produkt eller en del av bokens leverans.** Figurer visas i webbplatsen som platshållarspecifikation (syfte/innehåll/text), aldrig som färdig grafik — den slutliga grafiska produktionen görs alltid av förlaget (se 01, 03, 08).

Varje avsnittssida inleds med en **granskningsruta** (genererad ur frontmattern av `site/src/remark-granskning.mjs`): lärandemål, status, kursplanetaggar, begrepp, figurer och förkunskaper. Rutan finns bara i webbvyn och hamnar aldrig i exporten, som läser källfilerna direkt. Samma plugin renderar `[[begrepp:...]]` som länk till huvudstället och `[[figur:...]]` som platshållarruta ur registret; okänt begrepp eller okänd figur ger fel i både validate och bygget. Detta administrativa produktionsläge är den ordinarie webbplatsens beteende och lämnas oförändrat — klickbara begreppslänkar hör hemma i ett internt granskningsverktyg (se "Länkar i elevtext" nedan).

**Redaktionell granskningsvy** (`/review/`): ett rent läsmanus utan produktionsmetadata, genererat statiskt vid varje bygge ur samma content collection (`site/src/pages/review/`). Översikt med klickbar innehållsförteckning, en sida per kapitel med färdigt innehåll (primär läsvy) samt `/review/hela-manuset/` för sökning och sammanhängande utskrift. Endast avsnitt med status `fardig-forsta-version` eller högre ingår, i 06:s kanoniska ordning. Granskningsrutor och figurplatshållare tas bort i byggsteget (inte via CSS) — bygget felar om rensningen lämnar produktionsmarkup kvar. `[[begrepp:...]]`-shortcoden löses här upp till vanlig text utan länk, i linje med "Länkar i elevtext" nedan — granskningsvyn ska läsas som eleven kommer att möta texten, inte som ett korslänkat uppslagsverk.

Granskningsvyn har en permanent vänsterspalt (desktop) som visar hela manusets hierarki — kapitel, avsnitt — genererad ur samma bokstruktur (06 via `bokstruktur-data.mjs`) som resten av produktionen, med aktuell sida markerad och rätt gren expanderad. Spalten är egen för `/review/` (`site/src/pages/review/_ReviewLayout.astro`) och påverkar inte den ordinarie webbplatsens Starlight-sidopanel, som är oförändrad (se "Navigering"). På smal skärm ersätts spalten av en öppningsbar meny.

**Publicering:** webbplatsen byggs och publiceras automatiskt på GitHub Pages vid varje push till master (`.github/workflows/deploy.yml`) under `https://teknikpraktik.github.io/teknik_gy25/`. Base path är konfigurerad i `site/src/site-base.mjs` och delas av alla interna länkbyggen. Hela webbplatsen är märkt `noindex, nofollow` och har `robots.txt` med `Disallow: /` — detta hindrar indexering men är ingen åtkomstkontroll: Pages-sajten är publikt läsbar för den som har adressen.

**Kapitelsidan är en genererad vy**, inte en fil i content/ (`site/src/pages/[...oversikt].astro`). Den härleds vid varje bygge ur 06-bokstruktur.md, avsnittens frontmatter och kursplan-data.mjs och kan därför aldrig gå ur synk eller visa cachad status. Den visar en avsnittstabell med aggregerad status, begreppsflöde (med varning när ett begrepp används före sitt huvudställe), kapitlets kursplanansvar med taggningsläge samt 09:s kapitelchecklista. Det finns ingen motsvarande modulvy: avsnittet är minsta enhet, och dess egen sida visar redan lärandemål och begrepp i granskningsrutan. Navigeringen är Start → Kapitel → Avsnitt.

Markdown med frontmatter är källformatet. HTML genereras automatiskt av Astro vid varje bygge och committas inte till git.

---

## Navigering

Varje sida visar

- föregående/nästa sida i läsordningen
- kapitelöversikt (genererad vy, se "Webbformat")
- innehållsförteckning (sidopanelen, genererad ur 06-bokstruktur.md via `scripts/bokstruktur-data.mjs`)

Navigeringen genereras automatiskt ur bokstrukturen och underhålls aldrig manuellt, vilket gör det säkert för Claude Code att dela eller slå ihop avsnitt (04 §17) utan att länkar bryts. Sidopanelens poster är slug-baserade: bygget felar om en sida i 06 saknas i content/, vilket fungerar som extra synkkontroll.

Denna sidopanel och den ordinarie webbplatsens struktur i övrigt är produktionens administrativa läge och ändras inte av den redaktionella översynen av elevtext och länkar (se "Webbformat", "Redaktionell granskningsvy" och "Länkar i elevtext"). Endast `/review/` fick en egen permanent vänsterspalt.

---

## Länkar i elevtext

Löpande text, uppgiftsinstruktioner och figurtext ska inte innehålla klickbara länkar. Tekniska begrepp som "teknisk lösning" visas som vanlig text, inte som länk, i alla vyer som representerar elevtext: exporten (som redan löser upp `[[begrepp:...]]` till text) och den redaktionella granskningsvyn `/review/`.

Detta gäller manuella markdownlänkar i källfilerna, automatiska begreppslänkar och korsreferenser som genereras av remark/rehype-plugins eller andra komponenter. Källfilerna innehåller därför inga markdownlänkar (`[text](url)`) i brödtext eller uppgifter.

Tillåtna länkar är webbplatsens fasta navigering (sidopanel, breadcrumbs, föregående/nästa), innehållsförteckningar, källor eller externa resurser i ett uttryckligt avgränsat käll- eller resursavsnitt, samt administrativa granskningsvyer (den ordinarie Starlight-webbplatsens produktionsläge, se "Webbformat"), där begreppslänkar och korsreferenser fortsätter fungera som ett internt uppslagsverktyg för redaktionen.

---

## Begrepp

Alla tekniska begrepp har ett unikt huvudställe: den avsnittsfil där begreppet står i `concepts_introduced`.

Interna referenser till begreppet i andra avsnitt sker via shortcoden `[[begrepp:namn]]`. Den ordinarie webbplatsen (produktionsläget) länkar shortcoden till huvudstället; granskningsvyn (`/review/`) och exportskriptet löser i stället upp den till vanlig text utan länk ("Länkar i elevtext" ovan) — ett bokmanus har inga klickbara länkar.

`scripts/validate.mjs` kontrollerar att varje begrepp finns i `concepts_introduced` i högst en fil (maskinkontroll av 11-begreppsfilosofi.md, "Begrepp introduceras en gång") och varnar när ett begrepp i `concepts_used` saknar huvudställe.

Det centrala begreppsregistret är härlett, aldrig handredigerat: `scripts/begreppsregister.mjs` (`npm run begrepp`) sammanställer alla begrepp med huvudställe och användningsställen till `export/begreppsregister.md`.

---

## Bilder

**Målmodell (2026-07-22):** bildplatshållare skrivs direkt i avsnittsfilen i formatet `[BILD X.Y-N]` följt av Innehåll (vad bilden ska visa och varför) och färdigformulerad Bildtext (03, "Bilder"; referensimplementationen 1.1). Platshållaren står där bilden hör hemma i löptexten och numreras löpande inom avsnittet (`[BILD 1.1-1]`, `[BILD 1.1-2]` …).

Det centrala figurregistret (`figures/registry.yml`) och shortcoden `[[figur:ID]]` är **under avveckling**: de behålls för ännu inte migrerade kapitel, och webbplatsens figurruta, exportens figurblock och validate-kontrollerna av figur-ID fortsätter fungera för dem tills skript- och innehållsmigreringen är klar. Nya och reviderade avsnitt skrivs med `[BILD]`-formatet; frontmatterfältet `figures` fylls inte i för dem.

---

## Kapitelavslutningar

Varje färdigproducerat kapitel avslutas med två avsnitt som saknar `learningGoals` och identifieras av `type` i stället för `id` (03-bokens-arkitektur.md, "Kapitelavslutningar"):

- `type: kapitelsammanfattning` — kort löpande text, inte punktlista, som låter eleven repetera hela kapitlet på några minuter (riktmärke cirka 300 ord). Ingen `ordlista`.
- `type: begreppsovning` — kapitlets **begreppslista**: kapitlets centrala begrepp med färdiga definitioner, max ungefär en mening per begrepp, i det obligatoriska ordlisteformatet `**Begrepp:** Definition.` (03-bokens-arkitektur.md, "Begrepp"). Uppslagsfunktion, inget som eleven fyller i. Type-värdet `begreppsovning` behålls som tekniskt id tills schema och skript migreras; innehållsmodellen är begreppslistan.

Det finns ingen `type: uppgiftsbank` längre (redaktionellt beslut 2026-07-22): kapitlets större, integrerande uppgifter skrivs som helkapitelövningar i Övningar i kapitlets senare teoriavsnitt (03). Befintliga projektuppgiftsfiler avvecklas kapitel för kapitel i innehållsmigreringen — deras användbara uppgifter arbetas in som helkapitelövningar.

Ordningen sist i kapitlet är sammanfattning, begreppslista (redaktionellt beslut 2026-07-22, produktionslogg.md).

**Struktur och ordning styrs av 06-bokstruktur.md**, precis som för alla andra avsnitt — det finns inget separat kapitelmanifest. De två kapitelavslutande avsnitten är alltid de två sista, onumrerade H2-raderna i ett kapitels del av 06, med exakt titlarna Sammanfattning och Begrepp. `scripts/validate.mjs` känner igen dem på titeln och stämmer av mot filerna åt båda håll (rätt `type`/`chapter`/`sectionNumber`).

Frontmatter (schemavariant i `schemas/larandemal.schema.mjs`, känns igen på `type`):

```yaml
type: begreppsovning        # eller: kapitelsammanfattning
chapter: 1
sectionNumber: 5
title: "Begrepp"
status: fardig-forsta-version
```

Kapitelavslutningarna är onumrerade i all synlig rubriknumrering; `sectionNumber` finns kvar internt enbart för filordning och synk mot 06. Begreppslistan får ha en valfri `ordlista`. Kapitelsammanfattningen har varken `ordlista` eller annan metadata, bara löptext.

**Placering:** kapitelavslutningarna slottas sist i kapitlet (efter sista teoriavsnittet) i sidopanelen, kapitelöversikten, granskningsvyn `/review/` och exporten, i 06:s ordning.

**Facit** stöds tekniskt men lagras aldrig i klartext i detta repo, eftersom repot är **offentligt** (GitHub Pages). Begreppsövningens facit och uppgiftsbankens bedömningsstöd ligger i en separat, privat lärarmaterialkälla. I detta repo finns bara det tekniska gränssnittet: facit ingår aldrig i elevmanuset (`npm run export`) eller på den publika elevwebben, och en framtida lärarmaterialexport läser facit ur den privata källan. Skulle repot göras privat får facit ligga i en egen lärarmaterialstruktur i samma repo.

---

## Kvalitetskontroller och kursplanetäckning

`scripts/validate.mjs` körs automatiskt före varje bygge av webbplatsen (`prebuild`-steg) och kan köras fristående (`npm run validate`). Det kontrollerar:

- **Struktursynk** — varje avsnitt i 06 har en fil i content/ på rätt sökväg, och varje avsnittsfil finns i 06; id, kapitel och sektionsnummer stämmer överens.
- **Begreppsunikhet** — varje begrepp introduceras i högst en fil; använda begrepp utan huvudställe flaggas.
- **Figur-ID** — varje refererad figur finns i registret; oanvända figurer flaggas.
- **Förkunskapsordning** — en fils `prerequisites` (avsnitts-id:n) måste ligga tidigare i läsordningen (kapitel.sektionsnummer), i linje med 04 §10.
- **Kursplantaggning** — `curriculumReferences.niva1`/`niva2` innehåller punkt-id:n enligt 07 (via `kursplan-data.mjs`); tagg i ett kapitel utanför punktens matrisrad ger varning.
- **Statusstyrda innehållskontroller** (målmodell; skriptmigrering pågår, se "Migreringsläge") — från status `fardig-forsta-version` krävs en **icke-tom sektion Instuderingsfrågor** (5–10 frågor, exakt en sektion) följd av en **icke-tom sektion Övningar** (2–10 övningar, exakt en sektion) enligt 03, icke-tomma `learningGoals` och `curriculumReferences`, och att inga HTML-kommentarer, TODO, uppslagsrubriker, äldre uppgiftsrubriker (Praktiska uppgifter, Projektuppgifter, Förstå/Utveckla/Utmana med flera) eller numrerade rubriker finns kvar; tom `abilities`, AI-typiska formuleringar, tankstreck i elevtexten (05), fetstilade begrepp, förbjudna frågeformuleringar ("enligt texten", "i texten", "vad visar figuren"), markdownlänkar i elevtext, "uppslag" som självreferens och ovanligt många personnamn (05) ger varning eller fel.
- **Kapitelavslutningar** — stäms av mot 06-bokstruktur.md åt båda håll (rätt `type`/`chapter`/`sectionNumber`/`title`): sammanfattning och begreppslista, inga uppgiftsbanker.
- **Statusöversikt** — sammanställer antal avsnitt per status, totalt och per kapitel, som ersättning för manuell bokföring i 06.
- **Kursplanetäckningsöversikt** — antal påbörjade avsnitt per kursplanepunkt, uppdelat på primärkapitlet och övriga kapitel.

07-kursplanetackning.md förblir den redaktionella auktoriteten för vilket kapitel som har primärt ansvar för vad. `scripts/kursplan-data.mjs` är dess maskinläsbara spegling och uppdateras i samma steg som 07 — skripten skriver aldrig till 07 och avgör aldrig själva täckningsbeslutet.

---

## Export

Projektet ska när som helst kunna exporteras till

- tryckt bok (manus)
- PDF
- Word
- HTML
- framtida digitala format

Källmaterialet är därför presentationsoberoende: samma `content/`-filer används av webbplatsen (granskning) och av `scripts/export-manuscript.mjs` (leverans).

Sammanställningen (kanonisk läsordning kapitel → avsnitt med rubriker ur 06, statusfilter, upplösning av `[[begrepp:...]]`/`[[figur:...]]`-shortcodes, rensning av arbetsanteckningar, rubriksänkning) ligger i den delade kärnan `scripts/manuscript-core.mjs` och används av två exporter. Exportens rubrikhierarki är kapitel (H1) → avsnitt (H2, numrerat) → delavsnitt (H3) → undantagsvis H4, utan någon synlig markering för intern administration (produktionsstatus, kursplanereferenser eller interna id:n).

- **`npm run export`** (`scripts/export-manuscript.mjs`) — förlagsmanus: `export/manuscript.md` + `.docx` via **Pandoc**. Endast avsnitt med status `fardig-forsta-version` eller högre som standard; lägsta status väljs med `--status=` (se skriptets huvudkommentar).
- **`npm run export:review`** (`scripts/export-review.mjs`) — redaktionellt granskningsmanus till `dist/review/granskningsmanus.docx` och `.html`, byggda ur exakt samma sammanställning i samma körning. Word-versionen har titelblad, TOC-fält (uppdateras i Word med Ctrl+A, F9), sidnummer, sidbrytning per avsnitt och figurblock i egen stil via `scripts/review-reference.docx` (referensdokumentet återskapas utan manuell Word-redigering med `node scripts/make-review-reference.mjs`). HTML-versionen är en fristående fil med inbäddad CSS, klickbar innehållsförteckning, ankarlänkar och print-stylesheet. Körningen avslutas med automatiska efterkontroller (fullständighet, ordning, format-likhet, inga shortcodes eller produktionsfält, giltig docx, komplett HTML) och felar om någon inte håller. Sidbrytnings- och figurblockstransformationen görs av Pandoc-filtret `scripts/review-filter.lua`.

Pandoc är en extern systeminstallation, inte ett npm-paket — se README/installationssteg vid produktionsstart om det saknas.

---

## Versionshantering

Projektet är ett git-repo, initierat vid produktionsarkitekturens uppsättning. Arbetssättet är trunk-baserat: commits görs direkt mot huvudgrenen, normalt ett commit per avsnitt eller annan betydande ändring. Ingen fjärrpush krävs för att versionshanteringen ska ge värde.
