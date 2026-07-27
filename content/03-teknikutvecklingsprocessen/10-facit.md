---
type: facit
chapter: 3
sectionNumber: 10
title: Facit
status: fardig-forsta-version
utanSvar:
  instuderingsfragor: []
  ovningar:
    - "3.1:1"
    - "3.1:2"
    - "3.1:4"
    - "3.1:5"
    - "3.2:3"
    - "3.2:4"
    - "3.3:1"
    - "3.3:2"
    - "3.3:3"
    - "3.3:4"
    - "3.3:5"
    - "3.4:1"
    - "3.4:4"
    - "3.4:5"
    - "3.5:1"
    - "3.5:2"
    - "3.5:3"
    - "3.5:5"
    - "3.6:1"
    - "3.6:2"
    - "3.6:3"
    - "3.6:4"
    - "3.6:5"
    - "3.6:6"
    - "3.7:1"
    - "3.7:2"
    - "3.7:3"
    - "3.7:4"
    - "3.7:5"
---

## 3.1 Teknikutvecklingsprocessen

### Instuderingsfrågor

1. Arbetet som tar en teknisk lösning från behov och problem hela vägen till användning och sluthantering. Den beskriver hur ett utvecklingsarbete faktiskt går till och ser i sina huvuddrag likadan ut oavsett vad resultatet blir.
2. Behovet och problemet ringar in vad som ska uppnås. Kraven anger vad lösningen måste klara. Idégenereringen tar fram flera lösningsförslag. Konceptarbetet gör de bästa idéerna till hela förslag och väljer ett. Prototypen prövar konceptet i verkligheten. Testet och utvärderingen jämför lösningen med kraven och väger den ur flera aspekter. Konstruktionen och tillverkningen ger varje detalj mått, material och tillverkningsmetod. Under användningen tillkommer underhåll, reservdelar och uppdateringar. I sluthanteringen tas produkten och materialet om hand.
3. Kraven är måttstocken som lösningen ska prövas mot. Väljs lösningen först blir kraven i praktiken skrivna efter den valda lösningen, och då kan de varken sålla bort dåliga förslag eller avgöra om resultatet duger.
4. Den svarar på frågor som ingen ritning kan svara på, alltså sådant som bara verkligheten kan avgöra, till exempel om maskinen klarar ojämnt underlag eller hittar tillbaka.
5. Ett varv i utvecklingsarbetet där det som lärs i ett senare steg leder tillbaka till ett tidigare.
6. Ett test som visar att en maskin inte upptäcker små djur leder tillbaka till kraven och konceptvalet, eftersom en maskin som ska upptäcka något utan att röra vid det behöver andra sensorer än en som känner av kollisioner.
7. Därför att allt fler beslut redan bygger på den detalj som ändras. En skiss kan ritas om på en eftermiddag, en färdig gjutform måste tillverkas på nytt, och en produkt som redan står hos kunderna måste hämtas in exemplar för exemplar.
8. Att arbetet var beroende av solljus. Med batteri och laddstation kunde maskinen arbeta oavsett väder och klara betydligt större ytor.
9. Kraven ändras, konceptet kan behöva bytas eftersom hinderavkänning utan beröring kräver andra sensorer, konstruktionen berörs och testerna måste göras om. Att bara justera den färdiga konstruktionen räcker inte, eftersom kollisionsavkänning bygger på att maskinen rör vid hindret och därför inte kan uppfylla det nya kravet hur den än trimmas.
10. När satellitpositionering blev tillräckligt exakt och billig kunde gränsen ritas virtuellt i stället för att grävas ner som kabel. Den gamla lösningen fungerade fortfarande, men den nya möjligheten öppnade en väg tillbaka till konceptfasen.
11. Därför att kostnaden och risken vid ett misslyckande skiljer sig kraftigt. En app kan ändras efter att den släppts, medan en tunnel inte kan byggas om, vilket gör att kraven och testerna måste vara färdiga innan bygget börjar.

### Övningar

3. Behovsfasen: mäta hur många cyklar som står vid hållplatsen i dag. Kravfasen: bestämma att taket ska klara snölast. Idéfasen: skissa fem olika ställningar. Konceptfasen: jämföra tre förslag mot varandra. Prototypfasen: bygga en modell i trä i full storlek. Test och utvärdering: ställa modellen utomhus en vinter och se hur den klarar sig. Tillverkning: beställa stål från leverantör. Användning och underhåll: byta lampor i taket efter tre år. Sluthantering: skrota ställningen och sortera stålet. De svåraste placeringarna är modellen i full storlek, som är en prototyp och inte en färdig produkt eftersom den byggs för att prövas, och vinterprovet, som är ett test av prototypen och inte en del av användningen.

## 3.2 Kravspecifikation

### Instuderingsfrågor

1. Den samlade skrivna listan över allt en lösning ska klara, med ett prövbart krav per rad. Den är den överenskommelse som beställare, konstruktörer och de som testar arbetar efter.
2. Ett krav ska uppfyllas och går att pröva. Ett önskemål gör lösningen bättre men får väljas bort när det krockar med annat.
3. Ett skallkrav måste vara uppfyllt, annars är lösningen underkänd. Ett börkrav uppfylls om det går och används sedan för att skilja bra lösningar från mindre bra. Utan skillnaden går det inte att avgöra vilka förslag som är ute och vilka som bara är sämre.
4. En storhet, ett värde och en riktning, alltså om värdet är ett högsta eller ett lägsta. Ofta behövs dessutom villkoret som gäller vid mätningen.
5. Därför att två personer kan vara oense om vad tyst betyder och ingen kan avgöra när kravet är uppfyllt. Ljudnivån får vara högst 60 dB(A) på tio meters avstånd går att kontrollera.
6. 25 centimeter per meter, alltså 0,25 meter höjdskillnad per meter i sidled.
7. Källan visar varför kravet finns och hur fast det är. Ett krav ur en lag eller standard går inte att förhandla bort, medan ett krav som bygger på en vana kan mjukas upp om det visar sig omöjligt. Ett krav utan källa blir en gissning som ingen vågar ta bort.
8. Lång körtid kräver ett stort batteri, medan låg vikt kräver ett litet. Kraven kan inte båda uppfyllas fullt ut, eftersom batteriets energimängd och dess massa hänger ihop.
9. Ett krav som pekar ut lösningen stänger andra vägar innan de vägts mot varandra. Kravet att maskinen ska hålla sig innanför en nedgrävd avgränsningskabel utesluter satellitpositionering, medan kravet att den ska hålla sig innanför gräsytans gräns med högst en halv meters avvikelse lämnar båda vägarna öppna och går fortfarande att pröva.
10. Delar som tas fram av olika grupper passar inte ihop, eftersom de bygger på olika värden. Felet upptäcks oftast när delarna ska sättas samman, och då är båda redan tillverkade.
11. Varje rad låser en frihet i konstruktionen. En mycket lång lista består till stor del av detaljer och beskriver då oftast den lösning som redan finns, i stället för vad den nya lösningen ska åstadkomma.

### Övningar

1. Kraven blir mätbara när en storhet, ett värde och en riktning skrivs ut, till exempel att cykelstället ska stå kvar utan att välta vid en vågrät kraft på 300 N i överkanten, att cykellampan ska lysa i minst fem timmar på full styrka, att ryggsäcken ska väga högst 900 gram tom, att appen ska visa startsidan inom två sekunder, att stolen ska tåla en last på 150 kg och att hörlurarna ska kunna bäras i minst två timmar utan tryckpunkter. Villkoren vid mätningen är till exempel batteriets laddningsnivå och omgivningens temperatur för lampan, telefonmodell och nätuppkoppling för appen, samt att stolen belastas i sittytans mitt.
2. Skallkrav: bromsarna ska uppfylla gällande säkerhetsregler, med lagstiftning eller standard som källa. Räckvidden på minst 30 kilometer, med skolans användning som källa. Att cykeln ska kunna låsas fast i ett vanligt cykelställ, med stöldrisken som källa. Att vikten är högst 25 kilo, med användarnas möjlighet att hantera cykeln som källa. Börkrav: att batteriet ska gå att byta utan verktyg, med underhållet som källa. Att cykeln ska ha korg, med användarnas önskemål som källa. Att ramen ska finnas i tre färger, med utseendet som källa och utan koppling till funktionen.
5. Krav som pekar ut lösningen är till exempel att kylväskan ska rymma två frysklampar, att den ska ha ett hölje av tio millimeter frigolit och att den ska ha ett lock med gummilist. Omskrivna beskriver de i stället vad som ska åstadkommas, till exempel att maten ska hållas under åtta grader i minst åtta timmar vid 25 graders utomhustemperatur, att behållaren ska väga högst två kilo tom och att den ska kunna öppnas och stängas med en hand. Lösningar som kan uppfylla den omskrivna listan är bland annat en isolerad väska med kylklampar och en behållare med vakuumisolering utan kylmedel.

## 3.3 Idégenerering

### Instuderingsfrågor

1. Arbetet med att medvetet ta fram många och olika lösningsförslag på ett avgränsat problem, innan något av dem värderas eller väljs.
2. Därför att den första idén som fungerar sällan är den bästa. Alla andra vägar förblir oprövade, och kostnaden för att pröva dem är låg jämfört med kostnaden för att välja fel lösning.
3. Den är avgränsad och pekar ut ett bestämt delproblem, som frågan hur maskinen kan veta var gräsmattan slutar. En bred fråga om hur något kan göras bättre ger inga svar.
4. Utan det tysta steget styr den som talar först och mest, och de förslag som avviker mest kommer sällan fram. När alla skriver först finns även de idéerna på papper när samtalet börjar.
5. Problemet delas i delproblem, alla lösningar som gruppen kommer på listas för varje delproblem, och sedan kombineras en lösning från varje del till ett helt förslag. Metoden ger många kombinationer, också sådana ingen tänkt ut i ett svep.
6. Delproblemen är att veta var maskinen befinner sig, att veta var gränsen går och att styra tillbaka innan den passeras. Positionen kan bestämmas med satellitmottagare eller genom att räkna hjulvarv, gränsen kan anges med en nedgrävd kabel, en karta i minnet eller en kamera som skiljer gräs från grus, och styrningen kan ske genom att maskinen vänder vid gränsen eller bromsar in i god tid före den.
7. Skapande och bedömande är två sorters tänkande som arbetar mot varandra. Bedömningen letar fel, och tidiga fel finns i varje ny idé, så halvfärdiga förslag hinner dö innan de formulerats klart. I en grupp där de första idéerna kritiseras slutar dessutom de flesta att föreslå något.
8. Ingen kritik under sessionen, för att förslagen ska hinna bli formulerade. Kvantitet före kvalitet, eftersom en lång lista nästan alltid rymmer bättre förslag än en kort. Bygg vidare på andras idéer, eftersom de bästa förslagen ofta är kombinationer. Allt skrivs upp synligt, eftersom idéer som inte skrivs ner försvinner. Bestämd tidsgräns, eftersom tempot i sig håller värderingen borta.
9. Förslag som bryter mot ett skallkrav läggs åt sidan, varianter av samma idé slås ihop, och några lovande förslag väljs ut att arbetas vidare med. Den riktiga jämförelsen görs senare, när förslagen vuxit till hela lösningar.
10. Därför att kravet kan visa sig vara en vana snarare än ett verkligt skallkrav. Kontrollen av kravets källa görs innan idén stryks.
11. Därför att en idé som inte skrivs ner försvinner ur gruppens minne, och därför att förslagen behöver finnas kvar när sorteringen börjar. Det vinnande förslaget är ofta en kombination av två som såg medelmåttiga ut var för sig.

## 3.4 Konceptutveckling

### Instuderingsfrågor

1. Ett sammanhängande lösningsförslag som beskriver funktion, utformning och tänkt användning så utförligt att det går att jämföra med andra förslag och pröva mot kraven.
2. Funktionen, alltså vad delarna gör och hur de samverkar. Utformningen, alltså huvudmått, form, material och var delarna sitter. Den tänkta användningen, alltså vem som använder lösningen, hur den installeras och vad som krävs av underhåll.
3. Därför att en idé på en rad varken går att bygga efter, prissätta eller jämföra med något annat. Den måste beskrivas tillräckligt för att någon ska kunna invända mot den.
4. Annars vinner det förslag som beskrivits utförligast, oavsett vilket som är tekniskt bäst. Det är då beskrivningen som jämförs och inte lösningarna.
5. En uppställning med kriterier som rader och koncept som kolumner, där varje koncept får ett betyg på varje kriterium så att grunderna för valet blir synliga.
6. Därför att kriterierna inte betyder lika mycket. Utan viktning avgörs valet av hur många kriterier som råkar handla om samma sak.
7. Ett koncept som bryter mot ett skallkrav är redan underkänt. Ger man det ett lågt betyg i stället för att stryka det kan en underkänd lösning vinna på poäng från andra kriterier.
8. 12 poäng.
9. Skillnaden är för liten för att avgöra valet, eftersom den kan bero på hur betygen råkade sättas. Koncepten bör betraktas som likvärdiga och beslutet fattas på annat sätt, till exempel genom att bygga prototyper av båda.
10. Därför att betygen är bedömningar och inte mätningar. Skiljer sig två bedömningar kraftigt åt beror det oftast på att kriteriet är otydligt formulerat, och det upptäcks bara om bedömningarna görs oberoende av varandra.
11. Därför att valet ska gå att förstå i efterhand och att göra om när förutsättningarna ändras. Blir en teknik billigare eller noggrannare räcker det att ändra de betyg som berörs, och då syns exakt vad som förändrats.

### Övningar

2. Koncept A får 5·3 + 2·3 + 3·2 + 4·1 + 2·1 = 33 poäng. Koncept B får 3·3 + 4·3 + 4·2 + 3·1 + 4·1 = 36 poäng. Koncept C får 4·3 + 3·3 + 2·2 + 5·1 + 4·1 = 34 poäng. Ordningen blir B, C, A, och 2 poäng skiljer första och andra plats.
3. Med byggkostnadens vikt 5 blir resultatet A 37, B 44 och C 40 poäng. Med underhållets vikt 4 och byggkostnaden åter 3 blir resultatet A 39, B 44 och C 38 poäng. B vinner i samtliga tre uppställningar och är därmed mest robust mot ändrade vikter, medan A och C byter plats med varandra. Valet av B står sig alltså oavsett hur tungt kostnaden och underhållet värderas, medan andraplatsen inte går att avgöra.

## 3.5 Prototyper

### Instuderingsfrågor

1. En fysisk eller körbar version av ett koncept, byggd för att svara på en bestämd fråga.
2. Därför att frågan avgör vad prototypen ska vara och hur den ska byggas. Den som börjar bygga utan fråga tillverkar en liten variant av produkten och lär sig inget bestämt av den.
3. Utseendemodellen visar form, storlek och proportioner utan att fungera. Funktionsmodellen fungerar men ser oftast inte ut som något, med komponenterna löst monterade och kablarna synliga.
4. När bara en enskild funktion är osäker. Då prövas den för sig, snabbare och billigare, medan den fullständiga prototypen sparas till dess att delarna var för sig är prövade.
5. Därför att en enklare prototyp ger svaret tidigare och till lägre kostnad. En dyr prototyp tenderar dessutom att försvaras i stället för att prövas.
6. Vad produkten kostar i serietillverkning och hur den håller efter flera år. Det första avgörs av tillverkningsmetod och volym, som inte finns i ett handbyggt exemplar, och det andra kräver lång tids användning eller särskild slitageprovning.
7. Hastigheten, vikten och underlaget måste stämma, eftersom de avgör bromssträckan. Höljet, färgen, batteritiden och utseendet spelar ingen roll för den frågan.
8. Kostnaden gör att de byggs sent och ändras ogärna, och därmed förlorar prototypen sin uppgift. En prototyp ska kunna kasseras när den gett sitt svar.
9. Vad som ska observeras eller mätas. Utan det bestämt i förväg blir resultatet en känsla av att det gick ganska bra, i stället för ett svar på frågan.
10. Därför att anteckningarna gör varje bygge till ett steg i en iteration i stället för en fristående händelse. Utan dem prövas samma misslyckade lösning igen ett halvår senare.
11. Därför att den första prototypen nästan alltid ändrar frågan. Två enkla bygg efter varandra ger både svaret och möjligheten att pröva det ändrade förslaget, medan ett avancerat bygge låser fast arbetet under lång tid.

### Övningar

4. För frågan om hållplatsskylten syns från förarplatsen räcker en skylt i rätt storlek uppsatt på rätt höjd, till exempel på en stång eller en byggställning, som betraktas från en buss eller från motsvarande ögonhöjd på det avstånd föraren har. Det som mäts är på vilket avstånd skylten går att läsa. För frågan om regn blåser in under taket byggs ett tak i rätt lutning och på rätt höjd i en enkel ram, och det provas med vattenstråle från sidan eller vid verkligt regn med sidvind. Det som mäts är hur stor del av ytan under taket som blir blöt. För frågan om en rullstol får plats att vända räcker en markering av skyddets innermått på marken, med tejp eller käppar, och en verklig rullstol som körs runt. Det som observeras är om vändningen går att göra utan att någon del av markeringen passeras. Ingen av de tre prototyperna behöver vara ett helt väderskydd.

## 3.6 Testning och utvärdering

### Instuderingsfrågor

1. Vilket krav som prövas, hur provningen går till, under vilka förhållanden den sker, hur många gånger den upprepas och vad som räknas som godkänt.
2. Det värde som skiljer godkänt från underkänt. Sätts den efteråt anpassas den nästan alltid till det resultat man fick, och provningen bekräftar då bara det man ville tro.
3. Därför att tekniska lösningar varierar mellan gånger. En maskin som klarar provet en gång kan misslyckas nästa, och ett enda försök visar inte vilket av utfallen som är det vanliga.
4. Därför att villkoren avgör vad resultatet är värt. Ett bromsprov på torrt, nyklippt gräs säger lite om hur maskinen uppför sig en blöt höstmorgon.
5. Kravet är ett skallkrav ur en säkerhetsstandard, och ett skallkrav är antingen uppfyllt eller inte. En avvikelse räcker för att lösningen ska vara underkänd.
6. Testet prövar en sak i taget mot ett bestämt krav och svarar godkänt eller underkänt. Utvärderingen väger hela lösningen ur flera aspekter samtidigt och besvarar frågan om lösningen bör användas.
7. Funktion, alltså om lösningen gör det den ska, hur väl och för vem. Kostnad, alltså inköp, drift, underhåll och sluthantering. Säkerhet, alltså vem som kan skadas, vad som händer när en del går sönder och vad som händer vid felanvändning. Hållbar utveckling, alltså energi, material, livslängd, reparerbarhet och påverkan på omgivningen.
8. Därför att el, reservdelar, service, arbetstid och sluthantering tillkommer under hela användningstiden. En billig produkt med dyra reservdelar kan bli den dyra lösningen efter några år.
9. Ett val mellan krav eller egenskaper där mer av det ena innebär mindre av det andra. Att sänka hastigheten och lägga till sensorer förbättrar säkerheten men minskar klippt yta per timme och höjer priset.
10. Att kraven bara skyddar det någon tänkt på. Standardens krav gällde människor, inte små djur, och utvärderingen är det steg där en sådan brist kan upptäckas innan verkligheten upptäcker den.
11. Den underliggande orsak som, om den tas bort, gör att felet inte återkommer.
12. En symptomåtgärd döljer felet utan att ta bort orsaken, som en varningstext om att maskinen inte får lyftas med gräsklipp under kåpan. En grundorsaksåtgärd tar bort orsaken, som att bromsa knivskivan aktivt i stället för att lita på friktionen i axeln.
13. När svaret har blivit något som faktiskt går att göra något åt. Kommer man till att människor gör misstag eller att budgeten är för liten har man gått ett steg för långt, eftersom sådana svar inte pekar på någon åtgärd.
14. Med samma testplan blir resultaten jämförbara med de tidigare. Dessutom kontrolleras att åtgärden inte skadat något annat, till exempel att en aktiv broms inte sliter för hårt på motorn.

## 3.7 Produktens livscykel

### Instuderingsfrågor

1. Alla faser produkten genomgår, från utvinningen av råvaror till att den tas ur bruk och materialet tas om hand.
2. Råvaruutvinning, där material bryts eller utvinns. Materialtillverkning, där råvaran förädlas. Tillverkning av produkten, där delarna görs och monteras. Distribution, där produkten fraktas till användaren. Användning med underhåll, där energi tillförs och slitdelar byts. Sluthantering, där produkten tas ur bruk och materialet tas om hand.
3. Därför att materialen i produkten bär med sig den påverkan som uppstod när de togs fram. Utan den fasen syns bara en del av vad produkten kostar miljön.
4. Batteriet innehåller värdefulla metaller som går att ta till vara, och skadade litiumbatterier kan börja brinna om de hamnar bland annat avfall.
5. Bensinklipparen förbränner bränsle varje gång den används, medan den eldrivna maskinen bara laddar ett batteri. För den eldrivna maskinen står i stället tillverkningen av batteri och elektronik för en stor del av påverkan.
6. Livslängden. Varje extra år fördelar tillverkningens påverkan på fler använda timmar, vilket sänker påverkan per nytta.
7. En systematisk sammanställning av produktens miljöpåverkan genom alla faser, oftast redovisad som utsläpp av växthusgaser, energianvändning och materialåtgång. Två analyser kan ge olika svar eftersom systemgränsen, den antagna livslängden och den antagna elproduktionen påverkar resultatet kraftigt.
8. Måttet på hur enkelt en produkt går att ta isär i sina delar, vilket avgör vad som går att laga och vad som går att återvinna.
9. Färre olika material i samma detalj gör sorteringen enklare. Skruv och öppningsbara snäppfästen i stället för lim och svetsade fogar gör att delarna går att skilja åt utan att förstöras. Märkning av plastsorten på insidan av varje detalj gör att delen hamnar i rätt ström vid sorteringen.
10. Därför att resten av maskinen inte går att använda utan sitt hölje, hur hel elektroniken än är. En detalj som inte går att byta drar med sig hela produkten.
11. Lim är lättare, billigare och tätare, men det stänger dörren för både reparation och materialsortering. Skruvförbandet väger och kostar mer men gör produkten öppningsbar.
12. Batteriet måste bli en utbytbar modul i stället för en inlimmad del, och tätningen måste utformas så att den går att öppna och stänga igen, till exempel med ett skruvat lock med packning.
