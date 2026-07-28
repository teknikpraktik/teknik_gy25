---
type: facit
chapter: 10
sectionNumber: 6
title: Facit
status: fardig-forsta-version
utanSvar:
  instuderingsfragor: []
  ovningar:
    - "10.1:1"
    - "10.1:2"
    - "10.2:4"
    - "10.2:5"
    - "10.3:1"
    - "10.3:3"
    - "10.3:4"
    - "10.3:5"
    - "10.3:6"
---

## 10.1 Grunderna i Python

### Instuderingsfrågor

1. Ett program är en följd av instruktioner, skriven för att lösa en bestämd uppgift. Källkoden är den text programmeraren skriver och som utgör programmet.
2. Den skriver ut det som står innanför parentesen.
3. En Python-tolk läser koden uppifrån och ner och översätter varje rad till sådant processorn kan utföra.
4. Kod som bryter mot språkets regler, så att programmet inte går att köra. Ett exempel är en rad där ett citattecken eller en parentes saknas.
5. Tolken pekar på den rad där den upptäckte problemet, vilket kan vara raden efter den som faktiskt är fel. Ett saknat avslutande citattecken märks först när tolken läser vidare.
6. En namngiven plats i minnet där ett värde lagras och kan hämtas fram igen.
7. Likhetstecknet betyder tilldelning och inte likhet. Raden hämtar värdet i `x`, lägger till ett och lägger tillbaka resultatet i `x`.
8. Namnet får innehålla bokstäver, siffror och understreck men får inte börja med en siffra eller innehålla mellanslag. Beskrivande namn väljs för att koden ska gå att läsa, både av andra och av en själv senare.
9. Heltal är tal utan decimaler, flyttal är tal med decimaler skrivna med punkt, och strängar är text inom citattecken.
10. Typen avgör vad plustecknet betyder. Mellan två tal adderar det, och mellan två strängar fogar det samman, så `2 + 3` blir 5 medan `"2" + "3"` blir `"23"`.
11. Allt som kommer från `input` är en sträng, även när ett tal skrivits in. Värdet måste omvandlas med `int` eller `float` innan det går att räkna med.
12. Komma skiljer flera värden åt och fungerar oavsett typ, medan Python skriver ut dem efter varandra med mellanslag emellan. Plus fogar samman och kräver att alla delar är strängar.
13. Dubbla stjärnor betyder upphöjt till, så `2 ** 3` blir 8. Procenttecknet ger resten vid en division, så `7 % 2` blir 1.
14. Kommentaren förklarar varför något görs, samt sådant som inte syns i koden, till exempel vilken enhet ett värde har. Den behöver inte upprepa vad raden redan säger.

### Övningar

3. 1 000 mm blir 1,000 m och 39,370 tum. 25,4 mm blir 0,025 m och 1,000 tum.
4. Volymen blir 200 · 100 · 5 = 100 000 mm³, alltså 100 cm³. Uttryckt i kubikmeter är det 1,0 · 10⁻⁴ m³, och massan blir 1,0 · 10⁻⁴ · 7 850 = 0,785 kg. Handräkningen ska ge samma svar som programmet.
5. Programmet skriver ut de två inmatade talen efter varandra i stället för deras summa, så 2 och 3 ger 23. Skälet är att båda värdena är strängar, och plustecknet mellan två strängar fogar samman i stället för att addera. Med `float` eller `int` runt inmatningen blir svaret 5.

## 10.2 Styra programflödet

### Instuderingsfrågor

1. Den låter programmet utföra olika kod beroende på om ett påstående är sant eller falskt.
2. Ett påstående i koden som är antingen sant eller falskt.
3. Python avgör vad som hör till en villkorssats, en loop eller en funktion genom hur långt in på raden koden börjar. Upphör indraget är strukturen slut.
4. Ett enkelt likhetstecken tilldelar ett värde till en variabel, medan det dubbla jämför två värden med varandra.
5. `elif` prövar ytterligare ett villkor när de föregående var falska. Villkoren prövas uppifrån och ner och det första sanna vinner, så det strängaste villkoret måste stå först för att inte ett grövre fall ska fastna i ett mildare villkor.
6. Med `and` måste båda leden vara sanna, medan det med `or` räcker att ett av dem är det.
7. En loop upprepar samma kod flera gånger. Ett varv är en gång som koden i loopen utförs.
8. En `for`-loop används när antalet varv är känt i förväg, och en `while`-loop när antalet beror på ett villkor.
9. Talen 0, 5, 10, 15, 20 och 25. De tre talen anger var räkningen börjar, var den slutar och hur stort steget är, och slutvärdet räknas inte med.
10. Räkningen börjar på noll genomgående i programmering, och `range` stannar strax före det angivna slutvärdet. Fem tal blir därför 0 till 4.
11. En `while`-loop kan bli oändlig om ingenting inuti den påverkar villkoret. Skyddet är att kontrollera att någon rad i loopen till slut gör villkoret falskt.
12. En samling värden som lagras under ett gemensamt namn. Ett enskilt värde nås med sitt index inom hakparenteser.
13. Det högsta giltiga indexet är 5, eftersom numreringen börjar på noll. Ett högre index avbryter programmet med ett felmeddelande om att indexet ligger utanför listan.
14. En variabel sätts till noll före loopen och ökas med ett värde vid varje varv, så att den efter sista varvet innehåller summan. Mönstret används för att summera, räkna antal och bygga upp resultat ur en serie värden.
15. Ett program som kör utan felmeddelande kan ändå räkna fel. Handräkningen ger ett svar som är känt i förväg och är därför det enda sättet att veta att programmet räknar rätt.

### Övningar

1. Den tillåtna spänningen blir 235 / 2 = 117,5 N/mm². Spänningen 96 är godkänd, eftersom den ligger under 105,75 som är nio tiondelar av gränsen. Spänningen 112 är godkänd med liten marginal, eftersom den ligger mellan 105,75 och 117,5. Spänningen 130 är underkänd, eftersom den överstiger 117,5.
2. Tabellen ska ge 0 N och 0,0 mm, 5 N och 2,0 mm, 10 N och 4,0 mm, 15 N och 6,0 mm, 20 N och 8,0 mm, 25 N och 10,0 mm, 30 N och 12,0 mm, 35 N och 14,0 mm, 40 N och 16,0 mm, 45 N och 18,0 mm samt 50 N och 20,0 mm. Varningen ska visas vid de tre sista lasterna, alltså från 40 N och uppåt, eftersom nedböjningen där överstiger 15 mm.
3. Med 0,3 grader per timme tar det 22 timmar, med 0,4 grader 17 timmar och med 0,2 grader 33 timmar. Halverad sänkning per timme fördubblar tiden, eftersom samma temperaturfall på 6,5 grader då måste tas i dubbelt så många steg.

## 10.3 Funktioner och problemlösning

### Instuderingsfrågor

1. Ett namngivet stycke kod som utför en avgränsad uppgift och kan anropas var som helst i programmet. Den gör att en beräkning står på ett enda ställe även när den används på flera, så att en ändring bara behöver göras en gång.
2. Parametern tar emot ett värde som skickas in till funktionen, medan returvärdet är det funktionen lämnar tillbaka till den som anropade den.
3. Funktionen kan då inte användas när resultatet ska räknas vidare med, eftersom värdet försvinner ut på skärmen i stället för tillbaka till programmet. Beräkning och utskrift hålls därför isär.
4. För att varje delsteg ska bli litet nog att överblicka och sluta i något en dator kan utföra. Nedbrytningen avgör dessutom vilka data som behövs och vad som ska räknas fram, vilket är svårt att upptäcka mitt i kodskrivandet.
5. Varje varv jämför en mätpunkt med den föregående, och den första punkten har ingen föregående. Med start på 0 skulle `last[-1]` peka på listans sista värde, och programmet skulle räkna en lutning mellan sista och första mätpunkten utan att avbryta med felmeddelande.
6. Att varje newton ytterligare last sänker balkens mitt fyra hundradels millimeter, vilket är ett mått på hur eftergivlig balken är.
7. Mätningarna säger ingenting om vad som händer utanför det område de gjordes i. Vid tillräckligt hög last passerar materialet sin sträckgräns och sambandet upphör att vara linjärt, så en förlängning av lutningen är en extrapolation utan täckning.
8. Varje delvärde bygger på skillnaden mellan två närliggande mätpunkter, och i en sådan skillnad kan avläsningsfelen från båda punkterna läggas ihop. Ett fel som är litet i mätvärdet blir därför stort i lutningen mellan två punkter.
9. Ett syntaxfel bryter mot språkets regler och stoppar programmet direkt, medan ett logiskt fel körs utan invändning men får programmet att räkna fel. Det logiska felet är farligast, eftersom programmet svarar villigt och svaret ser rimligt ut.
10. Bestämd indata tillsammans med det svar programmet ska ge. Svaret måste vara känt i förväg, till exempel genom en handräkning, annars går det inte att avgöra om programmet räknade rätt.
11. Normalfall med vanlig indata och känt svar, gränsfall vid kanten av det tillåtna, extremfall med orimlig men tänkbar indata, och feltillfälle med indata som inte hör hemma alls, till exempel en tom lista eller en bokstav där ett tal väntas.
12. Kontrollera först att indata är det du tror genom att skriva ut den, skriv sedan ut mellanresultat för att ringa in felet till en rad, och jämför med en handräkning av samma steg. En sak ändras i taget, eftersom flera samtidiga ändringar lämnar kvar frågan om vilken av dem som löste problemet.
13. Den som använder programmet ansvarar för vad det räknar ut, oavsett vem eller vad som skrivit raderna.
14. Vad koden gör rad för rad, om den räknar rätt, vilka antaganden den bär, och om den är begriplig för nästa läsare.
15. Kod som ser välskriven ut inbjuder inte till granskning, medan uppenbart trasig kod gör det. Verktyg som skriver kod på beskrivning producerar dessutom text som ser rätt ut även när innehållet är fel, och därför prövas sådan kod hårdare.

### Övningar

2. Medelvärdet blir 30,8 / 5 = 6,16 mm och variationsbredden 6,3 − 6,0 = 0,3 mm. Med gränsen 0,15 mm avviker ett enda värde, nämligen 6,0, eftersom skillnaden mot medelvärdet är 0,16 mm. Värdet 6,3 avviker 0,14 mm och räknas alltså inte, vilket visar hur nära gränsen ligger och varför den måste anges.
