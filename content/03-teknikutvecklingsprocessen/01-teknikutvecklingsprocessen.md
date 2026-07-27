---
id: "3.1"
chapter: 3
sectionNumber: 1
title: Teknikutvecklingsprocessen
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-01"]
  niva2: ["n2-01"]
learningGoals:
  - Beskriva teknikutvecklingsprocessens delar från idé till återvinning och
    förklara hur de hänger samman.
  - Förklara varför teknikutveckling är iterativ och ge exempel på hur
    testresultat leder tillbaka till tidigare faser.
abilities: [f1]
concepts_introduced: ["teknikutvecklingsprocess", "iteration"]
concepts_used: ["behov", "tekniskt problem", "krav", "teknisk lösning", "teknisk möjlighet"]
figures: []
prerequisites: ["2.1"]
---

## Processens faser

En robotgräsklippare rullar ut ur sin laddstation på morgonen, klipper i några timmar och åker tillbaka för att ladda. Gräsmattan hålls jämn utan att någon rör den. Bakom den vardagliga bilden ligger trettio års utvecklingsarbete.

År 1992 satte Husqvarna samman en grupp konstruktörer för att undersöka om en gräsklippare kunde sköta arbetet på egen hand. Tre år senare fanns Solar Mower på marknaden, världens första robotgräsklippare. Den drevs av solceller, klarade gräsmattor upp till 50 kvadratmeter och kallades sköldpaddan efter sin låga, välvda form. Den var långsam, och när molnen kom stannade den. År 1998 kom nästa steg, en batteridriven maskin som själv hittade tillbaka till en laddstation. Den kunde därför arbeta oavsett väder och klarade ytor upp till 500 kvadratmeter.

Vägen från den första frågan till en produkt som tillverkas, används och till sist skrotas kallas *teknikutvecklingsprocessen*. Den beskriver hur ett tekniskt utvecklingsarbete faktiskt går till, och den ser i sina huvuddrag likadan ut vare sig den tekniska lösningen blir en gräsklippare, en app eller en järnvägstunnel.

Arbetet börjar i ett [[begrepp:behov]] och ett [[begrepp:tekniskt problem]]. Behovet var en klippt gräsmatta utan arbetet, och problemet var att en maskin skulle klippa utan förare, hitta i trädgården och inte skada någon på vägen. Därefter formuleras [[begrepp:krav]] på vad lösningen måste klara, uttryckta så att det går att avgöra om de är uppfyllda: hur stor yta, hur brant lutning, hur hög ljudnivå och vilka säkerhetsregler som gäller. Först när kraven finns går arbetet vidare till idégenereringen, där flera olika lösningsförslag tas fram utan att något ännu väljs bort.

De bästa idéerna arbetas ihop till koncept, alltså sammanhängande förslag som beskriver hur hela lösningen ska fungera. Ett koncept väljs, och för att pröva det byggs en prototyp. Prototypen finns till för att svara på frågor som ingen ritning kan svara på. Klarar maskinen ojämnt underlag? Hittar den tillbaka? Sedan testas lösningen mot kraven, och utvärderingen väger resultatet mot funktion, kostnad, säkerhet och miljöpåverkan.

Först därefter börjar konstruktions- och tillverkningsarbetet på allvar. Varje detalj ska få mått, material och en tillverkningsmetod, och tillverkningen ställer egna krav som ändrar utformningen. En detalj som kan formsprutas i ett stycke blir billigare än en som ska skruvas ihop av fem delar, och den skillnaden märks i varje såld maskin. När produkten är i bruk fortsätter arbetet med underhåll, reservdelar och programuppdateringar. När den är utsliten ska den tas om hand. Batteriet, elektroniken och plasthöljet i en robotgräsklippare hör till olika återvinningsströmmar, och hur enkelt de går att skilja åt avgörs av beslut som fattades långt tidigare, vid konstruktionsbordet.

[BILD 3.1-1] Innehåll: Teknikutvecklingsprocessen som en kedja av faser från vänster till höger: behov och problem, krav, idéer, koncept, prototyp, test och utvärdering, konstruktion och tillverkning, användning och underhåll, sluthantering och återvinning. Under varje fas en kort text som visar vad fasen innebar för robotgräsklipparen, till exempel "klippa utan förare" vid behovet och "batteri, elektronik och plast skiljs åt" vid sluthanteringen. Bildtext: "Utvecklingsarbetets faser från behov till återvinning. Den sista fasen avgörs av beslut som fattas i de första."

Faserna beskrivs ofta i en rak följd, men de är inte vattentäta fack. De går in i varandra, de kan pågå samtidigt, och tempot skiljer sig kraftigt mellan branscher. En app kan gå från idé till användare på några veckor, medan ett läkemedel eller en tunnel tar tiotals år. Ju dyrare och farligare ett misslyckande är, desto hårdare hålls ordningen mellan faserna, och desto mer arbete läggs på krav och tester innan något byggs på riktigt.

## Iteration

Ingen av robotgräsklipparens trettio år av utveckling gick i en rak linje framåt. En *iteration* är ett varv i utvecklingsarbetet, där det som lärs i ett senare steg leder tillbaka till ett tidigare. Utvecklingsarbete är iterativt. Samma faser genomlöps flera gånger, och varje varv bygger på resultatet från det förra.

Säkerheten är ett tydligt exempel. En robotgräsklippare arbetar med roterande knivar på en gräsmatta där barn leker, och den europeiska säkerhetsstandarden för robotgräsklippare prövar detta med provkroppar som förs mot knivarna. Där ingår en vuxenfot, en stående barnfot och, sedan standarden skärptes 2020, en knästående barnfot. Maskinen måste dessutom ha hinderavkänning som är aktiv i alla körriktningar när knivarna går. Varje sådan skärpning bygger på erfarenheter från maskiner som redan var i bruk, och varje skärpning tvingar tillverkarna tillbaka till konstruktionen med produkter som en gång var godkända.

Ett testresultat kan också peka på något som ingen ställt krav på. Igelkottsvårdare i flera länder rapporterade skadade djur, och 2024 tog forskare vid universiteten i Oxford och Aalborg fram ett igelkottstest för robotgräsklippare, byggt kring 3D-utskrivna provkroppar som liknar en hopkrupen igelkott. Testet visade att de prövade maskinerna behövde röra vid igelkotten för att upptäcka den, och att några inte upptäckte den alls. Ett sådant resultat leder inte tillbaka till en detalj i konstruktionen utan hela vägen till kraven och konceptvalet, eftersom en maskin som ska upptäcka ett litet djur utan att röra vid det behöver andra sensorer än en som känner av kollisioner.

En iteration behöver inte starta i ett fel. Under sina första tjugofem år höll robotgräsklipparen ordning på trädgårdens gränser med en kabel som grävdes ner längs kanten av gräsmattan. När satellitpositionering blev tillräckligt exakt och tillräckligt billig uppstod en ny [[begrepp:teknisk möjlighet]], och 2021 lanserade Husqvarna ett system där gränserna i stället ritas virtuellt och maskinen håller sig innanför dem med hjälp av satellitsignaler. Tekniken nådde konsumentmodellerna 2023. Ingenting hade gått sönder i den gamla lösningen. Möjligheten öppnade bara en väg tillbaka till konceptfasen för ett problem som ansågs löst.

Vad en iteration kostar avgörs av hur långt fram i processen den görs. Att ändra en skiss kostar en eftermiddag. Att ändra ett mått i en färdig gjutform kostar veckor och en ny form. Att ändra en produkt som redan står hos kunderna kostar allra mest, eftersom varje exemplar måste hämtas in, byggas om eller ersättas. Det är därför så mycket arbete läggs på krav, koncept och prototyper. Den som gör sina iterationer tidigt betalar för dem i tid, och den som skjuter upp dem betalar för dem i pengar och förtroende.

[BILD 3.1-2] Innehåll: Samma faskedja som i den första bilden, men med returpilar bakåt: från test till konstruktion, från test till koncept och från användning till krav. Under kedjan en kurva som stiger brant från vänster till höger och visar vad en ändring kostar i respektive fas, med tre markerade punkter: ändrad skiss, ändrad gjutform, återkallad produkt. Bildtext: "Varje returpil är en iteration. Ju längre åt höger den utgår, desto dyrare blir den."

Att gå bakåt i processen är alltså inget tecken på att arbetet misslyckats. Ett utvecklingsarbete som aldrig går bakåt har oftast inte prövat sin lösning ordentligt.

## Instuderingsfrågor

1. Vad menas med teknikutvecklingsprocessen?
2. Beskriv kort vad som sker i var och en av processens faser från behov till sluthantering.
3. Varför formuleras kraven innan en lösning väljs?
4. Vilken uppgift har prototypen i utvecklingsarbetet?
5. Vad är en iteration?
6. Ge ett exempel på hur ett testresultat kan leda tillbaka till en tidigare fas.
7. Varför blir en ändring dyrare ju längre fram i processen den görs?
8. Robotgräsklipparen från 1995 drevs av solceller, och modellen från 1998 av ett batteri med laddstation. Vilket problem löste den förändringen?
9. En säkerhetsstandard skärps så att maskinen måste upptäcka hinder utan att röra vid dem. Vilka faser i processen berörs av ändringen, och varför räcker det inte att justera den färdiga konstruktionen?
10. Ge ett exempel på hur en ny teknisk möjlighet kan starta en iteration trots att ingenting har gått fel.
11. Varför ser tempot i processen så olika ut för en app och för en järnvägstunnel?

## Övningar

1. **Processen bakom ett föremål.** Välj ett tillverkat föremål som du använder ofta, till exempel ett par hörlurar, en vattenflaska eller en cykelbelysning. Gå igenom processens faser från behov till sluthantering och skriv några meningar om varje fas för just det föremålet. Ange vilken fas du vet minst om och vad du skulle behöva ta reda på för att kunna beskriva den.

2. **Två generationer.** Välj en produkt som finns i minst två generationer, till exempel en mobiltelefon, en cykelhjälm eller en dammsugare, och jämför en äldre och en nyare modell. Beskriv minst tre saker som har ändrats. Ange för varje ändring vilken erfarenhet, vilket testresultat eller vilken ny teknisk möjlighet som rimligen låg bakom, och vilken fas i processen ändringen ledde tillbaka till.

3. **Sortera aktiviteterna.** En kommun ska ta fram ett väderskyddat cykelställ till en busshållplats. Följande arbeten ingår: mäta hur många cyklar som står vid hållplatsen i dag, bestämma att taket ska klara snölast, skissa fem olika ställningar, bygga en modell i trä i full storlek, jämföra tre förslag mot varandra, ställa modellen utomhus en vinter och se hur den klarar sig, beställa stål från leverantör, byta lampor i taket efter tre år, samt skrota ställningen och sortera stålet. Placera varje arbete i rätt fas och motivera de två placeringar du tyckte var svårast.

4. **En sen ändring.** Leta upp ett verkligt fall där en produkt har återkallats eller uppdaterats efter att den släppts, till exempel via en tillverkares webbplats eller Konsumentverkets information om farliga produkter. Beskriv vad felet var, i vilken fas det borde ha upptäckts och vad du bedömer att det kostade tillverkaren att upptäcka det så sent. Sammanställ svaret på en halv sida.

5. **Rita processen.** Rita en processkarta över utvecklingsarbetet för en lösning på ett behov i din egen skola, till exempel bättre laddmöjligheter, tystare grupprum eller säkrare cykelparkering. Rita faserna som en kedja och lägg till minst två returpilar som visar var arbetet sannolikt behöver gå tillbaka. Skriv vid varje returpil vad som skulle kunna utlösa den.
