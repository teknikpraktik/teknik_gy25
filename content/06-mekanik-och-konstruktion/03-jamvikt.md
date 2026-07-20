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
concepts_introduced: ["jämvikt", "jämviktsvillkor", "stödreaktion", "tyngdpunkt", "stödyta", "stabilitet"]
concepts_used: ["kraft", "moment", "friläggning"]
figures: ["fig-6.3.1-a", "fig-6.3.2-a", "fig-6.3.3-a"]
prerequisites: ["6.1", "6.2"]
---

## Jämviktsvillkoren

Gångbron från förra avsnittet står stilla, hur mycket trafik den än bär. Den varken accelererar uppåt, nedåt eller åt sidan, och den roterar inte. Ett föremål i det tillståndet, där alla krafter och moment som verkar på det tar ut varandra fullständigt, sägs befinna sig i **jämvikt**. Att ett föremål bara ser ut att stå stilla räcker inte som förklaring: jämvikt är ett mätbart tillstånd, och det går att bevisa genom att kontrollera två villkor.

Det första **jämviktsvillkoret** säger att summan av alla krafter som verkar på föremålet måste vara noll:

ΣF = 0

Är kraftsumman skild från noll återstår en nettokraft, och föremålet accelererar i den kraftens riktning, precis som Newtons andra lag beskriver. Det andra jämviktsvillkoret säger att summan av alla moment kring en godtycklig punkt också måste vara noll:

ΣM = 0

Är momentsumman skild från noll roterar föremålet i stället för att stå stilla. Båda villkoren måste vara uppfyllda samtidigt för fullständig jämvikt: ett föremål kan mycket väl ha en kraftsumma på noll och ändå rotera, om två lika stora men motriktade krafter griper an på olika ställen och skapar ett moment.

Jämviktsvillkoren används tillsammans med friläggning från föregående avsnitt. Genom att frilägga ett föremål och rita in samtliga yttre krafter går det att ställa upp ekvationer utifrån ΣF = 0 och ΣM = 0 och lösa ut okända krafter, till exempel hur hårt en lina måste hålla emot eller hur stor kraft ett stöd måste bära. Momentsumman kan beräknas kring valfri punkt, eftersom ett föremål i jämvikt inte roterar kring någon punkt alls. I praktiken väljs punkten så att så många okända krafter som möjligt försvinner ur ekvationen, oftast en punkt där en okänd kraft griper an, eftersom en kraft som griper an i vridpunkten inte ger något moment alls.

[[figur:fig-6.3.1-a]]

## Stödreaktioner

En balk som vilar på två stöd, som gångbrons körbana, hålls uppe av krafter från just de stöden. Dessa krafter kallas **stödreaktioner**: de är stödens svar, sin reaktion, på den last balken för vidare till dem. Att beräkna stödreaktionerna är ofta det första steget när en konstruktion ska analyseras, eftersom alla senare beräkningar av böjning och hållfasthet i balken bygger på att man känner till hur stor last varje stöd faktiskt bär.

Gångbron är 6 m lång och vilar på ett stöd i vardera änden, A och B. En cyklist med cykel som tillsammans väger 900 N står stilla 2 m från stöd A, alltså 4 m från stöd B. Bron själv frilagd har tre yttre krafter: cyklistens tyngd nedåt samt de två okända stödreaktionerna R_A och R_B, båda riktade uppåt.

Momentsumman kring stöd A ger en ekvation med bara en okänd, eftersom R_A:s momentarm till A är noll:

ΣM_A = R_B · 6 − 900 · 2 = 0

R_B = 900 · 2 / 6 = 300 N

Kraftsumman i lodrät led ger sedan den andra stödreaktionen:

ΣF = R_A + R_B − 900 = 0

R_A = 900 − 300 = 600 N

Stöd A, närmast cyklisten, bär alltså dubbelt så mycket last som stöd B. Resultatet går att kontrollera genom att beräkna momentsumman kring stöd B i stället: R_A · 6 − 900 · 4 = 600 · 6 − 900 · 4 = 3600 − 3600 = 0, vilket stämmer. Ett sådant kontrollsteg, att räkna om kring en annan punkt, är ett enkelt sätt att upptäcka räknefel innan resultatet används vidare.

[[figur:fig-6.3.2-a]]

## Tyngdpunkt och stabilitet

Varje föremål har en punkt där hela dess tyngd kan tänkas verka samlad, som om resten av föremålet vore viktlöst. Den punkten kallas föremålets **tyngdpunkt**. För ett jämnt fördelat föremål, som en rak balk eller en symmetrisk platta, ligger tyngdpunkten i geometrins mittpunkt. För en ojämnt fördelad konstruktion, som en lyftkran med tung motvikt i ena änden, ligger tyngdpunkten förskjuten mot den tyngre delen.

Ett föremåls **stödyta** är den yta som spänns upp mellan dess kontaktpunkter mot underlaget: avståndet mellan fötterna hos en stående person, eller den rektangel som en lyftkrans fyra stödben bildar mot marken. Sambandet mellan tyngdpunkt och stödyta avgör föremålets **stabilitet**: så länge den lodräta linjen genom tyngdpunkten faller innanför stödytan skapar tyngdkraften inget moment som kan välta föremålet, eftersom kraften då går rakt igenom det stöd den vilar på. Flyttas tyngdpunkten, eller lutas föremålet, så att den lodräta linjen hamnar utanför stödytan uppstår i stället ett moment kring stödytans kant som roterar föremålet: föremålet **välter**.

En lyftkran som lyfter en tung last riskerar att välta kring den stödpunkt som ligger närmast lasten. Kranens egen tyngd, 50 000 N, verkar genom kranens tyngdpunkt 1,5 m på den stabila sidan om den stödpunkten och skapar ett stabiliserande moment på

50 000 · 1,5 = 75 000 Nm

Lasten på 8000 N hänger 8 m ut från samma stödpunkt och skapar ett vältande moment på

8000 · 8 = 64 000 Nm

Eftersom det stabiliserande momentet, 75 000 Nm, är större än det vältande, 64 000 Nm, förblir kranen stående. Är lasten tyngre, eller hänger den längre ut på bommen, växer det vältande momentet tills det överstiger det stabiliserande, och kranen tippar. Samma princip avgör varför en hög, fylld bokhylla lättare välter framåt än en låg och bred, och varför den understa hyllan bör bära det tyngsta: en låg tyngdpunkt och en bred stödyta ger tillsammans god stabilitet.

[[figur:fig-6.3.3-a]]

## Instuderingsfrågor

1. Förklara med egna ord vad jämvikt innebär, och varför det inte räcker att ett föremål "ser ut att stå stilla".
2. Skriv upp de två jämviktsvillkoren, och förklara med egna ord vad var och en innebär.
3. Ge ett exempel på ett föremål som har kraftsumman noll men ändå inte är i jämvikt. Förklara varför.
4. Varför väljs ofta momentsumman kring en punkt där en okänd kraft griper an, när stödreaktioner ska beräknas?
5. Vad är en stödreaktion, och varför måste den kännas till innan en balks böjning kan beräknas?
6. En balk är 4 m lång och vilar på stöd i båda ändarna, A och B. En last på 600 N placeras 1 m från stöd A. Beräkna stödreaktionerna R_A och R_B.
7. Förklara hur man kan kontrollera att en beräknad stödreaktion är korrekt.
8. Vad är en tyngdpunkt, och var ligger den ungefär för en balk med jämnt fördelad tyngd?
9. Förklara med egna ord sambandet mellan tyngdpunkt, stödyta och stabilitet.
10. En pall med fyra ben som står tätt tillsammans är mindre stabil än en pall med samma bendimension men bredare stödyta. Förklara varför, med hjälp av avsnittets begrepp.
11. En lyftkrans egen tyngd, 40 000 N, verkar 2 m på den stabila sidan om stödpunkten. Hur stor last får hänga 10 m ut på bommen innan kranen riskerar att välta?
12. Varför bör den understa hyllan i en hög bokhylla bära de tyngsta böckerna?
