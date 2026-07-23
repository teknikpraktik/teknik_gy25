---
id: "6.6"
chapter: 6
sectionNumber: 6
title: Dimensionering
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-09", "n1-10", "s-01"]
  niva2: ["n2-07", "s-01"]
learningGoals:
  - Identifiera vilka laster en konstruktion kan utsättas för, däribland
    egentyngd, nyttig last, vind- och snölast, och skilja mellan statisk och
    dynamisk belastning.
  - Dimensionera en enkel konstruktionsdetalj mot en given belastning med hjälp
    av tillåten spänning och säkerhetsfaktor.
  - Bedöma beräkningsresultats rimlighet med överslagsräkning och enhetskontroll.
abilities: [f3, f2]
concepts_introduced: ["säkerhetsfaktor", "dimensionering"]
concepts_used: ["kraft", "spänning", "sträckgräns", "dragkraft"]
figures: ["fig-6.6.1-a", "fig-6.6.2-a", "fig-6.6.3-a"]
prerequisites: ["6.1", "6.3", "6.4", "6.5"]
---

## Laster och belastningsfall

Innan en enda dimension kan bestämmas måste konstruktören veta vad konstruktionen faktiskt ska klara. De yttre orsakerna till en konstruktions belastning kallas laster, och att kartlägga dem är dimensioneringens första steg.

Alla konstruktioner bär sin egen egentyngd, vikten av materialet konstruktionen själv består av. Den är alltid närvarande och förändras sällan över tid. Utöver egentyngden tillkommer den nyttiga lasten, den last konstruktionen är till för att bära: trafikanterna på en gångbro, möblerna i ett rum, godset i ett lager. Utomhuskonstruktioner måste dessutom klara vindlast, det tryck och sug vinden utövar mot konstruktionens ytor, och i snörika klimat snölast, tyngden av snö som lägger sig på tak och andra ytor.

Gångbron visar varför den nyttiga lasten måste bestämmas för sig och inte gissas ur ett enskilt fall. Bron är 6,0 m lång och 1,5 m bred, alltså 9,0 m² gångbana, och egentyngden är 3600 N. Enstaka cyklister, som tidigare avsnitt räknat med, väger några hundra newton. Men en gångbro ska klara att vara full av folk, och för gångtrafik räknar man i Sverige normalt med storleksordningen 4 kN per kvadratmeter gångbana. Full last blir då

9,0 · 4000 = 36 000 N

alltså tio gånger brons egentyngd, och fyrtio gånger den enskilda cyklist bron dimensioneras för att klara utan att någon reflekterar över saken. En konstruktion räknas därför alltid mot flera belastningsfall, och det är sällan det vardagliga fallet som blir avgörande.

Lasterna skiljer sig också åt i hur de varierar över tid. En statisk belastning förändras långsamt eller inte alls, som egentyngden eller ett stillastående lager. En dynamisk belastning varierar snabbt, upprepas eller innefattar rörelse och stöt, som trafik i rörelse, vindbyar eller ett fordon som bromsar hårt. Dynamiska laster kan ge en långt större verkan än deras egen storlek antyder, om de träffar konstruktionen i takt med dess egen naturliga svängning.

Londons Millennium Bridge, en gångbro invigd år 2000, visar hur det kan gå till. På invigningsdagen började bron röra sig något i sidled när den fylldes av folk. Rörelsen i sig var liten, men den räckte för att fotgängarna skulle behöva anpassa sina steg för att hålla balansen, och en människa som balanserar på ett underlag som rör sig i sidled börjar automatiskt gå i takt med underlaget. Ju fler som anpassade sig, desto mer samtidiga blev sidokrafterna från stegen, och desto kraftigare blev rörelsen, som i sin tur fick ännu fler att anpassa sig. Bron och de gående kopplades alltså ihop i en återkoppling som byggde upp sig själv. Det var inte fråga om att tusentals människor råkade gå i takt av en slump. Bron stängdes efter två dagar och öppnades igen först efter att ha försetts med dämpare.

[BILD 6.6-1] Innehåll: Två delbilder. Vänster: kapitlets gångbro med egentyngd, nyttig last, vindlast och snölast markerade med separata pilar och etiketter på respektive del av konstruktionen. Bredvid bron ställs två belastningsfall mot varandra i samma skala: en enskild cyklist på några hundra newton, och full gångtrafik på 4 kN per kvadratmeter över hela den 9,0 m² stora gångbanan, alltså 36 000 N, så att storleksskillnaden syns direkt. Höger: Millennium Bridge-förloppet ritat som en återkopplingsslinga i fyra steg med pilar i en cirkel: bron rör sig något i sidled, de gående anpassar stegen för att hålla balansen, stegens sidokrafter blir mer samtidiga, rörelsen förstärks, tillbaka till steg ett. Under slingan en kort text som markerar att förloppet inte är en slump utan en koppling mellan bron och de gående. Bildtext: "En konstruktion räknas mot flera belastningsfall, och det vardagliga är sällan det dimensionerande. Millennium Bridge svängde för att bron och de gående kopplades ihop."

## Säkerhetsfaktor och dimensioneringsprocessen

*Dimensionering* är processen att välja material, form och mått för en konstruktion så att den klarar sina laster med god marginal. Kärnan i beräkningen är ett enkelt villkor: den verkliga spänningen i en detalj får aldrig överstiga den spänning materialet säkert klarar.

Den spänning en detalj tillåts belastas med kallas tillåten spänning. Den sätts lägre än materialets sträckgräns för att ge marginal mot osäkerheter i beräkningen, mot laster som är större än väntat och mot att materialet inte är exakt så bra som tabellen påstår. Förhållandet mellan sträckgränsen och den tillåtna spänningen kallas *säkerhetsfaktorn*:

tillåten spänning = sträckgräns / säkerhetsfaktor

Kapitlets uppgifter anger alltid vilken säkerhetsfaktor som ska användas. Det är en pedagogisk förenkling. I verkligheten plockas ingen säkerhetsfaktor ur luften: den följer av standarder och föreskrifter, och den beror på vad som byggs, vilket material som används, hur väl lasten är känd, hur allvarliga följderna av ett brott skulle bli och om detaljen kan inspekteras. Moderna byggnormer använder dessutom oftast inte en enda säkerhetsfaktor alls, utan separata faktorer på lastsidan och på materialsidan. Ett tal som 2 eller 3 ska därför läsas som en siffra given i uppgiften, aldrig som ett allmängiltigt riktvärde.

Ett lyftstag i en verkstadstravers får bli exempel. Staget är en rak, rund stålstång som hänger lodrätt och bär lasten i ren dragkraft, vilket är precis det centriska fall där σ = F / A gäller. Staget ska bära dragkraften 47 000 N, materialet är konstruktionsstålet S235 med sträckgränsen 235 N/mm², och säkerhetsfaktorn 2 är given.

Den tillåtna spänningen blir

tillåten spänning = 235 / 2 = 117,5 N/mm²

Formeln för spänning, löst för arean, ger den area staget minst måste ha:

A = F / tillåten spänning = 47 000 / 117,5 = 400 mm²

En rund stång med den tvärsnittsarean har diametern

d = √(4A / π) = √(4 · 400 / 3,14) ≈ √509 ≈ 22,6 mm

Här är det viktigt att uttrycka slutsatsen rätt. Den förenklade dragspänningsberäkningen ger en teoretisk minsta diameter på ungefär 22,6 mm. Det är inte samma sak som en färdig konstruktionsuppgift. Rundstång tillverkas i standarddimensioner, och nästa dimension uppåt är 25 mm. Med den blir den verkliga arean

A = π · 25² / 4 ≈ 491 mm²

och den verkliga spänningen

σ = 47 000 / 491 ≈ 96 N/mm²

vilket ligger under de tillåtna 117,5 N/mm². Staget håller alltså med den valda dimensionen, och kontrollräkningen är ett nödvändigt sista steg: det räcker inte att räkna fram ett minsta mått, man måste också kontrollera att den dimension man faktiskt väljer klarar lasten.

Även efter det steget är staget inte färdigkonstruerat. Ska ändarna gängas blir tvärsnittet mindre i gängans botten än i den släta stången, och det är det minsta tvärsnittet som avgör. Infästningarna i båda ändar måste dimensioneras för sig. Utomhus eller i fuktig miljö tär korrosion på materialet över tid, och en travers som lyfter och sänker last gång på gång utsätter staget för en upprepad, dynamisk belastning som på lång sikt kan ge utmattningsbrott vid en spänning som staget klarar hur länge som helst under statisk last.

Beräkningen ovan är alltså ett steg i en betydligt längre process. En verklig dimensionering omfattar normalt kombinationer av flera samtidiga laster, gällande standarder och föreskrifter, variation i materialets egenskaper, geometrins inverkan, stabilitet mot knäckning och buckling, krav på hur mycket konstruktionen får deformeras, utmattning, förbandens hållfasthet, beständighet mot korrosion och nötning, vad som faktiskt går att tillverka, och slutligen kontroll och provning av det som byggts. Kapitlet behandlar en liten men central del av den kedjan: sambandet mellan last, tvärsnitt, material och marginal.

[BILD 6.6-2] Innehåll: Överst lyftstaget i en verkstadstravers, ritat som en rak, lodrätt hängande rundstång med dragkraften 47 000 N inritad. Under det en kedja i fem rutor med pil mellan varje: tillåten spänning 235 / 2 = 117,5 N/mm², minsta area 47 000 / 117,5 = 400 mm², teoretisk minsta diameter 22,6 mm, vald standarddimension 25 mm, kontrollräknad verklig spänning 96 N/mm². Den sista rutan märks tydligt som ett obligatoriskt steg. Under kedjan en bredare stapel eller ram som visar den verkliga dimensioneringsprocessens omfattning, med lastkombinationer, standarder, materialvariation, geometri, stabilitet, deformationskrav, utmattning, förband, beständighet, tillverkning samt kontroll och provning, där bara det smala fält som motsvarar beräkningskedjan ovan är ifyllt och resten är tomt. Bildtext: "Hela kedjan från last till vald dimension, med kontrollräkningen som obligatoriskt sista steg. Kapitlets modell är en liten del av en verklig dimensionering."

## Rimlighetsbedömning

Ett beräknat svar är inte automatiskt ett korrekt svar. Ett enhets- eller teckenfel kan ge en diameter som är hundra gånger för liten utan att räkningen innehåller något synligt matematiskt fel, och den kontroll som fångar det är att fråga sig om svaret är rimligt.

Överslagsräkning är en snabb, förenklad beräkning med avrundade tal som ger en ungefärlig storleksordning att jämföra det exakta svaret med. Lyftstagets dragkraft på 47 000 N avrundas till 50 000 N och den tillåtna spänningen till 100 N/mm², vilket ger arean 50 000 / 100 = 500 mm², i samma storleksordning som det exakta svaret 400 mm². Hade den exakta beräkningen i stället gett 4 mm² eller 40 000 mm² hade överslaget avslöjat felet omedelbart, långt innan diametern räknades ut.

En enhetskontroll innebär att kontrollera att enheterna går ihop. I exemplet mäts kraften i newton och spänningen i newton per kvadratmillimeter, vilket ger arean direkt i kvadratmillimeter. Hade kraften av misstag lämnats kvar i kilonewton, 47 i stället för 47 000, hade arean blivit tusen gånger för liten och diametern under en millimeter, uppenbart orimlig för en stång som ska bära nästan fem ton. Blandas millimeter och meter, eller newton och kilonewton, uppstår fel som är lätta att missa om bara siffrorna kontrolleras.

En tredje kontroll är att fråga sig vad svaret betyder fysiskt. En stång på 25 mm som bär fem ton går att jämföra med något man sett: ungefär en tumme i tjocklek, och fem ton är ungefär tre personbilar. Den jämförelsen känns rimlig. Ett svar på 2 mm för samma last hade inte gjort det. Att ha en känsla för storleksordningar är en av de mest användbara egenskaperna hos en tekniker, och den byggs upp genom att göra jämförelsen varje gång, inte bara när svaret ser konstigt ut.

[BILD 6.6-3] Innehåll: Två parallella uträkningar av lyftstagets tvärsnittsarea sida vid sida: en korrekt, med kraften i newton, som ger 400 mm², och en felaktig, där kraften av misstag lämnats i kilonewton (47 i stället för 47 000), som ger en area på 0,4 mm² och en diameter under en millimeter. De två diametrarna ritas ut i verklig storlek intill varandra, den korrekta som en stång ungefär lika grov som en tumme och den felaktiga som en tunn tråd, med lasten på nästan fem ton, motsvarande ungefär tre personbilar, angiven ovanför båda. Bildtext: "En enhetskontroll avslöjar det fel som annars är lätt att missa: en förväxlad enhet ger en tråd i stället för en stång."

## Instuderingsfrågor

1. Förklara skillnaden mellan egentyngd och nyttig last, och ge ett exempel på vardera för en byggnad.
2. Varför räknas en konstruktion mot flera belastningsfall i stället för mot det vanligaste fallet? Använd gångbron som exempel.
3. Beskriv vad som hände med Londons Millennium Bridge. Varför är förklaringen "fotgängarna råkade gå i takt" otillräcklig?
4. Varför sätts den tillåtna spänningen lägre än sträckgränsen, och vad är det säkerhetsfaktorn ska täcka in?
5. En elev skriver i en labbrapport att "säkerhetsfaktorn 2 är ett rimligt värde för konstruktioner". Vad är fel med påståendet, och hur bestäms säkerhetsfaktorn i verkligheten?

## Övningar

1. Ett konstruktionsstål har sträckgränsen 275 N/mm². Beräkna den tillåtna spänningen med säkerhetsfaktorn 2,5.
2. En dragstång ska klara dragkraften 30 000 N med den tillåtna spänningen 150 N/mm². Beräkna den tvärsnittsarea stången minst måste ha.
3. Beräkna diametern på en rund stång med tvärsnittsarean 300 mm².
4. En beräkning av ett dragstags tvärsnittsarea ger svaret 0,02 mm² för ett stag som ska bära flera ton. Förklara varför svaret bör ifrågasättas, och vad som troligen har gått fel. Gör en överslagsräkning som visar ungefär vilken area som borde ha kommit ut, om lasten är 40 000 N och den tillåtna spänningen 120 N/mm².
5. En lyftögla i en verkstadstravers ska bära dragkraften 18 000 N. Materialet har sträckgränsen 355 N/mm², och säkerhetsfaktorn 3 ska användas. Beräkna den tillåtna spänningen, den minsta tvärsnittsarean och den teoretiska minsta diametern. Välj därefter närmast större standarddimension bland 12, 16, 20 och 25 mm, och kontrollera vilken spänning den valda dimensionen faktiskt ger. Kontrollera enheterna genom hela beräkningen, bedöm om den valda dimensionen verkar rimlig för uppgiften, och ange slutligen tre förhållanden som den här förenklade beräkningen inte tar hänsyn till men som skulle påverka en verklig lyftögla.

6. **Gångbron från last till dimension.** Kapitlets gångbro är en balkbro med fri spännvidd 6,0 m och gångbanebredd 1,5 m, med ett stöd i vardera änden, A och B, och egentyngden 3600 N. Den här övningen följer bron hela vägen från yttre last till en färdig dimension och kräver att du väver samman friläggning, jämvikt och dimensionering från flera av kapitlets avsnitt. Redovisa figurer, antaganden och fullständig beräkningsgång, inte bara svaren.

   Utgå först från ett belastningsfall där en grupp på sex personer, tillsammans 4800 N, står samlade 2,0 m från stöd A. Frilägg bron, skriv ut vilka idealiseringar du gör av stöden och av egentyngden och beräkna båda stödreaktionerna. Kontrollera svaret genom att räkna momentsumman kring det andra stödet. Följ därefter lastvägen från personernas skosulor ner i marken, ange för varje del om den bär tryck, drag eller böjning och peka ut var i balken böjningen är störst.

   Bron ska också klara att vara full av folk. För gångtrafik räknas normalt med storleksordningen 4 kN per kvadratmeter gångbana. Beräkna den lasten, ställ den mot gruppen på sex personer och avgör vilket belastningsfall som ska styra dimensioneringen.

   Dimensionera sist ett rakt, lodrätt hängande runt dragstag som ska bära dragkraften 24 000 N. Materialet är ett stål med sträckgränsen 235 N/mm² och säkerhetsfaktorn 2,5 är given. Beräkna tillåten spänning, minsta tvärsnittsarea och teoretisk minsta diameter, välj närmast större standarddimension bland 12, 16, 20 och 25 mm och kontrollräkna vilken spänning den valda dimensionen faktiskt ger. Kontrollera enheterna genom hela kedjan och bedöm rimligheten genom att jämföra dimensionen med ett föremål du känner till. Förklara till sist hur friläggningen i det första steget hänger ihop med den färdiga dimensionen i det sista, alltså hur ett fel i friläggningen skulle ha följt med hela vägen fram till dragstaget.
