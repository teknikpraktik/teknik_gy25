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
concepts_introduced: ["balk", "fackverk", "lastväg"]
concepts_used: ["kraft", "dragkraft", "tryckkraft", "böjning", "skjuvning", "knäckning", "stödreaktion", "moment"]
figures: ["fig-6.5.1-a", "fig-6.5.2-a", "fig-6.5.2-b", "fig-6.5.3-a"]
prerequisites: ["6.1", "6.3", "6.4"]
---

## Balkar, pelare och tvärsnittets form

Två konstruktionsdelar med exakt samma mängd material kan bära helt olika stor last, beroende på hur materialet är format och placerat. Det gäller allt från gångbrons balk till ett husbygges pelare.

En *balk* är en konstruktionsdel som huvudsakligen belastas av böjning. Den vilar mellan stöd och för lasten vidare i sidled, som gångbrons körbana. En pelare är en konstruktionsdel som huvudsakligen belastas av tryck. Den för lasten rakt nedåt, som stöden under en byggnad, och riskerar knäckning om den är för slank för sin last.

Formen på ett tvärsnitt, den yta som syns om detaljen skärs av rakt igenom, avgör hur styv och bärkraftig detaljen är, och inte bara hur mycket material tvärsnittet innehåller. Vid böjning uppstår den största dragspänningen och tryckspänningen längst bort från balkens mitt, medan spänningen är liten i det område som skiljer dragzonen från tryckzonen. Det området kallas balkens neutralaxel, och där byter spänningen tecken och är därför nära noll. Material som placeras långt från neutralaxeln bidrar mycket mer till böjstyvheten än material nära den, precis som linjalen som klarar mer på högkant än platt.

Den insikten ligger bakom I-balken, en av de vanligaste balkformerna i broar, byggnader och maskiner. En I-balk delar upp arbetet mellan sina delar. De två breda flänsarna, en upptill och en nedtill, ligger längst från neutralaxeln och tar därför huvuddelen av de drag- och tryckspänningar som böjningen ger. Den undre flänsen dras och den övre trycks när balken belastas uppifrån. Livet, den tunna skivan mellan dem, har två uppgifter. Den håller flänsarna på plats på behörigt avstånd från varandra, vilket är själva förutsättningen för böjstyvheten, och den tar upp huvuddelen av den [[begrepp:skjuvning]] som uppstår när lasten förs längs balken mot stöden. Eftersom livet sitter nära neutralaxeln behöver det inte vara tjockt för böjningens skull, och resultatet blir en balk som med en given mängd material klarar betydligt större böjande last än en massiv balk av samma vikt.

Samma resonemang förklarar varför en cykelram byggs av rör. Ett rör placerar sitt material långt från centrum och ger därför hög böj- och vridstyvhet i förhållande till sin vikt. Formuleringen är viktig, för påståendet att ett rör är styvare än en massiv stång är inte sant utan tillägget. En massiv stång med samma ytterdiameter innehåller allt det material röret har, plus materialet i mitten, och är därför styvare. Den väger också betydligt mer. Röret vinner när vikten eller materialåtgången spelar roll, alltså i en cykelram, ett flygplan eller en byggnadsställning, och det är nästan alltid fallet i verklig konstruktion. Materialet i mitten av en massiv stång bidrar lite till böjstyvheten men allt till vikten.

[BILD 6.5-1] Innehåll: Tre delbilder. Vänster: ett I-balkstvärsnitt med flänsarna och livet utmärkta med namn, neutralaxeln inritad som en streckad linje genom livets mitt, och spänningsfördelningen ritad som en triangulär fördelning intill tvärsnittet: största tryckspänning i övre flänsen, största dragspänning i undre flänsen, noll vid neutralaxeln. Två textnotiser pekar ut att flänsarna tar huvuddelen av drag- och tryckspänningen och att livet håller flänsarna åtskilda och överför huvuddelen av skjuvkraften. Mitten: en massiv rektangulär balk med samma materialmängd som I-balken, med samma spänningsfördelning inritad, så att det framgår hur mycket av materialet som sitter nära neutralaxeln och bidrar lite. Höger: ett rör och en massiv rundstång med samma ytterdiameter, sedda i tvärsnitt, med vikt per meter angiven för båda och en text som slår fast att den massiva stången är styvare men tyngre, medan röret ger mest styvhet per kilogram. Bildtext: "Material långt från neutralaxeln bär mest böjning. Ett rör är styvast per kilogram, en massiv stång styvast men tyngst."

## Fackverk, bågar, ramar och stagning

Ett *fackverk* är en konstruktion av raka stänger som sammanfogas i knutpunkter så att hela konstruktionen byggs upp av trianglar, en metod som kallas triangulering. En takstol är ett vardagsnära exempel, där sneda takstolsben och en vågrät dragstång bildar en triangel som bär taklasten till väggarna.

Anledningen till att just trianglar används är geometrisk. En triangel är den enda formen som håller sin form utan att någon sida behöver ändra längd. En rektangulär ram kan däremot pressas snett till en parallellogram utan att någon av sidorna ändrar längd alls, om inte hörnen är styvt sammanfogade. Det är därför rektangulära konstruktioner, som en byggnadsställning eller en byggnadsstomme, förses med stagning: en diagonal stav eller vajer som delar rektangeln i två trianglar och gör konstruktionen formstabil.

I ett fackverk sägs varje stav bära rent drag eller rent tryck, aldrig böjning, och det är därför staven kan göras smal. Det är sant, men bara i en idealiserad modell, och den modellen bygger på fyra antaganden: stavarna är raka, knutpunkterna betraktas som leder som kan vrida sig fritt, alla laster förs in i knutpunkterna, och stavarnas egen tyngd försummas. Under de antagandena kan en stav bara dras eller tryckas i sin längdriktning.

Verkliga fackverk uppfyller inte antagandena helt. Knutpunkterna svetsas eller skruvas och blir därmed delvis styva, stavarnas centrumlinjer möts inte alltid exakt i en punkt, och en last kan hamna mitt på en stav i stället för i en knutpunkt. Varje sådan avvikelse ger böjning i staven utöver drag eller tryck. Modellen är fortfarande användbar och används av konstruktörer varje dag, men den ger huvudkrafterna, inte hela sanningen.

Krafterna i ett fackverk går att spåra genom att följa lastens *lastväg*, den väg lasten tar genom konstruktionens delar från angreppspunkten, via stavarna, till stöden och vidare ner i marken. I en takstol förs taklasten via de tryckbelastade takstolsbenen ner mot väggarna, där den tas upp som en [[begrepp:stödreaktion]], medan den vågräta dragstången hindrar benens nedre ändar från att glida isär och därför tar upp en dragkraft. I en fackverksbro växlar diagonalstavarna mellan drag och tryck beroende på var lasten befinner sig, medan de övre och undre stavarna bär huvuddelen av böjningens tryck- respektive dragkrafter längs brons längd.

[BILD 6.5-2] Innehåll: Två delbilder. Vänster: en takstol med sneda ben i tryck och en vågrät dragstång i drag, markerade med olika färg eller mönster, och taklasten och stödreaktionerna vid väggarna inritade. Höger: en fackverksbro i genomskärning med diagonalstavar markerade som drag respektive tryck beroende på position, och lastvägen från körbanan till stöden markerad med pilar genom konstruktionen. Bildtext: "I ett fackverk bärs lasten av stavar i rent drag eller tryck, längs en spårbar lastväg till stöden."

En båge är en krökt konstruktionsdel som för en lodrät last vidare huvudsakligen som tryckkraft längs sin egen krökning, ner mot bågens fötter. Det är anledningen till att äldre stenbroar och valv kunde bära stora laster utan armering. Sten tål tryck väl men drag dåligt, och en rätt formad båge belastar stenen nästan enbart i tryck.

Tryckkraften följer emellertid bågens lutning, och nere vid foten lutar bågen kraftigt. Kraften som bågen levererar till sitt upplag är därför inte lodrät utan sned, och den har en betydande vågrät komposant. Bågen strävar helt enkelt efter att sparka ut sina fötter åt sidorna. Ett bågupplag måste alltså kunna ta upp både en lodrät och en vågrät kraft, och kan det inte marken göra måste konstruktionen lösa det själv. I en stenbro tas den vågräta kraften upp av tunga landfästen och av berget bakom dem, och i en takstol av dragstången mellan takstolsbenens fötter. Ett bågupplag som inte klarar den vågräta kraften glider isär, och bågen rasar.

[BILD 6.5-3] Innehåll: En stenvalvbro i genomskärning med en lodrät last ovanifrån. Tryckkraften ritas som en kedja av pilar som följer bågens krökning ner mot fötterna, där pilarna successivt lutar mer. Vid vardera foten delas upplagskraften upp i sina komposanter: en lodrät och en tydligt utmärkt vågrät, riktad utåt från bron, märkt "bågen strävar efter att sparka ut fötterna". De tunga landfästena och berget bakom dem ritas in som det som tar upp den vågräta kraften. En mindre delbild bredvid visar en takstol med samma sak löst på ett annat sätt: dragstången mellan takstolsbenens fötter markeras med en dragpil som balanserar den vågräta kraften. En tredje, liten delbild visar vad som händer när upplaget inte klarar kraften: fötterna glider isär och bågen sjunker ihop. Bildtext: "En båge för lasten som tryck ner till fötterna, men sparkar samtidigt utåt. Upplaget måste ta upp den vågräta kraften."

En ram består i stället av balkar och pelare som är styvt sammanfogade i hörnen, till skillnad från fackverkets ledade knutpunkter. Det gör att både balkar och pelare i en ram kan behöva bära böjning, inte bara rent drag eller tryck, men det ger också ramen formstabilitet utan diagonalstag. En byggnads stomme av pelare och bjälklag är ofta uppbyggd som en ram.

Hur väl en konstruktion fungerar avgörs till sist av dess förband, de punkter där stavar, balkar och pelare fogas samman genom svetsning, nitning, skruvning eller limning. Förband är ofta kritiska, eftersom krafter överförs och ibland koncentreras just där flera delar möts. Det betyder inte att förbandet alltid är svagast. Ett väl utfört förband kan mycket väl vara starkare än de delar det binder ihop. Däremot finns det fler sätt för ett förband att svikta än för en rak stav. Skruven kan gå av eller skjuvas, niten kan förlora sin klämkraft, svetsen kan spricka i sig själv eller i övergången mot grundmaterialet, limfogen kan släppa från ytan, och materialet runt ett skruvhål kan bli överbelastat i hålkanten så att hålet drar ut sig till ett långhål. Det är därför förband kontrolleras särskilt noga vid både konstruktion och besiktning.

## Att välja konstruktionsprincip

Ingen av principerna ovan är bäst i alla lägen. Att välja konstruktionsprincip är en avvägning mellan egenskaper som sällan pekar åt samma håll: hållfasthet, vikt, materialåtgång, tillverkning, kostnad, underhåll och ibland utseende.

En gångbro över en kort sträcka byggs enklast som en balkbro: få delar, enkla förband och låg tillverkningskostnad. Men en balk belastas av böjning över hela sin längd, och böjningen växer snabbt med spännvidden, vilket tvingar fram en allt kraftigare, tyngre och dyrare balk ju längre bron ska vara. En fackverksbro klarar samma spännvidd med betydligt mindre material, eftersom stavarna huvudsakligen belastas av drag eller tryck och kan göras smala, men den kräver fler delar, fler förband och mer arbete att tillverka och montera. För en kort gångbro väger balkbrons enkelhet ofta tyngre än materialbesparingen. För en lång bro är det tvärtom.

Valet av tvärsnitt följer samma logik. En I-balk ger hög böjstyvhet per kilogram, vilket sparar vikt och materialkostnad, men den kräver mer avancerad tillverkning än en massiv balk och det tunna livet kan bukla lokalt om balken belastas på ett sätt konstruktören inte räknat med. En rund eller fyrkantig stång är enklare och billigare att tillverka och foga samman, men väger mer för samma styvhet.

Underhåll väger också in. Ett fackverk med många förband kräver mer regelbunden kontroll än en solid balk, eftersom varje förband är en punkt som måste hålla. En konstruktörs uppgift är sällan att hitta den objektivt bästa principen, utan att väga egenskaperna mot varandra utifrån vad just den här konstruktionen faktiskt ska klara, och att kunna motivera valet efteråt.

[BILD 6.5-4] Innehåll: En balkbro och en fackverksbro ritade sida vid sida över samma spännvidd, med ungefärlig materialmängd och antal förband angivet för respektive lösning. En liten tabell eller ikonrad under bilderna sammanfattar hållfasthet, vikt, materialåtgång, tillverkning och kostnad för de två alternativen. Bildtext: "Valet av konstruktionsprincip är en avvägning mellan hållfasthet, vikt, materialåtgång, tillverkning och kostnad."

## Instuderingsfrågor

1. Vad är en balks neutralaxel, och varför bidrar material långt från den mer till böjstyvheten än material nära den?
2. Beskriv arbetsfördelningen mellan flänsarna och livet i en I-balk. Vilka två uppgifter har livet?
3. Ett rör sägs ofta vara styvare än en massiv stång. Under vilken förutsättning stämmer påståendet, och när stämmer det inte? Förklara med hänvisning till var materialet sitter.
4. Fackverksmodellen bygger på fyra antaganden. Räkna upp dem, och förklara vad som händer i en verklig stav när ett av antagandena inte är uppfyllt.
5. Varför måste ett bågupplag kunna ta upp en vågrät kraft, och hur löses det i en stenbro respektive i en takstol?
6. Varför är formuleringen "förbandet är konstruktionens svagaste punkt" missvisande? Ge tre olika sätt ett förband kan svikta på.
7. En byggnadsställning är uppbyggd av rektanglar utan diagonalstag. Beskriv vad som händer när den belastas i sidled, och hur stagning löser problemet.
8. Följ lastvägen för en snöhög som ligger mitt på ett tak. Beskriv vilka delar lasten passerar, i vilken ordning, och om varje del belastas av drag, tryck eller böjning, tills lasten når marken.
9. En gångbro ska byggas över en 30 m bred ravin. Jämför en fackverksbro och en bågbro för uppdraget. Redogör för hur lasten förs till marken i respektive lösning, vilka krafter markens fästen måste klara i de två fallen, och vilken av lösningarna som ställer högst krav på berggrunden vid ravinens kanter. Ange vilken du skulle välja om berget är fast, och vilken du skulle välja om marken är lös lera, och motivera båda valen.

## Övningar

1. En massiv rundstång har diametern 40 mm. Ett rör har samma ytterdiameter, 40 mm, och väggtjockleken 4,0 mm. Beräkna båda tvärsnittsareorna och avgör hur många procent av den massiva stångens material röret använder.
2. En takstol spänner 10,0 m mellan två upplag. Egentyngden 4000 N verkar i mitten, och en snölast på 6000 N ligger samlad 3,0 m från upplag A. Beräkna upplagskrafterna, och kontrollera svaret genom att räkna momentsumman kring det andra upplaget.
3. En pelare i ett förråd ska bära den centriska tryckkraften 120 000 N. Två profiler av samma stål övervägs: en massiv fyrkantstång med sidan 60 mm, och ett fyrkantrör med yttermåttet 100 mm och väggtjockleken 5,0 mm. Beräkna tvärsnittsarean och tryckspänningen för båda alternativen, och avgör hur många procent av den massiva stångens material röret använder. Röret får den högre spänningen men väljs ändå i den här typen av konstruktion: förklara varför, utifrån var materialet sitter i tvärsnittet. Ange slutligen vilken brottform den här beräkningen inte säger något om, och varför den saknas trots att den kan bli avgörande för en slank pelare.
