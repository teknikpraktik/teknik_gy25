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
    6.1-krafter/                    # modul: <kapitel>.<modulnr>-<slug>
      _module.yml                   # modulmetadata: title, chapter, module, order
      6.1.1-vad-ar-en-kraft.md      # lärandemål: <kapitel>.<modul>.<löpnr>-<slug>
      6.1.2-kraftresultanter.md
figures/
  registry.yml                      # centralt figur-ID-register
schemas/
  larandemal.schema.mjs             # enda källan till metadataschemat (Zod)
scripts/
  bokstruktur-data.mjs              # maskinläsbar spegling av 06:s kapitel/moduler
  generate-skeleton.mjs             # skapar mapp-/modulskelett, hittar inte på lärandemål
  validate.mjs                      # tvärgående kvalitetskontroller (se nedan)
  export-manuscript.mjs             # sammanställer och exporterar bokmanus
site/                               # Astro + Starlight, se "Webbformat" nedan
export/                             # genererade manusfiler (gitignorad, byggs på nytt varje gång)
```

Kapitel- och modulnamn i mappstrukturen speglar 06-bokstruktur.md exakt. Ändras ett kapitel- eller modulnamn i 06 ska `scripts/bokstruktur-data.mjs` uppdateras i samma steg (körs sedan via `npm run skeleton`), annars går strukturerna ur synk.

---

## Metadata

Varje lärandemålsfil har YAML-frontmatter enligt schemat i `schemas/larandemal.schema.mjs`:

```yaml
id: "6.1.2"
chapter: 6
module: "6.1"
title: "Kraftresultanter"
status: under-utveckling   # ej-paborjad | under-utveckling | fardig-forsta-version | fackgranskad | sprakgranskad | klar
curriculum:
  niva1: ["Begrepp, teorier och modeller"]
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
- innehållsförteckning (sidopanelen, automatiskt genererad från mappstrukturen)

Navigeringen genereras automatiskt från kapitel-/modul-/id-metadata. Den underhålls aldrig manuellt, vilket gör det säkert för Claude Code att dela eller slå ihop lärandemål (04 §17) utan att länkar bryts.

---

## Begrepp

Alla tekniska begrepp har ett unikt huvudställe: den lärandemålsfil där begreppet står i `concepts_introduced`.

Interna referenser till begreppet i andra lärandemål sker via shortcoden `[[begrepp:namn]]`, som webbplatsen länkar till huvudstället och som exportskriptet löser upp till vanlig text (ett bokmanus har inga klickbara länkar).

`scripts/validate.mjs` kontrollerar att varje begrepp finns i `concepts_introduced` i högst en fil (maskinkontroll av 11-begreppsfilosofi.md, "Begrepp introduceras en gång").

---

## Figurer

Figurer identifieras med unika ID och registreras centralt i `figures/registry.yml` (syfte, innehåll, vilka lärandemål som använder figuren).

Flera lärandemål kan referera till samma figur via shortcoden `[[figur:ID]]`.

Platshållarspecifikationen för en figur (se 01, 03, 08) ska alltid innehålla ett unikt ID, utöver syfte, innehåll, referens i texten och pedagogisk funktion.

`scripts/validate.mjs` felar om en refererad figur saknas i registret, och varnar om en registrerad figur inte används av något lärandemål.

---

## Kvalitetskontroller och kursplanetäckning

`scripts/validate.mjs` körs automatiskt före varje bygge av webbplatsen (`prebuild`-steg) och kan köras fristående (`npm run validate`). Det kontrollerar:

- **Begreppsunikhet** — varje begrepp introduceras i högst en fil.
- **Figur-ID** — varje refererad figur finns i registret; oanvända figurer flaggas.
- **Förkunskapsordning** — en fils `prerequisites` måste ligga tidigare i läsordningen (kapitel.modul.löpnummer), i linje med 04 §10.
- **Kursplantaggning** — `curriculum.niva1`/`niva2` måste använda samma kategorinamn som 07-kursplanetackning.md.
- **Statusöversikt** — sammanställer antal lärandemål per status, som ersättning för manuell bokföring i 06.

07-kursplanetackning.md förblir den redaktionella auktoriteten för vilket kapitel som har primärt ansvar för vad. Valideringsskriptet läser referensdata därifrån (kategorinamnen) — det skriver aldrig till 07 och avgör aldrig själva täckningsbeslutet.

---

## Export

Projektet ska när som helst kunna exporteras till

- tryckt bok (manus)
- PDF
- Word
- HTML
- framtida digitala format

Källmaterialet är därför presentationsoberoende: samma `content/`-filer används av webbplatsen (granskning) och av `scripts/export-manuscript.mjs` (leverans).

Exportskriptet samlar lärandemålsfilerna i kanonisk läsordning (kapitel → modul → id), löser upp `[[begrepp:...]]`/`[[figur:...]]`-shortcodes till löptext respektive figurplatshållartext, och kör resultatet genom **Pandoc** till `.docx` (till förlaget) och valfritt PDF. Pandoc är en extern systeminstallation, inte ett npm-paket — se README/installationssteg vid produktionsstart om det saknas.

---

## Versionshantering

Projektet är ett git-repo, initierat vid produktionsarkitekturens uppsättning. Arbetssättet är trunk-baserat: commits görs direkt mot huvudgrenen, normalt ett commit per lärandemål eller annan betydande ändring. Ingen fjärrpush krävs för att versionshanteringen ska ge värde.
