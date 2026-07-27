---
id: "4.4"
chapter: 4
sectionNumber: 4
title: CAD
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-16"]
  niva2: ["n2-13"]
learningGoals:
  - Förklara vad CAD är och hur parametrisk modellering bygger på skisser, mått
    och villkor.
  - Skapa en 3D-modell av en enkel detalj i ett CAD-program.
  - Sätta samman flera detaljer till en sammanställning i CAD och förklara hur
    delarna förhåller sig till varandra.
abilities: [f5]
concepts_introduced: ["CAD", "parametrisk modellering", "villkor", "sammanställning"]
concepts_used: ["ritning", "vy", "skiss"]
figures: []
prerequisites: ["4.3"]
---

## CAD och parametrisk modellering

Den som ritat mobilhållaren för hand och sedan får veta att bottenplattan ska vara 100 millimeter bred i stället för 80 har ett par timmars arbete framför sig. Alla tre vyerna ska ritas om, måtten flyttas och spårets läge räknas om. *CAD*, datorstödd konstruktion, ändrar den ekvationen. Där finns en modell av föremålet, och ritningarna hämtas ur modellen. Ändras bredden i modellen följer vyerna med av sig själva.

Modellen är alltså originalet, och ritningen är en avbildning av den. Samma modell kan dessutom användas till mer än ritningar. Den kan skickas till en 3D-skrivare, ligga till grund för programmet i en fräsmaskin och användas för att räkna på hur delen beter sig innan något tillverkas.

*Parametrisk modellering* betyder att modellen byggs av mått och villkor som går att ändra i efterhand, varefter geometrin räknas om. Arbetet börjar nästan alltid med en tvådimensionell skiss som binds fast med två sorters bestämningar. Ett *villkor* är ett geometriskt förhållande som programmet håller fast, till exempel att två linjer ska vara parallella, vinkelräta eller lika långa, att en linje ska vara vågrät, eller att en cirkel ska ligga koncentriskt med en annan. Måtten är den andra sorten och anger avstånd, längder, diametrar och vinklar.

När villkoren och måtten tillsammans låser varje punkt i skissen är den fullt bestämd. En underbestämd skiss går att dra i, och det som gick att dra i kommer förr eller senare att flytta sig när något annat ändras. Programmet visar oftast med färg vad som ännu är fritt, och den som lämnar en skiss halvbestämd får räkna med att modellen ändrar form av sig själv längre fram.

Vilka villkor som väljs är ett beslut om hur modellen ska bete sig vid ändring. Ska hålet alltid sitta mitt på plattan kan det bindas symmetriskt mot plattans två kanter i stället för att måttsättas till 40 millimeter från vänsterkanten. Båda ger samma modell i dag. Skillnaden märks när plattan blir 100 millimeter bred, för då hamnar det symmetriskt bundna hålet fortfarande i mitten medan det måttsatta hålet ligger kvar 40 millimeter från kanten. Att bygga in avsikten i villkoren är den vana som mest skiljer en snabb modellör från en långsam.

Programmen skiljer sig i menyer men inte i grundidé. I skolan och i industrin används parametriska program som Fusion 360, Onshape, SolidWorks, Inventor och det fria FreeCAD, medan enklare verktyg som Tinkercad bygger med färdiga kroppar utan villkorsstyrda skisser. Den som lärt sig arbetsgången i ett parametriskt program hittar snabbt rätt i ett annat, eftersom skiss, villkor, mått och operationer heter ungefär detsamma överallt.

[BILD 4.4-1] Innehåll: Samma skiss av mobilhållarens bottenplatta visad två gånger. Till vänster en underbestämd skiss där två hörn är markerade som fria och en pil visar att kanten går att dra i. Till höger samma skiss fullt bestämd, med symbolerna för vinkelrät, parallell och symmetrisk utsatta vid respektive linje och med tre mått ifyllda. Under de två skisserna samma platta ändrad till 100 millimeters bredd, där det symmetriskt bundna hålet ligger kvar i mitten medan det måttsatta hålet ligger kvar 40 millimeter från vänsterkanten. Bildtext: "Villkoren avgör hur modellen beter sig när måtten ändras. Det symmetriska hålet flyttar med, det måttsatta står kvar."

## Modellera en detalj

Arbetsgången är densamma i alla parametriska program. Välj det plan skissen ska ligga i. Skissa profilen enkelt, med så få linjer som möjligt. Sätt villkor först och mått sedan, tills skissen är fullt bestämd. Dra ut skissen till en kropp med en bestämd tjocklek. Bygg vidare genom att skissa på en av kroppens ytor och antingen lägga till material eller ta bort det. Avsluta med avrundningar och fasningar.

Mobilhållaren byggs på fem steg. Bottenplattans profil skissas som en rektangel på 80 gånger 60 millimeter och dras ut till 8 millimeters tjocklek. Ryggen skissas på plattans kortsida som en profil med 65 graders lutning och dras ut i plattans bredd. Kabelspåret skissas på ryggens framsida som en rektangel på 12 millimeters bredd och tas bort genom hela ryggen. Skruvhålet skissas koncentriskt mot ryggens övre del och tas bort med diametern 4,5 millimeter. Sist läggs avrundningar med radien 3 millimeter på de yttre hörnen.

Varje steg sparas i modellens historik, en ordnad lista över alla operationer i den ordning de utfördes. Historiken är det som gör modellen ändringsbar. En ändring görs inte genom att rita om något utan genom att gå tillbaka till rätt steg och ändra måttet där, varefter alla senare steg räknas om. Ordningen spelar därför roll. Läggs avrundningarna tidigt kan en senare urtagning hamna i en rundad yta som inte längre är plan, och då blir skissen omöjlig att placera.

Några vanor sparar mycket tid. Skissa hellre flera enkla skisser än en enda komplicerad, eftersom en trasig komplicerad skiss tar ner allt som byggts efter den. Namnge de operationer som betyder något, så att historiken går att läsa om ett halvår. Undvik att bygga en skiss på en yta som kan komma att försvinna vid en ändring, och lägg avrundningar och fasningar sist.

[BILD 4.4-2] Innehåll: Mobilhållaren i fem steg från vänster till höger: rektangulär profil utdragen till bottenplatta, ryggen tillagd i 65 graders lutning, kabelspåret borttaget genom ryggen, skruvhålet borttaget, och avrundningarna lagda på de yttre hörnen. Till höger om de fem stegen modellens historik som en lodrät lista med samma fem operationer i ordning, där steget för ryggens lutning är markerat som det man går tillbaka till vid en ändring. Bildtext: "Modellen är en ordnad följd av operationer. Ändringen görs i historiken, inte i den färdiga formen."

## Sammanställningar

De flesta produkter består av mer än en detalj. En *sammanställning* är en modell där flera detaljer förts samman och deras inbördes lägen bestämts. Detaljerna ligger kvar som egna modeller, och sammanställningen håller reda på hur de sitter i förhållande till varandra.

Lägena bestäms med samma sorts villkor som i skissen, fast mellan kroppar. Två ytor kan bindas så att de ligger an mot varandra, två hål så att de blir koncentriska, två delar så att de står i en bestämd vinkel eller på ett bestämt avstånd. Varje villkor låser en rörelsemöjlighet. En detalj som ska sitta helt fast binds tills ingen rörelse återstår, medan en detalj som ska kunna vridas lämnas med den rörelsen kvar, så att sammanställningen går att pröva genom att vrida på den.

Skruvar, muttrar, brickor och lager modelleras inte i onödan. Sådana standarddelar hämtas ur programmets bibliotek eller från tillverkarens filer, och tiden läggs i stället på de delar som är egna. Mobilhållarens sammanställning består därför av två egna detaljer, bottenplattan och ryggen, samt en skruv och en mutter ur biblioteket.

Sammanställningen används sedan för att pröva sådant som inte syns på en enskild detalj. Krockar delarna med varandra i något läge? Går skruven att komma åt med en skruvmejsel? Når den ställbara ryggen ända ner utan att ta i plattans kant? En kollisionskontroll i programmet svarar på den första frågan, och de andra två besvaras genom att röra på delarna i modellen.

Ur sammanställningen tas två handlingar som följer produkten vidare. Den ena är sprängskissen, där delarna dragits isär längs sina monteringsriktningar så att det syns hur de sitter ihop. Den andra är stycklistan, en tabell med ett positionsnummer, en benämning och ett antal för varje ingående del. Positionsnumren ritas ut i sprängskissen i små ballonger med en linje till respektive del, och samma nummer används sedan i monteringsanvisningen och vid beställning av reservdelar.

[BILD 4.4-3] Innehåll: Mobilhållaren som sprängskiss, med bottenplattan, ryggen, skruven och muttern isärdragna längs monteringsriktningen och tunna streckprickade linjer som visar hur de förs samman. Varje del är märkt med en ballong med positionsnummer 1 till 4. Bredvid sprängskissen en stycklista med kolumnerna position, benämning och antal, ifylld för de fyra delarna. Bildtext: "Sprängskissen visar hur delarna sitter ihop, och stycklistan talar om vilka de är och hur många som behövs."

## Instuderingsfrågor

1. Vad står CAD för, och vad är den viktigaste skillnaden mot att rita för hand?
2. Varför sägs modellen vara originalet och ritningen en avbildning av den?
3. Nämn tre användningar av en CAD-modell utöver att ta fram ritningar.
4. Vad menas med parametrisk modellering?
5. Vad är ett villkor i en skiss? Ge tre exempel.
6. Vad skiljer ett villkor från ett mått?
7. Vad innebär det att en skiss är fullt bestämd, och vad är risken med en underbestämd skiss?
8. Hålet ska alltid sitta mitt på plattan. Varför är ett symmetrivillkor bättre än måttet 40 millimeter från vänsterkanten?
9. Beskriv arbetsgången när en enkel detalj modelleras, från plan till färdig kropp.
10. Vad är modellens historik, och hur används den vid en ändring?
11. Varför läggs avrundningar och fasningar sist?
12. Vad är en sammanställning?
13. Hur bestäms två detaljers läge i förhållande till varandra i en sammanställning?
14. Varför lämnas ibland en rörelsemöjlighet kvar mellan två delar?
15. Vad visar en sprängskiss, och vad innehåller en stycklista?

## Övningar

1. **Fullt bestämd skiss.** Skissa i det CAD-program du har tillgång till en rektangel med ett hål, och lämna den medvetet underbestämd. Dra i skissen och beskriv vad som rör sig. Lägg sedan till villkor och mått tills skissen är fullt bestämd, och redovisa vilka villkor du använde och vilka mått som återstod.

2. **Modellera mobilhållaren.** Modellera en mobilhållare med bottenplattan 80 gånger 60 millimeter och 8 millimeter tjock, en rygg som lutar 65 grader, ett kabelspår på 12 millimeters bredd genom ryggen och ett skruvhål med diametern 4,5 millimeter. Avsluta med avrundningar på 3 millimeter. Redovisa modellen med en bild och en lista över operationerna i historiken.

3. **Pröva avsikten.** Ändra i din modell från föregående uppgift bottenplattans bredd från 80 till 100 millimeter. Beskriv vad som hände med spårets och hålets läge, och avgör om modellen betedde sig som du ville. Ändra vid behov villkoren så att den gör det, och beskriv vilken ändring som krävdes.

4. **Sätt samman.** Modellera två detaljer som ska sitta ihop, till exempel ett lock och en burk, en hylla och ett väggfäste eller en handtagsdel och en stomme. Sätt samman dem i en sammanställning så att en av delarna kan röra sig på det sätt den ska. Redovisa vilka villkor du använde och vilken rörelse du lämnade kvar.

5. **Sprängskiss och stycklista.** Ta fram en sprängskiss ur din sammanställning, med positionsnummer i ballonger, och upprätta en stycklista med position, benämning och antal. Kontrollera att varje del i skissen finns i listan och att inget nummer används två gånger.
