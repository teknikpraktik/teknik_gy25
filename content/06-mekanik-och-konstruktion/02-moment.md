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
  - Beräkna momentet av en kraft kring en punkt, även när kraften verkar snett,
    med hjälp av momentarmen eller kraftens vinkelräta komposant.
  - Använda hävarmsprincipen för att förklara och beräkna utväxling i verktyg
    och maskiner, och redogöra för vad en hög utväxling kostar i rörelsesträcka.
abilities: [f3]
concepts_introduced: ["moment", "momentarm"]
concepts_used: ["kraft", "komposant"]
figures: ["fig-6.2.1-a", "fig-6.2.1-b", "fig-6.2.2-a"]
prerequisites: ["6.1"]
---

## Momentbegreppet

Ett dörrhandtag sitter alltid långt från gångjärnen, aldrig intill dem, och det är inget slumpmässigt val. Trycker man mot handtaget öppnas dörren lätt, men trycker man precis intill gångjärnen rör den sig knappt, hur hårt man än tar i. Kraften kan vara densamma, men verkan skiljer sig helt. Det som avgör är inte bara kraftens storlek utan också var den griper an i förhållande till den punkt dörren vrider sig kring. Den vridande verkan av en kraft kallas *moment*, och den är lika central för tekniska lösningar som kraften själv. Ett skruvförband dras åt med ett moment, en skiftnyckel och en lyftkran arbetar med moment, och en balk böjs av det moment lasten ger. En konstruktör behöver kunna räkna på moment lika säkert som på krafter.

Momentets storlek beror på två saker: kraftens storlek och det vinkelräta avståndet från vridpunkten till kraften. Det avståndet behöver definieras noga. Varje kraft kan tänkas fortsätta obegränsat framåt och bakåt längs sin egen riktning, och den tänkta linjen kallas kraftens verkningslinje. *Momentarmen* är det vinkelräta avståndet från vridpunkten till kraftens verkningslinje. Sambandet skrivs

*M = F · r*

där M är momentet i newtonmeter (Nm), F är kraften i newton (N) och r är momentarmen i meter (m). Formeln får användas i den här enkla formen bara när r verkligen är den vinkelräta momentarmen, alltså när kraften verkar vinkelrätt mot den stång, arm eller spak som avståndet mäts längs. Ett moment på 1 Nm motsvarar den vridande verkan av en kraft på 1 N som griper an vinkelrätt 1 m från vridpunkten.

En dörr med handtaget 0,8 m från gångjärnen behöver en kraft på 20 N vinkelrätt mot dörrbladet för att ge momentet

M = F · r = 20 · 0,8 = 16 Nm

Trycker man i stället 0,1 m från gångjärnen krävs, för samma moment,

F = M / r = 16 / 0,1 = 160 N

Åtta gånger så mycket kraft för samma vridande verkan, bara för att momentarmen är åtta gånger kortare. Det är hela anledningen till att dörrhandtag, ventilrattar och manöverspakar placeras långt från sin vridpunkt. Den som konstruerar ett handtag väljer momentarmen för att en rimlig handkraft ska räcka.

Ett moment har, förutom storlek, också en riktning. Det vrider antingen medurs eller moturs kring vridpunkten. När flera moment verkar samtidigt räknas de åt ena hållet som positiva och åt andra hållet som negativa, och det spelar ingen roll vilket håll som väljs som positivt så länge samma val används genom hela beräkningen. Att hålla reda på riktningen blir avgörande i nästa avsnitt, där de moment som verkar på en konstruktion ska ta ut varandra.

[BILD 6.2-1] Innehåll: En dörr sedd uppifrån med gångjärnet till vänster. Två pilar av samma längd (samma kraft) ritas: en vid handtaget långt från gångjärnet, en nära gångjärnet. Momentarmen r markeras med ett mått i båda fallen, och den resulterande vridningen illustreras med en böjd pil vars tjocklek skiljer sig mellan de två fallen. Bildtext: "Samma kraft ger olika stort moment beroende på momentarmen. Därför placeras handtag och manöverdon långt från sin vridpunkt."

Verkar kraften snett håller inte den enkla formen längre, och det inträffar ofta i praktiken. Antag att en mutter ska dras åt med en nyckel vars handtag är 0,25 m långt, och att handen drar med 300 N men i en vinkel på 70 grader mot handtaget i stället för rakt vinkelrätt. Att multiplicera 300 med 0,25 vore fel. Det skulle ge 75 Nm, mer än kraften faktiskt åstadkommer.

Det finns två sätt att göra rätt, och de ger alltid samma svar. Antingen delas kraften upp i komposanter och bara den komposant som är vinkelrät mot handtaget används:

F_vinkelrät = 300 · sin(70°) = 300 · 0,940 ≈ 282 N

M = 282 · 0,25 ≈ 70 Nm

Eller så behålls hela kraften och man mäter i stället det vinkelräta avståndet från muttern till kraftens verkningslinje, som blir kortare än handtaget när kraften lutar:

r_vinkelrät = 0,25 · sin(70°) ≈ 0,235 m

M = 300 · 0,235 ≈ 70 Nm

Svaret är rimligt. 70 Nm är något mindre än de 75 Nm som en helt vinkelrät kraft hade gett, vilket stämmer med att bara en del av kraften bidrar till vridningen. Ju mer kraften lutar mot handtaget, desto mindre blir momentet, och en kraft som drar rakt längs handtaget ger inget moment alls.

[BILD 6.2-2] Innehåll: En nyckel på en mutter, sedd rakt uppifrån, med handtaget 0,25 m långt. Kraften 300 N ritas i vinkeln 70 grader mot handtaget. Kraftens verkningslinje förlängs som en streckad linje åt båda hållen förbi angreppspunkten. Från muttern dras ett vinkelrätt streck ut till verkningslinjen, måttsatt 0,235 m och märkt "momentarm". I samma bild ritas kraften även uppdelad i två komposanter, en längs handtaget och en vinkelrät mot det, där den vinkelräta är märkt 282 N. Bredvid visas i blekare linjer samma nyckel med en helt vinkelrät kraft på 300 N och momentarmen 0,25 m, som jämförelsefall. Båda fallens moment skrivs ut, 70 Nm respektive 75 Nm. Bildtext: "När kraften verkar snett räknas momentet antingen med kraftens vinkelräta komposant eller med den vinkelräta momentarmen. Båda ger samma svar."

## Hävarmsprincipen

En hävstång är en stel stång som kan vrida sig kring en fast punkt, och den är ett av de äldsta sätten att förstärka en kraft. Principen följer direkt ur momentformeln. Eftersom M = F · r ger samma moment antingen en stor kraft på en kort arm eller en liten kraft på en lång arm, och det utnyttjar tekniken om och om igen.

En mutter som kräver ett moment på 120 Nm för att lossna kan lossas med en skiftnyckel vars handtag är 0,3 m långt genom att pressa vinkelrätt med kraften

F = M / r = 120 / 0,3 = 400 N

Träs ett rör över nyckeln så att handtagets effektiva längd blir 0,6 m halveras kraften som krävs:

F = 120 / 0,6 = 200 N

Samma samband används åt andra hållet i en momentnyckel, ett verktyg som drar åt en skruv till ett bestämt åtdragningsmoment och sedan slirar eller klickar. Eftersom bärförmågan i ett skruvförband beror på hur hårt skruven är spänd, anger tillverkare av allt från cykeldelar till motorer ett åtdragningsmoment i newtonmeter, och montören ställer in nyckeln på det värdet i stället för att gissa med handkraft.

Förhållandet mellan den kraft ett verktyg avger och den kraft användaren lägger in kallas utväxling. En bultsax visar principen tydligt. Handtagen är långa och käftarna sitter tätt intill leden. Kraften griper an 0,45 m från leden, medan skäreggen ligger 0,04 m från samma led. Trycker användaren med 200 N blir momentet kring leden

M = 200 · 0,45 = 90 Nm

Samma moment verkar ut mot skäreggen, som sitter betydligt närmare leden. Kraften där blir därför

F = M / r = 90 / 0,04 = 2250 N

Bultsaxen förvandlar alltså 200 N handkraft till drygt 2 kN i skäreggen, en utväxling på ungefär elva gånger, vilket är exakt förhållandet mellan de båda armarna, 0,45 / 0,04 ≈ 11. Utväxlingen är inte gratis. Handtagen måste röra sig ungefär elva gånger längre sträcka än käftarna, och det är därför en bultsax kräver ett långt, brett grepp för att klippa av en kort bit stål. En hög utväxling köps alltid med en lång rörelse, och en konstruktör som vill ha stor kraft ur en liten insats får räkna med att något måste röra sig långt.

Samma princip förklarar varför en lyftkrans bom är kraftigast byggd närmast masten. Lastens tyngd verkar med en lång momentarm ut mot bomspetsen, vilket ger ett stort moment som kranens konstruktion och motvikt måste klara av, och det momentet är som störst just där bommen möter masten. Det är också där bommen böjs hårdast, ett samband som avsnittet om hållfasthet återkommer till.

[BILD 6.2-3] Innehåll: Två delbilder. Vänster: en skiftnyckel som drar åt en mutter, med och utan pårör, där momentarmarna 0,3 m och 0,6 m är måttsatta och de kraftvärden som krävs, 400 N och 200 N, är utskrivna. Höger: en bultsax i genomskärning vid leden, med handkraften 200 N inritad 0,45 m från leden och kraften i skäreggen 2250 N inritad 0,04 m från samma led. Båda momentarmarna är måttsatta och det gemensamma momentet 90 Nm markeras kring leden. Under bilden visas med två streckade bågar hur långt handtaget respektive skäreggen rör sig, så att den längre rörelsesträckan vid handtaget framgår. Bildtext: "Utväxlingen betalas med rörelsesträcka: handtaget rör sig lika många gånger längre som kraften förstärks."

## Instuderingsfrågor

1. Förklara vad ett moment är, och varför både kraftens storlek och momentarmens längd påverkar det.
2. Vad är en krafts verkningslinje, och hur används den för att bestämma momentarmen?
3. En kraft dras rakt längs en skiftnyckels handtag, i riktning bort från muttern. Vilket moment ger den kring muttern? Förklara med hjälp av verkningslinjen.
4. Varför måste ett moments riktning, medurs eller moturs, hållas reda på när flera moment verkar på en konstruktion samtidigt?
5. Vad är ett åtdragningsmoment, och varför anger tillverkare det i newtonmeter i stället för att lita på montörens handkraft?
6. Förklara vad utväxling innebär, och vad man betalar för en hög utväxling hos ett handverktyg.

## Övningar

1. En skruv dras åt med en kraft på 40 N vinkelrätt mot en skruvmejsels handtag, vars radie är 0,02 m. Beräkna momentet.
2. En avstängningsventil öppnas med en ratt vars radie är 0,18 m. Vilken vinkelrät kraft krävs vid rattens kant för att ge momentet 27 Nm?
3. En mutter kräver 90 Nm för att lossna. Beräkna kraften som krävs med en nyckel vars handtag är 0,25 m, och beräkna sedan kraften om handtaget förlängs till 0,5 m med ett pårör. Kraften antas verka vinkelrätt i båda fallen.
4. En lyftkran balanserar sin last kring masten. Lasten på 3000 N hänger 6,0 m ut på bommen. Hur långt från masten åt andra hållet måste en motvikt på 12 000 N sitta för att de två momenten ska ta ut varandra?
5. En hand drar med 300 N i en nyckel vars handtag är 0,20 m långt, men i vinkeln 50 grader mot handtaget. Beräkna momentet kring muttern. Jämför med det moment samma kraft hade gett om den verkat vinkelrätt, och förklara skillnaden.
6. En hjullastares skopa lyfts av en hydraulcylinder som griper an 0,35 m från lyftarmens ledpunkt, medan lastens tyngd verkar 2,1 m från samma punkt. Lasten i skopan väger 1200 kg. Beräkna först lastens tyngdkraft, sedan det moment lasten ger kring ledpunkten, och slutligen den kraft cylindern minst måste ge. Kontrollera att förhållandet mellan cylinderkraften och lastens tyngdkraft stämmer med förhållandet mellan de båda momentarmarna, och bedöm om storleksordningen på cylinderkraften är rimlig för en verklig maskin.
