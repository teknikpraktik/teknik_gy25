---
id: "6.4"
chapter: 6
sectionNumber: 4
title: Hållfasthet
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-09", "n1-10", "s-01"]
  niva2: ["n2-07", "s-01"]
learningGoals:
  - Identifiera drag, tryck, böjning, skjuvning, vridning och knäckning i
    verkliga konstruktioner.
  - Förklara begreppen spänning och töjning samt beräkna normalspänning i en
    belastad detalj.
  - Läsa av elasticitetsmodul, sträckgräns och brottgräns ur en dragprovkurva
    och använda värdena som underlag för materialval och dimensionering.
abilities: [f3]
concepts_introduced: ["elastisk deformation", "plastisk deformation", "böjning", "skjuvning", "vridning", "knäckning", "spänning", "töjning", "elasticitetsmodul", "sträckgräns"]
concepts_used: ["kraft", "dragkraft", "tryckkraft", "moment"]
figures: ["fig-6.4.1-a", "fig-6.4.1-b", "fig-6.4.2-a", "fig-6.4.3-a"]
prerequisites: ["6.1", "6.2"]
---

## Belastningstyper

Gångbrons balk bär inte bara en tyngd, den bär den på ett bestämt sätt. En [[begrepp:dragkraft]] i en lyftkrans kätting sträcker materialet, en [[begrepp:tryckkraft]] i en pelare pressar samman det, och en trafikant som går över bron böjer balken något nedåt. Den samlade benämningen för de krafter och moment en konstruktion utsätts för under användning är belastning. Att konstruktionen håller betyder att ingen del går sönder eller deformeras för mycket under den belastningen, och hur väl en detalj klarar det kallas dess hållfasthet. Det första en konstruktör behöver kunna är därför att skilja på hur en belastning verkar, eftersom drag, tryck, böjning, skjuvning och vridning ställer helt olika krav på materialet och formen.

All belastning ger upphov till någon grad av deformation, en förändring av föremålets form eller storlek. Är deformationen liten och materialet återgår helt till sin ursprungsform när belastningen tas bort kallas den *elastisk deformation*, som ett gummiband som sträcks och sedan släpps. Blir belastningen tillräckligt stor kvarstår en del av deformationen permanent även efter avlastning, vilket kallas *plastisk deformation*, som en böjd metallklädhängare som inte rätar ut sig igen. Fortsätter belastningen bortom vad materialet tål inträffar till slut brott: materialet spricker eller separeras.

Fem grundläggande belastningssätt räcker för att beskriva det mesta som händer i en konstruktion. Drag och tryck är redan bekanta: kraften verkar längs detaljens längdriktning och sträcker respektive pressar samman materialet. De tre övriga verkar på andra sätt.

*Böjning* uppstår när en konstruktionsdel, typiskt en balk, belastas vinkelrätt mot sin längdriktning så att den kröker sig. Balken dras isär på den ena sidan och trycks samman på den andra samtidigt: gångbrons balk är dragbelastad på undersidan och tryckbelastad på ovansidan när en cyklist passerar. Mellan dragzonen och tryckzonen finns ett område där spänningen är liten. En linjal som läggs platt böjer sig lätt under en liten tyngd, men ställd på högkant, med exakt samma tvärsnittsarea, klarar den betydligt mer innan den böjer lika mycket. Formen på tvärsnittet påverkar alltså böjstyvheten lika mycket som materialet gör.

*Skjuvning* uppstår när två motriktade krafter verkar parallellt med varandra men förskjutna i sidled, som en sax som klipper genom plåt eller en nit som håller ihop två plåtar som dras åt var sitt håll. Materialet tvingas glida i skikt längs ett snitt, i stället för att sträckas eller pressas samman.

*Vridning*, med den tekniska termen torsion, är det tillstånd som uppstår i en detalj när ett moment vrider den kring dess egen längdaxel. Här är det värt att hålla isär två saker som lätt blandas ihop. Det moment som verkar är belastningen, och det kallas ett vridmoment. Vridningen är den verkan belastningen får: materialet vrids, och tvärsnitten förskjuts något i förhållande till varandra längs axeln. Ett vridmoment är alltså orsaken och vridningen är följden, precis som en dragkraft är orsaken och töjningen följden. En skruvmejsel som drar åt en skruv och en drivaxel som överför kraft från en motor till ett hjul är båda belastade av vridmoment och befinner sig båda i vridning.

Sprickor, hål och skarpa hörn är kritiska i samtliga dessa fall, eftersom belastningen koncentreras kring den lokala formförändringen i stället för att fördelas jämnt över tvärsnittet. Det är därför hål i en konstruktionsdel förses med rundade kanter, och därför en liten spricka kan växa och till slut orsaka brott vid en belastning som materialet i övrigt klarar utan problem.

[BILD 6.4-1] Innehåll: Fem smårutor i en rad, en per belastningstyp: drag (spänd lyftkätting), tryck (belastad pelare), böjning (balk som böjer sig, med dragzonen på undersidan och tryckzonen på ovansidan markerade och området mellan dem märkt som lågspänningsområde), skjuvning (en nit som håller ihop två plåtar som dras åt var sitt håll, med snittet markerat) och vridning (en drivaxel som vrids av ett vridmoment, med vridmomentet ritat som en böjd pil märkt "belastning" och den vridna deformationen visad med en ursprungligen rak linje längs axeln som blivit spiralformad, märkt "följd"). Varje ruta har pilar som visar kraftens eller momentets riktning. Bildtext: "De fem belastningstyperna på igenkännbara delar. Vid vridning är vridmomentet orsaken och vridningen följden."

Tryckbelastning har dessutom en egen risk som inte har någon motsvarighet vid drag. En lång, slank detalj som trycks i längdriktningen kan plötsligt vika ut åt sidan långt innan materialet nått sin tryckhållfasthet. Fenomenet heter *knäckning*, och det är inte ett sjätte sätt att belasta en detalj utan ett sätt för en tryckbelastad detalj att gå sönder. Knäckning är en instabilitet: så länge lasten är liten står detaljen rak, men vid en viss last blir det raka läget instabilt och den minsta skevhet som redan finns i detaljen växer okontrollerat.

Två saker avgör om knäckning blir dimensionerande. Den ena är slankheten, alltså förhållandet mellan detaljens längd och tvärsnittets utbredning: en lång, tunn pelare knäcks vid mycket lägre last än en kort och tjock av exakt samma material. Den andra är hur detaljens ändar är fastsatta, eftersom en pelare som är fast inspänd i båda ändar knäcks vid högre last än en som bara vilar ledat mot sina stöd. Det är därför slanka tryckstänger görs kortare, grövre eller stagas på mitten. En lika slank detalj i drag har inte problemet alls: en spänd vajer kan vara hur lång och tunn som helst utan att bli instabil.

[BILD 6.4-2] Innehåll: Tre delbilder. Vänster: tre pelare av samma material och samma tvärsnitt men med olika längd, alla tryckbelastade uppifrån, där den längsta har vikt ut kraftigt åt sidan, den mellersta börjat böja ut och den kortaste står rak. Under varje pelare anges den last som orsakade knäckning, så att sambandet mellan längd och bärförmåga framgår. Mitten: samma pelarlängd i två infästningar, en ledad i båda ändar och en fast inspänd i båda ändar, där den inspända bär högre last innan den viker ut. Höger: en lång, slank vajer belastad i drag, ritad rak och stabil, med texten att samma slankhet inte är något problem vid drag. Bildtext: "Knäckning är en instabilitet hos slanka tryckta delar, inte en materialgräns. En dragen del av samma slankhet har inte problemet."

## Spänning och töjning

Två detaljer av samma material kan tåla helt olika stor kraft om de har olika tjocklek. För att jämföra hur hårt belastat ett material faktiskt är, oavsett detaljens storlek, används *spänning*: kraften delad med den tvärsnittsarea kraften verkar över.

σ = F / A

där σ (den grekiska bokstaven sigma) är spänningen i pascal (Pa) eller, vanligare för konstruktionsmaterial, i newton per kvadratmillimeter (N/mm², vilket är samma sak som megapascal, MPa), F är kraften i newton och A är tvärsnittsarean i kvadratmillimeter.

Formeln gäller inte i alla lägen, och det är värt att veta var gränsen går. σ = F / A ger den genomsnittliga normalspänningen i ett tvärsnitt när kraften drar eller trycker rakt längs detaljens längdaxel och angriper mitt i tvärsnittet. Belastningen kallas då centrisk, och spänningen är då någorlunda jämnt fördelad över hela tvärsnittet. Vid böjning gäller inte det: där varierar spänningen över tvärsnittet, från dragspänning på ena sidan till tryckspänning på den andra, och en enda medelspänning beskriver inte belastningen. Vid skjuvning verkar spänningen dessutom längs snittet i stället för vinkelrätt mot det, och kallas därför skjuvspänning. Kapitlet räknar bara på det centriska fallet, och σ = F / A är den enda spänningsformel som används här.

En stång med tvärsnittsarean 100 mm² belastas centriskt med dragkraften 20 000 N. Spänningen i stången blir

σ = F / A = 20 000 / 100 = 200 N/mm² = 200 MPa

Samma dragkraft på en stång med dubbelt så stor tvärsnittsarea, 200 mm², ger hälften så stor spänning, 100 MPa. Det är spänningen, inte kraften i sig, som avgör om materialet klarar belastningen, vilket är själva anledningen till att tvärsnittets storlek är en av de viktigaste sakerna en konstruktör bestämmer.

Spänningen i en detalj hänger nära ihop med hur mycket den töjs. *Töjning* är den relativa längdändringen hos en belastad detalj:

ε = ΔL / L₀

där ε (epsilon) är töjningen, ΔL är längdändringen och L₀ är ursprungslängden. Eftersom en längd delas med en längd tar enheterna ut varandra: töjning är dimensionslös och saknar enhet, förutsatt att ΔL och L₀ anges i samma enhet. Värdet blir litet för konstruktionsmaterial och anges därför ofta i procent.

Stången ovan, ursprungligen 2000 mm lång, förlängs 1 mm under belastningen. Töjningen blir

ε = ΔL / L₀ = 1 / 2000 = 0,0005 = 0,05 %

Spänning beskriver alltså hur hårt belastat materialet är, medan töjning beskriver hur mycket det faktiskt ger efter.

[BILD 6.4-3] Innehåll: Två delbilder. Vänster: två lika långa stänger med samma dragkraft men olika tvärsnittsarea, 100 mm² och 200 mm², med respektive spänning 200 MPa och 100 MPa angiven. Höger: en stång före och efter belastning, med ursprungslängden 2000 mm och förlängningen 1 mm tydligt uppmätta och markerade. Bildtext: "Samma kraft ger olika spänning beroende på tvärsnittsarean. Det är spänningen, inte kraften, som avgör om materialet håller."

## Dragprovet

Innan en konstruktör kan välja material till en detalj eller räkna på om den håller måste materialets egenskaper vara kända som siffror. De siffrorna tas fram med ett dragprov. En standardiserad provstav spänns fast i en provningsmaskin som drar isär den med långsamt ökande kraft, samtidigt som både kraften och förlängningen mäts kontinuerligt. Resultatet räknas om till spänning och töjning och ritas upp som en dragprovkurva, med töjning på den vågräta axeln och spänning på den lodräta. Ur kurvan läser konstruktören av de tal som sedan styr materialval och dimensionering.

Kurvan har en tydlig, återkommande form. I det första skedet är den rak: spänningen ökar proportionellt mot töjningen, och provstaven återgår helt till sin ursprungslängd om belastningen tas bort. Det är det elastiska området. Lutningen på den räta delen kallas *elasticitetsmodulen*:

E = σ / ε

Elasticitetsmodulen beskriver hur styvt materialet är. Ett material med hög elasticitetsmodul, som stål, töjs mycket lite för en given spänning, medan ett material med låg elasticitetsmodul, som gummi, töjs desto mer. Stål har en elasticitetsmodul på ungefär 200 GPa, alltså 200 000 N/mm², vilket är en av anledningarna till att det används där små deformationer under last är viktiga. Sambandet E = σ / ε gäller bara inom det elastiska området, där kurvan är rak, och får inte användas ovanför sträckgränsen.

Vid en viss spänning slutar kurvan att vara rak och böjer av. Materialet har nått sin *sträckgräns*, den spänning där deformationen övergår från elastisk till plastisk. Belastas provstaven bortom sträckgränsen återgår den inte längre helt till sin ursprungslängd när kraften tas bort, utan behåller en bestående deformation. För en konstruktion som ska behålla sin form är sträckgränsen därför den gräns som betyder mest i praktiken, och det är den kapitlets dimensionering utgår från.

Fortsätter belastningen att öka stiger kurvan vidare, men långsammare, fram till sin högsta punkt. Den högsta spänning kurvan når kallas materialets brottgräns, eller draghållfasthet, som är den term materialstandarder normalt använder. Namnet är lätt att missförstå: brottgränsen är inte den spänning där staven går av. Den är den största nominella spänningen under hela provet, alltså den största kraften delad med provstavens ursprungliga tvärsnittsarea.

Vad som händer efter den punkten förklarar skillnaden. Många sega material, som konstruktionsstål, börjar då dra ihop sig lokalt på ett ställe. Provstaven blir märkbart smalare där, ett förlopp som kallas halsning. Den verkliga arean minskar snabbt, och därför sjunker den nominella spänningen i diagrammet trots att materialet i det förtunnade partiet fortfarande belastas hårt. Kurvan faller alltså, och först en bit senare går staven av. Brottet sker med andra ord vid en lägre nominell spänning än brottgränsen.

Elasticitetsmodul, sträckgräns och brottgräns är tillsammans den information som behövs för att avgöra hur styvt ett material är, när det börjar deformeras permanent och när det närmar sig sin gräns.

[BILD 6.4-4] Innehåll: Ett spänning-töjning-diagram för en stålprovstav. Den räta, elastiska delen av kurvan markeras med sin lutning och märks elasticitetsmodulen, med en not om att lutningen bara går att avläsa här. Punkten där kurvan böjer av markeras som sträckgränsen, och området till höger om den märks plastiskt område. Kurvans högsta punkt markeras som brottgränsen, med förtydligandet att detta är den största nominella spänningen under provet. Den fallande delen efter toppen märks halsning, och kurvans slutpunkt märks brott, tydligt lägre än brottgränsen. Under diagrammet visas provstaven i fyra lägen som motsvarar fyra punkter på kurvan: obelastad, elastiskt sträckt, med begynnande midja vid halsningen, och avsliten. En liten skiss av dragprovningsmaskinen placeras bredvid. Bildtext: "Dragprovkurvan: elasticitetsmodulen är den räta delens lutning, sträckgränsen där den böjer av, brottgränsen den högsta punkten."

## Instuderingsfrågor

1. Förklara skillnaden mellan elastisk och plastisk deformation, och ge ett exempel på vardera från en verklig konstruktion eller produkt.
2. Ett vridmoment och en vridning är inte samma sak. Förklara skillnaden, och ge ett exempel på en maskindel där båda förekommer.
3. Varför räknas knäckning inte som en sjätte belastningstyp vid sidan av drag, tryck, böjning, skjuvning och vridning? Vad är det i stället?
4. Två stag av samma material och samma slanka dimension sitter i en byggställning. Det ena belastas i drag, det andra i tryck. Förklara varför det ena riskerar att knäckas men inte det andra.
5. Varför beskriver σ = F / A inte spänningen i en balk som böjs? Vad är det som skiljer böjningsfallet från det centriska dragfallet?
6. Brottgränsen är inte den spänning där provstaven går av. Förklara vad brottgränsen faktiskt är, och varför dragprovkurvan faller efter den punkten.

## Övningar

1. En stång med tvärsnittsarean 50 mm² belastas centriskt med dragkraften 15 000 N. Beräkna spänningen.
2. Ett dragstag ska klara dragkraften 25 000 N utan att spänningen överstiger 125 N/mm². Beräkna den tvärsnittsarea staget minst måste ha.
3. En balk som ursprungligen är 3000 mm lång töjs 1,5 mm under belastning. Beräkna töjningen i procent.
4. En stålstång är 2500 mm lång och belastas till spänningen 120 N/mm². Stålets elasticitetsmodul är 200 000 N/mm². Beräkna töjningen och därefter stångens förlängning i millimeter. Bedöm om svaret är rimligt för en stålstång.
5. Ett dragstag av stålet S235 har tvärsnittsarean 300 mm² och belastas med dragkraften 54 000 N. Stålets sträckgräns är 235 N/mm², brottgränsen 360 N/mm² och elasticitetsmodulen 200 000 N/mm². Beräkna spänningen och avgör om staget befinner sig i det elastiska eller det plastiska området. Beräkna därefter töjningen, och förklara varför beräkningen av töjningen hade varit ogiltig om spänningen i stället legat på 300 N/mm². Vad skulle hända med staget om lasten ökades så att spänningen nådde 250 N/mm² och sedan togs bort helt?
