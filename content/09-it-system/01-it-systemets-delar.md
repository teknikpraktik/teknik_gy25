---
id: "9.1"
chapter: 9
sectionNumber: 1
title: IT-systemets delar
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-03"]
  niva2: []
learningGoals:
  - Beskriva ett IT-systems uppbyggnad med hårdvara, mjukvara, data, nätverk och
    användare samt ge exempel på IT-systems roll i teknikutveckling.
abilities: [f3]
concepts_introduced: ["IT-system", "hårdvara", "mjukvara", "data", "nätverk", "användare"]
concepts_used: ["digitalisering", "CAD", "simulering"]
figures: []
prerequisites: ["1.2"]
---

Du håller upp telefonen mot läsaren innanför bussdörren, en grön bock tänds, och du går ombord. Sekunden däremellan har ett halvt dussin datorer gjort var sin sak. Läsaren har hämtat en kod ur skärmen, fordonets dator har avgjort om biljetten gäller för den zon bussen befinner sig i, och trafikbolagets system har någon sekund senare fått veta att biljetten använts, så att den inte kan användas av någon annan samtidigt.

Det som ser ut som en app är alltså inte en app. Det är ett *IT-system*, alltså en samling delar som tillsammans samlar in, lagrar, bearbetar och visar information för ett bestämt syfte. Varje sådant system består av fem slags delar, och biljettsystemet visar allihop.

*Hårdvara* är de fysiska delarna: telefonen i handen, kortläsaren vid dörren, fordonsdatorn under förarplatsen, skylten på hållplatsen som räknar ner till nästa avgång och servrarna i den datorhall där systemet bor. Hårdvara är det man kan tappa i golvet.

*Mjukvara* är de program som säger åt hårdvaran vad den ska göra. Appen i telefonen är mjukvara, liksom programmet i kortläsaren och det system på servern som håller reda på vilka biljetter som är sålda, giltiga eller förbrukade. Samma kortläsare kan få nya regler för vad som ska godkännas utan att en enda skruv lossas, eftersom reglerna finns i mjukvaran.

*Data* är den information systemet arbetar med. Här är det biljetternas giltighetstid, zon och pris, resenärernas kortnummer, fordonens positioner och en logg över var och när varje biljett visats. Data är det som faktiskt är värdefullt i systemet. Hårdvara går att köpa ny, mjukvara går att skriva om, men förlorade data är borta.

Ett *nätverk* är förbindelserna som binder ihop delarna. Kortläsaren talar med fordonsdatorn genom en kabel i bussen, fordonet talar med trafikbolagets system över mobilnätet, och din telefon når appens server över det mobilnät eller trådlösa nät du råkar vara ansluten till. Utan förbindelser blir delarna öar som var för sig inte kan svara på om biljetten gäller.

*Användare* är människorna i systemet, och de räknas till systemet, inte till dess omgivning. Resenären köper och visar biljetten, föraren ser resultatet på sin skärm, kundtjänsten rättar det som blev fel, trafikledningen följer var fordonen är, och en tekniker byter den läsare som slutat läsa. Ett system som fungerar tekniskt men som ingen förstår att använda är inte färdigt. De flesta fel i vardagen uppstår inte inne i maskinen utan i skarven mellan människa och maskin.

[BILD 9.1-1] Innehåll: Biljettsystemet ritat som ett system med sina fem delar tydligt märkta. Till vänster resenären med telefon vid kortläsaren i bussdörren, i mitten fordonsdatorn och bussens mobilförbindelse, till höger trafikbolagets server och databas, samt hållplatsskylten och kundtjänsten. Hårdvaran ritas som föremål, mjukvaran som märkta rutor inuti föremålen, data som en symbol för lagrad information i servern, nätverket som förbindelselinjer mellan delarna, och användarna som människofigurer vid tre olika punkter. Biljettens väg från köp till visning markeras som en genomgående linje. Bildtext: "Fem slags delar, ett system. Människorna räknas till systemet, inte till dess omgivning."

Delarna är beroende av varandra, och det syns tydligast när en av dem faller bort. En buss kör genom ett område utan mobiltäckning, och fordonet tappar kontakten med trafikbolagets system. Ska läsaren då sluta fungera? Nej, för då stannar hela trafiken av ett skäl som inte har med biljetten att göra. I stället bär fordonet med sig en kopia av det den behöver för att kunna svara ja eller nej på egen hand, och när täckningen kommer tillbaka skickas de sparade resorna in. Systemet är alltså byggt för att en av delarna ibland saknas, och den sortens beslut är själva ingenjörsarbetet bakom ett IT-system.

IT-system spelar också en annan roll än att utföra en tjänst. De har blivit det verktyg som teknikutveckling bedrivs med. Ritningen och modellen av en detalj skapas i ett [[begrepp:CAD]]-program och lagras i ett system som håller reda på vilken version som gäller, så att verkstaden inte tillverkar efter en gammal ritning. Mätvärden från ett prov samlas in, lagras och analyseras i ett system i stället för i ett anteckningsblock. En [[begrepp:simulering]] körs på datorer som ingen enskild konstruktör äger. Det arbetssätt som i dag är självklart i varje utvecklingsavdelning bygger på att alla i arbetet ser samma uppgifter samtidigt.

Biljettsystemet visar samma sak i mindre skala. Varje resa lämnar ett spår, och av spåren växer en bild av var och när människor faktiskt reser. Den bilden används för att sätta in fler fordon på de turer som är fulla, för att lägga om linjer och för att avgöra var en ny hållplats gör mest nytta. Innan resorna registrerades var underlaget räkningar för hand under några dagar om året. Det är den sortens förändring [[begrepp:digitalisering]] för med sig: samma verksamhet, men styrd av data som samlas in medan arbetet ändå pågår.

[BILD 9.1-2] Innehåll: Ett flöde i tre steg. Först en buss där en resenär visar sin biljett och en liten datapost skapas, med tid, hållplats och zon. Sedan samma slags dataposter från många fordon som samlas i trafikbolagets system, ritade som en växande mängd. Sist ett diagram över antal resor per timme och sträcka, med en markering vid en överfull tur och en pil till beslutet att sätta in ett extra fordon. Bildtext: "Varje visad biljett blir en datapost. Av posterna växer underlaget för nästa trafikplanering."

Ett IT-system märks sällan så länge det gör sitt jobb. Frågan som avslöjar hur det är byggt är därför inte vad det gör när allt fungerar, utan vad som händer när en av de fem delarna fallerar.

## Instuderingsfrågor

1. Vad är ett IT-system?
2. Vilka fem slags delar består ett IT-system av?
3. Vad är skillnaden mellan hårdvara och mjukvara? Ge ett exempel på vardera ur biljettsystemet.
4. Varför sägs data vara det värdefullaste i ett IT-system?
5. Vilken uppgift har nätverket i ett IT-system, och vad händer med systemet utan det?
6. Varför räknas användarna som en del av systemet i stället för som dess omgivning?
7. En buss kör genom ett område utan mobiltäckning. Beskriv hur biljettsystemet är byggt för att ändå fungera, och varför det är byggt så.
8. Ge två exempel på hur IT-system används i tekniskt utvecklingsarbete, och förklara vad de tillför.
9. Hur förändrade registreringen av resor trafikbolagets underlag för att planera trafiken?
10. Varför säger ett systems beteende vid ett fel mer om hur det är byggt än dess beteende när allt fungerar?

## Övningar

1. **Kartlägg ett system.** Välj ett IT-system du själv använder, till exempel ett bibliotekssystem, en matbutiks självutcheckning, ett bokningssystem för träningspass eller skolans lärplattform. Rita systemet som en bild och märk ut minst två exempel på hårdvara, två på mjukvara, tre slags data, alla nätverksförbindelser du kan identifiera och samtliga användargrupper. Ange för varje användargrupp vad den gör i systemet.

2. **Vad händer när en del faller bort.** Utgå från systemet du kartlade. Välj tre av delarna, en i taget, och beskriv vad som händer med systemet om just den slutar fungera. Ange för varje fall om systemet stannar helt, fungerar sämre eller klarar sig, och föreslå en åtgärd som skulle göra systemet mindre känsligt för just det bortfallet.

3. **Följ dina data.** Välj en enda handling du utför i ett IT-system, till exempel att låna en bok, checka in på ett träningspass eller lämna in en uppgift. Beskriv steg för steg vilka data som skapas, var de lagras och vilka som får se dem. Ange minst en uppgift som systemet sparar om dig utan att du aktivt matat in den.

4. **Data som underlag.** Ta reda på vilka data ett IT-system i din närhet samlar in, till exempel skolans schemasystem, en butikskedjas kassasystem eller en app du använder. Beskriv tre beslut som skulle kunna fattas bättre med de data systemet redan har än utan dem, och ange för varje beslut vilka data som behövs och vem som skulle fatta det.
