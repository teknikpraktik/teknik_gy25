# Dokumentnamn

03-bokens-arkitektur.md

---

# Pedagogisk modell

Detta dokument definierar den pedagogiska modellen för läroboken. Modellen är normerande. Vid tveksamheter eller alternativa lösningar ska detta dokument styra utformningen av innehåll, struktur och uppgifter.

Dokumentet beskriver **hur eleven ska lära sig**, inte hur texten ska skrivas. Språkliga riktlinjer behandlas i *Författarmanualen*. Redaktionella beslut behandlas i *Redaktionsprinciperna*.

---

# Grundprincip

Bokens mål är inte att eleven ska läsa mycket.

Bokens mål är att eleven ska **lära sig mycket**.

Varje sida ska därför bidra direkt till elevens lärande. Om ett stycke, en ruta eller en sida kan tas bort utan att elevens förståelse försämras ska den tas bort.

Boken ska präglas av hög informationstäthet, tydlig struktur och ett aktivt arbetssätt där eleven arbetar nästan lika mycket som den läser.

---

# Överordnat kriterium

Bokens bärande spänning är **självstudiebar** mot **kondenserad**.

Självstudiebar: teorin är fullständig och självförklarande. En elev utan lärare ska kunna läsa sig till allt.

Kondenserad: låg ordmängd, hög informationstäthet, inget babbel.

Varje redaktionellt val prövas mot båda hållen. Svällande text och överkomprimerad text är samma misslyckande från olika håll. Kort och obegripligt är värre än långt.

Hur kriteriet ser ut i praktiken visas av projektets referensimplementation, avsnitt 1.1 (`referensimplementation-avsnitt-1-1.md`, fastställd 2026-07-22): ton, kompressionsgrad, exempelanvändning, bildplatshållare, instuderingsfrågor och övningar. Samtliga avsnitt produceras enligt samma modell.

---

# Pedagogisk filosofi

Boken bygger på följande principer.

- Explicit undervisning.
- Kort teori följd av aktiv bearbetning.
- Konkret före abstrakt.
- Självstudiebar utan att vara skriven för självstudier.
- Praktiskt arbete när det är naturligt.
- Verklighetsnära exempel.
- Konsekvent struktur genom hela boken.
- Hög informationstäthet utan onödigt språk.

Eleven ska känna att ett lärandemål är uppnått innan nästa påbörjas.

---

# Bokens struktur

Boken är uppbyggd enligt tre nivåer.

## Kapitel

Bokens högsta innehållsnivå (H1).

Exempel:

- Mekanik och konstruktion
- Programmering
- Material och deras egenskaper

---

## Avsnitt

Varje kapitel delas in i ett antal avsnitt (H2). **Avsnittet är bokens minsta producerade och publicerade enhet** — produktionsstrukturen och publiceringsstrukturen är identiska (12-produktionsarkitektur.md, "Produktionsenhet"). Rubrikhierarkin speglar aldrig intern administration: det finns ingen synlig eller teknisk nivå för "modul".

Ett avsnitt samlar **ett eller flera lärandemål** kring ett större, sammanhängande delområde och har en inre progression när det innehåller flera delar.

Avsnittsstandard (normerande):

- **H1 = kapitel, H2 = avsnitt, H3 = delavsnitt** (naturliga underrubriker inom avsnittet, används vid behov). **H4** används undantagsvis, bara när ett H3-delavsnitt verkligen behöver delas upp ytterligare.
- Ett avsnitt kan omfatta ett eller flera lärandemål och ett eller flera uppslag; antalet sidor styrs av innehållet, inte tvärtom.
- **Färre och tydligare avsnitt** prioriteras framför många tunna avsnitt eller delavsnitt.
- Ett lärandemål får **aldrig delas enbart för att fylla ut ett avsnitt**. Ett avsnitt får i stället vara långt och flöda över flera sidor (se "Sidomfång").
- Ett avsnitt med bara ett lärandemål och inga delavsnitt är tillåtet och normalt när delområdet inte har flera tydligt skilda delar.

Antalet avsnitt bestäms av kapitlets naturliga struktur och ska inte följa någon förutbestämd mall.

---

## Lärandemål

Lärandemålet är bokens minsta **pedagogiska** byggsten, men är metadata knutet till ett avsnitt, inte en egen rubriknivå, fil eller sida.

All planering utgår från lärandemålet.

Varje lärandemål ska beskriva något eleven faktiskt kan göra efter genomfört arbete.

Exempel:

- Beräkna ett moment.
- Tolka en CAD-ritning.
- Välja ett lämpligt konstruktionsmaterial.
- Skriva ett enkelt Python-program.

Lärandemål ska vara observerbara och mätbara.

Lärandemålen är ett redaktionellt verktyg (registrerade i avsnittets frontmatterfält `learningGoals`) och visas normalt inte för eleven i boken. Ett avsnitt kan ha flera lärandemål; de listas i den ordning de tränas i avsnittet.

---

## Sidomfång

Ett avsnitt har **inget fast sid- eller uppslagsomfång**. Det får flöda över så många sidor som förståelsen kräver, och det delas bara när det innehåller flera tydligt skilda delområden, aldrig enbart därför att texten blir lång.

Antalet sidor styrs av pedagogiken, aldrig tvärtom.

Uppslag och sidbrytningar är frågor för layout och tryckexport, inte nivåer i innehållsarkitekturen. "Uppslag" får aldrig användas som självreferens i elevtexten, till exempel "i det här uppslaget" eller "som du läste i uppslaget" (05-forfattarmanual.md, "Självreferenser"). Synlig rubriknumrering i elevtext och webb har alltid exakt två nivåer: kapitel, avsnitt (12-produktionsarkitektur.md, "Rubriknumrering"). Delavsnitt (H3) är onumrerade underrubriker.

---

# Avsnittets struktur

**Redaktionellt beslut 2026-07-22 (normerande för hela läromedlet, ersätter beslutet 2026-07-20).** Varje teoriavsnitt följer exakt samma mönster:

- **Löptext** (med bildplatshållare)
- **Instuderingsfrågor**
- **Övningar**

Kapitlet avslutas med två avsnitt utan lärandemål, **Sammanfattning** och **Begrepp** (se "Kapitelavslutningar"). Det finns inga separata projektuppgiftsavsnitt. Kapitlets större, integrerande uppgifter ligger i ett separat lärarmaterial utanför boken, inte i elevtexten (se "Kapitelövergripande uppgifter").

Tidigare uppgiftsdelar används inte längre: rubrikerna Praktiska uppgifter och Projektuppgifter samt de äldre uppdelade kategorierna (Beräkningsuppgifter, Rituppgifter, CAD-uppgifter, Programmeringsuppgifter, Laborationer, Konstruktionsuppgifter, Tillämpningsuppgifter, Analysuppgifter, Tillämpningsproblem, Fördjupningsuppgifter, Kortare uppgifter, Projekt, Förstå/Utveckla/Utmana).

## Löptext

Löptexten innehåller den teori eleven behöver: löpande text, begrepp, formler, bilder, tabeller och arbetade exempel när de tillför förståelse. Alla delar är inte obligatoriska.

Konkret exempel före definition. Definitioner växer ur exemplen och står i löpande prosa, inte i rutor. Precisionen bor i kapitlets begreppslista (se "Kapitelavslutningar").

Beskrivande stoff följer bågen vardag, problem, lösning, förklaring, generalisering. Procedur- och beräkningsstoff följer i stället förklara, visa uppställt exempel, öva, och tål mindre komprimering: stryk aldrig steg.

Historiska översikts- och svepavsnitt får inom ett avgränsat undantag tillämpa hårdare komprimering än övriga avsnitt, med bibehållna konkreta ankare (05-forfattarmanual.md, "Detaljnivå i historiska översiktsavsnitt").

Ett huvudexempel per avsnitt där det är möjligt, valt ur verkliga exempelområden (02-redaktionell-specifikation.md, "Exempel"), återkommande genom resonemang, bilder, frågor och övningar.

## Instuderingsfrågor

5–15 per avsnitt, samlade i EN sektion direkt efter löptexten. `scripts/validate.mjs` felar utanför spannet (från status `fardig-forsta-version`; låsta kapitel undantas).

Frågorna testar teknisk förståelse, inte läsförståelse: funktion, samband, begrepp, resonemang. Formuleringar som "enligt texten", "i texten" eller "vad visar figuren" är förbjudna. Frågorna ska kunna besvaras med avsnittets innehåll men prövar förståelse av tekniken, inte minne av formuleringar.

Minst en fråga per avsnitt testar avsnittets begrepp ("Förklara med egna ord vad som menas med ...").

**Prioritera teknisk karaktär.** Frågorna ska i första hand pröva sådant som är tekniskt till sin karaktär: funktion, samband, orsak och verkan, beräkning och konstruktion, framför frågor av samhällsvetenskaplig karaktär. Undantaget går åt samma håll som i procedurspåret: i avsnitt vars faktiska innehåll är teknik och samhälle (kapitel 1:s samspel mellan teknik, naturvetenskap och matematik, och kapitel 13) får frågorna matcha det innehållet. Regeln är att prioritera teknisk karaktär, inte att förbjuda samhällsfrågor (redaktionellt beslut 2026-07-23).

Prioritera frågor där eleven förklarar samband, beskriver orsaker och konsekvenser, jämför, skiljer mellan närliggande begrepp eller använder kunskapen på ett nytt men enkelt exempel. Frågor av typen "vem?", "när?" och "hur många?" används bara när personen, tidpunkten eller antalet är en relevant del av ett lärandemål. Ta bort frågor som upprepar en tidigare fråga, kontrollerar en oviktig detalj eller ligger utanför avsnittets lärandemål.

En uppgift som i huvudsak går ut på att eleven **utför** något, räknar, ritar, programmerar, bygger, mäter, undersöker eller testar, hör inte hemma här utan under Övningar.

## Övningar

2–10 per avsnitt, samlade i EN sektion efter instuderingsfrågorna, i tydlig progression: identifiera, analysera, jämföra, konstruera, förbättra, eget arbete.

Övningarna är autentiska uppgifter knutna till sådant eleven känner igen, inte instängda läroboksuppgifter. En övning innebär att eleven aktivt tillämpar avsnittets innehåll; formen följer ämnet: beräkning, skiss, ritning, CAD, programmering, mätning, laboration, analys, konstruktion, digitalt arbete eller dokumentation. Formen får aldrig göras mekaniskt likformig mellan kapitel.

Varje övning har ett namn i fetstil följt av uppgiften, och numreras 1, 2, 3 …

**Formuleringsregel:** boken mäter, testar eller examinerar ingenting. Skriv "låter eleven visa". Kopplingen till betygskriterierna görs i lärarhandledningen, inte i elevtexten.

## Kapitelövergripande uppgifter

Varje avsnitts **Övningar** tränar och hänvisar bara till det egna avsnittets stoff. Boken har **inga helkapitelövningar** och inga integrerande storuppgifter som spänner över flera avsnitt (redaktionellt beslut 2026-07-24, som ersätter det tidigare kravet på en helkapitelövning per kapitel).

Kapitlets större, integrerande och kapitelövergripande uppgifter (syntesprojekt, tvärgående tillämpningar, storprojekt) hör hemma i ett **separat lärarmaterial utanför boken**, inte i elevtexten. Där kan läraren välja, tidsätta och betygssätta dem fritt.

**Ingen utskriven nivåstapling i övningar.** Progressionen från E till A ligger i uppgiftens öppenhet och i betygskriteriernas kvalitetsord, inte i utskrivna delsteg i elevtexten. Formatet grunduppgift plus "Bygg ut: ..." plus "Bygg ut vidare: ..." används inte. `scripts/validate.mjs` varnar (mjukt) om "Bygg ut" står kvar i en övningssektion, som regressionsskydd.

Varje övning ska fungera fristående, med stabil information i själva instruktionen, utan hänvisningar av typen "som i figuren ovan" eller "i föregående avsnitt".

Det stora, sammanhållna projektet bor kvar som ämnesinnehåll i kapitel 11. Boken har inget nytt projektkapitel och ingen genomgående projektstruktur (se "Exempel").

Det finns **inget synligt Begrepp-block** efter avsnittet. Begreppsundervisningen sker i löptexten (11-begreppsfilosofi.md); kapitlets begreppslista är en uppslagsdel.

---

# Kapitlens avgränsning

Varje kapitel ska ha en tydlig ämnesmässig avgränsning mot närliggande kapitel. Ett kapitel får inte duplicera ett annat kapitels huvudansvar, och ett avsnitt får aldrig överlappa ett senare kapitels huvudansvar mer än vad en kort, motiverad förberedelse kräver.

Ett **syntesavsnitt** (ett avsnitt som knyter ihop ett kapitels innehåll) ska fungera som just en syntes eller analysmodell. Det får inte duplicera en process eller metod som är ett senare kapitels huvudansvar.

De tre inledande kapitlen avgränsas så här:

- **Kapitel 1 · Teknikens grunder** besvarar *varför*: varför teknik uppstår, varför den utvecklas i en viss riktning och varför tekniska lösningar får den utformning de får. Kapitlet behandlar vad teknik är, teknikens historiska utveckling, teknikens och samhällets historiska växelverkan, vad som driver teknikutveckling och vilka förutsättningar, krav, resurser och avvägningar som formar tekniska lösningar.
- **Kapitel 2 · Att lösa tekniska problem** besvarar *hur ett problem angrips*: hur ett tekniskt problem identifieras och formuleras, och hur en problemlösningsstrategi väljs och motiveras utifrån problemets karaktär. Kapitlet stannar vid det valet; att ta fram, testa, utvärdera och förbättra en lösning är kapitel 3:s ansvar.
- **Kapitel 3 · Teknikutvecklingsprocessen** besvarar *hur ett helt utvecklingsarbete genomförs* från behov till användning och återvinning (faser, iteration, kravspecifikation, idégenerering, konceptval, prototyper, testning, utvärdering, livscykel).

Kapitel 1 ska därför inte innehålla en egen problemlösningsmetod, en egen teknikutvecklingsprocess eller en fristående framtidsanalys. Kapitel 1:s syntes beskriver *att* och *varför* tekniska lösningar formas av behov, möjligheter, krav och avvägningar, inte *hur* ett utvecklingsarbete steg för steg genomförs.

---

# Kapitelavslutningar

Varje färdigproducerat kapitel avslutas med två onumrerade avsnitt, i denna ordning: **Sammanfattning**, **Begrepp**. De är egna innehållstyper, inte lärandemål (12-produktionsarkitektur.md, "Kapitelavslutningar").

## Sammanfattning

Kort löpande text, inte punktlista, som låter eleven repetera hela kapitlet på några minuter (riktmärke cirka 300 ord). Sammanfattningen är **repetition**, inte en ny genomgång: den upprepar inga instuderingsfrågor och inför inga nya fakta eller begrepp. Den skrivs sist, när kapitlets avsnitt är färdiga, så att den kan spegla den faktiska texten.

## Begrepp

Kapitlets begrepp med färdiga definitioner, max ungefär en mening per begrepp. Listan är en **uppslagsfunktion**: eleven fyller inte i något här, och begreppsförståelse tränas i instuderingsfrågorna, inte i listan. Precisionen i definitionerna bor här; i löptexten växer definitionerna ur exemplen och står i prosa.

**Format (obligatoriskt, redaktionellt beslut 2026-07-22).** Begreppslistan skrivs som en kompakt ordlista, ett begrepp per rad, **utan punktmarkering**. Varje post har formen `**Begrepp:** Definition.`: begreppet i fetstil med kolon direkt efter (kolonet inom fetstilen), sedan ett mellanslag och definitionen. Begreppet inleds med versal. Definitionen är en fullständig mening som inleds med versal och avslutas med punkt. **Inga tankstreck eller bindestreck** som avskiljare mellan begrepp och definition. Posterna hålls samman utan blankrad emellan, med hård radbrytning (avslutande `\` på varje rad utom den sista), så att listan får en kompakt vertikal rytm och inte renderas som en punktlista. Källformat:

```
**Automation:** Att låta maskiner utföra och styra ett arbete med liten mänsklig inblandning.\
**Avvägning:** Ett val mellan krav där mer av det ena innebär mindre av det andra.
```

Begrepp som kursiveras vid sitt huvudställe i löptexten (05, "Begreppsmarkering") är **fetstilta** i begreppslistan. `scripts/validate.mjs` felar på punktlista, tankstreck, ofetstilat begrepp eller definition utan avslutande punkt i en begreppslista.

Varje begrepp i listan ska ha sitt huvudställe i eller före kapitlet (`concepts_introduced`, 12-produktionsarkitektur.md). Listan inför aldrig nya begrepp.

Det finns inga projektuppgiftsavsnitt. Kapitlets större, integrerande uppgifter ligger i ett separat lärarmaterial utanför boken, inte i avsnittens Övningar (se "Kapitelövergripande uppgifter").

---

# Praktiskt arbete

Praktisk träning är central (10-amnesfilosofi.md, "Teknik är praktiskt") och säkras genom avsnittets Övningar, som tränar det egna avsnittets stoff. Ett avsnitt utan meningsfull praktisk tillämpning får ha få och enkla övningar; övningar skapas aldrig enbart för symmetrins skull, men varje avsnitt har minst två.

Hör ett praktiskt moment naturligt hemma i ett enskilt avsnitt läggs det bland avsnittets övningar. Är det stort nog att integrera flera avsnitt hör det hemma i lärarmaterialet utanför boken, inte i elevtexten. Praktiska övningar prioriteras framför motsvarande teoretiska uppgifter när båda tränar samma förmåga.

---

# Bilder

Bilder ska undervisa: förklara samband, visualisera system, visa processer eller jämföra lösningar. Varje större avsnitt innehåller sådana bilder. Inga dekorationsbilder; kapitelöppnarbilder är förlagets formgivningsbeslut, inte manusets.

Grundregeln är:

> Om något kan förklaras bättre med en bild än med text ska en bild användas.

Platshållarformat i manus: `[BILD X.Y-N]` följt av **Innehåll** (vad bilden ska visa och varför) och **Bildtext** (färdigformulerad), som i referensimplementationen 1.1.

Bild och text använder samma exempel. Handlar texten om Öresundsförbindelsen visar bilden Öresundsförbindelsen.

När en bild övertar informationsbärande kortas motsvarande prosa. En bild som dubblerar texten har inte avlastat den.

Förlaget ansvarar för den slutliga grafiska utformningen; manuset innehåller endast platshållare.

---

# Exempel

Exempel ska hämtas från verkligheten.

Fiktiva företag, produkter eller scenarier används inte om ett verkligt exempel fungerar lika bra.

Exempel varieras genom boken.

Alla exempel är **utbytbara**: ett exempel ska kunna ersättas av ett likvärdigt verkligt exempel utan att avsnittets struktur, resonemang eller uppgifter behöver göras om (02-redaktionell-specifikation.md, "Exempel").

Boken bygger inte på ett genomgående projekt eller en återkommande huvudprodukt.

---

# AI

AI används som ett naturligt verktyg inom de teknikområden där det tillför ett verkligt värde.

AI används inte för att uppfylla ett kvantitativt mål.

Om AI inte förbättrar elevens lärande ska det inte förekomma.

När AI används ska det spegla hur tekniker och ingenjörer faktiskt använder AI i arbetslivet.

---

# Lärarens roll

Boken ska fungera både i lärarledd undervisning och vid självstudier.

Läraren avgör:

- ordningsföljd
- urval
- fördjupning
- undervisningsform

Boken försöker inte styra lärarens didaktiska beslut.

---

# Elevens arbete

Eleven arbetar huvudsakligen i ett separat häfte eller digitalt dokument.

Boken är därför inte utformad som en arbetsbok.

Tyngdpunkten ligger på individuellt arbete.

Samarbetsuppgifter används endast när de ger ett tydligt pedagogiskt mervärde.

---

# Avgränsningar

Boken innehåller inte:

- sammanfattningar efter varje avsnitt
- repetitionskapitel
- motiverande texter
- onödiga introduktioner
- utfyllnad
- artificiella berättelser
- snabbspår eller separata fördjupningsspår

Allt innehåll ska motiveras av ett tydligt lärandemål.

---

# Kvalitetskriterier

Ett avsnitt är färdigt först när:

- löptexten är självstudiebar och kondenserad (se "Överordnat kriterium")
- alla fakta är korrekta
- undervisande bilder finns specificerade i `[BILD]`-format där de förbättrar förståelsen
- avsnittet avslutas med en samlad sektion instuderingsfrågor (5–15) och en samlad sektion övningar (2–10) som tillsammans tränar avsnittets lärandemål
- nya begrepp introduceras i kursiv, definieras i prosa och används korrekt i löptexten
- AI används endast där det tillför verkligt värde
- verkliga exempel används
- eleven rimligen kan uppnå avsnittets lärandemål utan ytterligare teori
- kvaliteten motsvarar referensimplementationen 1.1

Ett kapitel är färdigt först när det avslutas med en sammanfattning i löpande text och en begreppslista med färdiga definitioner som täcker kapitlets centrala begrepp.