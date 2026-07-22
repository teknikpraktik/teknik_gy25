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

# Migreringsläge (2026-07-22)

Avsnitts- och kapitelmodellen nedan (löptext → Instuderingsfrågor → Övningar; kapitelavslutningar Sammanfattning + Begrepp; `[BILD]`-platshållare) är fastställd av projektägaren och normerande för allt nytt och reviderat innehåll (03, 06). Referensimplementationen är `referensimplementation-avsnitt-1-1.md` (projektroten) — läs den innan ett avsnitt skrivs eller revideras.

Skript och befintligt content/ migreras **kapitel för kapitel**, inte i ett svep. Fram till att ett kapitel tas om hand gäller därför i praktiken den äldre modellen (Praktiska uppgifter, uppgiftsbank/Projektuppgifter, `[[figur:ID]]`) för dess filer, och `npm run validate` visar kända fel för icke-migrerat innehåll (fel mappnamn för kapitel 1 vars titel bytts till "Teknikens grunder", kvarvarande `NN-projektuppgifter.md`-filer i samtliga kapitel). Det är väntad migreringsskuld, inte nya fel att jaga för varje ändring.

När ett kapitel produceras eller revideras enligt den nya modellen: byt filens uppgiftsrubriker till Instuderingsfrågor/Övningar, skriv bilder som `[BILD X.Y-N]` i stället för `[[figur:ID]]`, och arbeta in kapitlets projektuppgifter som en eller två helkapitelövningar i de senare avsnittens Övningar innan `NN-projektuppgifter.md` tas bort och 06/skeleton stäms av.

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
- praktisk träning planeras på två nivåer: avsnittets frivilliga Praktiska uppgifter och kapitlets projektbank

## 3. Skriv

Skriv löptext (med bildplatshållare), delavsnitt (H3) vid behov, en avslutande **samlad sektion Instuderingsfrågor** (5–10) och därefter en **samlad sektion Övningar** (2–10), enligt 03 och 05. Avsnittet har inget fast sidomfång; flödar det över flera delar struktureras det med H3-delavsnitt (rena underrubriker, se 06 "Avsnittens och delavsnittens format"), inte med egen numrering. Rubrikerna är alltid "Instuderingsfrågor" och "Övningar", aldrig Praktiska uppgifter, Projektuppgifter eller äldre uppdelade kategorier (Beräkningsuppgifter, Rituppgifter, Laborationer med flera). Det finns **inget Begrepp-block** i avsnittsfilen — begreppen behandlas i löptexten (11) — och kapitlets större, integrerande uppgifter skrivs i stället som en eller två helkapitelövningar i de senare avsnittens Övningar (se "Kapitelavslutningar" nedan), inte i en egen projektbank.

Rubrikkonvention i källfilerna: eftersom sidtiteln (frontmatterns `title`) är avsnittets h1 på webben, skrivs delavsnitt på `##`-nivå i källfilen och en eventuell ytterligare nedbrytning på `###` (undantagsvis). `## Instuderingsfrågor` och `## Övningar` skrivs på samma nivå som delavsnitten, i den ordningen sist i filen, som EN samlad sektion vardera även när avsnittet har flera delavsnitt eller lärandemål. Exporten sänker brödtextens rubriker ett steg (kapitel H1 → avsnitt H2 → delavsnitt H3). Frågorna och övningarna numreras var för sig 1, 2, 3 … Instuderingsfrågorna testar teknisk förståelse (aldrig "enligt texten" eller "vad visar figuren"), minst en tränar avsnittets begrepp. Övningarna är autentiska uppgifter i tydlig progression (identifiera, analysera, jämföra, konstruera, förbättra, eget arbete) och formuleras som "låter eleven visa", aldrig att boken mäter, testar eller examinerar (03).

Vid ett begrepps huvudställe (filen där det står i `concepts_introduced`) skrivs begreppet **kursiverat** i den mening där det definieras, aldrig i fetstil. Detta är bindande standard (05, "Begreppsmarkering").

Skriv aldrig gransknings-, process- eller utkastnotiser i brödtexten (`[UTKAST …]`, "vad som ändrats", betygskopplingsresonemang och liknande). Elevtexten ska vara ren; utkaststatus spåras via `migreradeKapitel`, inte via inline-taggar. Lägg sådant i rapporten och/eller produktionslogg.md (05, "Granskningsnotiser"). `[BILD X.Y-N]`-platshållare är undantagna. `npm run validate` flaggar en `[UTKAST …]`-markör i brödtext som aktivt fel.

Bilder skrivs som platshållare direkt i löptexten: `[BILD X.Y-N]` följt av Innehåll och färdigformulerad Bildtext (03, "Bilder"), numrerat löpande inom avsnittet. (I ännu icke migrerade kapitel kan `[[figur:ID]]` mot `figures/registry.yml` fortsätta användas tills kapitlet migreras, se "Migreringsläge".) Begrepp som introducerats i andra avsnitt refereras med `[[begrepp:namn]]`.

En övning som hör hemma i avsnittet skrivs som en numrerad post under `## Övningar` med namn i fetstil, inte som en boolesk flagga (`practical_component` är pensionerat) och inte som löptext i teorin.

## 4. Granska

Genomför egengranskningen (08) och därefter granskningen av avsnitt (09). Ta bort platshållarkommentaren och eventuella arbetsanteckningar. Sätt `status: fardig-forsta-version` och kör:

```
npm run validate
```

Från denna status ska valideringen (målmodell, se "Migreringsläge") ställa innehållskrav: en **icke-tom sektion `## Instuderingsfrågor`** (5–10, exakt en sektion) följd av en **icke-tom sektion `## Övningar`** (2–10, exakt en sektion), `learningGoals` och `curriculumReferences` ska vara ifyllda och inga HTML-kommentarer, TODO, uppslagsrubriker eller äldre uppgiftsrubriker (Praktiska uppgifter, Projektuppgifter, Förstå/Utveckla/Utmana) får finnas kvar. Tom `abilities`, AI-typiska formuleringar, tankstreck i elevtexten, fetstilade begrepp, förbjudna frågeformuleringar, "uppslag" som självreferens och ovanligt många personnamn ger varningar eller fel. Rätta alla fel och relevanta varningar. Jämför alltid mot referensimplementationen 1.1 innan status höjs.

## 5. Committa

Ett commit per avsnitt (12, "Versionshantering"). Commitmeddelandet anger id och titel, t.ex. `Avsnitt 6.1 Krafter — färdig första version`.

Senare granskningssteg (fackgranskad → språkgranskad → klar) uppdaterar statusfältet i egna commits.

---

# Kapitelavslutningar och helkapitelövningar

När ett kapitels avsnitt är producerade får kapitlet sina två avslutningar (12, "Kapitelavslutningar"). De skapas inte i förväg för kapitel som inte är påbörjade.

**Filer.** Skapa avsnittsfilerna för de två sista posterna i kapitlets del av 06-bokstruktur.md: `<NN>-sammanfattning.md` (`type: kapitelsammanfattning`) och `<NN>-begrepp.md` (`type: begreppsovning`), i den ordningen. 06 styr existens och ordning — det finns inget separat manifest. Det finns ingen tredje kapitelavslutande fil för projektuppgifter.

**Helkapitelövningar.** Innan sammanfattningen skrivs: säkerställ att en eller två av kapitlets senare avsnitt har en helkapitelövning i sin `## Övningar`-sektion (03, "Helkapitelövningar"). En helkapitelövning kräver stoff från flera avsnitt, resulterar i något dokumenterat (skiss, ritning, modell, kod, rapport, värdering) och har utskrivna utbyggnadssteg i formatet grunduppgift plus "Bygg ut: ..." så att eleven kan visa arbete på E-, C- och A-nivå. Den fungerar fristående (05, "Självreferenser"): ersätt "från föregående avsnitt" och "figuren ovan" med stabil information i uppgiften. Den kommer utöver, aldrig i stället för, avsnittets egna grundövningar.

**Sammanfattning.** Skriv sist, när begreppslistan och helkapitelövningarna redan finns. Kort löpande text, inte punktlista, som låter eleven repetera hela kapitlet på några minuter (riktmärke cirka 300 ord) — repetition, inga nya fakta eller begrepp, inga instuderingsfrågor.

**Begreppslista.** Skriv kapitlets begrepp (frontmatterfältet `ordlista`) med **färdiga definitioner**, max ungefär en mening per begrepp. En uppslagsfunktion: eleven fyller inte i något här. Begreppen ska redan ha sitt huvudställe i eller före kapitlet; listan är repetition och uppslag, aldrig första mötet. Facit-liknande innehåll (definitionerna själva) är tillåtet här eftersom listan är den avsedda uppslagsdelen, till skillnad från bedömningsfacit, som fortfarande ligger i en separat privat lärarmaterialkälla (12).

Format (obligatoriskt, se 03-bokens-arkitektur.md, "Begrepp"): en kompakt ordlista utan punktmarkering, en post per rad på formen `**Begrepp:** Definition.` — begreppet i fetstil med kolon inom fetstilen, versal på både begrepp och definition, definitionen en fullständig mening som slutar med punkt, inga tankstreck som avskiljare, hård radbrytning (avslutande `\`) på varje rad utom den sista. `npm run validate` felar på punktlista, tankstreck, ofetstilat begrepp eller saknad avslutande punkt.

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
- **figures** — figur-ID:n som används i ännu icke migrerade kapitel; varje ID måste finnas i `figures/registry.yml`. Nya och migrerade avsnitt använder `[BILD X.Y-N]`-platshållare i löptexten i stället och lämnar fältet tomt (se "Bilder").
- **prerequisites** — id:n på avsnitt som måste komma tidigare i läsordningen.

Fälten `module`, `uppslag` och `practical_component` är pensionerade (12) och skrivs inte längre. `praktiska_uppgifter_undantag` utgår med de fasta antalskraven.

---

# Bilder

**Målmodell.** Skriv platshållaren direkt i löptexten där bilden hör hemma, i formatet från referensimplementationen 1.1:

```
[BILD 6.1-1] Innehåll: vektordiagram med två kraftpilar och deras resultant, placerat vid exemplet med draglinorna. Bildtext: "Två krafter kan ersättas av en enda resultant utan att verkan ändras."
```

Numrera löpande inom avsnittet (`[BILD 6.1-1]`, `[BILD 6.1-2]` …). Innehåll beskriver vad bilden ska visa och varför; Bildtext är färdigformulerad. Bild och text använder samma exempel (03, "Bilder").

**Legacy (icke migrerade kapitel).** Det centrala figurregistret `figures/registry.yml` och shortcoden `[[figur:ID]]` fortsätter fungera för kapitel som ännu inte migrerats. Varje figur har ett unikt ID med mönstret `fig-<avsnitts-id>-<bokstav>`, t.ex. `fig-6.1-a`, och registreras med alla fyra fält:

```yaml
fig-6.1-a:
  syfte: "Visa hur två krafter adderas till en resultant"
  innehall: "Vektordiagram med två kraftpilar och deras resultant"
  referens: "Placeras vid exemplet med draglinorna; texten hänvisar till figuren när resultanten införs"
  pedagogisk_funktion: "Låter eleven se att två krafter kan ersättas av en enda utan att verkan ändras"
  anvands_i: ["6.1"]
```

I texten placeras endast shortcoden `[[figur:ID]]` där figuren hör hemma. Webbplatsen och exporten renderar hela specifikationen ur registret — den skrivs aldrig som lös text i avsnittsfilen. Nya avsnitt använder inte detta mönster.

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
