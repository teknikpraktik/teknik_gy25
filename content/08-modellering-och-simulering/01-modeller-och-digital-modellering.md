---
id: "8.1"
chapter: 8
sectionNumber: 1
title: Modeller och digital modellering
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-11", "n1-16"]
  niva2: ["n2-08", "n2-13"]
learningGoals:
  - Förklara vad en modell är, varför modeller används och vilka begränsningar
    de har.
  - Skilja mellan fysiska, matematiska och digitala modeller och välja modelltyp
    för ett givet syfte.
  - Bygga en enkel digital modell av ett tekniskt förlopp i ett kalkylprogram.
abilities: [f3, f5]
concepts_introduced: ["modell", "antagande", "giltighetsområde", "fysisk modell", "matematisk modell", "digital modell", "parameter"]
concepts_used: ["prototyp", "CAD"]
figures: []
prerequisites: ["3.5", "4.4", "7.2"]
---

## Modellbegreppet

Natten mot den 9 januari 2005 drog stormen Gudrun in över södra Sverige. Omkring 730 000 elabonnenter blev strömlösa, och i de värst drabbade delarna av Småland dröjde det veckor innan strömmen var tillbaka. I ett eluppvärmt hus blev då en fråga viktigare än alla andra. Hur länge går det att bo kvar innan huset blir för kallt?

Frågan går inte att besvara genom att vänta och se, för då kommer svaret för sent. Den går inte heller att mäta i förväg, eftersom mätningen skulle kräva just det strömavbrott man vill förbereda sig för. Kvar står möjligheten att räkna. För att kunna räkna på huset måste huset först göras räknebart, och det är precis vad en modell gör.

En *modell* är en förenklad beskrivning av något verkligt, gjord för att kunna svara på en bestämd fråga. Frågan kommer först och styr allt annat. Två modeller av samma hus kan se helt olika ut beroende på om de ska svara på hur huset svalnar, hur det tål snölast på taket eller hur det ser ut från gatan.

I modellen av det avsvalnande huset finns bara en enda låda med en enda innetemperatur. Lådan har två egenskaper. Den ena är hur lätt värme läcker ut genom väggar, tak, fönster och ventilation, uttryckt som den effekt som krävs för att hålla temperaturen uppe vid en grads skillnad mot uteluften. Den andra är hur mycket värme som är lagrad i stomme, inredning och luft, alltså hur mycket energi som måste lämna huset för att det ska bli en grad kallare.

Allt annat är bortvalt. Rummen antas ha samma temperatur, trots att hallen alltid är kallare än vardagsrummet. Utetemperaturen antas ligga stilla, trots att den sjunker på natten. Solen värmer inte, ingen lagar mat, ingen kropp avger värme och vinden river inte extra värme ur fasaden. Varje sådant bortval är ett *antagande*, alltså något modellen förutsätter utan att kontrollera och som resultatet därför vilar på.

Antagandena är inte fusk. De är själva poängen. Ett hus beskrivet i all sin verklighet, med varje fönstersmyg och varje vindpust, går inte att räkna på med rimlig möda, och skulle det ändå göras skulle svaret bli detsamma. Modellen tar bort det som inte påverkar utfallet så mycket att beslutet ändras, och behåller det som gör det.

Ett antagande gäller bara så länge verkligheten uppför sig som antagandet säger. Därför har varje modell ett *giltighetsområde*, alltså de förhållanden inom vilka den ger användbara svar. Husmodellen duger för ett par grå vinterdygn. Skiner marssolen in genom söderfönstren stämmer den inte längre, eftersom en av de bortvalda posterna då blivit en av de största. Och blir huset så kallt att vattnet i elementen fryser sönder har förloppet övergått i något annat än en långsam avsvalning.

Att en modell är förenklad gör den alltså inte dålig. Frågan är aldrig om en modell är sann, utan om den är tillräckligt bra för sitt syfte. Däremot är en modell aldrig säkrare än sina antaganden, och ett resultat som redovisas utan dem går inte att bedöma av någon annan. Antagandena hör därför alltid till svaret.

[BILD 8.1-1] Innehåll: Till vänster ett verkligt hus i genomskärning med allt som påverkar värmen utritat: sol mot söderfasaden, vind mot gaveln, personer, spis, kalla hallen, varma vardagsrummet, öppen dörr till en ouppvärmd källare. Till höger samma hus som modell, en enkel låda med en enda temperatur inuti, en pil ut märkt värmeläckage och en märkning för lagrad värme i lådans väggar. Mellan bilderna en lista över det som valts bort på vägen från vänster till höger. Bildtext: "Modellen behåller det som styr svaret och väljer bort resten. Listan i mitten är modellens antaganden."

## Välja modelltyp

Modeller behöver inte vara beräkningar. De brukar delas in i tre slag, och valet mellan dem avgörs av frågan.

En *fysisk modell* är byggd i verkligheten och går att ta på och prova. Fartygsskrov släpas som modeller genom en lång vattenbassäng, bland annat hos SSPA i Göteborg, och motståndet mäts medan modellen dras fram. Byggnader och broar prövas som modeller i vindtunnel för att se hur luften sveper runt dem. Den [[begrepp:prototyp]] som byggs under ett utvecklingsarbete är också en fysisk modell. Styrkan är att verkligheten sköter fysiken själv, även den del av den som ingen hade tänkt på. Svagheten är att varje ny variant måste byggas.

En *matematisk modell* är samma sak uttryckt som samband mellan storheter. Husets värmeförlust beskrivs av att effekten ut är värmegenomgången multiplicerad med temperaturskillnaden mot uteluften, och avsvalningen av att temperaturfallet är den förlorade energin delad med värmekapaciteten. De två talen som beskriver just det här huset, värmegenomgången och värmekapaciteten, kallas *parametrar*. En parameter är ett tal som hålls fast under en beräkning men som kan ändras för att beskriva ett annat hus eller ett annat val. Utetemperaturen och starttemperaturen är däremot förutsättningar för det enskilda fallet, inte egenskaper hos huset.

En *digital modell* är en matematisk modell som en dator räknar på. Kalkylarket med husets avsvalning är en sådan, och [[begrepp:CAD]]-modellen från ritkapitlet är en annan, byggd av geometri i stället för av samband. Styrkan är att ett nytt fall kostar några sekunder i stället för en verkstadsvecka. Svagheten är att datorn räknar på det någon har skrivit in, aldrig på verkligheten.

Valet styrs av tre frågor. Är sambanden kända och någorlunda enkla går det att räkna, och då är den digitala modellen både snabbast och billigast. Är förloppet rörigt, som strömmande luft kring en oregelbunden form eller vatten som river med sig sand, är den fysiska modellen ofta enda vägen till ett pålitligt svar. Och ju dyrare det är att ha fel, desto starkare skäl att göra båda.

Just därför är valet sällan antingen eller. Flygplanstillverkare räknar strömningen kring en vinge digitalt i tusentals varianter, och provar sedan ändå de bästa av dem som modeller i vindtunnel. Beräkningen sållar bort det som uppenbart inte fungerar, och provet avgör. En digital modell är alltså inte automatiskt bättre än en fysisk. Den är snabbare, och den är precis så bra som de samband och antaganden den bygger på.

[BILD 8.1-2] Innehåll: Tre modeller av samma hus sida vid sida, var och en märkt med den fråga den kan besvara. Först en fysisk modell i skala placerad i en vindtunnel med rökstrimmor kring taknocken, märkt med frågan hur snön driver kring huset. Sedan en matematisk modell, husets två samband skrivna som formler med storheterna namngivna, märkt med frågan hur snabbt huset svalnar. Sist en digital modell, samma samband som ett kalkylark med en kurva bredvid, märkt med samma fråga men med tillägget att alla fall räknas på en gång. Bildtext: "Frågan avgör modelltypen. Samma hus kan modelleras på tre helt olika sätt."

## Bygga en digital modell

Arbetsgången är densamma vad som än modelleras. Frågan formuleras först, så snävt att svaret går att känna igen när det kommer. Därefter bestäms vilken storhet som ska räknas fram och hur noga svaret behöver bli. Sedan skrivs antagandena ner, innan de hinner glömmas bort. Först då samlas parametrar och indata in, sambanden skrivs, arket byggs och resultatet kontrolleras.

Frågan här är hur länge ett hus håller sig över 15 grader vid ett strömavbrott en vinterdag. Huset är en villa på ungefär 130 kvadratmeter. Dess värmegenomgång är 0,15 kilowatt per grad, alltså den effekt som krävs för att hålla innetemperaturen en grad över utetemperaturen, och värmekapaciteten är 13 kilowattimmar per grad. Utetemperaturen sätts till 5 minusgrader och hålls konstant, huset är 21 grader när strömmen försvinner, och förloppet räknas i steg om en timme. Värmegenomgången går att uppskatta ur husets uppmätta elförbrukning en kall månad, och värmekapaciteten ur stommens material och massa.

Den första timmen räknas för hand, eftersom den visar hela metoden. Temperaturskillnaden mot uteluften är 21 grader minus 5 minusgrader, alltså 26 grader.

Effekten ut blir 0,15 kW/°C · 26 °C = 3,9 kW.

Under en timme hinner då 3,9 kW · 1 h = 3,9 kWh lämna huset.

Temperaturen sjunker med 3,9 kWh / 13 kWh/°C = 0,3 °C.

Efter en timme är det alltså 20,7 grader inne.

Enheterna går ihop. Kilowatt per grad multiplicerat med grader ger kilowatt, kilowatt multiplicerat med timmar ger kilowattimmar, och kilowattimmar delat med kilowattimmar per grad ger grader. Storleken är också rimlig. En förlust på 3,9 kilowatt är ungefär den effekt husets värmesystem levererar en sådan dag, vilket det måste vara, eftersom temperaturen stod stilla innan strömmen försvann.

En tredjedels grad på en timme kan verka som drygt sju grader på ett dygn, men så blir det inte. När huset svalnar krymper temperaturskillnaden mot uteluften, och därmed minskar också effekten ut. Andra timmen börjar på 20,7 grader, skillnaden är 25,7 grader, effekten 3,86 kilowatt och temperaturfallet 0,30 grader. Varje rad räknas alltså på föregående rads sluttemperatur. Det är hela knepet, och det är också skälet till att arbetet lämnas till ett kalkylark. Sambandet är enkelt men ska upprepas ett par hundra gånger.

Arket byggs i två delar. Överst ligger ett indatablock där varje parameter står i en egen cell med namn och enhet bredvid sig: värmegenomgång, värmekapacitet, utetemperatur, starttemperatur och tidssteg. Under det ligger beräkningen med en rad per tidssteg och kolumner för tid, innetemperatur, temperaturskillnad, effekt, förlorad energi och temperaturändring.

Regeln som avgör om modellen blir användbar är att inga tal skrivs in i formlerna. Formeln i effektkolumnen hänvisar till indatacellen för värmegenomgången, aldrig till talet 0,15. Ett ark där parametrarna är inbakade i formlerna måste skrivas om varje gång något ändras, och en modell som inte går att ändra kan bara svara på den enda fråga den byggdes för. Vilket kalkylprogram som används spelar ingen roll, och samma modell går lika bra att skriva som ett program för den som hellre gör det.

Med de här värdena visar arket att huset är 20,4 grader efter två timmar, 17,6 efter tolv timmar, 14,7 efter ett dygn och 9,9 efter två. Gränsen 15 grader passeras efter ungefär 23 timmar. Svaret på frågan är alltså att huset är beboeligt ungefär ett dygn, och att det därefter blir kallt men inte livsfarligt kallt på ganska lång tid.

[BILD 8.1-3] Innehåll: Ett kalkylark i två delar. Överst ett indatablock med fem namngivna celler och enheter: värmegenomgång 0,15 kW/°C, värmekapacitet 13 kWh/°C, utetemperatur −5 °C, starttemperatur 21 °C, tidssteg 1 h. Under det en beräkningstabell med kolumnerna tid, innetemperatur, temperaturskillnad, effekt, förlorad energi och temperaturändring, ifylld för de tre första timmarna. Pilar går från indatacellerna in i formeln på första beräkningsraden, och en pil går från en rads sluttemperatur till nästa rads starttemperatur. Bildtext: "Parametrarna står i egna celler, aldrig i formlerna. Varje rad räknas på föregående rads sluttemperatur."

Svaret gäller det här huset, den här utetemperaturen och de här antagandena. Vad som händer med ett sämre isolerat hus, en kallare natt eller ett kortare tidssteg avgörs inte av att modellen byggs utan av att den körs om och om igen med olika förutsättningar.

## Instuderingsfrågor

1. Vad är en modell, och vad är det som avgör hur den ska utformas?
2. Vilka två egenskaper hos huset bygger modellen av avsvalningen på, och vad beskriver var och en av dem?
3. Ange tre antaganden i husmodellen och förklara för ett av dem hur resultatet påverkas om antagandet inte stämmer.
4. Vad menas med en modells giltighetsområde? Ge ett exempel på förhållanden där husmodellen slutar gälla.
5. Varför redovisas antagandena alltid tillsammans med resultatet?
6. Vad skiljer en fysisk modell från en matematisk?
7. När är en fysisk modell ett bättre val än en digital, och varför?
8. Vad är en parameter, och hur skiljer den sig från det modellen räknar fram?
9. Vad menas med en digital modell? Ge två exempel av olika slag.
10. Varför blir dygnets temperaturfall mindre än den första timmens fall multiplicerat med 24?
11. Varför måste varje rad i kalkylarket räknas på föregående rads sluttemperatur?
12. Varför ska parametrarna stå i egna celler i stället för i formlerna?

## Övningar

1. **Modellen bakom svaret.** Välj ett tekniskt förlopp du kan iaktta, till exempel hur en kopp kaffe svalnar, hur snabbt en cykel rullar ut från en viss fart eller hur lång tid det tar att fylla ett badkar. Formulera en fråga som en modell ska besvara, ange vilka storheter modellen måste innehålla, skriv ner minst tre antaganden och ange modellens giltighetsområde.

2. **Rätt modelltyp till frågan.** Bedöm var och en av dessa fyra frågor: hur en ny busskur klarar sidvind, hur långt en elcykel räcker på en laddning, hur ett handtag känns att greppa, och hur mycket en solcellsanläggning ger under ett år. Ange för varje fråga vilken modelltyp som passar bäst och motivera valet. Ange också en av frågorna där både en fysisk och en digital modell behövs, och förklara vad var och en av dem bidrar med.

3. **Första steget för hand.** Ett annat hus har värmegenomgången 0,09 kilowatt per grad och värmekapaciteten 12 kilowattimmar per grad. Vid strömavbrottet är det 21 grader inne och 10 minusgrader ute. Beräkna effekten ut, den energi som lämnar huset under den första timmen och innetemperaturen efter en timme. Kontrollera enheterna i varje steg och bedöm om resultatet är rimligt jämfört med huset i avsnittet.

4. **Bygg modellen.** Bygg avsvalningsmodellen i ett kalkylprogram med värmegenomgången 0,15 kilowatt per grad, värmekapaciteten 13 kilowattimmar per grad, utetemperaturen 5 minusgrader, starttemperaturen 21 grader och tidssteget en timme. Lägg parametrarna i ett eget indatablock och räkna 72 timmar framåt. Rita innetemperaturen som funktion av tiden och läs av när huset passerar 15 grader respektive 10 grader.

5. **Modellbeskrivning till någon annan.** Skriv en beskrivning av en modell du byggt, i högst en sida, så att någon annan kan använda den utan att fråga dig. Beskrivningen ska innehålla frågan modellen svarar på, samtliga antaganden, varje parameter med värde och enhet, de samband som används och modellens giltighetsområde. Låt en klasskamrat läsa beskrivningen och ange vilken uppgift som saknades eller var otydlig.
