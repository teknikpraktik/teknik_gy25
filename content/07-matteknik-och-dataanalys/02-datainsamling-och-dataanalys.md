---
id: "7.2"
chapter: 7
sectionNumber: 2
title: Datainsamling och dataanalys
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["s-01"]
  niva2: ["s-01"]
learningGoals:
  - Planera och genomföra en mätserie med strukturerad dokumentation, manuellt
    eller med digital datainsamling.
  - Sammanställa mätdata i tabeller och diagram samt beräkna medelvärde och
    spridning.
  - Tolka samband i mätdata, anpassa en enkel modell till data och dra
    slutsatser med hänsyn till mätosäkerheten.
abilities: [f3, f5]
concepts_introduced: ["mätserie", "oberoende variabel", "beroende variabel", "kontrollerad variabel", "medelvärde", "spridning", "trendlinje", "extrapolation"]
concepts_used: ["mätvärde", "mätosäkerhet", "värdesiffror", "böjning", "elastisk deformation"]
figures: []
prerequisites: ["6.4", "7.1"]
---

## Planera och genomföra mätningar

En enskild mätning ger ett tal. Den säger vad som gällde vid ett tillfälle, under de förhållanden som då rådde. Men de flesta tekniska frågor handlar inte om ett tillfälle utan om ett samband: hur mycket böjer sig balken när lasten ökar, hur snabbt svalnar kaffet, hur mycket ström drar motorn vid olika varvtal. För att besvara sådana frågor krävs en *mätserie*, alltså flera mätningar av samma storhet där något varieras planmässigt mellan mätningarna.

En mätserie som inte är planerad går inte att tolka. Planeringen handlar om att hålla isär tre slags storheter.

Den *oberoende variabeln* är den som ändras med avsikt, steg för steg. Den *beroende variabeln* är den som mäts och som förväntas ändra sig som följd. Alla övriga storheter som kan påverka resultatet är *kontrollerade variabler*, och de ska hållas så konstanta som möjligt genom hela serien.

En balk på två stöd får bli exempel. Balken belastas i mitten med en vikt som ökas steg för steg, och för varje last mäts hur långt balkens mitt sjunker. Lasten är den oberoende variabeln och nedböjningen den beroende. De kontrollerade variablerna är spännvidden mellan stöden, den punkt där nedböjningen läses av, vilken balk som används och rumstemperaturen. Flyttas stöden mitt i serien blir mätvärdena obrukbara, eftersom två saker då ändrats samtidigt och det inte längre går att veta vilken av dem som orsakade skillnaden.

[BILD 7.2-1] Innehåll: Mätuppställningen sedd från sidan. En balk vilar på två stöd, en vikt hänger i balkens mitt, och nedböjningen mäts mot en fast referenslinje med en linjal ställd lodrätt vid mittpunkten. Tre etiketter pekar ut variabeltyperna direkt i bilden: lasten märkt oberoende variabel, nedböjningen märkt beroende variabel, och spännvidden, avläsningspunkten och balken märkta kontrollerade variabler. Bildtext: "En mätserie går bara att tolka om allt utom en storhet hålls fast."

Genomförandet kräver ordning. Varje mätvärde skrivs ner direkt, tillsammans med det värde den oberoende variabeln hade, och avvikelser antecknas när de inträffar i stället för i efterhand. Till dokumentationen hör också vilket instrument som användes och vilken upplösning det hade, eftersom det avgör hur många [[begrepp:värdesiffror]] resultatet kan bära. En mätserie utan den informationen går inte att bedöma av någon annan, och därmed inte heller att lita på.

Mätningen kan göras för hand eller med digital datainsamling, där en sensor läser av storheten automatiskt och sparar värdena. Det senare ger fler mätpunkter och tar bort avläsningsfelet, men flyttar inte kravet på planering. En sensor som mäter fel mäter fel många gånger i sekunden.

## Sammanställa mätdata

Rådata från balkförsöket ser ut så här, med lasten i newton och nedböjningen i millimeter avläst med linjal på tiondels millimeter.

Last 0 N ger 0,0 mm, 5 N ger 2,1 mm, 10 N ger 4,0 mm, 15 N ger 6,2 mm, 20 N ger 8,1 mm och 25 N ger 10,1 mm.

Uppställd i en tabell med en kolumn per variabel blir serien överblickbar, men tabellen visar bara talen. Ritas samma tal som punkter i ett diagram, med den oberoende variabeln på den vågräta axeln och den beroende på den lodräta, framträder något tabellen döljer: punkterna följer en rät linje, och det syns direkt om någon punkt faller utanför mönstret. Diagrammet är därför inte en prydnad utan själva analysverktyget.

[BILD 7.2-2] Innehåll: Samma mätdata i två former bredvid varandra. Vänster: en tabell med två kolumner, last i newton och nedböjning i millimeter, med de sex mätvärdena. Höger: ett punktdiagram av exakt samma tal, med lasten på den vågräta axeln och nedböjningen på den lodräta, båda axlarna märkta med storhet och enhet. En pil mellan de två markerar att det är samma data. Bildtext: "Tabellen visar talen, diagrammet visar mönstret."

Upprepas en mätning flera gånger vid samma inställning sprider sig värdena något, av de skäl som beskrevs i föregående avsnitt. Vid lasten 15 N mäts nedböjningen fem gånger och ger 6,2 mm, 6,0 mm, 6,3 mm, 6,1 mm och 6,2 mm. *Medelvärdet* är summan av mätvärdena delad med antalet mätningar:

(6,2 + 6,0 + 6,3 + 6,1 + 6,2) / 5 = 30,8 / 5 = 6,16 mm

Här gäller regeln om [[begrepp:värdesiffror]] från föregående avsnitt. Mätvärdena är avlästa på tiondels millimeter, och medelvärdet kan inte bli säkrare än de tal det bygger på. Svaret redovisas därför som 6,2 mm, inte 6,16 mm. Att räknaren visar två decimaler betyder inte att den andra decimalen är uppmätt.

Hur mycket värdena skiljer sig åt kallas *spridning*, och det enklaste måttet på den är variationsbredden, alltså skillnaden mellan det största och det minsta värdet. Här blir den 6,3 minus 6,0, alltså 0,3 mm. Spridningen är rimlig: den ligger i samma storleksordning som instrumentets upplösning på 0,1 mm, vilket är vad man kan vänta sig när avläsningen är den största felkällan. Hade spridningen i stället varit 3 mm hade något varit fel i uppställningen. Ett kalkylark räknar oftast fram standardavvikelsen i stället, ett spridningsmått som väger in samtliga mätvärden och därför inte styrs av en enda extrem mätning så som variationsbredden gör.

Sammanställningen går att göra för hand, men ett kalkylark tar bort räknearbetet: det summerar, räknar medelvärde och spridning, ritar diagrammet och lägger in en linje genom punkterna. Vilket kalkylark som används saknar betydelse, och programmet kan bytas ut mot vilket annat som helst som gör samma sak.

## Tolka mätdata

Punkterna i balkförsöket ligger nära en rät linje genom origo. Dubbleras lasten från 10 N till 20 N ungefär fördubblas nedböjningen, från 4,0 mm till 8,1 mm. Sambandet är alltså linjärt inom det område som mättes.

Den linje som läggs så nära mätpunkterna som möjligt kallas *trendlinje*. Den beskriver sambandet i en enda uppgift i stället för i sex talpar, och dess lutning har en fysikalisk innebörd. Här blir lutningen ungefär 0,40 mm per newton, vilket säger hur eftergivlig balken är: varje newton ytterligare last sänker mitten fyra hundradels millimeter.

Att sambandet blev linjärt är ingen slump, och det är inte heller mätserien som visar varför. Kapitlet om hållfasthet slog fast att en detalj som belastas inom sitt elastiska område deformeras i proportion till belastningen och återgår helt när lasten tas bort. Mätserien visar experimentellt att det stämmer för den här balken vid de här lasterna. Beräkning och mätning svarar alltså mot varandra, vilket är hela poängen med att mäta.

Just därför gäller trendlinjen bara i det område där mätningarna gjordes. Att förlänga den utanför mätområdet kallas *extrapolation*, och det är avsnittets vanligaste fallgrop. Linjen förutsäger att 100 N skulle ge 40 mm nedböjning, men den förutsägelsen vilar på ingenting. Vid tillräckligt hög last passerar materialet sin sträckgräns, [[begrepp:elastisk deformation]] övergår i plastisk, och sambandet mellan last och [[begrepp:böjning]] upphör att vara linjärt. Balken förblir dessutom krokig när lasten tas bort. En trendlinje är en beskrivning av det som mätts, inte en förutsägelse om det som inte mätts.

[BILD 7.2-3] Innehåll: Ett punktdiagram med de sex mätvärdena och en anpassad trendlinje genom dem. Området mellan 0 och 25 N är skuggat och märkt mätområde. Utanför skuggningen fortsätter trendlinjen som en streckad rät linje, medan den verkliga nedböjningen ritas som en kurva som viker av kraftigt uppåt när lasten passerar materialets sträckgräns. Avvikelsen mellan den streckade linjen och kurvan markeras. Bildtext: "En trendlinje gäller bara inom det område där mätningarna gjordes."

Faller en enskild punkt tydligt utanför mönstret ska den undersökas, inte suddas. Ett värde tas bort ur serien bara när det finns ett känt skäl, till exempel att någon stötte till uppställningen eller att avläsningen gjordes vid fel last, och strykningen redovisas tillsammans med skälet. Att putsa bort obekväma punkter för att kurvan ska bli snyggare är ett av de säkraste sätten att lura sig själv.

En sista försiktighet gäller vad ett samband betyder. Att två storheter följer varandra visar att de hänger ihop, inte att den ena orsakar den andra. Det är just därför de kontrollerade variablerna hålls fasta: när allt annat är oförändrat återstår få andra förklaringar än den man undersöker.

Slutsatsen ska slutligen dras med [[begrepp:mätosäkerhet]]en i handen. Ett [[begrepp:mätvärde]] som avviker från det väntade är bara intressant om avvikelsen är större än osäkerheten, och en trendlinje som ligger nära punkterna säger inget om hur väl den beskriver verkligheten utanför mätområdet. Frågan om vad som händer vid laster som aldrig mättes besvaras inte med en linjal utan med en modell som räknar och simulerar, och den hör hemma i ett senare kapitel.

## Instuderingsfrågor

1. Vad menas med en mätserie, och varför räcker inte en enskild mätning för att visa ett samband?
2. Vad är skillnaden mellan en oberoende och en beroende variabel?
3. Vad menas med en kontrollerad variabel, och vad händer med en mätserie om en sådan ändras mitt i?
4. Vilka uppgifter utöver mätvärdena ska en mätserie dokumentera, och varför?
5. Vad tar digital datainsamling bort, och vad tar den inte bort?
6. Vad visar ett punktdiagram som en tabell med samma tal döljer?
7. Hur beräknas ett medelvärde, och varför får det inte anges med fler värdesiffror än mätvärdena?
8. Vad menas med spridning, och hur beräknas variationsbredden?
9. Vad är en trendlinje, och vad betyder dess lutning i balkförsöket?
10. Vad menas med extrapolation, och varför är den opålitlig utanför mätområdet?
11. När får ett avvikande mätvärde tas bort ur en serie?
12. Varför visar ett samband mellan två storheter inte att den ena orsakar den andra?

## Övningar

1. **Sortera variablerna.** En elev vill undersöka hur långt en solcellsdriven motor kör en modellbil vid olika ljusstyrka. Ange vilken storhet som är oberoende variabel, vilken som är beroende variabel, och ange minst tre kontrollerade variabler som måste hållas fasta för att serien ska gå att tolka. Motivera varför var och en av de tre måste hållas fast.
2. **Medelvärde och spridning.** En sträcka mäts sex gånger med skjutmått och ger värdena 24,12 mm, 24,08 mm, 24,15 mm, 24,10 mm, 24,11 mm och 24,09 mm. Beräkna medelvärdet och variationsbredden. Ange medelvärdet med rätt antal värdesiffror och motivera antalet.
3. **Läs av lutningen.** En mätserie på en fjäder ger följande värden: 0 N och 0,0 mm, 2 N och 3,0 mm, 4 N och 6,1 mm, 6 N och 8,9 mm, 8 N och 12,0 mm. Rita ett punktdiagram, lägg in en trendlinje för hand och bestäm dess lutning i millimeter per newton. Ange vad lutningen betyder för fjädern.
4. **Vad linjen inte lovar.** Utgå från fjädermätningen i föregående uppgift. Trendlinjen förutsäger en förlängning vid lasten 40 N. Beräkna vad linjen förutsäger, och förklara därefter varför den förutsägelsen inte går att lita på. Ange vilken egenskap hos materialet som avgör var linjen slutar gälla.
5. **Den punkt som inte passar.** I en mätserie över hur en balk böjs vid ökande last ligger fem av sex punkter nära en rät linje, medan den fjärde ligger tydligt över de andra. Ange minst tre möjliga förklaringar till den avvikande punkten, avgör för varje förklaring om den motiverar att punkten tas bort ur serien, och beskriv vad du skulle göra härnäst innan du drar någon slutsats.
6. **Din egen mätserie.** Välj ett samband du kan undersöka med det du har hemma eller i skolan, till exempel hur långt ett gummiband töjs vid ökande last, hur lång tid det tar att fylla ett kärl vid olika kranöppning, eller hur temperaturen i en kopp sjunker med tiden. Bestäm oberoende, beroende och kontrollerade variabler innan du börjar. Genomför minst sex mätningar, dokumentera instrument och upplösning, och upprepa en av mätningarna fem gånger. Ställ upp värdena i en tabell, rita ett punktdiagram och beräkna medelvärde och variationsbredd för den upprepade mätningen. Avsluta med att bedöma om sambandet ser linjärt ut inom ditt mätområde och ange ett värde du inte skulle våga uttala dig om utifrån dina data.
