---
id: "3.6"
chapter: 3
sectionNumber: 6
title: Testning och utvärdering
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-08"]
  niva2: ["n2-10"]
learningGoals:
  - Planera och genomföra ett test av en teknisk lösning mot uppställda krav,
    med testmetod, mätning och godkäntgräns bestämda före testet.
  - Utvärdera en teknisk lösning utifrån funktion, kostnad, säkerhet och hållbar
    utveckling och redogöra för avvägningarna mellan aspekterna.
  - Spåra grundorsaken till ett fel med upprepade varför-frågor och föreslå en
    konkret förbättring riktad mot orsaken i stället för mot symptomet.
abilities: [f1, f2]
concepts_introduced: ["testplan", "godkäntgräns", "avvägning", "grundorsak"]
concepts_used: ["krav", "skallkrav", "prototyp", "iteration"]
figures: []
prerequisites: ["3.5"]
---

## Testplan och godkäntgräns

En prototyp som rullar runt på gräsmattan och ser ut att fungera bevisar ingenting. Frågan är inte om den verkar bra utan om den uppfyller de [[begrepp:krav]] som skrevs innan den fanns, och det avgörs bara av en provning som är planerad i förväg.

En *testplan* är den skrivna planen för en sådan provning. Den anger vilket krav som prövas, hur provningen går till, under vilka förhållanden den sker, hur många gånger den upprepas och vad som räknas som godkänt. Den sista punkten är den viktigaste. En *godkäntgräns* är det värde som skiljer godkänt från underkänt, och den bestäms före testet. Sätts gränsen efteråt anpassas den nästan alltid till det resultat man fick, och provningen har då bara bekräftat det man ville tro.

Ett enda försök är ingen provning. Tekniska lösningar varierar mellan gånger, och en maskin som klarar provet en gång kan misslyckas nästa. Antalet försök skrivs därför in i planen, liksom villkoren: torrt eller blött gräs, kallt eller varmt batteri, ny eller sliten maskin. Villkoren avgör vad resultatet är värt. Ett bromsprov på nyklippt torrt gräs säger lite om en höstmorgon.

Så här kan en testplan se ut för kravet att knivarna ska stanna inom en sekund när maskinen lyfts. Provningen görs på en fulladdad maskin med monterade knivar. Maskinen lyfts rakt upp i framkanten, i bakkanten och snett i ett hörn. Varje lyft filmas med en kamera som tar 120 bilder i sekunden, och tiden från att hjulen lämnar marken till att knivarna står stilla läses av ur filmen. Tjugo lyft görs, fördelade på de tre greppen, och provningen upprepas med kall maskin och med gräsklipp under kåpan. Godkäntgränsen är att samtliga försök ska ligga under 1,0 sekund.

Resultatet blev 19 försök mellan 0,6 och 0,9 sekunder och ett försök på 1,3 sekunder, med gräsklipp under kåpan. Nitton av tjugo räcker inte. Kravet är ett [[begrepp:skallkrav]] hämtat ur en säkerhetsstandard, och ett skallkrav är antingen uppfyllt eller inte. Testet är underkänt, och det är en användbar upplysning, inte ett misslyckande.

Varje provning dokumenteras i ett protokoll med datum, vilket exemplar som provades, vilka förhållanden som rådde, alla mätvärden och varje avvikelse. Protokollet är det som gör att någon ett år senare kan avgöra om ett nytt fel är gammalt eller nytt.

[BILD 3.6-1] Innehåll: Testplanen som tre steg efter varandra. Först planen med fälten krav, metod, förhållanden, antal försök och godkäntgräns ifyllda för lyfttestet. Sedan genomförandet, med maskinen som lyfts i tre olika grepp framför en kamera. Sist protokollet med tjugo mätvärden i en kolumn, där ett värde ligger över gränslinjen och är markerat. Bildtext: "Godkäntgränsen dras innan det första försöket görs. Annars är det resultatet som bestämmer gränsen."

## Utvärdering ur flera aspekter

Ett test svarar på en fråga i taget och ger godkänt eller underkänt mot ett bestämt krav. Utvärderingen är något annat. Den väger hela lösningen ur flera aspekter samtidigt och besvarar frågan om lösningen bör användas, inte bara om den håller måttet.

Funktionen kommer först. Gör lösningen det den ska, hur väl gör den det och för vem fungerar den? En robotgräsklippare som klarar en välklippt villagräsmatta men fastnar i en skolgårds ojämna kanter fungerar för en användare och inte för en annan.

Kostnaden är mer än inköpspriset. El, reservdelar, service och den tid någon lägger på att sköta lösningen räknas in, liksom vad det kostar att ta hand om den när den är utsliten. En billig maskin med dyra batteribyten kan bli den dyra lösningen efter fem år.

Säkerheten prövas mot tre frågor. Vem kan skadas, vad händer när en del går sönder och vad händer när någon använder lösningen fel? Den sista är den som glöms. Att en gräsklippare stannar när den lyfts rakt upp hjälper inte om någon i stället välter den med foten.

Hållbar utveckling handlar om energi, material, livslängd, reparerbarhet och påverkan på omgivningen. Här visar sig ofta sådant som ingen ställt krav på. Robotgräsklipparna uppfyllde säkerhetsstandardens alla krav, och ändå rapporterade igelkottsvårdare i flera länder skadade djur. Kraven skyddade människor, inte natur. Utvärderingen är det steg där en sådan brist kan upptäckas innan verkligheten upptäcker den, och den upptäcks bara om frågan ställs brett.

Aspekterna drar åt olika håll. Att sänka hastigheten och lägga till sensorer som känner av små djur förbättrar säkerhet och miljöpåverkan, men minskar klippt yta per timme och höjer priset. En *avvägning* är just detta, ett val mellan krav där mer av det ena betyder mindre av det andra. Avvägningen försvinner inte av att den inte skrivs ut. Den fattas ändå, men då av en enskild konstruktör vid ett bord, utan att någon annan vet om det.

En utvärdering skrivs därför ner. För varje aspekt anges vad som talar för och vad som talar emot, vilka avvägningar som gjorts och vem som får nyttan respektive nackdelen. Den som läser utvärderingen ska kunna se att lösningen valdes med öppna ögon.

[BILD 3.6-2] Innehåll: En lösning i mitten och fyra aspekter runt om: funktion, kostnad, säkerhet och hållbar utveckling, var och en med två till tre stödord. Mellan aspekterna dubbelriktade pilar märkta med avvägningar, till exempel "lägre hastighet ger bättre säkerhet men mindre klippt yta" och "fler sensorer ger bättre skydd men högre pris". Bildtext: "Aspekterna dras sällan åt samma håll. Utvärderingens uppgift är att göra avvägningarna synliga."

## Från testresultat till förbättring

Det underkända lyfttestet ska nu leda någonstans. Den vanligaste reaktionen är också den sämsta: att åtgärda det som syns. En varningstext i bruksanvisningen om att maskinen inte får lyftas med gräsklipp under kåpan hade fått protokollet att se bättre ut och lämnat felet kvar.

En *grundorsak* är den underliggande orsak som, om den tas bort, gör att felet inte återkommer. Att hitta den kräver att man frågar varför flera gånger i följd och låter varje svar bli nästa fråga.

Varför stannade inte knivarna i tid? För att knivskivan fortsatte snurra en stund efter att strömmen bröts. Varför fortsatte den snurra? För att den är tung och inte bromsas aktivt utan bara blir strömlös. Varför bromsas den inte? För att konstruktionen räknar med att friktionen i axeln stoppar den. Varför räckte inte friktionen? För att gräsklipp under kåpan smorde axeln och minskade friktionen. Varför upptäcktes inte det tidigare? För att tidigare provningar gjordes på en ren maskin.

Fem frågor gav två orsaker på olika nivåer. Den tekniska grundorsaken är att stoppet vilar på friktion som varierar, och åtgärden riktad mot den är att bromsa knivskivan aktivt, till exempel genom att kortsluta motorns lindningar vid lyft. Den andra orsaken ligger i arbetssättet: provningen speglade inte verklig användning. Åtgärden mot den är att skriva in maskinens tillstånd i testplanen. En förbättring som bara rättar den tekniska orsaken lämnar kvar det som gjorde att felet slank igenom.

Varför-frågorna är ett tankeverktyg, inte ett formulär. Ibland räcker tre frågor, ibland förgrenar sig kedjan i två spår som båda behöver följas. Sluta fråga när svaret har blivit något som faktiskt går att göra något åt. Kommer man till att människor gör misstag eller att budgeten är för liten har man gått ett steg för långt, eftersom sådana svar inte pekar på någon åtgärd.

När åtgärden är genomförd provas lösningen om, med samma testplan som förut, så att resultaten går att jämföra. Kontrollera också att åtgärden inte har förstört något annat. En aktiv broms belastar motorn hårdare vid varje lyft, och det kan i sin tur påverka livslängden. Därefter går arbetet tillbaka in i processen, och hur långt tillbaka avgörs av åtgärdens storlek. En ändrad testplan är ett litet steg bakåt, medan en ny bromsfunktion i motorstyrningen är en [[begrepp:iteration]] som berör konstruktionen och kanske kraven.

[BILD 3.6-3] Innehåll: Kedjan av varför-frågor för lyfttestet, ritad som fem steg nedåt från symptomet "knivarna stannade inte inom en sekund" till de två orsakerna "stoppet vilar på friktion som varierar" och "provningen gjordes på ren maskin". Från symptomet går också en avvikande pil åt sidan till en åtgärd märkt "varningstext i bruksanvisningen", tydligt markerad som symptomåtgärd. Från de två orsakerna går pilar till åtgärderna aktiv bromsning respektive ändrad testplan. Bildtext: "Åtgärden vid symptomet får protokollet att se bra ut. Åtgärden vid orsaken gör att felet inte kommer tillbaka."

## Instuderingsfrågor

1. Vad ska en testplan innehålla?
2. Vad är en godkäntgräns, och varför bestäms den före testet?
3. Varför räcker inte ett enda försök som provning?
4. Varför skrivs villkoren för provningen in i testplanen? Ge ett exempel på ett villkor som kan avgöra resultatet.
5. Nitton av tjugo lyft klarade tidsgränsen. Varför räknas provningen ändå som underkänd?
6. Vad skiljer ett test från en utvärdering?
7. Vilka fyra aspekter ska en teknisk lösning utvärderas utifrån, och vad prövas inom var och en?
8. Varför räcker det inte att jämföra inköpspriset när kostnaden utvärderas?
9. Vad menas med en avvägning? Ge ett exempel där två aspekter drar åt olika håll.
10. Igelkottsproblemet upptäcktes trots att maskinerna uppfyllde alla krav i säkerhetsstandarden. Vad säger det om förhållandet mellan krav och utvärdering?
11. Vad är en grundorsak?
12. Hur skiljer sig en åtgärd riktad mot symptomet från en åtgärd riktad mot grundorsaken? Ge ett exempel på varje.
13. När ska man sluta ställa varför-frågor?
14. Varför provas lösningen om med samma testplan efter en åtgärd, och vad mer behöver kontrolleras?

## Övningar

1. **Skriv en testplan.** Välj ett krav på en vardaglig produkt, till exempel att en vattenflaska inte ska läcka när den ligger ner, att en cykellampa ska synas på hundra meter eller att en väska ska tåla att bäras fullastad. Skriv en testplan med krav, metod, förhållanden, antal försök och godkäntgräns. Motivera gränsen med en mening.

2. **Genomför provningen.** Genomför testet du planerade, för protokoll med samtliga mätvärden och notera varje avvikelse. Redovisa resultatet som godkänt eller underkänt mot din godkäntgräns, och skriv om något i planen behövde ändras under genomförandet och varför det i så fall gör resultatet svårare att tolka.

3. **Utvärdera ur fyra aspekter.** Välj en teknisk lösning som används i din skola, till exempel handtorkar, låssystem, belysning eller matsalens returhantering. Utvärdera den utifrån funktion, kostnad, säkerhet och hållbar utveckling, med minst två punkter för och emot under varje aspekt. Ange minst två avvägningar och vem som får nyttan respektive nackdelen av var och en.

4. **Fem varför.** Välj ett fel du själv har stött på, till exempel att en cykelkedja hoppar av, att en dörr kärvar eller att en app kraschar vid en viss åtgärd. Ställ upp kedjan av varför-frågor tills du når en orsak som går att åtgärda. Föreslå en åtgärd riktad mot orsaken och en åtgärd som bara döljer symptomet, och förklara hur en utomstående skulle kunna skilja dem åt.

5. **Granska en godkäntgräns.** Leta upp ett verkligt krav med en gräns, till exempel en hjälmstandard, en lampas ljusstyrka eller en apparats ljudnivå. Ta reda på hur provningen går till och vad gränsen är. Skriv vad du tror att gränsen bygger på och vad som skulle hända om den sattes tio procent lägre respektive tio procent högre.

6. **Efter åtgärden.** Utgå från en åtgärd som föreslagits i en av de tidigare uppgifterna. Beskriv hur du skulle prova om lösningen, vilka tre andra egenskaper du skulle kontrollera för att se att åtgärden inte förstört något annat, och hur långt tillbaka i utvecklingsarbetet åtgärden för dig.
