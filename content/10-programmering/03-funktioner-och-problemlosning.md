---
id: "10.3"
chapter: 10
sectionNumber: 3
title: Funktioner och problemlösning
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-06", "n1-07"]
  niva2: ["n2-05"]
learningGoals:
  - Skriva och använda funktioner med parametrar och returvärden för att
    strukturera programkod.
  - Bryta ned ett tekniskt problem i delsteg och implementera lösningen som ett
    strukturerat Python-program.
  - Tillämpa programmering på ett tekniskt problem inom ett valt teknikområde,
    där programmet bearbetar mätdata eller andra tekniska data och resultatet
    tolkas tekniskt.
  - Testa ett program systematiskt samt lokalisera och rätta fel i programkod.
abilities: [f2, f3, f5]
concepts_introduced: ["funktion (programmering)", "parameter (programmering)", "returvärde", "testfall", "logiskt fel", "kodgranskning"]
concepts_used: ["program", "variabel", "lista", "loop", "villkorssats", "syntaxfel", "delproblem", "kravspecifikation", "mätserie", "trendlinje", "extrapolation", "artificiell intelligens"]
figures: []
prerequisites: ["10.2"]
---

## Funktioner

Ett program som växer blir förr eller senare svårt att överblicka. Samma beräkning återkommer på flera ställen, och en ändring måste då göras på vart och ett av dem. Missas ett räknar programmet olika på olika rader, vilket är ett fel som kan ligga länge utan att upptäckas.

En *funktion* är i programmering ett namngivet stycke kod som utför en avgränsad uppgift och kan anropas var som helst i programmet. Ordet används i en annan betydelse tidigare i boken, där en lösnings funktion är vad den ska göra för användaren. Här avses uteslutande kodstycket. Funktionen `print` har använts hela tiden, och nu skrivs egna:

```python
def medelvarde(varden):
    return sum(varden) / len(varden)
```

Raden som inleds med `def` ger funktionen ett namn och räknar upp vad den behöver få med sig. Namnet inom parentesen är en *parameter*, alltså en variabel som tar emot det värde anroparen skickar in. Ordet `return` avslutar funktionen och skickar tillbaka ett *returvärde* till den som anropade den. Precis som i villkorssatser och loopar avgör indraget vad som hör till funktionen.

Funktionen används sedan så här:

```python
serie_a = [6.2, 6.0, 6.3, 6.1, 6.2]
serie_b = [24.12, 24.08, 24.15, 24.10]

print("Serie A:", round(medelvarde(serie_a), 2))
print("Serie B:", round(medelvarde(serie_b), 2))
```

Utskriften blir `Serie A: 6.16` och `Serie B: 24.11`. Beräkningen står på ett enda ställe men används två gånger, och skulle den behöva ändras räcker det att ändra i funktionen.

En funktion kan ta flera parametrar, och den kan innehålla vilken kod som helst:

```python
def tillaten_spanning(strackgrans, sakerhetsfaktor):
    return strackgrans / sakerhetsfaktor


def kontrollera(spanning, gransvarde):
    if spanning > gransvarde:
        return "underkand"
    elif spanning > 0.9 * gransvarde:
        return "godkand med liten marginal"
    else:
        return "godkand"


grans = tillaten_spanning(235, 2)
print("Tillaten spanning:", grans, "N/mm2")
print("96 N/mm2 ar", kontrollera(96, grans))
```

Här räknar den första funktionen ut den tillåtna spänningen 117,5 N/mm², och den andra avgör hur ett uppmätt värde ska bedömas. Utskriften blir `Tillaten spanning: 117.5 N/mm2` och `96 N/mm2 ar godkand`.

En variabel som skapas inne i en funktion finns bara där. Det är en styrka och inte en begränsning: funktionen kan skrivas och ändras utan att något annat i programmet påverkas, så länge den tar emot och lämnar tillbaka samma saker. Det som ska tillbaka lämnas med `return`.

En funktion bör göra en sak. Heter den `medelvarde` ska den räkna ut ett medelvärde, inte samtidigt skriva ut det, eftersom en funktion som både räknar och skriver ut inte går att använda när resultatet ska räknas vidare med. Beräkning och utskrift hålls därför isär.

## Från problem till program

Ett tekniskt problem löses inte genom att man börjar skriva kod. Det löses genom att problemet bryts ned i [[begrepp:delproblem]] som var för sig är små nog att överblicka, precis som vid all annan teknisk problemlösning. Skillnaden är att varje delsteg här ska sluta i något en dator kan utföra.

Uppgiften är att analysera en [[begrepp:mätserie]] från ett böjprov. En balk har belastats med ökande last, och nedböjningen har mätts vid varje last. Programmet ska räkna ut hur eftergivlig balken är och avgöra om sambandet är linjärt.

Nedbrytningen görs innan en enda rad skrivs. Vilka data finns, och i vilken form? Två serier lika långa tal, last och nedböjning. Vad ska räknas fram? Nedböjningen per newton, alltså lutningen. Hur avgörs om sambandet är linjärt? Genom att lutningen räknas mellan varje par av mätpunkter och jämföras: håller de sig nära varandra är sambandet rakt. Vad ska visas? Lutningen, spridningen mellan delvärdena och en slutsats.

Svaren utgör tillsammans en beskrivning av vad programmet ska göra, och den beskrivningen är värd att skriva ner i klartext innan kodandet börjar. Den liknar en [[begrepp:kravspecifikation]] i litet format: indata med enhet, det som ska räknas fram, hur gränsfall ska hanteras och vad som ska visas. Här skulle den lyda att programmet tar emot två lika långa listor med last i newton och nedböjning i millimeter, räknar lutningen mellan varje par av intilliggande punkter, redovisar medelvärde och spridning i millimeter per newton med tre decimaler, och slutligen avgör om spridningen är liten nog för att sambandet ska kallas linjärt.

Att kunna formulera den beskrivningen är den mest hållbara färdigheten i hela avsnittet. Den behövs lika mycket när koden ska skrivas för hand som när den ska hämtas eller beställas färdig, eftersom oprecisa krav ger fel program oavsett vem som skriver det. En beskrivning som inte anger enhet på indata ger ett program som råkar räkna i fel enhet. En som inte säger vad som ska hända vid en tom lista ger ett program som avbryts mitt i en körning hos den som använder det.

Först då skrivs koden, ett delsteg i taget:

```python
last = [0, 5, 10, 15, 20, 25]
nedbojning = [0.0, 2.1, 4.0, 6.2, 8.1, 10.1]


def lutning_mellan(last_1, last_2, ned_1, ned_2):
    return (ned_2 - ned_1) / (last_2 - last_1)


lutningar = []
for i in range(1, len(last)):
    varde = lutning_mellan(last[i - 1], last[i], nedbojning[i - 1], nedbojning[i])
    lutningar.append(varde)

medel = sum(lutningar) / len(lutningar)
spann = max(lutningar) - min(lutningar)

print("Lutning:", round(medel, 3), "mm/N")
print("Spridning mellan delvarden:", round(spann, 3), "mm/N")

if spann < 0.2 * medel:
    print("Sambandet ar linjart inom matomradet.")
else:
    print("Sambandet avviker fran en rat linje.")
```

Loopen börjar på 1 och inte på 0, eftersom varje varv jämför en mätpunkt med den föregående. Skulle den börja på 0 vore `last[-1]` det sista värdet i listan, och programmet skulle räkna en lutning mellan sista och första mätpunkten utan att avbryta med felmeddelande. Det är en av programmeringens obehagligare fällor: koden gör något, och det ser ut att fungera.

Programmet skriver ut lutningen 0,404 millimeter per newton och spridningen 0,06, och därmed slutsatsen att sambandet är linjärt inom mätområdet.

Gränsen på en femtedel av medelvärdet är vald med öppna ögon och förtjänar en förklaring, eftersom den ser slapp ut. Delvärdena här är 0,42, 0,38, 0,44, 0,38 och 0,40, alltså en spridning som är betydligt större än den i mätserien själv. Skälet är att varje delvärde bygger på skillnaden mellan två närliggande mätpunkter. Nedböjningen är avläst på tiondels millimeter, så varje avläsning kan vara en halv hundradel fel åt vardera hållet, och i en skillnad mellan två sådana tal kan felen läggas ihop. Ett avläsningsfel som är litet i mätvärdet blir därför stort i lutningen mellan två punkter. Ett strängare krav hade fått programmet att underkänna ett samband som i själva verket är rakt, och gränsen är satt efter vad mätningens noggrannhet tillåter, inte efter vad som ser prydligt ut.

Här slutar programmets uppgift och den tekniska tolkningen tar vid. Talet 0,404 säger att varje newton ytterligare last sänker balkens mitt fyra hundradels millimeter, vilket stämmer med vad som räknades fram för hand ur samma mätserie. Lutningen gäller bara inom det område som mättes, alltså upp till 25 newton, och att förlänga sambandet utanför det är den [[begrepp:extrapolation]] som en [[begrepp:trendlinje]] aldrig ger täckning för. Ett program som räknar ut ett tal har inte därmed sagt vad talet betyder. Den bedömningen gör den som kan tekniken.

## Testa och felsöka

Ett program som körde utan felmeddelande har inte därmed räknat rätt. Fel delas in i två slag, och bara det ena syns av sig självt.

Ett [[begrepp:syntaxfel]] bryter mot språkets regler, och tolken vägrar köra. Det är det ofarliga slaget, eftersom det upptäcks omedelbart och pekar ut sin egen rad. Ett *logiskt fel* är kod som körs utan invändning men gör fel sak: ett plus där det skulle stå minus, en loop som börjar på fel tal, en enhet som blandats ihop. Programmet svarar villigt, och svaret är fel.

Mot logiska fel finns bara en försvarslinje. Programmet prövas mot fall där svaret är känt i förväg. Ett sådant fall kallas ett *testfall*, och det består av bestämd indata och det svar programmet ska ge.

Fyra sorters testfall räcker långt. Först ett normalfall, alltså vanlig indata där svaret räknats för hand: fem mätvärden vars medelvärde är 6,16. Sedan ett gränsfall, alltså kanten av det tillåtna, som en lista med ett enda värde eller en spänning exakt lika med gränsvärdet. Därefter ett extremfall, alltså orimlig men tänkbar indata, som en mycket stor last eller ett negativt tal. Sist ett feltillfälle, alltså indata som inte hör hemma alls, som en tom lista eller en bokstav där ett tal förväntas.

Just gränsfallen avslöjar mest. Funktionen `kontrollera` från avsnittets början prövas därför med en spänning exakt lika med gränsvärdet, alltså 117,5. Villkoret `spanning > gransvarde` är då falskt och nästa villkor sant, så svaret blir godkänd med liten marginal. Det är rimligt, men det är ett val, och den som inte prövat gränsen vet inte vilket val programmet gör.

När ett testfall ger fel svar börjar felsökningen, och den görs systematiskt snarare än genom att stirra på koden. Kontrollera först att indata verkligen är det du tror, genom att skriva ut den. Skriv därefter ut mellanresultat inne i beräkningen, så att felet går att ringa in till en rad eller ett block. Jämför sedan med en handräkning av samma steg. Ändra en sak i taget och kör om efter varje ändring, precis som när en modell körs om med en parameter ändrad. Att ändra tre saker samtidigt och se att felet försvann lämnar kvar frågan om vilken av dem som gjorde det.

En vana skyddar mer än alla andra. Kör programmet ofta, redan medan det växer. Ett fel i tio rader kod går att hitta på minuter, medan samma fel i tvåhundra rader som körs första gången när allt är skrivet kan ta en kväll.

[BILD 10.3-1] Innehåll: Ett schema i två delar. Överst skillnaden mellan de två feltypen: till vänster en kodrad med saknad parentes märkt syntaxfel, med en pil till ett felmeddelande med radnummer och texten programmet startar inte. Till höger en kodrad där loopen börjar på 0 i stället för 1, märkt logiskt fel, med en pil till en utskrift som ser normal ut men innehåller ett felaktigt värde, och texten programmet svarar, men fel. Underst de fyra sorternas testfall som en tabell med kolumnerna sort, exempel på indata och förväntat svar, ifylld för normalfall, gränsfall, extremfall och feltillfälle. Bildtext: "Syntaxfelet stoppar programmet. Det logiska felet gör det inte, och därför testas mot svar som är kända i förväg."

## Att granska kod du inte skrivit själv

Kod som ska användas kommer sällan enbart ur det egna huvudet. Den hämtas ur ett bibliotek, ur en kollegas program, ur ett svar på en teknikwebbplats eller ur ett verktyg som bygger på [[begrepp:artificiell intelligens]] och skriver kod på beskrivning. Att läsa och bedöma sådan kod är en färdighet i sig, och den är i dag lika mycket en del av programmeringsarbetet som att skriva koden från början.

Arbetsgången blir då en annan än när allt skrivs för hand, men den är inte kortare. Först preciseras vad programmet ska göra, med samma beskrivning som nyss. Sedan hämtas eller beställs koden. Därefter granskas den, och sist prövas den mot testfall med kända svar. Två av de fyra stegen är alltså desamma oavsett varifrån koden kommer, och det är i dem tiden går. Den som hoppar över dem har inte sparat tid utan flyttat felet framåt, till den punkt där det kostar mest.

Utgångspunkten är enkel. Den som använder ett program ansvarar för vad det räknar ut, oavsett vem eller vad som skrivit raderna. Ansvaret följer med användningen och går inte att lämna vidare till den som skrev koden, lika lite som en konstruktör kan skylla ett hållfasthetsfel på den som räknade åt hen. En kod som inte går att förklara går inte heller att försvara, och därmed inte att lämna ifrån sig.

Här finns också skälet till att den som ska granska kod behöver kunna skriva den. Att avgöra om en loop börjar på rätt tal, om ett villkor är feltecknat eller om en enhet blandats ihop kräver att man själv byggt sådana loopar och villkor. Läsförmågan växer ur skrivandet, och den som aldrig skrivit en rad kan bara konstatera att koden ser prydlig ut.

*Kodgranskning* är att systematiskt läsa igenom kod för att bedöma om den gör rätt sak och går att förstå. Fyra frågor bär granskningen.

Vad gör koden, rad för rad? Kan du inte förklara varje rad har du inte granskat den, och en rad du inte förstår ska antingen redas ut eller bytas mot något du förstår.

Räknar den rätt? Det avgörs inte genom läsning utan genom att köra samma testfall som mot egen kod. Ett normalfall med känt svar avslöjar de flesta fel på några sekunder, och ett gränsfall avslöjar resten.

Vilka antaganden bär den? Kod som hämtats någon annanstans ifrån bär nästan alltid antaganden som inte står skrivna: vilken enhet indata har, hur många värden som väntas, vad som händer vid en tom lista. Sådant måste prövas mot den egna uppgiften, eftersom det är där kod som fungerar utmärkt i sitt ursprungliga sammanhang oftast går sönder.

Är den begriplig för nästa läsare? Fungerande men obegriplig kod är en kostnad som betalas senare, av den som ska ändra i den.

Verktyg som skriver kod på beskrivning har en egenhet värd att känna till. De producerar text som ser rätt ut, med rimliga variabelnamn och en trovärdig struktur, även när innehållet är fel. Ett program som är uppenbart trasigt inbjuder till granskning, medan ett som ser välskrivet ut inte gör det. Just därför prövas sådan kod hårdare än annan, inte mildare, och det gäller lika mycket ett kodsvar hämtat från en webbplats som ett från ett AI-verktyg.

Den svåraste bedömningen är ändå inte om koden är riktigt skriven utan om den räknar på rätt sak. Ett program kan vara felfritt och ändå svara på en annan fråga än den som ställdes, precis som en modell kan vara felfritt uppställd och ändå vila på antaganden som inte håller. Att avgöra om ett framräknat tal är rimligt, vilken enhet det har och inom vilka förutsättningar det gäller kräver kunskap om tekniken, inte om språket. Det är den bedömningen som avgör om ett resultat duger, och den blir viktigare, inte mindre viktig, ju mer av själva skrivandet som utförs av något annat.

## Instuderingsfrågor

1. Vad är en funktion i ett program, och vilket problem löser den i ett växande program?
2. Vad är skillnaden mellan en parameter och ett returvärde?
3. Varför bryts ett problem ned i delsteg innan koden skrivs?
4. Vad ska beskrivningen av vad programmet ska göra innehålla, och varför behövs den lika mycket när koden hämtas eller beställs färdig som när den skrivs för hand?
5. I analysprogrammet börjar loopen på 1 i stället för på 0. Varför, och vad skulle hända om den började på 0?
6. Programmet svarar att lutningen är 0,404 millimeter per newton. Vad betyder talet tekniskt, och varför gäller det bara inom det område där mätningarna gjordes?
7. Varför blir spridningen mellan delvärdena större än spridningen i själva mätserien?
8. Vad är skillnaden mellan ett syntaxfel och ett logiskt fel, och vilket är farligast?
9. Vad är ett testfall, vilka fyra sorter finns, och vad måste vara känt för att ett testfall ska gå att använda?
10. Beskriv hur en systematisk felsökning går till, och varför en sak ändras i taget.
11. Ange de fyra stegen i arbetsgången när koden hämtas eller beställs färdig, och vilka av dem som är desamma som när koden skrivs för hand.
12. Vem ansvarar för vad ett program räknar ut när koden hämtats någon annanstans ifrån?
13. Ange de fyra frågor som bär en kodgranskning.
14. Varför behöver den som ska granska kod kunna skriva kod själv?
15. Varför prövas kod som ser välskriven ut hårdare än kod som uppenbart är trasig, och varför är frågan om koden räknar på rätt sak svårare än frågan om den är riktigt skriven?

## Övningar

1. **Bryt ut en funktion.** Ta ett av dina program från föregående avsnitt och bryt ut minst en beräkning till en egen funktion med parameter och returvärde. Anropa funktionen minst två gånger med olika indata. Redovisa programmet före och efter, och ange vad som blev lättare att ändra.

2. **Ett funktionsbibliotek för mätdata.** Skriv tre funktioner som var och en tar emot en lista med mätvärden och returnerar medelvärdet, variationsbredden respektive antalet värden som avviker mer än en angiven gräns från medelvärdet. Pröva alla tre på mätserien 6,2, 6,0, 6,3, 6,1 och 6,2 med gränsen 0,15 millimeter, och redovisa svaren tillsammans med en handräkning av de två första.

3. **Från problem till program.** Välj ett tekniskt problem inom ett område som intresserar dig, där ett program ska bearbeta mätdata eller andra tekniska data. Det kan vara att räkna ut förbrukning per mil ur en tankningslista, att bestämma en fjäderkonstant ur en mätserie, att räkna ut verkningsgrad ur uppmätt in- och uteffekt eller att sammanställa en veckas temperaturmätningar. Bryt ned problemet i delsteg innan du skriver kod och redovisa nedbrytningen. Skriv därefter programmet med minst en egen funktion. Avsluta med att tolka resultatet tekniskt: vad betyder talet, och inom vilka förutsättningar gäller det?

4. **Fyra testfall.** Upprätta fyra testfall för ett av dina program, ett av varje sort, och ställ upp dem i en tabell med indata, förväntat svar och faktiskt svar. Räkna fram det förväntade svaret för hand innan du kör programmet. Redovisa vad som hände och rätta programmet om något test föll.

5. **Hitta det planterade felet.** Byt program med en klasskamrat. Lägg in ett logiskt fel i varandras program, till exempel en ändrad operator, ett fel startvärde i en loop eller en förväxlad enhet, och låt den andra hitta det genom att köra testfall och skriva ut mellanresultat. Redovisa hur lång tid det tog, vilket testfall som avslöjade felet och hur ni gick till väga.

6. **Granska främmande kod.** Skaffa fram ett kort program som du inte skrivit själv, till exempel ur ett exempelbibliotek, från en teknikwebbplats eller genom att be ett AI-verktyg skriva en lösning på en beräkningsuppgift. Granska koden med avsnittets fyra frågor och skriv ett kort utlåtande. Ange minst ett antagande koden gör utan att skriva ut det, kör den mot två egna testfall med kända svar, och avsluta med om du skulle använda koden som den är, ändra i den eller skriva om den själv.

7. **Kravet före koden.** Skriv en beskrivning av ett litet program utan att skriva någon kod, till exempel ett som räknar ut medelförbrukning ur en tankningslista eller kontrollerar om ett mått ligger inom sin tolerans. Beskrivningen ska ange indata med enhet, vad som ska räknas fram, hur gränsfall ska hanteras och vad som ska visas. Lämna beskrivningen till en klasskamrat som skriver programmet efter den, ordagrant och utan att fråga. Jämför resultatet med vad du tänkte dig, ange varje punkt där beskrivningen visade sig otydlig och skriv om den så att missförståndet inte kan uppstå igen.

8. **Samma krav, två program.** Utgå från din beskrivning i föregående uppgift. Skriv först programmet själv. Skaffa därefter en andra lösning på samma beskrivning från ett annat håll, till exempel ur ett exempelbibliotek eller genom att be ett AI-verktyg om den. Kör båda mot samma fyra testfall och ställ upp svaren i en tabell. Redovisa var de skiljer sig, vilken av dem du skulle använda och varför, samt minst en sak du lärde dig om din egen lösning genom att läsa den andra.
