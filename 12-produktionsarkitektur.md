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

Projektets minsta produktionsenhet är ett lärandemål.

Varje lärandemål lagras i en egen Markdown-fil med YAML-frontmatter, under `content/<kapitel>/<modul>/`.

Om ett lärandemål (enligt 03-bokens-arkitektur.md) omfattar flera uppslag skrivs uppslagen som på varandra följande teori- och uppgiftssekvenser i samma fil, utan synliga uppslagsrubriker — planeringen bärs av frontmatterfältet `uppslag` och 06. Lärandemålet förblir den odelbara produktionsenheten, i linje med 04-redaktionsprinciper.md §9. Formuleringar som "Uppslag 1" får inte förekomma i elevtexten.

Claude Code får aldrig skriva ett helt kapitel i en fil.

---

## Mappstruktur

```
content/
  index.md                          # startsida för produktionsmiljön (enda strukturella sidan)
  06-mekanik-och-konstruktion/       # kapitel: <nr>-<slug>, slug från kapitlets titel
    6.01-krafter/                   # modul: <kapitel>.<modulnr>-<slug>, modulnr nollutfyllt
      6.01.01-kraftbegreppet.md     # lärandemål: <kapitel>.<modul>.<löpnr>-<slug>, nollutfyllt
      6.01.02-kraftresultanter.md
figures/
  registry.yml                      # centralt figur-ID-register
schemas/
  larandemal.schema.mjs             # enda källan till metadataschemat (Zod)
scripts/
  bokstruktur-data.mjs              # tolkar 06-bokstruktur.md direkt (06 är enda källan)
  kursplan-data.mjs                 # maskinläsbar spegling av 07:s innehållsmatris
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
uppslag: 1                 # planerat antal uppslag; >1 markeras även i 06-bokstruktur.md
status: under-utveckling   # ej-paborjad | under-utveckling | fardig-forsta-version | fackgranskad | sprakgranskad | klar
curriculum:
  niva1: ["n1-09"]         # punkt-id från 07-kursplanetackning.md (n1-xx, n2-xx, s-01)
  niva2: []
concepts_introduced: ["kraftresultant"]
concepts_used: ["kraft", "vektor"]
figures: ["fig-6.1.2-a"]
prerequisites: ["6.1.1"]
practical_component: true
```

Schemat är gemensamt för webbplatsens byggtidsvalidering (Astro content collections) och `scripts/validate.mjs`. Det finns bara på ett ställe och importeras av båda — ändra bara i `schemas/larandemal.schema.mjs`.

Enda strukturella sidan i content/ är startsidan (`index.md`), som bara sätter `title`. Kapitel- och modulöversikter är inte filer utan genererade vyer (se "Webbformat") och har därför ingen frontmatter alls.

---

## Webbformat

Projektet har en statisk dokumentationswebbplats byggd med **Astro + Starlight** (`site/`), som läser innehåll direkt från `content/`.

**Webbplatsen är ett internt produktions- och granskningsverktyg. Den är inte en publicerad produkt eller en del av bokens leverans.** Figurer visas i webbplatsen som platshållarspecifikation (syfte/innehåll/text), aldrig som färdig grafik — den slutliga grafiska produktionen görs alltid av förlaget (se 01, 03, 08).

Varje lärandemålssida inleds med en **granskningsruta** (genererad ur frontmattern av `site/src/remark-granskning.mjs`): mål, status, kursplanetaggar, begrepp, figurer, förkunskaper och uppslag. Rutan finns bara i webbvyn och hamnar aldrig i exporten, som läser källfilerna direkt. Samma plugin renderar `[[begrepp:...]]` som länk till huvudstället och `[[figur:...]]` som platshållarruta ur registret; okänt begrepp eller okänd figur ger fel i både validate och bygget.

**Redaktionell granskningsvy** (`/review/`): ett rent läsmanus utan produktionsmetadata, genererat statiskt vid varje bygge ur samma content collection (`site/src/pages/review/`). Översikt med klickbar innehållsförteckning, en sida per kapitel med färdigt innehåll (primär läsvy) samt `/review/hela-manuset/` för sökning och sammanhängande utskrift. Endast lärandemål med status `fardig-forsta-version` eller högre ingår, i 06:s kanoniska ordning. Granskningsrutor och figurplatshållare tas bort i byggsteget (inte via CSS) — bygget felar om rensningen lämnar produktionsmarkup kvar. Vyn nås inte från webbplatsens sidopanel.

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

---

## Begrepp

Alla tekniska begrepp har ett unikt huvudställe: den lärandemålsfil där begreppet står i `concepts_introduced`.

Interna referenser till begreppet i andra lärandemål sker via shortcoden `[[begrepp:namn]]`, som webbplatsen länkar till huvudstället och som exportskriptet löser upp till vanlig text (ett bokmanus har inga klickbara länkar).

`scripts/validate.mjs` kontrollerar att varje begrepp finns i `concepts_introduced` i högst en fil (maskinkontroll av 11-begreppsfilosofi.md, "Begrepp introduceras en gång") och varnar när ett begrepp i `concepts_used` saknar huvudställe.

Det centrala begreppsregistret är härlett, aldrig handredigerat: `scripts/begreppsregister.mjs` (`npm run begrepp`) sammanställer alla begrepp med huvudställe och användningsställen till `export/begreppsregister.md`.

---

## Figurer

Figurer identifieras med unika ID och registreras centralt i `figures/registry.yml`. Registerposten är figurens fullständiga platshållarspecifikation (se 01, 03, 08): syfte, innehåll, referens i texten (`referens`), pedagogisk funktion (`pedagogisk_funktion`) samt vilka lärandemål som använder figuren.

Flera lärandemål kan referera till samma figur via shortcoden `[[figur:ID]]`. Webbplatsens figurruta och exportens figurblock renderar samtliga fyra fält ur registret — specifikationen skrivs aldrig som lös text i lärandemålsfilen.

`scripts/validate.mjs` felar om en refererad figur saknas i registret, och varnar om en registrerad figur inte används av något lärandemål.

---

## Kvalitetskontroller och kursplanetäckning

`scripts/validate.mjs` körs automatiskt före varje bygge av webbplatsen (`prebuild`-steg) och kan köras fristående (`npm run validate`). Det kontrollerar:

- **Struktursynk** — varje lärandemål i 06 har en fil i content/ på rätt sökväg, och varje lärandemålsfil finns i 06; id, kapitel och modul stämmer överens.
- **Begreppsunikhet** — varje begrepp introduceras i högst en fil; använda begrepp utan huvudställe flaggas.
- **Figur-ID** — varje refererad figur finns i registret; oanvända figurer flaggas.
- **Förkunskapsordning** — en fils `prerequisites` måste ligga tidigare i läsordningen (kapitel.modul.löpnummer), i linje med 04 §10.
- **Kursplantaggning** — `curriculum.niva1`/`niva2` innehåller punkt-id:n enligt 07 (via `kursplan-data.mjs`); tagg i ett kapitel utanför punktens matrisrad ger varning.
- **Statusstyrda innehållskontroller** — från status `fardig-forsta-version` krävs uppgiftsdelarna Instuderingsfrågor/Begrepp/Praktiska uppgifter, icke-tom kursplantaggning och att inga HTML-kommentarer, TODO, uppslagsrubriker eller äldre uppgiftsrubriker finns kvar; saknade figurer, AI-typiska formuleringar, tankstreck i elevtexten (05), uppgiftsantal utanför normalspannen (03) och ovanligt många personnamn (05) ger varning.
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
