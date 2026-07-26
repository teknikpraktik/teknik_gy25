---
id: "7.1"
chapter: 7
sectionNumber: 1
title: Mätning och mätinstrument
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["s-01"]
  niva2: ["s-01"]
learningGoals:
  - Använda SI-systemets storheter, enheter och prefix samt genomföra
    enhetsomvandlingar.
  - Välja lämpligt mätinstrument för en given mätuppgift och använda det korrekt.
  - Skilja mellan systematiska och slumpmässiga mätfel samt ange mätvärden med
    rimligt antal värdesiffror.
abilities: [f3]
concepts_introduced: ["storhet", "enhet", "prefix", "mätvärde", "systematiskt mätfel", "slumpmässigt mätfel", "mätosäkerhet", "värdesiffror"]
concepts_used: ["kraft", "spänning"]
figures: []
prerequisites: ["6.3", "6.4"]
---

## SI-systemet

Gångbrons stödreaktioner räknades fram till 2400 N vid stöd A och 2100 N vid stöd B, med cyklisten 2,0 m från A och egentyngden 3600 N i brons mitt. Beräkningen säger vad som *bör* hända. När bron sedan står på plats återstår en annan fråga: vad händer faktiskt, och hur säkert vet vi det? Den frågan besvaras bara med mätning.

Mätningen finns dessutom redan inne i beräkningen. Spännvidden 6,0 m, egentyngden 3600 N och stålets sträckgräns 235 N/mm² är inte givna av naturen utan uppmätta av någon, med något instrument, med någon säkerhet. En konstruktionsberäkning är aldrig säkrare än de mätvärden den matas med.

Det som mäts kallas en *storhet*. Längd, massa, tid, [[begrepp:kraft]] och temperatur är storheter, och storheten anger vilket slags egenskap det handlar om. Hur mycket av storheten det finns anges med en *enhet*, en bestämd och överenskommen mängd av just den storheten. Ett mätvärde utan enhet betyder ingenting: talet 6 kan vara sex millimeter eller sex kilometer.

Sju storheter är grundstorheter i SI-systemet, det internationella måttsystem som används i teknik och naturvetenskap över hela världen. De är längd med enheten meter (m), massa med kilogram (kg), tid med sekund (s), elektrisk ström med ampere (A), temperatur med kelvin (K), substansmängd med mol (mol) och ljusstyrka med candela (cd). Alla andra storheter är härledda, vilket betyder att de byggs av grundstorheterna.

Kraften är ett exempel. En newton är den kraft som ger massan ett kilogram accelerationen en meter per sekundkvadrat, alltså 1 N = 1 kg · m/s². Newton är därför ingen fristående enhet utan en förkortning för en kombination av tre grundenheter. Samma sak gäller [[begrepp:spänning]], som mäts i newton per kvadratmillimeter och alltså kombinerar kraft med area.

[BILD 7.1-1] Innehåll: SI-systemets sju grundstorheter i en rad, var och en med storhetens namn, enhetens namn och beteckningen. Under raden tre härledda storheter som eleven redan mött: kraft i newton, area i kvadratmillimeter och spänning i newton per kvadratmillimeter. Från varje härledd storhet går pilar upp till de grundstorheter den byggs av, så att newton kopplas till kilogram, meter och sekund, och spänning till newton och meter. Bildtext: "Härledda enheter är inte nya enheter utan kombinationer av grundenheterna."

För att slippa skriva ut långa tal används *prefix*, förstavelser som anger en tiopotens. Kilo (k) betyder tusen, mega (M) en miljon och giga (G) en miljard, medan milli (m) betyder tusendel och mikro (µ) miljondel. Egentyngden 3600 N skrivs därför lika gärna 3,6 kN, och sträckgränsen 235 N/mm² kan skrivas 235 MPa.

Prefix på en enhet som är upphöjd kräver eftertanke, och det är där de flesta felen uppstår. Ett dragstag i bron har tvärsnittsarean 2400 mm². Uttryckt i kvadratmeter blir den

2400 mm² = 2400 · (10⁻³ m)² = 2400 · 10⁻⁶ m² = 2,4 · 10⁻³ m² = 0,0024 m²

Prefixet milli står inne i en kvadrat och ska därför kvadreras med. Omräkningsfaktorn blir en miljon, inte tusen. Svaret är rimligt: en kvadratmeter är en yta ungefär så stor som en dörr, och ett stags ände är en liten bråkdel av den. Hade svaret blivit 2,4 m² skulle stagets ände varit bredare än hela gångbanan, vilket är uppenbart orimligt.

## Mäta med rätt instrument

Ett mätinstrument kan aldrig visa mer än det är byggt för. Instrumentets upplösning är det minsta steg det kan skilja på, alltså hur fint dess skala är graderad. En tumstock och ett måttband har normalt upplösningen en millimeter, ett skjutmått en femtiondels millimeter.

Upplösningen sätter en gräns för hur många siffror ett mätvärde kan bära. Mäts en spännvidd med måttband går det inte att komma fram till 6,0000 m, hur många decimaler räknaren än visar när värdet sedan används. Instrumentet har helt enkelt inte den informationen.

Tillverkaren anger dessutom ofta en noggrannhet för instrumentet, till exempel ±0,3 mm för en tumstock av en viss klass. Den angivelsen syftar på hur mycket instrumentets egen skala får avvika från det sanna måttet, inte på hur noga användaren råkar läsa av den.

Valet av instrument styrs av tre frågor: vilken storhet som ska mätas, hur stort det som mäts är, och hur fint svaret behöver bli. Att mäta brons spännvidd med skjutmått är meningslöst, eftersom skjutmåttet inte når mer än några centimeter. Att mäta en plåts tjocklek med måttband är lika meningslöst, eftersom måttbandet inte kan skilja på 1,8 och 2,0 mm. Ett för grovt instrument ger ett värde utan den information som behövs, och ett onödigt fint kostar tid utan att ge något tillbaka.

Ett dragstag i en byggställning ska kontrolleras. Kraften i staget är känd sedan tidigare, 18 kN, och det som behöver mätas är stagets diameter. Med skjutmått mäts den till 15,95 mm. Tvärsnittsarean blir

A = π · d² / 4 = π · 15,95² / 4 = π · 254,4 / 4 ≈ 199,8 mm²

och spänningen i staget

σ = F / A = 18 000 / 199,8 ≈ 90,1 N/mm²

Sambandet är detsamma som i kapitlet om hållfasthet och lärs inte ut på nytt här. Det nya är att arean vilar på ett uppmätt värde, och att mätningen därför avgör hur mycket svaret är värt. Svaret är rimligt: 90 N/mm² ligger klart under konstruktionsstålets sträckgräns 235 N/mm², vilket det ska göra för ett stag i bruk. Hade diametern i stället mätts med tumstock till 16 mm hade arean blivit 201 mm² och spänningen 89,6 N/mm², en skillnad på en halv procent. För den här kontrollen spelar den skillnaden ingen roll, och då räcker tumstocken.

[BILD 7.1-2] Innehåll: Samma sträcka på en konstruktionsdetalj mätt med tre instrument bredvid varandra: tumstock, måttband och skjutmått. Vid varje instrument anges dess upplösning, 1 mm, 1 mm respektive 0,02 mm, och det avlästa värdet med det antal siffror instrumentet tillåter, 16 mm, 16 mm och 15,95 mm. En markering visar att skjutmåttets skala är graderad så mycket finare att avläsningen bär två decimaler. Bildtext: "Instrumentets upplösning avgör hur många siffror mätvärdet kan bära."

## Mätosäkerhet

Ingen mätning träffar det sanna värdet exakt. Det avlästa talet kallas *mätvärde*, och det skiljer sig alltid något från den storhet som faktiskt finns där. Skillnaden kallas mätfel, och den kommer i två slag som beter sig helt olika.

Ett *systematiskt mätfel* drar åt samma håll varje gång. Ett måttband som krympt så att det visar en millimeter för lite per meter ger fem millimeter för lite på fem meter, varje gång, för alla som använder det. En våg som visar 0,2 kg utan last lägger till samma 0,2 kg vid varje vägning.

Ett *slumpmässigt mätfel* varierar mellan mätningarna. Tumstocken läggs an en aning snett, avläsningen sker från en något annan vinkel, eller sista siffran hamnar mellan två streck och avrundas åt olika håll. Ibland blir värdet lite för stort, ibland lite för litet.

Skillnaden får en praktisk följd. Mäts samma sträcka tio gånger tar de slumpmässiga felen delvis ut varandra, eftersom de drar åt olika håll. Det systematiska felet gör det inte: medelvärdet av tio mätningar med det krympta måttbandet ligger exakt lika fel som varje enskild mätning. Fler mätningar hjälper alltså mot det ena felet men är verkningslöst mot det andra. Systematiska fel angrips i stället genom att instrumentet kontrolleras mot ett känt mått.

[BILD 7.1-3] Innehåll: Två prickdiagram sida vid sida, båda med det sanna värdet markerat som en lodrät linje och tio mätvärden inprickade. Vänster: värdena ligger spridda på båda sidor om linjen, märkt slumpmässigt mätfel, med medelvärdet inritat nära det sanna värdet. Höger: värdena ligger tätt samlade men tydligt förskjutna åt ena sidan om linjen, märkt systematiskt mätfel, med medelvärdet inritat lika förskjutet som de enskilda värdena. Bildtext: "Fler mätningar drar medelvärdet mot det sanna värdet vid slumpmässiga fel, men flyttar det inte alls vid systematiska."

Att en mätning har ett fel är alltså inget tecken på slarv utan ett villkor för all mätning. Det som skiljer en genomarbetad mätning från en slarvig är att den förra redovisar hur stort felet kan vara. Den redovisningen kallas *mätosäkerhet* och anger inom vilket intervall det sanna värdet rimligen ligger. En spännvidd skrivs då 6,00 m ± 0,01 m, vilket betyder att det sanna måttet med god sannolikhet ligger mellan 5,99 och 6,01 m.

Osäkerheten avgör också hur många siffror ett mätvärde får skrivas med. De siffror som verkligen bär information kallas *värdesiffror*, och de får aldrig bli fler än mätningen motiverar. Gångbanans yta räknas ut ur spännvidden 6,00 m och bredden 1,50 m, båda med tre värdesiffror:

6,00 · 1,50 = 9,00 m²

Svaret anges därför med tre värdesiffror, alltså 9,00 m², varken 9 m² eller 9,000 m². Hade måtten i stället lästs av med tumstock till 6,0 m och 1,5 m hade svaret burit två värdesiffror och skrivits 9,0 m². Att skriva fler decimaler än mätningen medger gör inte svaret bättre, bara mindre ärligt.

Kvar står den fråga mätningen fanns till för. Antag att kraften i stöd A mäts upp till 2350 N, medan beräkningen gav 2400 N. Avvikelsen är 50 N, drygt två procent. Är beräkningen fel? Det går inte att avgöra förrän mätosäkerheten är känd. Är osäkerheten ±100 N ligger mätning och beräkning inom varandras felmarginal, och det finns ingenting att förklara. Är osäkerheten ±5 N är avvikelsen verklig och något behöver undersökas. Först då blir nästa fråga aktuell, nämligen om den förenklade modellen beskriver bron tillräckligt väl, och den frågan hör hemma i kapitlet om modellering och simulering. Mätteknikens uppgift är att avgöra om avvikelsen är verklig, inte att förklara den.

## Instuderingsfrågor

1. Vad menas med en storhet, och hur skiljer sig storheten från enheten?
2. Varför betyder ett mätvärde ingenting utan sin enhet?
3. Vad är skillnaden mellan en grundstorhet och en härledd storhet? Ge ett exempel på vardera.
4. Varför blir omräkningsfaktorn en miljon och inte tusen när kvadratmillimeter görs om till kvadratmeter?
5. Vad menas med ett mätinstruments upplösning, och hur påverkar den svaret?
6. Vad syftar tillverkarens noggrannhetsangivelse för ett instrument på?
7. Vilka tre frågor styr valet av mätinstrument?
8. Vad är skillnaden mellan ett systematiskt och ett slumpmässigt mätfel?
9. Varför hjälper fler mätningar mot slumpmässiga fel men inte mot systematiska?
10. Vad menas med mätosäkerhet?
11. Hur avgör man om ett mätvärde som avviker från ett beräknat värde är ett verkligt problem?

## Övningar

1. **Prefix i båda riktningar.** Skriv om följande värden till den enhet som anges: en kraft på 47 000 N till kilonewton, en sträckgräns på 355 N/mm² till megapascal, en längd på 0,045 m till millimeter och en massa på 2,4 t till kilogram. Ange varje svar med samma antal värdesiffror som det givna värdet.
2. **Kvadraten på prefixet.** En rund stång har tvärsnittsarean 314 mm². Uttryck arean i kvadratmeter. En platta har arean 0,25 m². Uttryck arean i kvadratmillimeter. Förklara för vartdera fallet varför omräkningsfaktorn blir en miljon.
3. **Välj instrument och motivera.** Tre mätuppgifter ska lösas: bredden på en gångbana som är omkring 1,5 m, tjockleken på en plåt som är omkring 2 mm, och diametern på en skruv som är omkring 12 mm och ska passa i ett hål med en marginal på en tiondels millimeter. Tillgängliga instrument är tumstock med upplösningen 1 mm och räckvidden 2 m, måttband med upplösningen 1 mm och räckvidden 10 m, samt skjutmått med upplösningen 0,02 mm och räckvidden 150 mm. Välj instrument för varje uppgift och motivera valet med både räckvidd och upplösning.
4. **Så många siffror svaret bär.** En balks tvärsnitt mäts med skjutmått till bredden 40,15 mm och höjden 80,20 mm. Beräkna tvärsnittsarean och ange svaret med rätt antal värdesiffror. Samma balk mäts därefter med tumstock till 40 mm och 80 mm. Beräkna arean igen och ange den med rätt antal värdesiffror. Förklara vad skillnaden i antal värdesiffror säger om de två mätningarna.
5. **Verklig eller inte?** En konstruktör har beräknat kraften i ett stag till 12,0 kN. En mätning på den byggda konstruktionen ger 11,6 kN med mätosäkerheten ±0,5 kN. En andra mätning med ett noggrannare instrument ger 11,6 kN med mätosäkerheten ±0,1 kN. Avgör för vardera mätningen om avvikelsen från det beräknade värdet är verklig, och motivera. Ange också vilken fråga som blir nästa steg i det fall där avvikelsen är verklig, och varför den frågan inte besvaras med en noggrannare mätning.
6. **Mät samma sak tio gånger.** Välj en sträcka i din närhet som är mellan en halv och två meter, till exempel en bordskant, en dörrbredd eller en hyllas längd. Mät den tio gånger med tumstock eller måttband, utan att titta på dina tidigare värden, och skriv ner varje mätvärde. Mät därefter samma sträcka tio gånger med ett annat instrument om du har tillgång till ett. Ställ upp värdena och ange för varje serie det största värdet, det minsta värdet och skillnaden mellan dem. Bedöm utifrån spridningen hur många värdesiffror din mätning bär, och avgör om något i din uppställning kan ha gett ett systematiskt fel.
