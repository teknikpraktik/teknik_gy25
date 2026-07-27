---
id: "5.4"
chapter: 5
sectionNumber: 4
title: Tillverkning och material
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-02"]
  niva2: []
learningGoals:
  - Beskriva vanliga tillverkningsmetoder och koppla dem till lämpliga
    materialgrupper.
  - Förklara hur valet av material och tillverkningsmetod påverkar en detaljs
    utformning och kostnad.
abilities: [f3]
concepts_introduced: ["gjutning", "plastisk bearbetning", "skärande bearbetning", "formsprutning", "additiv tillverkning", "fogning", "tillverkningsanpassning"]
concepts_used: ["metall", "termoplast", "härdplast", "komposit", "legering", "tolerans"]
figures: []
prerequisites: ["5.3"]
---

## Tillverkningsmetoder

Ett material och en metod väljs sällan var för sig. Aluminiumramens rör är extruderade och svetsade, stålramens är dragna och svetsade eller lödda, och kolfiberramen är byggd i en form. Metoderna är inte utbytbara mellan materialen, och det som går att tillverka billigt i det ena går kanske inte alls i det andra.

Metoderna grupperas efter vad som händer med materialet. Antingen formas det i flytande tillstånd, formas i fast tillstånd, tas bort, byggs upp eller fogas samman.

*Gjutning* innebär att smält material hälls eller pressas in i en form och får stelna. Metoden hanterar komplicerade former som skulle vara dyra att bearbeta fram, och den används mest till metaller som gjutjärn och aluminiumlegeringar. Formen kostar, ytan blir sällan tillräckligt fin och måtten sällan tillräckligt noggranna, så gjutgods efterbearbetas nästan alltid på de ytor där det behövs.

*Plastisk bearbetning* innebär att materialet formas i fast tillstånd genom att det trycks, valsas, dras eller böjs. Hit hör valsning av plåt, smide, bockning och dragning av rör. Hit hör också strängpressning, där en profil pressas ut genom ett munstycke ungefär som tandkräm ur en tub, vilket är just så aluminiumrören till en cykelram blir till. Metoderna kräver ett material som är formbart, alltså i praktiken metaller.

*Skärande bearbetning* innebär att material tas bort tills detaljen har rätt form, genom svarvning, fräsning, borrning eller slipning. Noggrannheten är hög, metoden fungerar på nästan alla fasta material och den kräver inget dyrt verktyg som är gjort för just den detaljen. Nackdelarna är att varje detalj tar tid och att det som tas bort blir spån.

*Formsprutning* innebär att smält termoplast sprutas in i ett stängt verktyg under högt tryck, kyls och stöts ut. En detalj tar sekunder, ytan blir färdig direkt och formen kan vara mycket komplicerad. Verktyget är däremot dyrt och tar veckor att tillverka, så metoden förutsätter att många detaljer ska göras.

*Additiv tillverkning* innebär att materialet byggs upp lager för lager, i plast eller metall, direkt ur en digital modell. Eftersom inget verktyg behövs kostar den första detaljen ungefär lika mycket som den hundrade, vilket gör metoden överlägsen för enstaka exemplar och prototyper. Den är samtidigt långsam per detalj, och geometrier som annars vore omöjliga, som kanaler inuti en detalj, blir plötsligt möjliga.

*Fogning* binder samman delar till en helhet, genom svetsning, lödning, limning, nitning eller skruvförband. Här styr materialet hårdare än någon annanstans. Stål svetsas enkelt och kan lagas i vilken verkstad som helst. Aluminium svetsas också, men värmen sänker hållfastheten i zonen runt svetsen, och därför värmebehandlas en svetsad aluminiumram efteråt för att egenskaperna ska komma tillbaka. Termoplaster går att svetsa medan härdplaster inte gör det, och kompositer fogas i praktiken genom limning eller genom att delarna lamineras ihop redan från början.

Kompositdetaljer tillverkas nämligen på ett eget sätt. Fibrerna läggs i en form, riktade åt de håll lasten går, och genomdränks med härdplast som får härda under tryck och värme. Formen kan göras så att en hel ram byggs i ett stycke, men arbetet är tidskrävande och till stor del manuellt.

[BILD 5.4-1] Innehåll: Sex metodgrupper i rad, var och en med en enkel processbild och två typiska produkter. Gjutning med smält metall som hälls i en form, plastisk bearbetning med en profil som pressas ut genom ett munstycke, skärande bearbetning med ett fräsverktyg som tar bort spån, formsprutning med ett stängt verktyg och en insprutningsenhet, additiv tillverkning med ett munstycke som bygger lager på lager, och fogning med en svetsfog och ett skruvförband. Under varje grupp anges vilka materialgrupper metoden passar för. Bildtext: "Metoden väljs tillsammans med materialet. Det som går att gjuta går sällan att extrudera, och tvärtom."

Antalet detaljer avgör vilken metod som är billigast. Kostnaden per detalj består av två delar: verktygskostnaden utslagen på antalet, plus kostnaden för att göra varje detalj. Antag att en detalj kan formsprutas med ett verktyg som kostar 120 000 kronor och därefter 4 kronor per detalj, eller skrivas ut additivt utan verktyg för 90 kronor per detalj. Vid 100 detaljer blir formsprutningen

120 000 / 100 + 4 = 1 204 kr per detalj

medan utskriften kostar 90 kronor. Vid 5 000 detaljer blir formsprutningen i stället

120 000 / 5 000 + 4 = 28 kr per detalj

Gränsen där metoderna kostar lika mycket ligger där verktygskostnaden per detalj äter upp skillnaden i styckkostnad, alltså vid

120 000 / n = 90 − 4 = 86, vilket ger n ≈ 1 400 detaljer

Under omkring 1 400 detaljer är utskriften billigast, över den gränsen formsprutningen. Beräkningen är grov men fångar det som styr valet i verkligheten, och den förklarar varför prototypen och serieprodukten ofta tillverkas på helt olika sätt trots att de har samma form.

[BILD 5.4-2] Innehåll: Diagram med antal detaljer på den vågräta axeln och kostnad per detalj på den lodräta. Två kurvor: formsprutning som börjar mycket högt och faller brant mot ett golv strax över fyra kronor, och additiv tillverkning som ligger vågrätt på nittio kronor. Skärningspunkten vid ungefär 1 400 detaljer är markerad, och områdena på var sida är märkta med vilken metod som är billigast. Bildtext: "Verktygskostnaden slås ut på antalet. Var kurvorna korsar varandra avgör vilken metod som är rätt."

## Tillverkningsanpassning

*Tillverkningsanpassning* är att utforma detaljen så att den går att tillverka enkelt, säkert och billigt med den metod som valts. En detalj som är ritad utan hänsyn till tillverkningen går ofta att göra ändå, men till ett pris som ingen räknat med.

Varje metod har sina regler. En gjuten detalj behöver svagt lutande sidor så att den släpper ur formen, jämn godstjocklek så att den svalnar likformigt och avrundade inre hörn så att materialet hinner fylla ut. En formsprutad detalj följer samma regler, och tjocka partier ger dessutom insjunkna ytor när plasten krymper. En skärande bearbetad detalj blir billigare om hålen har standarddiametrar, om fickorna inte är djupa och smala och om detaljen går att spänna fast stadigt. En additivt tillverkad detalj måste kunna byggas underifrån, eftersom kraftiga överhäng kräver stödmaterial som ska bort efteråt, och riktningen den byggs i påverkar hur stark den blir. En svetsad konstruktion kräver att svetsen går att komma åt med pistolen, och svetsen läggs helst inte där belastningen är som störst.

Toleranserna hör hit. Varje snäv tolerans kostar bearbetningstid och ger fler kasserade detaljer, och den som toleranserar allt lika snävt betalar för noggrannhet som ingen behöver.

Antalet delar är den enskilt största kostnadsdrivaren. Varje del ska ritas, beställas, lagerhållas, hanteras och fogas, och varje fog är dessutom ett ställe där något kan gå fel. En konstruktion med fem delar som kan bli tre bör bli tre.

Cykelramarna visar hur långt materialet och metoden tillsammans styr utformningen. Stålramen byggs av dragna rör som fogas i knutpunkter och kan lagas var som helst. Aluminiumramen byggs av extruderade rör som svetsas och värmebehandlas, och rören görs grova eftersom materialet är mjukare. Kolfiberramen byggs i en form, ofta i ett enda stycke, och kan därför ha former som varken går att extrudera eller svetsa fram. Tre material, tre metoder och tre ramar som inte ser likadana ut, trots att kravet på alla tre är detsamma.

[BILD 5.4-3] Innehåll: Samma detalj ritad i två utföranden bredvid varandra. Till vänster ett utförande som är svårt att tillverka, med lodräta sidor utan släppning, ojämn godstjocklek, skarpa inre hörn och en djup smal ficka. Till höger samma funktion tillverkningsanpassad, med lutande sidor, jämn godstjocklek, avrundade hörn och en grundare ficka. Varje ändring är utpekad med en kort text om vad den sparar. Bildtext: "Samma funktion, två utföranden. Skillnaden syns inte i funktionen utan i priset."

## Instuderingsfrågor

1. Efter vad grupperas tillverkningsmetoderna?
2. Vad innebär gjutning, och varför efterbearbetas gjutgods nästan alltid?
3. Vad är plastisk bearbetning? Ge tre exempel på metoder som hör dit.
4. Hur tillverkas ett aluminiumrör till en cykelram?
5. Vilka fördelar och nackdelar har skärande bearbetning?
6. Varför förutsätter formsprutning att många detaljer ska tillverkas?
7. Varför kostar den första additivt tillverkade detaljen ungefär lika mycket som den hundrade?
8. Vilken geometrisk frihet ger additiv tillverkning som de andra metoderna saknar?
9. Varför värmebehandlas en svetsad aluminiumram efteråt?
10. Hur tillverkas en kompositdetalj, och varför blir den dyr?
11. Vilka två delar består kostnaden per detalj av?
12. Ett verktyg kostar 60 000 kronor och detaljen därefter 5 kronor att tillverka. Vad blir kostnaden per detalj vid 2 000 detaljer?
13. Vad menas med tillverkningsanpassning?
14. Ge tre konstruktionsregler som följer av att en detalj ska gjutas eller formsprutas.
15. Varför är antalet delar i en konstruktion en så stor kostnadsdrivare?

## Övningar

1. **Hitta metoden.** Undersök sex tillverkade detaljer i din närhet och avgör för varje hur den troligen är tillverkad. Leta efter spår av metoden, till exempel delningslinjer från en form, spår efter ett skärande verktyg, lagerränder från en utskrift eller en svetsfog. Redovisa med foto eller skiss och motivera varje bedömning med det spår du hittade.

2. **Räkna på serien.** En detalj kan formsprutas med ett verktyg för 200 000 kronor och därefter 6 kronor per detalj, eller tillverkas skärande utan verktyg för 140 kronor per detalj. Beräkna kostnaden per detalj vid 500, 2 000 och 10 000 detaljer för båda metoderna, och räkna ut vid vilket antal metoderna kostar lika mycket. Redovisa beräkningen och ange vilken metod du skulle välja för en serie på 800 detaljer.

3. **Anpassa en detalj.** Ta en detalj du modellerat eller ritat tidigare och gå igenom den mot reglerna för en vald tillverkningsmetod. Ändra minst tre saker i utformningen så att den blir enklare att tillverka, och redovisa före och efter med en kort text om vad varje ändring sparar.

4. **Färre delar.** Välj ett föremål som består av minst fem delar och undersök hur delarna fogas samman. Föreslå en ändrad konstruktion med färre delar som fyller samma funktion, och beskriv vad som vinns och vad som förloras, till exempel i fråga om reparation och materialåtervinning.

5. **Samma detalj, tre material.** Välj en detalj som skulle kunna tillverkas i metall, plast och komposit. Beskriv för varje material vilken tillverkningsmetod som är rimlig, hur detaljens utformning skulle behöva ändras och vad det innebär för kostnaden vid en liten respektive en stor serie.
