# Dokumentnamn

06-bokstruktur.md

---

# Bokstruktur

Detta dokument definierar lärobokens innehållsliga struktur.

Dokumentet innehåller endast bokens disposition.

Ingen teori.

Inga förklaringar.

Ingen pedagogik.

Ingen kursplanetäckning.

Syftet är att utgöra projektets innehållsförteckning och produktionsplan.

Listan över lärandemål under varje modul är preliminär. När Claude Code delar upp eller slår ihop lärandemål under produktionen (se 04-redaktionsprinciper.md och 08-claude-code-manual.md) ska listan uppdateras i motsvarande grad.

Detta dokument är den enda källan till bokens struktur, även maskinellt: `scripts/bokstruktur-data.mjs` tolkar dokumentet direkt vid varje körning av skeleton-, validerings- och exportskripten. Det finns ingen separat datafil att hålla i synk — men kapitel-, modul- och lärandemålsraderna måste därför följa radformatet nedan exakt. Vid formatfel stannar `npm run validate` med ett radnummer.

---

# Struktur

Boken är uppbyggd enligt följande nivåer.

Ämne

↓

Modul

↓

Lärandemål

---

# Lärandemålens format

Varje lärandemål anges med id, kort arbetstitel och en mätbar målformulering.

Målformuleringen beskriver vad eleven kan göra efter genomfört arbete (03-bokens-arkitektur.md, "Lärandemål"). Den inleds därför alltid med ett observerbart verb: beskriva, förklara, beräkna, tolka, välja, upprätta, genomföra, skissa och så vidare.

Ett lärandemål har inget fast sid- eller uppslagsomfång (03-bokens-arkitektur.md). Det får flöda över så många sidor som förståelsen kräver och delas bara vid flera tydligt skilda kunskapsresultat. Uppslag och sidbrytningar är en layout- och tryckfråga och markeras inte här.

Maskinläst radformat (exakt):

```
# Kapitel <nr> – <titel>
## Modul <nr>.<nr> <titel>
- **<k>.<m>.<l> <Titel>** — <Målformulering.>
```

Numreringen ska vara löpande utan luckor. Tankstrecket i kapitelraden är "–" och skiljetecknet mellan titel och mål är "—".

---

# Kapitel 1 – Teknikens utveckling

## Modul 1.1 Teknik – människans problemlösning

- **1.1.1 Vad är teknik?** — Förklara vad teknik är och ge exempel på hur tekniska lösningar svarar mot mänskliga behov och problem.
- **1.1.2 Teknik, naturvetenskap och matematik** — Beskriva hur teknik samspelar med naturvetenskap och matematik i en verklig teknisk lösning.

## Modul 1.2 Teknikens historiska utveckling

- **1.2.1 Teknik före industrialiseringen** — Beskriva tekniska genombrott från de första verktygen till 1700-talet och förklara deras betydelse för samhället.
- **1.2.2 Ångmaskinen och mekaniseringen** — Beskriva den första industriella revolutionens teknikskiften och förklara hur mekaniseringen förändrade arbete, städer och levnadsvillkor.
- **1.2.3 Elektricitet och massproduktion** — Beskriva den andra industriella revolutionens teknikskiften och förklara hur elektricitet och massproduktion förändrade produktion och vardagsliv.
- **1.2.4 Elektronik och datorer** — Beskriva den tredje industriella revolutionens teknikskiften och förklara hur elektronik och automation förändrade arbete och yrkesroller.
- **1.2.5 Digitalisering, internet och AI** — Beskriva digitaliseringens teknikskiften och förklara hur internet, uppkopplade system och AI förändrat kommunikation, branscher och vardagsliv.

## Modul 1.3 Varför utvecklas teknik?

- **1.3.1 Vad driver teknikutvecklingen?** — Identifiera och förklara hur behov, kunskap, tekniska möjligheter, ekonomiska intressen och samhällsförändringar kan samverka som drivkrafter bakom teknikutveckling.
- **1.3.2 Varför ser tekniska lösningar olika ut?** — Förklara hur befintlig teknik, kunskap, resurser, krav, begränsningar och tekniska avvägningar påverkar vilka tekniska lösningar som utvecklas och hur de utformas.

---

# Kapitel 2 – Att lösa tekniska problem

## Modul 2.1 Vad är ett tekniskt problem?

- **2.1.1 Tekniska problem** — Förklara vad som kännetecknar ett tekniskt problem och skilja mellan behov, problem och lösning.
- **2.1.2 Problemformulering** — Formulera ett tekniskt problem med funktion, krav och begränsningar.

## Modul 2.2 Att välja problemlösningsstrategi

- **2.2.1 Bedöma problemets karaktär** — Bedöma ett tekniskt problems karaktär utifrån om det går att överblicka, hur väl förstått det är och vad ett misslyckat försök kostar, för att välja och motivera en problemlösningsstrategi.
- **2.2.2 Dela upp problemet** — Bryta ned ett sammansatt tekniskt problem i delproblem och lösa dem var för sig.
- **2.2.3 Återanvänd befintlig lösning** — Identifiera och tillämpa en befintlig, beprövad lösning på ett tekniskt problem.
- **2.2.4 Pröva och förbättra** — Använda pröva-och-förbättra som strategi för att lösa ett tekniskt problem genom upprepade, dokumenterade försök.
- **2.2.5 Analysera innan du bygger** — Använda analys, beräkning, simulering och kontrollerade tester för att lösa ett tekniskt problem innan en dyr eller riskfylld fullskalig lösning genomförs.

---

# Kapitel 3 – Teknikutvecklingsprocessen

## Modul 3.1 Teknikutvecklingsprocessen

- **3.1.1 Processens faser** — Beskriva teknikutvecklingsprocessens delar från idé till återvinning och förklara hur de hänger samman.
- **3.1.2 Iteration** — Förklara varför teknikutveckling är iterativ och ge exempel på hur testresultat leder tillbaka till tidigare faser.

## Modul 3.2 Kravspecifikation

- **3.2.1 Behov, krav och önskemål** — Skilja mellan behov, krav och önskemål och förklara varför mätbara krav behövs.
- **3.2.2 Upprätta kravspecifikation** — Upprätta en kravspecifikation med mätbara krav för en produkt eller tjänst.

## Modul 3.3 Idégenerering

- **3.3.1 Idégenereringsmetoder** — Använda metoder för idégenerering för att ta fram flera olika lösningsförslag på ett tekniskt problem.

## Modul 3.4 Konceptutveckling

- **3.4.1 Från idé till koncept** — Utveckla en idé till ett koncept som beskriver funktion, utformning och tänkt användning.
- **3.4.2 Konceptval** — Jämföra koncept med en viktad beslutsmatris och välja koncept med motivering.

## Modul 3.5 Prototyper

- **3.5.1 Prototypers roll** — Förklara vad prototyper används till och skilja mellan olika typer av prototyper.
- **3.5.2 Bygga och testa prototyp** — Bygga en enkel prototyp och använda den för att testa och förbättra ett koncept.

## Modul 3.6 Produktens livscykel

- **3.6.1 Livscykelns faser** — Beskriva en produkts livscykel från råvara till återvinning och koppla miljöpåverkan till livscykelns faser.
- **3.6.2 Design för livscykeln** — Förklara hur konstruktionsval påverkar produktens livslängd, underhåll och återvinning.

---

# Kapitel 4 – Skiss, ritteknik och CAD

## Modul 4.1 Skisser

- **4.1.1 Idéskisser** — Skissa tekniska idéer frihand så att form och funktion framgår.
- **4.1.2 Volymskisser** — Skissa föremål i isometrisk vy så att proportioner och tredimensionell form framgår.

## Modul 4.2 Ritningar

- **4.2.1 Vyer och projektion** — Rita ett föremål i tre vyer och förklara hur vyerna placeras.
- **4.2.2 Ritningens språk** — Tolka linjetyper, skala och ritningshuvud på en teknisk ritning.

## Modul 4.3 Måttsättning

- **4.3.1 Måttsätta ritningar** — Måttsätta en enkel ritning enligt gällande standard.
- **4.3.2 Toleranser** — Förklara varför toleranser behövs och tolka toleransangivelser på en ritning.

## Modul 4.4 CAD

- **4.4.1 CAD och parametrisk modellering** — Förklara vad CAD är och hur parametrisk modellering bygger på skisser, mått och villkor.
- **4.4.2 Modellera en detalj** — Skapa en 3D-modell av en enkel detalj i ett CAD-program.
- **4.4.3 Sammanställningar** — Sätta samman flera detaljer till en sammanställning i CAD och förklara hur delarna förhåller sig till varandra.

## Modul 4.5 Ritningar och modeller

- **4.5.1 Ritning ur modell** — Ta fram en måttsatt ritning ur en 3D-modell.
- **4.5.2 Presentera teknik** — Välja lämplig form för att dokumentera och presentera en teknisk lösning för en given mottagare, muntligt och skriftligt med digitala medier.

---

# Kapitel 5 – Material och deras egenskaper

## Modul 5.1 Materialgrupper

- **5.1.1 Materialens huvudgrupper** — Klassificera material i huvudgrupperna metaller, polymerer, keramer, kompositer och träbaserade material samt ge exempel på användningsområden.

## Modul 5.2 Materialegenskaper

- **5.2.1 Mekaniska egenskaper** — Förklara centrala mekaniska egenskaper som hållfasthet, styvhet, hårdhet och seghet samt ge exempel på när de är avgörande.
- **5.2.2 Fysikaliska och kemiska egenskaper** — Förklara egenskaper som densitet, ledningsförmåga och korrosionsbeständighet samt ge exempel på när de är avgörande.
- **5.2.3 Materialdata** — Tolka materialdata ur tabeller och datablad och jämföra material utifrån givna egenskaper.

## Modul 5.3 Materialval

- **5.3.1 Välja material** — Välja material till en given konstruktion utifrån krav och motivera valet som en avvägning mellan egenskaper, kostnad och hållbarhet.

## Modul 5.4 Tillverkning och material

- **5.4.1 Tillverkningsmetoder** — Beskriva vanliga tillverkningsmetoder och koppla dem till lämpliga materialgrupper.
- **5.4.2 Tillverkningsanpassning** — Förklara hur valet av material och tillverkningsmetod påverkar en detaljs utformning och kostnad.

## Modul 5.5 Material i ett livscykelperspektiv

- **5.5.1 Materialets livscykel** — Bedöma ett materials miljöpåverkan genom livscykeln från utvinning till återvinning.
- **5.5.2 Återvinning och materialval** — Förklara skillnaden mellan återanvändning, materialåtervinning och energiåtervinning samt hur materialvalet påverkar återvinningsbarheten.

---

# Kapitel 6 – Mekanik och konstruktion

## Modul 6.1 Krafter

- **6.1.1 Kraftbegreppet** — Beskriva en kraft med storlek, riktning och angreppspunkt samt rita krafter som vektorer.
- **6.1.2 Kraftresultanter** — Bestämma resultanten av flera krafter grafiskt och genom beräkning med komposanter.
- **6.1.3 Friläggning** — Frilägga en enkel konstruktion och identifiera de krafter som verkar på den.

## Modul 6.2 Moment

- **6.2.1 Momentbegreppet** — Förklara vad ett moment är och beräkna moment kring en punkt.
- **6.2.2 Hävarmsprincipen** — Använda hävarmsprincipen för att förklara och beräkna utväxling i enkla maskiner och verktyg.

## Modul 6.3 Jämvikt

- **6.3.1 Jämviktsvillkoren** — Formulera jämviktsvillkoren och använda dem för att beräkna okända krafter i enkla fall.
- **6.3.2 Stödreaktioner** — Beräkna stödreaktioner för en enkelt belastad balk.

## Modul 6.4 Hållfasthet

- **6.4.1 Belastningstyper** — Identifiera drag, tryck, böjning, skjuvning, vridning och knäckning i verkliga konstruktioner.
- **6.4.2 Spänning och töjning** — Förklara begreppen spänning och töjning samt beräkna normalspänning i en belastad detalj.
- **6.4.3 Dragprovet** — Tolka en dragprovkurva och avläsa elasticitetsmodul, sträckgräns och brottgräns.

## Modul 6.5 Konstruktion

- **6.5.1 Geometri och styvhet** — Förklara hur tvärsnitt och geometri påverkar en konstruktions styvhet och bärförmåga.
- **6.5.2 Fackverk och kraftvägar** — Identifiera drag- och tryckbelastade delar i ett fackverk och förklara hur laster förs ned till stöden.

## Modul 6.6 Dimensionering

- **6.6.1 Säkerhetsfaktor och dimensionering** — Dimensionera en enkel konstruktionsdetalj mot en given belastning med hjälp av tillåten spänning och säkerhetsfaktor.
- **6.6.2 Rimlighetsbedömning** — Bedöma beräkningsresultats rimlighet med överslagsräkning och enhetskontroll.

---

# Kapitel 7 – Mätteknik och dataanalys

## Modul 7.1 Storheter och enheter

- **7.1.1 SI-systemet** — Använda SI-systemets storheter, enheter och prefix samt genomföra enhetsomvandlingar.

## Modul 7.2 Mätinstrument

- **7.2.1 Mäta med rätt instrument** — Välja lämpligt mätinstrument för en given mätuppgift och använda det korrekt.

## Modul 7.3 Mätfel

- **7.3.1 Mätosäkerhet** — Skilja mellan systematiska och slumpmässiga mätfel samt ange mätvärden med rimligt antal värdesiffror.

## Modul 7.4 Datainsamling

- **7.4.1 Planera och genomföra mätningar** — Planera och genomföra en mätserie med strukturerad dokumentation, manuellt eller med digital datainsamling.

## Modul 7.5 Dataanalys

- **7.5.1 Sammanställa mätdata** — Sammanställa mätdata i tabeller och diagram samt beräkna medelvärde och spridning.
- **7.5.2 Tolka mätdata** — Tolka samband i mätdata, anpassa en enkel modell till data och dra slutsatser med hänsyn till mätosäkerheten.

---

# Kapitel 8 – Modellering och simulering

## Modul 8.1 Modeller

- **8.1.1 Modellbegreppet** — Förklara vad en modell är, varför modeller används och vilka begränsningar de har.
- **8.1.2 Välja modelltyp** — Skilja mellan fysiska, matematiska och digitala modeller och välja modelltyp för ett givet syfte.

## Modul 8.2 Digital modellering

- **8.2.1 Bygga en digital modell** — Bygga en enkel digital modell av ett tekniskt förlopp i kalkylprogram eller Python.

## Modul 8.3 Simulering

- **8.3.1 Simuleringens princip** — Förklara vad simulering är och när simulering är att föredra framför fysisk provning.
- **8.3.2 Genomföra en simulering** — Genomföra en enkel simulering, variera parametrar och tolka resultatet.

## Modul 8.4 Verifiering

- **8.4.1 Verifiering och validering** — Förklara skillnaden mellan verifiering och validering samt jämföra modellresultat med mätningar.

---

# Kapitel 9 – IT-system

## Modul 9.1 IT-system

- **9.1.1 IT-systemets delar** — Beskriva ett IT-systems uppbyggnad med hårdvara, mjukvara, data, nätverk och användare samt ge exempel på IT-systems roll i teknikutveckling.

## Modul 9.2 Datorer

- **9.2.1 Datorns uppbyggnad** — Beskriva datorns huvuddelar och förklara hur de samverkar när ett program körs.
- **9.2.2 Digital representation** — Förklara hur tal, text och bilder representeras binärt.

## Modul 9.3 Nätverk

- **9.3.1 Nätverkets delar** — Beskriva hur lokala nätverk är uppbyggda och hur data tar sig mellan enheter.

## Modul 9.4 Internet

- **9.4.1 Så fungerar internet** — Förklara hur internet fungerar med IP-adresser, DNS och paketförmedling.

## Modul 9.5 Digitalisering

- **9.5.1 Digitaliseringens betydelse** — Förklara digitaliseringens betydelse för produktion, kommunikation och människans livsmiljö.
- **9.5.2 Uppkopplade system** — Beskriva hur uppkopplade enheter och molntjänster används i tekniska system och produktion.

---

# Kapitel 10 – Programmering

## Modul 10.1 Python

- **10.1.1 Första programmet** — Skriva, köra och felsöka ett enkelt Python-program med utskrift och inmatning.

## Modul 10.2 Variabler

- **10.2.1 Variabler och datatyper** — Använda variabler och grundläggande datatyper för att utföra beräkningar i program.

## Modul 10.3 Villkor

- **10.3.1 Villkorssatser** — Skriva program som fattar beslut med villkorssatser och logiska uttryck.

## Modul 10.4 Loopar

- **10.4.1 for och while** — Använda for- och while-loopar för att upprepa beräkningar i program.
- **10.4.2 Listor** — Använda listor för att lagra och bearbeta data i program.

## Modul 10.5 Funktioner

- **10.5.1 Funktioner** — Skriva och använda funktioner med parametrar och returvärden för att strukturera programkod.

## Modul 10.6 Problemlösning

- **10.6.1 Från problem till program** — Bryta ned ett tekniskt problem i delsteg och implementera lösningen som ett strukturerat Python-program.
- **10.6.2 Testa och felsöka** — Testa ett program systematiskt samt lokalisera och rätta fel i programkod.

---

# Kapitel 11 – Projekt och entreprenörskap

## Modul 11.1 Projektarbete

- **11.1.1 Projektformen** — Förklara vad som kännetecknar ett projekt samt beskriva vanliga faser och roller i tekniska projekt.

## Modul 11.2 Projektplanering

- **11.2.1 Projektplan** — Upprätta en projektplan med mål, aktiviteter, tidsplan och ansvarsfördelning.
- **11.2.2 Projektrisker** — Identifiera risker i ett projekt och planera förebyggande åtgärder.

## Modul 11.3 Entreprenörskap

- **11.3.1 Entreprenörskapets villkor** — Förklara entreprenörskapets roll i teknikutveckling och vilka villkor som påverkar vägen från idé till produkt på en marknad.
- **11.3.2 Affärsmodell** — Beskriva en affärsmodell för en teknisk produkt eller tjänst med kundnytta, kostnader och intäkter.

## Modul 11.4 Genomförande

- **11.4.1 Arbeta i projekt** — Genomföra ett tekniskt projekt enligt plan med möten, dokumentation och uppföljning av tid och resultat.

## Modul 11.5 Projektutvärdering

- **11.5.1 Utvärdera och presentera** — Utvärdera ett projekts resultat och arbetsprocess samt presentera projektet för en mottagare.

---

# Kapitel 12 – Kvalitet, risk och arbetsmiljö

## Modul 12.1 Kvalitet

- **12.1.1 Kvalitet och kvalitetsarbete** — Förklara begreppet kvalitet och beskriva hur systematiskt kvalitetsarbete med ständiga förbättringar bedrivs.
- **12.1.2 Kvalitetskontroll** — Kontrollmäta en detalj mot ställda krav och avgöra om den ska godkännas.

## Modul 12.2 Riskanalys

- **12.2.1 Genomföra riskanalys** — Genomföra en riskanalys med bedömning av sannolikhet och konsekvens samt föreslå riskreducerande åtgärder.

## Modul 12.3 Arbetsmiljö

- **12.3.1 Systematiskt arbetsmiljöarbete** — Beskriva hur systematiskt arbetsmiljöarbete bedrivs och identifiera arbetsmiljörisker i en teknisk miljö.

## Modul 12.4 Miljösäkring

- **12.4.1 Miljösäkring** — Förklara hur miljösäkring bedrivs och hur miljökrav påverkar tekniskt utvecklings- och produktionsarbete.

---

# Kapitel 13 – Teknik, människa och samhälle

## Modul 13.1 Teknik och samhälle

- **13.1.1 Teknikens växelverkan med samhället** — Analysera hur teknik förändrar samhället och hur samhällets behov och värderingar styr teknikutvecklingen.
- **13.1.2 Teknikerns roll** — Beskriva teknikerns roll och ansvar i utvecklingen av ett hållbart samhälle.

## Modul 13.2 Etik

- **13.2.1 Etik i teknikutveckling** — Identifiera etiska frågor i teknikutveckling och värdera tekniska lösningar utifrån etiska aspekter.

## Modul 13.3 Genus och normer

- **13.3.1 Normer i tekniken** — Förklara hur normer och genusstrukturer påverkar teknikens utformning, användning och tillgänglighet.
- **13.3.2 Normkritisk granskning** — Granska en teknisk lösning ur ett norm- och tillgänglighetsperspektiv och föreslå förbättringar.

## Modul 13.4 Hållbar utveckling

- **13.4.1 Hållbarhet som konstruktionskrav** — Förklara hållbar utveckling ur miljömässigt, ekonomiskt och socialt perspektiv och använda perspektiven vid värdering av tekniska lösningar.
- **13.4.2 Cirkulär ekonomi** — Förklara cirkulär ekonomi och nya affärsmodeller samt hur de förändrar teknikutveckling och produktion.

## Modul 13.5 Framtidens teknik

- **13.5.1 Möjligheter och risker** — Beskriva möjligheter och risker med framtidens teknik och värdera teknikens roll i att möta samhällsutmaningar.

---

# Produktionsstatus

För varje lärandemål registreras status i respektive fils frontmatter:

- Ej påbörjad
- Under utveckling
- Färdig första version
- Fackgranskad
- Språkgranskad
- Klar

Detta dokument anger **målskelettet** — vilka kapitel, moduler och lärandemål som ska finnas. Det faktiska produktionsläget genereras automatiskt av valideringsskriptet i produktionsarkitekturen (se 12-produktionsarkitektur.md, "Kvalitetskontroller och kursplanetäckning") utifrån statusfältet i varje lärandemålsfil. De två ska alltid stämma överens i innehåll (samma kapitel/moduler/lärandemål); det är bara *var det faktiska läget avläses* som skiljer sig.
