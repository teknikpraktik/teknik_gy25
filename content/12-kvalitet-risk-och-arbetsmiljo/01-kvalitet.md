---
id: "12.1"
chapter: 12
sectionNumber: 1
title: Kvalitet
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-08"]
  niva2: ["n2-06"]
learningGoals:
  - Förklara begreppet kvalitet och beskriva hur systematiskt kvalitetsarbete
    med ständiga förbättringar bedrivs.
  - Kontrollmäta en detalj mot ställda krav och avgöra om den ska godkännas.
abilities: [f1, f3]
concepts_introduced: ["kvalitet", "kvalitetssäkring", "avvikelse", "förbättringscykel", "ständig förbättring", "kvalitetsbristkostnad", "egenkontroll", "stickprov", "kalibrering", "spårbarhet", "kassation"]
concepts_used: ["krav", "kravspecifikation", "nominellt mått", "tolerans", "godkäntgräns", "grundorsak", "mätosäkerhet"]
figures: []
prerequisites: ["3.6", "4.3", "7.1"]
---

I ett kullager rullar härdade stålkulor mellan två slipade banor. Ska lagret bära ett vindkraftverks rotor i tjugo år utan att bytas får kulorna avvika från sitt mått med några tusendels millimeter, och banornas form med ännu mindre. Ett kullager i en leksaksbil ser ut på samma sätt men slipas inte alls lika noga, och det kostar en bråkdel att tillverka.

Det billigare lagret är ändå inte sämre. De två lagren har olika [[begrepp:krav]] på sig, och båda kan uppfylla sina. *Kvalitet* är i vilken grad en produkt eller tjänst uppfyller de krav som ställs på den.

Definitionen har två följder som är lätta att missa. Den första är att kvalitet inte betyder dyrt, påkostat eller avancerat. En engångsspruta som kasseras efter ett stick har hög kvalitet om den är steril, håller måtten och går att trycka ut jämnt, och den blir inte bättre av att tillverkas i rostfritt stål. Den andra följden är att kvalitet inte går att bedöma utan krav. Frågan om något är bra nog saknar svar tills [[begrepp:kravspecifikation]]en säger vad bra nog betyder, och den som säger sig arbeta med kvalitet utan att kunna peka på sina krav arbetar i själva verket med tycke.

## Kvalitet och kvalitetsarbete

Ett vanligt sätt att tänka är att kvalitet uppstår genom kontroll. Detaljerna tillverkas, de dåliga sorteras bort på slutet, och det som går vidare är därmed bra. Tanken är felaktig på ett avgörande sätt. Kontrollen upptäcker fel, den skapar inga rätta detaljer. Sorteras var tionde detalj bort har tillverkningen ändå betalat material, maskintid och arbete för den, och nästa detalj blir fel av samma skäl som den förra.

*Kvalitetssäkring* är därför att bygga in kvaliteten i arbetssättet, så att rätt resultat blir det som kommer ut när arbetet utförs som det är tänkt. Det betyder att välja en tillverkningsmetod som klarar de toleranser ritningen kräver, att ge den som utför arbetet tydliga anvisningar, att hålla mätdonen kontrollerade och att rätta orsaken när något ändå blir fel. Kontrollen finns kvar, men den blir ett kvitto på att arbetssättet fungerar i stället för ett filter som ska rädda det.

**Avvikelsen är arbetets viktigaste information.** En *avvikelse* är när något inte blev som det skulle. En detalj hamnar utanför toleransen, en leverans innehåller fel komponent, ett moment glöms bort. Det systematiska ligger i vad som händer sedan. Avvikelsen skrivs ned i stället för att rättas tyst, den söks tillbaka till sin [[begrepp:grundorsak]], och orsaken åtgärdas så att felet inte kan uppstå igen. En avvikelse som bara rättas kommer tillbaka. En avvikelse som utreds försvinner.

Det förutsätter att avvikelser går att rapportera utan att någon får skulden. På en arbetsplats där den som säger att något blivit fel också får svara för det slutar avvikelserna att rapporteras, och då upphör verksamheten att veta hur den fungerar. Felen finns kvar, men de syns först hos kunden.

**Arbetet drivs i en cykel.** En *förbättringscykel* är det återkommande varv som systematiskt kvalitetsarbete går i. Först planeras vad som ska göras och vad som ska räknas som ett bra resultat. Sedan genomförs arbetet. Därefter följs resultatet upp mot det som planerades, och till sist ändras arbetssättet efter det uppföljningen visade. Nästa varv utgår från det ändrade arbetssättet.

Cykelns värde ligger i det tredje steget. Att planera och genomföra gör alla. Att systematiskt jämföra utfallet med planen är det som skiljer ett kvalitetsarbete från ett gott uppsåt, och det är samma insikt som bär uppföljningen i ett projekt.

Många verksamheter driver cykeln inom ramen för en standard. ISO 9001 är den internationella standarden för kvalitetsledningssystem och beskriver hur en organisation ska styra sina processer, hantera avvikelser och arbeta med förbättringar. Ett företag kan låta ett utomstående organ granska att kraven är uppfyllda och därmed bli certifierat. Certifikatet säger att verksamheten har ett fungerande arbetssätt. Det säger ingenting om att den enskilda produkten är bra, och den skillnaden är värd att hålla isär.

**Förbättringarna är många och små.** *Ständig förbättring* är arbetssättet där verksamheten fortlöpande gör många små förbättringar i stället för att vänta på stora omtag. Idéerna kommer från dem som utför arbetet, eftersom de är de enda som ser vad som verkligen tar tid eller blir fel.

Bilindustrin ger det tydligaste exemplet. I Toyotas produktionssystem har varje montör rätt att stoppa linjen när ett fel upptäcks, i stället för att låta felet vandra vidare till nästa station. Ett stopp kostar pengar i stunden, men ett fel som byggs in i bilen och upptäcks hos kunden kostar mångdubbelt mer. Arbetssättet har spridit sig till tillverkande industri i hela världen, och det vilar på en avvägning som går att räkna på.

**Fel blir dyrare ju senare de upptäcks.** *Kvalitetsbristkostnad* är vad bristande kvalitet kostar verksamheten, alltså kassationer, omarbetningar, förseningar, garantiärenden och förlorade kunder. Ett konstruktionsfel som upptäcks på ritningsstadiet kostar en ändring i en fil. Samma fel upptäckt i tillverkningen kostar dessutom materialet och maskintiden för de detaljer som redan är gjorda. Upptäckt hos kunden kostar därtill utbyte, frakt, utredning och förtroende. Storleksordningen växer med ungefär en faktor tio för varje steg felet får vandra, och det är hela skälet till att kontrollen läggs så tidigt i kedjan som den går att lägga.

[BILD 12.1-1] Innehåll: Stapeldiagram med fyra staplar på en gemensam axel märkt var felet upptäcks, i ordningen konstruktion, tillverkning, slutkontroll och hos kund. Staplarnas höjd växer kraftigt åt höger, med lodrät axel i logaritmisk skala märkt kostnad att åtgärda felet. Vid varje stapel en kort etikett över vad kostnaden består av, alltså ändrad ritning, ändrad ritning plus kasserade detaljer, det föregående plus stopp i leveransen, och det föregående plus utbyte, frakt och förlorat förtroende. En vågrät pil under diagrammet märkt ju senare, desto dyrare. Bildtext: "Samma fel kostar ungefär tio gånger mer för varje steg det får vandra. Därför läggs kontrollen så tidigt som den går att lägga."

## Kvalitetskontroll

Kvalitetskontroll är att jämföra det som tillverkats med det som beställdes. För en tillverkad detalj betyder det oftast att mäta, och underlaget är ritningen. Den anger ett [[begrepp:nominellt mått]] och en [[begrepp:tolerans]], och ur dem räknas gränsmåtten fram, alltså det största och minsta mått detaljen får ha och ändå godkännas. En detalj med måttet 12,00 mm och toleransen ±0,05 mm får mäta mellan 11,95 och 12,05 mm.

**Mätdonet måste vara känt.** Ett skjutmått som visar fel visar lika övertygande som ett som visar rätt. *Kalibrering* är att jämföra ett mätdon med ett känt mått för att bestämma hur mycket det visar fel. Kalibreringen görs med bestämda mellanrum och antecknas, och ett mätdon utan giltig kalibrering får inte användas för att godkänna något.

Det kända måttet måste i sin tur vara känt. *Spårbarhet* innebär att mätdonets kalibrering går att följa i en obruten kedja till en nationell eller internationell normal. Kedjan är skälet till att en detalj tillverkad i Sverige passar i en produkt monterad i Japan. Utan den är tolv millimeter bara tolv millimeter enligt den som råkade mäta.

**All kontroll behöver inte omfatta allt.** *Egenkontroll* är att den som utför arbetet själv mäter sitt resultat mot kraven, och det är den snabbaste kontroll som finns, eftersom felet upptäcks vid maskinen i stället för i slutkontrollen en vecka senare. *Stickprov* är att kontrollera ett urval ur en serie i stället för varje enhet. Urvalet räcker när tillverkningen är stabil och följden av ett missat fel är hanterlig. Är följden allvarlig kontrolleras varje enhet, och det är skälet till att en bromsslang provas styckvis medan en bricka provas i stickprov.

**Mätosäkerheten avgör vid gränsen.** Ett mätvärde är aldrig exakt, och [[begrepp:mätosäkerhet]]en anger inom vilket intervall det sanna måttet rimligen ligger. Den måste vägas in innan en detalj godkänns. Regeln som används är att detaljen godkänns bara om hela osäkerhetsintervallet ligger innanför gränsmåtten. Ligger någon del av intervallet utanför går det inte att veta att detaljen uppfyller kravet, och då får den inte godkännas.

Ta axeltappen ovan, alltså måttet 12,00 mm med toleransen ±0,05 mm och gränsmåtten 11,95 och 12,05 mm. Tre detaljer mäts med en mikrometer vars mätosäkerhet är ±0,01 mm.

Den första mäter 12,03 mm. Det sanna måttet ligger då mellan 12,02 och 12,04 mm. Hela intervallet ligger innanför gränsmåtten, och detaljen godkänns.

Den andra mäter 12,07 mm. Det sanna måttet ligger mellan 12,06 och 12,08 mm, alltså i sin helhet utanför det övre gränsmåttet. Detaljen uppfyller inte kravet och godkänns inte.

Den tredje mäter 12,05 mm, alltså precis på gränsmåttet. Det sanna måttet ligger mellan 12,04 och 12,06 mm, och den övre delen av intervallet ligger utanför gränsen. Mätningen kan alltså inte visa att detaljen håller måttet, och den får därför inte godkännas.

Är resultatet rimligt? Toleransvidden är 0,10 mm och mätosäkerhetens vidd 0,02 mm, alltså en femtedel av toleransen. En vanlig tumregel är att mätdonets osäkerhet inte bör ta mer än en tiondel av toleransen i anspråk. Mikrometern är därmed i grövsta laget för uppgiften, och det är just därför den tredje detaljen hamnar i en gråzon där mätningen inte räcker för ett beslut. Med ett noggrannare mätdon hade intervallet krympt och beslutet gått att fatta. Slutsatsen är alltså inte att den tredje detaljen är felaktig, utan att mätningen inte duger för att avgöra saken.

[BILD 12.1-2] Innehåll: Ett vågrätt toleransband för måttet 12,00 mm, med undre gränsmåttet 11,95 och övre gränsmåttet 12,05 utmärkta som två lodräta linjer och fältet mellan dem skrafferat och märkt godkänt område. Under bandet tre mätresultat ritade som punkter med vågräta osäkerhetsstaplar av samma längd, ±0,01 mm. Det första ligger vid 12,03 med hela stapeln innanför fältet, märkt godkänd. Det andra ligger vid 12,07 med hela stapeln utanför, märkt kasseras. Det tredje ligger vid 12,05 med stapeln delvis utanför den övre linjen, märkt kan inte godkännas, mätningen räcker inte. Bildtext: "Det är osäkerhetsintervallet som ska ligga innanför gränsmåtten, inte mätvärdet. Ett värde precis på gränsen räcker inte för ett godkännande."

**Det som inte godkänns ska tas om hand.** *Kassation* är att en detalj som inte uppfyller kraven tas ur produktionen och skrotas. Alternativet är omarbetning, alltså att detaljen görs om så att den håller måttet, och det fungerar bara åt ena hållet. Material går att ta bort men inte att lägga tillbaka. En axel som blivit för tjock går att svarva ned, en som blivit för tunn går inte att rädda.

Ett tredje alternativ finns och missbrukas lätt. Konstruktören kan medge ett avsteg och godkänna detaljen trots avvikelsen, om det går att visa att funktionen ändå uppfylls. Beslutet ska då fattas av den som känner konstruktionen, det ska skrivas ned tillsammans med sitt skäl, och det gäller bara de detaljer det gäller. Att i stället vidga toleransen på ritningen tills utfallet ryms är att skriva om kravet i efterhand, och då har [[begrepp:godkäntgräns]]en slutat betyda något.

Kontrollen ger till sist något mer än ett godkännande per detalj. Måtten från många detaljer visar hur tillverkningen beter sig över tid. Vandrar måtten långsamt åt ett håll är ett verktyg på väg att bli slitet, och det går att byta innan den första detaljen hamnar utanför toleransen. Där sluts cirkeln mot kvalitetssäkringen, eftersom kontrollen då inte längre bara sorterar utfallet utan styr arbetssättet.

## Instuderingsfrågor

1. Vad menas med kvalitet?
2. Varför har ett enkelt och billigt kullager inte lägre kvalitet än ett dyrt och mycket noggrant slipat?
3. Varför går det inte att bedöma kvaliteten hos en produkt utan att känna till kraven på den?
4. Varför skapar slutkontroll ingen kvalitet, trots att den sorterar bort de felaktiga detaljerna?
5. Vad innebär kvalitetssäkring, och hur skiljer den sig från kontroll?
6. Vad är en avvikelse, och vad skiljer en avvikelse som rättas från en som utreds?
7. Varför slutar avvikelser att rapporteras på en arbetsplats där den som rapporterar får skulden, och vad blir följden för verksamheten?
8. Ange de fyra stegen i en förbättringscykel och vilket av dem som oftast hoppas över.
9. Vad säger ett ISO 9001-certifikat om ett företag, och vad säger det inte?
10. Varför kan det löna sig att stoppa en produktionslinje när ett fel upptäcks, trots att stoppet kostar pengar?
11. Vad menas med kvalitetsbristkostnad, och varför växer den ju senare ett fel upptäcks?
12. Hur räknas gränsmåtten fram ur ett nominellt mått och dess tolerans?
13. Vad är kalibrering, och varför räcker det inte att mätdonet en gång visade rätt?
14. Vad innebär spårbarhet vid mätning, och vilket praktiskt problem löser den?
15. Varför får en detalj vars mätvärde ligger precis på gränsmåttet inte godkännas?

## Övningar

1. **Kvalitet eller inte.** Avgör för vart och ett av dessa påståenden om det är ett hållbart sätt att resonera om kvalitet, och motivera på en mening: att en produkt i massivt trä alltid har högre kvalitet än en i plast, att en tunn engångshandske kan ha hög kvalitet, att kvaliteten på en tillverkad detalj går att bedöma utan ritning, att ett företag med ISO 9001-certifikat därmed levererar felfria produkter, och att en produkt som uppfyller alla ställda krav har hög kvalitet även om kunderna är missnöjda. Ange för det sista påståendet var felet i så fall ligger.

2. **Godkänd eller inte.** En bussning ska ha ytterdiametern 25,00 mm med toleransen ±0,04 mm. Ange först gränsmåtten. Fyra bussningar mäts med ett skjutmått vars mätosäkerhet är ±0,02 mm, och mätvärdena blir 24,99 mm, 25,03 mm, 25,07 mm och 24,96 mm. Avgör för var och en om den ska godkännas, kasseras eller om mätningen inte räcker för ett beslut, och ange osäkerhetsintervallet i varje fall. Bedöm därefter om skjutmåttet är ett lämpligt mätdon för uppgiften, och ange vad som skulle behöva ändras för att alla fyra besluten ska gå att fatta.

3. **Mät en verklig serie.** Ta minst tio likadana föremål som ska vara lika stora, till exempel skruvar ur samma förpackning, brickor, mynt av samma valör eller detaljer utskrivna från samma fil. Mät samma mått på var och en med skjutmått eller mikrometer och skriv upp värdena. Ange det största och minsta uppmätta måttet och hur stor spridningen är. Sätt därefter en tolerans som du menar att serien borde klara, motivera valet, och ange hur många av föremålen som hade godkänts med den toleransen. Redovisa mätvärdena i en tabell tillsammans med mätdonets minsta skaldel.

4. **Vad kostar felet var?** En tillverkare av cykelbelysning upptäcker att en tätning inte håller regn ute. Beskriv vad felet kostar företaget om det upptäcks under konstruktionen, under tillverkningen respektive efter att lamporna sålts, och ange för varje steg vilka kostnadsposter som tillkommer utöver dem i steget före. Ange därefter vilken kontroll som hade kunnat fånga felet tidigast, och varför den kontrollen inte är gratis.

5. **Driv ett varv i förbättringscykeln.** Välj ett återkommande arbetsmoment som du själv utför, i skolan, i verkstaden eller hemma, och som brukar bli fel eller ta för lång tid. Formulera vad ett bra resultat är och hur du ska mäta det. Genomför momentet minst tre gånger och anteckna utfallet varje gång. Ändra därefter arbetssättet på en enda punkt, genomför momentet tre gånger till och jämför utfallen. Redovisa vad du ändrade, vad mätningen visade och om ändringen ska behållas.
