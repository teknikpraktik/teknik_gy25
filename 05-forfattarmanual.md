# Dokumentnamn

05-forfattarmanual.md

---

# Författarmanual

Detta dokument definierar hur läroboken ska skrivas.

Dokumentet reglerar språk, ton, disposition och berättarteknik. Det beskriver inte bokens struktur eller pedagogiska modell. Dessa behandlas i *03-bokens-arkitektur.md*.

Målet är att hela boken ska upplevas som skriven av en erfaren tekniklärare med djupa ämneskunskaper och stor pedagogisk erfarenhet. Läsaren ska aldrig uppleva att texten är AI-genererad.

---

# Grundprincip

Språket ska hjälpa eleven att förstå ämnet.

Det ska aldrig dra uppmärksamheten till sig självt.

Texten ska vara saklig, tydlig och naturlig utan att bli torr eller mekanisk.

---

# Författarröst

Boken skrivs av en kunnig lärare.

Inte av en forskare.

Inte av en journalist.

Inte av en marknadsförare.

Inte av en AI.

Författaren utgår från att eleven är intelligent men ännu inte behärskar ämnet.

Författaren förenklar därför förklaringar, aldrig verkligheten.

---

# Ton

Texten ska vara:

- saklig
- lugn
- trygg
- tydlig
- professionell

Texten ska aldrig vara:

- överdrivet entusiastisk
- säljande
- skämtsam
- tillgjord
- ungdomlig
- mästrande

Intresset ska väckas av innehållet, inte av språket.

---

# Meningsbyggnad

Meningslängden ska varieras naturligt.

Kortare meningar används när precision eller tydlighet krävs.

Längre meningar används när resonemang utvecklas.

Undvik ett monotont skrivsätt där alla meningar har samma längd eller samma struktur.

---

# Tankstreck

Tankstreck och talstreck används inte i elevtexten.

Detta gäller brödtext, uppgifter och figurtext.

Meningar skrivs i stället om med punkt, komma, kolon eller annan naturlig meningsbyggnad.

Bindestreck i sammansatta ord och etablerade skrivsätt behålls när de språkligt behövs.

---

# Stycken

Stycken ska vara korta men inte onaturligt korta.

**En idé per stycke.** Ett stycke behandlar en sammanhängande idé och inget mer.

Nytt stycke används när läsaren behöver ett naturligt mentalt avbrott.

Stycken delas aldrig upp enbart för att skapa luft.

---

# Ordval

Använd ett naturligt och modernt språk.

Välj enkla ord när de uttrycker samma sak.

Tekniska begrepp används när de behövs och förklaras första gången de introduceras.

Undvik onödigt akademiskt språk.

Undvik vardagsslang.

---

# Begreppsmarkering

Begrepp **kursiveras** första gången de introduceras, i den mening där de definieras.

Aldrig fetstil för begrepp. Inga definitionsrutor: definitionen växer ur exemplet och står i löpande prosa (03, "Löptext"). Den exakta definitionen samlas i kapitlets begreppslista.

---

# Terminologikonsekvens

Ett ord per sak genom hela boken. Vardagsord före fackmetafor: dragkedja, inte blixtlås.

En löpande termlista förs i `termlista.md` (projektroten) så att kapitel inte väljer olika ord för samma sak. Nya termval med tänkbara synonymer förs in i listan när de görs.

---

# Hyperboler

Obevisbara hyperboler undviks. Undantaget är en ren krok i en avsnittsöppning, och även där sparsamt. Alla kvantitativa påståenden ska kunna verifieras (se "Fakta").

---

# Informationstäthet

Varje mening ska bidra med ny information.

Skär omsvep, inte information: bort med uppvärmningar, upprepningar och metakommentarer. Kan en mening strykas utan att ett faktum försvinner, stryk den.

Information får aldrig upprepas enbart för att skapa flyt.

Kondenseringen prövas alltid mot självstudiebarheten (03, "Överordnat kriterium"): kort och obegripligt är värre än långt. Procedur- och beräkningsstoff tål mindre komprimering — stryk aldrig steg.

---

# Variation

Texten ska ha ett naturligt tempo.

Variera:

- meningslängd
- styckelängd
- sätt att introducera nya idéer
- sätt att formulera exempel

Undvik symmetri.

Alla avsnitt behöver inte innehålla samma antal exempel, figurer eller underrubriker.

Dispositionen får varieras när det förbättrar förståelsen.

---

# Förklaringar

Utgå från det konkreta.

Abstrakta modeller introduceras först när eleven förstått det konkreta exemplet.

Förklaringar ska utvecklas stegvis.

Läsaren ska aldrig behöva gissa ett mellanled.

---

# Exempel

Exempel ska vara verkliga.

Verkliga produkter.

Verkliga företag.

Verkliga tekniska lösningar.

Verkliga händelser.

Exempel ska varieras genom hela boken.

Samma exempel ska inte återkomma i flera kapitel om det inte finns ett tydligt pedagogiskt skäl.

---

# Personnamn

Om eleven inte behöver kunna personens namn för att förstå tekniken ska namnet normalt tas bort.

Personer namnges när de:

- har avgörande teknikhistorisk betydelse
- är allmänt etablerade
- tillför förståelse som inte kan förmedlas lika bra genom produkten, konstruktionen eller den tekniska lösningen

Berättelsen behålls även när namnet tas bort: årtal, platser, produkter och förlopp bär konkretionen.

Representation av både kvinnor och män eftersträvas genom hela boken, men perifera personer läggs aldrig in enbart för balansens skull.

---

# Formler

Formler introduceras så snart de behövs.

Formler skjuts inte upp av pedagogiska skäl.

När en formel introduceras ska eleven förstå:

- vad den beskriver
- när den används
- hur den används

---

# Punktlistor

Punktlistor används sparsamt.

De används endast när de ger bättre överblick än löpande text.

Löpande text är förstahandsvalet.

---

# Rubriker

Rubriker ska vara korta.

Rubriker ska beskriva innehållet.

Undvik rubriker som försöker vara fyndiga.

---

# Uppgiftsrubrik

Avsnittets uppgiftssektion har alltid rubriken **Övningar**. Det är den enda tillåtna rubriken för avsnittets uppgifter (03-bokens-arkitektur.md, "Avsnittets struktur"; termlista.md).

Den tidigare rubriken "Praktiska uppgifter" är utfasad (redaktionellt beslut 2026-07-22) och skrivs aldrig i nytt innehåll. Rubriken "Projektuppgifter" används inte heller: kapitlets större, integrerande uppgifter skrivs som helkapitelövningar i de senare avsnittens Övningar, inte i en egen bank.

`npm run validate` flaggar en kvarvarande "Praktiska uppgifter"-rubrik i content-filer. I nyskrivna eller redan migrerade avsnitt är det ett aktivt fel; i den kända legacy-uppsättningen (avsnitt som ännu inte migrerats) redovisas den som förväntad migreringsskuld och rättas när respektive kapitel migreras.

---

# Frågor till läsaren

Retoriska frågor används mycket sparsamt.

Texten ska inte bygga på ett samtal med läsaren.

---

# Tilltal

Direkt tilltal ("du") används endast när det förbättrar tydligheten.

Texten ska inte präglas av ett genomgående personligt tilltal.

---

# AI-språk som ska undvikas

Undvik formuleringar som ofta förekommer i AI-genererad text.

Exempel:

- "Det är viktigt att..."
- "Det handlar inte om X utan om Y."
- "Låt oss..."
- "Vi ska nu..."
- "I dagens samhälle..."
- "Som vi kommer att se..."
- "Det är värt att notera..."
- "Tänk på att..."
- "Sammanfattningsvis..."

Liknande formuleringar ska undvikas även om de inte finns i listan.

---

# Onödiga texttyper

Boken ska inte innehålla:

- utfyllnad
- motivationsstycken
- upprepningar
- metakommentarer
- självreferenser
- gransknings-, process- och utkastnotiser (se nedan)
- sammanfattningar efter varje avsnitt
- tomma övergångar mellan avsnitt

Texten går direkt till innehållet.

---

# Granskningsnotiser (hård regel)

Gransknings-, process- och utkastkommentarer får **aldrig** stå i innehållets brödtext. Det gäller allt sådant som "vad som utkastats", "vad som ändrats", "vad som ska granskas", betygskopplingsresonemang och liknande meta-text. Elevtexten ska vara ren.

Utkaststatus spåras på **kapitelnivå** via `migreradeKapitel` (scripts/migreringsstatus.mjs), inte via markörer i prosan. Ett ogranskat kapitel känns igen på att det inte ligger i `migreradeKapitel`, inte på inline-taggar som `[UTKAST …]`.

Sådant innehåll hör i stället hemma i rapporten till projektägaren och/eller i produktionslogg.md.

Detta gäller **inte** strukturerade platshållare: `[BILD X.Y-N]` med Innehåll (illustratörsbrief) och Bildtext är legitimt, permanent innehåll och ska stå kvar. En bildtext får dock inte bära en utkastmarkör; skriv den färdig eller lämna kapitlet omigrerat.

`scripts/validate.mjs` flaggar en `[UTKAST …]`-markör eller granskningsnotis i brödtext som **aktivt fel** (09-kvalitetssakring.md).

---

# Övergångar

Övergångar mellan avsnitt ska kännas naturliga.

De ska inte förklara att ett nytt avsnitt börjar.

De ska leda läsaren vidare genom ämnet.

---

# Självreferenser

Ordet "uppslag" är ett internt produktionsbegrepp (12-produktionsarkitektur.md) och får aldrig användas som självreferens i elevtexten, varken i löptext eller i uppgiftsinstruktioner.

Förbjudna formuleringar, till exempel:

- "Ge exempel ur uppslaget."
- "I det här uppslaget får du lära dig..."
- "Använd modellen från föregående uppslag."
- "Som du läste i uppslaget..."

Skriv i stället naturligt om vad texten faktiskt innehåller:

- "Ge exempel från texten."
- "Använd modellen som beskrivs ovan."
- "Utgå från exemplet i avsnittet."
- "Använd den tidigare beskrivningen av..."

Orden "lärandemål" och "modul" är interna produktions- och planeringsbegrepp och får inte användas som självreferens i elevtexten. Formuleringar som "i förra lärandemålet", "från föregående lärandemål" eller "figuren i lärandemål 1.2" skrivs om till en stabil hänvisning till innehållet: den konkreta sakens namn, "avsnittet om ...", eller vid behov avsnitts- eller kapitelnumret ("avsnitt 1.3"), aldrig produktionsenheten.

Uppgifter i kapitlets projektbank ska dessutom fungera **fristående**. En uppgift som flyttats från ett avsnitt får inte hänvisa till "föregående avsnitt" eller "figuren ovan", utan ska innehålla den information eleven behöver, eller en stabil hänvisning till kapitlets text.

Samma princip gäller andra hänvisningar till bokens sidformat i stället för dess innehåll. Hänvisa till "texten", "avsnittet", "figuren" eller den konkreta sakens namn, inte till hur materialet är paginerat eller producerat.

---

# Disposition

Claude får ändra dispositionen inom ett avsnitt när det förbättrar förståelsen.

Exempel kan komma före teori.

Teori kan delas upp av ett exempel.

Ett begrepp kan introduceras senare om det ger bättre progression.

Dispositionen ska alltid styras av elevens förståelse.

---

# Fakta

Alla faktauppgifter ska vara korrekta.

Vid osäkerhet ska den mest etablerade tekniska beskrivningen användas.

Påståenden ska kunna verifieras.

---

# Slutlig kvalitetskontroll

Den fullständiga kvalitetskontrollen av färdigt innehåll, inklusive de språkliga kriterierna, regleras av *09-kvalitetssakring.md*.

Denna manual anger de språkliga principer som ska tillämpas under skrivandet: se avsnitten ovan om ton, meningsbyggnad, ordval, informationstäthet och AI-språk.