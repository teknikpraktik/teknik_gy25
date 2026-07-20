# Dokumentnamn

13-produktionsmanual.md

---

# Produktionsmanual

Detta dokument beskriver det operativa arbetsflödet för att producera lärobokens innehåll, ett avsnitt i taget.

Dokumentet reglerar *hur arbetet utförs i produktionsmiljön*. Vad som ska skrivas regleras av övriga styrdokument: pedagogiken av 03, språket av 05, arbetsmetoden och AI:s roll av 08, kvalitetskriterierna av 09 och fil- och metadataformatet av 12. Vid konflikt gäller prioriteringsordningen i 08-claude-code-manual.md.

---

# Kommandon

Alla kommandon körs från projektroten.

| Kommando | Gör |
|---|---|
| `npm run skeleton` | Skapar mappar och tomma avsnittsfiler ur bokstrukturen. Skriver aldrig över befintliga filer. |
| `npm run validate` | Kör samtliga tvärgående kontroller och skriver status- och täckningsöversikt. Körs också automatiskt före varje webbygge. |
| `npm run begrepp` | Genererar det centrala begreppsregistret till `export/begreppsregister.md`. |
| `npm run export` | Sammanställer förlagsmanus i läsordning till `export/` (Word via Pandoc). Tar bara med avsnitt med status `fardig-forsta-version` eller högre; annan lägstanivå väljs med `-- --status=<status>` eller `-- --status=alla`. |
| `npm run export:review` | Bygger det redaktionella granskningsmanuset till `dist/review/granskningsmanus.docx` och `.html` (samma innehåll och ordning, endast `fardig-forsta-version` och uppåt) och kör automatiska efterkontroller. Kräver Pandoc. Words innehållsförteckning uppdateras med Ctrl+A, F9. Referensdokumentet `scripts/review-reference.docx` återskapas vid behov med `node scripts/make-review-reference.mjs`. |
| `npm run kapitel-klar` | Samlad "uppdatera allt": validering, begreppsregister, webbygge och båda exporterna i en körning. Körs vid kapitelavslut, inte vid varje redaktionell ändring. |

---

# Arbetslägen: snabb iteration och kapitelavslut

Produktionen har två lägen. Att hålla isär dem är det som gör redaktionellt arbete snabbt.

**Snabb iteration (under arbetet med ett kapitel).** Vid vanliga redaktionella ändringar — rubriktext, frågeformulering, faktarättning, brödtext, en uppgift, en figurspecifikation — räcker den snabba grinden:

```
npm run validate
```

Kör **inte** webbygge, export eller deploy för varje sådan ändring. `npm run validate` (~sekunder) fångar de faktiska struktur-, begrepps-, figur- och kopplingsfelen. Rensa aldrig Astro-cachen i detta läge.

**Kapitelavslut (när ett kapitel bedöms klart).** Då körs den samlade uppdateringen en gång:

```
npm run kapitel-klar
```

Den kör validering, begreppsregister, webbygge och båda exporterna. Först här är det motiverat att rensa Astro-cachen (`site/.astro`, `site/node_modules/.astro`) om remark-pluginen eller figurregistret ändrats (se CLAUDE.md), och att pusha så att granskningssajten publiceras.

**Undantag som alltid kräver fullt bygge direkt** (inte bara `validate`): ändringar i schema, remark-pluginen, figurregistret, Astro-konfigurationen eller routing/struktur (nya filer, omdöpta slugs, kapitel-/avsnittsflytt). Där kan `validate` ensamt inte fånga renderingsfel.

**Rubrik-/titeländringar** kaskaderar i dag till slug, filnamn och frontmatter-titel (06 är enda källan). Samla därför sådana ändringar och genomför dem vid kapitelavslut, inte styckvis under iterationen.

---

# Källor och speglingar

**06-bokstruktur.md** är enda källan till bokens struktur. `scripts/bokstruktur-data.mjs` tolkar dokumentet direkt vid varje skriptkörning — det finns ingen datafil att hålla i synk, men 06:s kapitel-, avsnitts- och delavsnittsrader måste följa radformatet i 06 ("Avsnittens och delavsnittens format") exakt. **content/** (en fil per avsnitt) genereras ur 06 av `npm run skeleton`; valideringen felar när content/ och 06 glider isär.

För kursplanen gäller: **07-kursplanetackning.md** är den redaktionella auktoriteten och **scripts/kursplan-data.mjs** dess maskinläsbara spegling — de två uppdateras i samma steg. Varje kursplanepunkt har ett stabilt punkt-id (n1-01…, n2-01…, s-01) som används vid taggning. Kursplanens ordagranna lydelser (syfte, centralt innehåll, betygskriterier) finns i **Skolverket Kursplan Teknik GY25.md** i projektroten — använd den vid formuleringsfrågor, t.ex. när uppgifter ska träna en bedömd förmåga.

---

# Ett avsnitt i taget

Produktionen följer 08-claude-code-manual.md ("Kapitelproduktion"). Så här produceras ett avsnitt:

## 1. Välj avsnitt

Välj nästa avsnitt i kapitlets ordning. Kontrollera i frontmattern att `learningGoals` fortfarande är rätt avgränsat. Om avsnittet visar sig för stort eller för litet: dela eller slå ihop (se "Ändra strukturen" nedan) innan skrivandet börjar.

## 2. Förbered

Sätt `status: under-utveckling`. Identifiera enligt 08:

- nödvändiga förkunskaper → fyll i `prerequisites` (id:n på tidigare avsnitt, t.ex. "5.2")
- centrala begrepp → planera `concepts_introduced` (nya) och `concepts_used` (återanvända)
- vilka figurer som behövs → registrera i `figures/registry.yml` och fyll i `figures`
- kursplanetäckning → tagga `curriculumReferences.niva1`/`niva2` med punkt-id från 07 (n1-xx, n2-xx; syftesmålet s-01 är giltigt på båda nivåerna)
- bedömda förmågor → tagga `abilities` med de av de fem förmågorna (07, "Förmågekontroll") avsnittet primärt tränar
- vanliga missuppfattningar
- praktisk träning planeras för kapitlets uppgiftsbank, inte per avsnitt

## 3. Skriv

Skriv teori, figurplatshållare och en avslutande **samlad sektion instuderingsfrågor** enligt 03 och 05. Avsnittet har inget fast sidomfång; flödar det över flera delar struktureras det med H3-delavsnitt (rena underrubriker, se 06 "Avsnittens och delavsnittens format"), inte med egen numrering. Det finns **inget Begrepp-block och inga praktiska uppgifter** i avsnittsfilen — begreppen behandlas i teorin (11), och de praktiska uppgifterna samlas i kapitlets uppgiftsbank (se "Kapitelavslutningar" nedan).

Rubrikkonvention i källfilerna: eftersom sidtiteln (frontmatterns `title`) är avsnittets h1 på webben, skrivs delavsnitt på `##`-nivå i källfilen och en eventuell ytterligare nedbrytning på `###` (undantagsvis). `## Instuderingsfrågor` skrivs på samma nivå som delavsnitten, sist i filen, som EN samlad sektion även när avsnittet har flera delavsnitt eller lärandemål. Exporten sänker brödtextens rubriker ett steg (kapitel H1 → avsnitt H2 → delavsnitt H3). Frågorna numreras 1, 2, 3 … Sikta på 4–6 frågor per lärandemål avsnittet tränar (03); undvik långa frågebatterier och slå ihop frågor som blir för lika när flera lärandemål delar en gemensam lista.

Vid ett begrepps huvudställe (filen där det står i `concepts_introduced`) skrivs begreppet i **fetstil** i den mening där det definieras. Detta är bindande standard.

Figurer refereras med `[[figur:ID]]`, begrepp som introducerats i andra avsnitt med `[[begrepp:namn]]`.

Om ett praktiskt moment undantagsvis hör hemma inne i avsnittet skrivs det som ett tydligt moment i teoritexten, inte som en boolesk flagga (`practical_component` är pensionerat).

## 4. Granska

Genomför egengranskningen (08) och därefter granskningen av avsnitt (09). Ta bort platshållarkommentaren och eventuella arbetsanteckningar. Sätt `status: fardig-forsta-version` och kör:

```
npm run validate
```

Från denna status ställer valideringen innehållskrav: en **icke-tom sektion `## Instuderingsfrågor`** ska finnas (inget bestämt antal, exakt en sektion), `learningGoals` och `curriculumReferences` ska vara ifyllda och inga HTML-kommentarer, TODO, uppslagsrubriker, äldre uppgiftsrubriker (Förstå/Utveckla/Utmana) eller numrerade rubriker (kvarleva av den gamla lärandemålsnumreringen) får finnas kvar. Saknade figurer, tom `abilities`, AI-typiska formuleringar, tankstreck i elevtexten, "uppslag" som självreferens och ovanligt många personnamn ger varningar. Begrepp- och Praktiska uppgifter-block kontrolleras inte per avsnitt. Rätta alla fel och relevanta varningar.

## 5. Committa

Ett commit per avsnitt (12, "Versionshantering"). Commitmeddelandet anger id och titel, t.ex. `Avsnitt 6.1 Krafter — färdig första version`.

Senare granskningssteg (fackgranskad → språkgranskad → klar) uppdaterar statusfältet i egna commits.

---

# Kapitelavslutningar

När ett kapitels avsnitt är producerade får kapitlet sina tre avslutningar (12, "Kapitelavslutningar"). De skapas inte i förväg för kapitel som inte är påbörjade.

**Filer.** Skapa avsnittsfilerna för de tre sista posterna i kapitlets del av 06-bokstruktur.md: `<NN>-sammanfattning.md` (`type: kapitelsammanfattning`), `<NN>-begrepp.md` (`type: begreppsovning`) och `<NN>-projektuppgifter.md` (`type: uppgiftsbank`), i den ordningen. 06 styr existens och ordning — det finns inget separat manifest.

**Sammanfattning.** Skriv sist av de tre, när begreppsövningen och uppgiftsbanken redan finns. En sammanhängande löptext på cirka 300 ord som binder ihop kapitlets avsnitt till en helhet — repetition, inga nya fakta eller begrepp, inga instuderingsfrågor.

**Begreppsövning.** Skriv en **punktlista** över kapitlets centrala begrepp (frontmatterfältet `ordlista`), ett begrepp per punkt, med en instruktion om att eleven ska förklara varje begrepp med en egen mening i häfte eller digitalt dokument. Begreppen ska redan ha sitt huvudställe i eller före kapitlet — övningen är repetition, aldrig första mötet. Facit skrivs inte här (repot är offentligt); det tekniska gränssnittet finns, men själva facit ligger i en separat privat lärarmaterialkälla (12).

**Uppgiftsbank.** Skriv kapitlets praktiska uppgifter som en **enkel numrerad lista** i brödtexten: löpnummer från 1, ett namn i fetstil och därefter uppgiften, till exempel `1. **Behovet bakom föremålet.** Välj ett vardagsföremål …`. Ingen indelning i nivåer, ingen frontmatter-metadata och ingen uppgift om arbetsform, tid, redovisning eller vilket lärandemål uppgiften tränar — utförandet överlåts till läraren och eleven. Varje uppgift ska fungera fristående (05, "Självreferenser"): ersätt "från föregående avsnitt" och "figuren ovan" med stabil information i uppgiften. Slå ihop eller ta bort uppgifter som tränar samma sak på nästan samma sätt. Sikta på **4–6 uppgifter, normalt 5** (03-bokens-arkitektur.md, "Projektuppgifter"), ordnade i stigande omfattning och varierade mellan laboration, konstruktion, undersökning och beräknande arbete.

**Kör** `npm run validate`: 06-bokstruktur.md stäms av mot filerna åt båda håll.

---

# Metadatafälten

Formatet definieras i `schemas/larandemal.schema.mjs` (12 är styrande). Kort bruksanvisning:

- **id / chapter / sectionNumber / title** — sätts av skeleton, ändras bara vid strukturändring.
- **learningGoals** — avsnittets mätbara målformuleringar ur 06, en per lärandemål. Varje formulering inleds med observerbart verb.
- **status** — `ej-paborjad` → `under-utveckling` → `fardig-forsta-version` → `fackgranskad` → `sprakgranskad` → `klar`.
- **levels** — vilken/vilka kursnivåer (`niva1`/`niva2`) avsnittet är obligatoriskt innehåll för; härleds normalt ur `curriculumReferences`.
- **curriculumReferences** — punkt-id:n från 07:s tabeller (n1-xx, n2-xx, s-01), per nivå. Tomma listor betyder att avsnittet ännu inte är taggat; taggning görs i steg 2 och krävs från status `fardig-forsta-version`.
- **abilities** — vilka av de fem bedömda förmågorna (07, "Förmågekontroll") avsnittet primärt tränar.
- **concepts_introduced** — begrepp som har sitt huvudställe här. Ett begrepp får bara introduceras i en fil i hela boken.
- **concepts_used** — begrepp som används men introducerats någon annanstans.
- **figures** — figur-ID:n som används; varje ID måste finnas i `figures/registry.yml`.
- **prerequisites** — id:n på avsnitt som måste komma tidigare i läsordningen.

Fälten `module`, `uppslag` och `practical_component` är pensionerade (12) och skrivs inte längre. `praktiska_uppgifter_undantag` utgår med de fasta antalskraven.

---

# Figurer

Varje figur får ett unikt ID med mönstret `fig-<avsnitts-id>-<bokstav>`, t.ex. `fig-6.1-a`, `fig-6.1-b` för en andra figur i samma avsnitt, och registreras i `figures/registry.yml`. Registerposten är figurens fullständiga platshållarspecifikation enligt 08 — alla fyra fält är obligatoriska:

```yaml
fig-6.1-a:
  syfte: "Visa hur två krafter adderas till en resultant"
  innehall: "Vektordiagram med två kraftpilar och deras resultant"
  referens: "Placeras vid exemplet med draglinorna; texten hänvisar till figuren när resultanten införs"
  pedagogisk_funktion: "Låter eleven se att två krafter kan ersättas av en enda utan att verkan ändras"
  anvands_i: ["6.1"]
```

I texten placeras endast shortcoden `[[figur:ID]]` där figuren hör hemma. Webbplatsen och exporten renderar hela specifikationen ur registret — den skrivs aldrig som lös text i avsnittsfilen.

---

# Begrepp

Det centrala begreppsregistret genereras — det underhålls aldrig för hand. Källan är frontmatterfälten i avsnittsfilerna. `npm run begrepp` skriver översikten till `export/begreppsregister.md`, med varje begrepps huvudställe och alla användningsställen.

Innan ett nytt begrepp introduceras: kör `npm run begrepp` eller sök i registret för att kontrollera att begreppet inte redan har ett huvudställe. Validate felar vid dubbelintroduktion.

---

# Ändra strukturen

Claude Code får dela och slå ihop avsnitt (08). Arbetsgång:

1. Uppdatera 06-bokstruktur.md (följ radformatet exakt — det maskinläses).
2. Kör `npm run skeleton` (skapar nya filer; borttagna avsnitt raderas manuellt, skeleton tar aldrig bort något).
3. Flytta eventuellt redan skrivet innehåll till rätt fil.
4. Kör `npm run validate` — synkfel visar vad som återstår, inklusive filer som ska döpas om eller tas bort.

Kapitel- och avsnittsstruktur ändras inte utan uttryckligt beslut (08, "AI får inte"). Kursplanetäckningen i 07 ändras aldrig av produktionsarbete.

---

# Uppföljning

`npm run validate` är produktionens lägesrapport:

- **Statusöversikt** — antal avsnitt per status, totalt och per kapitel.
- **Kursplanetäckning** — antal påbörjade avsnitt per kursplanepunkt: `●` = täckt i primärkapitlet, `◐` = hittills endast i berörda kapitel, `·` = inget påbörjat innehåll ännu.

Rapporten ersätter manuell bokföring i 06 (som endast anger målskelettet).

Samma läge finns browsbart på webbplatsen: **kapitelsidan** visar en avsnittstabell med status, begreppsflöde och kapitlets kursplanansvar med taggningsläge. Vyn genereras vid varje bygge och används vid avsnitts- och kapitelgranskning enligt 09 — checklistan visas direkt på sidan.

För sammanhängande redaktionell läsning finns **granskningsvyn** på `/review/` (12, "Webbformat"): rent läsmanus utan metadata och figurplatshållare, kapitelvis eller som helsida. Efter push till master publiceras webbplatsen automatiskt på `https://teknikpraktik.github.io/teknik_gy25/` via GitHub Actions. Lokalt serveras allt under samma prefix: `http://localhost:4321/teknik_gy25/`.
