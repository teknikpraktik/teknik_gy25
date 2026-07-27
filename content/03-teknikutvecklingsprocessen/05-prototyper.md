---
id: "3.5"
chapter: 3
sectionNumber: 5
title: Prototyper
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-01", "n1-11"]
  niva2: []
learningGoals:
  - Förklara vad prototyper används till och skilja mellan olika typer av
    prototyper.
  - Bygga en enkel prototyp av ett koncept och avgöra vilka frågor om konceptet
    prototypen kan besvara och vilka den inte kan.
abilities: [f1]
concepts_introduced: ["prototyp", "utseendemodell", "funktionsmodell"]
concepts_used: ["koncept", "iteration"]
figures: []
prerequisites: ["3.4"]
---

## Prototypers roll

Ett valt koncept är fortfarande bara en beskrivning. Det håller för invändningar men inte för verkligheten, och några frågor går aldrig att svara på vid ett bord. Hinner maskinen bromsa innan den passerar gränsen? Fastnar hjulen i blött gräs? Går locket att öppna med handskar på?

En *prototyp* är en fysisk eller körbar version av ett [[begrepp:koncept]], byggd för att svara på en bestämd fråga. Den är inte en tidig produkt och behöver varken se ut som slutresultatet eller vara byggd i rätt material. Ordningen är viktig: frågan formuleras först, prototypen byggs sedan. Den som börjar bygga utan fråga tillverkar en liten variant av produkten och lär sig ingenting bestämt av den.

Frågan avgör också hur prototypen ska se ut. Ska satellitmottagningen prövas i en trädgård med höga träd behövs ingen gräsklippare alls. En mottagare på en stång som bärs runt i trädgården, medan positionen loggas, ger svaret på en förmiddag. Prototypen liknar inte produkten på något sätt, och det spelar ingen roll, eftersom den svarar på precis det som var osäkert.

Prototyper delas ofta in efter vad de visar. En *utseendemodell* visar form, storlek och proportioner utan att fungera. Den byggs i frigolit, trä eller plast för att man ska kunna hålla i lösningen, se hur den ter sig i sin miljö och pröva om greppet ligger rätt i handen. En *funktionsmodell* är tvärtom. Den fungerar men ser oftast inte ut som någonting, och komponenterna sitter löst monterade på en skiva med kablar synliga. En delprototyp prövar bara en enda funktion, till exempel gränsavkänningen på ett chassi av plywood. En fullständig prototyp sätter samman allt och används sist, när de enskilda delarna redan är prövade.

Detaljnivån ska hållas så låg som frågan tillåter. En kartongmodell som besvarar frågan i dag är bättre än en 3D-utskriven modell som besvarar samma fråga om tre dagar, och den kostar dessutom så lite att den går att kasta. Prototyper som blivit dyra tenderar att försvaras i stället för att prövas.

Prototypen har också sina gränser. Den säger ingenting om vad produkten kostar i serietillverkning, hur den håller efter fem år eller hur tusen olika användare kommer att hantera den. Sådant kräver beräkning, långtidsprovning eller försäljning, och att dra långtgående slutsatser ur ett enda handbyggt exemplar är ett vanligt och dyrt misstag.

[BILD 3.5-1] Innehåll: Fyra prototyper av samma robotgräsklippare i rad. Först en utseendemodell i frigolit utan inre delar, sedan en funktionsmodell där motorer, batteri och elektronik sitter synliga på en plywoodplatta, därefter en delprototyp med enbart gränsavkänningen på ett enkelt chassi, och sist en fullständig prototyp som liknar produkten. Under varje modell den fråga den byggdes för att svara på. Bildtext: "Fyra prototyper av samma koncept. Frågan avgör vilken av dem som ska byggas."

## Bygga en prototyp

Arbetet börjar med att frågan skrivs ner, och den ska vara så snäv att svaret går att se. Fungerar konceptet är ingen fråga. Hinner maskinen stanna innan den passerar gränsen när den kör i högsta hastighet är en fråga.

Därefter bestäms vad som måste vara verkligt och vad som får fuskas. Ska bromssträckan prövas måste hastigheten, vikten och underlaget stämma, medan höljet, färgen och batteritiden kan vara vad som helst. En prototyp som gjort rätt saker verkliga och struntat i resten är både snabbare att bygga och lättare att dra slutsatser av. Den som gör allt lite verkligt får en modell som inte svarar säkert på någonting.

Sedan väljs enklaste möjliga utförande. Kartong, frigolit, trälist, buntband och tejp räcker längre än de flesta tror, och till rörliga eller styrda funktioner finns byggsatser, hobbyelektronik och små motorer att köpa billigt. Delar från trasiga apparater duger utmärkt. Slutligen bestäms i förväg vad som ska observeras eller mätas när prototypen provas, annars blir resultatet en känsla av att det gick ganska bra.

Ett exempel gör steget konkret. Frågan gäller hur nära gränsen en robotgräsklippare hinner bromsa. Prototypen blir ett chassi av plywood med två motorer, ett batteri och en spole som känner av strömmen i en tråd, och tråden läggs i en slinga på en gräsmatta. Höljet saknas, knivarna saknas och maskinen är ful. Ändå går det att köra den mot tråden i tre olika hastigheter, mäta hur långt utanför tråden framkanten hamnar vid varje försök och därmed avgöra vilken högsta hastighet konceptet tål. Frågan är besvarad med en dags arbete och material för några hundra kronor.

Sätt en tidsgräns för bygget. En prototyp som tar en månad har slutat vara en prototyp och blivit ett produktbygge, och under tiden har utvecklingsarbetet stått stilla i väntan på svaret. Bygg hellre två enkla efter varandra än en avancerad.

Allt som prövas ska dokumenteras medan det görs. Fotografera varje version, anteckna vad som ändrades och varför, och spara de varianter som inte fungerade. Utan anteckningar upprepas samma misslyckade lösning om ett halvår, och med anteckningar blir varje bygge ett steg i en [[begrepp:iteration]] i stället för en fristående händelse. Innan cyklondammsugaren nådde marknaden byggde dess konstruktör över femtusen prototyper under fem års arbete i början av 1980-talet, och det arbetet hade varit meningslöst utan reda på vad varje version visat.

[BILD 3.5-2] Innehåll: Tre olika prototyper av samma koncept, var och en märkt med sin fråga och sitt utförande. En stång med satellitmottagare som bärs runt i trädgården för frågan om mottagningen räcker under träden, ett plywoodchassi med spole och två motorer för frågan om bromssträckan vid gränsen, och en frigolitmodell i full storlek för frågan om maskinen kommer in under trädgårdsmöblerna. Bildtext: "Samma koncept, tre frågor, tre helt olika prototyper. Ingen av dem liknar den färdiga produkten."

## Instuderingsfrågor

1. Vad är en prototyp?
2. Varför formuleras frågan innan prototypen byggs?
3. Vad skiljer en utseendemodell från en funktionsmodell?
4. När är en delprototyp lämpligare än en fullständig prototyp?
5. Varför ska detaljnivån hållas så låg som frågan tillåter?
6. Ge två exempel på frågor som en prototyp inte kan besvara, och förklara varför.
7. En prototyp ska pröva bromssträckan vid gränsen. Vilka egenskaper måste stämma med den tänkta produkten, och vilka spelar ingen roll?
8. Varför blir dyra prototyper ett problem i utvecklingsarbetet?
9. Vad ska bestämmas innan prototypen provas, och varför?
10. Varför sparas och dokumenteras även de versioner som inte fungerade?
11. Varför är två enkla prototyper efter varandra ofta bättre än en avancerad?

## Övningar

1. **Fråga före bygge.** Välj ett koncept du eller din grupp arbetat fram, eller en vardaglig produkt du vill förbättra. Formulera tre frågor om konceptet som bara går att besvara genom att bygga något. Ange för varje fråga vilken sorts prototyp som skulle behövas, vad som måste vara verkligt i den och vad som får fuskas.

2. **Bygg en utseendemodell.** Bygg en modell i full storlek av ett handhållet föremål, till exempel en fjärrkontroll, en vattenflaska eller ett handtag, i kartong, frigolit eller trä. Låt minst tre personer hålla i den och notera vad var och en säger om storlek, grepp och balans. Redovisa modellen med foton och skriv vilka två ändringar du skulle göra efter provningen.

3. **Bygg en funktionsmodell.** Bygg en enkel modell som visar att en princip fungerar, till exempel en hiss med snöre och motor, en dörr som stängs av en vikt, eller en lampa som tänds när något passerar. Utseendet spelar ingen roll. Beskriv vilken fråga modellen svarar på, hur du mätte eller observerade svaret och vad svaret blev.

4. **Samma koncept, tre prototyper.** Utgå från ett väderskydd vid en busshållplats. Beskriv tre olika prototyper som skulle behövas för att besvara var sin av frågorna: syns hållplatsskylten från förarplatsen, blåser regn in under taket vid sidvind, och får en rullstol plats att vända innanför skyddet. Ange för varje prototyp material, storlek och vad som ska mätas eller observeras.

5. **Prototypens gränser.** Bygg eller beskriv en prototyp av en enkel lösning och skriv sedan två listor. Den första listar de frågor om lösningen som prototypen faktiskt kan besvara, den andra de frågor den inte kan besvara. Ange för minst tre punkter i den andra listan hur svaret i stället skulle kunna tas fram.
