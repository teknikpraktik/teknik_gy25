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
concepts_introduced: ["last", "egentyngd", "nyttig last", "vindlast", "snölast", "statisk belastning", "dynamisk belastning", "tillåten spänning", "säkerhetsfaktor", "dimensionering", "överslagsräkning"]
concepts_used: ["kraft", "belastning", "spänning", "sträckgräns", "tvärsnitt"]
figures: ["fig-6.6.1-a", "fig-6.6.2-a", "fig-6.6.3-a"]
prerequisites: ["6.1", "6.3", "6.4", "6.5"]
---

## Laster och belastningsfall

Innan en enda dimension kan bestämmas måste ingenjören veta vad konstruktionen faktiskt ska klara av. De yttre orsakerna till en konstruktions belastning kallas **laster**, och att kartlägga dem är dimensioneringens första steg.

Alla konstruktioner bär sin egen **egentyngd**, vikten av materialet konstruktionen själv består av, en last som alltid är närvarande och sällan förändras över tid. Utöver egentyngden tillkommer ofta en **nyttig last**, den last konstruktionen är till för att bära: trafikanterna på en gångbro, möblerna i ett rum, godset i ett lager. Utomhuskonstruktioner måste dessutom klara **vindlast**, det tryck vinden utövar mot konstruktionens ytor, och i snörika klimat **snölast**, tyngden av snö som lägger sig på tak och andra vågräta ytor.

Lasterna skiljer sig också åt i hur de varierar över tid. En **statisk belastning** förändras långsamt eller inte alls, som egentyngden eller en stillastående nyttig last. En **dynamisk belastning** varierar snabbt, upprepas eller innefattar rörelse och stöt, som trafik i rörelse, vindbyar eller ett fordon som bromsar tvärt. Dynamiska laster kan ge en betydligt större verkan än deras egen storlek antyder, om de får en konstruktion att svänga i takt med sig själv. Londons Millennium Bridge, en gångbro invigd år 2000, fick gunga så kraftigt i sidled när tusentals fotgängare av misstag gick i nästan samma takt att bron fick stängas efter bara några dagar. Ingen enskild fotgängares kraft var stor, men den upprepade, synkroniserade dynamiska belastningen byggde upp en rörelse som den statiska dimensioneringen inte hade räknat med, och bron fick förses med dämpare innan den kunde öppnas igen.

En fullständig dimensionering utgår därför från samtliga relevanta laster för den aktuella konstruktionen, inte bara den mest uppenbara, och tar hänsyn till både hur stora de är och hur de varierar över tid.

[[figur:fig-6.6.1-a]]

## Säkerhetsfaktor och dimensioneringsprocessen

**Dimensionering** är processen att välja material, form och mått för en konstruktion så att den klarar sina laster med god marginal. Kärnan i beräkningen är ett enkelt villkor: den verkliga spänningen i en detalj, beräknad som i avsnitt 6.4, får aldrig överstiga den spänning materialet säkert klarar.

Den spänning en detalj tillåts belastas med kallas **tillåten spänning**, och den sätts alltid lägre än materialets sträckgräns för att ge marginal mot både osäkerheter i beräkningen och laster som är större än väntat. Förhållandet mellan sträckgränsen och den tillåtna spänningen kallas **säkerhetsfaktorn**:

tillåten spänning = sträckgräns / säkerhetsfaktor

Ett vanligt konstruktionsstål, S235, har en sträckgräns på 235 N/mm². Med en säkerhetsfaktor på 2, rimlig för en väl definierad statisk last, blir den tillåtna spänningen

tillåten spänning = 235 / 2 = 117,5 N/mm²

En av gångbrons bärande hängstänger ska, enligt en beräkning av bidragen från egentyngd, nyttig last och vindlast, klara en dragkraft på 47 000 N. Med formeln för spänning från avsnitt 6.4, löst för tvärsnittsarean, blir den area stången minst måste ha

A = F / tillåten spänning = 47 000 / 117,5 = 400 mm²

En rund stång med tvärsnittsarean 400 mm² har diametern

d = √(4A / π) = √(4 · 400 / 3,14) ≈ √509 ≈ 22,6 mm

Hängstången bör alltså ha en diameter på minst ungefär 23 mm. Skulle den göras klenare skulle spänningen i den överstiga den tillåtna spänningen, och skulle den göras betydligt grövre än nödvändigt användes mer material, vikt och kostnad än vad säkerheten faktiskt kräver.

Den här beräkningen är bara ett steg i en större process. En fullständig dimensionering går normalt igenom en följd av steg: identifiera konstruktionens krav och funktion, bestäm vilka laster som kan uppstå, analysera krafterna och momenten de ger upphov till, välj konstruktionsprincip, välj material, bestäm preliminära mått, kontrollera hållfasthet och stabilitet, lägg till en rimlig säkerhetsmarginal, utvärdera resultatets vikt, kostnad och miljöpåverkan, och testa och förbättra lösningen innan den låses fast. Beräkningen av hängstångens diameter hör hemma i mitten av den processen, men varje steg runt omkring påverkar vilket svar som räknas som godtagbart. I verklig dimensionering styrs stegen dessutom sällan enbart av handräkning: standarder och föreskrifter sätter gränser för vilka säkerhetsfaktorer som får användas, mätdata från verkliga material ersätter tabellvärden, och simuleringar och fysiska tester kontrollerar att den färdiga konstruktionen faktiskt beter sig som beräkningen förutspådde.

[[figur:fig-6.6.2-a]]

## Rimlighetsbedömning

Ett beräknat svar är inte automatiskt ett korrekt svar. Ett tecken- eller enhetsfel kan ge en diameter som är hundra gånger för liten utan att beräkningen i sig innehåller något uppenbart matematiskt fel, och den enda kontrollen som fångar det är att ställa sig frågan om svaret är rimligt.

**Överslagsräkning** är en snabb, förenklad beräkning med avrundade tal som ger en ungefärlig storleksordning att jämföra det exakta svaret med. Hängstångens dragkraft på 47 000 N kan avrundas till ungefär 50 000 N och den tillåtna spänningen till 100 N/mm², vilket ger en area på ungefär 50 000 / 100 = 500 mm², i samma storleksordning som det exakta svaret 400 mm². Skulle den exakta beräkningen i stället ha gett till exempel 4 mm² eller 40 000 mm² skulle överslagsräkningen omedelbart avslöja att något gått fel, långt innan diametern räknas ut.

En **enhetskontroll** innebär att kontrollera att enheterna i en beräkning faktiskt går ihop. Blandas millimeter och meter, eller newton och kilonewton, utan att räkna om konsekvent uppstår fel som är lätta att missa om bara siffrorna kontrolleras. I exemplet ovan mäts kraften i newton och spänningen i newton per kvadratmillimeter, vilket ger arean direkt i kvadratmillimeter. Hade kraften av misstag stått kvar i kilonewton, 47 i stället för 47 000, hade den beräknade arean blivit tusen gånger för liten, och den resulterande diametern under en millimeter, uppenbart orimlig för en stång som ska bära nästan fem ton.

Överslagsräkning och enhetskontroll tar tillsammans bara någon minut men fångar upp precis de misstag som är enklast att göra och farligast att missa. Ingen dimensionering, hur noggrann den än är i övrigt, bör lämnas ifrån sig utan att svaret har stämts av mot båda.

[[figur:fig-6.6.3-a]]

## Instuderingsfrågor

1. Förklara skillnaden mellan egentyngd och nyttig last, och ge ett eget exempel på vardera för en byggnad.
2. Vad är vindlast och snölast, och varför är de mer relevanta för vissa konstruktioner än andra?
3. Förklara skillnaden mellan statisk och dynamisk belastning.
4. Vad hände med Londons Millennium Bridge, och vad visar händelsen om dynamiska laster?
5. Vad är dimensionering, och vilket villkor ska vara uppfyllt för att en detalj ska klara sin belastning?
6. Förklara vad en säkerhetsfaktor är, och varför den tillåtna spänningen alltid sätts lägre än sträckgränsen.
7. Ett konstruktionsstål har sträckgränsen 275 N/mm². Beräkna den tillåtna spänningen med säkerhetsfaktorn 2,5.
8. En stång ska klara en dragkraft på 30 000 N med en tillåten spänning på 150 N/mm². Beräkna den tvärsnittsarea stången minst måste ha.
9. Räkna ut diametern på en rund stång med tvärsnittsarean 300 mm².
10. Lista, med egna ord, de viktigaste stegen i en dimensioneringsprocess, från krav till färdig, testad lösning.
11. Vad är en överslagsräkning, och vad är den till för?
12. Förklara vad en enhetskontroll innebär, och ge ett eget exempel på ett misstag den skulle kunna upptäcka.
13. En beräkning av en balks tvärsnittsarea ger svaret 0,02 mm² för en balk som ska bära flera ton. Förklara varför svaret bör ifrågasättas, och vad som troligen har gått fel.
14. Varför styrs verklig dimensionering sällan enbart av handräkning, utan även av standarder, mätdata, simulering och test?
