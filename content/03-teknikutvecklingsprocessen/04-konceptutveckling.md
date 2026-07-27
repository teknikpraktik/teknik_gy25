---
id: "3.4"
chapter: 3
sectionNumber: 4
title: Konceptutveckling
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-01"]
  niva2: []
learningGoals:
  - Utveckla en idé till ett koncept som beskriver funktion, utformning och
    tänkt användning.
  - Jämföra koncept med en viktad beslutsmatris och välja koncept med motivering.
abilities: [f1]
concepts_introduced: ["koncept", "beslutsmatris", "viktning"]
concepts_used: ["krav", "skallkrav", "börkrav", "kravspecifikation"]
figures: []
prerequisites: ["3.3"]
---

## Från idé till koncept

Satellitpositionering är en idé. Den ryms i tre ord och går inte att bygga efter, inte att prissätta och inte att jämföra med något annat. Innan den kan ställas mot andra förslag måste den växa till ett *koncept*, alltså ett sammanhängande förslag som beskriver lösningens funktion, utformning och tänkta användning så utförligt att det går att pröva mot kraven.

Funktionen svarar på vad delarna gör och hur de samverkar. Utformningen svarar på hur lösningen ser ut i grova drag: huvudmått, form, material, var delarna sitter och hur användaren kommer åt dem. Den tänkta användningen svarar på vem som ska använda lösningen, hur den installeras, vad som händer när något går sönder och vad som krävs av underhåll.

Så här kan idén om satellitpositionering se ut när den blivit ett koncept. En mottagare sitter på maskinen och en fast referensstation monteras på ett tak eller en stolpe med fri sikt mot himlen. Referensstationen mäter felet i satellitsignalen och skickar en korrektion till maskinen, som därmed vet var den befinner sig med några centimeters noggrannhet. Gränsen ritas i en app, sparas som en karta och kan ändras på en minut. Installationen kräver ingen grävning men förutsätter fri sikt, och under täta trädkronor eller tätt intill en husvägg blir positionen osäker. Konceptet är nu tillräckligt beskrivet för att någon ska kunna invända mot det.

Konkurrenten beskrivs på samma sätt. En strömförande kabel grävs ner några centimeter längs hela gräsytans kant och ansluts till en sändare i laddstationen. Kabeln bildar ett magnetfält som maskinen känner av och vänder på. Installationen tar en arbetsdag och kräver att någon gräver, men lösningen bryr sig inte om träd, väggar eller moln. Att ändra gränsen efteråt betyder att gräva om.

Detaljnivån måste vara densamma i alla koncept som ska jämföras. Ett förslag som beskrivs i två meningar förlorar nästan alltid mot ett som beskrivs på en sida, oavsett vilket som är tekniskt bäst, och det är beskrivningen som vinner, inte lösningen. En enkel skiss hör därför till varje koncept. Den visar proportioner och placeringar som text döljer, och den avslöjar ofta att två delar inte får plats på samma ställe.

Ett koncept ska också drivas tillräckligt långt för att dess värsta svaghet ska synas. Den som beskriver sitt eget förslag från dess bästa sida och konkurrentens från dess sämsta har inte utvecklat två koncept utan skrivit ett säljargument.

[BILD 3.4-1] Innehåll: Två koncept för samma gränsproblem ställda sida vid sida, vart och ett beskrivet under de tre rubrikerna funktion, utformning och tänkt användning. Till vänster kabelkonceptet med nedgrävd kabel längs kanten och sändare i laddstationen, till höger satellitkonceptet med mottagare på maskinen och referensstation på taket. Under varje koncept en rad som anger dess tydligaste svaghet: grävning och svår att ändra respektive kräver fri sikt mot himlen. Bildtext: "Två koncept beskrivna på samma detaljnivå. Först då går de att jämföra rättvist."

## Konceptval

Två väl beskrivna koncept gör sällan valet självklart. De är bäst på olika saker, och utan metod avgörs valet av vem som argumenterar starkast eller av vilket förslag som lades fram sist. En *beslutsmatris* gör i stället grunderna synliga. Kriterierna ställs upp som rader, koncepten som kolumner, och varje koncept får ett betyg på varje kriterium.

Kriterierna hämtas från kravspecifikationens börkrav och från de egenskaper som faktiskt skiljer koncepten åt. Skallkraven hör inte hemma i matrisen. Ett koncept som bryter mot ett [[begrepp:skallkrav]] är redan ute, och att ge det ett lågt betyg i stället för att stryka det gör att en underkänd lösning kan vinna på poäng.

Alla kriterier väger inte lika tungt. *Viktning* innebär att varje kriterium får ett tal som visar hur mycket det betyder, och betyget multipliceras med vikten innan poängen summeras. Utan viktning avgörs valet av hur många kriterier som råkar handla om samma sak.

Ett exempel med tre koncept för gränsproblemet visar hur det går till. Kriterierna och deras vikter är installationens enkelhet (vikt 2), noggrannhet vid gränsen (3), okänslighet för träd och byggnader (2), kostnad för utrustningen (3) och möjligheten att ändra gränsen efteråt (1). Betygen sätts på en skala från 1 till 5, där 5 är bäst.

Kabelkonceptet får betygen 2, 5, 5, 4 och 1:

2·2 + 5·3 + 5·2 + 4·3 + 1·1 = 4 + 15 + 10 + 12 + 1 = 42

Satellitkonceptet får 4, 4, 2, 2 och 5:

4·2 + 4·3 + 2·2 + 2·3 + 5·1 = 8 + 12 + 4 + 6 + 5 = 35

Kamerakonceptet får 5, 3, 3, 3 och 5:

5·2 + 3·3 + 3·2 + 3·3 + 5·1 = 10 + 9 + 6 + 9 + 5 = 39

Summan av vikterna är 11, så högsta möjliga poäng är 55. Kabeln vinner med 42 poäng, kameran följer på 39 och satelliten hamnar sist på 35.

Resultatet ska prövas innan det får styra något. Skillnaden mellan 42 och 39 är tre poäng av 55 möjliga, alltså liten nog att kunna bero på hur betygen råkade sättas. Ett sätt att pröva är att ändra en vikt och räkna om. Antag att kunden inte är en villaägare utan ett företag som installerar hundra maskiner om året. Då väger installationens enkelhet betydligt tyngre, säg vikt 4 i stället för 2:

kabel: 2·4 + 15 + 10 + 12 + 1 = 46

satellit: 4·4 + 12 + 4 + 6 + 5 = 43

kamera: 5·4 + 9 + 6 + 9 + 5 = 49

Nu vinner kameran. Ordningen kastades om av en enda vikt, och det säger något viktigt: valet hänger inte på tekniken utan på vem kunden är. Ett resultat som vänder vid en liten ändring betyder att koncepten är likvärdiga och att beslutet måste fattas på något annat sätt, till exempel genom att bygga prototyper av båda.

Betygen är bedömningar, inte mätningar. Därför skrivs en kort motivering till varje betyg, och därför sätter flera personer betygen var för sig innan de jämförs. Skiljer sig två bedömningar kraftigt åt beror det oftast på att kriteriet är otydligt formulerat, och då är matrisen värdefull redan innan den summerats. Poängen ersätter aldrig motiveringen. Den som redovisar sitt val redovisar kriterier, vikter, betyg och de avvägningar som gjordes, inte bara den slutliga siffran.

Ett dokumenterat val går dessutom att göra om. När satellitpositioneringen blev både noggrannare och billigare ändrades två av betygen i den verkliga matrisen, och kabeln var inte längre självklar. Utan en skriven matris hade ingen kunnat peka på exakt vad som förändrats.

[BILD 3.4-2] Innehåll: Beslutsmatrisen från exemplet uppställd som tabell. Rader för de fem kriterierna med sina vikter, kolumner för de tre koncepten med betyg och viktad poäng i varje ruta, samt en summeringsrad längst ner. Bredvid tabellen samma summeringsrad en gång till, med installationskriteriets vikt ändrad från 2 till 4, så att ordningen mellan koncepten syns kastas om. Bildtext: "Matrisen räknar inte fram beslutet. Den visar vad beslutet vilar på, och hur lite som ibland skiljer."

## Instuderingsfrågor

1. Vad menas med ett koncept?
2. Vilka tre delar ska ett koncept beskriva?
3. Varför räcker det inte att beskriva ett förslag som en idé på en rad?
4. Varför måste koncept som ska jämföras vara beskrivna på samma detaljnivå?
5. Vad är en beslutsmatris?
6. Varför viktas kriterierna?
7. Varför ska skallkrav inte ligga som kriterier i matrisen?
8. Ett koncept får betyget 4 på ett kriterium med vikt 3. Hur många poäng ger den rutan?
9. Två koncept skiljer sig med två poäng av femtiofem möjliga. Vad bör man göra med det resultatet?
10. Varför sätter flera personer betygen var för sig?
11. Varför dokumenteras kriterier, vikter och betyg och inte bara det valda konceptet?

## Övningar

1. **Utveckla en idé till ett koncept.** Välj en idé som löser ett vardagligt problem, till exempel att hålla en cykel upprätt utan stöd, att torka blöta skor eller att hålla ordning på laddkablar. Beskriv idén som ett koncept under rubrikerna funktion, utformning och tänkt användning, och komplettera med en skiss som visar huvudmått och hur delarna sitter. Avsluta med konceptets tydligaste svaghet.

2. **Räkna ut vinnaren.** Tre koncept för ett väderskydd vid en busshållplats ska jämföras. Kriterierna med vikter är skydd mot regn och blåst (vikt 3), byggkostnad (3), underhåll (2), utseende (1) och byggtid (1). Koncept A får betygen 5, 2, 3, 4 och 2. Koncept B får 3, 4, 4, 3 och 4. Koncept C får 4, 3, 2, 5 och 4. Betygsskalan går från 1 till 5. Räkna ut den viktade poängen för varje koncept, ange ordningen mellan dem och ange hur många poäng som skiljer första och andra plats.

3. **Pröva hur stabilt resultatet är.** Utgå från samma tre koncept och siffror som i föregående uppgift. Räkna om summorna med byggkostnadens vikt ändrad från 3 till 5, och därefter en gång till med underhållets vikt ändrad från 2 till 4. Redovisa båda resultaten och skriv en kort slutsats om vilket koncept som är mest robust mot ändrade vikter och vad det innebär för valet.

4. **Bygg din egen matris.** Välj ett verkligt inköp där minst tre alternativ finns, till exempel hörlurar, cykel eller dator. Ställ upp minst fem kriterier med vikter, motivera varje vikt med en mening, sätt betyg med en kort motivering per ruta och räkna fram resultatet. Ange till sist om du håller med matrisens svar och varför.

5. **Två bedömare.** Låt en klasskamrat sätta betyg på samma koncept och kriterier som du, utan att ni ser varandras siffror. Jämför sedan resultaten, markera de rutor där ni skiljer er med minst två steg och skriv för varje sådan ruta om skillnaden beror på olika bedömning eller på att kriteriet är otydligt formulerat. Skriv om de otydliga kriterierna och räkna om.
