---
id: "13.3"
chapter: 13
sectionNumber: 3
title: Hållbar utveckling
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-12"]
  niva2: ["n2-09", "n2-10", "n2-02"]
learningGoals:
  - Förklara hållbar utveckling ur miljömässigt, ekonomiskt och socialt
    perspektiv och använda perspektiven vid värdering av tekniska lösningar.
  - Förklara cirkulär ekonomi och nya affärsmodeller samt hur de förändrar
    teknikutveckling och produktion.
abilities: [f2, f4]
concepts_introduced: ["hållbar utveckling", "avfallshierarki", "linjär ekonomi", "cirkulär ekonomi", "funktionsförsäljning", "reparerbarhet"]
concepts_used: ["avvägning", "livscykel", "livscykelanalys", "demonterbarhet", "återanvändning", "materialåtervinning", "affärsmodell", "intäktsmodell"]
figures: []
prerequisites: ["3.7", "5.5", "11.3"]
---

Svensk vattenkraft producerar el utan bränsle och utan utsläpp av växthusgaser under drift. Kraftverken har stått i nästan hundra år och kan regleras upp och ned på minuter, vilket gör dem till en av de mest värdefulla delarna i elsystemet.

Samma kraftverk stänger vandringsvägarna för fisk, torrlägger sträckor av älven och ändrar vattenföringen i ett mönster som inte liknar något naturligt. Sverige har därför under senare år gått igenom vattenkraftens tillstånd för att ställa nya miljövillkor, ofta i form av fiskvägar och krav på minsta vattenföring, och de villkoren kostar produktion.

Frågan om vattenkraften är hållbar har alltså inget svar så länge den ställs på det sättet. Den behöver delas upp, och det är vad det här avsnittet gör.

## Hållbarhet som konstruktionskrav

*Hållbar utveckling* är utveckling som tillgodoser dagens behov utan att äventyra kommande generationers möjligheter att tillgodose sina. Formuleringen kommer från FN-rapporten Vår gemensamma framtid från 1987, ofta kallad Brundtlandrapporten, och den har blivit den gängse definitionen just därför att den sätter tidsperspektivet i centrum. Det som är ohållbart är inte det som är obehagligt nu, utan det som inte går att fortsätta med.

Begreppet delas i tre perspektiv, och de är inte tre synonymer för miljö.

**Det miljömässiga perspektivet** gäller vad verksamheten tar från och lämnar till naturen. Materialuttag, energianvändning, utsläpp till luft, vatten och mark, markanvändning och påverkan på arter. Det är det perspektiv som brukar mätas bäst, bland annat med [[begrepp:livscykelanalys]].

**Det ekonomiska perspektivet** gäller om verksamheten går att bära över tid. En lösning som kräver ständiga tillskott för att existera är inte hållbar i den meningen, och en produkt som är billig att köpa men dyr att äga flyttar bara kostnaden. Här hör också frågan om resursernas pris hemma, alltså vad som händer med en konstruktion när ett material blir mycket dyrare.

**Det sociala perspektivet** gäller människorna, alltså arbetsvillkor i hela leverantörskedjan, hälsa, säkerhet, tillgång till det lösningen ger och vem som får bära följderna. Det är det perspektiv som oftast utelämnas, eftersom det är svårast att sätta siffror på.

Perspektiven drar sällan åt samma håll. Det är hela skälet till att de är tre och inte ett.

**Ett genomfört exempel.** Ta batteriet i en elbil och pröva det mot alla tre.

Miljömässigt är bilden delad. Under drift ger elbilen inga avgaser, och med svensk elmix är utsläppen per körd kilometer låga. Tillverkningen av battericellerna är däremot energikrävande, och råvarorna litium, kobolt, nickel och grafit bryts i gruvor med lokal påverkan på mark och vatten. Utsläppen flyttar alltså från avgasröret till tillverkningen, vilket betyder att elbilens fördel växer med antalet körda kilometer och är som minst när bilen är ny.

Ekonomiskt är bilden också delad. Inköpspriset är högre och driftkostnaden lägre, vilket gör att kalkylen beror på hur mycket bilen körs och hur länge den behålls. Till det kommer att batteriets värde efter fordonets liv inte är noll, eftersom cellerna kan användas vidare för lagring eller tas isär för materialåtervinning, och den intäkten påverkar hela kalkylen.

Socialt gäller frågorna arbetsvillkoren i gruvorna, som i flera fall är dokumenterat dåliga, och tillgången. Den som saknar egen parkering med laddmöjlighet har inte samma nytta av en elbil som den som har det, vilket gör laddinfrastrukturen till en fråga om vem tekniken fungerar för och inte bara om hur många stolpar som finns.

Slutsatsen av genomgången är inte ett omdöme. Den är en lista över var lösningen är stark, var den är svag och vilka [[begrepp:avvägning]]ar som måste göras. Det är så de tre perspektiven ska användas. De är ett verktyg för att strukturera en värdering, inte en betygsskala.

[BILD 13.3-1] Innehåll: Tre lodräta kolumner märkta miljömässigt, ekonomiskt och socialt perspektiv. I varje kolumn två fält, ett övre märkt starkt och ett undre märkt svagt, ifyllda med elbilsbatteriets punkter, alltså inga avgaser under drift mot energikrävande celltillverkning och gruvdrift, lägre driftkostnad och restvärde i cellerna mot högre inköpspris, samt bättre luft i städerna mot arbetsvillkor i gruvorna och ojämn tillgång till laddning. Mellan kolumnerna tre dubbelriktade pilar märkta med de avvägningar som binder ihop dem. Under kolumnerna en pil märkt antal körda kilometer, som visar att den miljömässiga fördelen växer med användningen. Bildtext: "De tre perspektiven ger inte ett omdöme utan en karta över var lösningen är stark, var den är svag och vad som måste vägas mot vad."

**Hållbarhet blir verklig först som krav.** Ett perspektiv som stannar vid ett resonemang ändrar ingen konstruktion. Det som ändrar konstruktionen är ett krav som går att pröva, av samma slag som alla andra krav i en kravspecifikation. Skillnaden mellan att skriva att produkten ska vara miljöanpassad och att skriva att den ska gå att öppna med vanliga verktyg, att alla plastdelar över tjugofem gram ska vara märkta med materialslag och att reservdelar ska finnas i tio år är hela skillnaden mellan en avsikt och ett krav.

Här hör *reparerbarhet* hemma, alltså i vilken utsträckning en produkt går att laga när den gått sönder. Den avgörs av konstruktionsval som var för sig är små. Sitter delarna ihop med skruv eller lim, går batteriet att byta utan att höljet förstörs, finns reservdelar att köpa, finns det en anvisning som beskriver hur, och krävs det specialverktyg. Reparerbarheten hänger nära ihop med [[begrepp:demonterbarhet]]en men är inte samma sak. En produkt kan gå att ta isär för återvinning utan att gå att laga, om det inte finns några delar att sätta tillbaka.

Kraven kommer i ökande grad också utifrån. EU ställer ekodesignkrav på flera produktgrupper, med bland annat krav på att reservdelar ska finnas tillgängliga under en bestämd tid, och Frankrike har infört ett reparerbarhetsindex som ska anges vid försäljning av vissa produkter. Riktningen är att reparerbarhet blir en egenskap som redovisas och jämförs, på samma sätt som energiförbrukning redan gör.

## Cirkulär ekonomi

*Linjär ekonomi* är den modell där material utvinns, en produkt tillverkas, används och sedan blir avfall. Flödet går åt ett håll, och värdet i materialet försvinner i slutet.

*Cirkulär ekonomi* är den modell där material och produkter behålls i användning så länge som möjligt och där det som ändå tas ur bruk blir råvara till något nytt. Skillnaden är inte att den ena återvinner och den andra inte. Skillnaden är var i kedjan värdet bevaras.

Det syns i *avfallshierarkin*, alltså den prioriteringsordning som anger i vilken ordning åtgärder ska väljas när en produkt närmar sig slutet av sin [[begrepp:livscykel]]. Överst står att förebygga, alltså att avfallet inte uppstår, till exempel genom att produkten håller längre eller att material inte används i onödan. Därefter kommer [[begrepp:återanvändning]], alltså att produkten används igen som den är, och därefter reparation och renovering som håller den i bruk. Först på fjärde steget kommer [[begrepp:materialåtervinning]], där produkten förstörs men materialet tas till vara. Sedan kommer energiåtervinning, och sist deponi.

Ordningen är inte godtycklig, och skälet är tekniskt. Varje steg nedåt förstör mer av det arbete som redan lagts ned. En återanvänd produkt behåller allt, alltså både materialet och den bearbetning, montering och provning som gjorts. Ett återvunnet material behåller bara materialet, och ofta i sämre skick, eftersom polymerer bryts ned och legeringar blandas. Att återvinna är alltså bra jämfört med att slänga, men det är den fjärde bästa åtgärden och inte den första. Det är den vanligaste missuppfattningen om cirkulär ekonomi.

[BILD 13.3-2] Innehåll: Två flödesbilder ovanför varandra. Den övre, märkt linjär, är en rak pil från vänster till höger genom stegen råvara, tillverkning, användning och avfall, med en tjock pil ut i slutet märkt förlorat värde. Den undre, märkt cirkulär, är en sluten ring genom samma steg, med fyra returslingor av olika längd som går tillbaka in i kedjan på olika ställen: en kort slinga från användning tillbaka till användning märkt återanvändning, en något längre märkt reparation och renovering, en längre som går tillbaka till tillverkning märkt komponenter tas till vara, och en yttersta som går tillbaka till råvara märkt materialåtervinning. Slingornas längd visar hur mycket nedlagt arbete som går förlorat. Vid sidan avfallshierarkin som en trappa med stegen förebygga, återanvända, reparera, materialåtervinna, energiåtervinna och deponera. Bildtext: "Ju längre ut returslingan går, desto mer av det nedlagda arbetet förstörs. Därför är återvinning den fjärde bästa åtgärden och inte den första."

**Kretsloppet behöver en teknisk lösning för att fungera.** Ett cirkulärt flöde uppstår inte av att någon vill det. Det svenska pantsystemet för burkar och flaskor är ett exempel som fungerar, och det gör det därför att tre saker byggts ihop: förpackningarna är gjorda av ett fåtal material som går att återvinna, pantbeloppet gör det lönsamt att lämna tillbaka, och automater och insamlingssystem gör det enkelt. Faller en av de tre bort slutar kretsloppet fungera. Det är samma slags konstruktionsarbete som i vilken annan teknisk lösning som helst.

**Affärsmodellen avgör vad konstruktören belönas för.** Detta är avsnittets viktigaste tekniska poäng, och den knyter an till hur en [[begrepp:affärsmodell]] byggs upp.

I den vanliga modellen säljer företaget en produkt och får betalt en gång. En produkt som håller länge ger då färre framtida försäljningar, och konstruktionen dras mot en livslängd som är precis tillräcklig. Ingen behöver ha ont uppsåt för att det ska bli så. Det följer av var pengarna kommer in.

*Funktionsförsäljning* innebär att kunden betalar för den funktion produkten ger i stället för att köpa produkten, och att tillverkaren behåller ägandet. Belysning kan säljas som ljus i lokalen, tryckluft som kubikmeter luft och däck som körda mil. Den [[begrepp:intäktsmodell]]en vänder på incitamenten. Eftersom varje trasig enhet är tillverkarens kostnad och inte kundens blir lång livslängd, låg energiförbrukning, enkel service och hög reparerbarhet lönsamma egenskaper i stället för kostsamma.

Följderna för konstruktionsarbetet är konkreta. Produkten konstrueras för att gå att öppna, eftersom någon ska serva den många gånger. Slitdelar placeras så att de går att byta utan att resten demonteras. Uppkoppling blir intressant, eftersom tillverkaren vill veta när något är på väg att gå sönder. Materialvalet dras mot det som går att ta tillbaka i produktion. Ingen av ändringarna kommer av ett hållbarhetsmål, utan av att någon ändrat var pengarna kommer in.

Modellen är dock ingen genväg. Den binder kapital, eftersom tillverkaren äger allt som är ute hos kunder, den kräver ett fungerande service- och returflöde, och den passar bäst där produkten är dyr, långlivad och används mycket. Den som säljer en enkel förbrukningsvara har sällan något att vinna på den. Att avgöra var modellen passar är en teknisk och ekonomisk bedömning, inte en principfråga.

## Instuderingsfrågor

1. Varför går frågan om svensk vattenkraft är hållbar inte att besvara som den är ställd?
2. Vad menas med hållbar utveckling, och varför står tidsperspektivet i centrum för definitionen?
3. Ange de tre perspektiven och vad vart och ett gäller.
4. Vilket av de tre perspektiven utelämnas oftast, och varför?
5. Varför växer elbilens miljömässiga fördel med antalet körda kilometer?
6. Ange en styrka och en svaghet hos elbilsbatteriet inom vart och ett av de tre perspektiven.
7. Varför är resultatet av en genomgång ur de tre perspektiven en lista och inte ett omdöme?
8. Vad skiljer kravet att en produkt ska vara miljöanpassad från kravet att alla plastdelar över tjugofem gram ska vara märkta med materialslag?
9. Vad menas med reparerbarhet, och vilka konstruktionsval avgör den?
10. Hur skiljer sig reparerbarhet från demonterbarhet?
11. Vad skiljer en linjär från en cirkulär ekonomi?
12. Ange avfallshierarkins steg i ordning.
13. Varför är materialåtervinning inte det bästa steget, trots att materialet tas till vara?
14. Vilka tre delar måste fungera samtidigt för att pantsystemet ska hålla kretsloppet igång?
15. Vad är funktionsförsäljning, och hur ändrar den vilka egenskaper som blir lönsamma att konstruera in?

## Övningar

1. **Sortera på rätt perspektiv.** Ange för vart och ett av dessa förhållanden vilket eller vilka av de tre perspektiven det hör till, och motivera på en mening: att en fabrik släpper ut lösningsmedel till luft, att en produkt är dyr att underhålla, att arbetarna i en leverantörsfabrik saknar skyddsutrustning, att ett material kan bli svårt att få tag på, att en tjänst kräver bank-id, och att en anläggning tar mark i anspråk. Ange därefter ett av förhållandena som hör till mer än ett perspektiv, och förklara hur perspektiven där drar åt olika håll.

2. **Värdera en lösning ur tre perspektiv.** Välj en teknisk lösning som diskuteras där du bor, till exempel ett vindkraftsprojekt, en ny cykelbana, en biogasanläggning, ett datacenter eller en ombyggd korsning. Ta reda på så mycket du kan om den. Redovisa minst två starka och två svaga punkter inom vart och ett av de tre perspektiven, och ange källa för de uppgifter du hittar. Ange därefter minst två avvägningar där perspektiven drar åt olika håll, och vem som får nyttan respektive nackdelen av varje avvägning.

3. **Rangordna åtgärderna.** Ett företag tillverkar handhållna elverktyg och överväger sex åtgärder: att erbjuda en bytesservice för slitna batterier, att konstruera höljet så att det skruvas i stället för limmas, att samla in uttjänta verktyg och mala ned dem för materialåtervinning, att förlänga garantin och sälja reservdelar, att bränna returnerade verktyg i ett kraftvärmeverk, och att minska mängden plast i förpackningen. Placera varje åtgärd på rätt steg i avfallshierarkin och rangordna dem. Ange därefter vilka två åtgärder du skulle genomföra först om budgeten bara räcker till två, och motivera med hierarkin.

4. **Cirkulär eller bara omdöpt?** Bedöm för vart och ett av dessa erbjudanden om det verkligen gör flödet cirkulärt eller bara ser ut att göra det: en klädkedja som tar emot gamla plagg och ger rabatt på nya, ett företag som hyr ut verktyg per dygn, en tillverkare som byter ut hela produkten kostnadsfritt vid fel under garantitiden, ett företag som säljer belysning som en tjänst med ansvar för underhåll, och en förpackning märkt som återvinningsbar. Ange för varje fall vad som skulle behöva vara sant för att flödet faktiskt ska slutas, och vilken uppgift du skulle be om för att kunna avgöra saken.

5. **Räkna om affären till funktionsförsäljning.** Utgå från en produkt du känner till som i dag säljs styckvis, till exempel en elcykel, en skrivare, en kaffemaskin eller en uppsättning verktyg. Beskriv först hur affären ser ut i dag, alltså vad kunden betalar och när. Skissa därefter samma erbjudande som funktionsförsäljning och ange vad kunden då betalar för. Lista minst fyra konstruktionsändringar som skulle löna sig i den andra modellen men inte i den första, och ange för varje ändring varför incitamentet ändras. Avsluta med vad som skulle bli svårare för tillverkaren.
