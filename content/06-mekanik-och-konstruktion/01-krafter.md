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
figures: ["fig-6.1.1-b", "fig-6.1.1-a", "fig-6.1.2-a", "fig-6.1.3-a"]
prerequisites: []
---

## Kraftbegreppet

En gångbro över en bäck är en enkel [[begrepp:teknisk lösning]] som bär upp cyklister, barnvagnar och enstaka joggare utan att märkbart röra sig. Ändå vilar hela dess tyngd, och allt som passerar över den, på två smala stöd vid strandkanten. Ingenting i bron syns arbeta. Men om balkarna gavs för liten tvärsnittsarea skulle det märkas genast: bron skulle svikta kännbart under en enda cyklist, och vid tillräckligt stor last skulle materialet ge vika. Det bron faktiskt gör, hela tiden, är att ta emot krafter från körbanan och leda dem vidare till stöden och ner i marken.

Samma gångbro återkommer genom hela kapitlet, och för att den ska gå att räkna på behöver den beskrivas som en bestämd, förenklad modell:

Bron är en **balkbro** med fri spännvidd 6,0 m och gångbanebredd 1,5 m. Bärverket är två stålbalkar under ett trädäck. Den vilar på ett stöd i vardera änden, kallade A och B. Brons egentyngd är 3600 N. Den nyttiga lasten är gångtrafik, enstaka cyklister och barnvagnar.

En sådan beskrivning kallas en konstruktionsmodell. Den är avsiktligt fattigare än den verkliga bron: räcken, skruvförband, lutning och rörelser i marken finns inte med. Modellen behåller bara det som behövs för att svara på frågan man ställt, och varje gång kapitlet räknar på bron kommer de antaganden som gjorts att skrivas ut. En verklig konstruktör arbetar likadant, och en modell som inte redovisar sina antaganden går inte att lita på.

En **kraft** är en påverkan som får ett föremål att ändra rörelse, det vill säga accelerera eller bromsa in, eller att deformeras. En kraft har tre egenskaper som tillsammans bestämmer dess verkan: en **storlek**, mätt i enheten newton (N); en **riktning**, det håll kraften verkar i; och en **angreppspunkt**, den plats på föremålet där kraften griper an. En newton motsvarar ungefär den tyngdkraft som verkar på ett äpple. Eftersom en kraft har både storlek och riktning räknas den som en vektor, och den ritas därför som en pil: pilens längd visar storleken, pilens riktning visar kraftens riktning, och pilens startpunkt markerar angreppspunkten. Ett sådant diagram, där de krafter som verkar på ett föremål ritas ut som pilar, kallas ett kraftdiagram.

Angreppspunkten är lätt att förbise men avgör ofta utgången. Samma kraft mot en dörr ger vitt skilda resultat beroende på om den griper an vid handtaget eller intill gångjärnet, och samma last på gångbron belastar stöden olika beroende på var på bron den står. Båda dessa samband utvecklas längre fram i kapitlet.

[[figur:fig-6.1.1-b]]

Vissa krafter går igen så ofta i tekniska sammanhang att de har egna namn. **Tyngdkraften** är den kraft med vilken jorden drar varje föremål mot sitt centrum, det vill säga rakt nedåt. Den beräknas som

*F_g = m · g*

där F_g är tyngdkraften i newton (N), m är föremålets massa i kilogram (kg) och g är tyngdaccelerationen, ungefär 9,8 m/s² nära jordytan. En människa på 70 kg belastar därför det den står på med ungefär 70 · 9,8 ≈ 686 N, eller drygt 0,7 kN. Massa och tyngdkraft är alltså inte samma sak: massan är densamma överallt, medan tyngdkraften beror på var föremålet befinner sig.

När ett föremål vilar mot ett underlag trycker underlaget tillbaka med en **normalkraft**, riktad rakt ut från kontaktytan. Det är normalkraften från marken som håller en gångtrafikant uppe, och normalkraften från brodäcket som håller uppe cykeln som rullar över det. Namnet syftar på att kraften alltid är vinkelrät, "normal", mot ytan den verkar från, oavsett om ytan är vågrät, lutande eller lodrät.

Mellan två ytor som ligger an mot varandra uppstår dessutom en **friktionskraft**, riktad längs kontaktytan. Friktionskraften motverkar den relativa rörelsen mellan ytorna, eller tendensen till glidning när ytorna ännu inte rör sig i förhållande till varandra. Formuleringen är viktig, eftersom friktion ofta beskrivs slarvigt som något som bromsar föremål. Det stämmer när en låda skjuts över ett golv: lådan glider mot golvet, och friktionen verkar bakåt. Men ett drivhjul på en bil trycker bakåt mot vägbanan, och friktionen från vägbanan verkar då framåt på hjulet. Det är alltså friktion som driver bilen framåt. Utan friktion skulle inte bara bromsar utan också däck, skosulor och skruvförband sluta fungera.

I linor, vajrar och kättingar verkar **dragkraft**, en kraft som sträcker och drar isär materialet i den riktning linan är spänd. En böjlig del kan i praktiken bara bära drag: en kätting går inte att trycka på, den slaknar bara. I stänger, stag och pelare kan belastningen däremot gå åt båda hållen. En rak stång kan bära dragkraft i ena lastfallet och **tryckkraft**, en kraft som pressar samman materialet, i ett annat. Ett diagonalstag i en byggställning är ett vanligt exempel: det dras när ställningen pressas åt ena hållet och trycks när den pressas åt det andra. Drag och tryck är alltså inte egenskaper hos en viss sorts detalj, utan hos den belastning detaljen bär för tillfället.

Skillnaden mellan drag och tryck återkommer genom hela kapitlet, och den är inte symmetrisk. En lång, smal detalj som belastas i drag håller så länge materialet håller. Samma detalj belastad i tryck kan i stället vika ut åt sidan långt innan materialet är i närheten av sin gräns. Det fenomenet behandlas i avsnittet om hållfasthet.

[[figur:fig-6.1.1-a]]

## Kraftresultanter

Ett föremål utsätts sällan för bara en kraft. Gångbron belastas samtidigt av sin egen tyngd, av trafikanternas tyngd och av stödens krafter. En container som lyfts av en kran hålls samtidigt av flera lyftkättingar. För att förstå hur föremålet till slut beter sig behöver de enskilda krafterna läggas samman till en enda kraft med samma sammantagna verkan: **resultanten**.

Verkar två krafter längs samma linje adderas eller subtraheras de bara: två krafter åt samma håll läggs ihop, två krafter åt motsatta håll dras ifrån varandra, och resultanten får den riktning den största kraften pekar i. Verkar krafterna i olika riktningar krävs en geometrisk konstruktion eller en beräkning. För två krafter som är vinkelräta mot varandra, en vanlig situation i tekniska sammanhang, går resultantens storlek att beräkna med Pythagoras sats.

Två bogserbåtar drar en pråm med raka linor. Den ena båten drar med kraften F_1 = 3000 N rakt norrut, den andra med kraften F_2 = 4000 N rakt österut. Krafterna är vinkelräta mot varandra, så resultantens storlek blir

*F_R = √(F_1² + F_2²)*

F_R = √(3000² + 4000²) = √(9 000 000 + 16 000 000) = √25 000 000 = 5000 N

Pråmen påverkas alltså sammantaget av en kraft på 5000 N. Riktningen ligger mellan nord och öst, närmare öst eftersom den östliga kraften är störst. Två saker är värda att lägga märke till, eftersom de ofta blandas ihop. Resultantens **riktning** ligger mellan de två krafternas riktningar. Resultantens **storlek** är däremot större än var och en av dem: 5000 N är mer än både 3000 N och 4000 N. Att lägga ihop två krafter som drar åt olika håll ger alltid en resultant som är minst lika stor som den största av dem, och det är en användbar kontroll av ett räknat svar. Ett svar på 3500 N i exemplet ovan hade varit fel utan att man behöver kontrollera själva räkningen.

Ibland är förhållandet det omvända: en enda känd kraft behöver delas upp i två **komposanter**, delkrafter som tillsammans ger samma verkan som originalkraften, för att kunna analyseras i en viss riktning. Ett vanligt fall är en kraft som verkar snett mot den riktning som är intressant. Dras en kälke framåt med ett rep som lutar 30 grader över marken, och repet är spänt med kraften F = 100 N, verkar bara en del av kraften i kälkens färdriktning. Komposanterna är

*F_x = F · cos(v)* och *F_y = F · sin(v)*

där v är vinkeln mellan kraften och den vågräta riktningen. Insatt:

F_x = 100 · cos(30°) = 100 · 0,866 ≈ 86,6 N

F_y = 100 · sin(30°) = 100 · 0,5 = 50 N

F_x, den horisontella komposanten, är den del av dragkraften som faktiskt drar kälken framåt. F_y, den vertikala komposanten, lyfter kälken något och minskar därmed normalkraften mot marken. En och samma kraft kan alltså både driva kälken framåt och samtidigt göra den lättare att dra, beroende på hur den delas upp. Svaren är rimliga: båda komposanterna är mindre än de 100 N repet dras med, vilket de alltid måste vara, och den vågräta är störst eftersom repet lutar mindre än 45 grader.

[[figur:fig-6.1.2-a]]

## Friläggning

För att analysera krafterna på ett föremål utan att blanda ihop dem med krafterna på allt runt omkring används en metod som kallas **friläggning**. Föremålet tänks lösgjort, "frilagt", från sin omgivning, och varje kontakt med omgivningen ersätts med den kraft kontakten ger upphov till: en vägg ersätts med sin normalkraft, ett rep med sin dragkraft, marken med sin normalkraft och eventuella friktionskraft. Kvar blir en ren bild av föremålet med samtliga yttre krafter inritade som pilar.

En låda som vilar stilla på ett sluttande plan friläggs genom att ersätta planet med de krafter det utövar: en normalkraft vinkelrät mot planets yta, och en friktionskraft längs ytan som hindrar lådan från att glida. Dessutom verkar lådans egen tyngdkraft, rakt nedåt, oavsett hur planet lutar. Friläggningen visar direkt varför lådan inte rör sig: de tre krafterna balanserar varandra.

Samma metod gäller för större konstruktioner. Friläggs gångbron som helhet ersätts marken vid de två stöden med varsin kraft riktad uppåt, medan brons egentyngd och trafiklastens tyngd verkar nedåt. Här görs ett antagande som är värt att skriva ut: stöden behandlas som om de bara kunde ge lodräta krafter. Verkliga stöd kan också ta upp krafter i sidled, och vilka krafter ett stöd faktiskt kan bära beror på hur det är utformat. Avsnittet om jämvikt går igenom de vanligaste stödtyperna och när förenklingen håller.

Friläggningen ger på så vis en fullständig lista över de krafter som håller bron uppe och de krafter den måste bära. Utan en korrekt friläggning saknas underlaget för allt annat: en glömd kraft i friläggningen ger ett fel som ingen senare beräkning kan upptäcka.

[[figur:fig-6.1.3-a]]

## Instuderingsfrågor

1. Vilka tre egenskaper beskriver en kraft fullständigt, och varför räcker det inte att bara ange kraftens storlek?
2. Förklara skillnaden mellan tyngdkraft och normalkraft. Kan de vara lika stora? Motivera.
3. En bil accelererar framåt. Förklara i vilken riktning friktionskraften från vägbanan verkar på drivhjulen, och varför beskrivningen "friktion motverkar rörelse" är missvisande här.
4. Varför kan en kätting bara bära dragkraft, medan ett diagonalstag i en byggställning kan bära både drag och tryck?
5. Kapitlets gångbro beskrivs som en modell med bestämd spännvidd, egentyngd och stödplacering, där räcken och skruvförband inte finns med. Varför förenklas en verklig konstruktion på det sättet innan den beräknas, och vilken risk finns med förenklingen?
6. En rugbyspelare med massan 90 kg står stilla på planen. Beräkna tyngdkraften som verkar på spelaren.
7. En travers lyfter en last rakt uppåt. Lyftkroken drar med 4,5 kN uppåt och lastens tyngdkraft är 3,2 kN nedåt. Bestäm resultantens storlek och riktning.
8. Två krafter på 6000 N respektive 8000 N verkar vinkelrätt mot varandra i samma punkt. Bestäm resultantens storlek. Avgör innan du räknar om svaret bör bli större eller mindre än 8000 N, och motivera.
9. En kraft på 200 N drar i ett rep som lutar 40 grader över marken. Beräkna repets horisontella och vertikala komposant.
10. Ett diagonalstag i en byggställning är spänt med 2,5 kN och lutar 55 grader mot vågplanet. Beräkna hur stor del av stagets kraft som verkar vågrätt respektive lodrätt. Vilken av komposanterna är störst, och stämmer det med vad du kan vänta dig av vinkeln?
11. En lampa hänger stilla i en enda lina från taket. Frilägg lampan, rita in samtliga yttre krafter och ange vad som måste gälla mellan dem för att lampan ska hänga stilla. Vad blir linans dragkraft om lampans massa är 3,0 kg?
12. En arbetare drar en släde med ett rep som lutar 25 grader över marken. Repet är spänt med 400 N. Frilägg släden och rita in samtliga yttre krafter. Beräkna repets båda komposanter, och förklara sedan vilken av dem som minskar normalkraften mot marken och varför det gör släden lättare att dra. Vad skulle hända med de båda komposanterna om arbetaren i stället höll repet nästan vågrätt?
