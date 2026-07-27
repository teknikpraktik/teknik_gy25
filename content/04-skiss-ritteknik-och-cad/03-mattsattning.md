---
id: "4.3"
chapter: 4
sectionNumber: 3
title: Måttsättning
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-16"]
  niva2: []
learningGoals:
  - Måttsätta en enkel ritning enligt gällande standard.
  - Förklara varför toleranser behövs och tolka toleransangivelser på en ritning.
abilities: [f5]
concepts_introduced: ["måttsättning", "nominellt mått", "tolerans", "passning"]
concepts_used: ["ritning", "vy", "krav"]
figures: []
prerequisites: ["4.2"]
---

## Måttsätta ritningar

Vyerna visar formen, men ingen kan tillverka mobilhållaren utan att veta hur bred bottenplattan är eller var spåret för kabeln sitter. *Måttsättning* är arbetet med att förse ritningen med de mått som behövs för att föremålet ska kunna tillverkas, varken fler eller färre.

Ett mått ritas med en smal heldragen måttlinje med pilar i ändarna. Måttlinjen ligger utanför konturen och avgränsas av två hjälplinjer som dras ut från de kanter måttet gäller. Hjälplinjerna börjar med ett litet glapp mot konturen och fortsätter en bit förbi pilen, så att de går att skilja från föremålets egna linjer. Måttsiffran skrivs ovanför måttlinjen och ska kunna läsas från bladets underkant eller från dess högerkant. Alla mått anges i millimeter, och enheten skrivs inte ut. Används någon annan enhet måste det stå.

Några symboler återkommer. Ett diametermått föregås av tecknet Ø, en radie av bokstaven R och en fasning skrivs som avstånd och vinkel, till exempel 2 x 45°. Ett mått som bara är en följd av andra mått sätts inom parentes och kallas då hjälpmått. Det får läsas men aldrig användas som underlag för tillverkning.

Regeln som styr resten är att varje mått anges en enda gång. Står bredden både i vyn framifrån och i vyn ovanifrån finns två uppgifter som kan bli olika vid en ändring, och då vet ingen vilken som gäller. Måttet placeras i den vy där formen syns tydligast, och de mått som hör ihop samlas i samma vy. Måtten läggs utanför konturen med det minsta måttet närmast föremålet och de större längre ut, så att måttlinjerna inte korsar varandra.

Måtten ska dessutom vara de som funktionen kräver, inte de som råkar vara lätta att mäta. För mobilhållaren är kabelspårets läge från bottenplattans bakkant ett funktionsmått, eftersom det avgör om kontakten går i. Bottenplattans hörnradie är det inte, och den kan därför ges ett grovt mått.

Sättet att räkna varifrån betyder mer än det verkar. Vid kedjemåttsättning mäts varje mått från föregående detalj, som en kedja av steg längs föremålet. Vid basmåttsättning mäts alla mått i stället från en och samma referenskant. Skillnaden märks när tillverkningen inte träffar exakt. I en kedja läggs varje litet fel till nästa, så att den sista detaljen kan hamna långt fel även när varje enskilt steg är nästan rätt. Med en gemensam referenskant är felet i ett mått oberoende av felet i nästa. Kedjemåttsättning används därför bara när avstånden mellan grannarna är det som betyder något, och basmåttsättning i alla andra fall.

[BILD 4.3-1] Innehåll: Samma vy av mobilhållarens bottenplatta måttsatt på två sätt. Till vänster kedjemåttsättning, där fyra hål måttsätts steg för steg från hål till hål, och under vyn en beräkning som visar hur fyra fel på 0,2 millimeter kan ge 0,8 millimeters avvikelse vid sista hålet. Till höger basmåttsättning, där alla fyra hålen måttsätts från samma vänsterkant, med samma fel som stannar vid 0,2 millimeter per hål. Bildtext: "Samma fyra hål, två sätt att räkna. I kedjan staplas felen, från en referenskant gör de det inte."

## Toleranser

Inget mått blir exakt. Två detaljer som svarvats efter samma ritning skiljer sig alltid åt någonstans bortom decimalerna, och frågan är därför aldrig om avvikelsen finns utan hur stor den får vara.

Legoklossen visar vad frågan är värd. En knopp på ovansidan har diametern 4,8 millimeter och en vanlig kloss är 9,6 millimeter hög, och tillverkningen håller sig inom hundradels millimeter. Marginalen är inte tagen ur luften. En kloss som är två hundradelar för stor går inte ner i den befintliga byggnaden, och en som är två hundradelar för liten släpper taget och faller isär när bygget lyfts. Att klossar från olika årtionden och olika fabriker ändå passar ihop är en följd av att någon en gång bestämde exakt hur mycket måttet fick avvika.

Måttet som står på ritningen kallas *nominellt mått*. Det är det önskade måttet, alltså det man siktar på. En *tolerans* anger hur mycket det verkliga måttet får avvika från det nominella och ändå godkännas.

Toleransen skrivs på några olika sätt. Enklast är en symmetrisk avvikelse, som 60 ±0,2, vilket betyder att måttet får ligga mellan 59,8 och 60,2 millimeter. Är avvikelsen olika åt de två hållen skrivs övre och undre gränsmått var för sig, som 30 med +0,2 över och 0 under, vilket ger måtten 30,0 till 30,2. För hål och axlar finns dessutom ett standardiserat system med en bokstav och en siffra, till exempel H7 för ett hål och g6 för en axel, där bokstaven anger avvikelsens läge och siffran hur snäv den är. Den som möter en sådan beteckning slår upp värdena i en tabell.

Alla mått på en ritning behöver ingen egen tolerans. I ritningshuvudet anges i stället en generell toleransklass som gäller varje mått utan angiven avvikelse, i klasser från fin till grov. Ett mått utan tolerans är alltså inte ett mått utan krav, och den som tror det tillverkar förr eller senare något som inte går att montera.

*Passning* beskriver hur två delar som ska sitta ihop förhåller sig till varandra när båda ligger inom sina toleranser. Vid spelpassning är hålet alltid större än axeln, så att delarna går att sätta ihop för hand och röra sig mot varandra. Mobilhållarens skruvhål på 4,5 millimeter för en skruv på 4 millimeter är ett exempel. Vid presspassning är axeln alltid större än hålet, så att delarna sitter fast utan skruv och måste pressas eller kylas samman. Vid övergångspassning kan det bli antingen litet spel eller litet grepp, beroende på var i toleransen de två delarna hamnade.

Passningens verkliga marginal räknas ur gränsmåtten. Ett hål med måttet 10 med +0,2 över och 0 under, tillsammans med en axel på 10 med minus 0,1 över och minus 0,3 under, ger som störst spel

10,2 − 9,7 = 0,5 mm

och som minst

10,0 − 9,9 = 0,1 mm

Spelet ligger alltså mellan 0,1 och 0,5 millimeter, och det är inom det intervallet konstruktionen måste fungera. Är 0,5 millimeter för mycket glapp behöver toleranserna skärpas, inte det nominella måttet ändras.

Skärpta toleranser kostar. Snävare krav betyder noggrannare maskiner, långsammare bearbetning och fler kasserade detaljer, och kostnaden stiger brant ju närmare hundradelarna man kommer. Därför toleranseras bara det som funktionen kräver. En användbar kontrollfråga är vad som faktiskt händer om måttet blir en halv millimeter fel. Blir svaret ingenting alls räcker den generella toleransen, och blir svaret att delarna inte går att montera ska måttet ha en egen och tydlig tolerans.

[BILD 4.3-2] Innehåll: Ett hål och en axel ritade i genomskärning bredvid varandra, båda med sina övre och undre gränsmått utsatta som två tunna linjer kring det nominella måttet. Under bilden tre fall illustrerade med kraftigt förstorat glapp: spelpassning där hålet alltid är störst, presspassning där axeln alltid är störst, och övergångspassning där utfallet kan bli endera. Vid varje fall en rad som anger vad passningen används till. Bildtext: "Toleranserna avgör passningen. Största och minsta spel räknas ur gränsmåtten, inte ur de nominella måtten."

## Instuderingsfrågor

1. Vad menas med måttsättning?
2. Hur ritas ett mått, och var placeras måttsiffran?
3. Vilken enhet används för mått på tekniska ritningar, och hur anges den?
4. Vad betyder tecknen Ø och R på en ritning?
5. Varför får samma mått bara anges en gång?
6. Vad är ett hjälpmått, och hur skrivs det?
7. Vad skiljer kedjemåttsättning från basmåttsättning?
8. Varför blir felet större vid kedjemåttsättning? Förklara med ett exempel.
9. Vad är ett nominellt mått?
10. Vad är en tolerans, och varför behövs den?
11. Ett mått anges som 45 ±0,3. Mellan vilka värden får det verkliga måttet ligga?
12. Vad gäller för ett mått på en ritning som inte har någon tolerans utsatt?
13. Vad menas med passning, och vad skiljer spelpassning från presspassning?
14. Varför toleranseras inte alla mått lika snävt?

## Övningar

1. **Måttsätt en kloss.** Rita en rätblocksformad kloss på 70 gånger 45 gånger 25 millimeter med ett genomgående hål med diametern 12 millimeter, placerat 20 millimeter från vänsterkanten och 22,5 millimeter från framkanten. Måttsätt ritningen fullständigt med basmåttsättning från vänsterkanten och framkanten, med rätt måttlinjer, hjälplinjer och symboler. Kontrollera till sist att inget mått står två gånger och att inget mått saknas.

2. **Räkna på gränsmått.** Ett hål har måttet 25 med +0,3 över och 0 under. Axeln som ska sitta i hålet har måttet 25 med minus 0,1 över och minus 0,4 under. Beräkna största och minsta spel. Avgör sedan vilken sorts passning det är och beskriv med en mening vad den används till.

3. **Kedja mot referenskant.** En list ska förses med fem hål med 40 millimeters mellanrum. Varje borrning kan hamna upp till 0,3 millimeter fel. Räkna ut hur långt det sista hålet som mest kan hamna fel om måtten sätts som en kedja från hål till hål, respektive om alla mått utgår från listens vänsterkant. Redovisa båda fallen och förklara skillnaden.

4. **Sätt toleranser efter funktion.** Utgå från mobilhållarens tre mått: bottenplattans bredd, kabelspårets läge från bakkanten och skruvhålets diameter. Ange för varje mått vad som händer om det blir en halv millimeter fel, och bestäm utifrån det vilka mått som behöver en egen tolerans och vilka som klarar sig med den generella. Motivera varje beslut.

5. **Granska en verklig måttsättning.** Ta fram en verklig måttsatt ritning, till exempel ur en monteringsanvisning eller en reservdelskatalog. Leta rätt på minst fem mått och avgör för varje om det är ett funktionsmått eller ett mått som bara beskriver formen. Leta också efter toleransangivelser och skriv vad de betyder i millimeter. Redovisa fynden och markera vad du inte kunde tolka.
