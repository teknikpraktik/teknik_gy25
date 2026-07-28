---
id: "9.2"
chapter: 9
sectionNumber: 2
title: Datorer
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-03"]
  niva2: []
learningGoals:
  - Beskriva datorns huvuddelar och förklara hur de samverkar när ett program
    körs.
  - Förklara hur tal, text och bilder representeras binärt.
abilities: [f3]
concepts_introduced: ["processor", "primärminne", "sekundärminne", "bit", "byte", "binära talsystemet", "teckenkodning", "pixel"]
concepts_used: ["hårdvara", "data", "transistor", "integrerad krets"]
figures: []
prerequisites: ["9.1"]
---

## Datorns uppbyggnad

Fordonsdatorn under förarplatsen i bussen har varken skärm eller tangentbord. Den sitter i en sluten låda, den startar när tändningen slås på, och de flesta som åker med bussen vet inte om att den finns. Ändå är den en dator i exakt samma mening som telefonen i fickan, och den är byggd av samma slags delar.

En dator har fyra sorters [[begrepp:hårdvara]], och de finns i varenda en, från en armbandsklocka till en serverhall.

*Processorn* är den del som utför programmets instruktioner. Den arbetar efter ett enkelt kretslopp som upprepas i det oändliga: hämta nästa instruktion, avkoda vad den betyder, utföra den. Instruktionerna är enskilt sett nästan löjligt enkla. Flytta ett tal från en plats till en annan, addera två tal, jämför två tal, hoppa till en annan instruktion om jämförelsen stämde. Styrkan ligger inte i vad en instruktion gör utan i hur många som hinns med. En processor i en vanlig telefon utför flera miljarder instruktioner i sekunden, och den har oftast flera kärnor som gör var sin sak samtidigt.

*Primärminnet*, som också kallas arbetsminne, håller det som datorn arbetar med just nu. Det är snabbt, eftersom processorn måste kunna nå det utan att vänta, och det är flyktigt: innehållet försvinner när strömmen bryts.

*Sekundärminnet* är den beständiga lagringen. Det behåller sitt innehåll utan ström och rymmer betydligt mer, men det är också långsammare att nå. Program, biljetter, foton och inställningar ligger här mellan gångerna de används.

In- och utenheterna är datorns förbindelse med omvärlden. I fordonsdatorn är det kortläsaren vid dörren, förarens lilla skärm, mottagaren som bestämmer fordonets position och nätverkskortet som talar med trafikbolaget. I telefonen är det pekskärmen, kameran, mikrofonen och antennerna. Inuti binds allt samman av ledningar som kallas bussar, och över dem färdas både instruktioner och [[begrepp:data]].

Att öppna biljettappen visar hur delarna samverkar. Programmet ligger i sekundärminnet. Vid tryckningen kopieras dess instruktioner därifrån till primärminnet, eftersom processorn arbetar mot arbetsminnet och inte direkt mot lagringen. Processorn hämtar sedan instruktion efter instruktion ur primärminnet och utför dem, och det som visar sig som en biljett på skärmen är resultatet av några miljoner sådana steg. Biljettens uppgifter läses ur sekundärminnet, kontrolleras mot klockan och skickas till skärmen. Stängs appen försvinner den ur primärminnet, medan biljetten ligger kvar i sekundärminnet till nästa gång.

Här ligger också den vanligaste förväxlingen. En telefon med 8 gigabyte minne och 256 gigabyte lagring har inte två sorters samma sak. De 8 gigabyten är arbetsyta för det som pågår, och de 256 är hyllplats för det som sparas. Fylls arbetsminnet måste datorn börja flytta ut sådant den snart behöver igen, och då blir den långsam trots att det finns gott om ledig lagring.

[BILD 9.2-1] Innehåll: Fordonsdatorn ritad som ett blockschema med fyra block: processor, primärminne, sekundärminne och in- och utenheter, där de sista utgörs av kortläsare, förarskärm, positionsmottagare och nätverkskort. Blocken binds samman av breda pilar märkta bussar. Ovanpå schemat ligger ett numrerat förlopp i fyra steg: programmet ligger i sekundärminnet, kopieras till primärminnet, hämtas instruktion för instruktion av processorn, och resultatet går ut till skärmen. Bildtext: "Programmet bor i sekundärminnet, arbetar i primärminnet och utförs av processorn."

Datorns delar har inte ändrats sedan de första maskinerna, men de har krympt. Varje instruktion utförs av kopplingar byggda av [[begrepp:transistor]]er, och en modern processor är en [[begrepp:integrerad krets]] med miljardtals sådana på en yta mindre än en tumnagel. Det är därför en dator numera får plats i en bussdörr, i en armbandsklocka och i en dörrklocka, och därför nästan varje tekniskt system innehåller minst en.

## Digital representation

En dator arbetar bara med två tillstånd. En ledning har ström eller inte, en krets är öppen eller sluten, och det som lagras är en följd av ettor och nollor. En sådan siffra kallas en *bit* och är den minsta informationsmängd som finns. Åtta bitar hanteras tillsammans som en *byte*, och en byte kan anta 256 olika mönster, från 00000000 till 11111111.

Tal skrivs i det *binära talsystemet*, som fungerar precis som det vanliga tiosystemet men bygger på tvåor i stället för tior. Längst till höger står ental, sedan tvåor, fyror, åttor och så vidare, där varje position är dubbelt så mycket värd som den till höger om sig.

Talet 11001 läses därför så här:

16 + 8 + 0 + 0 + 1 = 25

Åt andra hållet görs omvandlingen genom att man tar det största tvåpotensvärdet som får plats och fortsätter med resten. Talet 25 rymmer en 16:a, och 9 återstår. I 9 ryms en 8:a, och 1 återstår. I 1 ryms en 1:a, och ingenting återstår. Positionerna 16, 8 och 1 får därmed ettor och positionerna 4 och 2 nollor, vilket ger 11001. Kontrollen är att räkna tillbaka, och 16 plus 8 plus 1 är 25.

Text lagras genom att varje tecken får ett nummer, och en överenskommelse om vilket nummer som betyder vilket tecken kallas *teckenkodning*. Den äldsta av dem, ASCII, använder sju bitar och räcker till 128 tecken. Där är stort A talet 65, litet a talet 97 och siffran 0 talet 48. Sju bitar räcker till det engelska alfabetet men inte till å, ä och ö, vilket i årtionden gjorde att svensk text blev obegriplig när den skickades mellan olika system. Lösningen blev Unicode, som ger ett eget nummer åt över hundra tusen tecken ur världens skriftspråk, och kodningen UTF-8, som skriver de vanligaste tecknen med en byte och de ovanligare med flera. Ett svenskt ä tar därför två byte medan ett a tar en.

Bilder byggs av bildpunkter. En *pixel* är en sådan punkt, och bilden är ett rutnät av dem. Varje pixel beskrivs av tre tal som anger hur mycket rött, grönt och blått den innehåller, vart och ett lagrat i en byte med värden mellan 0 och 255. Tre byte per pixel ger 256 gånger 256 gånger 256 möjliga färger, alltså drygt 16,7 miljoner.

Det gör bilder stora. En kamera som tar bilder med 12 miljoner pixlar behöver

12 000 000 · 3 byte = 36 000 000 byte, alltså cirka 36 megabyte

för en enda obehandlad bild. Ett foto från en telefon tar ändå bara några megabyte, eftersom filen komprimeras. Komprimeringen utnyttjar att bilden innehåller upprepningar och att ögat inte ser alla skillnader, och den kastar bort en del av informationen för att spara plats. Därför blir en bild som sparas om många gånger successivt sämre.

[BILD 9.2-2] Innehåll: Samma byte, 01000001, visad tre gånger bredvid varandra med olika tolkning. Först som tal, med positionsvärdena 128, 64, 32, 16, 8, 4, 2 och 1 utskrivna ovanför bitarna och summan 65 under. Sedan som tecken, med en tabellrad ur teckenkodningen som visar att 65 betyder A. Sist som bildpunkt, med en grå ruta vars ljushet motsvarar värdet 65 av 255. En rubrik över de tre visar att bitmönstret är detsamma i alla tre fallen. Bildtext: "Samma åtta bitar betyder olika saker beroende på hur de tolkas."

Det är den avgörande poängen. Bitmönstret 01000001 är i sig varken talet 65, bokstaven A eller en mörkgrå bildpunkt. Det blir det ena eller det andra av hur programmet väljer att tolka det. En fil som öppnas med fel program blir därför obegriplig, inte för att innehållet är skadat utan för att tolkningen är fel.

Biljettens kod är samma sak i praktiken. Mönstret av svarta och vita rutor är tal, talen är tecken, och tecknen betyder något bara därför att appen och kortläsaren är överens om vad de ska betyda. Kortläsaren i dörren kan läsa av koden på en tiondels sekund, men den kan inte avgöra något alls om överenskommelsen saknas.

[BILD 9.2-3] Innehåll: Ett foto av en buss där ett litet område kring hållplatsskylten är inringat och förstoras i tre steg, tills enskilda pixlar syns som kvadrater. En av kvadraterna är utbruten och visas stor med sina tre kanalvärden utskrivna som rött 34, grönt 102 och blått 187. Bredvid står räkningen 12 000 000 pixlar gånger 3 byte som ger 36 megabyte, med en pil till en betydligt mindre filsymbol märkt komprimerad. Bildtext: "Varje pixel är tre tal. Det är därför en obehandlad bild tar så mycket plats."

## Instuderingsfrågor

1. Vilka fyra sorters hårdvara finns i varje dator?
2. Beskriv processorns kretslopp när ett program körs.
3. Varför är en enskild instruktion enkel, trots att datorn kan utföra avancerade uppgifter?
4. Vad skiljer primärminne från sekundärminne? Ange minst tre skillnader.
5. Varför kopieras ett program till primärminnet innan det körs?
6. En telefon har 8 gigabyte minne och 256 gigabyte lagring. Förklara vad de två talen betyder och varför de inte går att jämföra.
7. Varför blir en dator långsam när primärminnet fylls, trots att lagringen har gott om plats?
8. Vad är en bit, och vad är en byte?
9. Varför kan en byte anta just 256 olika värden?
10. Vad menas med det binära talsystemet, och hur skiljer det sig från tiosystemet?
11. Vad är en teckenkodning, och varför räckte inte ASCII för svensk text?
12. Hur beskrivs en pixel, och varför krävs tre tal för den?
13. Varför blir en obehandlad bild så stor, och vad gör komprimeringen åt saken?
14. Bitmönstret 01000001 kan betyda tre helt olika saker. Vilka, och vad avgör vilket det blir?

## Övningar

1. **Räkna om.** Skriv talen 6, 20, 45 och 100 i det binära talsystemet, och skriv de binära talen 1010, 10011 och 11111111 som vanliga tal. Redovisa positionsvärdena för minst ett tal i varje riktning, och kontrollera varje svar genom att räkna tillbaka.

2. **Ditt namn i tal.** Slå upp en ASCII-tabell och skriv ditt förnamn som en följd av tal. Skriv därefter den första bokstaven som åtta bitar. Ange vad som händer med de svenska tecknen om ditt namn innehåller å, ä eller ö, och förklara varför.

3. **Hur stor blir bilden?** En kamera tar bilder som är 4 000 pixlar breda och 3 000 pixlar höga med tre byte per pixel. Beräkna bildens storlek obehandlad, i megabyte. Jämför med en verklig bildfil från din egen telefon eller kamera och beräkna hur många gånger mindre den är. Ange vad komprimeringen offrar för att nå den storleken.

4. **Öppna delarna.** Ta reda på vilken processor, hur mycket primärminne och hur mycket sekundärminne en dator eller telefon du har tillgång till innehåller. Uppgifterna finns i enhetens systeminformation. Redovisa dem i en tabell och ange för varje uppgift vad den betyder för hur enheten uppför sig i användning.

5. **Fel tolkning.** Ta en bildfil eller ljudfil, kopiera den, och öppna kopian i ett program som är gjort för en annan filtyp, till exempel en textredigerare. Beskriv vad du ser och förklara med avsnittets begrepp varför resultatet ser ut som det gör. Kontrollera att originalfilen fortfarande går att öppna som vanligt.
