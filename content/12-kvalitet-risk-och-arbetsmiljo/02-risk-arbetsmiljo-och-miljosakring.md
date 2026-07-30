---
id: "12.2"
chapter: 12
sectionNumber: 2
title: Risk, arbetsmiljö och miljösäkring
status: fardig-forsta-version
levels: [niva2]
curriculumReferences:
  niva1: []
  niva2: ["n2-06"]
learningGoals:
  - Genomföra en riskanalys med bedömning av sannolikhet och konsekvens samt
    föreslå riskreducerande åtgärder.
  - Beskriva hur systematiskt arbetsmiljöarbete bedrivs och identifiera
    arbetsmiljörisker i en teknisk miljö.
  - Förklara hur miljösäkring bedrivs och hur miljökrav påverkar tekniskt
    utvecklings- och produktionsarbete.
abilities: [f2, f4]
concepts_introduced: ["risk", "riskanalys", "riskmatris", "riskreducerande åtgärd", "åtgärdstrappa", "restrisk", "arbetsmiljö", "systematiskt arbetsmiljöarbete", "tillbud", "skyddsrond", "personlig skyddsutrustning", "miljösäkring", "substitutionsprincipen"]
concepts_used: ["projektrisk", "förebyggande åtgärd", "substitution", "avvikelse", "egenkontroll", "förbättringscykel", "kravspecifikation"]
figures: []
prerequisites: ["5.3", "11.2", "12.1"]
---

En pelarborrmaskin i en skolverkstad ser ofarlig ut. Den står stilla, den har en knapp, och den gör ett hål när någon drar ned spaken. Ändå är det den maskinen som oftast skadar någon i en verkstad, och skadorna följer ett mönster. Spån slungas mot ögonen. Ett arbetsstycke som inte är fastspänt rycks runt av borren och slår handen mot pelaren. En handske eller en hårlock fastnar i chucken och dras in.

Ingen av de tre händelserna är okänd. Alla tre går att räkna upp i förväg av den som har använt en borrmaskin, och det är just därför de går att göra något åt innan de inträffar.

En *risk* är möjligheten att något oönskat inträffar och orsakar skada på människor, miljö eller egendom. Ordet används också om projektets tidsplan, och de två betydelserna ska hållas isär. En [[begrepp:projektrisk]] hotar projektets mål, medan risken i det här avsnittet hotar den som utför arbetet, omgivningen eller utrustningen. Metoderna är besläktade, men det som står på spel är inte detsamma, och en åtgärd som räddar tidsplanen kan mycket väl öka risken för den som står vid maskinen.

## Genomföra riskanalys

En *riskanalys* är det systematiska arbetet att söka upp riskerna i en verksamhet, bedöma hur allvarliga de är och besluta vad som ska göras åt dem. Den görs i fyra steg, och stegen är desamma vare sig det gäller ett arbetsmoment i en verkstad, en ny maskin eller en byggarbetsplats.

**Först söks riskerna upp.** Arbetet delas i moment, och för varje moment ställs frågan vad som kan gå fel och vem som i så fall skadas. Frågan ställs till momentet och inte till verksamheten i stort, av samma skäl som i ett projekt: en konkret fråga ger konkreta svar. Underlaget hämtas från dem som utför arbetet, från maskinens instruktionsbok, från tidigare skador och från de händelser som nästan blev en skada.

**Sedan bedöms varje risk i två avseenden.** Hur sannolikt är det att händelsen inträffar, och hur allvarlig blir följden om den gör det. Båda bedöms på en skala, ofta i tre eller fem steg, och produkten av de två ger ett risktal som gör riskerna jämförbara. En *riskmatris* är den tabell där sannolikhet och konsekvens ställs mot varandra så att varje risk får en ruta och ett tal.

Bedömningen är en uppskattning och inte en mätning. Två personer kan hamna olika, och det är inte ett fel i metoden. Poängen med skalan är inte att träffa rätt tal utan att tvinga fram ett samtal om vilka risker som är värst, och det samtalet blir mycket mer träffsäkert än en känsla.

**Därefter beslutas åtgärder.** En *riskreducerande åtgärd* är något som minskar sannolikheten, konsekvensen eller båda. Den liknar den [[begrepp:förebyggande åtgärd]] som planeras i ett projekt, men skiljer sig på en avgörande punkt. Åtgärderna får inte väljas fritt, utan har en bestämd prioriteringsordning.

**Till sist kontrolleras att åtgärderna gjorde nytta.** Risken bedöms om efter att åtgärden är på plats, och det som blir kvar kallas *restrisk*. Restrisken är sällan noll, och det är inget nederlag. Det avgörande är att den är känd, att den är rimlig i förhållande till nyttan av arbetet och att den som utför arbetet vet om den.

**Ordningen mellan åtgärderna är bestämd.** En *åtgärdstrappa* är den prioriteringsordning som säger i vilken ordning riskreducerande åtgärder ska prövas, uppifrån och ned. Överst står att ta bort risken helt, genom att konstruera bort momentet eller välja en metod där faran inte finns. Därefter kommer att byta ut det farliga mot något mindre farligt. På tredje steget står tekniska skydd som byggs in i maskinen eller lokalen, alltså skärmar, utsug, nödstopp och skyddsräcken. På fjärde steget står organisatoriska åtgärder, alltså instruktioner, utbildning, rutiner och begränsad tillgång. Först på det sista steget står *personlig skyddsutrustning*, alltså den utrustning den enskilde bär på kroppen, till exempel skyddsglasögon, hörselskydd, handskar och skyddsskor.

Ordningen är inte en smaksak. Ett skydd som är inbyggt i maskinen fungerar för alla som använder den och kräver ingen disciplin, medan skyddsglasögon bara skyddar den som verkligen tar på sig dem varje gång. Ju längre ned på trappan åtgärden ligger, desto mer beror den på att en enskild person gör rätt vid varje tillfälle. Just därför är det ett vanligt och allvarligt misstag att börja i botten och dela ut skyddsutrustning i stället för att först fråga om faran går att ta bort.

[BILD 12.2-1] Innehåll: Åtgärdstrappan ritad som fem steg i en trappa som går nedåt från vänster till höger, i ordningen eliminera, ersätta, tekniska skydd, organisatoriska åtgärder och personlig skyddsutrustning. Vid varje steg ett kort exempel från en verkstad, alltså välja en metod utan borrning, byta lösningsmedel mot ett mindre farligt, spånskärm och nödstopp, instruktion och behörighet, samt skyddsglasögon. Längs trappan två motstående pilar, en märkt skyddet gäller alla och kräver ingen disciplin som pekar mot det översta steget, och en märkt skyddet beror på att varje person gör rätt varje gång som pekar mot det nedersta. Bildtext: "Åtgärder prövas uppifrån och ned. Personlig skyddsutrustning är sista steget, aldrig det första."

Ta borrmaskinen och gå igenom de tre riskerna. Sannolikheten och konsekvensen bedöms här i tre steg, där 1 är liten, 2 måttlig och 3 stor, och risktalet är produkten av de två. Ett risktal på 1 eller 2 antecknas och accepteras, 3 eller 4 ska åtgärdas när det går, och 6 eller 9 betyder att arbetet inte får utföras förrän en åtgärd är på plats.

Spån mot ögonen är vanligt, och sannolikheten sätts till 3. En ögonskada kan bli bestående, så konsekvensen sätts till 3. Risktalet blir 9, och arbetet får alltså inte utföras som det är. Åtgärden hämtas så högt i trappan som den går. Borrningen behövs, så risken går inte att eliminera, och det finns inget farligt ämne att byta ut. På tredje steget finns en spånskärm framför chucken, som är ett tekniskt skydd, och den kompletteras med skyddsglasögon från det sista steget. Med skärmen sjunker sannolikheten till 1, medan konsekvensen är oförändrad, och restrisken blir 3.

Ett arbetsstycke som rycks runt bedöms som möjligt, alltså sannolikhet 2, med en allvarlig följd om handen kläms, alltså konsekvens 3. Risktalet blir 6. Åtgärden är att spänna fast arbetsstycket i ett skruvstycke som i sin tur är fastskruvat i bordet, vilket är ett tekniskt skydd, tillsammans med en instruktion om att aldrig hålla arbetsstycket för hand. Sannolikheten sjunker till 1 och restrisken blir 3.

Handske eller hår som dras in bedöms också som möjligt, alltså sannolikhet 2, med en mycket allvarlig följd, alltså konsekvens 3, och risktalet blir 6. Här finns ingen teknisk lösning som skyddar, eftersom chucken måste rotera fritt. Åtgärden blir organisatorisk, nämligen förbud mot handskar vid roterande maskin och krav på uppsatt hår, förstärkt av att maskinen bara får användas av den som fått genomgången. Sannolikheten sjunker till 1 och restrisken blir 3.

Är resultatet rimligt? Alla tre riskerna hamnade på restrisken 3, och det beror på något som är värt att lägga märke till. Åtgärderna sänkte sannolikheten men lämnade konsekvensen orörd. Så ser det ut i de allra flesta riskanalyser, eftersom en hand som väl dras in i en chuck skadas lika illa oavsett vilka rutiner som gäller. Åtgärder som verkligen sänker konsekvensen är sällsynta och sitter högt i trappan, som att välja en metod där momentet inte behöver utföras alls. Det är också skälet till att den tredje risken är den svagaste av de tre trots samma risktal: dess åtgärd ligger på fjärde steget och vilar på att varje person gör rätt varje gång.

## Systematiskt arbetsmiljöarbete

*Arbetsmiljö* är allt som påverkar människan i arbetet. Det gäller det fysiska, alltså buller, belysning, damm, kemiska ämnen, tunga lyft och maskiner, men lika mycket det organisatoriska och sociala, alltså arbetsbelastning, arbetstider, tydlighet i uppdraget och hur människor behandlar varandra. De två hänger dessutom ihop. En stressad person tar genvägar vid maskinen, och genvägen är den fysiska risken.

Arbetsmiljön styrs i Sverige av arbetsmiljölagen, och Arbetsmiljöverket är den myndighet som utfärdar de närmare föreskrifterna och kontrollerar att de följs. Arbetsgivaren har huvudansvaret. Elever räknas i det här sammanhanget som arbetstagare, vilket innebär att skolans verkstäder och laborationssalar omfattas av samma regler som en arbetsplats.

*Systematiskt arbetsmiljöarbete* är att undersöka arbetsmiljön, bedöma riskerna, åtgärda det som behöver åtgärdas och kontrollera att åtgärderna fungerade, om och om igen. Igenkänningen är avsiktlig. Det är samma [[begrepp:förbättringscykel]] som driver kvalitetsarbetet, tillämpad på risker för människor i stället för på fel i produkter, och en verksamhet som har ett fungerande kvalitetsarbete har redan halva arbetssättet på plats.

**Undersökningen är återkommande, inte en engångsinsats.** En *skyddsrond* är en regelbunden genomgång av arbetsplatsen där arbetsgivaren och de anställda tillsammans går igenom lokaler, maskiner och arbetssätt och antecknar det som behöver åtgärdas. Anteckningen ska ange vad som ska göras, vem som ansvarar och när det ska vara klart, annars är den bara en iakttagelse.

Riskbedömning krävs dessutom varje gång något ändras. En ny maskin, ett nytt ämne, en ombyggd lokal eller ett nytt arbetssätt ska bedömas innan ändringen genomförs, inte efteråt. Skälet är detsamma som gör att fel kostar mindre ju tidigare de upptäcks: en risk som byggs in i en lokal går att konstruera bort på ritningen och blir dyr att bygga bort i efterhand.

**Tillbudet är arbetsmiljöarbetets viktigaste källa.** Ett *tillbud* är en händelse som kunde ha lett till skada men inte gjorde det. Nyckeln lossnar ur chucken och far förbi en axel. Någon halkar men tar emot sig. Ingen skadades, och just därför är tillbudet gratis information om en risk som är verklig. Sambandet är detsamma som mellan [[begrepp:avvikelse]] och fel i kvalitetsarbetet, och det gäller att tillbudet ska rapporteras och utredas fastän ingenting hände.

Det förutsätter samma sak som avvikelsen gör. Tillbud rapporteras bara på en arbetsplats där rapporten leder till en åtgärd och inte till en tillsägelse. Där tillbud tystnar syns riskerna först som skador, och då är informationen betald med någons hälsa.

Arbetstagarna utser dessutom ett skyddsombud, som företräder dem i arbetsmiljöfrågor och deltar i skyddsronder och riskbedömningar. Skyddsombudet har en befogenhet som är ovanlig i svensk arbetsrätt: bedöms ett arbete innebära omedelbar och allvarlig fara för liv eller hälsa får skyddsombudet avbryta arbetet i väntan på att Arbetsmiljöverket tar ställning. Rätten finns därför att den som ser faran ska kunna stoppa arbetet på plats, utan att först gå omvägen om ett beslut längre upp.

[BILD 12.2-2] Innehåll: Riskmatris i tre gånger tre rutor, med sannolikhet 1 till 3 på den vågräta axeln och konsekvens 1 till 3 på den lodräta. I varje ruta står risktalet, alltså produkten, och rutorna är tonade i tre nivåer efter talet, ljusast för 1 och 2, mellan för 3 och 4, mörkast för 6 och 9. Borrmaskinens tre risker är inritade som märkta punkter i sina rutor före åtgärd, med pilar till de rutor de hamnar i efter åtgärd. Alla tre pilarna går vågrätt åt vänster och ingen nedåt. Vid sidan om matrisen en förklaring av vad de tre nivåerna innebär i handling. Bildtext: "Åtgärderna flyttar riskerna åt vänster i matrisen, alltså mot lägre sannolikhet. Att flytta en risk nedåt, mot lindrigare konsekvens, är betydligt svårare."

## Miljösäkring

Vid Teckomatorp i Skåne tillverkade företaget BT Kemi bekämpningsmedel under 1960- och 1970-talen. Kemiskt avfall grävdes ned på fabriksområdet i tunnor, och när saken uppdagades på 1970-talet var mark och vattendrag förorenade. Verksamheten lades ned, men föroreningen blev kvar. Området har sanerats i flera omgångar under decennier, till en kostnad som vida överstiger vad det hade kostat att ta hand om avfallet när det uppstod.

*Miljösäkring* är att systematiskt förebygga att en verksamhet skadar miljön, på samma sätt som kvalitetssäkring förebygger att produkten blir fel. Arbetssättet är detsamma som i de två föregående delavsnitten. Verksamhetens påverkan kartläggs, det allvarliga prioriteras, åtgärder sätts in och resultatet följs upp.

**Påverkan kartläggs som flöden in och ut.** In i verksamheten går energi, vatten, material och kemiska produkter. Ut går produkten, men också avfall, utsläpp till luft och vatten, buller och restvärme. Varje utflöde är en möjlig miljöpåverkan, och varje inflöde är en möjlighet att minska den. Kartläggningen görs för hela [[begrepp:kravspecifikation]]ens giltighetstid och inte bara för tillverkningsögonblicket, eftersom en produkt påverkar miljön också när den används och när den blir avfall.

**Lagen sätter golvet.** Miljöbalken samlar den svenska miljölagstiftningen, och för miljöfarlig verksamhet krävs tillstånd eller anmälan innan verksamheten startar. Tillståndet anger villkor, till exempel hur mycket som får släppas ut och hur det ska mätas. Verksamhetsutövaren ska dessutom bedriva *egenkontroll*, alltså själv mäta, dokumentera och åtgärda, och redovisa resultatet för tillsynsmyndigheten. Begreppet är detsamma som i kvalitetskontrollen och innebär samma sak: den som utför arbetet kontrollerar det själv, i stället för att vänta på att någon annan upptäcker felet.

Många verksamheter arbetar dessutom efter ISO 14001, den internationella standarden för miljöledningssystem, som är miljöarbetets motsvarighet till ISO 9001. Även här gäller att certifikatet säger något om arbetssättet och ingenting om att den enskilda produkten är miljöanpassad.

**Det farliga byts ut när det går.** *Substitutionsprincipen* innebär att en farlig kemisk produkt ska ersättas med en mindre farlig när det är möjligt, och den är inskriven i miljöbalken. Ordet är detsamma som vid [[begrepp:substitution]] i materialvalet, och tankesättet är också detsamma, men här är bytet inte bara en möjlighet utan en skyldighet så snart ett rimligt alternativ finns. Principen ligger dessutom på andra steget i åtgärdstrappan, vilket gör den till ett av de få verktyg som samtidigt minskar risken för den som arbetar och belastningen på miljön.

Kemiska produkter regleras därutöver av EU:s kemikalielagstiftning, som ställer krav på att ämnen är undersökta och att de farligaste bara får användas efter särskilt tillstånd. Kemikalieinspektionen är den svenska myndigheten på området. För den som konstruerar innebär det att valet av ett ämne också är ett val av vilka krav produkten kommer att omfattas av.

**Miljökraven griper in i konstruktionen.** Det är här delavsnittet möter teknikutvecklingen. Kraven kommer inte som ett tillägg när produkten är färdig, utan styr valen på samma sätt som hållfasthet och kostnad gör.

Materialvalet avgör vad som kan återvinnas och vilka ämnen som följer med produkten genom hela dess liv. Energiförbrukningen under användning avgör ofta produktens största miljöpåverkan, vilket betyder att en produkt som används dagligen i tio år ska optimeras för driften och inte för tillverkningen. Konstruktionens demonterbarhet avgör om materialen går att skilja åt när produkten är förbrukad, och en limmad sammanfogning som spar två minuter i monteringen kan omöjliggöra all återvinning. Tillverkningsmetoden avgör utsläpp, avfall och kemikalieanvändning i fabriken.

Var och en av de fyra är ett konstruktionsbeslut och inget annat, och de fattas tidigt. Den som väntar med miljöfrågan tills produkten är konstruerad har kvar bara de dyra och verkningslösa åtgärderna, nämligen att rena ett utsläpp som hade kunnat undvikas och att ta hand om ett avfall som inte hade behövt uppstå. BT Kemi är samma insikt i sin mest kostsamma form.

[BILD 12.2-3] Innehåll: En verksamhet ritad som en ruta i mitten, märkt tillverkning. Från vänster går pilar in märkta energi, vatten, material och kemiska produkter. Åt höger går en pil ut märkt produkt. Nedåt och uppåt går pilar ut märkta avfall, utsläpp till luft, utsläpp till vatten och buller. Vid varje inflöde en liten symbol för ett konstruktionsbeslut som påverkar flödet, alltså materialval, metodval och ämnesval, och vid varje utflöde en symbol för det villkor eller krav som reglerar det. Under rutan en tidsaxel som fortsätter åt höger genom användning och avfallsled, för att visa att påverkan inte upphör vid fabriksporten. Bildtext: "Miljösäkringen börjar i flödena in och ut. De flesta av dem är bestämda redan när konstruktionen är klar."

## Instuderingsfrågor

1. Vad är en risk, och vad skiljer den från en projektrisk?
2. Ange de fyra stegen i en riskanalys.
3. Varför ställs frågan om vad som kan gå fel till ett enskilt arbetsmoment i stället för till verksamheten som helhet?
4. Vilka två storheter bedöms för varje risk, och hur bildas risktalet ur dem?
5. Varför är det inget fel i metoden att två personer bedömer samma risk olika?
6. Vad är en riskmatris, och vad används den till?
7. Ange åtgärdstrappans fem steg i rätt ordning.
8. Varför är ett inbyggt tekniskt skydd bättre än personlig skyddsutrustning, trots att båda kan skydda mot samma skada?
9. Vad är en restrisk, och varför är det inte ett misslyckande att den är större än noll?
10. Varför sänker de flesta riskreducerande åtgärder sannolikheten men inte konsekvensen?
11. Vad omfattar begreppet arbetsmiljö, och hur kan den organisatoriska arbetsmiljön ge upphov till en fysisk risk?
12. Varför ska en riskbedömning göras innan en ny maskin tas i bruk och inte efter?
13. Vad är ett tillbud, och varför är det värdefull information trots att ingen skadades?
14. Vad innebär miljösäkring, och vilka flöden kartläggs?
15. Vad innebär substitutionsprincipen, och varför räknas den som en särskilt verkningsfull åtgärd?

## Övningar

1. **Vilken sorts risk?** Avgör för vart och ett av dessa fall om det i första hand är en projektrisk eller en risk för människa, miljö eller egendom, och motivera på en mening: att en leverans av komponenter blir tre veckor försenad, att ett lösningsmedel avdunstar i ett rum utan utsug, att den enda i gruppen som kan använda svarven blir sjuk, att en provkörning kan skada den prototyp som ska redovisas, och att spillolja hälls i en golvbrunn. Ange därefter ett av fallen där de två sorterna hänger ihop, och förklara hur.

2. **Riskanalys av ett arbetsmoment.** En grupp ska kapa fyrkantrör i stål med en kapmaskin med roterande klinga och därefter slipa av graderna med en bänkslipmaskin. Identifiera minst fem risker i arbetet. Bedöm varje risk med sannolikhet och konsekvens på skalan 1 till 3 och räkna ut risktalet. Föreslå för varje risk med talet 4 eller högre en åtgärd, ange vilket steg i åtgärdstrappan åtgärden ligger på, och räkna om risktalet efter åtgärden. Redovisa alltihop i en tabell och ange vilken risk som blir kvar som störst restrisk.

3. **Placera åtgärderna i trappan.** Ett företag har bedömt att svetsröken i verkstaden är en allvarlig risk och föreslår sex åtgärder: att dela ut andningsskydd, att montera punktutsug vid varje svetsplats, att byta till en svetsmetod som ger mindre rök, att införa en rutin om att portarna ska stå öppna, att konstruera om detaljen så att fogen kan limmas i stället för svetsas, och att skriva in i instruktionen att ingen får vistas i lokalen utan behörighet. Ange vilket steg i åtgärdstrappan varje åtgärd ligger på. Rangordna dem därefter efter hur väl de skyddar, och motivera varför den svagaste är svag trots att den kan vara den billigaste.

4. **Riskbedöm ett eget moment.** Välj ett arbetsmoment du själv utför i skolans verkstad, i laborationssalen eller på en praktikplats. Gå igenom momentet steg för steg och skriv ned varje risk du hittar, tillsammans med sannolikhet, konsekvens och risktal. Föreslå en åtgärd för var och en, så högt i åtgärdstrappan som du kan komma. Fråga därefter den som ansvarar för lokalen vilka risker som redan är bedömda och åtgärdade, och skriv ned vad du hittade som inte fanns med och vad som fanns med som du hade missat.

5. **Miljökraven i en konstruktion.** Välj en tillverkad produkt du känner till, till exempel en elektrisk handmaskin, en cykelhjälm, en kaffebryggare eller en kontorsstol. Kartlägg vilka flöden in och ut som verksamheten har när produkten tillverkas och används. Ange därefter minst fyra konstruktionsbeslut som påverkar produktens miljöpåverkan, och för varje beslut i vilket skede det fattas och vad det låser fast. Avsluta med vilket av de fyra du bedömer som mest avgörande för produktens samlade påverkan, och varför.
