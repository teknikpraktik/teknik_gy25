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

Ett avsnitt består av två delar.

## Teori

Teoridelen innehåller den information eleven behöver för att kunna arbeta vidare.

Den kan innehålla:

- löpande teori
- begrepp
- formler
- figurer
- tabeller
- arbetade exempel när de tillför förståelse

Alla delar är inte obligatoriska.

Ett arbetat exempel används endast när det tydligt förbättrar förståelsen.

---

## Aktiv bearbetning

Efter teorin följer **instuderingsfrågor**. Varje avsnitt avslutas med EN samlad sektion instuderingsfrågor direkt efter teorin, oavsett hur många lärandemål eller delavsnitt avsnittet har.

### Instuderingsfrågor

Kontrollerar att eleven förstått avsnittets innehåll.

Antalet frågor bestäms av avsnittets innehåll och komplexitet, men **sikta på 4–6 frågor per lärandemål** som avsnittet tränar. Det är ett riktmärke, inte ett hårt krav: ett färdigt avsnitt ska ha minst en instuderingsfråga, och färre eller fler är tillåtet när innehållet motiverar det. Undvik långa frågebatterier — välj de frågor som bäst tränar avsnittets kärna, och slå ihop eller ta bort frågor som blir för lika när flera lärandemål eller delavsnitt samlas i en gemensam frågelista.

Varje fråga ska träna en central del av avsnittet, gå att besvara med hjälp av teorin, bidra till grundläggande förståelse, vara tydligt skild från övriga frågor och när det är möjligt kontrollera mer än mekanisk sökläsning.

Prioritera frågor där eleven ska förklara samband, beskriva orsaker och konsekvenser, jämföra, skilja mellan närliggande begrepp, använda kunskapen på ett nytt men enkelt exempel eller återge en process eller modell med egna ord.

Frågor av typen "vem?", "när?" och "hur många?" används bara när personen, tidpunkten eller antalet är en relevant del av ett lärandemål. Namn och årtal får finnas i teorin för historisk precision utan att automatiskt bli instuderingsfrågor.

Ta bort frågor som upprepar en tidigare fråga, bara kontrollerar en oviktig detalj, testar formuleringar snarare än förståelse eller ligger utanför avsnittets lärandemål.

Instuderingsfrågorna är avsnittets enda uppgiftsdel. Det finns **inget synligt Begrepp-block** efter avsnittet, och de **praktiska uppgifterna ligger inte här** utan i kapitlets uppgiftsbank (se "Kapitelavslutningar" nedan). Begreppsundervisningen sker i teorin (11-begreppsfilosofi.md); den praktiska träningen säkras samlat per kapitel.

---

# Kapitlens avgränsning

Varje kapitel ska ha en tydlig ämnesmässig avgränsning mot närliggande kapitel. Ett kapitel får inte duplicera ett annat kapitels huvudansvar, och ett avsnitt får aldrig överlappa ett senare kapitels huvudansvar mer än vad en kort, motiverad förberedelse kräver.

Ett **syntesavsnitt** (ett avsnitt som knyter ihop ett kapitels innehåll) ska fungera som just en syntes eller analysmodell. Det får inte duplicera en process eller metod som är ett senare kapitels huvudansvar.

De tre inledande kapitlen avgränsas så här:

- **Kapitel 1 · Teknik och teknikutveckling** besvarar *varför*: varför teknik uppstår, varför den utvecklas i en viss riktning och varför tekniska lösningar får den utformning de får. Kapitlet behandlar vad teknik är, teknikens historiska utveckling, teknikens och samhällets historiska växelverkan, vad som driver teknikutveckling och vilka förutsättningar, krav, resurser och avvägningar som formar tekniska lösningar.
- **Kapitel 2 · Att lösa tekniska problem** besvarar *hur ett problem angrips*: hur ett tekniskt problem identifieras och formuleras, och hur en problemlösningsstrategi väljs och motiveras utifrån problemets karaktär. Kapitlet stannar vid det valet; att ta fram, testa, utvärdera och förbättra en lösning är kapitel 3:s ansvar.
- **Kapitel 3 · Teknikutvecklingsprocessen** besvarar *hur ett helt utvecklingsarbete genomförs* från behov till användning och återvinning (faser, iteration, kravspecifikation, idégenerering, konceptval, prototyper, testning, utvärdering, livscykel).

Kapitel 1 ska därför inte innehålla en egen problemlösningsmetod, en egen teknikutvecklingsprocess eller en fristående framtidsanalys. Kapitel 1:s syntes beskriver *att* och *varför* tekniska lösningar formas av behov, möjligheter, krav och avvägningar, inte *hur* ett utvecklingsarbete steg för steg genomförs.

---

# Kapitelavslutningar

Varje färdigproducerat kapitel avslutas med tre samlade delar, i denna ordning: sammanfattning, begreppsövning, uppgiftsbank. De är egna innehållstyper, inte lärandemål, och tränar kapitlets innehåll som helhet (12-produktionsarkitektur.md, "Kapitelavslutningar").

## Sammanfattning

En sammanhängande löptext på cirka 300 ord som binder ihop kapitlets avsnitt till en helhet. Sammanfattningen är **repetition**, inte en ny genomgång: den upprepar inga instuderingsfrågor och inför inga nya fakta eller begrepp. Den skrivs sist, när kapitlets lärandemål är färdiga, så att den kan spegla den faktiska texten.

## Begreppsövning

En samlad övning över kapitlets centrala begrepp, utformad som en **punktlista**: varje begrepp står som en egen punkt, och eleven förklarar begreppet med en egen mening. Eleven skriver svaren i separat häfte eller digitalt dokument; boken innehåller inga skrivytor.

Övningen är **repetition och tillämpning** och får aldrig vara elevens första möte med ett begrepp; begreppet ska redan ha sitt huvudställe i eller före kapitlet. Listan bygger på frontmatterfältet `ordlista`. Facit hör till lärarmaterialet och ingår aldrig i elevmanuset.

## Praktiska uppgifter och projekt

Kapitlets praktiska uppgifter och projekt samlas i en bank som en **enkel numrerad lista**: varje uppgift har ett löpnummer från 1 och ett namn, följt av själva uppgiften. Banken delas **inte** in i omfattningsnivåer, och uppgifterna förses **inte** med metadata om arbetsform, tidsåtgång, redovisningsform eller vilket lärandemål de tränar. Utförandet överlåts till läraren och eleven.

En praktisk uppgift innebär att eleven **producerar, genomför, undersöker, mäter, konstruerar, visualiserar eller presenterar** något. Godkända former omfattar till exempel konstruktion, skiss, teknisk ritning, flödesdiagram, kalkylblad, digital presentation, plansch, programmering, simulering, modellering, fysisk undersökning, mätning, testning, experiment, prototyp, muntlig presentation, film och podd. En ren skriftlig analys, jämförelse eller argumentation räknas inte i sig som en praktisk uppgift; den får vara ett sista led, inte huvudsaken. AI-uppgifter förekommer när de tillför ett verkligt värde.

Det finns **inget fast antal uppgifter** per kapitel. Banken ska tillsammans ge tillräcklig praktisk och producerande träning för kapitlets centrala innehåll och förmågor. Uppgifter som tränar samma sak på nästan samma sätt slås ihop eller tas bort, och varje uppgift ska fungera fristående med stabil information i själva instruktionen, utan hänvisningar av typen "som i figuren ovan".

---

# Praktiskt arbete

Praktisk träning är central (10-amnesfilosofi.md, "Teknik är praktiskt"), men säkras samlat i kapitlets uppgiftsbank i stället för genom ett krav på praktiska uppgifter under varje enskilt lärandemål. Ett lärandemål behöver alltså inte ha ett eget praktiskt moment.

Om ett praktiskt moment ändå hör naturligt hemma inne i ett lärandemål skrivs det som ett tydligt moment i lärandemålets text. Praktiska moment prioriteras framför motsvarande teoretiska uppgifter när båda tränar samma förmåga.

---

# Illustrationer

Illustrationer används när de förbättrar förståelsen.

Grundregeln är:

> Om något kan förklaras bättre med en figur än med text ska en figur användas.

Förlaget ansvarar för den slutliga grafiska utformningen.

Manuset innehåller därför endast platshållare som beskriver:

- figurens syfte
- vilket innehåll den ska visa
- hur den används i texten

Varje avsnitt ska normalt innehålla minst en figur.

---

# Exempel

Exempel ska hämtas från verkligheten.

Fiktiva företag, produkter eller scenarier används inte om ett verkligt exempel fungerar lika bra.

Exempel varieras genom boken.

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

- teorin är komplett men koncentrerad
- alla fakta är korrekta
- minst en figur finns specificerad när den förbättrar förståelsen
- avsnittet avslutas med en samlad sektion relevanta instuderingsfrågor som tränar avsnittets lärandemål
- nya begrepp introduceras, definieras och används korrekt i teorin
- AI används endast där det tillför verkligt värde
- verkliga exempel används
- eleven rimligen kan uppnå avsnittets lärandemål utan ytterligare teori

Ett kapitel är färdigt först när det dessutom avslutas med en begreppsövning som täcker kapitlets centrala begrepp och en uppgiftsbank vars uppgifter tillsammans ger tillräcklig praktisk och producerande träning, var och en kopplad till relevanta lärandemål.