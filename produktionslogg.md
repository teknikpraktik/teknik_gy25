# Produktionslogg

Löpande logg över färdigställda lärandemål (första version och uppåt).
Kvalitetsbedömningen görs mot referensimplementationen 1.1 (09-kvalitetssakring.md,
"Helhetsbedömning"; tidigare kallad Golden Master 1.1.1, se revisionen 2026-07-22
nedan). Ett avsnitt som bedöms "Under referensimplementationen" får inte
betraktas som färdig första version. "Överträffar referensimplementationen" ska
motiveras och eventuell ny standard lyftas för redaktionellt beslut. Loggen
ingår inte i bokexporten (export läser endast content/).

---

# Backlog: väntande uppslag till ännu ej skrivna kapitel

Uppslag som flyttats ut ur ett skrivet kapitel men hör hemma i ett kapitel som ännu inte är producerat. Bevakas här tills målkapitlet skrivs, så att inget innehåll tappas.

- **Kapitel 13 — värdering av digitaliseringens fördelningskonsekvenser (vinnare och förlorare).** Flyttad 2026-07-22 ur kapitel 1:s projektuppgifter (forna projektuppgift 3, "Digitaliseringens vinnare och förlorare") eftersom den är värderande, inte teknikhistorisk, och hör till kapitel 13:s värderande stoff (n1-14 / n2-10, värdering utifrån bl.a. genus, etik och hållbar utveckling). Uppgiftens kärna: välj en bransch som digitaliserats (musik, foto, bank, tidningar, resebyråer, taxi …), kartlägg hur informationen lämnade sin fysiska bärare och vilka tekniska komponenter som möjliggjorde skiftet, och värdera vad som blev bättre och för vem, vad som gick förlorat och vilka yrken eller företag som försvann eller tillkom, med källor. **Koppling:** bygger vidare på 1.2:s digitaliseringsinnehåll (delavsnittet "Digitalisering, internet och AI" och mönstret att informationen frigörs från sin fysiska bärare); förutsätter att eleven läst 1.2. När kapitel 13 produceras: forma om till en värderingsuppgift i det kapitlets modell.

---

# Kapitel 1 — utkaststatus och produktionsnoteringar (2026-07-22)

Kapitel 1 är reviderat mot referensstandarden men **ännu inte färdiggranskat** (ligger inte i `migreradeKapitel`). Följande noteringar flyttades hit ur brödtexten när inline-`[UTKAST]`-markörerna togs bort (05-forfattarmanual.md, "Granskningsnotiser"):

- **1.3 Övningar** skrevs nya (avsnittet saknade tidigare övningar): fyra avsnittsnära övningar samt två helkapitelövningar (nr 5–6) som viker in kapitlets tidigare projektuppgifter. I helkapitelövningarna är grunduppgift, "Bygg ut" och "Bygg ut vidare" tänkta att motsvara stigande nivå (E/C/A). Den uttryckliga betygskopplingen hör enligt 03 hemma i lärarhandledningen, inte i elevtexten, och står därför inte i uppgiftstexten.
- **1.3/1.2 bildtexter** ([BILD]-block) är utkast till illustratörsbrief, byggda på figures/registry.yml; bör läsas igenom vid facit-/fackgranskning.
- **Begrepp (05-begrepp.md)** omvandlades från gammalt ifyllnadsformat till definitionslista (uppslagsfunktion). Definitionerna är nyskrivna, byggda på hur begreppen införs i 1.1–1.3, max ungefär en mening per begrepp; granska sakinnehållet.

Allt kapitel 1-innehåll är alltså utkast tills projektägaren läst det och kapitlet förs till `migreradeKapitel`.

---

# Kapitel 2 — utkaststatus och produktionsnoteringar (2026-07-22)

Kapitel 2 (2.1, 2.2 + avslutning) reviderat mot referensstandarden, beskrivande spår. **Ännu inte färdiggranskat** (ligger inte i `migreradeKapitel`).

Mekaniskt: rubriken "Praktiska uppgifter" → "Övningar" i 2.1 och 2.2; begrepp fetstil → kursiv vid definierande förekomst (2.1: *tekniskt problem*, *funktion*, *krav*, *begränsning*; 2.2: *delproblem*); `[[figur:ID]]` → `[BILD X.Y-N]` med Innehåll ordagrant ur figures/registry.yml (7 bilder). Inga begreppsgränsfall — alla fetade ord var registrerade begrepp. `01-vad-ar-ett-tekniskt-problem.md` och `02-att-valja-problemlosningsstrategi.md` avregistrerade ur `legacyOvningsrubrikFiler`.

Nyskrivet utkast (granska sakinnehåll):
- **Bildtexter** till alla 7 `[BILD]`-block är nyskrivna (registret saknar bildtextfält); Innehåll är däremot ordagrant ur registret.
- **Begrepp (04-begrepp.md)** omvandlat från ifyllnadsövning till definitionslista, sex begrepp, byggda på hur de införs i 1.1–2.2.
- **2.2 Övningar** fick två helkapitelövningar (nr 4–5) som viker in kapitlets fyra projektuppgifter: nr 4 "Från behov till vald strategi" (formulering → nedbrytning → strategival, viker in projektuppgift 2–4) och nr 5 "Samma behov, en annan problemformulering" (viker in projektuppgift 1, Hövding/skal). Grund/"Bygg ut"/"Bygg ut vidare" motsvarar stigande nivå; betygskopplingen hör till lärarhandledningen, inte elevtexten.

Den gamla `05-projektuppgifter.md` ligger kvar som migreringsskuld (raderas vid kapitlets finalisering, som för kapitel 1).

---

# Begreppslistans format — ordlista (2026-07-22)

Redaktionellt beslut: begreppslistorna (kapitelavslutningen Begrepp) skrivs som en kompakt ordlista i stället för punktlista med tankstreck. Obligatoriskt format, en post per rad utan punktmarkering:

`**Begrepp:** Definition.`

Begreppet i fetstil med kolon inom fetstilen, versal på både begrepp och definition, definitionen en fullständig mening som slutar med punkt, inga tankstreck som avskiljare, hård radbrytning (avslutande `\`) på varje rad utom den sista för kompakt vertikal rytm. Verifierat i webb (Astro/Starlight, `<br>`), granskningsvy och Pandoc-export (`<br />` i Word/HTML).

Genomfört: begreppslistorna i kapitel 1 (17 begrepp) och kapitel 2 (6 begrepp) konverterade från `- **begrepp** — definition.` till det nya formatet. Standarden inskriven i 03 ("Begrepp"), 11, 12, 13, 09 och CLAUDE.md. Ny kontrollregel i `scripts/validate.mjs` felar på punktlista, tankstreck, ofetstilat begrepp eller definition utan avslutande punkt i en begreppslista (testad mot fixturer). Kapitel 6:s begreppslista har ännu det gamla ifyllnadsformatet (bara begrepp, inga definitioner) och redovisas som förväntad migreringsskuld (`legacyBegreppFiler`) tills kapitel 6 revideras — den kräver nyskrivna definitioner. Övriga kapitels begreppsfiler är tomma skelett och berörs inte.

---

**Redaktionell revision 2026-07-22 (produktionsstandard, uttryckligt beslut av
projektägaren; kvalitetsreferensen bytt namn från Golden Master till
referensimplementation):** Avsnitt 1.1 "Vad är teknik?" ersattes i sin helhet av
en slutredigerad version och fastställdes samtidigt som ny, namnbytt
kvalitetsreferens (`referensimplementation-avsnitt-1-1.md`, projektroten,
verbatim och oredigerbar utom efter uttryckligt beslut). Samma prompt fastställde
en ny generell produktionsstandard, normerande för hela boken framåt:

- **Överordnat kriterium** infört i 03: självstudiebar mot kondenserad, prövat åt
  båda hållen för varje redaktionellt val.
- **Avsnittsmönstret** ändrat till löptext (med `[BILD X.Y-N]`-bildplatshållare,
  ersätter `[[figur:ID]]`/`figures/registry.yml` för nytt och migrerat innehåll)
  → Instuderingsfrågor (5–10) → Övningar (2–10, ersätter Praktiska uppgifter).
  Formuleringsregel: boken "låter eleven visa", mäter/testar/examinerar inget.
- **Kapitelavslutningarna** minskade från tre till två: Sammanfattning (kort
  löptext, ej punktlista) och Begrepp (färdiga definitioner, uppslagsfunktion).
  Ingen egen projektuppgiftsdel längre — kapitlets större uppgifter blir i
  stället en eller två **helkapitelövningar** i de senare avsnittens Övningar,
  med krav på flerdelsstoff, ett dokumenterat resultat och utskrivna
  utbyggnadssteg (grunduppgift + "Bygg ut: ...") för E/C/A.
- **Begreppsmarkering** ändrad från fetstil till kursiv vid huvudställe (05).
  **Terminologikonsekvens** infört med löpande `termlista.md` (dragkedja före
  blixtlås, bild före figur, m.fl.).
- **Kapitel 1** bytte titel till "Teknikens grunder" (från "Teknik och
  teknikutveckling"); 06-bokstruktur.md skrivet om för hela boken med denna
  modell (alla 13 kapitel), 07-kursplanetackning.md fick nya rader s-02/s-03 för
  syftesstoff (teknikbegreppet; samspelet teknik/naturvetenskap/matematik) med
  huvudhem i 1.1.
- **Migreringsläge:** styrdokumenten (03, 05, 06, 07, 09, 11, 12, 13, CLAUDE.md)
  är omskrivna för hela boken enligt den nya modellen. `scripts/bokstruktur-data.mjs`
  uppdaterades i samma steg (annars hade 06:s nya, onumrerade kapitelavslutningar
  gjort att parsern kraschade och hela toolchain slutat fungera) — detta var en
  nödvändig mekanisk fix, inte innehållsmigrering. Content/ och övriga skript
  (validate.mjs, generate-skeleton.mjs, exportskripten, schemat) migreras
  **kapitel för kapitel** när respektive kapitel produceras eller revideras;
  fram till dess visar `npm run validate` känd, väntad migreringsskuld (fel
  mappnamn för kapitel 1, kvarvarande `NN-projektuppgifter.md` i alla kapitel).

**Arkitekturrevision 2026-07-15 (Kapitel → Modul → Lärandemål avvecklad,
uttryckligt beslut av projektägaren):** Hela produktions- och publiceringsstrukturen
migrerad till Kapitel (H1) → Avsnitt (H2) → Delavsnitt (H3, vid behov). Avsnittet
är nu bokens minsta produktionsenhet och publicerade enhet; modulnivån är helt
avvecklad. Lärandemål är sedan revisionen metadata på avsnittet
(frontmatterfältet `learningGoals`, flera per avsnitt tillåtna), inte en egen
rubriknivå, fil eller sida.

Ändrade system: `06-bokstruktur.md` skrivet om för hela boken (87 avsnitt över
13 kapitel, alla med lärandemålslistor ur den tidigare bokstrukturen); schemat
(`schemas/larandemal.schema.mjs`) fick nya fält `sectionNumber`, `learningGoals`,
`curriculumReferences`, `abilities`, `levels`, och pensionerade `module`/`goal`;
`scripts/bokstruktur-data.mjs` omskriven för den nya radformaten och avsnittsbaserade
filstigar (`content/<kapitel>/<NN>-slug.md`, ingen modulundermapp); `validate.mjs`,
`generate-skeleton.mjs` och `manuscript-core.mjs` (export) uppdaterade i linje
med detta; `scripts/kapitelavslutningar-data.mjs` borttagen — kapitelavslutningarna
styrs numera direkt av 06, som vilket annat avsnitt. Webbplatsens modulvy
(`site/src/pages/[...oversikt].astro`) togs bort och slogs samman med
kapitelvyn; sidopanelen (`astro.config.mjs`) och granskningsvyn (`/review/`)
förenklade till en nivå (kapitel → avsnitt).

Kapitel 1 och 2 (de enda med producerat innehåll, 22 filer) migrerades med full
textbevarande sammanslagning: tidigare lärandemålsfiler blev H3-delavsnitt i
respektive avsnittsfil, med tidigare separata "Instuderingsfrågor"-sektioner
slagna ihop till en samlad sektion per avsnitt (10 respektive 23 frågor).
Kapitel 1 döptes om från "Teknikens utveckling" till "Teknik och
teknikutveckling" för att bättre täcka både teknikbegreppet och den historiska
tillbakablicken. Kapitel 3–13 (uteslutande tomma skelettfiler, status
`ej-paborjad`) skelettgenererades om mekaniskt ur den nya 06 utan
innehållsförlust, med redaktionellt sammanslagna avsnitt där gamla moduler var
mycket små eller tydligt överlappande (se rapporttext i konversationen/PR:en
för fullständig lista över sammanslagningar per kapitel).

`npm run validate`, fullt webbygge (rensad cache), `npm run export` och
`npm run export:review` kördes samtliga grönt efter migreringen; export:review
uppdaterad att läsa nivå 2 (inte tidigare nivå 3) som avsnittsrubrik och matcha
mot numrerade rubriker för att skilja avsnitt från kapitelavslutningar.

**Strukturrevision 2026-07-14 (modul 2.2 ombytt ordning, speglar ingenjörens
beslutslogik):** "Dela upp problemet" flyttad från sista till andra plats i
modulen, så att disponeringen följer den faktiska beslutsordningen: (1)
bedöm om problemet går att överblicka, (2) om inte, dela upp det, (3) välj
sedan en av de tre strategierna (återanvänd/pröva-förbättra/analysera) för
det överblickbara problemet. Ny ordning: 2.2.1 Bedöma problemets karaktär →
2.2.2 Dela upp problemet → 2.2.3 Återanvänd befintlig lösning → 2.2.4 Pröva
och förbättra → 2.2.5 Analysera innan du bygger. Filerna döpta om i tur och
ordning (via temporära namn för att undvika kollisioner), figurregistrets
fig-2.2.x roterat i samma ordning, `prerequisites` uppdaterade så de tre
strategi-lärandemålen nu även bygger på 2.2.2 (dela upp), inte bara 2.2.1.

Övergångar justerade: "ett eget avsnitt längre fram" i 2.2.1 bytt mot en
direkt hänvisning ("nästa avsnitt"), eftersom nedbrytningen nu faktiskt är
nästa avsnitt. Kapitlets övergång till kapitel 3 ("Nästa steg: från strategi
till lösning") flyttad från slutet av "Dela upp problemet" till slutet av
"Analysera innan du bygger", som nu är modulens sista lärandemål. En kort
ny inledningsmening i "Återanvänd befintlig lösning" ("Ett problem som går
att överblicka... kan angripas med tre strategier") gör explicit att de tre
strategierna är alternativ för ett redan hanterbart problem, inte
konkurrenter till nedbrytningen. Passade också på att ta bort en oavsiktlig
meningsdubblering i samma lärandemål (kvarleva från begreppsbytet
strategimatris → namnlös metod tidigare samma dag).

Kapitlets sammanfattning följde redan den begärda ordningen (förstå →
formulera → avgöra delning → välja strategi → övergång) och lämnades
oförändrad. Begreppsövning och uppgiftsbank innehöll inga ordningsberoende
hänvisningar och lämnades oförändrade.

Verifierat med fullt sitebygge (rensad cache), export och export:review;
16 lärandemål, samtliga efterkontroller passerade, exporterad rubrikordning
kontrollerad manuellt mot den nya dispositionen.

**Redaktionellt beslut 2026-07-14 (kursplanetäckning, uttryckligt beslut av
projektägaren):** n1-08 (Testning och utvärdering av lösningar och resultat
utifrån flera aspekter, däribland hållbar utveckling) bytte primärkapitel
från 2 till 3, som uppföljning av att motsvarande innehåll togs bort ur
kapitel 2 samma dag (se revisionen nedan) och ska in i kapitel 3 när det
produceras. Uppdaterat i 07-kursplanetackning.md (tabellraden och
observation 2) och den maskinläsbara speglingen scripts/kursplan-data.mjs.
`berors`-listan (7, 8, 12) oförändrad. 03-bokens-arkitektur.md:s
kapitelavgränsning för kapitel 2/3 justerad i linje med detta: kapitel 2
stannar vid att välja och motivera en strategi, kapitel 3 äger att ta fram,
testa, utvärdera och förbättra en lösning. Verifierat med `npm run
validate`: n1-08 visar nu kapitel 3 som primärkapitel, konsekvent med övriga
oproducerade kapitel.

**Strukturrevision 2026-07-14 (kapitel 2 renodlat till två huvudfrågor,
ändrar 06):** kapitlet skars ned till "Vad är ett tekniskt problem?" (2.1,
oförändrad i sak) och "Att välja problemlösningsstrategi" (2.2, omdöpt från
"Problemlösningsstrategier"). Modul 2.3 Testning och utvärdering (2.3.1 Att
testa mot krav, 2.3.2 Utvärdering ur flera aspekter, 2.3.3 Från testresultat
till förbättring — begreppen testplan, hållbar utveckling, grundorsak) togs
bort ur kapitlet och flyttades **inte** in någon annanstans i detta arbete.

**INNEHÅLL SOM BÖR FLYTTAS TILL KAPITEL 3** (teknikutvecklingsprocessen,
prototyper, testning, utvärdering, iteration) **när kapitel 3:s struktur
analyseras**: de tre borttagna lärandemålens fulla text finns kvar i git-
historiken (commit före denna revision) — Euro NCAP/termosexemplet och
begreppet testplan (2.3.1), elsparkcykelexemplet och de fyra utvärderings-
aspekterna funktion/kostnad/säkerhet/hållbar utveckling (2.3.2), Galaxy Note
7-exemplet och grundorsaksanalys med "fem varför" (2.3.3). Även tre
uppgiftsbanksuppgifter (Testa mot krav, Väg lösningen på fyra vågskålar,
Gräv fram grundorsaken) och kapitlets tidigare kapstensuppgift (Äggfallet
från idé till testad lösning, som gick igenom hela bygg-testa-förbättra-
loopen) togs bort ur kapitel 2:s uppgiftsbank av samma skäl och bör
återinföras i kapitel 3:s uppgiftsbank. Figurregistrets fig-2.3.1-a,
fig-2.3.2-a och fig-2.3.3-a lämnades kvar oanvända (varning, inte fel) i
väntan på detta.

07-kursplanetackning.md rör INTE denna revision (kursplanetäckning ändras
aldrig utan uttryckligt beslut, CLAUDE.md): n1-08 anger fortfarande kapitel 2
som primärkapitel trots att inget innehåll i kapitel 2 längre taggar n1-08.
Kräver ett separat beslut när kapitel 3 tar över testning/utvärdering.

Modul 2.2 disponerad om till exakt kapitlets två huvudfrågor: 2.2.1 Bedöma
problemets karaktär (namnlös metod, ingen "strategimatris"/"valkarta";
frågan om nedbrytning kommer uttryckligen först, inte "en fjärde strategi
som kommer sist") → 2.2.2 Återanvänd befintlig lösning → 2.2.3 Pröva och
förbättra → 2.2.4 Analysera innan du bygger (omdöpt från "Systematisk
problemlösning"; byggresultat-testa-förbättra-loopen i Apollo 13-exemplet
kortad till det kontrollerade marktestet, eftersom kapitlet inte längre ska
täcka hela ta fram/testa/förbättra-processen; ny mening tillagd om att andra
strategier också kan användas systematiskt) → 2.2.5 Dela upp problemet
(omdöpt från "Dela upp i minsta beståndsdelar"; avslutas nu med en kort
övergång till kapitel 3, eftersom modul 2.3 inte längre finns). Modulmappen
bytt namn (`2.02-problemlosningsstrategier` → `2.02-att-valja-problemlosningsstrategi`).
Kapitlets sammanfattning, begreppsövning (testplan/hållbar utveckling/
grundorsak/strategimatris borttagna ur ordlistan) och uppgiftsbank omskrivna
i linje med det ovanstående.

Verifierat med fullt sitebygge (rensad cache), export och export:review; 16
lärandemål (var 19), samtliga efterkontroller passerade.

**Redaktionellt beslut 2026-07-14 (begreppsbyte, modul 2.2):** "valkarta" var
en egen konstruktion utan etablerad förlaga. Bytt till **strategimatris**
("beslutsträd" övervägdes och är i sak träffsäkrare, se resonemang i
konversationen, men "beslutsmatris" var redan upptaget av 3.4.2 Konceptval;
projektägaren valde ändå matris-formen). 2.2.1 döpt om från "Valkartan" till
"Strategimatrisen" (fil och 06 uppdaterade), begreppet och alla hänvisningar
i modul 2.2, kapitlets begreppsövning, sammanfattning och uppgiftsbank
uppdaterade. Modellen i sak oförändrad: strategimatrisen är fortfarande inte
symmetrisk (återanvänd-fältet spänner hela den välkända kolumnen), och
nedbrytning ligger fortfarande uttryckligen utanför den.

**Strukturrevision 2026-07-14 (modul 2.2, redaktionellt beslut, ändrar 06):**
modul 2.2 Problemlösningsstrategier omstrukturerad från tre till fem
lärandemål, ett per strategi, i en ny presentationsordning: 2.2.1 Valkartan
(ramverket, tidigare "Val av strategi") → 2.2.2 Återanvänd befintlig lösning
→ 2.2.3 Pröva och förbättra → 2.2.4 Systematisk problemlösning (tidigare
2.2.1) → 2.2.5 Dela upp i minsta beståndsdelar (tidigare 2.2.2, "Nedbrytning
i delproblem"). Bakgrund: valkartan visade sig vid närmare analys inte vara
en symmetrisk fyrfältare — "väl förstått" dominerar över kostnadsfrågan
(återanvänd gäller oavsett kostnad så fort problemet är välkänt), och
nedbrytning svarar på en helt annan fråga (är problemet för stort att
greppa) än de tre kostnads-/kunskapsstyrda strategierna. Fyrfältaren i ny
fig-2.2.1-a gör detta synligt: återanvänd-fältet spänner hela den välkända
kolumnen, och nedbrytning presenteras uttryckligen sist, som liggande
utanför kartan, även om den i praktiken ofta prövas först. Alla fem filer
skrivna om i sin helhet (inte bara flyttade); sakinnehållet i Apollo 13-
och Husqvarna-exemplen oförändrat, Edison/SpaceX/kardborre-exemplen
omfördelade till egna lärandemål med utökat innehåll. Figurregistret
omnumrerat i sin helhet för modulen (fig-2.2.1-a t.o.m. fig-2.2.5-a), två
nya figurer tillkom (kardborre-jämförelse, iterationscykel). 2.3.3:s
prerequisite till gamla 2.2.2 uppdaterad till nya 2.2.5. Kapitlets
sammanfattning omskriven för att följa den nya presentationsordningen.
Verifierat med fullt sitebygge (rensad cache) och export; 19 lärandemål
(tidigare 17), samtliga efterkontroller passerade.

**Redaktionellt beslut 2026-07-14 (kapitelavslutningar, gäller alla kapitel):**
tre förändringar av standardmallen, tillämpade på kapitel 1 och 2 och
normerande för alla framtida kapitel (03/12/13 uppdaterade). (1) Ny tredje
kapitelavslutningstyp `kapitelsammanfattning`: en löptext på cirka 300 ord som
binder ihop kapitlets moduler, ingen `ordlista`, inga nya fakta eller begrepp.
Ny fil `sammanfattning.md` skapad för kapitel 1 och 2. Placering beslutad
efter fråga till projektägaren: sist i kapitlet som en tredje
kapitelavslutning (inte som en kapitelingress), eftersom kapitelöversikts-
sidan är en genererad vy utan eget textfält och kapitelavslutningsmekaniken
redan fanns att återanvända. (2) Ordningen sist i kapitlet omvänd: sammanfattning,
begreppsövning, uppgiftsbank (var uppgiftsbank, begreppsövning) —
`scripts/kapitelavslutningar-data.mjs` och alla styrdokument uppdaterade. (3)
Begreppsövningens format ändrat från sammanhängande ifyllnadsövning med
numrerade luckor till en **punktlista**: ett begrepp per punkt, eleven
förklarar med en egen mening. Kapitel 1 och 2:s begreppsövningar omskrivna;
kapitel 2:s lista kompletterad med begreppet valkarta (infört i 2.2.3 men
tidigare inte med i övningen). Schema (`schemas/larandemal.schema.mjs`)
utökat med den nya typen; ingen kodändring behövdes i validate.mjs, Astro-
sidorna eller exportskripten eftersom hela kedjan redan är manifest-/typdriven.
Verifierat med fullt sitebygge.

**Redaktionell revision 2026-07-14 (kapitel 2, läsarfeedback):** kapitlet
bedömdes monotont (nästan alla lärandemål följde mönstret historiskt exempel →
teori → fördjupning → slutsats → instuderingsfrågor) och åtgärdades utan att
ändra sakinnehållet. Öppningarna varierade: 2.2.3 inleds nu direkt med teori
(ingen anekdot), 2.3.1 inleds med figuren (ifylld testplan) före löptexten,
övriga behöll sin redan spridda mix av vardagsexempel, historiska exempel och
misslyckanden. Apollo 13 i 2.2.1 kortades cirka 10-15 % utan sakförlust.
Instuderingsfrågornas antal varierat 3-7 (tidigare enhetligt 5) och kompletterat
med val-/motiveringsfrågor i alla åtta lärandemål (jämför två formuleringar,
bedöm ett scenario, motivera ett val) i stället för enbart återgivning.
Modul 2.2 disponerad om med explicita rubriker "Strategi 1 av 4" till "Strategi
4 av 4" och en tydlig fyra-strategier-utfästelse redan i 2.2.1:s öppning, så att
eleven vet tidigt att modulen har fyra strategier; strategierna 3 och 4 (pröva
och förbättra, återanvänd befintlig lösning) fick egna rubriker i 2.2.3 i
stället för att ligga ostrukturerade i ett stycke. Begreppet valkarta infört
och definierat i 2.2.3 (fanns tidigare odefinierat i uppgiftsbanken). Kapitlets
uppgiftsbank skuren från 13 till 8 uppgifter: kvarvarande uppgifter täcker vart
och ett av kapitlets åtta lärandemål (2.2.1 via äggfallets fulla process),
borttagna uppgifter var antingen redundanta med en kvarvarande uppgift (samma
förmåga övad två gånger) eller en sammanslagning av två andra kvarvarande
uppgifter. Raden "Facit finns i lärarmaterialet." borttagen ur begreppsövningarna
i kapitel 1 och 2 (facit ska inte omnämnas i elevmanuset alls, 03/12/13).

**Redaktionellt beslut 2026-07-14 (övergång kapitel 2 → kapitel 3):**
teknikutvecklingsprocessen är underordnad problemlösning, inte tvärtom —
processen är en formaliserad, industriellt strukturerad tillämpning av
problemlösning, byggd ovanpå de fyra strategierna i avsnitt 2.2. Brygga
tillagd sist i 2.3.3 (efter kapitlets sista sakinnehåll, före
Instuderingsfrågor) eftersom kapitel 3 saknar en egen ingresstext att skriva
bryggan i — kapitel-/modulsidor är genererade vyer utan fritt brödtextfält
(CLAUDE.md). När 3.1.1 (Processens faser) produceras ska den peka tillbaka på
avsnitt 2.2 explicit; kravet är noterat i 3.1.1:s platshållarkommentar.
Gränsen mellan 2.3 (Testning och utvärdering) och 3.5 (Prototyper) låst: 2.3
äger testning som princip (varför man testar, hur man värderar en lösning mot
krav — oförändrat, gäller oavsett testobjekt), 3.5 äger prototypen som
konkret verktyg (fysisk eller digital bärare av testet) och ska hänvisa
tillbaka till 2.3 i stället för att upprepa testprinciperna. 2.3.1 kompletterad
med en mening om att en prototyp kan vara testobjektet. Kraven är noterade i
3.5.1:s och 3.5.2:s platshållarkommentarer och gäller tills de lärandemålen
produceras.

**Strukturrevision 2026-07-13 (redaktionellt beslut, lärandemålsstyrd modell):**
övergång från uppslagsstyrd till lärandemålsstyrd modell. Uppslaget avskaffat som
arkitekturnivå; inga fasta antalsintervall för instuderingsfrågor. Synliga
Begrepp-block borttagna ur lärandemålen (begreppen kvar i teorin). Praktiska
uppgifter flyttade till kapitelvisa uppgiftsbanker med tre omfattningsnivåer.
Ny begreppsövning per kapitel. Kapitel 1 omstrukturerat (drivkrafter och framtid
i ny modul 1.5; kapitelrubrik "Teknikens utveckling"). Äldre uppgiftsrubriker
(Förstå/Utveckla/Utmana) och uppgiftsdelen Begrepp är därmed helt utfasade.
Fält `uppslag` och `practical_component` pensionerade.

**Strukturrevision 2026-07-10 (redaktionellt beslut):** samtliga 15 färdiga
lärandemål reviderade till dåvarande uppgiftsstruktur (Instuderingsfrågor/Begrepp/
Praktiska uppgifter), personnamn gallrade enligt 05 "Personnamn", tonen
skärpt enligt 10 "Teknik före samhälle", synliga uppslagsrubriker borttagna.
1.1.1 reviderades först, kvalitetsgranskades fullständigt mot 09 och
fastställdes därefter på nytt som Golden Master i sin reviderade form.

| Lärandemål | Status | Kvalitet mot Golden Master | Ny generell standard | Kort kommentar |
|---|---|---|---|---|
| 1.1.1 Vad är teknik? | fardig-forsta-version | Är Golden Master | — | Kvalitetsreferens per redaktionellt beslut 2026-07-10; på nytt fastställd i reviderad form efter strukturrevisionen; ändras endast efter uttryckligt beslut |
| 1.1.2 Teknik, naturvetenskap och matematik | fardig-forsta-version | Likvärdig med Golden Master | — | Första målet utan nya begrepp; Öresundsförbindelsen som röd tråd |
| 1.2.1 Tekniska genombrott före industrialiseringen | fardig-forsta-version | Likvärdig med Golden Master | — | Första fleruppslagsmålet: uppgiftsdelar per uppslag (13 preciserad); begreppet tekniskt genombrott introducerat; etiktråden (n1-14-området) invävd vid oceansjöfarten |
| 1.2.2 Teknikutvecklingens drivkrafter | fardig-forsta-version | Likvärdig med Golden Master | — | Tre drivkrafter med tre historiska fall (konserven, telegrafen, Londons avlopp) och samspelsavslut; inga nya begrepp |
| 1.3.1 Fyra industriella revolutioner | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppen teknikskifte och industriell revolution introducerade; lager-på-lager-principen bär missuppfattningarna; ASEA IRB 6 som svensk förankring |
| 1.3.2 Industrialiseringens samhällskonsekvenser | fardig-forsta-version | Likvärdig med Golden Master | — | Sverige som huvudarena (Sundsvall 1879, tändsticksfabrikerna, emigrationen); genus- och barnarbetestråden invävd; analysverktyget "vad förändrades, och för vem" |
| 1.4.1 Från transistor till AI | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppen transistor och artificiell intelligens introducerade; Moores lag som bokens första beräkningsuppgift; gräns mot kapitel 9 hålls (när/varför, inte hur) |
| 1.4.2 Digitala teknikskiften | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppet digitalisering introducerat (fördjupas i 9.5.1); mönstret "informationen lämnar bäraren"; digital utestängning bär etik-/tillgänglighetstråden; intervjuuppgift som ny uppgiftsvariation |
| 1.5.1 Att bedöma framtidens teknik | fardig-forsta-version | Likvärdig med Golden Master | — | Kapitel 1 komplett. Fyra bedömningsmönster ur kapitlets historia; dubbeltaggning n1-13 + n1-12 (berörs); falsifierbarhetskrav i Utmana; inga apokryfiska citat |
| 2.1.1 Tekniska problem | fardig-forsta-version | Likvärdig med Golden Master | — | Kapitel 2 påbörjat; n1-04 första gången. Begreppen behov och tekniskt problem introducerade (1.1.1:s medvetna skuld inlöst); Hövding som huvudexempel på problemformuleringens makt |
| 2.1.2 Problemformulering | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppen funktion, krav och begränsning introducerade; IKEA:s platta paket (Lundgren 1956); kamratgranskning som redovisningsform i Utmana |
| 2.2.1 Systematisk problemlösning | fardig-forsta-version | Likvärdig med Golden Master | — | Apollo 13:s koldioxidfilter som fall; första praktiska momentet sedan 1.1.1 (äggfallet, hela processen tillämpad); iteration som ord sparas till 3.1.2 |
| 2.2.2 Nedbrytning i delproblem | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppet delproblem introducerat; Husqvarnas robotgräsklippare 1995 som nedbrytningsfall; Mars Climate Orbiter bär skarvarnas risk; nedbrytningsträd som visuell redovisningsform |
| 2.2.3 Val av strategi | fardig-forsta-version | Likvärdig med Golden Master | — | Modul 2.2 komplett. Fyra strategier med valkarta (kostnad per försök × kunskapsläge); Edison, de Mestral och SpaceX som fall; muntligt försvar som redovisningsform |
| 2.3.1 Att testa mot krav | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppet testplan introducerat; n1-08 första gången; Euro NCAP och IP67 som standardiserade testexempel; praktiskt moment (eget test med protokoll); godkäntgräns före testet som bärande princip |
| 2.3.2 Utvärdering ur flera aspekter | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppet hållbar utveckling introducerat (Brundtlanddefinitionen); elsparkcykeln vägd på fyra vågskålar (funktion, kostnad, säkerhet, hållbar utveckling); ingen coverage-krav kvar sedan uppgiftsbanken förenklades |
| 2.3.3 Från testresultat till förbättring | fardig-forsta-version | Likvärdig med Golden Master | — | Modul 2.3 och kapitel 2 komplett (8/8). Begreppet grundorsak introducerat; Galaxy Note 7-fallet (två separata tillverkningsfel hos två leverantörer); avslutas med brygga till kapitel 3, se redaktionellt beslut 2026-07-14 nedan |
