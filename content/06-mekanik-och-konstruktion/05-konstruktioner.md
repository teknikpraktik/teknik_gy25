---
id: "6.5"
chapter: 6
sectionNumber: 5
title: Konstruktioner
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-09", "n1-10"]
  niva2: ["n2-07"]
learningGoals:
  - Förklara hur tvärsnitt och geometri påverkar en konstruktions styvhet och
    bärförmåga, med I-balken som exempel på materialeffektiv geometri.
  - Identifiera drag- och tryckbelastade delar i ett fackverk och förklara hur
    laster förs ned till stöden genom balkar, pelare, bågar och ramar.
  - Jämföra olika konstruktionsprinciper utifrån hållfasthet, vikt,
    materialåtgång, tillverkning och kostnad, och motivera ett val för ett
    givet ändamål.
abilities: [f3, f2]
concepts_introduced: ["tvärsnitt", "balk", "pelare", "fackverk", "triangulering", "båge", "ram", "skal", "stagning", "förband", "lastväg"]
concepts_used: ["kraft", "dragkraft", "tryckkraft", "böjning", "knäckning", "stödreaktion"]
figures: ["fig-6.5.1-a", "fig-6.5.2-a", "fig-6.5.3-a"]
prerequisites: ["6.1", "6.3", "6.4"]
---

## Balkar, pelare och tvärsnittets form

Två konstruktionsdelar med exakt samma mängd material kan bära helt olika stor last, beroende på hur materialet är format och placerat. Det gäller alla konstruktioner, från en gångbros balk till ett husbygges pelare, och det är utgångspunkten för det här avsnittet: hur en konstruktion är uppbyggd avgör lika mycket som vilket material den är gjord av.

En **balk** är en konstruktionsdel som huvudsakligen belastas av böjning: den vilar mellan stöd och för lasten vidare i sidled, som gångbrons körbana. En **pelare** är i stället en konstruktionsdel som huvudsakligen belastas av tryck: den för lasten rakt nedåt, som stöden under en byggnad, och riskerar knäckning om den är för slank för den last den bär.

Formen på en balks eller pelares **tvärsnitt**, det vill säga den yta som syns om detaljen skärs av rakt igenom, avgör hur styv och bärkraftig den är, oberoende av hur mycket material tvärsnittet innehåller. Vid böjning uppstår den största dragspänningen och tryckspänningen längst bort från balkens mittlinje, medan spänningen nära mittlinjen är liten. Material som placeras långt från mittlinjen bidrar därför mycket mer till att motstå böjning än material nära mittlinjen, precis som avsnitt 6.4 visade med linjalen som klarade mer stående på högkant än liggande platt.

Den insikten ligger bakom **I-balken**, en av de vanligaste balkformerna i broar, byggnader och maskiner. En I-balk koncentrerar det mesta av materialet till två breda flänsar, en upptill och en nedtill, långt från mittlinjen där de bidrar mest till böjstyvheten. Flänsarna binds samman av ett tunt liv, eftersom materialet nära mittlinjen ändå bidrar lite till böjmotståndet och kan göras tunt utan att styvheten tappas nämnvärt. Resultatet är en balk som med en given mängd material klarar betydligt större böjande last än en massiv rektangulär eller rund balk av samma vikt. Det är samma princip som förklarar varför en cykelram byggs av rör i stället för massiva stänger: ett rör placerar sitt material långt från rörets mittlinje och blir därmed betydligt styvare per kilogram material än en massiv stång.

[[figur:fig-6.5.1-a]]

## Fackverk, bågar, ramar och stagning

Ett **fackverk** är en konstruktion uppbyggd av raka stänger som sammanfogas i knutpunkter så att hela konstruktionen bildas av trianglar, en metod som kallas **triangulering**. En takstol är ett vardagsnära exempel: sneda takstolsben och en vågrät dragstång bildar tillsammans en triangel som bär taklasten till väggarna. I ett väl konstruerat fackverk belastas varje enskild stav i princip bara av rent drag eller rent tryck, aldrig av böjning, vilket gör att varje stav kan göras tunn och materialsnål jämfört med en solid balk som ska klara samma spännvidd.

Anledningen till att just trianglar används är geometrisk: en triangel är den enda formen som håller sin form utan att någon sida behöver ändra längd. En rektangulär ram däremot kan pressas snett till en parallellogram, utan att någon av de fyra sidorna ändrar längd alls, om inte hörnen är styvt sammanfogade. Det är därför rektangulära ramar, som en stege eller en byggnadsstomme, ofta förses med **stagning**: en diagonal stav eller vajer som delar rektangeln i två trianglar och därmed gör konstruktionen formstabil.

Krafterna i ett fackverk går att spåra genom att följa lastens **lastväg**, det vill säga den väg lasten tar genom konstruktionens delar från den punkt den verkar, via stavarna, till stöden och vidare ner i marken. I en takstol förs taklasten via de tryckbelastade takstolsbenen ner mot väggarna, där den till slut tas upp som en [[begrepp:stödreaktion]], medan den vågräta dragstången hindrar takstolsbenens nedre ändar från att glida isär och tar därför upp en dragkraft. I en fackverksbro växlar diagonalstavarna mellan drag och tryck beroende på var på bron lasten befinner sig, medan de övre och undre stavarna vanligen bär huvuddelen av böjningens drag- och tryckkrafter längs hela brons längd.

Två andra konstruktionsprinciper bär last på egna sätt. En **båge** är en krökt konstruktionsdel som för en vertikal last vidare huvudsakligen som tryckkraft längs sin egen krökning, ner mot stöden i bågens fötter, vilket är anledningen till att äldre stenbroar och valv kunde bära stora laster utan armering: sten tål tryck väl men drag dåligt, och en rätt formad båge belastar stenen nästan enbart i tryck. En **ram** består i stället av balkar och pelare som är styvt sammanfogade i hörnen, till skillnad från fackverkets ledade knutpunkter, vilket gör att både balkar och pelare i en ram kan behöva bära böjning, inte bara rent drag eller tryck. En byggnads stomme av pelare och bjälklag är ofta uppbyggd som en ram. Ett **skal**, som ett äggskal eller en kupol, bär i stället last genom hela sin krökta yta samtidigt, i ett tunt material, och kan därför spänna över stora ytor med förvånansvärt lite material.

Hur väl en konstruktion faktiskt fungerar avgörs till sist av dess **förband**, de punkter där stavar, balkar och pelare fogas samman genom svetsning, nitning, skruvning eller limning. Ett förband är ofta den svagaste punkten i hela konstruktionen, eftersom laster koncentreras där flera delar möts, och det är sällan materialet i en stav eller balk som brister först utan just förbandet som håller ihop den.

[[figur:fig-6.5.2-a]]

## Att välja konstruktionsprincip

Ingen av principerna ovan är bäst i alla lägen. Att välja konstruktionsprincip är en avvägning mellan flera egenskaper som sällan pekar åt samma håll: hållfasthet, vikt, materialåtgång, tillverkning, kostnad, underhåll och ibland estetik.

En gångbro över en kort sträcka byggs enklast som en massiv balkbro: få delar, enkla förband och låg tillverkningskostnad. Men eftersom en balk belastas av böjning över hela sin längd växer den böjande spänningen snabbt med spännvidden, vilket tvingar fram en allt kraftigare, tyngre och dyrare balk ju längre bron ska vara. En fackverksbro löser samma spännvidd med betydligt mindre materialåtgång, eftersom stavarna bara belastas av rent drag eller tryck och kan göras smala, men den kräver fler delar, fler förband och mer arbete att tillverka och montera. För en kort gångbro väger balkbrons enkelhet ofta tyngre än materialbesparingen; för en lång bro väger fackverkets materialbesparing ofta tyngre än den högre tillverkningskostnaden.

Valet av tvärsnitt följer samma logik. En I-balk ger hög böjstyvhet per kilogram material, vilket sparar vikt och materialkostnad, men kräver mer avancerad tillverkning än en enkel massiv balk och är känsligare för lokal knäckning i det tunna livet om den belastas fel. En rund eller fyrkantig stång är enklare och billigare att tillverka och foga samman, men väger mer för samma böjstyvhet.

Underhåll och estetik väger också in. Ett fackverk med många förband kräver mer regelbunden kontroll och underhåll än en solid balk, eftersom varje förband är en möjlig svag punkt, medan en böjd båge eller ett skal ofta upplevs som mer estetiskt tilltalande än en rak fackverkskonstruktion. Ingenjörens uppgift är sällan att hitta den objektivt bästa konstruktionsprincipen, utan att väga dessa egenskaper mot varandra utifrån vad just den aktuella konstruktionen faktiskt behöver klara.

[[figur:fig-6.5.3-a]]

## Instuderingsfrågor

1. Förklara skillnaden mellan en balk och en pelare utifrån vilken belastning de huvudsakligen bär.
2. Varför bidrar material långt från balkens mittlinje mer till böjstyvheten än material nära mittlinjen?
3. Beskriv hur en I-balk är uppbyggd, och förklara varför den formen är materialeffektiv vid böjning.
4. Varför byggs en cykelram ofta av rör i stället för massiva stänger?
5. Vad är ett fackverk, och varför belastas dess stavar normalt bara av rent drag eller rent tryck?
6. Förklara varför just trianglar används för att göra ett fackverk formstabilt.
7. En rektangulär ställning saknar diagonalstag. Förklara vad som kan hända med den, och hur stagning löser problemet.
8. I en takstol bär takstolsbenen tryck och dragstången drag. Förklara med egna ord varför, utifrån hur lasten förs genom konstruktionen.
9. Vad menas med en konstruktions lastväg?
10. Förklara skillnaden mellan hur en båge och ett skal bär last.
11. Vad skiljer en ram från ett fackverk när det gäller hur knutpunkterna är sammanfogade, och vilken konsekvens får det för hur balkarna belastas?
12. Varför är förbandet ofta den svagaste punkten i en konstruktion?
13. Jämför en balkbro och en fackverksbro för samma spännvidd utifrån materialåtgång och tillverkningskostnad. Vilken skulle du välja för en kort gångbro, och vilken för en lång bro? Motivera.
14. En pelare i en byggnad ska bära en tung last utan att knäckas. Vilka två egenskaper hos pelarens tvärsnitt och längd bör ingenjören särskilt uppmärksamma, utifrån vad du lärt dig om knäckning och tvärsnittets form?
