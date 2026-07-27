---
id: "3.3"
chapter: 3
sectionNumber: 3
title: Idégenerering
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-01"]
  niva2: []
learningGoals:
  - Använda metoder för idégenerering för att ta fram flera olika
    lösningsförslag på ett tekniskt problem.
  - Förklara varför idégenerering skiljer på att skapa och att värdera idéer och
    genomföra en idésession efter den principen.
abilities: [f1]
concepts_introduced: ["idégenerering", "brainstorming", "morfologisk metod"]
concepts_used: ["tekniskt problem", "delproblem", "krav", "skallkrav"]
figures: []
prerequisites: ["3.2"]
---

I kravspecifikationen för en robotgräsklippare står att maskinen ska hålla sig innanför gräsytans gräns. Hur den gör det står inte där, och ska inte göra det. Den öppna frågan är utgångspunkten för nästa steg i arbetet, och den som svarar med en nedgrävd kabel på tio sekunder har hoppat över hela steget.

*Idégenerering* är arbetet med att medvetet ta fram många och olika lösningsförslag på ett avgränsat problem, innan något av dem värderas eller väljs. Betoningen ligger på både många och olika. En idé är inte en färdig lösning utan en möjlig början på en, och de flesta idéer kommer att kasseras. Det är meningen. Kostnaden för en kasserad idé är några minuter, medan kostnaden för en lösning som visar sig vara fel val är hela utvecklingsarbetet.

Gränsproblemet i en trädgård visar hur brett svaren kan ligga. Det har i verkligheten lösts med en strömförande kabel nedgrävd längs kanten, med satellitpositionering och en korrektionssignal som ger noggrannhet på centimeternivå, med kameror som skiljer gräs från grus och asfalt, och med kombinationer av dessa. Alla fungerar. De ställer helt olika krav på installation, pris, elektronik och programvara. Hade den första idén fått vinna 1995 hade ingen av de andra prövats.

### Metoder för att skapa idéer

*Brainstorming* är den mest spridda metoden. En grupp samlar så många idéer som möjligt på kort tid kring en tydligt ställd fråga, och ingen idé värderas medan sessionen pågår. Metoden formulerades i den amerikanska reklambranschen på 1950-talet och används i dag i nästan allt utvecklingsarbete. Den fungerar bara om frågan är avgränsad. Hur gör vi en bättre gräsklippare ger tomma blickar. Hur kan maskinen veta var gräsmattan slutar ger idéer.

Att låta alla skriva tyst före samtalet är en enkel förbättring som förändrar resultatet. Var och en skriver ner sina förslag under några minuter, och först därefter läses de upp och byggs vidare på. Utan det tysta steget styrs gruppen av den som talar först och mest, och de idéer som avviker mest kommer sällan fram.

Ett annat sätt att bredda är att byta perspektiv. Hur löses samma problem i en annan bransch? Robotdammsugaren höll länge reda på rummet med virtuella väggar som sände en infraröd stråle, och industrirobotar övervakar sina arbetsområden med laserskannrar som stoppar maskinen när någon kliver in. Båda är svar på samma fråga som gräsklipparen ställer, ställd i en annan miljö. Att vända på problemet fungerar också. Frågan hur vi skulle få maskinen att med säkerhet köra ut i rabatten ger snabbt en lista över allt som kan gå fel vid gränsen, och varje punkt på den listan pekar på ett krav eller en idé.

Den *morfologiska metoden* bygger i stället på att problemet delas upp. Gränsproblemet består av tre [[begrepp:delproblem]]: att veta var maskinen befinner sig, att veta var gränsen går och att styra tillbaka innan den passeras. För varje delproblem listas alla lösningar som gruppen kommer på, och sedan kombineras en lösning från varje kolumn till ett förslag. Metoden ger många kombinationer på kort tid, också sådana som ingen hade tänkt ut i ett svep, och den lyfter fram att en lösning nästan alltid är satt av flera delar som kan bytas var för sig.

[BILD 3.3-1] Innehåll: Fyra sätt att lösa samma delproblem, hur en robotgräsklippare vet var gräsmattan slutar, uppställda sida vid sida: nedgrävd kabel längs kanten, satellitpositionering med korrektionssignal, kamera som skiljer gräs från grus, samt en kombination av satellit och kamera. Under varje förslag två korta rader om vad det kräver av installation och av elektronik. Bildtext: "Samma delproblem, fyra tekniskt helt olika svar. Idégenereringens uppgift är att få fram alla fyra innan något väljs."

### Skapa först, värdera sedan

Att skapa idéer och att bedöma dem är två sorters tänkande, och de arbetar mot varandra. Bedömningen letar fel, och tidiga fel finns det gott om i varje ny idé. En halvfärdig tanke som skulle ha blivit användbar tillsammans med någon annans förslag hinner dö innan den formulerats klart. Effekten är dessutom social. I en grupp där de första idéerna kritiseras slutar de flesta att föreslå något alls, och kvar blir de förslag som ligger närmast det man redan gör.

Därför följer en idésession några enkla spelregler. Ingen kritik under sessionen, inte heller i form av suckar eller invändningar som börjar med men. Kvantitet före kvalitet, eftersom en lång lista nästan alltid innehåller bättre förslag än en kort. Bygg vidare på andras idéer i stället för att försvara egna. Udda förslag är välkomna, eftersom de flyttar gruppens tänkande även när de själva är oanvändbara. Allt skrivs upp synligt medan det sägs, för idéer som inte skrivs ner försvinner. Sessionen har en bestämd tidsgräns, ofta kortare än man tror, eftersom tempot i sig håller värderingen borta.

Värderingen är inte förbjuden, bara uppskjuten. När sessionen är slut börjar en grovsortering. Förslag som bryter mot ett [[begrepp:skallkrav]] läggs åt sidan, och gruppen kontrollerar då att kravet verkligen är ett skallkrav och inte en vana. Idéer som är varianter av varandra slås ihop. Några förslag som ser mest lovande ut väljs ut för att arbetas vidare med, och den riktiga jämförelsen görs senare, när förslagen vuxit till hela lösningar och går att ställa mot kraven.

Den självklara idén ska också skrivas upp. Den är inte förbjuden, den får bara inte vara den enda. Ofta blir det vinnande förslaget dessutom en kombination av två som såg medelmåttiga ut var för sig, och sådana kombinationer uppstår bara om båda finns kvar på tavlan när sorteringen börjar.

[BILD 3.3-2] Innehåll: Två faser efter varandra. Först en vidgande fas där en enda fråga längst till vänster förgrenar sig i ett stort antal idéer, märkt "skapa" med spelreglerna listade under: ingen kritik, kvantitet före kvalitet, bygg vidare, allt skrivs upp, bestämd tid. Därefter en smalnande fas där idéerna sorteras ihop till några få förslag, märkt "värdera" med stegen: ta bort det som bryter mot ett skallkrav, slå ihop varianter, välj ut några att arbeta vidare med. Bildtext: "Först brett, sedan smalt. De två stegen blandas aldrig, eftersom bedömningen tystar skapandet."

## Instuderingsfrågor

1. Vad menas med idégenerering?
2. Varför är det ett problem att stanna vid den första idén som fungerar?
3. Vad kännetecknar en fråga som fungerar att brainstorma kring?
4. Varför förändras resultatet av att deltagarna skriver tyst innan de talar?
5. Hur går den morfologiska metoden till?
6. Dela upp problemet att hålla en robotgräsklippare innanför gräsmattans gräns i delproblem och ge minst två lösningar på vart och ett.
7. Varför får idéer inte värderas medan de skapas?
8. Nämn fyra spelregler för en idésession och förklara vad var och en är till för.
9. Vad innebär grovsorteringen efter en idésession?
10. Varför kan en idé som bryter mot ett skallkrav ändå vara värd att titta närmare på innan den läggs åt sidan?
11. Varför skrivs alla idéer upp synligt under sessionen?

## Övningar

1. **Idésession på tid.** Genomför en idésession i grupp om tre till fem personer kring frågan hur en skolas ytterdörr kan hållas stängd på vintern utan att den blir tung att öppna. Skriv tyst i tre minuter var för sig, dela sedan och bygg vidare i sju minuter. Skriv upp allt synligt. Räkna antalet idéer när tiden är slut och redovisa listan i sin helhet, utan att stryka något.

2. **Dela upp och kombinera.** Välj ett av följande problem: att hålla en cykelsadel torr, att hindra att en dörr slår igen i drag, eller att hålla reda på nycklar. Dela problemet i minst tre delproblem, lista minst tre lösningar på vart och ett och ställ upp dem i en tabell med ett delproblem per kolumn. Kombinera sedan ihop fem olika förslag genom att välja en lösning ur varje kolumn, och beskriv kort hur var och en skulle fungera.

3. **Låna från en annan bransch.** Välj ett tekniskt problem ur din vardag och ta reda på hur ett liknande problem löses inom minst två andra områden, till exempel sjukvård, jordbruk, sjöfart eller industri. Beskriv de två lösningarna och skissa hur var och en skulle kunna överföras till ditt problem. Ange vad som skulle behöva ändras vid överföringen.

4. **Vänd på problemet.** Formulera frågan hur man skulle kunna göra en viss vardaglig lösning så dålig som möjligt, till exempel en cykelparkering, ett pausrum eller en sopsortering. Skriv minst tio svar. Vänd sedan varje svar till ett krav eller en idé som pekar åt motsatt håll och markera de tre som du tror betyder mest.

5. **Granska en session.** Delta i eller iaktta en idésession och för anteckningar över hur spelreglerna följs: hur många gånger en idé värderas medan den skapas, hur många deltagare som föreslår något, och hur antalet idéer per minut ändras under sessionen. Sammanställ anteckningarna och föreslå två konkreta ändringar i genomförandet som skulle ge fler eller mer olika idéer nästa gång.
