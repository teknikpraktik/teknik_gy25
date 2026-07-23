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

En gångbro över en bäck är en enkel [[begrepp:teknisk lösning]] som ser ut att stå fullständigt stilla. Ändå belastas den varje sekund: av sin egen tyngd, av var och en som passerar och av krafterna från de två stöden som håller den uppe. Det bron gör, osynligt men oavbrutet, är att ta emot dessa krafter och leda dem vidare ner i marken. Att reda ut vilka krafter som verkar på en konstruktion, och hur de samverkar, är det första en konstruktör måste kunna, och därför utgångspunkten för hela kapitlet.

En *kraft* är en påverkan som kan förändra ett föremåls rörelse eller form. På en färdig konstruktion är det den andra verkan som gäller. Krafterna får den inte att röra sig, utan de försöker töja, trycka och böja den, och konstruktionens uppgift är att stå emot utan att deformeras för mycket eller gå sönder. En kraft har tre egenskaper som tillsammans bestämmer dess verkan. Den har en storlek, mätt i newton (N), där en newton ungefär motsvarar tyngden av ett äpple. Den har en riktning, det håll kraften verkar åt. Och den har en angreppspunkt, den plats på konstruktionen där kraften griper an. Eftersom en kraft har både storlek och riktning är den en vektor, och den ritas därför som en pil. Pilens längd visar storleken, pilens riktning visar kraftens riktning och pilens startpunkt markerar angreppspunkten. En bild där krafterna i en situation ritas ut som pilar kallas ett kraftdiagram.

Angreppspunkten är lätt att förbise men avgör ofta utgången. En trafikant som står mitt på gångbron belastar de två stöden lika, men samma person intill det ena stödet belastar det stödet mycket hårdare än det andra. Var lasten griper an avgör alltså hur den fördelas i konstruktionen, ett samband som avsnittet om jämvikt räknar på.

[BILD 6.1-1] Innehåll: En enda kraftpil mot en konstruktionsdel, där pilens längd är måttsatt och märkt "storlek (N)", pilens riktning är markerad med en vinkel mot vågplanet och märkt "riktning", och pilens startpunkt är ringad och märkt "angreppspunkt". Bredvid visas samma del i tre varianter där en egenskap i taget har ändrats: en med dubbelt så lång pil (större storlek), en med pilen vriden (annan riktning) och en med pilen flyttad till en annan punkt på delen (annan angreppspunkt), så att det framgår att de tre egenskaperna kan varieras oberoende av varandra. Bildtext: "En kraft bestäms av tre egenskaper: storlek, riktning och angreppspunkt. De kan varieras var för sig."

Vissa krafter återkommer så ofta i konstruktioner att de har egna namn. *Tyngdkraften* är den kraft med vilken jorden drar varje föremål rakt nedåt. Den beräknas som

*F_g = m · g*

där F_g är tyngdkraften i newton (N), m är massan i kilogram (kg) och g är tyngdaccelerationen, ungefär 9,8 m/s² nära jordytan. En gångtrafikant på 70 kg belastar därför bron med ungefär 70 · 9,8 ≈ 686 N, drygt 0,7 kN, och konstruktionens egen tyngd verkar på samma sätt, riktad rakt nedåt genom varje del. Massa och tyngd är inte samma sak. Massan är densamma överallt, medan tyngdkraften beror på var föremålet befinner sig.

När en konstruktionsdel vilar mot ett underlag trycker underlaget tillbaka med en *normalkraft*, riktad rakt ut från kontaktytan. Det är normalkraften från ett fundament som bär en pelare, och normalkraften från brostöden som bär upp gångbrons balk. Namnet syftar på att kraften alltid är vinkelrät, "normal", mot ytan den verkar från, oavsett om ytan är vågrät, lutande eller lodrät.

Mellan två ytor som pressas mot varandra uppstår dessutom en *friktionskraft*, riktad längs kontaktytan. I en konstruktion är friktion sällan något som bara bromsar. Ofta är det tvärtom friktionen som håller ihop bygget. Ett skruvförband som klämmer samman två plåtar bär last genom friktionen mellan plåtarna, inte genom att skruven skjuvas, och ett tungt fundament hålls kvar mot marken av friktionen mot underlaget när en vågrät kraft försöker skjuta det åt sidan. Friktionskraften motverkar rörelsen, eller tendensen till rörelse, mellan ytorna. Utan den skulle skruvförband, fundament och infästningar sluta fungera, och det är därför en konstruktör lika ofta behöver se till att friktionen räcker till som att den hålls nere.

I linor, vajrar och stag verkar *dragkraft*, en kraft som sträcker materialet i längdriktningen. En böjlig del kan bara bära drag. En vajer går inte att trycka på, den slaknar bara. I stänger och pelare kan belastningen däremot gå åt båda hållen. Samma raka stång bär *tryckkraft*, en kraft som pressar samman materialet, i ett lastfall och dragkraft i ett annat. Ett diagonalstag i en byggställning dras när ställningen pressas åt ena hållet och trycks när den pressas åt det andra. Drag och tryck är alltså inte egenskaper hos en viss sorts detalj, utan hos den belastning detaljen bär för tillfället.

Skillnaden mellan drag och tryck är inte symmetrisk, och det får konsekvenser för hur en del formges. Vid dragbelastning bestäms bärförmågan av materialets och förbandens hållfasthet. Vid tryck tillkommer att en lång, smal del kan förlora stabiliteten och vika ut åt sidan långt innan materialet är i närheten av sin gräns. Det fenomenet, knäckning, behandlas i avsnittet om hållfasthet, och det är skälet till att tryckta delar ofta görs grövre eller kortare än dragna delar som bär lika mycket.

[BILD 6.1-2] Innehåll: Fyra delbilder med kraftdiagram på verkliga konstruktionsdelar. Först en pelare på ett fundament: tyngdkraft och last nedåt, normalkraft uppåt från fundamentet. Sedan ett skruvförband som klämmer samman två plåtar som dras åt var sitt håll, med friktionskraften mellan plåtytorna inritad så att den håller emot glidningen, och en not om att lasten bärs av friktionen, inte av skruven. Sist drag och tryck: en spänd vajer som bär en upphängd last i ren dragkraft, med en not om att vajern bara kan bära drag, bredvid ett diagonalstag i en byggställning ritat i två lastfall, ett där staget dras och ett där det trycks. Varje kraft märks med namn och pilriktning. Bildtext: "De namngivna krafttyperna på verkliga konstruktionsdelar. I ett skruvförband är det ofta friktionen som bär lasten."

## Att lägga samman och dela upp krafter

En konstruktionsdel utsätts sällan för bara en kraft. En knutpunkt där flera stag möts hålls av alla stagen samtidigt, och gångbron belastas av sin egen tyngd, av trafikanterna och av de två stödens krafter på en gång. För att förstå hur delen till slut belastas behöver de enskilda krafterna läggas samman till en enda kraft med samma sammantagna verkan: *resultanten*, F_R.

Två krafter som verkar längs samma linje läggs bara ihop eller dras ifrån varandra. Pekar de åt samma håll adderas de, pekar de åt motsatt håll subtraheras de, och resultanten pekar åt det håll den största kraften drar. Verkar krafterna i olika riktningar måste de läggas samman geometriskt. De ritas spets mot svans, så att den andra pilen börjar i den förstas spets, och resultanten går från den första pilens startpunkt till den andra pilens spets. Ritas pilarna i skala kan resultanten mätas direkt med linjal och gradskiva. Är de två krafterna vinkelräta mot varandra bildar de en rätvinklig triangel, och då kan resultantens storlek räknas ut exakt med Pythagoras sats i stället för att mätas.

En hörnstolpe i ett stängsel visar varför resultanten är det som räknas. Två raka trådar drar i stolpens topp, den ena med F_1 = 3000 N rakt åt norr, den andra med F_2 = 4000 N rakt åt öster. Trådarna är vinkelräta mot varandra, och det stolpen och dess fundament måste hålla emot är inte de två trådkrafterna var för sig utan deras resultant. Storleken blir

*F_R = √(F_1² + F_2²)*

F_R = √(3000² + 4000²) = √(9 000 000 + 16 000 000) = √25 000 000 = 5000 N

Riktningen får man ur samma räta triangel. Bilden visar direkt att resultanten pekar mellan norr och öster, närmare öster eftersom den östliga kraften är störst. Den exakta vinkeln kan mätas i skalritningen eller räknas ut. Mätt från den östliga riktningen lutar resultanten mot norr med vinkeln α, där tan α = 3000 / 4000 = 0,75, vilket ger α ≈ 37°. Stolpen ska alltså luta och stagas mot en kraft på 5000 N riktad ungefär 37° norr om öster, inte mot någon av de två trådkrafterna för sig.

Svaret går att rimlighetsbedöma utan att lita på räkningen. När två krafter drar åt olika håll utan att motverka varandra blir resultanten större än var och en av dem men mindre än deras summa. Här ska alltså 4000 N < F_R < 7000 N, och 5000 N ligger mitt emellan. Drar krafterna delvis mot varandra kan resultanten i stället bli mindre än den största enskilda kraften, och drar de rakt mot varandra blir den så liten som skillnaden mellan dem.

Ibland är förhållandet det omvända. En enda känd kraft behöver delas upp i två *komposanter*, delkrafter som tillsammans har exakt samma verkan som den ursprungliga kraften. Uppdelningen görs geometriskt som en spegelbild av additionen. Kraften ritas skalenligt som en pil, de två riktningar man vill dela upp den i ritas från pilens startpunkt, och rektangeln som har kraftpilen som diagonal kompletteras. Rektangelns sidor är då komposanterna. Samma uppdelning kan räknas ut med trigonometri:

*F_x = F · cos α* och *F_y = F · sin α*

där α är vinkeln mellan kraften och den vågräta riktningen. Den geometriska och den trigonometriska metoden beskriver samma uppdelning, den ena mätt och den andra räknad.

En vajer som stagar en mast visar varför uppdelningen behövs. Vajern är spänd med F = 4000 N och lutar α = 30° mot marken. För att kunna dimensionera det som håller masten behöver konstruktören veta två olika saker, och de svarar mot var sin komposant:

F_x = 4000 · cos(30°) = 4000 · 0,866 ≈ 3464 N

F_y = 4000 · sin(30°) = 4000 · 0,5 = 2000 N

F_x, den vågräta komposanten, är den kraft som markfästet måste hålla emot för att inte dras loss i sidled. F_y, den lodräta komposanten, är den kraft som pressar masten nedåt mot sitt fundament. De två komposanterna är inte nya krafter utöver vajerkraften, utan just den kraften uttryckt i två riktningar. Svaren är rimliga. Båda är mindre än de 4000 N vajern är spänd med, och den vågräta är störst eftersom vajern lutar mindre än 45°.

[BILD 6.1-3] Innehåll: Två delbilder. Vänster, addition: hörnstolpen sedd uppifrån, med de två trådkrafterna (F_1 = 3000 N norrut, F_2 = 4000 N österut) ritade som pilar i skala och lagda samman spets mot svans, med resultanten F_R = 5000 N inritad som hypotenusan i den rätvinkliga triangeln. Pythagoras samband skrivs ut, och resultantens riktning markeras med vinkeln α ≈ 37° mätt från öster mot norr. En not pekar ut att det är resultanten stolpen ska stagas mot. Höger, uppdelning: en mast stagad av en vajer som lutar α = 30° mot marken och är spänd med F = 4000 N, ritad som diagonalen i en rektangel vars sidor är den vågräta komposanten F_x ≈ 3464 N och den lodräta F_y = 2000 N. En pil pekar ut markfästet som ska hålla emot F_x och mastfoten som pressas ned av F_y. Bildtext: "Att lägga samman krafter och att dela upp en kraft i komposanter är samma geometriska konstruktion åt två håll. Varje komposant svarar mot en del av konstruktionen som ska dimensioneras."

## Friläggning

Krafterna på hörnstolpen och masten ritades ut var för sig, lösgjorda från marken och omgivningen. Den metoden har ett namn. Att *frilägga* en konstruktionsdel är att tänka den lösgjord från allt runt omkring och ersätta varje kontakt med den kraft kontakten ger upphov till. Ett stag ersätts med sin dragkraft, ett fundament med sin normalkraft och eventuella friktionskraft, ett brostöd med sin stödkraft. Resultatet ritas som ett friläggningsdiagram. Till skillnad från ett allmänt kraftdiagram visar det ett enda, isolerat föremål med enbart de yttre krafter som verkar på just det föremålet.

En sak är värd att hålla reda på. När en kraft har delats upp i komposanter är komposanterna inte nya krafter vid sidan av den ursprungliga, utan den kraften uppdelad. I ett friläggningsdiagram ritar man därför antingen den hela kraften eller dess två komposanter, aldrig alla tre samtidigt, eftersom det vore att räkna samma kraft två gånger.

Metoden skalar upp från en enskild del till en hel konstruktion, men först måste konstruktionen ersättas av en modell. Kapitlets gångbro beskrivs därför som en balkbro med fri spännvidd 6,0 m och gångbanebredd 1,5 m, med bärverket i två stålbalkar under ett trädäck och ett stöd i vardera änden, kallade A och B. Egentyngden är 3600 N och den nyttiga lasten är gångtrafik, enstaka cyklister och barnvagnar. Modellen utelämnar med flit sådant som inte behövs för frågan, som räcken, skruvförband, lutning och rörelser i marken. En modell som inte redovisar vad den utelämnar går inte att lita på, och kapitlet skriver därför ut sina antaganden varje gång bron beräknas.

Friläggs bron ersätts marken vid de två stöden med varsin stödkraft riktad uppåt, medan egentyngden och trafiklasten verkar nedåt. Ett antagande är värt att skriva ut: stöden behandlas som om de bara kunde ge lodräta krafter. Verkliga stöd kan också ta upp krafter i sidled, och vad ett stöd faktiskt klarar beror på hur det är utformat. Avsnittet om jämvikt går igenom de vanligaste stödtyperna och när förenklingen håller. Friläggningen ger på så vis en fullständig lista över de krafter som håller bron uppe och de krafter den måste bära, och blir därmed den bild som avsnittet om jämvikt räknar vidare på. Utan en korrekt friläggning saknas underlaget för allt annat. En glömd kraft ger ett fel som ingen senare beräkning kan upptäcka.

[BILD 6.1-4] Innehåll: Två steg sida vid sida. Vänster: kapitlets gångbro i genomskärning, ritad som konstruktionsmodell med fri spännvidd 6,0 m och gångbanebredd 1,5 m måttsatta, stöden märkta A och B och bärverket som två stålbalkar under ett trädäck. En liten ruta listar modellens antaganden: balkbro, stöden ger endast lodräta krafter, räcken och förband ingår inte. Höger: samma bro frilagd som en enkel balk på två stöd, där egentyngden 3600 N och trafiklasten ritas som pilar nedåt och de två stödkrafterna vid A och B som pilar uppåt. En pil visar övergången från den vänstra bilden till den högra, märkt "friläggning". Bildtext: "Gångbron ersätts av en modell och friläggs som en balk: laster nedåt, stödkrafter uppåt."

## Instuderingsfrågor

1. Vilka tre egenskaper beskriver en kraft fullständigt, och varför räcker det inte att ange bara storleken när man analyserar en konstruktion?
2. Förklara skillnaden mellan tyngdkraft och normalkraft. Var i gångbron verkar de, och kan de vara lika stora? Motivera.
3. I en konstruktion beskrivs friktion ofta som något som bara bromsar. Ge två exempel på att friktion i stället håller ihop eller håller kvar en konstruktion.
4. Varför kan en vajer bara bära dragkraft, medan ett diagonalstag kan bära både drag och tryck? Förklara också varför en lång, smal del beter sig olika vid drag och vid tryck, och vad det får för följd för hur delen formges.
5. En resultant kan bestämmas grafiskt eller med Pythagoras sats och trigonometri. Förklara kort vad var och en av de två metoderna går ut på, och varför de ger samma svar.
6. Ett stag drar snett i sin infästning. Varför delar en konstruktör upp stagets kraft i en vågrät och en lodrät komposant, och vad används var och en av komposanterna till?
7. Vad innebär det att frilägga en konstruktion, och varför måste gångbron ersättas av en förenklad modell innan den kan friläggas? Förklara också varför en kraft som glöms bort i friläggningen ger ett fel som ingen senare beräkning kan hitta.

## Övningar

1. En rak stålbalk som ska monteras i en konstruktion har massan 240 kg. Beräkna balkens egentyngd, alltså tyngdkraften som verkar på den.
2. En travers lyfter en last rakt uppåt. Lyftkroken drar med 4,5 kN uppåt och lastens tyngdkraft är 3,2 kN nedåt. Bestäm resultantens storlek och riktning.
3. Två trådar drar i en hörnstolpe med 6000 N respektive 8000 N, vinkelrätt mot varandra. Avgör först, utan att räkna, om resultanten bör bli större eller mindre än 8000 N, och motivera. Bestäm sedan den resultant som stolpen ska stagas mot.
4. Ett diagonalstag i en byggställning är spänt med 2,5 kN och lutar 55° mot vågplanet. Beräkna hur stor del av stagets kraft som verkar vågrätt respektive lodrätt. Vilken av komposanterna är störst, och stämmer det med vad du kan vänta dig av vinkeln?
5. En armatur hänger stilla i en enda lina från ett tak. Frilägg armaturen, rita in samtliga yttre krafter och ange vad som måste gälla mellan dem för att den ska hänga stilla. Vad blir linans dragkraft om armaturens massa är 3,0 kg?
6. En vajer som stagar en mast är spänd med 5,0 kN och lutar 40° mot marken. Beräkna hur stor vågrät kraft markfästet måste hålla emot och hur stor lodrät kraft vajern pressar ned i masten. Bedöm om det är rimligt att den vågräta komposanten är störst, och förklara vad som skulle hända med de två komposanterna om vajern spändes brantare.
