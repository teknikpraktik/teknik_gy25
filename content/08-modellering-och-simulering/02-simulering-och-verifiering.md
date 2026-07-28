---
id: "8.2"
chapter: 8
sectionNumber: 2
title: Simulering och verifiering
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-11", "n1-08"]
  niva2: ["n2-08"]
learningGoals:
  - Förklara vad simulering är och när simulering är att föredra framför fysisk
    provning.
  - Genomföra en enkel simulering, variera parametrar och tolka resultatet.
  - Förklara skillnaden mellan verifiering och validering samt jämföra
    modellresultat med mätningar.
abilities: [f3, f5]
concepts_introduced: ["simulering", "tidssteg", "känslighetsanalys", "verifiering", "validering"]
concepts_used: ["modell", "antagande", "giltighetsområde", "parameter", "mätserie", "kontrollerad variabel", "mätosäkerhet", "extrapolation", "prototyp"]
figures: []
prerequisites: ["7.2", "8.1"]
---

## Simuleringens princip

En färdigbyggd [[begrepp:modell]] gör ingen nytta förrän den körs. Att låta modellen räkna ut hur ett förlopp utvecklar sig, i stället för att låta förloppet ske i verkligheten, kallas *simulering*. Huset i föregående avsnitt svalnade aldrig. Det som svalnade var en rad tal i ett kalkylark, och ändå gav de talen ett användbart svar på hur länge huset går att bo i.

Simuleringen av ett förlopp bygger på ett enkelt grepp. Tiden delas i korta intervall, och inom varje intervall antas förhållandena vara oförändrade. Ett sådant intervall kallas *tidssteg*. I husmodellen är tidssteget en timme, och under den timmen räknas värmeförlusten som om temperaturskillnaden mot uteluften låg stilla, trots att den i verkligheten krymper hela tiden. Vid nästa steg uppdateras skillnaden, och steget innan lever bara kvar genom den nya starttemperaturen.

Ju kortare tidssteget är, desto närmare kommer trappan det verkliga, jämna förloppet. Priset är fler rader att räkna. Här ligger också en fälla värd att se upp med. Ett kortare tidssteg gör inte modellen sannare, bara ekvationerna bättre lösta. Räknar modellen på fel [[begrepp:antagande]]n räknar den fel lika säkert med sekundsteg som med timsteg, fast långsammare.

[BILD 8.2-1] Innehåll: Ett diagram med tiden på den vågräta axeln och innetemperaturen på den lodräta. En jämn, svagt böjd kurva visar det verkliga avsvalningsförloppet. Ovanpå den ligger två trappor av vågräta steg som följer kurvan, en med breda steg märkta sex timmar och en med smala steg märkta en timme. Den breda trappan avviker tydligt från kurvan, den smala nästan inte alls. Ett förstorat utsnitt visar ett enda steg, där temperaturskillnaden mot uteluften hålls konstant under hela steget. Bildtext: "Simuleringen ersätter det jämna förloppet med en trappa. Kortare steg ger en trappa som ligger närmare kurvan."

Simulering väljs framför fysisk provning av fyra skäl. Provet kan vara farligt, som ett brandförlopp i en byggnad full av människor. Det kan vara för dyrt eller för långsamt, som att åldra en konstruktion i tjugo år för att se hur den håller. Det kan vara omöjligt att ordna, som att stänga av värmen i ett bebott hus mitt i en köldknäpp bara för att se vad som händer. Och ska många varianter jämföras är beräkningen enda framkomliga vägen, eftersom var och en av dem annars måste byggas.

Väderprognosen är den simulering flest människor använder dagligen. Atmosfären beskrivs som ett rutnät över jordklotet, och tillståndet i varje ruta räknas framåt i tidssteg utifrån mätningar av hur läget är just nu. Ingen har provat morgondagens väder. Det är uträknat.

Samtidigt har simuleringen kvar modellens begränsning. Den räknar bara på det som skrivits in i den, och verkligheten innehåller alltid mer. Därför byggs [[begrepp:prototyp]]er och körs fysiska prov även när en simulering redan gett ett svar, särskilt när ett fel skulle bli dyrt eller farligt.

## Genomföra en simulering

En körning ger ett svar. Nyttan uppstår när modellen körs om och om igen med olika förutsättningar, eftersom skillnaderna mellan körningarna säger sådant en enskild siffra aldrig gör.

Grundfallet är känt sedan modellen byggdes. Huset med värmegenomgången 0,15 kilowatt per grad och värmekapaciteten 13 kilowattimmar per grad passerar 15 grader efter ungefär 23 timmar när det är 5 minusgrader ute.

Nu ändras en förutsättning i taget. Blir det i stället 15 minusgrader ute passeras 15 grader redan efter 16 timmar. Byts huset mot ett sämre isolerat, med värmegenomgången 0,25 kilowatt per grad och 5 minusgrader ute, tar det 14 timmar. Ett välisolerat hus med 0,10 kilowatt per grad håller sig däremot över gränsen i 34 timmar. För det sämst isolerade huset under den kallaste natten, alltså båda ändringarna samtidigt, återstår knappt 10 timmar.

Regeln att ändra en sak i taget är densamma som gäller för en [[begrepp:mätserie]]. Ändras två [[begrepp:parameter]]värden samtidigt går det inte att avgöra vilket av dem som orsakade skillnaden, precis som en [[begrepp:kontrollerad variabel]] måste hållas fast genom en mätning. Skillnaden är att en körning är gratis att göra om, medan en mätserie måste göras om från början.

Att ändra en parameter i taget och se hur mycket svaret påverkas kallas *känslighetsanalys*. Den ger här ett tydligt besked. En halverad värmegenomgång fördubblar tiden, medan tio graders kallare uteluft bara kortar den med ungefär en tredjedel. Isoleringen styr alltså utfallet betydligt mer än vädret gör.

Det beskedet är värt mer än de enskilda timtalen, och det av två skäl. Det säger vad som lönar sig att göra åt saken, och tilläggsisolering slår här allt annat. Det säger också vilka tal som måste bestämmas noga. En parameter som knappt påverkar svaret får uppskattas grovt, medan en som styr utfallet måste tas fram med omsorg. Att lägga en vecka på att bestämma husets värmekapacitet exakt vore bortkastat om värmegenomgången samtidigt gissades.

[BILD 8.2-2] Innehåll: Ett diagram med tiden i timmar på den vågräta axeln, från 0 till 48, och innetemperaturen på den lodräta. Fyra kurvor utgår från samma startpunkt 21 grader, märkta grundfall, kallare ute, sämre isolerat och bättre isolerat. En vågrät streckad linje vid 15 grader korsar alla fyra kurvorna, och varje skärningspunkt är markerad med sitt timtal: 23, 16, 14 och 34. Bildtext: "Samma modell, fyra förutsättningar. Isoleringen flyttar svaret mer än utetemperaturen gör."

Tolkningen kräver återhållsamhet. Simuleringen svarade 23 timmar, men svaret är inte 23 timmar. Det är att huset klarar sig ungefär ett dygn under de antaganden som gjordes. Ett par timmar hit eller dit ryms inom osäkerheten i parametrarna, och den som redovisar 22,6 timmar påstår en noggrannhet modellen inte har. Ett simuleringsresultat redovisas därför alltid tillsammans med de förutsättningar som gällde, på samma sätt som antagandena hör till modellen.

## Verifiering och validering

Ett resultat ur en modell väcker två helt olika frågor. Räknar modellen rätt? Och räknar den på rätt saker? Den första frågan är *verifiering*, alltså kontrollen av att modellen räknar korrekt utifrån de samband och antaganden den bygger på. Den andra är *validering*, alltså kontrollen av att modellen beskriver verkligheten tillräckligt väl för sitt syfte. Kortare uttryckt svarar verifieringen på om modellen byggts rätt och valideringen på om rätt modell byggts.

Verifieringen görs i modellen själv och kräver ingen verklighet. Fyra kontroller räcker långt.

Enheterna prövas genom hela kedjan. Kilowatt per grad multiplicerat med grader ger kilowatt, och kilowattimmar delat med kilowattimmar per grad ger grader. Går enheterna inte ihop är formeln fel, hur rimligt talet än ser ut.

Det första steget räknas för hand och jämförs med arkets första rad. Stämmer de inte är någon formel felskriven eller någon cellhänvisning fel.

Tidssteget halveras. Med timsteg ger husmodellen 14,7 grader efter ett dygn, och med halvtimmessteg ändras svaret bara i hundradelar. Steget är alltså kort nog. Räknas samma dygn med tolvtimmarssteg blir svaret i stället 14,3 grader, och med ett enda dygnslångt steg 13,8 grader. Ju grövre trappan är, desto mer avviker den från förloppet, och ett tidssteg lika långt som hela husets tröghet får modellen att kollapsa och påstå att huset blir utekallt på en gång.

Extremfallen prövas sist, eftersom de avslöjar tankefel som de andra kontrollerna inte fångar. Sätts utetemperaturen lika med innetemperaturen ska ingenting hända, och händer det ändå något är sambandet feltecknat. Sätts värmekapaciteten till nästan noll ska huset svalna nästan omedelbart. En modell som klarar extremfallen är inte därmed riktig, men en som inte klarar dem är säkert fel.

Valideringen kräver däremot verkligheten. Modellen jämförs med mätningar av det den påstår sig beskriva. För husmodellen betyder det en mätserie i ett verkligt hus. Värmen stängs av en vinterdag, innetemperaturen och utetemperaturen loggas varje timme under ett dygn, och den uppmätta kurvan läggs över den simulerade.

Vad som ska räknas som tillräckligt bra avgörs innan jämförelsen görs, aldrig efteråt. För frågan om huset klarar ett dygn räcker det gott att modellen träffar inom en grad efter ett dygn, och den gränsen sätts av vad svaret ska användas till. Här måste också [[begrepp:mätosäkerhet]]en vägas in. En avvikelse som är mindre än osäkerheten i själva mätningen bevisar ingenting, varken att modellen stämmer eller att den inte gör det.

En modell kan vara felfritt verifierad och ändå ogiltig. Svalnar huset i verkligheten snabbare än modellen sa kan skälet vara att utetemperaturen sjönk under natten medan modellen räknade med ett fast värde, eller att ventilationen stod öppen. Ekvationerna löstes rätt hela tiden. Det var antagandena som inte höll. Åt andra hållet kan en modell råka träffa rätt genom två fel som tar ut varandra, och därför räcker en enda lyckad jämförelse inte som bevis.

Valideringen är också det som ger modellen sitt [[begrepp:giltighetsområde]]. Stämde modellen vid 5 minusgrader under ett dygn är den prövad för just det, och att lita på den vid 25 minusgrader under en vecka är samma slags [[begrepp:extrapolation]] som att förlänga en trendlinje utanför sitt mätområde. Modellen kan mycket väl gälla där också, men det är inte visat.

I stor skala arbetas det på precis det sättet. Varje väderprognos jämförs i efterhand med vad som faktiskt uppmättes, avvikelserna sammanställs och modellerna justeras utifrån dem. Att en simulering en gång gett rätt svar är alltså inte slutet på arbetet med modellen, utan det enda skälet att våga använda den nästa gång.

[BILD 8.2-3] Innehåll: Två diagram bredvid varandra, båda med tid på den vågräta axeln och innetemperatur på den lodräta. Det vänstra är märkt verifiering och visar tre simulerade kurvor ur samma modell, med tidsstegen en halvtimme, en timme och tolv timmar. De två första sammanfaller nästan helt, den tredje avviker synligt. Det högra är märkt validering och visar en simulerad kurva tillsammans med uppmätta punkter från ett verkligt hus, där punkterna ligger något under kurvan mot slutet av dygnet och avvikelsen efter 24 timmar är utmärkt med ett mått. Bildtext: "Verifieringen jämför modellen med sig själv. Valideringen jämför den med verkligheten."

## Instuderingsfrågor

1. Vad menas med en simulering?
2. Vad är ett tidssteg, och vad antas gälla inom ett sådant steg?
3. Vad vinner man på ett kortare tidssteg, och vad kostar det?
4. Varför gör ett kortare tidssteg inte modellen mer verklighetstrogen?
5. Ange fyra skäl att simulera i stället för att prova fysiskt, med ett exempel på vart och ett.
6. Varför byggs prototyper och körs fysiska prov även när en simulering redan gett ett svar?
7. Varför ändras bara en parameter i taget när en modell körs om?
8. Vad menas med känslighetsanalys, och vad används resultatet till?
9. Husmodellen är känsligare för isoleringen än för utetemperaturen. Vad betyder det för den som vill att huset ska klara ett strömavbrott bättre?
10. Vad är skillnaden mellan verifiering och validering?
11. Ange tre sätt att verifiera en modell utan att mäta någonting i verkligheten.
12. Vad prövar extremfallen som en handräkning av första steget inte prövar?
13. Varför bestäms gränsen för hur nära modellen måste träffa innan jämförelsen med mätningen görs?
14. Hur kan en modell vara felfritt verifierad och ändå ge fel svar?
15. Varför gäller en validerad modell bara inom de förhållanden den prövats i?

## Övningar

1. **Kortare steg.** Utgå från avsvalningsmodellen med värmegenomgången 0,15 kilowatt per grad, värmekapaciteten 13 kilowattimmar per grad, utetemperaturen 5 minusgrader och starttemperaturen 21 grader. Simulera ett dygn med tidsstegen tolv timmar, en timme och en halv timme, och ställ upp de tre sluttemperaturerna i en tabell. Ange vilket tidssteg du skulle använda och motivera valet med hur mycket svaret ändrades mellan körningarna.

2. **Fyra vintrar.** Simulera samma hus vid utetemperaturerna 0 grader, 5 minusgrader, 15 minusgrader och 25 minusgrader. Läs av i varje fall hur lång tid det tar innan huset passerar 15 grader, och rita in de fyra kurvorna i samma diagram. Beskriv hur tiden ändras när det blir tio grader kallare, och avgör om ändringen är lika stor i alla fyra fallen.

3. **Vad lönar sig?** En husägare kan antingen tilläggsisolera så att värmegenomgången sjunker från 0,20 till 0,14 kilowatt per grad, eller möblera om så att värmekapaciteten ökar från 12 till 14 kilowattimmar per grad. Simulera båda åtgärderna var för sig vid 10 minusgrader ute och jämför hur länge huset håller sig över 15 grader. Ange vilken åtgärd som ger mest, och förklara resultatet utifrån hur de två storheterna kommer in i modellen.

4. **Verifiera arket.** Ta en färdig avsvalningsmodell och genomför fyra kontroller på den: följ enheterna genom hela kedjan, räkna det första steget för hand och jämför med arkets första rad, halvera tidssteget, och sätt utetemperaturen lika med starttemperaturen. Redovisa vad varje kontroll gav, och ange för var och en vad du skulle ha misstänkt om den fallit ut på något annat sätt.

5. **Validera mot verkligheten.** Välj ett avsvalningsförlopp du kan mäta själv, till exempel en termos, en kastrull med varmt vatten eller ett rum som får svalna. Bygg en modell av förloppet med samma två storheter som husmodellen, och bestäm i förväg hur nära modellen måste träffa för att duga. Mät sedan det verkliga förloppet med minst tio mätvärden, lägg den uppmätta kurvan över den simulerade och avgör om modellen duger. Ange minst ett antagande som kan förklara den avvikelse du ser, och inom vilka förhållanden du anser dig ha validerat modellen.
