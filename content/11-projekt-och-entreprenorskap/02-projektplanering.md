---
id: "11.2"
chapter: 11
sectionNumber: 2
title: Projektplanering
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-05"]
  niva2: ["n2-04"]
learningGoals:
  - Upprätta en projektplan med mål, aktiviteter, tidsplan och ansvarsfördelning.
  - Identifiera risker i ett projekt och planera förebyggande åtgärder.
abilities: [f1, f5]
concepts_introduced: ["projektplan", "aktivitet", "beroende", "tidsplan", "Gantt-schema", "milstolpe", "kritisk linje", "projektrisk", "förebyggande åtgärd"]
concepts_used: ["projektmål", "leverans", "projektledare"]
figures: []
prerequisites: ["11.1"]
---

En grupp på fem personer får sex veckor på sig att ta fram en prototyp. De första veckorna går bra. Alla har något att göra, det ritas och diskuteras och stämningen är god. Femte veckan visar det sig att ingen har beställt materialet, att två av dem har ritat samma detalj och att provningen som skulle ta en vecka inte får plats någonstans. Ingen har gjort något fel. Det som saknades var en plan.

En *projektplan* är det dokument som svarar på fyra frågor innan arbetet börjar. Vad ska göras, när ska det göras, vem ansvarar för vad, och vad gör vi om något går fel. Planen skrivs i planeringsfasen, används genom hela genomförandet och skrivs om när förutsättningarna ändras.

Omfattningen varierar enormt. Planen för en pendeltågstunnel under en storstad omfattar tusentals aktiviteter och tiotals entreprenörer, medan planen för ett skolprojekt ryms på ett papper. Frågorna är däremot desamma, och det är därför samma arbetsform går att öva i liten skala.

## Projektplan

Planen har fyra delar: mål, aktiviteter, tidsplan och ansvarsfördelning. De hänger ihop i den ordningen, och den som hoppar över en av dem märker det senare.

**Målet är utgångspunkten.** [[begrepp:projektmål]]et säger vad som ska vara uppnått när projektet är slut, och [[begrepp:leverans]]en säger vad som faktiskt ska lämnas över. Allt i planen ska gå att härleda till målet. Går en aktivitet inte att knyta dit hör den antingen inte hemma i projektet, eller så är målet ofullständigt formulerat. Båda upptäckterna är värdefulla, och båda görs billigast i planeringen.

**Arbetet bryts ned i aktiviteter.** En *aktivitet* är ett avgränsat arbetsmoment med en tydlig början, ett tydligt slut, en uppskattad tidsåtgång och en ansvarig. Prövningen är enkel. Går det att säga när aktiviteten är klar? Formuleringen "arbeta med konstruktionen" klarar inte prövningen, eftersom ingen kan avgöra när den är avklarad. "Ta fram tre konceptförslag och välja ett" klarar den. Nedbrytningen fortsätter tills varje aktivitet går att överblicka. En bra tumregel är att en aktivitet som är längre än ungefär en tiondel av projektets längd oftast är för grovt formulerad.

Ta ett uppdrag i skolskala. Skolan vill ha ett bättre sätt att parkera cyklar vid entrén, och gruppen ska ta fram och prova en prototyp av ett cykelställ på sex veckor. Planen växer fram i fem steg.

Först listas allt som behöver göras: räkna cyklarna och ta reda på vilka som parkerar där, formulera kraven tillsammans med beställaren, ta fram konceptförslag, välja koncept, rita och dimensionera, beställa material, bygga prototypen, prova den med riktiga cyklar, dokumentera arbetet och redovisa.

Sedan uppskattas tidsåtgången för var och en. Att räkna cyklar tar en halv dag. Att bygga prototypen tar tre dagar.

Därefter ordnas aktiviteterna efter hur de hänger ihop. Ett *beroende* föreligger när en aktivitet inte kan börja förrän en annan är klar. Kraven måste finnas innan koncepten tas fram, konceptet måste vara valt innan ritningen görs, ritningen måste vara klar innan materialet beställs, och materialet måste finnas på plats innan bygget startar. Aktiviteter utan beroende mellan sig kan i stället pågå samtidigt, och dokumentationen är ett sådant arbete som löper vid sidan av allt det andra.

Sedan läggs aktiviteterna ut i tiden. Redovisningsdagen ligger fast, så det enklaste är att räkna bakåt från den. Här upptäcker gruppen att materialet har två veckors leveranstid, vilket betyder att beställningen måste ligga i vecka två och inte i vecka fyra som de hade tänkt.

Till sist sätts milstolpar och ansvariga. Resultatet är en *tidsplan*, alltså aktiviteterna utlagda på en tidsaxel i den ordning beroendena tillåter.

Tidsplanen ritas nästan alltid som ett *Gantt-schema*, uppkallat efter den amerikanske ingenjör som spred formen i början av 1900-talet. Aktiviteterna står under varandra i vänsterkanten, tiden löper åt höger, och varje aktivitet blir en stapel vars längd är dess tidsåtgång. Formen har hållit i över hundra år av ett enkelt skäl. Den visar samtidigt vad som ska göras, hur länge det tar, vad som pågår parallellt och vad som väntar på något annat.

I schemat markeras också milstolparna. En *milstolpe* är en bestämd tidpunkt då något ska vara uppnått, och den har till skillnad från en aktivitet ingen längd. "Konceptvalet är gjort" och "prototypen är provad" är milstolpar. Poängen med dem är att de går att kontrollera utan diskussion. En aktivitet kan vara halvfärdig och ändå kännas nästan klar, medan en milstolpe antingen är passerad eller inte.

[BILD 11.2-1] Innehåll: Gantt-schema för cykelställsprojektet över sex veckor. Vänsterkolumnen listar aktiviteterna i tidsordning, med en smal kolumn för ansvarig bredvid namnet. Tiden löper åt höger med veckorna 1 till 6 utsatta. Varje aktivitet är en vågrät stapel vars längd motsvarar tidsåtgången. Materialbeställningen visas som en kort stapel följd av ett skrafferat fält märkt leveranstid, två veckor. Beroenden markeras med pilar från slutet av en stapel till början av nästa. Dokumentationen löper som en lång stapel parallellt med bygget och provningen. Tre milstolpar markeras som romber på tidsaxeln: kraven fastställda, konceptvalet gjort och prototypen provad. Sista halvan av vecka sex lämnas tom och märks marginal. Bildtext: "Ett Gantt-schema visar på en gång vad som ska göras, hur länge det tar, vad som pågår samtidigt och vad som väntar på något annat."

Med beroendena inritade syns något som inte framgår av en lista. Genom planen löper kedjor av aktiviteter som var och en måste vänta på den föregående, och den längsta sådana kedjan kallas *kritisk linje*. Blir en aktivitet på den kritiska linjen försenad en dag, blir hela projektet försenat en dag. Aktiviteter utanför linjen har däremot marginal och kan dra över något utan att slutdatumet påverkas.

Den kritiska linjen går ofta genom väntetid snarare än genom det arbete som tar mest tid. I cykelställsprojektet är bygget den tyngsta arbetsinsatsen, men det är leveranstiden på två veckor som styr när bygget kan börja. En extra dag i verkstaden hade gått att ta igen. En beställning som läggs en vecka för sent skjuter fram allt som kommer efter den.

**Ansvaret fördelas per aktivitet.** Varje aktivitet får exakt en ansvarig. Flera personer får gärna arbeta med den, men en av dem svarar för att den blir gjord och kan säga hur den ligger till. Detta är inte samma sak som rollerna i projektet. Rollen gäller hela projektet och säger vad en person gör i det, medan ansvaret gäller ett enskilt arbetsmoment. [[begrepp:projektledare]]n ansvarar för att planen som helhet hålls aktuell, inte för att varje aktivitet i den utförs.

**Tidsuppskattningen är planens svagaste punkt.** Nästan alla underskattar hur lång tid ett arbete tar, och det gäller även den som har gjort samma sak förut. Tre saker hjälper. Jämför med ett liknande arbete som verkligen har utförts, och ta då reda på hur lång tid det tog i praktiken och inte hur lång tid det var tänkt att ta. Fråga någon som har gjort det förut. Dela en stor aktivitet i flera mindre och uppskatta varje del för sig, eftersom summan av flera små uppskattningar blir närmare sanningen än en enda stor gissning.

Ändå kommer planen att bli fel i detaljerna, och det är inget fel på planen. En plan är en förutsägelse om framtiden, och det är just därför den behövs. Utan plan går det inte att märka att arbetet ligger efter förrän tiden är slut. Med plan syns avvikelsen den vecka den uppstår, medan det ännu går att göra något åt den.

## Projektrisker

Genom Hallandsåsen i nordvästra Skåne går i dag en järnvägstunnel i två rör. Arbetet började 1992 och tunneln skulle enligt planen stå klar efter några år. Den öppnade för trafik i december 2015.

Att åsen var vattenförande var känt innan arbetet började. Hur mycket vatten som skulle strömma in i tunneln var det inte. När inläckaget blev ohanterligt användes ett tätningsmedel som innehöll akrylamid, ett giftigt ämne. Medlet följde med vattnet ut i omgivningen, fisk dog i ett vattendrag, kor i närheten blev sjuka och arbetet stoppades 1997. Tunneln färdigställdes långt senare med en tunnelborrmaskin, och slutnotan blev mångdubbelt större än den ursprungliga kalkylen.

En *projektrisk* är en händelse som kan inträffa och som skulle göra att projektet inte når sitt mål inom utsatt tid och med de resurser som finns. Ordet kan är avgörande. En risk har inte hänt. Det som redan har hänt är inte längre en risk utan ett problem som ska hanteras, och skillnaden är praktisk. Mot en risk går det att göra något i förväg, mot ett problem går det bara att reagera.

**Riskerna hittas i planen.** Den enklaste metoden är att gå igenom tidsplanen aktivitet för aktivitet och för var och en fråga vad som skulle kunna hindra just den. Frågan är konkret och ger konkreta svar, till skillnad från den allmänna frågan om vad som kan gå fel i projektet.

Vissa risker återkommer i nästan alla projekt. En leverans kan dröja. Utrustning kan vara upptagen av någon annan eller gå sönder. En person kan bli sjuk mitt i sitt ansvarsområde. Ett beslut som gruppen väntar på kan dra ut på tiden hos någon annan. Gruppen kan sakna en kunskap som visar sig nödvändig först när arbetet har börjat.

Farligast är den sista sorten, alltså de moment där gruppen inte vet hur svårt något är. Där finns ingen erfarenhet att uppskatta tiden med, och därför är det just de momenten som spricker. Hallandsåsen är samma sak i stor skala. Berget var undersökt, men osäkerheten i hur mycket vatten som skulle strömma in var betydligt större än vad planen räknade med.

**Alla risker är inte värda en åtgärd.** Två frågor avgör. Hur troligt är det att händelsen inträffar, och hur allvarligt blir det om den gör det. En risk som är både osannolik och lindrig antecknas och lämnas. En risk som är sannolik eller allvarlig ska ha en åtgärd, och en risk som är både sannolik och allvarlig ska ha en åtgärd inplanerad redan i tidsplanen.

En *förebyggande åtgärd* är något gruppen gör i förväg för att risken inte ska inträffa, eller för att den ska bli mindre allvarlig om den ändå gör det. Den skiljer sig från en reservplan, som är vad gruppen gör när det redan har hänt. Mot risken att materialet inte kommer i tid är den förebyggande åtgärden att beställa i vecka två i stället för i vecka fyra, och reservplanen är att i förväg ha tagit reda på vilken annan leverantör som har materialet i lager. Båda behövs, och de används vid olika tidpunkter.

Varje risk får en ansvarig som bevakar den, precis som varje aktivitet har en ansvarig. Risklistan är levande. Den gås igenom på mötena, nya risker tillkommer när arbetet visar sig annorlunda än väntat, och gamla stryks när aktiviteten de hörde till är avklarad.

[BILD 11.2-2] Innehåll: Risklista för cykelställsprojektet, uppställd som en tabell med kolumnerna risk, hur troligt, hur allvarligt, förebyggande åtgärd, reservplan och ansvarig. Tre rader är ifyllda som förlaga: materialet kommer inte i tid (troligt, allvarligt, beställ i vecka två, alternativ leverantör kontrollerad i förväg), verkstaden är upptagen när bygget ska ske (mindre troligt, allvarligt, boka verkstadstid redan i vecka ett, bygg på eftermiddagstid), och prototypen håller inte när en cykel stöts till (troligt, mindre allvarligt, provbelasta konstruktionen innan hela stället byggs, förstärk infästningen). Kolumnerna för hur troligt och hur allvarligt anges i ord, inte som siffror. Bildtext: "Risklistan hör ihop med tidsplanen. Riskerna hittas genom att gå igenom planen aktivitet för aktivitet och fråga vad som kan hindra just den."

Utöver de risker gruppen har hittat finns alltid de den inte har tänkt på. Mot dem finns bara ett skydd, och det är marginal i tidsplanen. Att lämna sista veckan tom är inte slöseri utan den enda åtgärd som fungerar mot en okänd risk.

Hallandsåsen lämnar en sista lärdom, och den är obekväm. Tätningsmedlet var åtgärden mot en risk, och det skapade en betydligt värre risk än den det skulle lösa. En åtgärd är också ett ingrepp och kan få egna följder. Därför prövas en åtgärd i liten skala innan den sätts in i stor, av samma skäl som en teknisk lösning provas innan den byggs i full storlek.

## Instuderingsfrågor

1. Vad är en projektplan, och vilka fyra frågor svarar den på?
2. Varför måste projektmålet vara bestämt innan planen skrivs?
3. Vad kännetecknar en aktivitet, och vilken prövning avgör om en formulering duger som aktivitet i en plan?
4. Varför duger inte formuleringen "arbeta med konstruktionen" som aktivitet?
5. Vad menas med ett beroende mellan två aktiviteter, och hur styr beroendena i vilken ordning arbetet kan utföras?
6. Vad är en milstolpe, och vad skiljer den från en aktivitet?
7. Vad visar ett Gantt-schema som en lista över aktiviteter inte visar?
8. Vad är den kritiska linjen, och varför får en försening där större följder än en försening i en aktivitet utanför den?
9. Hur kan den kritiska linjen gå genom en väntetid i stället för genom det arbete som tar mest tid?
10. Varför har varje aktivitet exakt en ansvarig, trots att flera personer kan arbeta med den?
11. Vad skiljer ansvaret för en aktivitet från en roll i projektet?
12. Varför blir en tidsuppskattning bättre om en stor aktivitet först delas i flera mindre?
13. Vad är en projektrisk, och vad skiljer den från ett problem som redan har inträffat?
14. Vilka två frågor avgör om en risk är värd en åtgärd, och vad följer av att en risk är både sannolik och allvarlig?
15. Vad skiljer en förebyggande åtgärd från en reservplan? Ge ett exempel på vardera för samma risk.

## Övningar

1. **Duger det som aktivitet?** Bedöm för var och en av dessa formuleringar om den duger som aktivitet i en projektplan: att undersöka marknaden, att mäta upp entrén och rita av den i skala, att förbättra konstruktionen, att beställa fyra meter fyrkantrör och två liter färg, att göra klart elektroniken, och att prova prototypen med tio cyklar och anteckna vad som händer. Ange för varje bedömning vad som avgör, och skriv om de formuleringar som inte duger så att de gör det.

2. **Bygg tidsplanen.** En grupp ska ta fram en prototyp av en solcellsdriven laddstation för mobiler till ett grupprum. Arbetet består av dessa aktiviteter, med tidsåtgång i arbetsdagar och beroenden angivna: ta fram krav med beställaren (3 dagar), välja koncept (2 dagar, efter kraven), rita och dimensionera (4 dagar, efter konceptvalet), beställa komponenter (1 dags arbete följt av 10 dagars leveranstid, efter konceptvalet), bygga stommen (3 dagar, efter ritningen), montera elektroniken (2 dagar, efter både leveransen och stommen), prova och mäta (2 dagar, efter monteringen), skriva dokumentationen (3 dagar, kan börja efter ritningen) och redovisa (1 dag, efter provningen och dokumentationen). Rita tidsplanen som ett Gantt-schema med beroendepilar, ange vilken arbetsdag projektet är klart och markera minst två milstolpar. Ange därefter den kritiska linjen, och avgör vad som händer med slutdatumet om bygget av stommen tar två dagar extra respektive om beställningen läggs två dagar för sent. Förklara varför de två förseningarna får olika följder.

3. **Planera om.** Utgå från tidsplanen i föregående övning. Innan arbetet har kommit igång får gruppen veta att leveranstiden på komponenterna har blivit tre veckor i stället för två, och slutdatumet ligger fast. Föreslå två olika sätt att ändra planen så att projektet ändå blir klart i tid, och ange för vart och ett vad gruppen ger upp genom att välja det. Ange också vilken av de två ändringarna du skulle föreslå för uppdragsgivaren, och varför.

4. **Riskerna i ett verkligt projekt.** Välj ett bygg- eller anläggningsprojekt i din närhet eller i landet som har blivit försenat eller dyrare än planerat. Ta reda på så mycket du kan om vad som orsakade avvikelsen. Avgör om orsaken var en risk som gick att förutse innan arbetet började, och skriv i så fall den förebyggande åtgärd du menar att projektet borde ha planerat in. Ange också en orsak som du bedömer att ingen rimligen kunde ha förutsett, och vad som i så fall hade skyddat projektet.

5. **Eget projekt, steg 2: krav och projektplan.** Fortsätt på det behov ni valde i föregående avsnitt. Formulera först tre till fem krav på lösningen. Skriv varje krav så att det går att pröva när prototypen är byggd, alltså med ett mått, ett antal eller en handling som antingen fungerar eller inte. Kravet att lösningen ska vara enkel att använda går inte att pröva. Kravet att en person ska kunna använda den med en hand, utan verktyg och på under tio sekunder går att pröva.

   Skriv därefter projektplanen. Bryt ned arbetet fram till redovisningen i aktiviteter, uppskatta tidsåtgången för var och en, ordna dem efter beroenden och rita tidsplanen som ett Gantt-schema. Sätt minst två milstolpar och skriv ut vem i gruppen som ansvarar för varje aktivitet. Lämna marginal i slutet.

   Gör till sist en risklista med minst fyra risker. Bedöm för varje risk hur troligt och hur allvarligt det är, och skriv en förebyggande åtgärd för de risker som förtjänar en. Utse en ansvarig för varje risk.

   *Vill ni gå vidare:* stäm av kraven med den ni frågade i steg 1 och skriv ned vad den personen tycker saknas eller är fel prioriterat. Rätta kraven efter det svaret och notera vad ni ändrade.

   *Vill ni gå längre än så:* ta reda på verkliga leveranstider och verklig tillgång till den utrustning ni behöver, och lägg in dem i tidsplanen i stället för uppskattningar. Ange därefter var er kritiska linje går, och vad ni skulle göra först om den visar sig vara för lång för den tid ni har.
