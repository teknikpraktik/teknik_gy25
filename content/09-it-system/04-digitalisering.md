---
id: "9.4"
chapter: 9
sectionNumber: 4
title: Digitalisering
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-03"]
  niva2: ["n2-11"]
learningGoals:
  - Förklara digitaliseringens betydelse för produktion, kommunikation och
    människans livsmiljö.
  - Beskriva hur uppkopplade enheter och molntjänster används i tekniska system
    och produktion.
abilities: [f4]
concepts_introduced: ["uppkopplat system", "molntjänst", "tillståndsbaserat underhåll"]
concepts_used: ["digitalisering", "automation", "IT-system", "data", "nätverk", "protokoll"]
figures: []
prerequisites: ["9.3"]
---

## Digitaliseringens betydelse

Det gamla remsbiljettkortet i plånboken var ett komplett system i sig självt. Giltigheten satt i kortet, kontrollen skedde i förarens öga, och ingenting behövde vara uppkopplat mot någonting. Systemet var okänsligt för strömavbrott och nätfel av det enkla skälet att det inte hade någon ström och inget nät.

När samma biljett flyttar in i en app ändras systemets hela anatomi. Giltigheten sitter inte längre i något föremål utan i en post i en databas, och telefonen visar bara vad databasen redan vet. Därmed tillkommer servrar, förbindelser, appar och en drift som måste fungera dygnet runt, och det som förr sköttes av ett papper kräver nu ett [[begrepp:IT-system]] med alla fem delarna på plats.

Både vinsterna och kostnaderna följer av just den flytten. En spärrad biljett går att ogiltigförklara i samma sekund, en felaktig debitering går att rätta i efterhand, och kortet som tappats i en snödriva går att flytta över till en ny telefon. Å andra sidan slutar allt detta fungera i det ögonblick förbindelsen eller servern gör det, och där ett papperskort bara krävde en tryckpress krävs nu underhåll, uppdateringar och personal som håller systemet igång. Det är den avvägningen som återkommer varje gång något digitaliseras.

I produktionen märks [[begrepp:digitalisering]]en tydligast på att maskinerna numera berättar vad de gör. En modern verkstadsmaskin rapporterar löpande drifttid, stopporsaker, temperaturer och vibrationer, och de uppgifterna används på ett sätt som inte var möjligt förr. Underhåll planerades tidigare efter kalender, alltså vart så och så många drifttimmar oavsett skick, vilket antingen bytte fullt funktionsdugliga delar i förtid eller missade den som var på väg att gå sönder. *Tillståndsbaserat underhåll* betyder i stället att åtgärden styrs av mätvärden från maskinen själv. Ett kullager som börjar vibrera annorlunda avslöjar sitt begynnande fel långt innan det havererar, och svenska SKF säljer i dag den övervakningen som en egen produkt vid sidan av lagren. Skillnaden mot [[begrepp:automation]]en i föregående generation är att maskinerna inte bara utför arbetet utan också lämnar ifrån sig underlaget för hur arbetet ska planeras.

Samma sak gäller spårbarheten. När varje tillverkad detalj får ett eget nummer som följer den genom tillverkning, montering och leverans går det att svara på vilken batch material en enskild produkt innehåller, vilken maskin som bearbetade den och vem som kontrollerade den. Visar sig ett fel i efterhand kan återkallelsen begränsas till de exemplar som faktiskt berörs i stället för till hela årsproduktionen.

För kommunikationen är den största förändringen att uppgifterna gäller nu och inte enligt plan. Hållplatsskylten visar inte tidtabellen utan var fordonet befinner sig, och en störning når resenären medan den pågår. Inne i en organisation motsvaras det av att alla arbetar mot samma uppgifter samtidigt: ritningen som konstruktören ändrar är samma ritning verkstaden öppnar, och besked behöver inte längre skickas som kopior som genast blir gamla.

Människans livsmiljö förändras framför allt genom att avståndet till en tjänst inte längre mäts i kilometer. Bankärenden, biljettköp, läkarkontakter och myndighetsärenden utförs där användaren råkar befinna sig, och de fysiska lucköppettider som styrde vardagen har till stor del försvunnit. Det förutsätter samtidigt att man har en fungerande telefon, en förbindelse och en giltig elektronisk identitet. Den som saknar något av detta möter ett samhälle byggt för den som har det, och den frågan tas upp igen i kapitlet om teknik, människa och samhälle.

[BILD 9.4-1] Innehåll: Samma resa i två system, ritade som två rader. Överst papperskortet: kortet i handen, föraren som kontrollerar med blicken, och ingenting mer, med en ruta som listar vad systemet består av. Underst den digitala biljetten: appen, mobilnätet, biljettservern, databasen med giltiga biljetter och driftpersonalen, med motsvarande ruta som listar samtliga delar. Mellan raderna två pilar, en märkt vad som blev möjligt (spärra, rätta i efterhand, flytta till ny telefon) och en märkt vad som tillkom som krav (förbindelse, drift, uppdateringar). Bildtext: "Biljettens giltighet flyttade från papperet till en databas. Både vinsterna och kraven följer av den flytten."

## Uppkopplade system

Ett *uppkopplat system* är ett tekniskt system där utrustning på plats är förbunden med ett nät och skickar data vidare för lagring, analys eller styrning. Samlingsnamnet för utvecklingen är sakernas internet (Internet of Things), och den bygger på att en dator som kan mäta och sända numera kostar så lite att den får sitta i saker som aldrig förr har innehållit elektronik.

Kedjan ser likadan ut oavsett tillämpning. Längst ut sitter en givare som mäter något: en temperatur, en vibration, en position, ett flöde. Intill den finns en liten dator som läser av givaren och skickar värdena vidare enligt ett bestämt [[begrepp:protokoll]]. Värdena går över ett [[begrepp:nätverk]] till en tjänst som lagrar och analyserar dem, och analysen leder till en åtgärd. Ibland är åtgärden ett larm till en människa, ibland en order tillbaka till utrustningen om att ändra något.

Den tjänst som tar emot värdena ligger nästan alltid i en *molntjänst*, alltså datorkraft och lagring som hyrs av en leverantör och nås över nätet i stället för att ägas och skötas på plats. Skälen är praktiska. Ett trafikbolag som ska ta emot positioner från tusen fordon behöver kapacitet som varierar kraftigt över dygnet, och en hyrd tjänst växer och krymper efter behovet medan en egen serverhall måste dimensioneras för den värsta timmen och stå halvtom resten av tiden. Priset är ett beroende: verksamheten vilar på en leverantör och på förbindelsen dit, och den som en gång flyttat in sina data har sällan en enkel väg tillbaka.

Bussens position visar hela kedjan i miniatyr. Fordonsdatorn läser av positionen några gånger i minuten och skickar den vidare, tjänsten jämför den med turens tidtabell och räknar fram en ankomsttid, och resultatet visas på hållplatsskylten, i appen och hos trafikledningen samtidigt. Ligger fordonet efter kan trafikledningen gripa in, och blir förseningen stor nog kan systemet självt underrätta de resenärer som väntar. En fastighet fungerar likadant med temperaturgivare i stället för positionsmottagare, och en verkstadsmaskin med vibrationsgivare.

Analysdelen är sällan komplicerad i sig. Det som gör ett uppkopplat system användbart är att det jämför det uppmätta med något förväntat. Förväntningen kan komma från en tidtabell, ett gränsvärde eller en beräkning, och ju bättre den förväntan är desto tidigare kan systemet larma. Ett larm som går först när maskinen redan står stilla har inte hjälpt någon.

Nya beroenden följer med. Ett uppkopplat system har fler delar som kan fallera än ett fristående, och det behöver dessutom underhållas under hela sin livstid: säkerhetsuppdateringar, utbytta certifikat och nya versioner av mjukvaran. Utrustning som fungerar utmärkt mekaniskt kan behöva bytas därför att tillverkaren slutat uppdatera den. Och eftersom många verksamheter hyr kapacitet av samma fåtal leverantörer slås tjänster som inte har någonting med varandra att göra ut samtidigt när en sådan leverantör får ett större avbrott. Ett fel som förr stannade i en byggnad når i dag lika långt som förbindelserna räcker.

[BILD 9.4-2] Innehåll: Ett uppkopplat systems kedja i fem steg, ritad en gång och tillämpad på tre exempel som löper som parallella spår genom samma schema. Stegen är givare, lokal dator, nätverk, molntjänst med analys, och åtgärd. Spåret för bussen visar positionsmottagare, fordonsdator, mobilnät, beräknad ankomsttid, och hållplatsskylt. Spåret för fastigheten visar temperaturgivare, styrenhet, fastighetsnät, jämförelse mot börvärde, och order till värmesystemet. Spåret för verkstadsmaskinen visar vibrationsgivare, mätenhet, fabriksnät, jämförelse mot normal vibrationsbild, och larm om begynnande lagerfel. Bildtext: "Samma kedja i tre tillämpningar. Det som skiljer är vad som mäts och vad åtgärden blir."

## Instuderingsfrågor

1. Varför var det gamla biljettsystemet med papperskort okänsligt för nätfel, och vad händer med systemets uppbyggnad när giltigheten flyttas till en databas?
2. Ange två saker som blir möjliga med en digital biljett och två krav som tillkommer.
3. Hur planerades underhåll före digitaliseringen, och vilka två problem hade det sättet?
4. Vad menas med tillståndsbaserat underhåll, och vad krävs av utrustningen för att det ska fungera?
5. Vad skiljer dagens datainsamlande maskiner från den tidigare generationens automation?
6. Vilken nytta gör spårbarhet när ett fel upptäcks efter leverans?
7. Vad är den största förändringen digitaliseringen fört med sig för kommunikationen, både för resenären och inne i en organisation?
8. Vad förutsätter en digitaliserad tjänst av användaren för att kunna nås?
9. Vad är ett uppkopplat system?
10. Beskriv de fem stegen i ett uppkopplat systems kedja och ge ett exempel på vart och ett.
11. Vad är en molntjänst, och vilket är det främsta tekniska skälet att hyra kapacitet i stället för att äga den?
12. Vilket beroende skapar en molntjänst?
13. Varför blir ett uppkopplat system användbart först när det uppmätta jämförs med något förväntat?
14. Ange tre skäl till att ett uppkopplat system måste underhållas under hela sin livstid.
15. Varför kan ett avbrott hos en enda leverantör slå ut tjänster som inte har med varandra att göra?

## Övningar

1. **Före och efter.** Välj en tjänst som digitaliserats under de senaste tjugo åren, till exempel biblioteksutlåning, parkeringsbetalning, tvättstugebokning eller bygglovsansökan. Beskriv systemet i båda formerna med de fem delarna hårdvara, mjukvara, data, nätverk och användare. Ange tre saker som blev möjliga och tre krav som tillkom.

2. **Kartlägg kedjan.** Välj ett uppkopplat system du har tillgång till, till exempel en elmätare, en väderstation, ett larm, en robotdammsugare eller en träningsklocka. Ta reda på vad som mäts, hur ofta, vart data skickas och vad de används till. Rita kedjan i fem steg och ange vilken åtgärd systemet leder fram till.

3. **Larma i tid.** Utgå från en maskin eller apparat i din närhet som skulle kunna övervakas. Ange vilken storhet som skulle behöva mätas för att ett begynnande fel ska märkas, vad den ska jämföras med, och var gränsen för larm bör gå. Motivera gränsen med vad som händer om larmet kommer för tidigt respektive för sent.

4. **Vad kostar beroendet.** Undersök ett uppkopplat system i en verksamhet du känner till, till exempel skolans passersystem, en butiks kassasystem eller ett bokningssystem. Beskriv vad som händer med verksamheten om förbindelsen försvinner i en timme, ett dygn respektive en vecka, och föreslå för varje fall ett sätt att arbeta vidare under avbrottet.

5. **Underhåll under livstiden.** Ta reda på hur länge tillverkaren lovar uppdateringar för en uppkopplad produkt du äger eller kan hitta uppgifter om, till exempel en telefon, en router eller en smart högtalare. Jämför den tiden med hur länge produkten rimligen fungerar mekaniskt och elektriskt. Redovisa skillnaden och ange vad den betyder för den som köper produkten.
