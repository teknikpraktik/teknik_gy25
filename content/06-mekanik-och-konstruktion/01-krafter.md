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
figures: ["fig-6.1.1-b", "fig-6.1.1-a", "fig-6.1.2-a", "fig-6.1.3-a", "fig-6.1.4-a"]
prerequisites: []
---

## Kraftbegreppet

En gångbro över en bäck är en enkel [[begrepp:teknisk lösning]] som ser ut att stå fullständigt stilla. Ändå belastas den hela tiden: av sin egen tyngd, av var och en som passerar, och av krafterna från de två stöden som håller den uppe. Det bron gör, osynligt men oavbrutet, är att ta emot dessa krafter och leda dem vidare ner i marken. Att reda ut vilka krafter som verkar, och hur de samverkar, är utgångspunkten för hela kapitlet.

En **kraft** är en påverkan som kan förändra ett föremåls rörelse eller form. En kraft har tre egenskaper som tillsammans bestämmer dess verkan: en **storlek**, mätt i enheten newton (N); en **riktning**, det håll kraften verkar i; och en **angreppspunkt**, den plats på föremålet där kraften griper an. En newton motsvarar ungefär tyngdkraften på ett äpple. Eftersom en kraft har både storlek och riktning räknas den som en vektor, och den ritas därför som en pil: pilens längd visar storleken, pilens riktning visar kraftens riktning, och pilens startpunkt markerar angreppspunkten. En bild där de krafter som verkar i en situation ritas ut som pilar kallas ett **kraftdiagram**.

Angreppspunkten är lätt att förbise men avgör ofta utgången. Samma kraft mot en dörr ger vitt skilda resultat beroende på om den griper an vid handtaget eller intill gångjärnet, och samma last på gångbron belastar stöden olika beroende på var på bron den står. Båda sambanden utvecklas längre fram i kapitlet.

[BILD 6.1-1] Innehåll: En enda kraftpil mot ett föremål, där pilens längd är måttsatt och märkt "storlek (N)", pilens riktning är markerad med en vinkel mot vågplanet och märkt "riktning", och pilens startpunkt är ringad och märkt "angreppspunkt". Bredvid visas samma föremål i tre varianter där en egenskap i taget har ändrats: en med dubbelt så lång pil (större storlek), en med pilen vriden (annan riktning) och en med pilen flyttad till en annan punkt på föremålet (annan angreppspunkt), så att det framgår att de tre egenskaperna kan varieras oberoende av varandra. Bildtext: "En kraft bestäms av tre egenskaper: storlek, riktning och angreppspunkt. De kan varieras var för sig."

Vissa krafter går igen så ofta i tekniska sammanhang att de har egna namn. **Tyngdkraften** är den kraft med vilken jorden drar varje föremål mot sitt centrum, det vill säga rakt nedåt. Den beräknas som

*F_g = m · g*

där F_g är tyngdkraften i newton (N), m är föremålets massa i kilogram (kg) och g är tyngdaccelerationen, ungefär 9,8 m/s² nära jordytan. En människa på 70 kg belastar därför det den står på med ungefär 70 · 9,8 ≈ 686 N, drygt 0,7 kN. Massa och tyngdkraft är alltså inte samma sak: massan är densamma överallt, medan tyngdkraften beror på var föremålet befinner sig.

När ett föremål vilar mot ett underlag trycker underlaget tillbaka med en **normalkraft**, riktad rakt ut från kontaktytan. Det är normalkraften från marken som håller en gångtrafikant uppe, och normalkraften från brodäcket som håller uppe cykeln som rullar över det. Namnet syftar på att kraften alltid är vinkelrät, "normal", mot ytan den verkar från, oavsett om ytan är vågrät, lutande eller lodrät.

Mellan två ytor som ligger an mot varandra uppstår dessutom en **friktionskraft**, riktad längs kontaktytan. Friktionskraften motverkar den relativa rörelsen mellan ytorna, eller tendensen till glidning när ytorna ännu inte rör sig i förhållande till varandra. Formuleringen är viktig, eftersom friktion ofta beskrivs slarvigt som något som bara bromsar. Det stämmer när en låda skjuts över ett golv: lådan glider mot golvet, och friktionen verkar bakåt. Men ett drivhjul på en bil trycker bakåt mot vägbanan, och friktionen från vägbanan verkar då framåt på hjulet. Det är alltså friktion som driver bilen framåt. Utan friktion skulle inte bara bromsar utan också däck, skosulor och skruvförband sluta fungera.

I linor, vajrar och kättingar verkar **dragkraft**, en kraft som sträcker materialet i linans riktning. En böjlig del kan bara bära drag: en kätting går inte att trycka på, den slaknar bara. I stänger och stag kan belastningen däremot gå åt båda hållen. Samma raka stång kan bära dragkraft i ett lastfall och **tryckkraft**, en kraft som pressar samman materialet, i ett annat. Ett diagonalstag i en byggställning dras när ställningen pressas åt ena hållet och trycks när den pressas åt det andra. Drag och tryck är alltså inte egenskaper hos en viss sorts detalj, utan hos den belastning detaljen bär för tillfället.

Skillnaden är inte symmetrisk. Vid dragbelastning bestäms bärförmågan i första hand av materialets och förbandens hållfasthet. Vid tryck tillkommer att en lång, smal detalj kan förlora stabiliteten och vika ut åt sidan långt innan materialet är i närheten av sin gräns. Det fenomenet, knäckning, behandlas i avsnittet om hållfasthet.

[BILD 6.1-2] Innehåll: Fyra delbilder med kraftdiagram. Först en gångtrafikant på gångbron: tyngdkraft nedåt, normalkraft uppåt från brodäcket. Sedan två delbilder som visar friktionskraftens riktning i motsatta fall: en låda som skjuts åt höger över ett golv, med friktionskraften ritad åt vänster, och ett drivhjul på en bil, där hjulet trycker bakåt mot vägbanan och friktionskraften på hjulet ritas framåt, med en text som markerar att det är friktionen som driver bilen. Sist drag och tryck: en lyftkättings dragkraft på en upphängd container, med en not om att kättingen bara kan bära drag, bredvid ett diagonalstag i en byggställning ritat i två lastfall, ett där staget dras och ett där det trycks. Varje kraft märks med namn och pilriktning. Bildtext: "De namngivna krafttyperna på verkliga föremål. Friktionen kan verka framåt: det är den som driver bilen."

## Kraftresultanter

Ett föremål utsätts sällan för bara en kraft. Gångbron belastas samtidigt av sin egen tyngd, av trafikanternas tyngd och av stödens krafter. En container som lyfts av en kran hålls samtidigt av flera lyftkättingar. För att förstå hur föremålet till slut beter sig behöver de enskilda krafterna läggas samman till en enda kraft med samma sammantagna verkan: **resultanten**, F_R.

Verkar två krafter längs samma linje adderas eller subtraheras de bara: två krafter åt samma håll läggs ihop, två krafter åt motsatta håll dras ifrån varandra, och resultanten pekar åt det håll den största kraften drar. Verkar krafterna i olika riktningar måste de läggas samman geometriskt. Två krafter läggs samman spets mot svans: den andra pilen ritas med sin startpunkt i den förstas spets, och resultanten går från den första pilens startpunkt till den andra pilens spets. Ritar man pilarna i skala kan resultanten mätas direkt med linjal och gradskiva. När de två krafterna är vinkelräta mot varandra bildar de tillsammans en rätvinklig triangel, och då kan resultantens storlek räknas ut exakt med Pythagoras sats i stället för att mätas.

Två bogserbåtar drar en pråm med raka linor. Den ena båten drar med kraften F_1 = 3000 N rakt norrut, den andra med F_2 = 4000 N rakt österut. Krafterna är vinkelräta, så resultantens storlek blir

*F_R = √(F_1² + F_2²)*

F_R = √(3000² + 4000²) = √(9 000 000 + 16 000 000) = √25 000 000 = 5000 N

Riktningen får man ur samma räta triangel. Den geometriska bilden visar direkt att resultanten pekar mellan nord och öst, närmare öst eftersom den östliga kraften är störst. Vill man ha en exakt vinkel mäter man den i skalritningen, eller räknar ut den. Mätt från den östliga riktningen lutar resultanten mot norr med vinkeln α, där tan α = 3000 / 4000 = 0,75, vilket ger α = arctan(0,75) ≈ 36,9°. Resultanten är alltså riktad ungefär 37° norr om öster.

Svaret går att rimlighetsbedöma utan att lita på räkningen. När två krafter drar åt olika håll utan att motverka varandra blir resultanten större än var och en av dem men mindre än deras summa. Här ska alltså 4000 N < F_R < 7000 N, och 5000 N ligger mitt emellan. Sambandet gäller just när krafterna inte motverkar varandra. Drar de delvis mot varandra kan resultanten i stället bli mindre än den största enskilda kraften, och drar de rakt mot varandra blir den så liten som skillnaden mellan dem.

Ibland är förhållandet det omvända: en enda känd kraft behöver delas upp i två **komposanter**, delkrafter som tillsammans har exakt samma verkan som den ursprungliga kraften. Uppdelningen görs geometriskt som en spegelbild av additionen. Rita kraften skalenligt som en pil. Rita från pilens startpunkt de två riktningar man vill dela upp kraften i, till exempel vågrätt och lodrätt. Komplettera till en rektangel där kraftpilen är diagonalen. Rektangelns två sidor är då komposanterna, och de kan mätas med samma skala. Samma uppdelning kan räknas ut med trigonometri:

*F_x = F · cos α* och *F_y = F · sin α*

där α är vinkeln mellan kraften och den vågräta riktningen. Den geometriska och den trigonometriska metoden beskriver samma uppdelning: den ena mäts, den andra räknas.

Dras en kälke framåt med ett rep som lutar α = 30° över marken, och repet är spänt med kraften F = 100 N, blir komposanterna

F_x = 100 · cos(30°) = 100 · 0,866 ≈ 86,6 N

F_y = 100 · sin(30°) = 100 · 0,5 = 50 N

F_x, den vågräta komposanten, är den del av dragkraften som drar kälken framåt. F_y, den lodräta komposanten, lyfter kälken något och minskar därmed normalkraften mot marken, vilket i sin tur minskar friktionen och gör kälken lättare att dra. En och samma kraft kan alltså både driva kälken framåt och göra den lättare att dra. De två komposanterna är inte nya krafter utöver dragkraften, utan just den kraften uttryckt i två riktningar. Svaren är rimliga: båda är mindre än de 100 N repet dras med, och den vågräta är störst eftersom repet lutar mindre än 45°.

[BILD 6.1-3] Innehåll: Två delbilder. Vänster, addition: de två bogserbåtarnas krafter (F_1 = 3000 N norrut, F_2 = 4000 N österut) ritade som pilar i skala och lagda samman spets mot svans, med resultanten F_R = 5000 N inritad som hypotenusan i den rätvinkliga triangeln. Pythagoras samband skrivs ut, och resultantens riktning markeras med vinkeln α ≈ 37° mätt från den östliga riktningen mot norr. Höger, uppdelning: kälken som dras i ett rep som lutar α = 30° över marken, där kraften F = 100 N ritas som diagonalen i en rektangel vars sidor är den vågräta komposanten F_x ≈ 86,6 N och den lodräta F_y = 50 N. En liten hjälpbild visar konstruktionsstegen: rita kraften i skala, rita de två riktningarna, komplettera till rektangel, mät sidorna. Bildtext: "Att lägga samman krafter och att dela upp en kraft i komposanter är samma geometriska konstruktion åt två håll."

## Krafter på ett lutande plan

Det lutande planet knyter ihop krafttyperna med uppdelningen i komposanter, och det visar samtidigt varför det ibland lönar sig att välja andra riktningar än vågrätt och lodrätt. En låda ligger stilla på ett plan som lutar vinkeln α mot vågrätt. Tre krafter verkar på lådan: tyngdkraften F_g rakt nedåt, normalkraften F_N vinkelrätt ut från planet, och friktionskraften F_f längs planet.

Tyngdkraften är den enda som inte redan följer planet. Den delas därför upp i två komposanter längs planets egna riktningar: en komposant längs planet, F_g,∥, som vill dra lådan nedför, och en komposant vinkelrätt mot planet, F_g,⊥, som pressar lådan mot ytan. Med vinkeln α blir

*F_g,∥ = m · g · sin α* och *F_g,⊥ = m · g · cos α*

Eftersom lådan ligger stilla måste krafterna ta ut varandra i båda riktningarna var för sig. Längs planet balanserar friktionen tyngdkraftens komposant nedför, och vinkelrätt mot planet balanserar normalkraften den komposant som pressar lådan mot ytan:

F_f = F_g,∥   och   F_N = F_g,⊥

Lutas planet mer växer sin α och avtar cos α. Komposanten längs planet ökar därför, medan komposanten vinkelrätt mot planet minskar. Det betyder två saker samtidigt: den kraft som vill dra lådan nedför blir större, och normalkraften, som friktionen har att arbeta med, blir mindre. Friktionen räcker allt sämre till, och vid en viss lutning börjar lådan glida.

[BILD 6.1-4] Innehåll: En låda på ett plan som lutar vinkeln α mot vågrätt. Tre krafter ritas ut: tyngdkraften F_g rakt nedåt, normalkraften F_N vinkelrätt ut från planet och friktionskraften F_f längs planet, riktad uppför. Tyngdkraften ritas som en streckad pil, och dess två komposanter ritas som heldragna pilar längs planets riktningar: F_g,∥ = m·g·sin α längs planet (nedför) och F_g,⊥ = m·g·cos α vinkelrätt mot planet. Att F_g är streckad och komposanterna heldragna markerar att komposanterna ersätter tyngdkraften och inte är extra krafter. Vinkeln α är utsatt både vid planets fot och i den lilla rätvinkliga triangeln mellan tyngdkraften och dess komposanter. Bredvid balanserna markeras F_f = F_g,∥ längs planet och F_N = F_g,⊥ vinkelrätt mot planet. Bildtext: "På det lutande planet delas tyngdkraften upp längs och vinkelrätt mot planet. Komposanterna ersätter tyngdkraften, de är inga nya krafter."

Exakt när glidningen börjar beror på ytorna. Den största friktionskraft som två ytor kan ge innan de glider är proportionell mot normalkraften, F_f,max = μ_s · F_N, där **friktionskoefficienten** μ_s är ett tal som beror på materialen i de två ytorna, till exempel omkring 0,4 för trä mot trä. Vid glidgränsen är friktionen maximalt utnyttjad, alltså F_g,∥ = F_f,max, vilket ger m · g · sin α = μ_s · m · g · cos α. Massan och tyngdaccelerationen förkortas bort, och kvar står det enkla villkoret μ_s = tan α. Glidvinkeln avslöjar alltså friktionskoefficienten direkt, oberoende av hur tung lådan är, vilket är grunden för en av övningarna.

## Friläggning

De tre krafterna på lådan ritades ut var för sig, lösgjorda från planet och omgivningen. Den metoden har ett namn. Att **frilägga** ett föremål är att tänka det lösgjort från allt runt omkring och ersätta varje kontakt med den kraft kontakten ger upphov till: en vägg ersätts med sin normalkraft, ett rep med sin dragkraft, marken med sin normalkraft och eventuella friktionskraft. Resultatet ritas som ett **friläggningsdiagram**. Till skillnad från ett allmänt kraftdiagram visar det ett enda, isolerat föremål med enbart de yttre krafter som verkar på just det föremålet.

Lådan på det lutande planet är ett fullständigt exempel: planet ersätts av normalkraften och friktionskraften, och lådans egen tyngdkraft verkar rakt nedåt oavsett hur planet lutar. Här är en sak värd att hålla reda på. Tyngdkraftens komposanter F_g,∥ och F_g,⊥ är inte nya krafter vid sidan av tyngdkraften, utan tyngdkraften uppdelad. I ett friläggningsdiagram ritar man därför antingen den hela tyngdkraften eller dess två komposanter, aldrig alla tre samtidigt, eftersom det vore att räkna samma kraft två gånger.

Samma metod skalar upp till en hel konstruktion, men först måste konstruktionen ersättas av en modell. Kapitlets gångbro beskrivs därför som en **balkbro** med fri spännvidd 6,0 m och gångbanebredd 1,5 m, med bärverket i två stålbalkar under ett trädäck och ett stöd i vardera änden, kallade A och B. Egentyngden är 3600 N och den nyttiga lasten är gångtrafik, enstaka cyklister och barnvagnar. Modellen utelämnar med flit sådant som inte behövs för frågan: räcken, skruvförband, lutning och rörelser i marken finns inte med. En modell som inte redovisar vad den utelämnar går inte att lita på, och kapitlet skriver därför ut sina antaganden varje gång bron beräknas.

Friläggs bron ersätts marken vid de två stöden med varsin stödkraft riktad uppåt, medan egentyngden och trafiklasten verkar nedåt. Ett antagande är värt att skriva ut: stöden behandlas som om de bara kunde ge lodräta krafter. Verkliga stöd kan också ta upp krafter i sidled, och vad ett stöd faktiskt kan bära beror på hur det är utformat. Avsnittet om jämvikt går igenom de vanligaste stödtyperna och när förenklingen håller. Friläggningen ger på så vis en fullständig lista över de krafter som håller bron uppe och de krafter den måste bära, och blir därmed den bild som avsnittet om jämvikt räknar vidare på. Utan en korrekt friläggning saknas underlaget för allt annat: en glömd kraft ger ett fel som ingen senare beräkning kan upptäcka.

[BILD 6.1-5] Innehåll: Två steg sida vid sida. Vänster: kapitlets gångbro i genomskärning, ritad som konstruktionsmodell med fri spännvidd 6,0 m och gångbanebredd 1,5 m måttsatta, stöden märkta A och B och bärverket som två stålbalkar under ett trädäck. En liten ruta listar modellens antaganden: balkbro, stöden ger endast lodräta krafter, räcken och förband ingår inte. Höger: samma bro frilagd som en enkel balk på två stöd, där egentyngden 3600 N och trafiklasten ritas som pilar nedåt och de två stödkrafterna vid A och B som pilar uppåt. En pil visar övergången från den vänstra bilden till den högra, märkt "friläggning". Bildtext: "Gångbron ersätts av en modell och friläggs som en balk: laster nedåt, stödkrafter uppåt."

## Instuderingsfrågor

1. Vilka tre egenskaper beskriver en kraft fullständigt, och varför räcker det inte att bara ange kraftens storlek?
2. Förklara skillnaden mellan tyngdkraft och normalkraft. Kan de vara lika stora? Motivera.
3. En bil accelererar framåt. Förklara i vilken riktning friktionskraften från vägbanan verkar på drivhjulen, och varför beskrivningen "friktion motverkar rörelse" är missvisande här.
4. Varför kan en kätting bara bära dragkraft, medan ett diagonalstag i en byggställning kan bära både drag och tryck? Förklara också varför en lång, smal detalj beter sig olika vid drag och vid tryck.
5. En resultant kan bestämmas geometriskt eller med Pythagoras sats och trigonometri. Förklara kort vad var och en av de två metoderna går ut på, och varför de ger samma svar.
6. En låda ligger stilla på ett lutande plan. Namnge de tre krafter som verkar på lådan och ange riktningen för var och en. Förklara sedan varför tyngdkraftens två komposanter inte ska ritas som egna krafter vid sidan av tyngdkraften, och varför gångbron ersätts av en förenklad modell innan den friläggs.

## Övningar

1. En rugbyspelare med massan 90 kg står stilla på planen. Beräkna tyngdkraften som verkar på spelaren.
2. En travers lyfter en last rakt uppåt. Lyftkroken drar med 4,5 kN uppåt och lastens tyngdkraft är 3,2 kN nedåt. Bestäm resultantens storlek och riktning.
3. Två krafter på 6000 N respektive 8000 N verkar vinkelrätt mot varandra i samma punkt. Avgör först, utan att räkna, om resultanten bör bli större eller mindre än 8000 N, och motivera. Bestäm sedan resultantens storlek.
4. Ett diagonalstag i en byggställning är spänt med 2,5 kN och lutar 55° mot vågplanet. Beräkna hur stor del av stagets kraft som verkar vågrätt respektive lodrätt. Vilken av komposanterna är störst, och stämmer det med vad du kan vänta dig av vinkeln?
5. En lampa hänger stilla i en enda lina från taket. Frilägg lampan, rita in samtliga yttre krafter och ange vad som måste gälla mellan dem för att lampan ska hänga stilla. Vad blir linans dragkraft om lampans massa är 3,0 kg?
6. En låda med massan 25 kg står stilla på ett plan som lutar 20°. Frilägg lådan och rita in de tre krafter som verkar på den. Beräkna tyngdkraftens komposant längs planet och komposanten vinkelrätt mot planet. Hur stor måste friktionskraften minst vara för att lådan ska ligga stilla, och hur stor blir normalkraften?
7. En låda börjar glida när planet lutas till 22°. Bestäm friktionskoefficienten μ_s mellan lådan och planet. Förklara varför du inte behöver känna till lådans massa för att lösa uppgiften, och bedöm om svaret är rimligt för till exempel trä mot trä.
