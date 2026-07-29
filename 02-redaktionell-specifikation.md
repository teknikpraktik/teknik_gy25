# Dokumentnamn

02-redaktionell-specifikation.md

---

# Exempel, verktyg och avgränsningar

Detta dokument avgör **vilka exempel, verktyg och språk boken använder, och vad den avstår från**.

Allt annat som tidigare stod här är flyttat (se "Flyttat innehåll"). Bokens vision och position beskrivs i *01-projektvision.md*, pedagogisk struktur i *03-bokens-arkitektur.md*, kapitel- och avsnittsstrukturen i *06-bokstruktur.md*, kursplanetäckningen i *07-kursplanetackning.md* och språkliga riktlinjer i *05-forfattarmanual.md*.

Filnamnet är oförändrat för att inte bryta befintliga hänvisningar. Dokumentet behåller plats två i prioriteringsordningen (08-claude-code-manual.md).

---

# Flyttat innehåll

Bantningen 2026-07-29 tog bort de avsnitt vars innehåll ägs av annat styrdokument. Raderna nedan pekar vidare.

| Tidigare avsnitt här | Ägs nu av |
|---|---|
| Omfattning | 01-projektvision.md, "Bokens position" |
| En bok | 07-kursplanetackning.md, ingressen |
| Målgrupp | 01-projektvision.md, "Målgrupp" |
| Disposition | 03-bokens-arkitektur.md, "Skrivanvisningar per kapitel" |
| Kursplanetäckning | 01-projektvision.md, "Kursplanetäckning", och 07-kursplanetackning.md |
| Ämnesmässiga prioriteringar | 01-projektvision.md, "Bokens position", och 03-bokens-arkitektur.md, "Pedagogisk filosofi" |
| Illustrationer | 03-bokens-arkitektur.md, "Bilder" |
| Arbetsbok | 03-bokens-arkitektur.md, "Elevens arbete" |
| Kapiteloberoende | 03-bokens-arkitektur.md, "Kapitlens avgränsning" |
| Redaktionella mål | 01-projektvision.md, "Ambitionsnivå" och "Framgångskriterier" |
| Aktualitet | Uppgått i "Exempel" nedan |

Kapitellistan är struken utan ersättningsrad. **06-bokstruktur.md är enda källan** till kapitel, avsnitt, delavsnitt och lärandemål.

---

# Programmering

Python är bokens enda programmeringsspråk.

Ingen blockprogrammering används.

Kodexempel skrivs med modern Python.

---

# Digitala verktyg

Programvara används endast när den representerar etablerade arbetssätt.

Exempel:

- Onshape
- Python
- kalkylprogram

Verktygen används som exempel.

Boken är inte knuten till specifika produkter.

---

# AI

AI utgör inte ett eget tema genom boken.

Hur AI används i innehållet regleras av 03-bokens-arkitektur.md, "AI", och bokens hållning till digitalisering och AI av 01-projektvision.md, "Digitalisering och AI".

---

# Exempel

Exempel hämtas från verkliga produkter, företag, konstruktioner och tekniska system.

Exemplen ska spegla modern teknik samtidigt som de i möjligaste mån väljs så att de har lång livslängd. Teknik utvecklas snabbt, och ett exempel som är bundet till en enskild produktgeneration åldras med den.

## Exempelområden

Exempel hämtas inte fritt. Två slag av teknikområden ska hållas isär, och tillämpningsområdena är en sluten lista att välja ur.

**Processkunskap (produktion och tillverkning)** handlar om hur saker framställs. Det är inget exempelområde att hämta illustrationer ur, utan stoff som vävs in där det obligatoriska innehållet kräver det: produktsteget i processkedjan (kapitel 3), material och tillverkningsmetod (kapitel 5) och kvalitetsdimensionen (kapitel 12). Processkunskap blir aldrig ett eget bärande kapitel och används inte som exempelkälla i övriga kapitel.

**Tillämpningsområden** är vad tekniken riktas mot. Det är härifrån exemplen hämtas, och läraren ska kunna byta ut dem. Fyra områden används, vart och ett för det det illustrerar bäst:

- **Produktdesign och formgivning.** Starkast allround: konkret, självstudievänlig, bär hela utvecklingsprocessen och knyter an till CAD. Den mest återkommande källan.
- **Informationsteknik och mjukvara.** Bärare i de digitala kapitlen (9, 10). Kräver bara en dator, vilket gör exemplen genomförbara för alla elever.
- **Bygg och konstruktion.** Bärare för dimensionering och hållfasthet (kapitel 6).
- **Hållbar teknik och energi.** Bärare för värdering (kapitel 13): cirkulär ekonomi och livscykel.

**Regel för den som skriver ett kapitel:** använd tre till fyra återkommande områden över boken som helhet, inte fler. Välj för varje kapitel det område som illustrerar just det kapitlets stoff bäst, enligt listan ovan. Skälet är dubbelt: eleven ska inte tro att teknik är detsamma som produktdesign, och exemplen ska inte spreta utan röd tråd genom boken.

Har ett kapitel inget uttryckligt bärarområde i listan väljer den som skriver kapitlet det av de fyra som bäst illustrerar kapitlets stoff, och motiverar valet. Det finns inget standardområde att falla tillbaka på.

Alla exempel är utbytbara (03-bokens-arkitektur.md, "Exempel"). Konkreta verktyg som nämns, till exempel Onshape för CAD och kalkylark för dataanalys, märks uttryckligen som utbytbara där de förekommer.

---

# Avgränsningar

Boken innehåller inte:

- nivå 3
- omfattande historiska utvikningar utanför teknikhistoriekapitlet
- kataloger över alternativa metoder
- produktreklam

Övriga avgränsningar, till exempel repetitionskapitel, utfyllnad och sammanfattningar efter varje avsnitt, står i 03-bokens-arkitektur.md, "Avgränsningar".
