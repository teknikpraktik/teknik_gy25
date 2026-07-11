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

Boken är uppbyggd enligt fyra nivåer.

## Ämne

Bokens huvudkapitel.

Exempel:

- Mekanik och konstruktion
- Programmering
- Material och deras egenskaper

---

## Modul

Varje ämne delas in i ett antal moduler.

En modul behandlar ett sammanhängande delområde och består av ett valfritt antal lärandemål.

Antalet moduler bestäms av ämnets naturliga struktur och ska inte följa någon förutbestämd mall.

---

## Lärandemål

Lärandemålet är bokens minsta pedagogiska byggsten.

All planering utgår från lärandemålet.

Varje lärandemål ska beskriva något eleven faktiskt kan göra efter genomfört arbete.

Exempel:

- Beräkna ett moment.
- Tolka en CAD-ritning.
- Välja ett lämpligt konstruktionsmaterial.
- Skriva ett enkelt Python-program.

Lärandemål ska vara observerbara och mätbara.

Lärandemålen är ett redaktionellt verktyg och visas normalt inte för eleven i boken.

---

## Uppslag

Ett lärandemål omfattar normalt ett uppslag.

Om stoffets komplexitet kräver det får ett lärandemål omfatta flera sammanhängande uppslag.

Antalet sidor styrs av pedagogiken, aldrig tvärtom.

Uppslag är ett internt produktions- och planeringsbegrepp. Det får aldrig användas som självreferens i elevtexten, till exempel "i det här uppslaget" eller "som du läste i uppslaget" (05-forfattarmanual.md, "Självreferenser"). Synlig rubriknumrering i elevtext och webb har alltid exakt tre nivåer: kapitel, modul, lärandemål (12-produktionsarkitektur.md, "Rubriknumrering"). Ett uppslag är aldrig en fjärde numrerad nivå.

---

# Uppslagets struktur

Ett normalt uppslag består av två delar.

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

Efter teorin följer uppgifter indelade i tre delar.

### Instuderingsfrågor

Kontrollerar att eleven förstått uppslagets innehåll.

Frågorna ska vara tydliga och kunna besvaras med hjälp av texten. Tillsammans ska de täcka hela teoridelen: dess fakta, samband och resonemang, inte bara rubriker och definitioner.

Normalt 10–15 per uppslag.

---

### Begrepp

Kontrollerar att eleven kan formulera en kort begreppsförklaring.

Standardformuleringen är:

> Förklara följande begrepp med en mening:

Därefter listas normalt 3–6 relevanta begrepp från den aktuella texten, normalt i grundform. Endast begrepp som faktiskt behandlas i texten tas med, och synonymer eller nästan identiska begrepp undviks.

Begreppsdelen ska **inte** innehålla krav på att eleven ska jämföra begrepp, skilja mellan begrepp, välja rätt begrepp, koppla begrepp till produkter, använda begrepp i längre resonemang, motivera val eller analysera tillämpningar. Sådana förmågor tränas i Instuderingsfrågor eller Praktiska uppgifter, aldrig under rubriken Begrepp.

Delen får inte bli en ordlista med färdiga definitioner: eleven formulerar förklaringen själv.

Normalt 3–6 per uppslag.

---

### Praktiska uppgifter

En praktisk uppgift innebär att eleven **producerar, genomför, undersöker, mäter, konstruerar, visualiserar eller presenterar** något. Den praktiska produktionen eller aktiviteten ska vara uppgiftens huvudsakliga arbete och tydligt framgå av instruktionen.

Godkända former omfattar till exempel: konstruktion, skiss, teknisk ritning, flödesdiagram, kalkylblad, tillverkning av presentationsmaterial, digital presentation, plansch, programmering, simulering, modellering, fysisk undersökning, användning av datorprogram, mätning, testning, experiment, prototyp, muntlig presentation, film, podd samt fysisk eller digital modell.

En skriftlig analys, jämförelse, värdering, argumentation eller reflektion räknas inte i sig som en praktisk uppgift, även om den har teknisk kärna. En praktisk uppgift får innehålla en kort skriftlig dokumentation eller analys som ett sista led, men inte som huvudsaken.

Omfattningen sträcker sig från korta tekniska moment på några minuter till mer omfattande laborationer eller konstruktionsuppgifter.

AI-uppgifter kan förekomma här när de tillför ett verkligt värde och uppfyller definitionen ovan (till exempel simulering eller informationsbearbetning som mynnar ut i något producerat).

Normalt 2–5 per uppslag, med variation i arbetsform och omfattning. Färre än 2 kräver ett tydligt redaktionellt skäl; fler än 5 ska undvikas. Flera uppgifter får inte vara kosmetiska varianter av samma aktivitet. Ett avsiktligt avsteg motiveras kort i frontmatterfältet `praktiska_uppgifter_undantag` (13-produktionsmanual.md) i stället för att en dålig eller konstlad uppgift läggs till bara för att nå spannet.

---

# Praktiskt arbete

Om ett lärandemål kan tränas praktiskt utan att uppgiften känns konstruerad ska boken innehålla ett praktiskt moment.

Praktiska moment prioriteras framför motsvarande teoretiska uppgifter när båda tränar samma förmåga.

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

Varje teoriuppslag ska normalt innehålla minst en figur.

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

- sammanfattningar efter varje lärandemål
- repetitionskapitel
- motiverande texter
- onödiga introduktioner
- utfyllnad
- artificiella berättelser
- snabbspår eller separata fördjupningsspår

Allt innehåll ska motiveras av ett tydligt lärandemål.

---

# Kvalitetskriterier

Ett lärandemål är färdigt först när:

- teorin är komplett men koncentrerad
- alla fakta är korrekta
- minst en figur finns specificerad när den förbättrar förståelsen
- uppgifter finns under Instuderingsfrågor, Begrepp och Praktiska uppgifter
- praktiskt moment finns när det känns naturligt
- AI används endast där det tillför verkligt värde
- verkliga exempel används
- eleven rimligen kan uppnå lärandemålet utan ytterligare teori