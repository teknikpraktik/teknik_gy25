# Dokumentnamn

12-produktionsarkitektur.md

---

# Produktionsarkitektur

## Syfte

Projektet utvecklas som en modulär kunskapsdatabas.

Den färdiga boken är en export av denna databas.

Projektets interna struktur styrs därför inte av hur en tryckt bok ser ut, utan av hur innehållet effektivast utvecklas, granskas och underhålls.

---

## Produktionsenhet

Projektets minsta produktionsenhet är ett lärandemål. Lärandemålet på H3-nivå är den fasta pedagogiska, redaktionella, navigerbara och producerbara enheten.

Varje lärandemål lagras i en egen Markdown-fil med YAML-frontmatter, under `content/<kapitel>/<modul>/`.

Ett lärandemål har inget fast sid- eller uppslagsomfång (03-bokens-arkitektur.md). Det får flöda över så många sidor som förståelsen kräver och delas bara vid flera tydligt skilda kunskapsresultat. Uppslag och sidbrytningar är frågor för layout och tryckexport, inte en nivå i datamodellen. Formuleringar som "Uppslag 1" får inte förekomma i elevtexten.

Utöver lärandemålen finns per kapitel två **kapitelavslutande innehållstyper** — en begreppsövning och en uppgiftsbank (se "Kapitelavslutningar" nedan). De är inte lärandemål och får aldrig lärandemåls-id.

Claude Code får aldrig skriva ett helt kapitel i en fil.

---

## Rubriknumrering

All synlig rubriknumrering i manus, webb och export har exakt tre hierarkiska nivåer: kapitel (`1`), modul (`1.1`) och lärandemål (`1.1.1`). Ingen synlig fjärde numreringsnivå (`1.1.1.1`) förekommer, varken i markdown-rubriker, genererade sidtitlar, menyer, sidopaneler, brödsmulor, innehållsförteckningar, exportformat eller ankarlänkar/etiketter.

Begreppet uppslag hör hemma i layout och tryckexport, inte i datamodellen, och skapar aldrig en fjärde synlig rubriknivå. Ett lärandemål som flödar över flera sidor struktureras med onumrerade underrubriker i löptexten (`##`–`####`, se 13-produktionsmanual.md, "Skriv"), inte med egen numrering.

---

## Mappstruktur

```
content/
  index.md                          # startsida för produktionsmiljön (enda strukturella sidan)
  06-mekanik-och-konstruktion/       # kapitel: <nr>-<slug>, slug från kapitlets titel
    6.01-krafter/                   # modul: <kapitel>.<modulnr>-<slug>, modulnr nollutfyllt
      6.01.01-kraftbegreppet.md     # lärandemål: <kapitel>.<modul>.<löpnr>-<slug>, nollutfyllt
      6.01.02-kraftresultanter.md
    begreppsovning.md               # kapitelavslutning: type: begreppsovning (ej lärandemål)
    uppgifter-och-projekt.md        # kapitelavslutning: type: uppgiftsbank (ej lärandemål)
figures/
  registry.yml                      # centralt figur-ID-register
schemas/
  larandemal.schema.mjs             # enda källan till metadataschemat (Zod)
scripts/
  bokstruktur-data.mjs              # tolkar 06-bokstruktur.md direkt (06 är enda källan)
  kursplan-data.mjs                 # maskinläsbar spegling av 07:s innehållsmatris
  kapitelavslutningar-data.mjs      # kapitelmanifest: begreppsövning/uppgiftsbank per kapitel
  generate-skeleton.mjs             # skapar mapp-/modul-/lärandemålsskelett (tomma filer, ingen text)
  validate.mjs                      # tvärgående kvalitetskontroller (se nedan)
  begreppsregister.mjs              # genererar centralt begreppsregister till export/
  export-manuscript.mjs             # sammanställer och exporterar bokmanus
site/                               # Astro + Starlight, se "Webbformat" nedan
export/                             # genererade manusfiler (gitignorad, byggs på nytt varje gång)
```

Kapitel-, modul- och lärandemålsnamn i mappstrukturen speglar 06-bokstruktur.md exakt. 06 är enda redigeringsytan: `scripts/bokstruktur-data.mjs` tolkar dokumentet direkt vid varje körning, så det finns ingen datafil att hålla i synk. Efter en strukturändring i 06 räcker `npm run skeleton` — `scripts/validate.mjs` felar när content/ och 06 inte stämmer överens, inklusive fel filnamn.

Modul- och löpnummer i mapp- och filnamn nollutfylls (`6.01`, `6.01.02`) så att lexikografisk sortering i webbplatsens sidopanel och navigering stämmer även vid tvåsiffriga nummer. Id:t i frontmattern skrivs utan utfyllnad (`6.1.2`). Det operativa arbetsflödet beskrivs i 13-produktionsmanual.md.

---

## Metadata

Varje lärandemålsfil har YAML-frontmatter enligt schemat i `schemas/larandemal.schema.mjs`:

```yaml
id: "6.1.2"
chapter: 6
module: "6.1"
title: "Kraftresultanter"
goal: "Bestämma resultanten av flera krafter grafiskt och genom beräkning med komposanter."
status: under-utveckling   # ej-paborjad | under-utveckling | fardig-forsta-version | fackgranskad | sprakgranskad | klar
curriculum:
  niva1: ["n1-09"]         # punkt-id från 07-kursplanetackning.md (n1-xx, n2-xx, s-01)
  niva2: []
concepts_introduced: ["kraftresultant"]
concepts_used: ["kraft", "vektor"]
figures: ["fig-6.1.2-a"]
prerequisites: ["6.1.1"]
```

Fälten `uppslag` och `practical_component` är **pensionerade** (redaktionellt beslut). Uppslag är en layoutfråga, och praktisk täckning härleds från uppgiftsbankens kopplingar till lärandemålen, inte från en boolesk flagga.

Schemat är gemensamt för webbplatsens byggtidsvalidering (Astro content collections) och `scripts/validate.mjs`. Det finns bara på ett ställe och importeras av båda — ändra bara i `schemas/larandemal.schema.mjs`.

Enda rent strukturella sidan i content/ är startsidan (`index.md`), som bara sätter `title`. Kapitel- och modulöversikter är inte filer utan genererade vyer (se "Webbformat") och har därför ingen frontmatter alls. Kapitelavslutningarna (begreppsövning, uppgiftsbank) är egna filer med `type`-baserad frontmatter (se "Kapitelavslutningar").

---

## Webbformat

Projektet har en statisk dokumentationswebbplats byggd med **Astro + Starlight** (`site/`), som läser innehåll direkt från `content/`.

**Webbplatsen är ett internt produktions- och granskningsverktyg. Den är inte en publicerad produkt eller en del av bokens leverans.** Figurer visas i webbplatsen som platshållarspecifikation (syfte/innehåll/text), aldrig som färdig grafik — den slutliga grafiska produktionen görs alltid av förlaget (se 01, 03, 08).

Varje lärandemålssida inleds med en **granskningsruta** (genererad ur frontmattern av `site/src/remark-granskning.mjs`): mål, status, kursplanetaggar, begrepp, figurer, förkunskaper och uppslag. Rutan finns bara i webbvyn och hamnar aldrig i exporten, som läser källfilerna direkt. Samma plugin renderar `[[begrepp:...]]` som länk till huvudstället och `[[figur:...]]` som platshållarruta ur registret; okänt begrepp eller okänd figur ger fel i både validate och bygget. Detta administrativa produktionsläge är den ordinarie webbplatsens beteende och lämnas oförändrat — klickbara begreppslänkar hör hemma i ett internt granskningsverktyg (se "Länkar i elevtext" nedan).

**Redaktionell granskningsvy** (`/review/`): ett rent läsmanus utan produktionsmetadata, genererat statiskt vid varje bygge ur samma content collection (`site/src/pages/review/`). Översikt med klickbar innehållsförteckning, en sida per kapitel med färdigt innehåll (primär läsvy) samt `/review/hela-manuset/` för sökning och sammanhängande utskrift. Endast lärandemål med status `fardig-forsta-version` eller högre ingår, i 06:s kanoniska ordning. Granskningsrutor och figurplatshållare tas bort i byggsteget (inte via CSS) — bygget felar om rensningen lämnar produktionsmarkup kvar. `[[begrepp:...]]`-shortcoden löses här upp till vanlig text utan länk, i linje med "Länkar i elevtext" nedan — granskningsvyn ska läsas som eleven kommer att möta texten, inte som ett korslänkat uppslagsverk.

Granskningsvyn har en permanent vänsterspalt (desktop) som visar hela manusets hierarki — kapitel, modul, lärandemål — genererad ur samma bokstruktur (06 via `bokstruktur-data.mjs`) som resten av produktionen, med aktuell sida markerad och rätt gren expanderad. Spalten är egen för `/review/` (`site/src/pages/review/_ReviewLayout.astro`) och påverkar inte den ordinarie webbplatsens Starlight-sidopanel, som är oförändrad (se "Navigering"). På smal skärm ersätts spalten av en öppningsbar meny.

**Publicering:** webbplatsen byggs och publiceras automatiskt på GitHub Pages vid varje push till master (`.github/workflows/deploy.yml`) under `https://teknikpraktik.github.io/teknik_gy25/`. Base path är konfigurerad i `site/src/site-base.mjs` och delas av alla interna länkbyggen. Hela webbplatsen är märkt `noindex, nofollow` och har `robots.txt` med `Disallow: /` — detta hindrar indexering men är ingen åtkomstkontroll: Pages-sajten är publikt läsbar för den som har adressen.

**Kapitel- och modulsidor är genererade vyer**, inte filer i content/ (`site/src/pages/[...oversikt].astro`). De härleds vid varje bygge ur 06-bokstruktur.md, lärandemålens frontmatter och kursplan-data.mjs och kan därför aldrig gå ur synk eller visa cachad status. Modulvyn visar lärandemålstabell, begreppsflöde (med varning när ett begrepp används före sitt huvudställe) och 09:s modulchecklista; kapitelvyn visar modulöversikt med aggregerad status, kapitlets kursplanansvar med taggningsläge samt 09:s kapitelchecklista. Navigeringen är Start → Kapitel → Modul → Lärandemål.

Markdown med frontmatter är källformatet. HTML genereras automatiskt av Astro vid varje bygge och committas inte till git.

---

## Navigering

Varje sida visar

- föregående/nästa sida i läsordningen
- modulöversikt och kapitelöversikt (genererade vyer, se "Webbformat")
- innehållsförteckning (sidopanelen, genererad ur 06-bokstruktur.md via `scripts/bokstruktur-data.mjs`)

Navigeringen genereras automatiskt ur bokstrukturen och underhålls aldrig manuellt, vilket gör det säkert för Claude Code att dela eller slå ihop lärandemål (04 §17) utan att länkar bryts. Sidopanelens poster är slug-baserade: bygget felar om en sida i 06 saknas i content/, vilket fungerar som extra synkkontroll.

Denna sidopanel och den ordinarie webbplatsens struktur i övrigt är produktionens administrativa läge och ändras inte av den redaktionella översynen av elevtext och länkar (se "Webbformat", "Redaktionell granskningsvy" och "Länkar i elevtext"). Endast `/review/` fick en egen permanent vänsterspalt.

---

## Länkar i elevtext

Löpande text, uppgiftsinstruktioner och figurtext ska inte innehålla klickbara länkar. Tekniska begrepp som "teknisk lösning" visas som vanlig text, inte som länk, i alla vyer som representerar elevtext: exporten (som redan löser upp `[[begrepp:...]]` till text) och den redaktionella granskningsvyn `/review/`.

Detta gäller manuella markdownlänkar i källfilerna, automatiska begreppslänkar och korsreferenser som genereras av remark/rehype-plugins eller andra komponenter. Källfilerna innehåller därför inga markdownlänkar (`[text](url)`) i brödtext eller uppgifter.

Tillåtna länkar är webbplatsens fasta navigering (sidopanel, breadcrumbs, föregående/nästa), innehållsförteckningar, källor eller externa resurser i ett uttryckligt avgränsat käll- eller resursavsnitt, samt administrativa granskningsvyer (den ordinarie Starlight-webbplatsens produktionsläge, se "Webbformat"), där begreppslänkar och korsreferenser fortsätter fungera som ett internt uppslagsverktyg för redaktionen.

---

## Begrepp

Alla tekniska begrepp har ett unikt huvudställe: den lärandemålsfil där begreppet står i `concepts_introduced`.

Interna referenser till begreppet i andra lärandemål sker via shortcoden `[[begrepp:namn]]`. Den ordinarie webbplatsen (produktionsläget) länkar shortcoden till huvudstället; granskningsvyn (`/review/`) och exportskriptet löser i stället upp den till vanlig text utan länk ("Länkar i elevtext" ovan) — ett bokmanus har inga klickbara länkar.

`scripts/validate.mjs` kontrollerar att varje begrepp finns i `concepts_introduced` i högst en fil (maskinkontroll av 11-begreppsfilosofi.md, "Begrepp introduceras en gång") och varnar när ett begrepp i `concepts_used` saknar huvudställe.

Det centrala begreppsregistret är härlett, aldrig handredigerat: `scripts/begreppsregister.mjs` (`npm run begrepp`) sammanställer alla begrepp med huvudställe och användningsställen till `export/begreppsregister.md`.

---

## Figurer

Figurer identifieras med unika ID och registreras centralt i `figures/registry.yml`. Registerposten är figurens fullständiga platshållarspecifikation (se 01, 03, 08): syfte, innehåll, referens i texten (`referens`), pedagogisk funktion (`pedagogisk_funktion`) samt vilka lärandemål som använder figuren.

Flera lärandemål kan referera till samma figur via shortcoden `[[figur:ID]]`. Webbplatsens figurruta och exportens figurblock renderar samtliga fyra fält ur registret — specifikationen skrivs aldrig som lös text i lärandemålsfilen.

`scripts/validate.mjs` felar om en refererad figur saknas i registret, och varnar om en registrerad figur inte används av något lärandemål.

---

## Kapitelavslutningar

Varje färdigproducerat kapitel avslutas med två innehållstyper som **inte** är lärandemål och **aldrig** får lärandemåls-id (03-bokens-arkitektur.md, "Kapitelavslutningar"):

- `type: begreppsovning` — kapitlets samlade begreppsövning (ifyllnadsövning med numrerade luckor).
- `type: uppgiftsbank` — kapitlets bank av praktiska uppgifter och projekt, indelad i Kort aktivitet, Lektionsuppgift och Miniprojekt.

**Struktur och ordning styrs av ett kapitelmanifest**, inte av filnamnskonvention: `scripts/kapitelavslutningar-data.mjs` deklarerar per kapitel vilka avslutningar som finns och i vilken ordning de placeras. Filnamnskonventionen (`content/<kapitelSlug>/<slug>.md`) används bara för att lokalisera filen. `scripts/validate.mjs` kontrollerar manifestet åt båda håll: varje deklarerad avslutning ska ha en fil med rätt `type`/`chapter`, och varje `type`-fil på disk ska vara deklarerad i manifestet. Manifestet stödjer hela boken; poster läggs till när ett kapitel produceras (tomma avslutningsfiler skapas inte i förväg för kapitel som inte påbörjats).

Frontmatter (schemavariant i `schemas/larandemal.schema.mjs`, känns igen på `type`):

```yaml
type: uppgiftsbank          # eller: begreppsovning
chapter: 1
title: "Praktiska uppgifter och projekt"
status: fardig-forsta-version
uppgifter:                  # endast uppgiftsbank
  - ref: k1-u3
    omfattning: miniprojekt   # kort-aktivitet | lektionsuppgift | miniprojekt
    larandemal: ["1.3.1", "1.3.2"]
    tid: "3–4 lektioner"
    arbetsform: grupp         # individuell | par | grupp
    produkt: "plansch och kort rapport"
    # valfria: material, digitala_verktyg, forkunskaper, extern_tillgang, alternativ
```

Obligatoriska fält per uppgift: `ref`, `omfattning`, `larandemal`, `tid`, `arbetsform`, `produkt`. Valfria: `material`, `digitala_verktyg`, `forkunskaper`, `extern_tillgang`, `alternativ`. `uppgifter[]` är den validerade datamodellen; varje `ref` motsvarar en uppgift i kroppen, och varje `larandemal`-id måste finnas i samma kapitel. Valideringen rapporterar per kapitel vilka lärandemål som tränas av minst en uppgift (praktisk täckning).

**Placering:** kapitelavslutningarna slottas sist i kapitlet (efter sista modulen) i sidopanelen, kapitelöversikten, granskningsvyn `/review/` och exporten, i manifestets ordning.

**Facit** stöds tekniskt men lagras aldrig i klartext i detta repo, eftersom repot är **offentligt** (GitHub Pages). Begreppsövningens facit och uppgiftsbankens bedömningsstöd ligger i en separat, privat lärarmaterialkälla. I detta repo finns bara det tekniska gränssnittet: facit ingår aldrig i elevmanuset (`npm run export`) eller på den publika elevwebben, och en framtida lärarmaterialexport läser facit ur den privata källan. Skulle repot göras privat får facit ligga i en egen lärarmaterialstruktur i samma repo.

---

## Kvalitetskontroller och kursplanetäckning

`scripts/validate.mjs` körs automatiskt före varje bygge av webbplatsen (`prebuild`-steg) och kan köras fristående (`npm run validate`). Det kontrollerar:

- **Struktursynk** — varje lärandemål i 06 har en fil i content/ på rätt sökväg, och varje lärandemålsfil finns i 06; id, kapitel och modul stämmer överens.
- **Begreppsunikhet** — varje begrepp introduceras i högst en fil; använda begrepp utan huvudställe flaggas.
- **Figur-ID** — varje refererad figur finns i registret; oanvända figurer flaggas.
- **Förkunskapsordning** — en fils `prerequisites` måste ligga tidigare i läsordningen (kapitel.modul.löpnummer), i linje med 04 §10.
- **Kursplantaggning** — `curriculum.niva1`/`niva2` innehåller punkt-id:n enligt 07 (via `kursplan-data.mjs`); tagg i ett kapitel utanför punktens matrisrad ger varning.
- **Statusstyrda innehållskontroller** — från status `fardig-forsta-version` krävs en **icke-tom sektion Instuderingsfrågor** (inget bestämt antal, 03), icke-tom kursplantaggning och att inga HTML-kommentarer, TODO, uppslagsrubriker eller äldre uppgiftsrubriker (Förstå/Utveckla/Utmana) finns kvar; saknade figurer, AI-typiska formuleringar, tankstreck i elevtexten (05), markdownlänkar i elevtext, "uppslag" som självreferens och ovanligt många personnamn (05) ger varning. Inget Begrepp-block och inga praktiska uppgifter kontrolleras längre per lärandemål — de hör till kapitelavslutningarna.
- **Kapitelavslutningar** — kapitelmanifestet (`scripts/kapitelavslutningar-data.mjs`) stäms av mot filerna åt båda håll; uppgiftsbankens `uppgifter[]` valideras (obligatoriska fält, giltiga lärandemåls-id i kapitlet) och den praktiska täckningen per lärandemål rapporteras.
- **Modulstandard (rådgivande)** — en varning (aldrig ett fel) flaggar moduler med bara ett lärandemål eller fler än fem, i linje med tumregeln 2–5 (03, "Modul"). Kontrollen gör aldrig ensam bygget rött; modulstandarden och kapitelavgränsningen är normerade i 03-bokens-arkitektur.md.
- **Statusöversikt** — sammanställer antal lärandemål per status, totalt och per kapitel, som ersättning för manuell bokföring i 06.
- **Kursplanetäckningsöversikt** — antal påbörjade lärandemål per kursplanepunkt, uppdelat på primärkapitlet och övriga kapitel.

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

Sammanställningen (kanonisk läsordning kapitel → modul → id med rubriker ur 06, statusfilter, upplösning av `[[begrepp:...]]`/`[[figur:...]]`-shortcodes, rensning av arbetsanteckningar, rubriksänkning) ligger i den delade kärnan `scripts/manuscript-core.mjs` och används av två exporter:

- **`npm run export`** (`scripts/export-manuscript.mjs`) — förlagsmanus: `export/manuscript.md` + `.docx` via **Pandoc**. Endast lärandemål med status `fardig-forsta-version` eller högre som standard; lägsta status väljs med `--status=` (se skriptets huvudkommentar).
- **`npm run export:review`** (`scripts/export-review.mjs`) — redaktionellt granskningsmanus till `dist/review/granskningsmanus.docx` och `.html`, byggda ur exakt samma sammanställning i samma körning. Word-versionen har titelblad, TOC-fält (uppdateras i Word med Ctrl+A, F9), sidnummer, sidbrytning per lärandemål och figurblock i egen stil via `scripts/review-reference.docx` (referensdokumentet återskapas utan manuell Word-redigering med `node scripts/make-review-reference.mjs`). HTML-versionen är en fristående fil med inbäddad CSS, klickbar innehållsförteckning, ankarlänkar och print-stylesheet. Körningen avslutas med automatiska efterkontroller (fullständighet, ordning, format-likhet, inga shortcodes eller produktionsfält, giltig docx, komplett HTML) och felar om någon inte håller. Sidbrytnings- och figurblockstransformationen görs av Pandoc-filtret `scripts/review-filter.lua`.

Pandoc är en extern systeminstallation, inte ett npm-paket — se README/installationssteg vid produktionsstart om det saknas.

---

## Versionshantering

Projektet är ett git-repo, initierat vid produktionsarkitekturens uppsättning. Arbetssättet är trunk-baserat: commits görs direkt mot huvudgrenen, normalt ett commit per lärandemål eller annan betydande ändring. Ingen fjärrpush krävs för att versionshanteringen ska ge värde.
