---
type: facit
chapter: 8
sectionNumber: 5
title: Facit
status: fardig-forsta-version
utanSvar:
  instuderingsfragor: []
  ovningar:
    - "8.1:1"
    - "8.1:5"
    - "8.2:5"
---

## 8.1 Modeller och digital modellering

### Instuderingsfrågor

1. En förenklad beskrivning av något verkligt, gjord för att svara på en bestämd fråga. Frågan avgör utformningen, och samma sak kan därför modelleras på flera helt olika sätt.
2. Värmegenomgången, alltså den effekt som krävs för att hålla innetemperaturen en grad över utetemperaturen, och värmekapaciteten, alltså den energi som måste lämna huset för att det ska bli en grad kallare.
3. Exempel på antaganden är att hela huset har samma temperatur, att utetemperaturen ligger stilla, att solen inte värmer och att ingen personvärme tillförs. Håller inte antagandet om konstant utetemperatur, utan luften blir kallare under natten, svalnar huset i verkligheten snabbare än modellen visar.
4. De förhållanden inom vilka modellen ger användbara svar. Husmodellen slutar gälla när marssolen värmer söderfasaden, eller när huset blir så kallt att vattnet i elementen fryser och förloppet övergår i något annat.
5. Resultatet vilar på antagandena, och utan dem går det inte att bedöma av någon annan. En modell är aldrig säkrare än de antaganden den bygger på.
6. Den fysiska modellen är byggd i verkligheten, och verkligheten sköter då fysiken själv, även den del av den ingen tänkt på. Den matematiska modellen uttrycker samma sak som samband mellan storheter och räknas fram.
7. När förloppet är för invecklat för att räknas på med tillräcklig säkerhet, till exempel strömmande luft kring en oregelbunden form eller vatten som river med sig sand. Då ger provet ett svar som ingen beräkning kan garantera.
8. Ett tal som hålls fast under en beräkning men som kan ändras för att beskriva ett annat fall, till exempel husets värmegenomgång. Det modellen räknar fram är i stället resultatet, här innetemperaturen timme för timme.
9. En matematisk modell som en dator räknar på. Kalkylarket med husets avsvalning är ett exempel, och CAD-modellen ett annat, byggd av geometri i stället för av samband.
10. Temperaturskillnaden mot uteluften krymper medan huset svalnar, och därmed minskar effekten ut. Temperaturfallet blir alltså långsammare för varje timme som går.
11. Förloppet räknas i steg, och varje steg utgår från det tillstånd föregående steg slutade i. Annars skulle den krympande temperaturskillnaden aldrig komma in i beräkningen.
12. För att modellen ska gå att ändra på ett enda ställe. Ett ark med talen inbakade i formlerna måste skrivas om vid varje ändring och kan bara besvara den fråga det byggdes för.

### Övningar

2. Busskuren i sidvind lämpar sig för en fysisk modell i vindtunnel, eftersom strömningen kring formen är svår att beräkna med säkerhet. Elcykelns räckvidd och solcellsanläggningens årsproduktion beräknas digitalt, eftersom sambanden är kända och många varianter ska jämföras. Handtaget kräver en fysisk modell, eftersom svaret bara finns i en hand som håller i den. Busskuren är den fråga som behöver båda: beräkningen sållar bland formerna och vindtunneln avgör mellan de bästa.
3. Temperaturskillnaden är 31 grader. Effekten blir 0,09 · 31 = 2,79 kW, energin under den första timmen 2,79 kWh och temperaturfallet 2,79 / 12 = 0,23 grader. Efter en timme är det 20,8 grader inne. Enheterna går ihop, eftersom kilowatt per grad gånger grader ger kilowatt och kilowattimmar delat med kilowattimmar per grad ger grader. Resultatet är rimligt: trots att det är tio grader kallare ute svalnar huset långsammare än huset i avsnittet, 0,23 mot 0,3 grader första timmen, vilket beror på den lägre värmegenomgången.
4. Huset passerar 15 grader efter ungefär 23 timmar och 10 grader efter ungefär 48 timmar.

## 8.2 Simulering och verifiering

### Instuderingsfrågor

1. Att låta en modell räkna ut hur ett förlopp utvecklar sig, i stället för att låta förloppet ske i verkligheten.
2. Ett kort tidsintervall som förloppet delas upp i. Inom steget antas förhållandena vara oförändrade, till exempel att temperaturskillnaden mot uteluften ligger stilla.
3. Trappan kommer närmare det verkliga, jämna förloppet. Priset är fler rader att räkna.
4. Ett kortare steg löser bara ekvationerna bättre. Bygger modellen på fel antaganden räknar den fel lika säkert med korta steg som med långa.
5. Provet kan vara farligt, som ett brandförlopp i en byggnad full av människor. Det kan vara för dyrt eller för långsamt, som att åldra en konstruktion i tjugo år. Det kan vara omöjligt att ordna, som att stänga av värmen i ett bebott hus under en köldknäpp. Och ska många varianter jämföras måste var och en av dem annars byggas.
6. Simuleringen räknar bara på det som skrivits in i den, medan verkligheten alltid innehåller mer. Där ett fel skulle bli dyrt eller farligt behövs därför ett fysiskt prov också.
7. Ändras två saker samtidigt går det inte att avgöra vilken av dem som orsakade skillnaden i resultatet.
8. Att ändra en parameter i taget och se hur mycket svaret påverkas. Resultatet visar både vad som lönar sig att åtgärda och vilka tal som måste bestämmas noga.
9. Att tilläggsisolera ger mer än något annat. En halverad värmegenomgång fördubblar tiden, medan tio graders kallare uteluft bara kortar den med ungefär en tredjedel.
10. Verifieringen kontrollerar att modellen räknar rätt utifrån sina egna samband och antaganden. Valideringen kontrollerar att modellen beskriver verkligheten tillräckligt väl för sitt syfte.
11. Enhetskontroll genom hela kedjan, handräkning av det första steget jämförd med arkets första rad, halvering av tidssteget, och prövning av extremfall.
12. Extremfallen avslöjar fel i själva sambandet, till exempel ett feltecken som visar sig genom att huset svalnar trots att det är lika varmt ute som inne. Handräkningen kan stämma även då, eftersom den använder samma felaktiga samband som arket.
13. För att gränsen ska styras av vad svaret ska användas till och inte av det utfall man råkade få. En gräns satt i efterhand går alltid att lägga så att modellen ser bra ut.
14. Ekvationerna kan lösas felfritt på antaganden som inte håller, till exempel en utetemperatur som antas ligga stilla men sjunker under natten. Verifieringen kan inte upptäcka det, eftersom den bara jämför modellen med sig själv.
15. Modellen har bara prövats mot verkligheten under de förhållanden mätningen omfattade. Att lita på den utanför dem är samma slags extrapolation som att förlänga en trendlinje utanför sitt mätområde.

### Övningar

1. Tolvtimmarssteget ger 14,3 grader, timsteget 14,7 och halvtimmessteget 14,7. Timsteget räcker, eftersom en halvering av det bara ändrar svaret i hundradelar, medan det grova steget avviker med några tiondelar.
2. Huset passerar 15 grader efter ungefär 29 timmar vid 0 grader ute, 23 timmar vid 5 minusgrader, 16 timmar vid 15 minusgrader och 12 timmar vid 25 minusgrader. Ändringen är inte lika stor i alla fallen: de tio första gradernas kyla kostar ungefär sju timmar och de tio följande bara fyra, eftersom tiden styrs av förhållandet mellan temperaturskillnaderna och inte av deras differens.
3. Tilläggsisoleringen ger ungefär 18 timmar och den ökade värmekapaciteten ungefär 15 timmar, mot ungefär 13 timmar i utgångsläget. Isoleringen ger mest, eftersom tiden är proportionell mot värmekapaciteten delad med värmegenomgången. Värmegenomgången sänks med 30 procent medan värmekapaciteten bara ökar med drygt 15 procent.
4. Enheterna ska gå ihop hela vägen fram till grader, och gör de inte det är en formel fel. Handräkningen av det första steget ska ge samma tal som arkets första rad, annars är en formel felskriven eller en cellhänvisning fel. En halvering av tidssteget ska ändra svaret bara i hundradelar, och ändras det mer är steget för långt. Med utetemperaturen lika med starttemperaturen ska ingenting hända, och svalnar huset ändå är sambandet feltecknat.
