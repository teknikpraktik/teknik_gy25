---
type: facit
chapter: 9
sectionNumber: 7
title: Facit
status: fardig-forsta-version
utanSvar:
  instuderingsfragor: []
  ovningar:
    - "9.1:1"
    - "9.1:2"
    - "9.1:3"
    - "9.1:4"
    - "9.2:2"
    - "9.2:4"
    - "9.3:1"
    - "9.3:2"
    - "9.3:3"
    - "9.4:1"
    - "9.4:2"
    - "9.4:3"
    - "9.4:4"
    - "9.4:5"
---

## 9.1 IT-systemets delar

### Instuderingsfrågor

1. En samling delar som tillsammans samlar in, lagrar, bearbetar och visar information för ett bestämt syfte.
2. Hårdvara, mjukvara, data, nätverk och användare.
3. Hårdvaran är de fysiska delarna, till exempel kortläsaren vid bussdörren, medan mjukvaran är de program som säger åt hårdvaran vad den ska göra, till exempel appen i telefonen.
4. Hårdvara går att köpa ny och mjukvara går att skriva om, medan förlorade data inte går att återskapa.
5. Nätverket binder samman delarna så att de kan utbyta information. Utan det blir delarna öar som var för sig inte kan avgöra om en biljett gäller.
6. Därför att systemet inte fungerar utan dem. Resenären, föraren, kundtjänsten och teknikern utför var sin uppgift i systemet, och de flesta fel i vardagen uppstår dessutom i skarven mellan människa och maskin.
7. Fordonet bär med sig en kopia av det som behövs för att avgöra om en biljett gäller, svarar själv medan täckningen saknas och skickar in de sparade resorna när förbindelsen kommer tillbaka. Annars skulle trafiken stanna av ett skäl som inte har med biljetten att göra.
8. Modeller och ritningar lagras i system som håller reda på vilken version som gäller, så att verkstaden inte tillverkar efter en gammal ritning, och mätvärden samlas in, lagras och analyseras i system i stället för i ett anteckningsblock. Båda gör att alla i arbetet ser samma uppgifter samtidigt.
9. Tidigare byggde planeringen på räkningar för hand under några dagar om året. När varje visad biljett registreras växer i stället ett löpande underlag fram över var och när människor faktiskt reser.
10. När allt fungerar syns bara det systemet gör, inte hur det är byggt. Vid ett fel visar sig vilka delar systemet är beroende av och vilka det klarar sig utan.

## 9.2 Datorer

### Instuderingsfrågor

1. Processor, primärminne, sekundärminne samt in- och utenheter.
2. Hämta nästa instruktion, avkoda vad den betyder och utföra den, om och om igen.
3. En instruktion gör bara en enkel sak, som att flytta, addera eller jämföra tal. Styrkan ligger i antalet, eftersom flera miljarder utförs varje sekund.
4. Primärminnet är snabbt, flyktigt och mindre, medan sekundärminnet är långsammare, beständigt och rymmer mer. Programmet arbetar i primärminnet och sparas i sekundärminnet.
5. Processorn arbetar mot arbetsminnet och inte direkt mot lagringen, som är för långsam att hämta varje instruktion ur.
6. De 8 gigabyten är arbetsyta för det som pågår just nu, och de 256 är lagringsplats för det som sparas. Talen beskriver olika saker och går därför inte att jämföra.
7. När arbetsminnet är fullt måste datorn flytta ut sådant den snart behöver igen till den långsammare lagringen och sedan hämta tillbaka det, vilket tar tid oavsett hur mycket ledig lagring som finns.
8. En bit är en etta eller en nolla och den minsta informationsmängd som finns. En byte är åtta bitar som hanteras tillsammans.
9. Åtta bitar som var för sig kan vara 0 eller 1 ger 2 upphöjt till 8 kombinationer, alltså 256.
10. Ett talsystem där varje position är dubbelt så mycket värd som positionen till höger om sig. Tiosystemet bygger på samma princip, men med tio i stället för två.
11. En överenskommelse om vilket nummer som betyder vilket tecken. ASCII använder sju bitar och räcker till 128 tecken, vilket täcker det engelska alfabetet men inte å, ä och ö.
12. Med tre tal som anger mängden rött, grönt och blått, vart och ett lagrat i en byte med värden mellan 0 och 255. Tre tal krävs eftersom färgen byggs av tre grundfärger.
13. Varje pixel kräver tre byte, och en bild med miljontals pixlar blir därför tiotals megabyte obehandlad. Komprimeringen utnyttjar upprepningar i bilden och kastar bort sådant ögat inte lätt ser.
14. Talet 65, bokstaven A eller en mörkgrå bildpunkt. Vilket det blir avgörs av hur programmet tolkar mönstret.

### Övningar

1. 6 = 110, 20 = 10100, 45 = 101101 och 100 = 1100100. Åt andra hållet: 1010 = 8 + 2 = 10, 10011 = 16 + 2 + 1 = 19 och 11111111 = 255.
3. Bilden har 4 000 · 3 000 = 12 000 000 pixlar, och 12 000 000 · 3 byte = 36 000 000 byte, alltså 36 megabyte. En verklig fil från samma kamera är några megabyte, alltså omkring tio gånger mindre. Komprimeringen offrar detaljer som ögat inte lätt uppfattar, vilket är skälet till att en bild som sparas om många gånger blir successivt sämre.
5. Programmet tolkar bitmönstret enligt sina egna regler och visar därför filen som en lång följd av obegripliga tecken. Innehållet är oskadat, det är tolkningen som är fel, vilket originalfilen visar genom att fortfarande gå att öppna som vanligt.

## 9.3 Nätverk och internet

### Instuderingsfrågor

1. Ett nätverk där enheterna är samlade inom ett begränsat område, till exempel ett fordon eller en skola.
2. En anslutning, en adress och någon som ser till att meddelandet hamnar rätt.
3. Kabel väljs där förbindelsen måste fungera varje gång, eftersom den är stabil och inte delar utrymme med annat som sänder. Radio väljs där enheten ska kunna flyttas.
4. Switchen tar emot ett meddelande på en port och skickar vidare det bara till den port där mottagaren sitter.
5. Switchen fördelar trafiken inne i det egna nätet, medan routern kopplar ihop två nät och bestämmer vilken väg trafiken tar ut ur nätet.
6. Bandbredd är hur mycket data som hinner passera per sekund. Fördröjningen är hur lång tid ett enskilt meddelande tar på sig att komma fram.
7. Spärren ska svara innan resenären hunnit ta ett steg, vilket är en fråga om väntetiden för ett litet meddelande. Film kräver i stället att stora mängder data hinner fram löpande.
8. En uppsättning regler för hur två parter ska utbyta information. Eftersom reglerna är desamma oavsett tillverkare kan utrustning som aldrig mötts förut ändå fungera ihop.
9. Meddelandet delas i paket som var för sig får avsändare, mottagare och ordningsnummer. Paketen skickas i väg var för sig, kan ta olika vägar genom nätet och sätts ihop i rätt ordning hos mottagaren.
10. Tusentals överföringar kan dela på samma ledningar, eftersom paketen ryms i luckorna mellan varandra, och trafiken kan ta en annan väg om en förbindelse bryts. Dessutom behöver bara ett saknat paket skickas om, inte hela meddelandet.
11. Den adress varje ansluten enhet har, så att paket kan riktas till just den. Den äldre varianten bygger på 32 bitar och ger drygt fyra miljarder adresser, vilka tog slut när antalet uppkopplade enheter växte.
12. DNS översätter namn på tjänster till IP-adresser och fungerar alltså som nätets adressbok.
13. Datorerna kan fortfarande nå varandra, men utan svar från namnservrarna vet ingen vilken adress ett namn motsvarar, och därmed går ingen tjänst att nå.
14. Appen frågar en namnserver efter serverns adress, köpet delas i paket som går via mobiloperatörens nät och flera routrar till datorhallen, servern behandlar köpet och skickar tillbaka biljetten som nya paket, och telefonen sätter ihop dem och visar resultatet. Trafiken är krypterad hela vägen.

### Övningar

4. Samma namn kan ge olika adresser, eftersom en stor tjänst körs på många servrar. Namnservern kan svara med den server som ligger närmast eller är minst belastad, vilket både fördelar trafiken och kortar fördröjningen.
5. Förlorar routern sin förbindelse ut når trafiken inte längre något utanför det egna nätet, medan enheterna inne i nätet fortfarande når varandra. Slutar namnservern svara fungerar förbindelserna, men namn kan inte översättas till adresser och tjänsterna framstår som onåbara. Bryts en av flera vägar mellan två routrar fortsätter trafiken en annan väg, och användaren märker på sin höjd en kort fördröjning.

## 9.4 Digitalisering

### Instuderingsfrågor

1. Giltigheten satt i själva kortet och kontrollen skedde i förarens öga, så systemet hade varken ström eller nät att förlora. Flyttas giltigheten till en databas tillkommer servrar, förbindelser, appar och en drift som måste fungera dygnet runt.
2. Möjligt blir bland annat att spärra en biljett i samma sekund, att rätta en felaktig debitering i efterhand och att flytta biljetten till en ny telefon. Till kraven hör en fungerande förbindelse, löpande drift och uppdateringar.
3. Underhållet planerades efter kalender eller drifttimmar. Det bytte antingen fullt funktionsdugliga delar i förtid eller missade den del som var på väg att gå sönder.
4. Att åtgärden styrs av mätvärden från maskinen själv i stället för av ett schema. Utrustningen måste därför kunna mäta sitt eget tillstånd, till exempel vibrationer, och skicka värdena vidare.
5. Den tidigare automationen lät maskiner utföra och styra arbetet. Dagens maskiner lämnar dessutom ifrån sig underlaget för hur arbetet ska planeras.
6. Varje detalj kan spåras till material, maskin och kontroll, och en återkallelse kan därmed begränsas till de exemplar som faktiskt berörs i stället för till hela årsproduktionen.
7. Uppgifterna gäller nu i stället för enligt plan. Resenären ser var fordonet är och får besked om störningar medan de pågår, och inne i en organisation arbetar alla mot samma uppgifter i stället för mot kopior som genast blir gamla.
8. En fungerande telefon eller dator, en förbindelse och en giltig elektronisk identitet.
9. Ett tekniskt system där utrustning på plats är förbunden med ett nät och skickar data vidare för lagring, analys eller styrning.
10. En givare som mäter, en liten dator som läser av och skickar, ett nätverk som för värdena vidare, en tjänst som lagrar och analyserar, och en åtgärd i form av larm eller styrning. För bussen är det positionsmottagare, fordonsdator, mobilnät, beräknad ankomsttid och hållplatsskylt.
11. Datorkraft och lagring som hyrs av en leverantör och nås över nätet. Det främsta skälet är att behovet varierar: en hyrd tjänst växer och krymper efter belastningen, medan en egen serverhall måste dimensioneras för den värsta timmen och står halvtom resten av tiden.
12. Verksamheten blir beroende av leverantören och av förbindelsen dit, och den som en gång flyttat in sina data har sällan en enkel väg tillbaka.
13. Ett mätvärde säger ingenting i sig. Först när det jämförs med en tidtabell, ett gränsvärde eller en beräkning kan systemet avgöra att något avviker, och ju bättre förväntan är desto tidigare kan larmet komma.
14. Säkerhetsuppdateringar, utbytta certifikat och nya versioner av mjukvaran. Utrustning som fungerar utmärkt mekaniskt kan behöva bytas när tillverkaren slutar uppdatera den.
15. Många verksamheter hyr kapacitet av samma fåtal leverantörer. Ett större avbrott hos en av dem slår därför samtidigt mot tjänster som i övrigt inte har någonting med varandra att göra.
