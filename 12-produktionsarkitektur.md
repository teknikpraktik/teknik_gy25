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

Om ett lärandemål (enligt 03-bokens-arkitektur.md) omfattar flera uppslag hanteras dessa som sektioner inom samma fil (`## Uppslag 1`, `## Uppslag 2` osv.) — lärandemålet förblir den odelbara produktionsenheten, i linje med 04-redaktionsprinciper.md §9.

Claude Code får aldrig skriva ett helt kapitel i en fil.

---

## Mappstruktur

```
content/
  index.md                          # startsida för produktionsmiljön (ej bokinnehåll)
  06-mekanik-och-konstruktion/       # kapitel: <nr>-<slug>, slug från kapitlets titel
    index.md                        # kapitelöversikt (strukturell sida, ej bokinnehåll)
    6.01-krafter/                   # modul: <kapitel>.<modulnr>-<slug>, modulnr nollutfyllt
      _module.yml                   # modulmetadata: title, chapter, module, order
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

Strukturella sidor (kapitel-/modulöversikter, startsidan) sätter bara `title` och eventuellt `chapter` — de är inte lärandemål och omfattas inte av kraven nedan.

---

## Webbformat

Projektet har en statisk dokumentationswebbplats byggd med **Astro + Starlight** (`site/`), som läser innehåll direkt från `content/`.

**Webbplatsen är ett internt produktions- och granskningsverktyg. Den är inte en publicerad produkt eller en del av bokens leverans.** Figurer visas i webbplatsen som platshållarspecifikation (syfte/innehåll/text), aldrig som färdig grafik — den slutliga grafiska produktionen görs alltid av förlaget (se 01, 03, 08).

Markdown med frontmatter är källformatet. HTML genereras automatiskt av Astro vid varje bygge och committas inte till git.

---

## Navigering

Varje sida visar

- föregående/nästa lärandemål inom modulen
- modul
- kapitel
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

Figurer identifieras med unika ID och registreras centralt i `figures/registry.yml` (syfte, innehåll, vilka lärandemål som använder figuren).

Flera lärandemål kan referera till samma figur via shortcoden `[[figur:ID]]`.

Platshållarspecifikationen för en figur (se 01, 03, 08) ska alltid innehålla ett unikt ID, utöver syfte, innehåll, referens i texten och pedagogisk funktion.

`scripts/validate.mjs` felar om en refererad figur saknas i registret, och varnar om en registrerad figur inte används av något lärandemål.

---

## Kvalitetskontroller och kursplanetäckning

`scripts/validate.mjs` körs automatiskt före varje bygge av webbplatsen (`prebuild`-steg) och kan köras fristående (`npm run validate`). Det kontrollerar:

- **Struktursynk** — varje lärandemål i 06 har en fil i content/ på rätt sökväg, och varje lärandemålsfil finns i 06; id, kapitel och modul stämmer överens.
- **Begreppsunikhet** — varje begrepp introduceras i högst en fil; använda begrepp utan huvudställe flaggas.
- **Figur-ID** — varje refererad figur finns i registret; oanvända figurer flaggas.
- **Förkunskapsordning** — en fils `prerequisites` måste ligga tidigare i läsordningen (kapitel.modul.löpnummer), i linje med 04 §10.
- **Kursplantaggning** — `curriculum.niva1`/`niva2` innehåller punkt-id:n enligt 07 (via `kursplan-data.mjs`); tagg i ett kapitel utanför punktens matrisrad ger varning.
- **Statusstyrda innehållskontroller** — från status `fardig-forsta-version` krävs uppgiftsdelarna Förstå/Utveckla/Utmana, icke-tom kursplantaggning och att inga HTML-kommentarer eller TODO finns kvar; saknade figurer och AI-typiska formuleringar (05) ger varning.
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

Exportskriptet samlar lärandemålsfilerna i kanonisk läsordning (kapitel → modul → id, med kapitel- och modulrubriker ur 06), löser upp `[[begrepp:...]]`/`[[figur:...]]`-shortcodes till löptext respektive figurplatshållartext, strippar arbetsanteckningar (HTML-kommentarer) och kör resultatet genom **Pandoc** till `.docx` (till förlaget) och valfritt PDF. Endast lärandemål med status `fardig-forsta-version` eller högre exporteras som standard; lägsta status väljs med `--status=` (se skriptets huvudkommentar). Pandoc är en extern systeminstallation, inte ett npm-paket — se README/installationssteg vid produktionsstart om det saknas.

---

## Versionshantering

Projektet är ett git-repo, initierat vid produktionsarkitekturens uppsättning. Arbetssättet är trunk-baserat: commits görs direkt mot huvudgrenen, normalt ett commit per lärandemål eller annan betydande ändring. Ingen fjärrpush krävs för att versionshanteringen ska ge värde.
