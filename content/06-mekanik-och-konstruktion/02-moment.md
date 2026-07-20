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
concepts_introduced: ["moment", "momentarm", "verkningslinje", "hävstång", "utväxling"]
concepts_used: ["kraft", "komposant"]
figures: ["fig-6.2.1-a", "fig-6.2.1-b", "fig-6.2.2-a"]
prerequisites: ["6.1"]
---

## Momentbegreppet

En dörr öppnas lätt med ett tryck mot handtaget, men samma dörr rör sig knappt om man i stället trycker precis intill gångjärnen, hur hårt man än tar i. Kraften är densamma, men verkan skiljer sig helt. Det som avgör är inte bara kraftens storlek utan också var den griper an i förhållande till den punkt dörren vrider sig kring. Den vridande verkan av en kraft kallas **moment**, och den är lika central för att förstå tekniska lösningar som kraften själv: en skiftnyckel, en bultsax, en lyftkran och ett skruvförband fungerar alla för att en kraft omvandlas till en vridning kring en punkt.

Momentets storlek beror på två saker: kraftens storlek, och det vinkelräta avståndet från vridpunkten till kraften. Det avståndet behöver definieras noga. Varje kraft kan tänkas fortsätta obegränsat framåt och bakåt längs sin egen riktning, och den tänkta linjen kallas kraftens **verkningslinje**. **Momentarmen** är det vinkelräta avståndet från vridpunkten till kraftens verkningslinje. Sambandet skrivs

*M = F · r*

där M är momentet i newtonmeter (Nm), F är kraften i newton (N) och r är momentarmen i meter (m). Formeln får användas i den här enkla formen bara när r verkligen är den vinkelräta momentarmen, alltså när kraften verkar vinkelrätt mot den stång, arm eller spak som avståndet mäts längs. Ett moment på 1 Nm motsvarar den vridande verkan av en kraft på 1 N som griper an vinkelrätt 1 m från vridpunkten.

En stel dörr med handtaget 0,8 m från gångjärnen behöver en kraft på 20 N vinkelrätt mot dörrbladet för att ge momentet

M = F · r = 20 · 0,8 = 16 Nm

Trycker man i stället 0,1 m från gångjärnen krävs, för samma moment,

F = M / r = 16 / 0,1 = 160 N

Åtta gånger så mycket kraft för samma vridande verkan, bara för att momentarmen är åtta gånger kortare. Det är hela anledningen till att dörrhandtag sitter långt från gångjärnen och att en cykelpedal sitter en bit ut från vevaxeln.

Ett moment har, förutom storlek, också en riktning: det vrider antingen medurs eller moturs kring vridpunkten. När flera moment verkar samtidigt räknas de åt ena hållet som positiva och åt andra hållet som negativa, och det spelar ingen roll vilket håll som väljs som positivt så länge samma val används genom hela beräkningen.

[[figur:fig-6.2.1-a]]

Verkar kraften snett håller inte den enkla formen längre. Antag att en mutter ska lossas med en nyckel vars handtag är 0,25 m långt, och att handen drar med 300 N men i en vinkel på 70 grader mot handtaget i stället för rakt vinkelrätt. Att multiplicera 300 med 0,25 vore fel: det skulle ge 75 Nm, vilket är mer än kraften faktiskt åstadkommer.

Det finns två sätt att göra rätt, och de ger alltid samma svar. Antingen delas kraften upp i komposanter och bara den komposant som är vinkelrät mot handtaget används:

F_vinkelrät = 300 · sin(70°) = 300 · 0,940 ≈ 282 N

M = 282 · 0,25 ≈ 70 Nm

Eller så behålls hela kraften och man mäter i stället det vinkelräta avståndet från muttern till kraftens verkningslinje, som blir kortare än handtaget när kraften lutar:

r_vinkelrät = 0,25 · sin(70°) ≈ 0,235 m

M = 300 · 0,235 ≈ 70 Nm

Svaret är rimligt: 70 Nm är något mindre än de 75 Nm som en helt vinkelrät kraft hade gett, vilket stämmer med att bara en del av kraften bidrar till vridningen. Ju mer kraften lutar mot handtaget, desto mindre blir momentet, och en kraft som drar rakt längs handtaget ger inget moment alls.

[[figur:fig-6.2.1-b]]

## Hävarmsprincipen

En **hävstång** är en stel stång som kan vrida sig kring en fast punkt, och den är ett av de äldsta och mest grundläggande verktygen för att förstärka en kraft. Principen bygger direkt på momentformeln: eftersom M = F · r ger samma moment antingen en stor kraft på en kort arm eller en liten kraft på en lång arm.

En mutter som kräver ett moment på 120 Nm för att lossna kan lossas med en skiftnyckel vars handtag är 0,3 m långt genom att pressa vinkelrätt med kraften

F = M / r = 120 / 0,3 = 400 N

Träs ett rör över nyckeln så att handtagets effektiva längd blir 0,6 m halveras kraften som krävs:

F = 120 / 0,6 = 200 N

Förhållandet mellan den kraft ett verktyg avger och den kraft användaren lägger in kallas **utväxling**. En bultsax visar principen tydligt. Handtagen är långa och käftarna sitter tätt intill leden: kraften griper an 0,45 m från leden, medan skäreggen ligger 0,04 m från samma led. Trycker användaren med 200 N blir momentet kring leden

M = 200 · 0,45 = 90 Nm

Samma moment verkar ut mot skäreggen, som sitter betydligt närmare leden. Kraften där blir därför

F = M / r = 90 / 0,04 = 2250 N

Bultsaxen förvandlar alltså 200 N handkraft till drygt 2 kN i skäreggen, en utväxling på ungefär elva gånger, vilket är exakt förhållandet mellan de båda armarna: 0,45 / 0,04 ≈ 11. Utväxlingen är inte gratis. Handtagen måste röra sig ungefär elva gånger längre sträcka än käftarna, och det är därför en bultsax kräver ett långt, brett grepp för att klippa av en kort bit stål.

Samma princip förklarar varför en lyftkrans bom är kraftigast byggd närmast masten. Lastens tyngd verkar med en lång momentarm ut mot bomspetsen, vilket ger ett stort moment som kranens konstruktion och motvikt måste klara av, och det momentet är som störst just där bommen möter masten.

[[figur:fig-6.2.2-a]]

## Instuderingsfrågor

1. Förklara vad ett moment är, och varför både kraftens storlek och momentarmens längd påverkar det.
2. Vad är en krafts verkningslinje, och hur används den för att bestämma momentarmen?
3. En kraft dras rakt längs en skiftnyckels handtag, i riktning bort från muttern. Vilket moment ger den kring muttern? Förklara med hjälp av verkningslinjen.
4. Vad menas med att ett moment är medurs eller moturs, och varför måste riktningen hållas reda på när flera moment verkar samtidigt?
5. Förklara vad utväxling innebär, och vad man betalar för en hög utväxling hos ett handverktyg.

## Praktiska uppgifter

1. En skruv dras åt med en kraft på 40 N vinkelrätt mot en skruvmejsels handtag, vars radie är 0,02 m. Beräkna momentet.
2. En dörr har handtaget 0,9 m från gångjärnen. Vilken vinkelrät kraft krävs för att ge momentet 27 Nm?
3. En mutter kräver 90 Nm för att lossna. Beräkna kraften som krävs med en nyckel vars handtag är 0,25 m, och beräkna sedan kraften om handtaget förlängs till 0,5 m med ett pårör. Kraften antas verka vinkelrätt i båda fallen.
4. Ett barn med tyngden 250 N sitter 2,0 m från en gungbrädas vridpunkt. Hur långt från vridpunkten måste en vuxen med tyngden 800 N sitta för att gungbrädan ska balansera?
5. En hand drar med 300 N i en nyckel vars handtag är 0,20 m långt, men i vinkeln 50 grader mot handtaget. Beräkna momentet kring muttern. Jämför med det moment samma kraft hade gett om den verkat vinkelrätt, och förklara skillnaden.
6. En hjullastares skopa lyfts av en hydraulcylinder som griper an 0,35 m från lyftarmens ledpunkt, medan lastens tyngd verkar 2,1 m från samma punkt. Lasten i skopan väger 1200 kg. Beräkna först lastens tyngdkraft, sedan det moment lasten ger kring ledpunkten, och slutligen den kraft cylindern minst måste ge. Kontrollera att förhållandet mellan cylinderkraften och lastens tyngdkraft stämmer med förhållandet mellan de båda momentarmarna, och bedöm om storleksordningen på cylinderkraften är rimlig för en verklig maskin.
