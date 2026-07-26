# Dokumentnamn

03-bokens-arkitektur.md

---

# Pedagogisk modell

Detta dokument definierar den pedagogiska modellen för läroboken. Modellen är normerande. Vid tveksamheter eller alternativa lösningar ska detta dokument styra utformningen av innehåll, struktur och uppgifter.

Dokumentet beskriver **hur eleven ska lära sig**, inte hur texten ska skrivas. Språkliga riktlinjer behandlas i *Författarmanualen*. Redaktionella beslut behandlas i *Redaktionsprinciperna*.

---

# Grundprincip

Bokens mål är inte att eleven ska läsa mycket.

Bokens mål är att eleven ska **lära sig mycket**.

Varje sida ska därför bidra direkt till elevens lärande. Om ett stycke, en ruta eller en sida kan tas bort utan att elevens förståelse försämras ska den tas bort.

Boken ska präglas av hög informationstäthet, tydlig struktur och ett aktivt arbetssätt där eleven arbetar nästan lika mycket som den läser.

---

# Överordnat kriterium

Bokens bärande spänning är **självstudiebar** mot **kondenserad**.

Självstudiebar: teorin är fullständig och självförklarande. En elev utan lärare ska kunna läsa sig till allt.

Kondenserad: låg ordmängd, hög informationstäthet, inget babbel.

Varje redaktionellt val prövas mot båda hållen. Svällande text och överkomprimerad text är samma misslyckande från olika håll. Kort och obegripligt är värre än långt.

Hur kriteriet ser ut i praktiken visas av projektets referensimplementation, avsnitt 1.1 (`referensimplementation-avsnitt-1-1.md`, fastställd 2026-07-22): ton, kompressionsgrad, exempelanvändning, bildplatshållare, instuderingsfrågor och övningar. Samtliga avsnitt produceras enligt samma modell.

---

# Pedagogisk filosofi

Boken bygger på följande principer.

- Explicit undervisning.
- Kort teori följd av aktiv bearbetning.
- Konkret före abstrakt.
- Självstudiebar utan att vara skriven för självstudier.
- Praktiskt arbete när det är naturligt.
- Verklighetsnära exempel.
- Konsekvent struktur genom hela boken.
- Hög informationstäthet utan onödigt språk.

Eleven ska känna att ett lärandemål är uppnått innan nästa påbörjas.

---

# Bokens struktur

Boken är uppbyggd enligt tre nivåer.

## Kapitel

Bokens högsta innehållsnivå (H1).

Exempel:

- Mekanik och konstruktion
- Programmering
- Material och deras egenskaper

---

## Avsnitt

Varje kapitel delas in i ett antal avsnitt (H2). **Avsnittet är bokens minsta producerade och publicerade enhet** — produktionsstrukturen och publiceringsstrukturen är identiska (12-produktionsarkitektur.md, "Produktionsenhet"). Rubrikhierarkin speglar aldrig intern administration: det finns ingen synlig eller teknisk nivå för "modul".

Ett avsnitt samlar **ett eller flera lärandemål** kring ett större, sammanhängande delområde och har en inre progression när det innehåller flera delar.

Avsnittsstandard (normerande):

- **H1 = kapitel, H2 = avsnitt, H3 = delavsnitt** (naturliga underrubriker inom avsnittet, används vid behov). **H4** används undantagsvis, bara när ett H3-delavsnitt verkligen behöver delas upp ytterligare.
- Ett avsnitt kan omfatta ett eller flera lärandemål och ett eller flera uppslag; antalet sidor styrs av innehållet, inte tvärtom.
- **Färre och tydligare avsnitt** prioriteras framför många tunna avsnitt eller delavsnitt.
- Ett lärandemål får **aldrig delas enbart för att fylla ut ett avsnitt**. Ett avsnitt får i stället vara långt och flöda över flera sidor (se "Sidomfång").
- Ett avsnitt med bara ett lärandemål och inga delavsnitt är tillåtet och normalt när delområdet inte har flera tydligt skilda delar.

Antalet avsnitt bestäms av kapitlets naturliga struktur och ska inte följa någon förutbestämd mall.

---

## Lärandemål

Lärandemålet är bokens minsta **pedagogiska** byggsten, men är metadata knutet till ett avsnitt, inte en egen rubriknivå, fil eller sida.

All planering utgår från lärandemålet.

Varje lärandemål ska beskriva något eleven faktiskt kan göra efter genomfört arbete.

Exempel:

- Beräkna ett moment.
- Tolka en CAD-ritning.
- Välja ett lämpligt konstruktionsmaterial.
- Skriva ett enkelt Python-program.

Lärandemål ska vara observerbara och mätbara.

Lärandemålen är ett redaktionellt verktyg (registrerade i avsnittets frontmatterfält `learningGoals`) och visas normalt inte för eleven i boken. Ett avsnitt kan ha flera lärandemål; de listas i den ordning de tränas i avsnittet.

---

## Sidomfång

Ett avsnitt har **inget fast sid- eller uppslagsomfång**. Det får flöda över så många sidor som förståelsen kräver, och det delas bara när det innehåller flera tydligt skilda delområden, aldrig enbart därför att texten blir lång.

Antalet sidor styrs av pedagogiken, aldrig tvärtom.

Uppslag och sidbrytningar är frågor för layout och tryckexport, inte nivåer i innehållsarkitekturen. "Uppslag" får aldrig användas som självreferens i elevtexten, till exempel "i det här uppslaget" eller "som du läste i uppslaget" (05-forfattarmanual.md, "Självreferenser"). Synlig rubriknumrering i elevtext och webb har alltid exakt två nivåer: kapitel, avsnitt (12-produktionsarkitektur.md, "Rubriknumrering"). Delavsnitt (H3) är onumrerade underrubriker.

---

# Avsnittets struktur

**Redaktionellt beslut 2026-07-22 (normerande för hela läromedlet, ersätter beslutet 2026-07-20).** Varje teoriavsnitt följer exakt samma mönster:

- **Löptext** (med bildplatshållare)
- **Instuderingsfrågor**
- **Övningar**

Kapitlet avslutas med avsnitt utan lärandemål, **Sammanfattning**, **Begrepp** och **Facit** (se "Kapitelavslutningar"). Det finns inga separata projektuppgiftsavsnitt, och kapitelövergripande uppgifter ingår inte i bokprojektet (se "Kapitelövergripande uppgifter").

Tidigare uppgiftsdelar används inte längre: rubrikerna Praktiska uppgifter och Projektuppgifter samt de äldre uppdelade kategorierna (Beräkningsuppgifter, Rituppgifter, CAD-uppgifter, Programmeringsuppgifter, Laborationer, Konstruktionsuppgifter, Tillämpningsuppgifter, Analysuppgifter, Tillämpningsproblem, Fördjupningsuppgifter, Kortare uppgifter, Projekt, Förstå/Utveckla/Utmana).

## Löptext

Löptexten innehåller den teori eleven behöver: löpande text, begrepp, formler, bilder, tabeller och arbetade exempel när de tillför förståelse. Alla delar är inte obligatoriska.

Konkret exempel före definition. Definitioner växer ur exemplen och står i löpande prosa, inte i rutor. Precisionen bor i kapitlets begreppslista (se "Kapitelavslutningar").

Beskrivande stoff följer bågen vardag, problem, lösning, förklaring, generalisering. Procedur- och beräkningsstoff följer i stället förklara, visa uppställt exempel, öva, och tål mindre komprimering: stryk aldrig steg.

Historiska översikts- och svepavsnitt får inom ett avgränsat undantag tillämpa hårdare komprimering än övriga avsnitt, med bibehållna konkreta ankare (05-forfattarmanual.md, "Detaljnivå i historiska översiktsavsnitt").

Ett huvudexempel per avsnitt där det är möjligt, valt ur verkliga exempelområden (02-redaktionell-specifikation.md, "Exempel"), återkommande genom resonemang, bilder, frågor och övningar.

**Ren löptext.** Manuset skrivs som löpande text. Inga rutor, faktablock, formelrutor, marginaltexter eller utbrutna exempel, oavsett stofftyp. Arbetade exempel skrivs i löptexten. Enda undantaget är bildplatshållare i formatet `[BILD X.Y-N]`. Typografisk urskiljning av formler, definitioner och exempel är förlagets formgivningsbeslut och avgörs inte i manus. Gäller även procedur- och beräkningsstoff. (Redaktionellt beslut, projektägaren.)

## Instuderingsfrågor

5–15 per avsnitt, samlade i EN sektion direkt efter löptexten. `scripts/validate.mjs` felar utanför spannet (från status `fardig-forsta-version`; låsta kapitel undantas).

Frågorna testar teknisk förståelse, inte läsförståelse: funktion, samband, begrepp, resonemang. Formuleringar som "enligt texten", "i texten" eller "vad visar figuren" är förbjudna. Frågorna ska kunna besvaras med avsnittets innehåll men prövar förståelse av tekniken, inte minne av formuleringar.

Minst en fråga per avsnitt låter eleven återge innebörden i ett av avsnittets centrala begrepp. Formen är fri ("Vad är ...", "Vad menas med ...", "Vad är skillnaden mellan ... och ...", "Förklara med egna ord ..."), men frågan ska efterfråga begreppets innebörd, inte igenkänning eller tillämpning. Frågan får vara enkel. En rak definitionsfråga räcker.

**Prioritera teknisk karaktär.** Frågorna ska i första hand pröva sådant som är tekniskt till sin karaktär: funktion, samband, orsak och verkan, beräkning och konstruktion, framför frågor av samhällsvetenskaplig karaktär. Undantaget går åt samma håll som i procedurspåret: i avsnitt vars faktiska innehåll är teknik och samhälle (kapitel 1:s samspel mellan teknik, naturvetenskap och matematik, och kapitel 13) får frågorna matcha det innehållet. Regeln är att prioritera teknisk karaktär, inte att förbjuda samhällsfrågor (redaktionellt beslut 2026-07-23).

Prioritera frågor där eleven förklarar samband, beskriver orsaker och konsekvenser, jämför, skiljer mellan närliggande begrepp eller använder kunskapen på ett nytt men enkelt exempel. Frågor av typen "vem?", "när?" och "hur många?" används bara när personen, tidpunkten eller antalet är en relevant del av ett lärandemål. Ta bort frågor som upprepar en tidigare fråga, kontrollerar en oviktig detalj eller ligger utanför avsnittets lärandemål.

En uppgift som i huvudsak går ut på att eleven **utför** något, räknar, ritar, programmerar, bygger, mäter, undersöker eller testar, hör inte hemma här utan under Övningar.

## Övningar

2–10 per avsnitt, samlade i EN sektion efter instuderingsfrågorna, i tydlig progression: identifiera, analysera, jämföra, konstruera, förbättra, eget arbete.

Övningarna är autentiska uppgifter knutna till sådant eleven känner igen, inte instängda läroboksuppgifter. En övning innebär att eleven aktivt tillämpar avsnittets innehåll; formen följer ämnet: beräkning, skiss, ritning, CAD, programmering, mätning, laboration, analys, konstruktion, digitalt arbete eller dokumentation. Formen får aldrig göras mekaniskt likformig mellan kapitel.

Varje övning har ett namn i fetstil följt av uppgiften, och numreras 1, 2, 3 …

**Formuleringsregel:** boken mäter, testar eller examinerar ingenting. Skriv "låter eleven visa". Kopplingen till betygskriterierna görs i lärarhandledningen, inte i elevtexten.

## Kapitelövergripande uppgifter

Varje avsnitts **Övningar** tränar och hänvisar bara till det egna avsnittets stoff. Boken har **inga helkapitelövningar** och inga integrerande storuppgifter som spänner över flera avsnitt (redaktionellt beslut 2026-07-24, som ersätter det tidigare kravet på en helkapitelövning per kapitel).

Kapitelövergripande uppgifter (syntesprojekt, tvärgående tillämpningar, storprojekt) **ingår inte i bokprojektet** (redaktionellt beslut 2026-07-26). De skrivs varken i elevtexten eller i något åtföljande material inom ramen för det här arbetet.

**Ingen utskriven nivåstapling i övningar.** Progressionen från E till A ligger i uppgiftens öppenhet och i betygskriteriernas kvalitetsord, inte i utskrivna delsteg i elevtexten. Formatet grunduppgift plus "Bygg ut: ..." plus "Bygg ut vidare: ..." används inte. `scripts/validate.mjs` varnar (mjukt) om "Bygg ut" står kvar i en övningssektion, som regressionsskydd.

Varje övning ska fungera fristående, med stabil information i själva instruktionen, utan hänvisningar av typen "som i figuren ovan" eller "i föregående avsnitt".

Det stora, sammanhållna projektet bor kvar som ämnesinnehåll i kapitel 11. Boken har inget nytt projektkapitel och ingen genomgående projektstruktur (se "Exempel").

## Betygskriteriernas roll

Betygskriterierna är gemensamma för ämnet som helhet. Samma kriterier tillämpas på nivå 1 och nivå 2, och progressionen ligger i kvalitetsorden, inte i skilda kriterieuppsättningar för de två nivåerna. Kriterierna har fem parallella stycken per betygsnivå, ett för var och en av de fem bedömda förmågorna (07-kursplanetackning.md, "Förmågekontroll").

**Kriterierna styr uppgiftsdesign, inte kapitelstruktur.** De är ribbor för elevprestation, inte innehållsblock. Kapitlen byggs efter ämnets struktur och kursplanens centrala innehåll, aldrig efter betygsstegen.

**Kvalitetsorden är progressionsstegen.** E motsvarar "enkel" och "i huvudsak fungerande", C "genomarbetade" och "fungerande", A "väl genomarbetade" och "väl fungerande". Samma uppgift kan därför bära både den som siktar på E och den som siktar på A, vilket också är bokens sätt att hantera blandad förkunskap i en klass.

**Progressionen skrivs inte ut i elevtexten.** Att samma uppgift bär från E till A är en egenskap hos uppgiftens öppenhet och hos kriteriernas kvalitetsord, inte något som ska stå som delsteg i boken. Formatet grunduppgift plus "Bygg ut: ..." plus "Bygg ut vidare: ..." är avskaffat och återinförs inte (se "Kapitelövergripande uppgifter", "Ingen utskriven nivåstapling i övningar"). Skriv alltså en öppen uppgift som tål att lösas på flera nivåer, inte en uppgift med utskrivna utbyggnadssteg.

**Det femte stycket motiverar kommunikationskapitlet.** Att dokumentera, visualisera och kommunicera tekniska lösningar är en bedömd förmåga i nivå med de andra fyra. Det är skälet till att boken har ett eget kapitel om teknisk kommunikation (kapitel 4) och till att varje producerande moment faktiskt ska dokumenteras.

Det finns **inget synligt Begrepp-block** efter avsnittet. Begreppsundervisningen sker i löptexten (11-begreppsfilosofi.md); kapitlets begreppslista är en uppslagsdel.

---

# Kapitlens avgränsning

Varje kapitel ska ha en tydlig ämnesmässig avgränsning mot närliggande kapitel. Ett kapitel får inte duplicera ett annat kapitels huvudansvar, och ett avsnitt får aldrig överlappa ett senare kapitels huvudansvar mer än vad en kort, motiverad förberedelse kräver.

Ett **syntesavsnitt** (ett avsnitt som knyter ihop ett kapitels innehåll) ska fungera som just en syntes eller analysmodell. Det får inte duplicera en process eller metod som är ett senare kapitels huvudansvar.

De tre inledande kapitlen avgränsas så här:

- **Kapitel 1 · Teknikens grunder** besvarar *varför*: varför teknik uppstår, varför den utvecklas i en viss riktning och varför tekniska lösningar får den utformning de får. Kapitlet behandlar vad teknik är, teknikens historiska utveckling, teknikens och samhällets historiska växelverkan, vad som driver teknikutveckling och vilka förutsättningar, krav, resurser och avvägningar som formar tekniska lösningar.
- **Kapitel 2 · Att lösa tekniska problem** besvarar *hur ett problem angrips*: hur ett tekniskt problem identifieras och formuleras, och hur en problemlösningsstrategi väljs och motiveras utifrån problemets karaktär. Kapitlet stannar vid det valet; att ta fram, testa, utvärdera och förbättra en lösning är kapitel 3:s ansvar.
- **Kapitel 3 · Teknikutvecklingsprocessen** besvarar *hur ett helt utvecklingsarbete genomförs* från behov till användning och återvinning (faser, iteration, kravspecifikation, idégenerering, konceptval, prototyper, testning, utvärdering, livscykel).

Kapitel 1 ska därför inte innehålla en egen problemlösningsmetod, en egen teknikutvecklingsprocess eller en fristående framtidsanalys. Kapitel 1:s syntes beskriver *att* och *varför* tekniska lösningar formas av behov, möjligheter, krav och avvägningar, inte *hur* ett utvecklingsarbete steg för steg genomförs.

Ytterligare fyra gränser är skrivna. Övriga kapitels gränser skrivs när respektive kapitel produceras.

- **Kapitel 3 · Teknikutvecklingsprocessen mot kapitel 8 · Modellering och simulering.** Kapitel 3 äger prototypen som *steg i utvecklingsarbetet*: varför en tidig, konkret modell byggs, och hur den används för att pröva och förbättra ett koncept innan något dyrt eller riskfyllt görs. Kapitel 8 äger modellen som *metod*: vad en modell är, vilka typer som finns, hur en modell byggs digitalt och hur man räknar, simulerar och verifierar på den. Samma prototyp kan förekomma i båda kapitlen, men kapitel 3 frågar vad den ska användas till i processen och kapitel 8 hur man arbetar med den systematiskt.
- **Kapitel 4 · Skiss, ritteknik och CAD mot kapitel 8 · Modellering och simulering.** Kapitel 4 äger att *framställa* ritningen och modellen: skiss, vyer, måttsättning, toleranser, CAD och sammanställningar. Kapitel 8 äger att *räkna och testa på* modellen. En modell som ritas upp hör till kapitel 4; samma modell som belastas, simuleras eller verifieras hör till kapitel 8. Kapitel 4 lär inte ut simulering, och kapitel 8 lär inte ut modellering som ritteknik.
- **Kapitel 7 · Mätteknik och dataanalys mot kapitel 6 och kapitel 8.** Kapitel 7 är bryggan mellan teoretisk beräkning och verifiering. Kapitel 6 räknar ut vad som *bör* hända med en konstruktion, kapitel 7 mäter vad som *faktiskt* händer och hur säkert mätvärdet är, och kapitel 8 prövar samma sak *på en modell*. Kapitel 7 äger därför storheter och enheter, val och användning av mätinstrument, mätfel och mätosäkerhet, samt insamling, sammanställning och tolkning av mätdata. Åt andra hållet: kapitel 7 lär inte ut konstruktionsberäkning, som är kapitel 6:s, och inte simulering, som är kapitel 8:s. Ett mätvärde som jämförs med ett beräknat värde hör till kapitel 7 när frågan gäller mätningens tillförlitlighet, och till kapitel 8 när frågan gäller modellens giltighet.
- **Kapitel 11 · Projekt och entreprenörskap mot kapitel 2 och kapitel 12.** Kapitel 11 äger *arbetsformen*: hur ett tekniskt projekt planeras, bemannas, genomförs, följs upp och utvärderas, och entreprenörskapets villkor. Metoderna som används inuti projektet ägs av andra kapitel och lärs inte ut på nytt: att välja och motivera en problemlösningsstrategi är kapitel 2:s ansvar, och systematiskt kvalitetsarbete, riskanalys, arbetsmiljö och miljösäkring är kapitel 12:s. Kapitel 11 tillämpar dem i ett sammanhang. Riskbegreppet delas därför: kapitel 11 behandlar **projektrisk**, alltså hot mot tid, resurser och leverans, medan kapitel 12 behandlar **teknisk riskanalys** med bedömning av sannolikhet och konsekvens för person, egendom och miljö.

---

# Skrivanvisningar per kapitel

Bokens kapitelordning är inte godtycklig, och några kapitel har skrivrestriktioner som följer av var de ligger. Anvisningarna nedan är hämtade ur projektets tidigare redaktionella specifikation och fördes in samlat 2026-07-26, eftersom den filen är avvecklad. De styr hur ett kapitel skrivs, inte vad det innehåller; innehållet står i 06-bokstruktur.md.

**Bokens ordningslogik är tredelad.** Först ämnets grunder och arbetssätt (teknikbegreppet och historiken, problemlösning, process, ritande), sedan ämnesinnehållet (material, mekanik, mätning, modellering, digitalt), sedan tillämpning och samhällsperspektiv. Ordningen är alltså inte kronologisk och följer inte kursplanens uppräkning. Ett kapitel får därför förutsätta det som ligger före i den bågen, men aldrig det som ligger efter.

**Kapitel 2 · Att lösa tekniska problem** ligger tidigt, på en plats där eleven ännu har lite att hänga upp abstraktioner på. Kapitlet ska därför bäras av ett konkret exempel som löses steg för steg, så att det inte blir abstrakt metateori. Problemlösning lärs ut explicit, inte problembaserat: eleven ska inte behöva lösa ett problem för att upptäcka metoden.

**Kapitel 3 · Teknikutvecklingsprocessen** rör vid tillverkning som en del av produktsteget i processkedjan. Tillverkning är inget eget bärande stoff i boken, utan vävs in där det obligatoriska innehållet kräver det (02-redaktionell-specifikation.md, "Exempelområden").

**Kapitel 4 · Skiss, ritteknik och CAD** ligger tidigt eftersom ritande och dokumentation är basfärdigheter som bär resten av boken. Det får en direkt följd för skrivandet: kapitlets egna exempel hålls enkla och vardagliga, eftersom eleven ännu inte mött konstruktion eller material. Ett exempel som förutsätter hållfasthet eller materialval hör inte hemma här, hur naturligt det än känns för en ingenjör.

**Kapitel 6 · Mekanik och konstruktion** måste ha mekaniken utskriven, inte underförstådd. Man kan inte räkna på en konstruktion utan den, och den självstuderande eleven har ingen lärare som fyller luckan. Kapitlet är procedurtätt och bärs av uppställda exempel och bild snarare än av prosa; det tål mindre komprimering än beskrivande stoff och inga steg får strykas (05-forfattarmanual.md, "Variera kompressionsgraden efter stoffet").

**Kapitel 13 · Teknik, människa och samhälle** ligger sist därför att det värderande stoffet kräver att eleven först har tekniska lösningar att värdera. Kapitlet får förutsätta hela bokens innehåll, och boken får därmed en båge från teknikens grunder till teknikens framtid.

---

# Kapitelavslutningar

Varje färdigproducerat kapitel avslutas med onumrerade avsnitt, i denna ordning: **Sammanfattning**, **Begrepp**, **Facit**. De är egna innehållstyper, inte lärandemål (12-produktionsarkitektur.md, "Kapitelavslutningar"). Sammanfattning och Begrepp är obligatoriska. Facit är en tredje, valfri kapitelavslutning som läggs till när kapitlets övningar är klara (se "Facit").

## Sammanfattning

Kort löpande text, inte punktlista, som låter eleven repetera hela kapitlet på några minuter (riktmärke cirka 300 ord). Sammanfattningen är **repetition**, inte en ny genomgång: den upprepar inga instuderingsfrågor och inför inga nya fakta eller begrepp. Den skrivs sist, när kapitlets avsnitt är färdiga, så att den kan spegla den faktiska texten.

## Begrepp

Kapitlets begrepp med färdiga definitioner, max ungefär en mening per begrepp. Listan är en **uppslagsfunktion**: eleven fyller inte i något här, och begreppsförståelse tränas i instuderingsfrågorna, inte i listan. Precisionen i definitionerna bor här; i löptexten växer definitionerna ur exemplen och står i prosa.

**Format (obligatoriskt, redaktionellt beslut 2026-07-22).** Begreppslistan skrivs som en kompakt ordlista, ett begrepp per rad, **utan punktmarkering**. Varje post har formen `**Begrepp:** Definition.`: begreppet i fetstil med kolon direkt efter (kolonet inom fetstilen), sedan ett mellanslag och definitionen. Begreppet inleds med versal. Definitionen är en fullständig mening som inleds med versal och avslutas med punkt. **Inga tankstreck eller bindestreck** som avskiljare mellan begrepp och definition. Posterna skrivs en per rad. Radavstånd och vertikal rytm är en formgivningsfråga och regleras inte här. Källformat:

```
**Automation:** Att låta maskiner utföra och styra ett arbete med liten mänsklig inblandning.
**Avvägning:** Ett val mellan krav där mer av det ena innebär mindre av det andra.
```

Begrepp som kursiveras vid sitt huvudställe i löptexten (05, "Begreppsmarkering") är **fetstilta** i begreppslistan. `scripts/validate.mjs` felar på punktlista, tankstreck, ofetstilat begrepp eller definition utan avslutande punkt i en begreppslista.

Varje begrepp i listan ska ha sitt huvudställe i eller före kapitlet (`concepts_introduced`, 12-produktionsarkitektur.md). Listan inför aldrig nya begrepp.

Det finns inga projektuppgiftsavsnitt, och kapitelövergripande uppgifter ingår inte i bokprojektet (se "Kapitelövergripande uppgifter").

---

# Facit

Facit är bokens sista kapitel (redaktionellt beslut, projektägaren). Det följer av att boken ska kunna läsas utan lärare. Eleven måste kunna kontrollera sitt eget svar. Elevfacit är publikt läsbart, medan bedömningsstöd och betygsunderlag ligger utanför boken (12-produktionsarkitektur.md, "Facit").

**Lagring och läsordning.** Facit **lagras per kapitel** som kapitlets tredje kapitelavslutning (`type: facit`, efter Sammanfattning och Begrepp) och sätts ihop till ett samlat facit sist i boken av exporten. Läsaren möter alltså ett facit sist, medan källfilen ligger hos sitt kapitel och skrivs, committas och låses tillsammans med det.

**Disposition.** Facit följer boken kapitel för kapitel och avsnitt för avsnitt. Under varje avsnitt står två delar, Instuderingsfrågor och Övningar, i samma numrering som i avsnittet. Någon egen referenssyntax behövs därför inte.

**Räkneuppgifter** får slutsvar med enhet, avrundat till tre värdesiffror om inte uppgiften säger annat. Ett flerstegssvar redovisar varje beräknad storhet i ordning. Lösningsgången ges inte i facit, den bor i avsnittets arbetade exempel.

**Instuderingsfrågor** får ett kort svar, en till tre meningar.

**Utan svar** lämnas, och tas inte upp i facittexten alls, uppgifter där eleven väljer eget föremål eller eget område, gör egna mätningar, intervjuar någon eller skissar en egen lösning, samt uppgifter som ber om en motivering, bedömning eller jämförelse utan bestämt svar. De registreras däremot i facitfilens frontmatterfält `utanSvar` på formen `"<avsnitts-id>:<nummer>"`, så att en medvetet öppen uppgift går att skilja från en glömd. Fältet syns inte för eleven.

**Kontroll.** Varje räkneuppgift ska räknas igenom innan den publiceras. Kontrollen är samtidigt det som avslöjar uppgifter med obestämbar eller orimlig indata. `scripts/validate.mjs` kontrollerar dessutom täckningen maskinellt: varje numrerad instuderingsfråga och övning i kapitlet ska antingen ha ett svar i facit eller stå i `utanSvar`, och ett svar utan motsvarande uppgift flaggas. Hård regel från status `fardig-forsta-version`; dessförinnan rapporteras hur långt facit har kommit.

---

# Praktiskt arbete

Praktisk träning är central (10-amnesfilosofi.md, "Teknik är praktiskt") och säkras genom avsnittets Övningar, som tränar det egna avsnittets stoff. Ett avsnitt utan meningsfull praktisk tillämpning får ha få och enkla övningar; övningar skapas aldrig enbart för symmetrins skull, men varje avsnitt har minst två.

Hör ett praktiskt moment naturligt hemma i ett enskilt avsnitt läggs det bland avsnittets övningar. Är det stort nog att integrera flera avsnitt ingår det inte i bokprojektet. Praktiska övningar prioriteras framför motsvarande teoretiska uppgifter när båda tränar samma förmåga.

---

# Bilder

Bilder ska undervisa: förklara samband, visualisera system, visa processer eller jämföra lösningar. Varje större avsnitt innehåller sådana bilder. Inga dekorationsbilder; kapitelöppnarbilder är förlagets formgivningsbeslut, inte manusets.

Grundregeln är:

> Om något kan förklaras bättre med en bild än med text ska en bild användas.

Platshållarformat i manus: `[BILD X.Y-N]` följt av **Innehåll** (vad bilden ska visa och varför) och **Bildtext** (färdigformulerad), som i referensimplementationen 1.1.

Bild och text använder samma exempel. Handlar texten om Öresundsförbindelsen visar bilden Öresundsförbindelsen.

När en bild övertar informationsbärande kortas motsvarande prosa. En bild som dubblerar texten har inte avlastat den.

Förlaget ansvarar för den slutliga grafiska utformningen; manuset innehåller endast platshållare.

---

# Exempel

Exempel ska hämtas från verkligheten.

Fiktiva företag, produkter eller scenarier används inte om ett verkligt exempel fungerar lika bra.

Exempel varieras genom boken.

Alla exempel är **utbytbara**: ett exempel ska kunna ersättas av ett likvärdigt verkligt exempel utan att avsnittets struktur, resonemang eller uppgifter behöver göras om (02-redaktionell-specifikation.md, "Exempel").

Boken bygger inte på ett genomgående projekt eller en återkommande huvudprodukt.

---

# AI

AI används som ett naturligt verktyg inom de teknikområden där det tillför ett verkligt värde.

AI används inte för att uppfylla ett kvantitativt mål.

Om AI inte förbättrar elevens lärande ska det inte förekomma.

När AI används ska det spegla hur tekniker och ingenjörer faktiskt använder AI i arbetslivet.

---

# Lärarens roll

Boken ska fungera både i lärarledd undervisning och vid självstudier.

Läraren avgör:

- ordningsföljd
- urval
- fördjupning
- undervisningsform

Boken försöker inte styra lärarens didaktiska beslut.

---

# Elevens arbete

Eleven arbetar huvudsakligen i ett separat häfte eller digitalt dokument.

Boken är därför inte utformad som en arbetsbok.

Tyngdpunkten ligger på individuellt arbete.

Samarbetsuppgifter används endast när de ger ett tydligt pedagogiskt mervärde.

---

# Avgränsningar

Boken innehåller inte:

- sammanfattningar efter varje avsnitt
- repetitionskapitel
- motiverande texter
- onödiga introduktioner
- utfyllnad
- artificiella berättelser
- snabbspår eller separata fördjupningsspår

Allt innehåll ska motiveras av ett tydligt lärandemål.

---

# Kvalitetskriterier

Ett avsnitt är färdigt först när:

- löptexten är självstudiebar och kondenserad (se "Överordnat kriterium")
- alla fakta är korrekta
- undervisande bilder finns specificerade i `[BILD]`-format där de förbättrar förståelsen
- avsnittet avslutas med en samlad sektion instuderingsfrågor (5–15) och en samlad sektion övningar (2–10) som tillsammans tränar avsnittets lärandemål
- nya begrepp introduceras i kursiv, definieras i prosa och används korrekt i löptexten
- AI används endast där det tillför verkligt värde
- verkliga exempel används
- eleven rimligen kan uppnå avsnittets lärandemål utan ytterligare teori
- kvaliteten motsvarar referensimplementationen 1.1

Ett kapitel är färdigt först när det avslutas med en sammanfattning i löpande text och en begreppslista med färdiga definitioner som täcker kapitlets centrala begrepp.