# Dokumentnamn

13-produktionsmanual.md

---

# Produktionsmanual

Detta dokument beskriver det operativa arbetsflödet för att producera lärobokens innehåll, ett lärandemål i taget.

Dokumentet reglerar *hur arbetet utförs i produktionsmiljön*. Vad som ska skrivas regleras av övriga styrdokument: pedagogiken av 03, språket av 05, arbetsmetoden och AI:s roll av 08, kvalitetskriterierna av 09 och fil- och metadataformatet av 12. Vid konflikt gäller prioriteringsordningen i 08-claude-code-manual.md.

---

# Kommandon

Alla kommandon körs från projektroten.

| Kommando | Gör |
|---|---|
| `npm run skeleton` | Skapar mappar, modulfiler och tomma lärandemålsfiler ur bokstrukturen. Skriver aldrig över befintliga filer. |
| `npm run validate` | Kör samtliga tvärgående kontroller och skriver status- och täckningsöversikt. Körs också automatiskt före varje webbygge. |
| `npm run begrepp` | Genererar det centrala begreppsregistret till `export/begreppsregister.md`. |
| `npm run export` | Sammanställer förlagsmanus i läsordning till `export/` (Word via Pandoc). Tar bara med lärandemål med status `fardig-forsta-version` eller högre; annan lägstanivå väljs med `-- --status=<status>` eller `-- --status=alla`. |
| `npm run export:review` | Bygger det redaktionella granskningsmanuset till `dist/review/granskningsmanus.docx` och `.html` (samma innehåll och ordning, endast `fardig-forsta-version` och uppåt) och kör automatiska efterkontroller. Kräver Pandoc. Words innehållsförteckning uppdateras med Ctrl+A, F9. Referensdokumentet `scripts/review-reference.docx` återskapas vid behov med `node scripts/make-review-reference.mjs`. |

---

# Källor och speglingar

**06-bokstruktur.md** är enda källan till bokens struktur. `scripts/bokstruktur-data.mjs` tolkar dokumentet direkt vid varje skriptkörning — det finns ingen datafil att hålla i synk, men 06:s kapitel-, modul- och lärandemålsrader måste följa radformatet i 06 ("Lärandemålens format") exakt. **content/** (en fil per lärandemål) genereras ur 06 av `npm run skeleton`; valideringen felar när content/ och 06 glider isär.

För kursplanen gäller: **07-kursplanetackning.md** är den redaktionella auktoriteten och **scripts/kursplan-data.mjs** dess maskinläsbara spegling — de två uppdateras i samma steg. Varje kursplanepunkt har ett stabilt punkt-id (n1-01…, n2-01…, s-01) som används vid taggning. Kursplanens ordagranna lydelser (syfte, centralt innehåll, betygskriterier) finns i **Skolverket Kursplan Teknik GY25.md** i projektroten — använd den vid formuleringsfrågor, t.ex. när uppgifter ska träna en bedömd förmåga.

---

# Ett lärandemål i taget

Produktionen följer 08-claude-code-manual.md ("Kapitelproduktion"). Så här produceras ett lärandemål:

## 1. Välj lärandemål

Välj nästa lärandemål i modulens ordning. Kontrollera i frontmattern att `goal` fortfarande är rätt avgränsat. Om målet visar sig för stort eller för litet: dela eller slå ihop (se "Ändra strukturen" nedan) innan skrivandet börjar.

## 2. Förbered

Sätt `status: under-utveckling`. Identifiera enligt 08:

- nödvändiga förkunskaper → fyll i `prerequisites` (id:n på tidigare lärandemål)
- centrala begrepp → planera `concepts_introduced` (nya) och `concepts_used` (återanvända)
- vilka figurer som behövs → registrera i `figures/registry.yml` och fyll i `figures`
- kursplanetäckning → tagga `curriculum.niva1`/`niva2` med punkt-id från 07 (n1-xx, n2-xx; syftesmålet s-01 är giltigt på båda nivåerna)
- om praktiskt moment passar → `practical_component: true`
- vanliga missuppfattningar

## 3. Skriv

Skriv teori, figurplatshållare och uppgifter (Förstå/Utveckla/Utmana) enligt 03 och 05. Omfattar lärandemålet flera uppslag används `## Uppslag 1`, `## Uppslag 2` som sektioner i samma fil (12).

Rubrikkonvention i källfilerna: teoriavsnitt och uppgiftsdelarna `## Förstå`, `## Utveckla`, `## Utmana` skrivs på `##`-nivå (sidtiteln är h1 på webben; exporten sänker brödtextens rubriker två steg så att hierarkin i Word blir rätt). Vid fleruppslagsmål är `## Uppslag 1`, `## Uppslag 2` sektionsrubriker och teoriavsnitt och uppgiftsdelar ligger en nivå djupare (`###`), med egna uppgiftsdelar per uppslag enligt 03:s uppslagsmodell. Uppgifterna numreras 1, 2, 3 … med omstart i varje del.

Vid ett begrepps huvudställe (filen där det står i `concepts_introduced`) skrivs begreppet i **fetstil** i den mening där det definieras. Detta är bindande standard.

Utmana-uppgifter får inledas med en arbetsformsetikett i fetstil, t.ex. **Undersökning.**, **Kartläggning.**, **Analys.** eller **Omformulering.** Etiketterna är rekommenderade när de gör arbetsformen tydligare för eleven, men de är inte obligatoriska och får inte skapa mekanisk likformighet — en Utmana-uppgift utan etikett är helt korrekt.

Figurer refereras med `[[figur:ID]]`, begrepp som introducerats i andra lärandemål med `[[begrepp:namn]]`.

## 4. Granska

Genomför egengranskningen (08) och därefter granskningen av lärandemål (09). Ta bort platshållarkommentaren och eventuella arbetsanteckningar. Sätt `status: fardig-forsta-version` och kör:

```
npm run validate
```

Från denna status ställer valideringen innehållskrav: uppgiftsdelarna Förstå/Utveckla/Utmana ska finnas, `curriculum` ska vara taggat och inga HTML-kommentarer eller TODO får finnas kvar. Saknade figurer, AI-typiska formuleringar och tankstreck i elevtexten ger varningar. Rätta alla fel och relevanta varningar.

## 5. Committa

Ett commit per lärandemål (12, "Versionshantering"). Commitmeddelandet anger id och titel, t.ex. `Lärandemål 6.1.1 Kraftbegreppet — färdig första version`.

Senare granskningssteg (fackgranskad → språkgranskad → klar) uppdaterar statusfältet i egna commits.

---

# Metadatafälten

Formatet definieras i `schemas/larandemal.schema.mjs` (12 är styrande). Kort bruksanvisning:

- **id / chapter / module / title** — sätts av skeleton, ändras bara vid strukturändring.
- **goal** — den mätbara målformuleringen ur 06. Inleds med observerbart verb.
- **uppslag** — planerat antal uppslag. 1 om inget annat anges. Ändras bedömningen under produktion: markera **(N uppslag)** på raden i 06 och uppdatera fältet.
- **status** — `ej-paborjad` → `under-utveckling` → `fardig-forsta-version` → `fackgranskad` → `sprakgranskad` → `klar`.
- **curriculum** — punkt-id:n från 07:s tabeller (n1-xx, n2-xx, s-01), per nivå. Tomma listor betyder att lärandemålet ännu inte är taggat; taggning görs i steg 2 och krävs från status `fardig-forsta-version`.
- **concepts_introduced** — begrepp som har sitt huvudställe här. Ett begrepp får bara introduceras i en fil i hela boken.
- **concepts_used** — begrepp som används men introducerats någon annanstans.
- **figures** — figur-ID:n som används; varje ID måste finnas i `figures/registry.yml`.
- **prerequisites** — id:n på lärandemål som måste komma tidigare i läsordningen.
- **practical_component** — `true` när lärandemålet innehåller ett praktiskt moment.

---

# Figurer

Varje figur får ett unikt ID med mönstret `fig-<lärandemåls-id>-<bokstav>`, t.ex. `fig-6.1.2-a`, och registreras i `figures/registry.yml`. Registerposten är figurens fullständiga platshållarspecifikation enligt 08 — alla fyra fält är obligatoriska:

```yaml
fig-6.1.2-a:
  syfte: "Visa hur två krafter adderas till en resultant"
  innehall: "Vektordiagram med två kraftpilar och deras resultant"
  referens: "Placeras vid exemplet med draglinorna; texten hänvisar till figuren när resultanten införs"
  pedagogisk_funktion: "Låter eleven se att två krafter kan ersättas av en enda utan att verkan ändras"
  anvands_i: ["6.1.2"]
```

I texten placeras endast shortcoden `[[figur:ID]]` där figuren hör hemma. Webbplatsen och exporten renderar hela specifikationen ur registret — den skrivs aldrig som lös text i lärandemålsfilen.

---

# Begrepp

Det centrala begreppsregistret genereras — det underhålls aldrig för hand. Källan är frontmatterfälten i lärandemålsfilerna. `npm run begrepp` skriver översikten till `export/begreppsregister.md`, med varje begrepps huvudställe och alla användningsställen.

Innan ett nytt begrepp introduceras: kör `npm run begrepp` eller sök i registret för att kontrollera att begreppet inte redan har ett huvudställe. Validate felar vid dubbelintroduktion.

---

# Ändra strukturen

Claude Code får dela och slå ihop lärandemål (08). Arbetsgång:

1. Uppdatera 06-bokstruktur.md (följ radformatet exakt — det maskinläses).
2. Kör `npm run skeleton` (skapar nya filer; borttagna lärandemål raderas manuellt, skeleton tar aldrig bort något).
3. Flytta eventuellt redan skrivet innehåll till rätt fil.
4. Kör `npm run validate` — synkfel visar vad som återstår, inklusive filer som ska döpas om eller tas bort.

Kapitel- och modulstruktur ändras inte utan uttryckligt beslut (08, "AI får inte"). Kursplanetäckningen i 07 ändras aldrig av produktionsarbete.

---

# Uppföljning

`npm run validate` är produktionens lägesrapport:

- **Statusöversikt** — antal lärandemål per status, totalt och per kapitel.
- **Kursplanetäckning** — antal påbörjade lärandemål per kursplanepunkt: `●` = täckt i primärkapitlet, `◐` = hittills endast i berörda kapitel, `·` = inget påbörjat innehåll ännu.

Rapporten ersätter manuell bokföring i 06 (som endast anger målskelettet).

Samma läge finns browsbart på webbplatsen: **kapitelvyn** visar modulstatus och kapitlets kursplanansvar med taggningsläge, **modulvyn** visar lärandemålstabell och begreppsflöde. Vyerna genereras vid varje bygge och används vid modul- och kapitelgranskning enligt 09 — checklistan visas direkt på respektive sida.

För sammanhängande redaktionell läsning finns **granskningsvyn** på `/review/` (12, "Webbformat"): rent läsmanus utan metadata och figurplatshållare, kapitelvis eller som helsida. Efter push till master publiceras webbplatsen automatiskt på `https://teknikpraktik.github.io/teknik_gy25/` via GitHub Actions. Lokalt serveras allt under samma prefix: `http://localhost:4321/teknik_gy25/`.
