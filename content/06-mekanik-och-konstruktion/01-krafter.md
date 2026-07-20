---
id: "6.1"
chapter: 6
sectionNumber: 1
title: Krafter
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-09", "n1-10"]
  niva2: ["n2-07"]
learningGoals:
  - Beskriva en kraft med storlek, riktning och angreppspunkt samt rita krafter
    som vektorer.
  - Bestämma resultanten av flera krafter grafiskt och genom beräkning med
    komposanter.
  - Frilägga en enkel konstruktion och identifiera de krafter som verkar på den.
abilities: [f3]
concepts_introduced: ["kraft", "tyngdkraft", "normalkraft", "friktionskraft", "dragkraft", "tryckkraft", "resultant", "komposant", "friläggning"]
concepts_used: ["teknisk lösning"]
figures: ["fig-6.1.1-a", "fig-6.1.2-a", "fig-6.1.3-a"]
prerequisites: []
---

## Kraftbegreppet

En gångbro över en bäck är en enkel [[begrepp:teknisk lösning]] som bär upp cyklister, barnvagnar och enstaka joggare utan att märkbart röra sig. Ändå vilar hela dess tyngd, och allt som passerar över den, på två smala stöd vid strandkanten. Ingenting i bron syns arbeta. Men om bron byggdes en enda centimeter för klent skulle det märkas genast: den skulle svikta under belastning, kanske spricka, i värsta fall rasa. Det bron faktiskt gör, hela tiden, är att ta emot krafter från körbanan och leda dem vidare till stöden och ner i marken. Att förstå de krafterna, hur de uppstår, hur de läggs samman och hur de till slut bärs upp, är vad resten av kapitlet handlar om: från den enskilda kraften, via moment och jämvikt, till hur en ingenjör slutligen bestämmer hur kraftig bron behöver vara.

En **kraft** är en påverkan som får ett föremål att ändra rörelse, det vill säga accelerera eller bromsa in, eller att deformeras. En kraft har tre egenskaper som tillsammans bestämmer dess verkan: en **storlek**, mätt i enheten newton (N); en **riktning**, det håll kraften verkar i; och en **angreppspunkt**, den plats på föremålet där kraften griper an. En newton motsvarar ungefär den tyngdkraft som verkar på ett äpple. Eftersom en kraft har både storlek och riktning räknas den som en vektor, och den ritas därför som en pil: pilens längd visar storleken, pilens riktning visar kraftens riktning, och pilens startpunkt markerar angreppspunkten. Ett sådant diagram, där de krafter som verkar på ett föremål ritas ut som pilar, kallas ett kraftdiagram.

Krafter är osynliga i sig, men deras verkan går att observera. En bro som böjer sig märkbart under en tung lastbil, en gren som knakar under en klättrande katt eller en bil som bromsar in mot ett rött ljus visar alla att en kraft är i spel, även om ingen kan se själva kraften. Ingenjörens uppgift börjar i att räkna ut vilka krafter som är inblandade i en teknisk situation, innan något kan sägas om hur en konstruktion klarar dem.

Vissa krafter går igen så ofta i tekniska sammanhang att de har egna namn. **Tyngdkraften** är den kraft med vilken jorden drar varje föremål mot sitt centrum, det vill säga rakt nedåt. Den beräknas som

*F_g = m · g*

där F_g är tyngdkraften i newton (N), m är föremålets massa i kilogram (kg) och g är tyngdaccelerationen, ungefär 9,8 m/s² nära jordytan. En människa på 70 kg belastar därför det den står på med ungefär 70 · 9,8 ≈ 686 N, eller drygt 0,7 kN.

När ett föremål vilar mot ett underlag trycker underlaget tillbaka med en **normalkraft**, riktad rakt ut från kontaktytan. Det är normalkraften från marken som håller en gångtrafikant uppe, och normalkraften från brodäcket som håller uppe cykeln som rullar över det. Namnet syftar på att kraften alltid är vinkelrät, "normal", mot ytan den verkar från, oavsett om ytan är vågrät, lutande eller lodrät.

Rör sig eller försöker ett föremål röra sig längs en yta uppstår dessutom en **friktionskraft**, riktad längs ytan och motverkande rörelsen eller rörelsetendensen. Friktionen är det som gör att en cykel inte glider undan i en sväng och att en låda som skjuts över ett golv till slut stannar. Utan friktion skulle de flesta vardagliga konstruktioner, från skor till skruvförband, sluta fungera.

I linor, kättingar och stag verkar **dragkraft**, en kraft som sträcker och drar isär materialet i den riktning linan är spänd. En hängbros bärlinor och en lyftkrans lyftkätting är båda belastade av dragkraft. I pelare, stag och tryckta stavar verkar i stället **tryckkraft**, en kraft som pressar samman materialet. En husgrunds pelare och benen på en pall är belastade av tryckkraft. Skillnaden mellan drag och tryck återkommer genom hela kapitlet: den avgör hur ett material eller en konstruktionsdel beter sig under last, och den styr vilken form och vilket material som passar bäst till en given uppgift.

[[figur:fig-6.1.1-a]]

## Kraftresultanter

Ett föremål utsätts sällan för bara en kraft. En gångbro belastas samtidigt av sin egen tyngd, av trafikanternas tyngd och av stödens normalkrafter. En container som lyfts av en kran hålls samtidigt av flera lyftkättingar. För att förstå hur föremålet till slut beter sig behöver de enskilda krafterna läggas samman till en enda kraft med samma sammantagna verkan: **resultanten**.

Verkar två krafter längs samma linje adderas eller subtraheras de bara: två krafter åt samma håll läggs ihop, två krafter åt motsatta håll dras ifrån varandra, och resultanten får den riktning den största kraften pekar i. Verkar krafterna i olika riktningar krävs en geometrisk konstruktion eller en beräkning. För två krafter som är vinkelräta mot varandra, en vanlig situation i tekniska sammanhang, går resultantens storlek att beräkna med Pythagoras sats.

Två bogserbåtar drar en pråm med raka linor: den ena båten drar med kraften F_1 = 3000 N rakt norrut, den andra med kraften F_2 = 4000 N rakt österut. Eftersom krafterna är vinkelräta mot varandra blir resultantens storlek

*F_R = √(F_1² + F_2²)*

F_R = √(3000² + 4000²) = √(9 000 000 + 16 000 000) = √25 000 000 = 5000 N

Pråmen påverkas alltså sammantaget av en kraft på 5000 N, riktad mellan nord och öst. Resultatet är rimligt: det ligger mellan de båda enskilda kraferna och närmare den större, precis som väntat när en nordlig och en östlig kraft blandas.

Ibland är förhållandet det omvända: en enda känd kraft behöver delas upp i två **komposanter**, delkrafter som tillsammans ger samma verkan som originalkraften, för att kunna analyseras i en viss riktning. Ett vanligt fall är en kraft som verkar snett mot den riktning som är intressant. Dras en kälke framåt med ett rep som lutar 30 grader över marken, och repet är spänt med kraften F = 100 N, verkar bara en del av kraften i kälkens färdriktning. Komposanterna är

*F_x = F · cos(30°)* och *F_y = F · sin(30°)*

F_x = 100 · 0,866 ≈ 86,6 N

F_y = 100 · 0,5 = 50 N

F_x, den horisontella komposanten, är den del av dragkraften som faktiskt drar kälken framåt. F_y, den vertikala komposanten, lyfter kälken lite uppåt och minskar därmed normalkraften och friktionen mot marken. En och samma kraft kan alltså både driva kälken framåt och samtidigt göra den lite lättare att dra, beroende på hur den delas upp.

[[figur:fig-6.1.2-a]]

## Friläggning

För att analysera krafterna på ett föremål utan att blanda ihop dem med krafterna på allt runt omkring används en metod som kallas **friläggning**. Föremålet tänks lösgjort, "frilagt", från sin omgivning, och varje kontakt med omgivningen ersätts med den kraft kontakten ger upphov till: en vägg ersätts med sin normalkraft, ett rep med sin dragkraft, marken med sin normalkraft och eventuella friktionskraft. Kvar blir en ren bild av föremålet med samtliga yttre krafter inritade som pilar, redo att analyseras.

En låda som vilar stilla på ett sluttande plan friläggs genom att ersätta planet med de krafter det utövar: en normalkraft vinkelrät mot planets yta, och en friktionskraft längs ytan som hindrar lådan från att glida. Dessutom verkar lådans egen tyngdkraft, rakt nedåt, oavsett hur planet lutar. Friläggningen visar direkt varför lådan inte rör sig: de tre krafterna balanserar varandra, ett samband som är själva utgångspunkten för nästa avsnitts jämviktsvillkor.

Samma metod gäller för större konstruktioner. Friläggs gångbron som helhet ersätts marken vid de två stöden med varsin normalkraft, riktad rakt uppåt, medan brons egen tyngd och trafiklastens tyngd verkar rakt nedåt någonstans mellan stöden. Friläggningen ger på så vis en fullständig lista över de krafter som håller bron uppe och de krafter den måste bära, utan att ingenjören behöver hålla reda på annat än pilarna i den frilagda bilden. Den listan är förutsättningen för allt som följer i kapitlet: utan en korrekt friläggning går varken moment, jämvikt eller dimensionering att räkna på.

[[figur:fig-6.1.3-a]]

## Instuderingsfrågor

1. Vilka tre egenskaper beskriver en kraft fullständigt, och varför räcker det inte att bara ange kraftens storlek?
2. Varför ritas krafter som pilar, och vad visar pilens längd respektive riktning?
3. En rugbyspelare på 90 kg står stilla på planen. Beräkna tyngdkraften som verkar på spelaren.
4. Förklara skillnaden mellan tyngdkraft och normalkraft. Kan de vara lika stora? Motivera.
5. Varför beskrivs friktionskraften som riktad "längs ytan", medan normalkraften beskrivs som riktad "ut från ytan"?
6. Ge ett eget exempel på en konstruktionsdel som är belastad av dragkraft och en som är belastad av tryckkraft, och motivera varför.
7. Två krafter på 6000 N respektive 8000 N verkar vinkelrätt mot varandra på samma punkt. Beräkna resultantens storlek.
8. Varför krävs en geometrisk konstruktion eller en beräkning för att lägga samman krafter som inte verkar längs samma linje, medan krafter längs samma linje bara kan adderas eller subtraheras?
9. En kraft på 200 N drar i ett rep som lutar 40 grader över marken. Beräkna repets horisontella och vertikala komposant.
10. Förklara med egna ord vad det innebär att "frilägga" ett föremål, och varför metoden är användbar.
11. Frilägg en lampa som hänger stilla i en enda lina från taket. Vilka krafter verkar på lampan, och vad måste gälla för att lampan ska hänga stilla?
12. Varför blir den frilagda bilden av gångbron enklare att analysera än att försöka räkna på hela bromiljön på en gång?
13. En bokhylla belastas av böckernas tyngd. Beskriv, med hjälp av friläggning, vilka krafter som håller hyllplanet uppe.
