---
id: "5.3"
chapter: 5
sectionNumber: 3
title: Materialval
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-02"]
  niva2: []
learningGoals:
  - Välja material till en given konstruktion utifrån krav och motivera valet som
    en avvägning mellan egenskaper, kostnad och hållbarhet.
abilities: [f3]
concepts_introduced: ["materialval", "substitution"]
concepts_used: ["hållfasthet", "styvhet", "utmattning", "densitet", "korrosion", "krav", "skallkrav", "avvägning", "beslutsmatris"]
figures: []
prerequisites: ["5.2"]
---

Frågan om vilken av de tre cykelramarna som är bäst har inget svar. Stålramen är bäst för den som cyklar året om och vill kunna laga ramen om den skadas. Aluminiumramen är bäst för den som vill ha en lätt cykel till ett rimligt pris. Kolfiberramen är bäst för den som tävlar och kan betala tio gånger så mycket. *Materialval* är arbetet med att hitta det material som bäst uppfyller en bestämd konstruktions krav, och svaret ändras när kraven ändras.

Arbetet går i fem steg, och det första är att veta vad detaljen ska klara. Kraven finns redan formulerade i kravspecifikationen, och materialvalet lägger inte till några nya utan översätter dem.

Översättningen är det avgörande steget och den del som kräver mest kunnande. Kravet att ramen inte ska kännas svajig när cyklisten trampar hårt är ett krav på *styvhet*. Kravet att den ska hålla för tio års daglig pendling är ett krav på *utmattning*, och i vinterväglag också på motstånd mot *korrosion*. Kravet att den ska gå att laga på en vanlig verkstad handlar om materialet går att svetsa. Kravet att cykeln ska väga under tolv kilo är ett krav på *densitet* i förhållande till *hållfasthet*. Ett krav som inte går att översätta till en materialegenskap kan inte heller avgöra ett materialval.

Därefter sållas de material bort som inte klarar ett *skallkrav*. Sållningen är hård och snabb, och den ska göras före jämförelsen. Ska ramen kunna lagas med svets faller kolfiber bort direkt, oavsett hur bra den är i övrigt. Här är det värt att kontrollera att skallkravet verkligen är ett skallkrav, eftersom ett felaktigt sådant tyst utesluter hela materialgrupper.

Först nu jämförs de material som är kvar, och bara på de egenskaper som skiljer dem åt. Egenskaper där alla kandidater klarar sig med marginal tillför ingenting till jämförelsen. Är kandidaterna fler än två eller kriterierna fler än ett par lönar det sig att ställa upp dem i en beslutsmatris med viktade kriterier, på samma sätt som när koncept jämförs.

Sist vägs det in som inte står i materialtabellen. Kostnaden är den tyngsta av dessa, och den är inte materialpriset per kilo. Det som räknas är vad den färdiga detaljen kostar, alltså materialet plus tillverkningen, efterbearbetningen och spillet. Ett dyrare material kan ge en billigare detalj om det går snabbare att bearbeta eller kräver färre steg. Kolfiberramens pris beror till största delen på att den byggs upp och härdas i en form under lång tid med mycket handarbete, inte på att fibern i sig skulle vara tio gånger dyrare än aluminium.

Tillgången spelar också in. Material köps i standardsortiment, och en dimension som finns i lager kan levereras i morgon medan en specialdimension tar veckor och kostar därefter. Att anpassa konstruktionen till en dimension som redan finns är ofta det billigaste beslut som fattas under hela arbetet.

Hållbarheten är den fjärde delen av *avvägning*en. Hur mycket energi kostar det att framställa materialet, hur länge håller detaljen, går den att laga och vad händer med den till sist? En lätt konstruktion i ett energikrävande material kan ändå vara det bättre valet om den sitter i något som transporteras varje dag, och tvärtom.

[BILD 5.3-1] Innehåll: En tratt i fem steg för materialvalet till cykelramen. Överst kraven i klartext, därunder samma krav översatta till materialegenskaper, sedan sållningen där kandidater som bryter mot ett skallkrav stryks, därefter jämförelsen mellan de återstående i en liten beslutsmatris, och längst ner det motiverade valet. Vid sållningssteget visas hur kravet på svetsbarhet stryker kolfiber. Bildtext: "Kraven översätts till egenskaper, kandidater som bryter mot ett skallkrav stryks, och först därefter jämförs de som är kvar."

Valet ska slutligen skrivas ned. En motivering anger vilka krav som styrde, vilka material som prövades, varför de bortsållade föll och vilka värden jämförelsen byggde på, med källa. Utan den motiveringen är materialvalet omöjligt att granska och ännu svårare att göra om när ett krav ändras.

Ibland ändras förutsättningarna för en produkt som redan finns. *Substitution* är att byta ut ett material mot ett annat i en befintlig konstruktion, och drivkraften kan vara pris, vikt, tillgång eller lagstiftning. EU:s regler om farliga ämnen i elektronik tvingade från 2006 fram ett av de största materialbytena i modern tid, när blyet försvann ur lödtennet i praktiskt taget all elektronik. Bytet visade också vad en substitution innebär. Den blyfria lödningen smälter vid högre temperatur, vilket ställde nya krav på både komponenter och kretskort. Ett material som byts ut i ett avseende måste därför prövas i alla, inte bara i det som drev bytet.

[BILD 5.3-2] Innehåll: Kostnaden för en färdig detalj uppdelad i staplar för två material, där staplarna delas i material, tillverkning, efterbearbetning och spill. Det dyrare materialet har en högre materialdel men klart lägre tillverknings- och efterbearbetningsdel, så att den totala stapeln blir lägre. Bildtext: "Priset per kilo avgör sällan. Det som räknas är vad den färdiga detaljen kostar."

## Instuderingsfrågor

1. Vad menas med materialval, och varför har frågan om det bästa materialet inget allmänt svar?
2. Vilka fem steg går ett materialval igenom?
3. Varför är översättningen från krav till materialegenskap det avgörande steget?
4. Översätt följande krav till materialegenskaper: att en detalj inte ska ge efter under last, att den ska hålla för miljontals lastväxlingar och att den ska tåla saltvatten.
5. Varför sållas material som bryter mot ett skallkrav bort före jämförelsen?
6. Varför bör ett skallkrav kontrolleras innan det används för att sålla?
7. Varför jämförs bara de egenskaper som skiljer kandidaterna åt?
8. Varför är materialpriset per kilo ett dåligt mått på vad ett materialval kostar?
9. Varför är en kolfiberram så mycket dyrare än en aluminiumram?
10. Hur kan tillgången på material påverka konstruktionen?
11. Vad ska en skriven motivering till ett materialval innehålla?
12. Vad är substitution, och vad kan driva fram en sådan?
13. Vad visade övergången till blyfri lödning om vad en substitution kräver?

## Övningar

1. **Översätt kraven.** Välj en detalj i din vardag, till exempel ett cykelstyre, en stekpanna, ett skärbräde eller ett skruvhandtag. Skriv minst sex krav på detaljen i klartext och översätt varje krav till en materialegenskap. Markera de krav som inte gick att översätta och förklara varför de ändå kan behöva finnas.

2. **Sålla och jämför.** Utgå från kraven i föregående uppgift och ta fram tre tänkbara material. Sålla först bort de material som bryter mot något skallkrav och motivera varje strykning. Jämför sedan de återstående i en beslutsmatris med minst fyra viktade kriterier, räkna fram resultatet och skriv en motivering till valet på fem meningar.

3. **Vad kostar detaljen?** Välj en enkel detalj som skulle kunna tillverkas i två olika material. Ta reda på ungefärligt materialpris per kilo för båda och uppskatta hur mycket arbete tillverkningen kräver i respektive material. Redovisa en jämförelse av vad den färdiga detaljen kostar och ange vilken post som avgör skillnaden.

4. **Undersök en substitution.** Leta upp ett verkligt fall där ett material bytts ut i en produkt, till exempel plast som ersatt metall i en bildel, papper som ersatt plast i en förpackning eller ett förbjudet ämne som fasats ut. Ta reda på vad som drev bytet, vilka egenskaper som blev bättre och vilka som blev sämre, och vad tillverkaren behövde ändra utöver själva materialet.

5. **Gör om valet med nya krav.** Utgå från materialvalet du gjorde i övning 2 och ändra ett av kraven väsentligt, till exempel att detaljen ska väga hälften så mycket, tåla dubbelt så hög temperatur eller kosta en tredjedel. Gå igenom stegen på nytt och redovisa om valet ändras och exakt vilket steg som gjorde skillnaden.
