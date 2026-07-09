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
| `npm run export` | Sammanställer manus i läsordning till `export/` (Word via Pandoc). |

---

# Källor och speglingar

Tre filer måste alltid hållas i synk. Valideringen felar när de glider isär.

1. **06-bokstruktur.md** — den redaktionella källan: kapitel, moduler, lärandemål med målformuleringar.
2. **scripts/bokstruktur-data.mjs** — 06:s maskinläsbara spegling. Ändras 06 uppdateras denna i samma steg.
3. **content/** — en fil per lärandemål, genererad av `npm run skeleton`.

Motsvarande gäller kursplanen: **07-kursplanetackning.md** är den redaktionella auktoriteten och **scripts/kursplan-data.mjs** dess maskinläsbara spegling. Kursplanens ordagranna lydelser (syfte, centralt innehåll, betygskriterier) finns i **Skolverket Kursplan Teknik GY25.md** i projektroten — använd den vid formuleringsfrågor, t.ex. när uppgifter ska träna en bedömd förmåga.

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
- kursplanetäckning → tagga `curriculum.niva1`/`niva2` med kategorinamn från 07
- om praktiskt moment passar → `practical_component: true`
- vanliga missuppfattningar

## 3. Skriv

Skriv teori, figurplatshållare och uppgifter (Förstå/Utveckla/Utmana) enligt 03 och 05. Omfattar lärandemålet flera uppslag används `## Uppslag 1`, `## Uppslag 2` som sektioner i samma fil (12).

Figurer refereras med `[[figur:ID]]`, begrepp som introducerats i andra lärandemål med `[[begrepp:namn]]`.

## 4. Granska

Genomför egengranskningen (08) och därefter granskningen av lärandemål (09). Kör:

```
npm run validate
```

Rätta alla fel och relevanta varningar. Sätt `status: fardig-forsta-version`.

## 5. Committa

Ett commit per lärandemål (12, "Versionshantering"). Commitmeddelandet anger id och titel, t.ex. `Lärandemål 6.1.1 Kraftbegreppet — färdig första version`.

Senare granskningssteg (fackgranskad → språkgranskad → klar) uppdaterar statusfältet i egna commits.

---

# Metadatafälten

Formatet definieras i `schemas/larandemal.schema.mjs` (12 är styrande). Kort bruksanvisning:

- **id / chapter / module / title** — sätts av skeleton, ändras bara vid strukturändring.
- **goal** — den mätbara målformuleringen ur 06. Inleds med observerbart verb.
- **uppslag** — planerat antal uppslag. 1 om inget annat anges. Ändras bedömningen under produktion uppdateras 06 + bokstruktur-data.mjs i samma steg.
- **status** — `ej-paborjad` → `under-utveckling` → `fardig-forsta-version` → `fackgranskad` → `sprakgranskad` → `klar`.
- **curriculum** — kategorinamn från 07:s tabeller, per nivå. Tomma listor betyder att lärandemålet ännu inte är taggat; taggning görs i steg 2.
- **concepts_introduced** — begrepp som har sitt huvudställe här. Ett begrepp får bara introduceras i en fil i hela boken.
- **concepts_used** — begrepp som används men introducerats någon annanstans.
- **figures** — figur-ID:n som används; varje ID måste finnas i `figures/registry.yml`.
- **prerequisites** — id:n på lärandemål som måste komma tidigare i läsordningen.
- **practical_component** — `true` när lärandemålet innehåller ett praktiskt moment.

---

# Figurer

Varje figur får ett unikt ID med mönstret `fig-<lärandemåls-id>-<bokstav>`, t.ex. `fig-6.1.2-a`, och registreras i `figures/registry.yml`:

```yaml
fig-6.1.2-a:
  syfte: "Visa hur två krafter adderas till en resultant"
  innehall: "Vektordiagram med två kraftpilar och deras resultant"
  anvands_i: ["6.1.2"]
```

I texten placeras dessutom en fullständig platshållare enligt 08 (syfte, innehåll, referens i texten, pedagogisk funktion). Registret ger det unika ID:t och överblicken; platshållaren i texten är förlagets specifikation.

---

# Begrepp

Det centrala begreppsregistret genereras — det underhålls aldrig för hand. Källan är frontmatterfälten i lärandemålsfilerna. `npm run begrepp` skriver översikten till `export/begreppsregister.md`, med varje begrepps huvudställe och alla användningsställen.

Innan ett nytt begrepp introduceras: kör `npm run begrepp` eller sök i registret för att kontrollera att begreppet inte redan har ett huvudställe. Validate felar vid dubbelintroduktion.

---

# Ändra strukturen

Claude Code får dela och slå ihop lärandemål (08). Arbetsgång:

1. Uppdatera 06-bokstruktur.md.
2. Uppdatera scripts/bokstruktur-data.mjs i samma steg.
3. Kör `npm run skeleton` (skapar nya filer; borttagna lärandemål raderas manuellt, skeleton tar aldrig bort något).
4. Flytta eventuellt redan skrivet innehåll till rätt fil.
5. Kör `npm run validate` — synkfel visar vad som återstår.

Kapitel- och modulstruktur ändras inte utan uttryckligt beslut (08, "AI får inte"). Kursplanetäckningen i 07 ändras aldrig av produktionsarbete.

---

# Uppföljning

`npm run validate` är produktionens lägesrapport:

- **Statusöversikt** — antal lärandemål per status, totalt och per kapitel.
- **Kursplanetäckning** — för varje punkt i det centrala innehållet: antal påbörjade lärandemål i punktens primärkapitel med rätt kategoritagg. Punkter markerade `·` saknar ännu påbörjat innehåll.

Rapporten ersätter manuell bokföring i 06 (som endast anger målskelettet).
