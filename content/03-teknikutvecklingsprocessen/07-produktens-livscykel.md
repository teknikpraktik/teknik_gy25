---
id: "3.7"
chapter: 3
sectionNumber: 7
title: Produktens livscykel
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-01"]
  niva2: []
learningGoals:
  - Beskriva en produkts livscykel från råvara till återvinning och koppla
    miljöpåverkan till livscykelns faser.
  - Förklara hur konstruktionsval påverkar produktens livslängd, underhåll och
    återvinning.
abilities: [f1, f4]
concepts_introduced: ["livscykel", "livscykelanalys", "demonterbarhet"]
concepts_used: ["avvägning", "krav"]
figures: []
prerequisites: ["3.6"]
---

## Livscykelns faser

En robotgräsklippare som stått på samma gräsmatta i tolv år har klippt några tusen timmar. När den till slut lämnas in består den av plast, aluminium, koppar, kretskort och ett litiumbatteri, och vart och ett av dessa material har en historia som började långt innan maskinen tillverkades.

En produkts *livscykel* omfattar alla faser den genomgår, från utvinningen av råvaror till att den tas ur bruk och materialet tas om hand. Faserna är råvaruutvinning, materialtillverkning, tillverkning av själva produkten, distribution, användning med underhåll och slutligen sluthantering.

För gräsklipparen ser kedjan ut så här. Litium, kobolt och koppar bryts i gruvor, plasten kommer ur råolja, och redan där uppstår markpåverkan och stora energimängder. Materialen förädlas, kretskorten tillverkas i flera steg med höga renhetskrav, delarna monteras och maskinen fraktas till en butik eller ett lager. Under användningen laddar den sitt batteri, och den energin är den enda som tillförs under tolv år av arbete. Underhållet består av nya knivar några gånger per säsong och ett batteribyte efter ett antal år. Till sist blir maskinen elavfall, där batteriet måste tas ur och hanteras för sig, både för att det innehåller värdefulla metaller och för att skadade litiumbatterier kan börja brinna i en sopbil.

Miljöpåverkan fördelar sig inte jämnt över faserna, och tyngdpunkten ligger olika för olika produkter. En bensindriven gräsklippare förbränner bränsle varje gång den används, och användningsfasen dominerar därför så kraftigt att allt annat blir detaljer. För en eldriven maskin med lång livslängd är förhållandet det omvända. Tillverkningen av batteri och elektronik står för en stor del av påverkan, medan den el maskinen drar under sina år är jämförelsevis liten. Slutsatsen för konstruktören blir olika i de två fallen. Den som konstruerar bensinklipparen bör lägga sin kraft på förbrukningen, medan den som konstruerar robotklipparen bör lägga den på att maskinen ska hålla länge, eftersom varje extra år fördelar tillverkningens påverkan på fler klippta timmar.

En *livscykelanalys* är en systematisk sammanställning av en produkts miljöpåverkan genom alla faser, oftast redovisad som utsläpp av växthusgaser, energianvändning och materialåtgång. Analysen är beroende av sina antaganden. Var systemgränsen dras, hur lång livslängd som räknas och vilken el som antas användas kan ändra resultatet kraftigt, och två analyser av samma produkt kan därför ge olika svar. En livscykelanalys ska läsas som ett underlag med angivna förutsättningar, aldrig som ett facit.

[BILD 3.7-1] Innehåll: Livscykelns sex faser som en kedja med en returpil från sluthantering tillbaka till materialtillverkning. Under kedjan två stapeldiagram som visar hur miljöpåverkan fördelar sig mellan faserna för två produkter: en bensindriven gräsklippare där användningsfasen dominerar, och en robotgräsklippare där tillverkningen dominerar. Bildtext: "Samma faser, helt olika fördelning. Var påverkan ligger avgör var konstruktören gör mest nytta."

## Design för livscykeln

Nästan allt som avgör livscykeln bestäms innan produkten finns. EU-kommissionen brukar ange att upp till 80 procent av en produkts miljöpåverkan är bestämd redan i konstruktionsfasen. Den som ritar en detalj bestämmer samtidigt hur länge den håller, om den går att laga och vad som händer med den till sist.

Livslängden avgörs av dimensionering och av skydd mot det som sliter. En kåpa som spricker av solens ultravioletta strålning efter fem år tar med sig hela maskinen till avfallet, oavsett hur bra elektroniken är. Slitdelar ska dessutom vara just utbytbara delar och inte sitta ihop med något dyrt. Knivarna på en robotgräsklippare är billiga och byts flera gånger per säsong, och det fungerar bara för att de sitter fast med en enkel skruv.

Underhållet regleras numera också av lagstiftning. Sedan mars 2021 ställer EU:s ekodesignkrav på flera produktgrupper, bland annat tvättmaskiner, diskmaskiner, kylar och bildskärmar, att reservdelar ska finnas tillgängliga i sju till tio år, levereras inom femton arbetsdagar och gå att byta med vanliga verktyg utan att produkten skadas. Från februari 2027 gäller dessutom EU:s batteriförordning, som kräver att bärbara batterier i produkter ska kunna tas ut och bytas av användaren själv med vanliga verktyg. Ett krav av det slaget ändrar konstruktionen direkt. Ett batteri som limmats fast under en tätad kåpa måste i stället bli en modul bakom ett skruvat lock med en packning som går att öppna och stänga igen.

*Demonterbarhet* är måttet på hur enkelt en produkt går att ta isär i sina delar, och den avgör vad som går att laga och vad som går att återvinna. Några konstruktionsval styr det mesta. Färre olika material i samma detalj gör sorteringen enklare. Skruv och snäppfästen som går att öppna är bättre än lim och svetsade fogar. Metall som gjutits in i plast kan i praktiken inte skiljas åt. Märkning av plastsorten på insidan av varje detalj kostar ingenting vid tillverkningen och avgör vart delen tar vägen. Ett hölje av tre olika limmade material är billigt att tillverka och nästan omöjligt att ta hand om.

Här uppstår samma sorts [[begrepp:avvägning]] som i utvärderingen. Lim är lättare, billigare och tätare än skruvförband, men det stänger dörren för både reparation och materialsortering. En konstruktion med få material kan bli tyngre eller dyrare än en optimerad blandning. Att konstruera för livscykeln är därför inte en fråga om att välja rätt utan om att veta vad varje val kostar i andra änden av produktens liv.

Det för resonemanget tillbaka dit kapitlet började. Sluthanteringen är den sista fasen i tiden men en av de första i besluten. När maskinen väl står färdig är den frågan redan avgjord.

[BILD 3.7-2] Innehåll: Samma batterifack ritat på två sätt i genomskärning. Till vänster ett limmat och inbyggt batteri under en fast kåpa, med en text som anger att bytet kräver att höljet bryts upp. Till höger samma batteri som en modul bakom ett skruvat lock med packning, med pil som visar hur det lyfts ut. Under båda en rad som anger konsekvenserna för livslängd, reparation och återvinning. Bildtext: "Två sätt att fästa samma batteri. Valet avgör om maskinen kasseras eller repareras efter sex år."

## Instuderingsfrågor

1. Vad menas med en produkts livscykel?
2. Vilka faser ingår i livscykeln, och vad sker i var och en?
3. Varför räknas råvaruutvinningen som en del av produktens livscykel?
4. Varför måste litiumbatteriet tas ur en maskin innan resten blir avfall?
5. Varför dominerar användningsfasen för en bensindriven gräsklippare men inte för en eldriven?
6. En produkts påverkan ligger till största delen i tillverkningen. Vilken egenskap hos produkten betyder då mest för miljön, och varför?
7. Vad är en livscykelanalys, och varför kan två analyser av samma produkt ge olika resultat?
8. Vad menas med demonterbarhet?
9. Ge tre konstruktionsval som förbättrar demonterbarheten och förklara hur var och en verkar.
10. Varför tar en kåpa som spricker efter fem år med sig hela maskinen till avfallet?
11. Vilken avvägning finns mellan att limma och att skruva ihop ett hölje?
12. Hur påverkar kravet på utbytbara batterier konstruktionen av en tätad produkt?

## Övningar

1. **Kartlägg en livscykel.** Välj en produkt du äger, till exempel ett par hörlurar, en cykel eller en lampa. Beskriv produktens livscykel fas för fas och ange för varje fas vilken miljöpåverkan som uppstår där. Markera den fas du bedömer som tyngst och motivera bedömningen.

2. **Två produkter, olika tyngdpunkt.** Jämför en produkt som förbrukar energi vid varje användning med en som huvudsakligen belastar miljön vid tillverkningen, till exempel en hårtork mot ett armbandsur, eller en bensindriven maskin mot en handdriven. Beskriv var tyngdpunkten ligger för var och en och vilken förbättring som skulle ge störst effekt i respektive fall.

3. **Ta isär och bedöm.** Ta isär en kasserad apparat, till exempel en trasig leksak, en gammal mus eller en trasig lampa, med de verktyg du har. Anteckna hur många olika material du hittar, hur delarna sitter ihop och vilka delar du inte kunde skilja åt. Betygsätt demonterbarheten och föreslå tre ändringar i konstruktionen som skulle göra apparaten enklare att ta isär.

4. **Konstruera om ett fäste.** Välj en produkt där något är limmat, ingjutet eller på annat sätt svårt att ta isär. Skissa en alternativ lösning som gör samma sak men går att öppna, och ange vad den alternativa lösningen kostar i vikt, pris, täthet eller antal delar. Ange också vad den vinner i livslängd, reparation och återvinning.

5. **Undersök reservdelarna.** Välj en apparat i ditt hem och ta reda på vilka reservdelar som går att köpa till den, vad de kostar och hur lång tid leveransen tar. Jämför med vad en ny apparat kostar. Redovisa vid vilken kostnad du själv skulle välja att laga i stället för att köpa nytt, och vad i konstruktionen som gör reparationen enkel eller svår.
