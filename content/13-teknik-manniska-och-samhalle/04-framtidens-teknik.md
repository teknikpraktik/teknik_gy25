---
id: "13.4"
chapter: 13
sectionNumber: 4
title: Framtidens teknik
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-12"]
  niva2: ["n2-09", "n2-11"]
learningGoals:
  - Beskriva möjligheter och risker med framtidens teknik och värdera teknikens
    roll i att möta samhällsutmaningar.
abilities: [f2, f4]
concepts_introduced: ["teknikmognad", "skalbarhet", "kritisk råvara", "rekyleffekt"]
concepts_used: ["prototyp", "teknisk inlåsning", "oavsedd följd", "återanvändning"]
figures: []
prerequisites: ["1.3", "9.4", "13.1", "13.3"]
---

Det sägs varje år att en ny teknik ska förändra allt. Ibland stämmer det. Oftare händer ingenting, och ibland händer något helt annat än det som utlovades.

Det här avsnittet ger inga förutsägelser. Det ger i stället två saker som är mer användbara. Först en genomgång av var de största möjligheterna och riskerna faktiskt sitter, och sedan en metod för att bedöma ett påstående om framtidens teknik utan att behöva veta hur det går.

## Möjligheter och risker

**Elektrifieringen är det största pågående teknikskiftet.** Transporter, uppvärmning och delar av industrin går från bränsle till el. Möjligheten är att energi som används som el kan utnyttjas mycket effektivare än energi som förbränns, och att den kan komma från källor som inte ger utsläpp under drift.

Riskerna och begränsningarna är tekniska och konkreta. Elen måste finnas när den behövs, vilket kräver lagring eller reglerbar produktion. Den måste kunna transporteras dit den behövs, vilket kräver överföringskapacitet i näten, och den kapaciteten är i dag en av de faktiska begränsningarna för hur snabbt omställningen kan gå. Ny nätkapacitet tar många år att bygga, betydligt längre tid än det tar att bygga den fabrik eller den laddplats som behöver den. Här verkar dessutom [[begrepp:teknisk inlåsning]], eftersom det som byggs nu bestämmer vad som är möjligt i femtio år.

**Digitaliseringen fortsätter, och tyngdpunkten flyttar.** Möjligheten är att mätning, styrning och underhåll kan ske på avstånd och i förväg. En uppkopplad maskin som rapporterar sitt tillstånd kan servas innan den går sönder, vilket sparar både material och stillestånd.

Riskerna följer av samma sak. Ett system som styrs på avstånd kan störas på avstånd, vilket gör driftsäkerhet och skydd mot angrepp till konstruktionsfrågor och inte till efterhandsåtgärder. Beroendet växer också. En verksamhet som inte längre kan utföra sitt arbete när uppkopplingen ligger nere har lagt en förutsättning i sin process som ingen har dimensionerat.

**Artificiell intelligens ändrar vilka uppgifter som går att automatisera.** Möjligheten är att uppgifter som kräver mönsterigenkänning, alltså att sortera, känna igen, sammanfatta och föreslå, går att utföra maskinellt i en omfattning som inte var möjlig förut. Det gäller också uppgifter inom teknikarbetet självt.

Riskerna är av tre slag, och alla tre är tekniska. Systemet är inte bättre än sitt underlag, vilket är samma sak som avsnittet om normer beskrev. Systemet anger sällan hur säkert det är på sitt svar, vilket gör att ett fel ser likadant ut som ett riktigt svar. Och beräkningarna kräver energi och kylning i en omfattning som gör datacenter till en fråga om elförsörjning.

**Materialet kan bli begränsningen.** En *kritisk råvara* är ett material som är nödvändigt för viktig teknik samtidigt som tillgången är osäker, antingen därför att utvinningen är koncentrerad till få platser eller därför att den är svår att öka. Sällsynta jordartsmetaller i permanentmagneter, som sitter i vindkraftverk och elmotorer, är exempel, liksom litium och kobolt i batterier. EU för en förteckning över sådana material just därför att de kan bli den verkliga flaskhalsen.

Detta binder ihop avsnittet med föregående. En teknik som bygger på ett material med osäker tillgång har en svaghet som varken bättre konstruktion eller större efterfrågan löser. Det som hjälper är att konstruera bort beroendet, att öka [[begrepp:återanvändning]]en eller att hitta ett ersättningsmaterial, alltså tre tekniska åtgärder.

**Vinsten äts delvis upp av ökad användning.** En *rekyleffekt* uppstår när en effektivisering leder till att tekniken används mer, så att den samlade besparingen blir mindre än beräknat. Belysningen är det tydligaste exemplet. Ljuskällorna har blivit många gånger effektivare, men antalet ljuspunkter och antalet timmar de lyser har samtidigt ökat, och den samlade energianvändningen för belysning har därför inte minskat i den takt verkningsgraden skulle ge.

Rekyleffekten är inget argument mot effektivisering. Den är ett skäl att räkna på hela användningen och inte bara på verkningsgraden, och att skilja mellan vad en åtgärd gör per enhet och vad den gör totalt. Det är samma slags [[begrepp:oavsedd följd]] som beskrevs tidigare, med skillnaden att den här är förutsägbar och därför borde räknas med.

## Att bedöma ett framtidspåstående

Att avgöra om en ny teknik kommer att slå igenom är omöjligt. Att avgöra om ett påstående om den är rimligt är däremot fullt möjligt, och det görs med fyra frågor.

**Hur långt har tekniken kommit?** *Teknikmognad* är ett mått på hur långt en teknik har utvecklats, från en princip som visats i laboratorium till en produkt som fungerar i verklig drift. Den anges ofta på en niogradig skala, där de lägsta stegen betyder att grundprincipen är visad, mittstegen att en [[begrepp:prototyp]] fungerar under kontrollerade förhållanden, och de högsta att systemet har provats och används i sin verkliga miljö.

Skalan är användbar därför att den skiljer mellan påståenden som låter likadana. Att något har visats i ett laboratorium och att något är i drift hos kunder är två helt olika saker, och tiden mellan dem räknas normalt i tiotals år för fysisk teknik. Ett påstående som blandar ihop de två är nästan alltid för optimistiskt.

**Går den att skala upp?** *Skalbarhet* är i vilken utsträckning en lösning fungerar lika bra i stor skala som i liten. Det är det steg där flest tekniker fastnar, och skälet är att fyra helt andra svårigheter uppstår när volymen växer, alltså jämn kvalitet i varje enhet, tillgång på material, energiförsörjning och personal med rätt kunnande.

Batteritillverkning i Sverige är ett exempel som visar det tydligt. Att tillverka en battericell med rätt egenskaper är en sak, och att tillverka miljontals med jämn kvalitet och godtagbart utbyte är en annan. Det företag som byggde en cellfabrik i Skellefteå nådde inte de planerade volymerna och försattes i konkurs 2025, trots att tekniken i sig var känd. Uppskalning är alltså ett eget tekniskt problem och inte en formsak som följer efter utvecklingen.

**Vad kräver den som ännu inte finns?** Nästan varje ny teknik förutsätter något utanför sig själv. En laddbar fordonsflotta förutsätter laddplatser och nätkapacitet, vätgas som bränsle förutsätter produktion, lagring och distribution, och en ny standard förutsätter att tillräckligt många ansluter sig. Frågan är därför inte bara om tekniken fungerar utan vad mer som måste byggas, hur lång tid det tar och vem som betalar det.

**Vad händer med det som redan finns?** En ny teknik ersätter sällan den gamla över en natt. Den befintliga anläggningen är betald, fungerar och har en återstående livslängd, och den byts när den ändå ska bytas. Det är därför omställningstakten i tunga system ofta bestäms av utbytestakten och inte av hur bra det nya är.

[BILD 13.4-1] Innehåll: En vågrät skala i nio steg för teknikmognad, från princip visad till vänster till i drift i verklig miljö till höger, med de tre grupperna laboratorium, prototyp och drift markerade under skalan. Ovanför skalan en kurva som visar hur många projekt som finns kvar vid varje steg, kraftigt fallande. Mellan stegen som motsvarar fungerande prototyp och produktion i skala markeras ett brett fält, skrafferat och märkt uppskalning, med de fyra svårigheterna jämn kvalitet, materialtillgång, energi och kompetens uppräknade i fältet. Under skalan en tidsaxel som visar att avståndet mellan laboratorium och drift normalt räknas i tiotals år för fysisk teknik. Bildtext: "Ett påstående om ny teknik betyder olika saker beroende på var på skalan tekniken står. Det breda fältet i mitten är där flest projekt stannar."

De fyra frågorna räcker för att sortera de flesta påståenden. De besvarar inte om tekniken kommer att lyckas, men de gör skillnad på ett påstående som går att pröva och ett som bara är en förhoppning.

**Teknik löser inte samhällsutmaningar ensam.** Det är avsnittets och kapitlets sista poäng, och den följer av allt det föregående. En teknisk lösning som fungerar blir verksam först när den byggs i skala, ansluts till det som redan finns, går att betala och används av dem den var avsedd för. Vart och ett av de fyra villkoren är ett arbete i sig, och tre av dem är inte tekniska.

Det gör inte tekniken mindre viktig. Det gör att teknikerns bidrag har en bestämd form. Att visa vad som är fysiskt möjligt, vad det kostar, vad det kräver och vilka följder det får är underlaget som varje beslut om framtiden vilar på, och ingen annan kan ta fram det.

[BILD 13.4-2] Innehåll: Ett granskningsschema för ett framtidspåstående, ritat som fyra rutor under varandra med var sin fråga: hur långt har tekniken kommit, går den att skala upp, vad kräver den som ännu inte finns, och vad händer med det som redan finns. Till höger om varje ruta ett fält där påståendet prövas, med exempel på svar som stärker respektive försvagar påståendet. Längst ned en ruta märkt slutsats, med tre möjliga utfall angivna som prövbart och rimligt, prövbart men osäkert, samt inte prövbart som det är formulerat. Bildtext: "Frågorna avgör inte om tekniken lyckas. De avgör om påståendet går att pröva."

## Instuderingsfrågor

1. Varför ger avsnittet en metod för att bedöma påståenden i stället för förutsägelser?
2. Vad är den tekniska möjligheten med elektrifiering, och vilka två villkor måste vara uppfyllda för att elen ska komma till nytta?
3. Varför är överföringskapaciteten i elnätet en begränsning för hur snabbt elektrifieringen kan gå?
4. Hur verkar teknisk inlåsning i det som byggs i elsystemet i dag?
5. Ange en möjlighet och en risk med att en maskin är uppkopplad, och varför de följer av samma egenskap.
6. Ange de tre tekniska riskerna med artificiell intelligens som avsnittet tar upp.
7. Varför är det ett problem att ett system sällan anger hur säkert det är på sitt svar?
8. Vad är en kritisk råvara, och varför räcker det inte med bättre konstruktion för att lösa ett beroende av en sådan?
9. Ange tre tekniska åtgärder mot ett beroende av en kritisk råvara.
10. Vad är en rekyleffekt, och varför är den inget argument mot effektivisering?
11. Vad menas med teknikmognad, och vad skiljer de lägsta stegen på skalan från de högsta?
12. Vad är skalbarhet, och vilka fyra svårigheter uppstår när volymen växer?
13. Varför är uppskalning ett eget tekniskt problem och inte en formsak som följer efter utvecklingen?
14. Varför bestäms omställningstakten i tunga system ofta av utbytestakten och inte av hur bra det nya är?
15. Vilka fyra villkor måste vara uppfyllda för att en fungerande teknisk lösning ska bli verksam, och hur många av dem är tekniska?

## Övningar

1. **Räkna på rekylen.** En skola byter ut 200 armaturer på 58 W mot LED-armaturer på 22 W. Samtidigt byggs belysningen ut till 260 armaturer, och den genomsnittliga brinntiden ökar från 8 till 10 timmar per dag. Beräkna energianvändningen per dag före och efter bytet, och hur många procent den minskade. Beräkna därefter vad minskningen hade blivit om bara armaturerna hade bytts, utan utbyggnad och utan ökad brinntid. Ange hur stor del av den möjliga besparingen som gick förlorad, och vad skolan skulle ha behövt besluta samtidigt med bytet för att behålla den.

2. **Placera på mognadsskalan.** Ange för vart och ett av dessa fall om tekniken befinner sig i laboratoriestadiet, prototypstadiet eller i drift, och motivera med det som sägs: en ny batterikemi som visats fungera i celler på storleken av ett mynt, ett vindkraftverk av en typ som stått i drift i ett år på en plats, ett flygplan med eldrift som har flugit med besättning men utan passagerare, ett material som beskrivits i en vetenskaplig artikel med mätdata från en provbit, och en laddstolpstyp som finns på tusentals platser. Ange därefter för de tre lägsta fallen vilken uppgift du skulle behöva för att avgöra om de är på väg framåt eller har fastnat.

3. **Vad mer måste byggas?** Välj en teknik som beskrivs som framtidens lösning på ett problem, till exempel vätgas i industrin, självkörande fordon, kärnkraft i små reaktorer, odlat kött eller batterilagring i elnätet. Ta reda på vad den förutsätter utöver sig själv. Lista minst fyra sådana förutsättningar, ange för var och en hur lång tid den bedöms ta att få på plats och vem som skulle betala den. Avsluta med vilken av de fyra du bedömer som den verkliga flaskhalsen, och varför.

4. **Granska ett påstående.** Leta upp ett konkret påstående om framtidens teknik i en artikel, en annons eller ett företags egen information. Skriv av påståendet ordagrant. Gå därefter igenom det med avsnittets fyra frågor och redovisa svaren. Ange till sist om påståendet är prövbart och rimligt, prövbart men osäkert, eller inte prövbart som det är formulerat, och skriv om det så att det blir prövbart.

5. **Väg en lösning mot en samhällsutmaning.** Välj en samhällsutmaning där teknik brukar framhållas som lösningen, till exempel utsläpp från transporter, brist på bostäder, vattenbrist i sommartorka eller påfrestningen på vården. Beskriv vilken teknisk lösning som brukar föreslås och vad den faktiskt löser. Ange därefter vilka delar av utmaningen som blir kvar även om tekniken fungerar precis som utlovat, och vad de delarna skulle kräva i stället. Avsluta med vad du som tekniker skulle kunna bidra med till beslutet, och var din bedömning slutar.
