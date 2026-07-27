---
id: "3.2"
chapter: 3
sectionNumber: 2
title: Kravspecifikation
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-01"]
  niva2: []
learningGoals:
  - Skilja mellan behov, krav och önskemål och förklara varför mätbara krav
    behövs.
  - Upprätta en kravspecifikation med mätbara krav för en produkt eller tjänst.
abilities: [f1]
concepts_introduced: ["kravspecifikation", "önskemål", "skallkrav", "börkrav"]
concepts_used: ["behov", "krav"]
figures: []
prerequisites: ["3.1"]
---

## Behov, krav och önskemål

På produktbladet till en robotgräsklippare står klippyta, största lutning, klippbredd, ljudnivå och batteritid. Raderna ser ut som ren produktinformation, men varje rad är ett beslut som någon fattade långt innan den första maskinen fanns.

Ett [[begrepp:behov]] är brett och går sällan att mäta. En klippt gräsmatta utan arbete är ett behov, inte något en konstruktör kan arbeta efter. Ett [[begrepp:krav]] är översättningen av behovet till något som går att avgöra: maskinen ska klara en gräsmatta på 1000 kvadratmeter. Mellan dessa två finns en tredje sorts uppgift. Ett *önskemål* är något som gör lösningen bättre men som får stryka på foten när det krockar med annat. Att maskinen ska vara tystare än konkurrenternas är ett önskemål. Att knivarna ska stanna när den lyfts är det inte.

Skillnaden är så viktig att den skrivs ut. Ett *skallkrav* måste vara uppfyllt, annars är lösningen underkänd oavsett hur bra den är i övrigt. Ett *börkrav* uppfylls om det går, och används sedan för att skilja bra lösningar från mindre bra. Säkerhetsstandarden för robotgräsklippare ger skallkrav som ingen tillverkare förhandlar om, som att knivarna ska stanna när maskinen lyfts och att den ska ha hinderavkänning i alla körriktningar när knivarna går. Att maskinen ska väga under nio kilo så att en person kan bära ut den är däremot ett börkrav som tillverkaren själv sätter.

Ett krav gör nytta först när det går att avgöra om det är uppfyllt, och i kravspecifikationen skärps det till en fråga om storhet och värde. Maskinen ska vara tyst säger ingenting. Ljudnivån får vara högst 60 dB(A) uppmätt på tio meters avstånd säger något som två personer kan kontrollera och bli överens om. Ska klara sluttningar säger ingenting. Ska klara 25 procents lutning, alltså 25 centimeters höjdskillnad per meter, går att pröva i en slänt. Ett mätbart krav har därför tre delar: en storhet, ett värde och en riktning, alltså om värdet är ett högsta eller ett lägsta. Ofta behövs också villkoret som gäller vid mätningen, till exempel fulladdat batteri eller torrt gräs.

[BILD 3.2-1] Innehåll: En tratt som visar översättningen från behov till krav. Överst det breda behovet "en klippt gräsmatta utan arbetet". I mitten tre skallkrav och två börkrav, var och en skriven med storhet, värde och riktning, till exempel "klippyta minst 1000 m²" och "ljudnivå högst 60 dB(A) på 10 m". Längst ner en pil vidare mot idéer och koncept. Skallkraven och börkraven är tydligt märkta med varsin symbol. Bildtext: "Behovet är brett och omätbart. Kraven är översättningen som konstruktören kan arbeta efter."

Krav drar ofta åt olika håll. Lång körtid vill ha ett stort batteri, medan låg vikt och skonsamhet mot gräsmattan vill ha ett litet. Barnsäkerhet vill ha låg hastighet, medan stor klippyta vill ha hög. Sådana motsättningar försvinner inte av att de förblir oskrivna. De dyker i stället upp mitt i konstruktionsarbetet, när det redan är dyrt att ändra. Kravarbetet tvingar fram avvägningarna medan de fortfarande bara kostar tid.

## Upprätta kravspecifikation

En *kravspecifikation* är den samlade, skrivna listan över allt en lösning ska klara, med ett prövbart krav per rad. Den är utvecklingsarbetets överenskommelse. Beställare, konstruktörer, inköpare och de som ska testa lösningen läser samma dokument och menar samma sak med det.

Varje rad behöver fyra saker. Ett nummer, så att kravet går att hänvisa till. En formulering med storhet och värde. En markering av om kravet är ett skallkrav eller ett börkrav. Och en källa, alltså varför kravet finns. Källan är den del som oftast glöms och som betyder mest längre fram. Ett krav som kommer ur en lag eller en standard kan inte förhandlas bort. Ett krav som kommer ur en användares vana kan mjukas upp om det visar sig omöjligt. Ett krav utan källa blir en gissning som ingen vågar ta bort, och sådana gissningar följer med genom hela utvecklingsarbetet.

Så här kan det se ut när en skola vill hålla gräsytan bakom idrottshallen klippt med en robotgräsklippare. Behovet är enkelt att formulera och omöjligt att arbeta efter, så det bryts ner. Krav 1: maskinen ska klippa hela ytan på 1200 kvadratmeter inom fem dygn, skallkrav, källa gräsets tillväxt under sommaren. Krav 2: den ska klara 20 procents lutning, skallkrav, källa slänten ner mot cykelvägen. Krav 3: knivarna ska stanna inom en sekund när maskinen lyfts, skallkrav, källa säkerhetsstandarden. Krav 4: den ska gå att stoppa och starta av vaktmästaren utan verktyg och skyddas med kod, skallkrav, källa skolans drift. Krav 5: ljudnivån får vara högst 60 dB(A) på tio meters avstånd, skallkrav, källa bostadshusen på andra sidan vägen. Krav 6: maskinen bör klara att arbeta i regn, börkrav, källa klippfönstret under en blöt sommar. Krav 7: reservdelar bör finnas tillgängliga i minst tio år, börkrav, källa skolans budget för utbyten.

[BILD 3.2-2] Innehåll: Kravspecifikationen för skolans gräsyta uppställd som tabell med fem kolumner: nummer, krav, storhet och värde, skall eller bör, samt källa. Sju rader enligt texten, där skallkraven och börkraven skiljs åt visuellt. Under tabellen en rad som visar att varje krav senare hänvisas till med sitt nummer när lösningen prövas. Bildtext: "En kravspecifikation är utvecklingsarbetets överenskommelse. Numret gör varje krav möjligt att hänvisa till."

Ett krav ska beskriva vad lösningen ska åstadkomma, inte hur. Skrivs kravet som att maskinen ska hålla sig innanför en nedgrävd avgränsningskabel, är konceptvalet redan gjort, och lösningar som håller reda på gränsen med satellitpositionering är utestängda innan någon hunnit väga dem mot varandra. Skrivs kravet i stället som att maskinen ska hålla sig innanför gräsytans gräns med högst en halv meters avvikelse, står alla vägar öppna och kravet går fortfarande att pröva.

Antalet krav spelar också roll. Varje rad låser en frihet, och en kravspecifikation som svällt till tvåhundra rader beskriver oftast den lösning som redan finns. Den som märker att listan mest består av detaljer bör gå tillbaka till behovet och fråga vilka rader som verkligen avgör om lösningen duger.

Kravspecifikationen är slutligen ett levande dokument. När ett test visar att ett krav inte går att uppfylla, eller när en ny möjlighet gör ett gammalt krav onödigt, ändras listan och alla inblandade behöver veta om det. Ett utvecklingsarbete där två grupper arbetar efter olika versioner av kraven producerar delar som inte passar ihop, och det upptäcks nästan alltid för sent.

## Instuderingsfrågor

1. Vad är en kravspecifikation?
2. Vad skiljer ett krav från ett önskemål?
3. Vad menas med skallkrav respektive börkrav, och varför skiljer man på dem?
4. Vilka tre delar behöver ett mätbart krav?
5. Varför räcker det inte att skriva att en maskin ska vara tyst?
6. Ett krav lyder att maskinen ska klara 25 procents lutning. Hur stor höjdskillnad per meter motsvarar det?
7. Varför anges källan till varje krav?
8. Ge ett exempel på två krav som drar åt olika håll och förklara varför de gör det.
9. Varför ska ett krav beskriva vad lösningen ska åstadkomma och inte hur? Ge ett exempel på ett krav som låser lösningen.
10. Vad kan hända om två arbetsgrupper arbetar efter olika versioner av kravspecifikationen?
11. Varför blir en kravspecifikation sämre av att växa till mycket långa listor?

## Övningar

1. **Gör kraven mätbara.** Skriv om vart och ett av följande krav så att det blir mätbart, med storhet, värde och riktning: cykelstället ska vara stabilt, cykellampan ska lysa länge, ryggsäcken ska vara lätt, appen ska starta snabbt, stolen ska tåla mycket, hörlurarna ska sitta bekvämt. Ange för varje omskrivet krav vilket villkor som måste gälla vid mätningen, till exempel temperatur, laddningsnivå eller belastning.

2. **Skall eller bör.** En elcykel ska tas fram för utlåning på en skola. Sortera följande krav i skallkrav och börkrav och motivera varje placering med en källa: bromsarna ska uppfylla gällande säkerhetsregler, cykeln ska ha en räckvidd på minst 30 kilometer, ramen ska finnas i tre färger, cykeln ska kunna låsas fast i ett vanligt cykelställ, batteriet ska gå att byta utan verktyg, vikten ska vara högst 25 kilo, cykeln ska ha korg.

3. **Läs kraven i en verklig produkt.** Ta fram bruksanvisningen eller produktbladet till en apparat du har hemma. Plocka ut minst fem uppgifter som i praktiken är mätbara krav och skriv dem med storhet, värde och riktning. Ange för varje krav om det troligen kommer från en lag eller standard, från användaren eller från tillverkaren själv, och motivera din bedömning.

4. **Upprätta en kravspecifikation.** Välj ett verkligt behov i din skola eller ditt bostadsområde, till exempel väderskydd vid en entré, laddplatser i ett uppehållsrum eller belysning på en mörk gångväg. Upprätta en kravspecifikation med minst åtta krav, varav minst två börkrav. Varje rad ska ha nummer, formulering med storhet och värde, markering skall eller bör, samt källa. Låt sedan en klasskamrat granska listan och stryka under varje krav som inte går att pröva. Redovisa den granskade listan tillsammans med de ändringar du gjorde efter granskningen.

5. **Krav som låser lösningen.** Utgå från behovet att hålla mat kall under en heldagsutflykt. Skriv först tre krav som var och en pekar ut en bestämd lösning, till exempel en viss sorts behållare eller kylmedel. Skriv sedan om alla tre så att de beskriver vad lösningen ska åstadkomma, utan att nämna någon lösning. Ange minst två olika tekniska lösningar som skulle kunna uppfylla den omskrivna listan.
