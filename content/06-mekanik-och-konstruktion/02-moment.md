---
id: "6.2"
chapter: 6
sectionNumber: 2
title: Moment
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-09", "n1-10"]
  niva2: ["n2-07"]
learningGoals:
  - Förklara vad ett moment är och beräkna moment kring en punkt.
  - Använda hävarmsprincipen för att förklara och beräkna utväxling i enkla
    maskiner och verktyg.
abilities: [f3]
concepts_introduced: ["moment", "momentarm", "hävstång", "utväxling"]
concepts_used: ["kraft"]
figures: ["fig-6.2.1-a", "fig-6.2.2-a"]
prerequisites: ["6.1"]
---

## Momentbegreppet

En dörr öppnas lätt med ett tryck mot handtaget, men samma dörr rör sig knappt om man i stället trycker precis intill gångjärnen, hur hårt man än tar i. Kraften är densamma, men verkan skiljer sig helt. Det som avgör är inte bara kraftens storlek utan också var den griper an och hur långt den griper an från den punkt dörren vrider sig kring. Den vridande verkan av en kraft kallas **moment**, och den är lika central för att förstå tekniska lösningar som kraften själv: en skiftnyckel, en gungbräda, en lyftkran och ett skruvförband fungerar alla för att en kraft omvandlas till en vridning kring en punkt.

Ett moment beräknas som kraften multiplicerad med avståndet från vridpunkten till den punkt där kraften griper an, mätt vinkelrätt mot kraftens riktning. Det avståndet kallas **momentarmen**. Sambandet skrivs

*M = F · r*

där M är momentet i newtonmeter (Nm), F är kraften i newton (N) och r är momentarmen i meter (m). Ett moment på 1 Nm motsvarar den vridande verkan av en kraft på 1 N som griper an 1 m från vridpunkten.

En stel dörr med gångjärn 0,8 m från handtaget behöver en kraft på 20 N i handtaget för att övervinna ett moment på

M = F · r = 20 · 0,8 = 16 Nm

Trycker man i stället 0,1 m från gångjärnen krävs, för samma moment,

F = M / r = 16 / 0,1 = 160 N

Åtta gånger så mycket kraft för samma vridande verkan, bara för att momentarmen är åtta gånger kortare. Det är hela anledningen till att dörrhandtag sitter långt från gångjärnen och att en cykelpedal sitter en bit ut från vevaxeln: ju längre momentarm, desto mindre kraft krävs för samma moment.

Ett moment har, förutom storlek, också en riktning: det vrider antingen medurs eller moturs kring vridpunkten. Riktningen avgör om två moment förstärker eller motverkar varandra, ett samband som blir avgörande i nästa avsnitt om jämvikt.

[[figur:fig-6.2.1-a]]

## Hävarmsprincipen

En **hävstång** är en stel stång som kan vrida sig kring en fast punkt, och den är ett av de äldsta och mest grundläggande verktygen för att förstärka en kraft. Principen bygger direkt på momentformeln: eftersom M = F · r ger samma moment antingen en stor kraft på en kort arm eller en liten kraft på en lång arm. En skiftnyckel med lång handtagslängd gör det möjligt att lossa en hårt sittande mutter med en kraft som en kort nyckel aldrig skulle klara, trots att muttern kräver exakt samma moment i båda fallen.

En mutter som kräver ett moment på 120 Nm för att lossna kan lossas med en skiftnyckel vars handtag är 0,3 m långt genom att pressa med kraften

F = M / r = 120 / 0,3 = 400 N

Träs ett rör över nyckeln så att handtagets effektiva längd blir 0,6 m halveras kraften som krävs:

F = 120 / 0,6 = 200 N

Förhållandet mellan momentarmens längd och den kraft som krävs kallas hävstångens **utväxling**. En lång momentarm ger hög utväxling, det vill säga att en liten kraft räcker för att åstadkomma ett visst moment, medan en kort momentarm ger låg utväxling och kräver en stor kraft. Samma princip förklarar varför en lyftkrans utskjutande bom är kraftigt byggd närmast masten: bommens egen tyngd och lastens tyngd verkar med en lång momentarm ut mot bomspetsen, vilket ger ett stort moment som kranens konstruktion och motvikt måste klara av.

Hävarmsprincipen förklarar också hur en gungbräda hålls i balans. Ett barn på 300 N sitter 1,5 m från gungbrädans mittpunkt och skapar ett moment på 300 · 1,5 = 450 Nm åt sitt håll. En vuxen på 750 N måste då sitta på ett avstånd r från mittpunkten så att momenten tar ut varandra:

r = 450 / 750 = 0,6 m

Den vuxna personen behöver alltså sitta betydligt närmare mittpunkten än barnet, eftersom den större kraften kräver en kortare momentarm för att ge samma moment åt motsatt håll. Det är precis detta samband, att motverkande moment måste vara lika stora, som är utgångspunkten för nästa avsnitts jämviktsvillkor.

[[figur:fig-6.2.2-a]]

## Instuderingsfrågor

1. Förklara med egna ord vad ett moment är, och varför både kraftens storlek och momentarmens längd påverkar momentet.
2. Vad är enheten för moment, och hur hänger den ihop med enheterna för kraft och längd?
3. En skruv dras åt med en kraft på 40 N i en skruvmejsel vars handtag har radien 0,02 m. Beräkna momentet.
4. En dörr har ett handtag 0,9 m från gångjärnen. Vilken kraft krävs för att skapa ett moment på 27 Nm?
5. Varför sitter dörrhandtag långt från gångjärnen i stället för nära dem?
6. Vad menas med att ett moment är medurs eller moturs, och varför är det relevant?
7. Förklara med egna ord vad en hävstång är och hur den utnyttjar momentformeln.
8. En mutter kräver ett moment på 90 Nm för att lossna. Beräkna kraften som krävs med en skiftnyckel vars handtag är 0,25 m, och beräkna sedan kraften om handtaget förlängs till 0,5 m med ett pårör.
9. Förklara vad utväxling innebär för en hävstång, och varför en lång momentarm ger hög utväxling.
10. En lyftkrans bom är längre och kraftigare byggd närmast masten än ute vid bomspetsen. Förklara varför, med hjälp av momentbegreppet.
11. Ett barn på 250 N sitter 2 m från en gungbrädas mittpunkt. Hur långt från mittpunkten måste en vuxen på 800 N sitta för att gungbrädan ska vara i balans?
12. En cykelpedal sitter en bit ut från vevaxeln i stället för precis på den. Förklara varför, utifrån vad avsnittet visat om momentarmens betydelse.
