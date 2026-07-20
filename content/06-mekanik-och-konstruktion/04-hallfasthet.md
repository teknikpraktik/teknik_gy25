---
id: "6.4"
chapter: 6
sectionNumber: 4
title: Hållfasthet
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-09", "n1-10", "s-01"]
  niva2: ["n2-07", "s-01"]
learningGoals:
  - Identifiera drag, tryck, böjning, skjuvning, vridning och knäckning i
    verkliga konstruktioner.
  - Förklara begreppen spänning och töjning samt beräkna normalspänning i en
    belastad detalj.
  - Tolka en dragprovkurva och avläsa elasticitetsmodul, sträckgräns och
    brottgräns.
abilities: [f3]
concepts_introduced: ["belastning", "deformation", "elastisk deformation", "plastisk deformation", "brott", "böjning", "skjuvning", "vridning", "knäckning", "spänning", "töjning", "dragprov", "elasticitetsmodul", "sträckgräns", "brottgräns"]
concepts_used: ["kraft", "dragkraft", "tryckkraft", "moment"]
figures: ["fig-6.4.1-a", "fig-6.4.2-a", "fig-6.4.3-a"]
prerequisites: ["6.1", "6.2"]
---

## Belastningstyper

Gångbrons balk bär inte bara en tyngd, den bär den på ett bestämt sätt. En [[begrepp:dragkraft]] i en lyftkrans kätting sträcker materialet, en [[begrepp:tryckkraft]] i en pelare pressar samman det, och en trafikant som går över bron böjer balken något nedåt. Den samlade benämningen för de krafter och moment en konstruktion eller detalj utsätts för under användning är **belastning**. Hur en detalj klarar en given belastning avgör i sin tur dess hållfasthet, och det första steget mot att förstå hållfasthet är att skilja på hur en belastning kan verka.

All belastning ger upphov till någon grad av **deformation**, en förändring av föremålets form eller storlek. Är deformationen liten och materialet återgår helt till sin ursprungsform när belastningen tas bort kallas den **elastisk deformation**, som en gummiband som sträcks och sedan släpps. Blir belastningen tillräckligt stor kvarstår i stället en del av deformationen permanent även efter att belastningen tagits bort, vilket kallas **plastisk deformation**, som en böjd metallklädhängare som inte rätar ut sig igen. Fortsätter belastningen att öka bortom vad materialet tål till slut inträffar **brott**: materialet spricker eller separeras helt.

Utöver drag och tryck, som redan är bekanta som krafttyper, finns fyra ytterligare belastningssätt som är särskilt viktiga i tekniska konstruktioner:

**Böjning** uppstår när en konstruktionsdel, typiskt en balk, belastas vinkelrätt mot sin längdriktning så att den kröker sig. Balken dras isär på den ena sidan och trycks samman på den andra samtidigt: en gångbros balk som böjer sig under en cyklist är dragbelastad på undersidan och tryckbelastad på ovansidan. En linjal som läggs platt böjer sig lätt under en liten tyngd, men ställd på högkant, med samma tvärsnittsarea men annan form, klarar den en betydligt större tyngd innan den böjer lika mycket. Formen på tvärsnittet påverkar alltså böjmotståndet lika mycket som materialet gör, ett samband som nästa avsnitt utvecklar vidare.

**Skjuvning** uppstår när två motriktade krafter verkar parallellt med varandra men förskjutna i förhållande till varandra, som en sax som klipper genom papper eller en nit som håller ihop två plåtar. Materialet tvingas glida i skikt mot varandra längs ett snitt, i stället för att sträckas eller pressas samman rakt igenom.

**Vridning**, eller torsion, uppstår när ett moment vrider en detalj kring dess egen längdaxel, som en skruvmejsel som drar åt en skruv eller en drivaxel som överför kraft från en motor till ett hjul. Vridning är alltså samma sak som [[begrepp:moment]] från ett tidigare avsnitt, men verkande längs en axel i stället för kring en punkt i ett plan.

**Knäckning** är en plötslig sidoböjning hos en slank, tryckbelastad detalj, som en pelare eller en stång, som inträffar långt innan materialets rena tryckhållfasthet egentligen är nådd. En tunn, lång pelare knäcks lättare än en kort och tjock pelare av exakt samma material, eftersom knäckning beror på pelarens geometri och längd minst lika mycket som på materialet. Det är därför slanka stödben förstärks eller görs kortare i konstruktioner som ska bära tunga tryckkrafter.

Sprickor, hål och skarpa hörn är särskilt kritiska i alla dessa belastningsfall, eftersom belastningen då koncentreras kring den lokala formförändringen i stället för att fördelas jämnt över tvärsnittet. Det är därför hål i en konstruktionsdel ofta förses med rundade kanter och varför en liten spricka kan växa och till slut orsaka brott vid en belastning som materialet i övrigt klarar utan problem.

[[figur:fig-6.4.1-a]]

## Spänning och töjning

Två detaljer av samma material kan tåla helt olika stor kraft, om de har olika tjocklek. För att jämföra hur hårt belastat ett material faktiskt är, oavsett detaljens storlek, används **spänning**: kraften delad med den tvärsnittsarea kraften verkar över.

σ = F / A

där σ (den grekiska bokstaven sigma) är spänningen i pascal (Pa) eller, vanligare för konstruktionsmaterial, i newton per kvadratmillimeter (N/mm², vilket är samma sak som megapascal, MPa), F är kraften i newton och A är tvärsnittsarean i motsvarande enhet.

En stång med tvärsnittsarean 100 mm² belastas med dragkraften 20 000 N. Spänningen i stången blir

σ = F / A = 20 000 / 100 = 200 N/mm² = 200 MPa

Samma dragkraft på en stång med dubbelt så stor tvärsnittsarea, 200 mm², ger bara hälften så stor spänning, 100 MPa. Det är spänningen, inte kraften i sig, som avgör om materialet klarar belastningen eller inte, vilket är själva anledningen till att tvärsnittets storlek är en av de viktigaste sakerna en ingenjör bestämmer.

Spänningen i en detalj hänger nära ihop med hur mycket den töjs ut. **Töjning** är den relativa längdändringen hos en belastad detalj:

ε = ΔL / L₀

där ε (epsilon) är töjningen, ΔL är längdändringen och L₀ är ursprungslängden, båda i samma enhet så att töjningen blir ett rent tal, ofta angivet i procent. Stången ovan, ursprungligen 2000 mm lång, förlängs 1 mm under belastningen. Töjningen blir då

ε = ΔL / L₀ = 1 / 2000 = 0,0005 = 0,05 %

Spänning beskriver alltså hur hårt belastat materialet är, medan töjning beskriver hur mycket det faktiskt töjs ut till följd av den belastningen. Sambandet mellan de två är kärnan i nästa avsnitts dragprov.

[[figur:fig-6.4.2-a]]

## Dragprovet

För att ta reda på hur ett material faktiskt beter sig under belastning, i stället för att gissa, utsätts en standardiserad provstav för ett **dragprov**: provstaven spänns fast i en dragprovningsmaskin som drar isär den med långsamt ökande kraft, samtidigt som både kraften och förlängningen mäts kontinuerligt. Resultatet omvandlas till spänning och töjning enligt formlerna i föregående avsnitt och ritas upp som en dragprovkurva, ett diagram med töjning på den vågräta axeln och spänning på den lodräta.

Kurvan har en tydlig, återkommande form. I det första skedet är kurvan rak: spänningen ökar proportionellt mot töjningen, och provstaven återgår helt till sin ursprungslängd om belastningen tas bort. Detta är det elastiska området, och lutningen på den räta delen av kurvan kallas **elasticitetsmodulen**:

E = σ / ε

Elasticitetsmodulen, mätt i pascal, beskriver hur styvt materialet är: ett material med hög elasticitetsmodul, som stål, töjs mycket lite för en given spänning, medan ett material med låg elasticitetsmodul, som gummi, töjs desto mer för samma spänning. Stål har en elasticitetsmodul på ungefär 200 GPa, vilket är en av anledningarna till att det används där små deformationer under last är viktiga, som i broar och maskinramar.

Vid en viss spänning slutar kurvan att vara rak och böjer av: materialet har nått sin **sträckgräns**, den spänning där deformationen övergår från elastisk till plastisk. Belastas provstaven bortom sträckgränsen återgår den inte längre helt till sin ursprungslängd när kraften tas bort, utan behåller en bestående, plastisk deformation. Fortsätter belastningen att öka stiger kurvan vidare, ofta långsammare, fram till dess högsta punkt, provstavens **brottgräns**: den högsta spänning materialet klarar innan det brister. Strax därefter faller kurvan och provstaven går av.

De tre värdena, elasticitetsmodul, sträckgräns och brottgräns, tillsammans med det avlästa förloppet i övrigt, är precis den information en ingenjör behöver för att avgöra hur mycket ett material tål innan det först börjar deformeras permanent och sedan går sönder. Den informationen är utgångspunkten för kapitlets sista steg: att dimensionera en konstruktion så att den håller sig väl innanför de gränserna.

[[figur:fig-6.4.3-a]]

## Instuderingsfrågor

1. Förklara med egna ord skillnaden mellan elastisk och plastisk deformation, och ge ett eget exempel på vardera.
2. Vad är belastning, och hur skiljer sig begreppet från en enskild kraft?
3. Beskriv med egna ord vad som händer i en balk som böjs: vilken sida dras och vilken sida trycks?
4. Förklara skillnaden mellan skjuvning och vridning. Ge ett eget exempel på vardera.
5. Varför knäcks en tunn, lång pelare lättare än en kort och tjock pelare av samma material?
6. Varför är hål och skarpa hörn särskilt kritiska punkter i en belastad konstruktion?
7. Vad är spänning, och varför är det spänningen snarare än kraften som avgör om ett material håller?
8. En stång med tvärsnittsarean 50 mm² belastas med en dragkraft på 15 000 N. Beräkna spänningen i stången.
9. Förklara vad töjning beskriver, och varför den anges som ett förhållande utan enhet.
10. En balk som ursprungligen är 3000 mm lång töjs ut 1,5 mm under belastning. Beräkna töjningen, i procent.
11. Beskriv hur ett dragprov går till, och vad en dragprovkurva visar.
12. Vad avläses ur den räta, elastiska delen av dragprovkurvan, och vad säger ett högt värde på det om materialet?
13. Förklara med egna ord skillnaden mellan sträckgräns och brottgräns.
14. En provstav belastas till en spänning strax över sträckgränsen och avlastas därefter helt. Kommer provstaven att återgå till sin ursprungslängd? Motivera.
