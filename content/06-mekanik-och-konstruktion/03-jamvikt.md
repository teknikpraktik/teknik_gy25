---
id: "6.3"
chapter: 6
sectionNumber: 3
title: Jämvikt
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-09", "n1-10"]
  niva2: ["n2-07"]
learningGoals:
  - Formulera jämviktsvillkoren och använda dem för att beräkna okända krafter i
    enkla fall.
  - Beräkna stödreaktioner för en enkelt belastad balk.
  - Bedöma en konstruktions stabilitet utifrån tyngdpunktens läge och stödytans
    storlek, och förklara när den välter.
abilities: [f3]
concepts_introduced: ["jämvikt", "jämviktsvillkor", "stödreaktion", "ledstöd", "rullstöd", "inspänning", "tyngdpunkt", "stödyta", "stabilitet"]
concepts_used: ["kraft", "moment", "friläggning", "komposant"]
figures: ["fig-6.3.1-a", "fig-6.3.2-b", "fig-6.3.2-a", "fig-6.3.3-a"]
prerequisites: ["6.1", "6.2"]
---

## Jämviktsvillkoren

Gångbron står stilla, hur mycket trafik den än bär. Den varken accelererar uppåt, nedåt eller åt sidan, och den roterar inte. Ett föremål i det tillståndet, där alla krafter och moment som verkar på det tar ut varandra fullständigt, sägs befinna sig i **jämvikt**. Att ett föremål ser ut att stå stilla räcker inte som förklaring: jämvikt är ett tillstånd som går att kontrollera med räkning.

För en konstruktion som belastas i ett plan, vilket är den situation kapitlet behandlar, uttrycks jämvikt i tre **jämviktsvillkor**:

ΣF_x = 0

ΣF_y = 0

ΣM = 0

De två första säger att kraftsumman måste vara noll i varje riktning för sig. Det räcker alltså inte att krafterna sammanlagt "tar ut varandra" på ett ungefär: de vågräta krafterna måste balansera de vågräta, och de lodräta måste balansera de lodräta. Verkar en kraft snett delas den upp i komposanter, och varje komposant förs till sitt eget villkor. Är någon av de två summorna skild från noll återstår en nettokraft, och föremålet accelererar i den riktningen.

Det tredje villkoret säger att summan av alla moment också måste vara noll. Är momentsumman skild från noll roterar föremålet i stället för att stå stilla. Alla tre villkoren måste vara uppfyllda samtidigt: ett föremål kan mycket väl ha kraftsumman noll i båda riktningarna och ändå rotera, om två lika stora men motriktade krafter griper an på olika ställen.

Villkoren används tillsammans med [[begrepp:friläggning]]. Först friläggs föremålet och samtliga yttre krafter ritas in, sedan ställs de tre summorna upp som ekvationer, och ur dem löses de okända krafterna ut. Ordningen är inte utbytbar: en kraft som saknas i friläggningen saknas också i ekvationerna, och felet syns inte i räkningen.

Momentsumman får beräknas kring vilken punkt som helst, eftersom ett föremål i jämvikt inte roterar kring någon punkt alls. Den friheten är värd att utnyttja. Väljs vridpunkten där en okänd kraft griper an försvinner den kraften ur ekvationen, eftersom dess momentarm blir noll, och kvar blir en ekvation med färre obekanta. Väljs i stället en annan punkt går samma problem att lösa, men med mer räknearbete. Att räkna om kring en andra punkt är dessutom ett enkelt sätt att kontrollera ett svar.

[BILD 6.3-1] Innehåll: Två delbilder. Vänster: ett föremål med två motriktade, lika stora krafter som griper an i samma punkt (kraftsumma noll, momentsumma noll, verklig jämvikt). Höger: samma föremål med samma två krafter men förskjutna till olika angreppspunkter (kraftsumma fortfarande noll, men ett moment kvarstår och föremålet roterar). Bildtext: "Kraftsumman kan vara noll och föremålet ändå rotera. Alla tre jämviktsvillkoren måste gälla samtidigt."

## Stödreaktioner

En balk som vilar på två stöd, som gångbrons körbana, hålls uppe av krafter från just de stöden. Dessa krafter kallas **stödreaktioner**: de är stödens svar på den last balken för vidare till dem. Att beräkna stödreaktionerna är ofta det första steget när en konstruktion ska analyseras, eftersom allt som sedan beräknas i balken bygger på hur stor last varje stöd faktiskt bär.

Vilka krafter ett stöd kan ge beror på hur det är byggt, och i beräkningar ersätts verkliga stöd med några få idealiserade typer. Ett **ledstöd** kan ta upp krafter både lodrätt och vågrätt, men hindrar inte balken från att vrida sig kring stödpunkten. Ett **rullstöd** kan bara ta upp kraft vinkelrätt mot underlaget och släpper igenom rörelser i sidled, vilket är hela poängen: en stålbro som värms av solen blir längre, och rullstödet låter den röra sig i stället för att spränga sina egna infästningar. En **inspänning** låser detaljen helt och kan ta upp både krafter och moment, som en flaggstång gjuten i ett fundament eller en balkong som skjuter ut ur en husvägg.

Gångbron har ett ledstöd vid A och ett rullstöd vid B. I kapitlets beräkningar antas dessutom att all last verkar lodrätt, vilket gör att ledstödets vågräta reaktion blir noll. Under det antagandet ger båda stöden bara lodräta krafter, och beräkningen förenklas till en enda kraft per stöd. Antagandet är rimligt för en gångbro med lodrät trafiklast, men det håller inte generellt: en bro som belastas av vind i sidled, eller en stege som lutar mot en vägg, får vågräta reaktioner som inte får glömmas bort.

[BILD 6.3-2] Innehåll: Tre delbilder i rad, var och en med en balkände i ett stöd ritad med den symbol som normalt används på konstruktionsritningar. Ledstöd: triangel med fast spets, med två reaktionspilar inritade, en lodrät och en vågrät, och en böjd pil markerad med kryss för att visa att stödet inte tar upp moment. Rullstöd: triangel på rullar, med endast en lodrät reaktionspil, och en dubbelriktad pil längs underlaget som visar att balken får röra sig i sidled. Inspänning: balken infäst i en väggsektion, med lodrät reaktionspil, vågrät reaktionspil och en böjd momentpil. Under varje delbild ett verkligt exempel: brolager, rullager på en stålbro som får längdändra sig i värme, och en balkong som skjuter ut ur en husvägg. Bildtext: "De tre idealiserade stödtyperna tar upp olika krafter och moment. Förenklingen till lodräta reaktioner är ett val, inte en naturlag."

Gångbron är 6,0 m lång mellan stöden A och B. En cyklist med cykel, tillsammans 900 N, står stilla 2,0 m från stöd A. För att isolera själva metoden försummar vi tills vidare brons egen tyngd, så att bara den nyttiga lasten och de två stödreaktionerna finns med. Den frilagda bron har då tre yttre krafter: cyklistens tyngd nedåt och stödreaktionerna R_A och R_B uppåt.

Momentsumman kring stöd A ger en ekvation med bara en obekant, eftersom R_A:s momentarm till A är noll:

ΣM_A = R_B · 6,0 − 900 · 2,0 = 0

R_B = 900 · 2,0 / 6,0 = 300 N

Kraftsumman i lodrät led ger den andra stödreaktionen:

ΣF_y = R_A + R_B − 900 = 0

R_A = 900 − 300 = 600 N

Stöd A, närmast cyklisten, bär alltså dubbelt så mycket som stöd B, vilket är rimligt: lasten står dubbelt så nära A. Kontrollen görs kring stöd B i stället: R_A · 6,0 − 900 · 4,0 = 600 · 6,0 − 900 · 4,0 = 3600 − 3600 = 0, som det ska vara.

Brons egen tyngd är emellertid inte försumbar i verkligheten, och nästa steg är att ta med den. Egentyngden 3600 N är fördelad över hela brons längd, men eftersom bron är symmetrisk får hela egentyngden ersättas av en enda kraft i mitten, 3,0 m från vardera stödet. Det är ytterligare en idealisering, och den är giltig just för stödreaktionerna. Med cyklisten kvar 2,0 m från A blir momentekvationen kring A

ΣM_A = R_B · 6,0 − 900 · 2,0 − 3600 · 3,0 = 0

R_B = (1800 + 10 800) / 6,0 = 12 600 / 6,0 = 2100 N

ΣF_y = R_A + R_B − 900 − 3600 = 0

R_A = 4500 − 2100 = 2400 N

Kontroll kring B: 2400 · 6,0 − 900 · 4,0 − 3600 · 3,0 = 14 400 − 3600 − 10 800 = 0.

Två saker framgår av jämförelsen. Stöden bär nu 2400 N och 2100 N i stället för 600 N och 300 N, alltså mångdubbelt mer, eftersom egentyngden är fyra gånger så stor som cyklisten. Och skillnaden mellan stöden har krympt, från förhållandet 2:1 till nästan 1:1, eftersom egentyngden är symmetrisk och belastar båda stöden lika. Att försumma egentyngden är alltså en förenkling som kan vara helt rimlig när en metod ska visas, men som ger allvarligt fel svar när en verklig bro ska dimensioneras.

[BILD 6.3-3] Innehåll: Två frilagda balkar under varandra, båda 6,0 m långa med stöden A och B. Övre: endast cyklistens tyngd 900 N, markerad 2,0 m från stöd A, med måtten 2,0 m och 4,0 m och de beräknade stödreaktionerna 600 N och 300 N utskrivna. En text markerar att egentyngden är försummad i det här steget. Undre: samma balk med cyklisten kvar och dessutom egentyngden 3600 N inritad som en pil i brons mitt, 3,0 m från vardera stödet, med de beräknade stödreaktionerna 2400 N och 2100 N utskrivna. Bredvid den undre bilden visas den jämnt fördelade egentyngden som en rad små pilar längs balken, med en likhetspil till den enda samlade pilen i mitten, för att visa vilken idealisering som gjorts. Bildtext: "Att försumma egentyngden kan visa en metod, men ger allvarligt fel svar när en verklig bro ska dimensioneras."

## Tyngdpunkt och stabilitet

Varje föremål har en punkt där hela dess tyngd kan tänkas verka samlad, som om resten av föremålet vore viktlöst. Den punkten kallas föremålets **tyngdpunkt**. För ett jämnt fördelat föremål, som en rak balk eller en symmetrisk platta, ligger tyngdpunkten i geometrins mittpunkt, och det var precis den egenskapen som lät gångbrons egentyngd ersättas av en enda kraft i mitten. För en ojämnt fördelad konstruktion, som en lyftkran med tung motvikt i ena änden, ligger tyngdpunkten förskjuten mot den tyngre delen.

Ett föremåls **stödyta** är den yta som spänns upp mellan dess kontaktpunkter mot underlaget: avståndet mellan fötterna hos en stående person, eller den rektangel som en mobilkrans fyra utfällda stödben bildar mot marken. Sambandet mellan tyngdpunkt och stödyta avgör föremålets **stabilitet**. Så länge den lodräta linjen genom tyngdpunkten faller innanför stödytan skapar tyngdkraften inget moment som kan välta föremålet. Hamnar linjen utanför stödytan uppstår i stället ett moment kring stödytans kant, och föremålet välter.

En mobilkran som lyfter en tung last riskerar att välta kring det stödben som ligger närmast lasten. Kranens egen tyngd, 50 000 N, verkar genom kranens tyngdpunkt 1,5 m på den stabila sidan om det stödbenet och ger ett stabiliserande moment på

50 000 · 1,5 = 75 000 Nm

Lasten på 8000 N hänger 8,0 m ut från samma stödben och ger ett vältande moment på

8000 · 8,0 = 64 000 Nm

Eftersom det stabiliserande momentet, 75 000 Nm, är större än det vältande, 64 000 Nm, förblir kranen stående. Marginalen är däremot inte stor. Ökar lasten till 9400 N, eller svänger föraren ut bommen ytterligare drygt en meter, är momenten lika stora och kranen står på gränsen till att tippa. Det är därför en verklig kran aldrig körs till sin beräknade vältgräns: lastdiagrammet i förarhytten anger en tillåten last med marginal, och den marginalen ska täcka in vindlast, ojämnt underlag, lasten som svänger och kranens egen rörelse.

Samma princip avgör varför en hög, fylld bokhylla lättare välter framåt än en låg och bred, och varför den understa hyllan bör bära det tyngsta: en låg tyngdpunkt och en bred stödyta ger tillsammans god stabilitet.

[BILD 6.3-4] Innehåll: Tre delbilder. Först en lyftkran med tyngdpunkt och stödyta markerade, med det stabiliserande och det vältande momentet inritade som pilar kring stödpunkten. Sedan samma kran med en tyngre last, där den lodräta linjen genom den samlade tyngdpunkten faller utanför stödytan. Sist en hög bokhylla jämförd med en låg och bred, med tyngdpunktens höjd och stödytans bredd markerade i båda. Bildtext: "Så länge tyngdpunktens lodlinje faller innanför stödytan står föremålet. Låg tyngdpunkt och bred stödyta ger stabilitet."

## Instuderingsfrågor

1. Skriv upp de tre jämviktsvillkoren för ett plant problem och förklara vad var och en innebär. Varför räcker det inte med ett enda villkor för kraftsumman?
2. Ge ett exempel på ett föremål som har kraftsumman noll i båda riktningarna men ändå inte är i jämvikt. Förklara varför.
3. Varför får momentsumman beräknas kring vilken punkt som helst, och varför väljs ofta en punkt där en okänd kraft griper an?
4. Förklara skillnaden mellan ett ledstöd, ett rullstöd och en inspänning utifrån vilka krafter och moment de kan ta upp.
5. I kapitlets beräkningar på gångbron antas att stöden bara ger lodräta krafter. Vilket antagande om lasten ligger bakom förenklingen, och ge ett exempel på en konstruktion där den inte håller.
6. Förklara sambandet mellan tyngdpunkt, stödyta och stabilitet, och beskriv vad som händer i det ögonblick ett föremål börjar välta.
7. En hyllkonsol är fastskruvad i en vägg och bär en last ytterst på hyllplanet. Frilägg konsolen och avgör vilken idealiserad stödtyp infästningen mot väggen motsvarar. Förklara därefter varför den övre skruven i infästningen belastas i drag medan den nedre pressas mot väggen, och vad som händer med den dragkraften om hyllplanet görs dubbelt så djupt utan att lasten ändras. Bedöm slutligen vilket av de tre jämviktsvillkoren som är avgörande för att den här konstruktionen ska hålla.

## Övningar

1. En balk är 4,0 m lång och vilar på stöd i båda ändarna, A och B. En last på 600 N placeras 1,0 m från stöd A. Beräkna R_A och R_B. Avgör innan du räknar vilket stöd som bör bära mest.
2. En byggnadsställnings bärbalk är 8,0 m lång och vilar på stöd i ändarna. Två laster verkar nedåt: 2000 N på 2,0 m från stöd A och 3000 N på 6,0 m från stöd A. Beräkna stödreaktionerna.
3. Gångbron är 6,0 m lång med stöd i ändarna. Egentyngden 3600 N verkar i brons mitt, och en barnvagn med tyngden 1200 N står 4,5 m från stöd A. Beräkna stödreaktionerna, och kontrollera svaret genom att räkna momentsumman kring det andra stödet.
4. En mobilkrans egen tyngd är 40 000 N och verkar 2,0 m på den stabila sidan om det kritiska stödbenet. Hur stor last får hänga 10 m ut på bommen innan kranen står på gränsen till att välta?
5. En travers i en verkstad har en bärbalk som spänner 12,0 m mellan stöden A och B. Balkens egentyngd är 8000 N och verkar i mitten. En lyftvagn med last, tillsammans 15 000 N, står 3,0 m från stöd A. Beräkna stödreaktionerna och kontrollera svaret kring det andra stödet. Bestäm därefter var lyftvagnen ska stå för att de båda stöden ska bära lika mycket, och beräkna den största reaktionskraft stöd A någonsin kan utsättas för när vagnen körs längs hela balken. Bedöm om det värdet är rimligt i förhållande till den totala lasten på balken, och förklara vilket av stöden du skulle kontrollera först vid en besiktning.
