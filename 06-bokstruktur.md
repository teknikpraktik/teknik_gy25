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

Listan över delavsnitt och lärandemål under varje avsnitt är preliminär. När Claude Code delar eller slår ihop avsnitt eller delavsnitt under produktionen (se 04-redaktionsprinciper.md och 08-claude-code-manual.md) ska listan uppdateras i motsvarande grad.

Detta dokument är den enda källan till bokens struktur, även maskinellt: `scripts/bokstruktur-data.mjs` tolkar dokumentet direkt vid varje körning av skeleton-, validerings- och exportskripten. Det finns ingen separat datafil att hålla i synk — men kapitel-, avsnitts- och delavsnittsraderna måste därför följa radformatet nedan exakt. Vid formatfel stannar `npm run validate` med ett radnummer.

**Migreringsläge (2026-07-22):** kapitelmodellen nedan (onumrerade kapitelavslutningar Sammanfattning och Begrepp, inga projektuppgiftsavsnitt) är fastställd av projektägaren, men skripten och delar av content/ följer ännu den tidigare modellen. Skript- och innehållsmigreringen görs kapitel för kapitel; till dess kan `npm run validate` fela på den nya strukturen. Se produktionslogg.md, posten 2026-07-22.

---

# Struktur

Boken är uppbyggd enligt följande nivåer.

Kapitel (H1)

↓

Avsnitt (H2)

↓

Delavsnitt (H3, används vid behov)

**Avsnittet (H2) är bokens minsta producerade och publicerade enhet.** Det är den fasta pedagogiska, redaktionella, navigerbara och producerbara enheten — produktionsstrukturen och publiceringsstrukturen är identiska. Delavsnitt (H3) ger ett avsnitt naturliga underrubriker när innehållet har flera tydligt skilda delar, men är aldrig en egen fil, sida eller navigeringsnivå.

**Varje teoriavsnitt följer samma mönster:** löptext (med bildplatshållare), därefter en samlad sektion Instuderingsfrågor och en samlad sektion Övningar (03-bokens-arkitektur.md, "Avsnittets struktur"). Mönstret listas inte här — detta dokument disponerar bara rubriker, delavsnitt och lärandemål.

**Lärandemål är metadata, inte en rubriknivå.** Ett lärandemål är inte längre en egen fil eller synlig rubrik. Varje avsnitt har ett eller flera lärandemål registrerade i frontmatterfältet `learningGoals` (se 12-produktionsarkitektur.md). Lärandemålen styr fortfarande vad som ska skrivas och är kvalitetskriteriet för när avsnittet är klart, men de syns normalt inte för eleven.

Antalet avsnitt per kapitel och delavsnitt per avsnitt bestäms av ämnets naturliga struktur, inte av någon förutbestämd mall. Ett avsnitt kan omfatta ett eller flera lärandemål och ett eller flera uppslag; antalet sidor styrs av innehållet (03-bokens-arkitektur.md, "Sidomfång").

---

# Avsnittens och delavsnittens format

Varje avsnitt anges med numrerad H2-rubrik, följd av en punktlista med avsnittets lärandemål (mätbara målformuleringar, se nedan) och därefter eventuella H3-delavsnitt.

Målformuleringen beskriver vad eleven kan göra efter genomfört arbete (03-bokens-arkitektur.md, "Lärandemål"). Den inleds därför alltid med ett observerbart verb: beskriva, förklara, beräkna, tolka, välja, upprätta, genomföra, skissa och så vidare.

Ett avsnitt har inget fast sid- eller uppslagsomfång (03-bokens-arkitektur.md). Det får flöda över så många sidor som förståelsen kräver. Uppslag och sidbrytningar är en layout- och tryckfråga och markeras inte här.

Maskinläst radformat (exakt):

```
# Kapitel <nr> · <titel>

## <nr>.<sektionsnr> <Avsnittstitel>
- <Målformulering 1.>
- <Målformulering 2.>

### <Delavsnittstitel>
### <Delavsnittstitel>

## Sammanfattning

## Begrepp
```

Regler:

- Kapitelraden inleder ett kapitel. Mellanslagstecknet är "·".
- Avsnittsraden (`## <kapitel>.<sektionsnr> <titel>`) numreras löpande utan luckor inom kapitlet. Endast teoriavsnitt numreras.
- Punktlistan direkt under en avsnittsrad (rader som inleds med `- ` innan nästa `##`/`###`) är avsnittets lärandemål. Ett teoriavsnitt har minst ett lärandemål.
- De två kapitelavslutande avsnitten (se nedan) skrivs som onumrerade H2-rader, alltid sist i kapitlet, alltid i ordningen `## Sammanfattning`, `## Begrepp`, med exakt dessa titlar. De saknar lärandemål och har därför ingen punktlista.
- `### <delavsnittstitel>`-rader är valfria och används bara när avsnittet naturligt delas i flera delar. De är inte lärandemål och har ingen egen punktlista eller numrering — de är rena underrubriker i avsnittets löptext.
- H4 används undantagsvis, bara när ett H3-delavsnitt verkligen behöver delas upp ytterligare, och skrivs direkt i innehållsfilen (inte i detta dokument, som bara disponerar ner till H3).

---

# Kapitelavslutningar

Varje kapitel avslutas med två onumrerade H2-avsnitt, alltid i denna ordning och med exakt dessa titlar: **Sammanfattning**, **Begrepp**. De är egna innehållstyper (`type: kapitelsammanfattning` / `begreppsovning`), inte lärandemål, saknar `learningGoals` och sammanfattar respektive definierar kapitlets innehåll som helhet (03-bokens-arkitektur.md, "Kapitelavslutningar"; 12-produktionsarkitektur.md).

Det finns inga separata projektuppgiftsavsnitt. Kapitlets större, integrerande uppgifter skrivs som helkapitelövningar i Övningar-sektionen i kapitlets senare avsnitt (03-bokens-arkitektur.md, "Övningar").

---

# Kapitel 1 · Teknikens grunder

## 1.1 Vad är teknik?
- Förklara vad teknik är och ge exempel på hur tekniska lösningar svarar mot mänskliga behov och problem.
- Beskriva hur teknik samspelar med naturvetenskap och matematik i en verklig teknisk lösning.

### Teknik löser problem
### Teknik är mer än bara föremål
### Teknik, naturvetenskap och matematik

## 1.2 Teknik genom historien
- Beskriva tekniska genombrott från de första verktygen till 1700-talet och förklara deras betydelse för samhället.
- Beskriva den första industriella revolutionens teknikskiften och förklara hur mekaniseringen förändrade arbete, städer och levnadsvillkor.
- Beskriva den andra industriella revolutionens teknikskiften och förklara hur elektricitet och massproduktion förändrade produktion och vardagsliv.
- Beskriva den tredje industriella revolutionens teknikskiften och förklara hur elektronik och automation förändrade arbete och yrkesroller.
- Beskriva digitaliseringens teknikskiften och förklara hur internet, uppkopplade system och AI förändrat kommunikation, branscher och vardagsliv.

### Teknik före industrialiseringen
### Ångmaskinen och mekaniseringen
### Elektricitet och massproduktion
### Elektronik och datorer
### Digitalisering, internet och AI

## 1.3 Drivkrafter och ingenjörsmässiga val
- Identifiera och förklara hur behov, kunskap, tekniska möjligheter, ekonomiska intressen och samhällsförändringar kan samverka som drivkrafter bakom teknikutveckling.
- Förklara hur befintlig teknik, kunskap, resurser, krav, begränsningar och tekniska avvägningar påverkar vilka tekniska lösningar som utvecklas och hur de utformas.

### Vad sätter teknikutvecklingen i rörelse?
### Vad formar den färdiga lösningen?

## Sammanfattning

## Begrepp

---

# Kapitel 2 · Att lösa tekniska problem

## 2.1 Vad är ett tekniskt problem?
- Förklara vad som kännetecknar ett tekniskt problem och skilja mellan behov, problem och lösning.
- Formulera ett tekniskt problem med funktion, krav och begränsningar.

### Tekniska problem
### Problemformulering

## 2.2 Att välja problemlösningsstrategi
- Bedöma ett tekniskt problems karaktär utifrån om det går att överblicka, hur väl förstått det är och vad ett misslyckat försök kostar, för att välja och motivera en problemlösningsstrategi.
- Bryta ned ett sammansatt tekniskt problem i delproblem och lösa dem var för sig.
- Identifiera och tillämpa en befintlig, beprövad lösning på ett tekniskt problem.
- Använda pröva-och-förbättra som strategi för att lösa ett tekniskt problem genom upprepade, dokumenterade försök.
- Använda analys, beräkning, simulering och kontrollerade tester för att lösa ett tekniskt problem innan en dyr eller riskfylld fullskalig lösning genomförs.

### Bedöma problemets karaktär
### Dela upp problemet
### Återanvänd befintlig lösning
### Pröva och förbättra
### Analysera innan du bygger

## Sammanfattning

## Begrepp

---

# Kapitel 3 · Teknikutvecklingsprocessen

## 3.1 Teknikutvecklingsprocessen
- Beskriva teknikutvecklingsprocessens delar från idé till återvinning och förklara hur de hänger samman.
- Förklara varför teknikutveckling är iterativ och ge exempel på hur testresultat leder tillbaka till tidigare faser.

### Processens faser
### Iteration

## 3.2 Kravspecifikation
- Skilja mellan behov, krav och önskemål och förklara varför mätbara krav behövs.
- Upprätta en kravspecifikation med mätbara krav för en produkt eller tjänst.

### Behov, krav och önskemål
### Upprätta kravspecifikation

## 3.3 Idégenerering
- Använda metoder för idégenerering för att ta fram flera olika lösningsförslag på ett tekniskt problem.

## 3.4 Konceptutveckling
- Utveckla en idé till ett koncept som beskriver funktion, utformning och tänkt användning.
- Jämföra koncept med en viktad beslutsmatris och välja koncept med motivering.

### Från idé till koncept
### Konceptval

## 3.5 Prototyper
- Förklara vad prototyper används till och skilja mellan olika typer av prototyper.
- Bygga en enkel prototyp och använda den för att testa och förbättra ett koncept.

### Prototypers roll
### Bygga och testa prototyp

## 3.6 Produktens livscykel
- Beskriva en produkts livscykel från råvara till återvinning och koppla miljöpåverkan till livscykelns faser.
- Förklara hur konstruktionsval påverkar produktens livslängd, underhåll och återvinning.

### Livscykelns faser
### Design för livscykeln

## Sammanfattning

## Begrepp

---

# Kapitel 4 · Skiss, ritteknik och CAD

## 4.1 Skisser
- Skissa tekniska idéer frihand så att form och funktion framgår.
- Skissa föremål i isometrisk vy så att proportioner och tredimensionell form framgår.

### Idéskisser
### Volymskisser

## 4.2 Ritningar
- Rita ett föremål i tre vyer och förklara hur vyerna placeras.
- Tolka linjetyper, skala och ritningshuvud på en teknisk ritning.

### Vyer och projektion
### Ritningens språk

## 4.3 Måttsättning
- Måttsätta en enkel ritning enligt gällande standard.
- Förklara varför toleranser behövs och tolka toleransangivelser på en ritning.

### Måttsätta ritningar
### Toleranser

## 4.4 CAD
- Förklara vad CAD är och hur parametrisk modellering bygger på skisser, mått och villkor.
- Skapa en 3D-modell av en enkel detalj i ett CAD-program.
- Sätta samman flera detaljer till en sammanställning i CAD och förklara hur delarna förhåller sig till varandra.

### CAD och parametrisk modellering
### Modellera en detalj
### Sammanställningar

## 4.5 Ritningar och modeller
- Ta fram en måttsatt ritning ur en 3D-modell.
- Välja lämplig form för att dokumentera och presentera en teknisk lösning för en given mottagare, muntligt och skriftligt med digitala medier.

### Ritning ur modell
### Presentera teknik

## Sammanfattning

## Begrepp

---

# Kapitel 5 · Material och deras egenskaper

## 5.1 Materialgrupper
- Klassificera material i huvudgrupperna metaller, polymerer, keramer, kompositer och träbaserade material samt ge exempel på användningsområden.

## 5.2 Materialegenskaper
- Förklara centrala mekaniska egenskaper som hållfasthet, styvhet, hårdhet och seghet samt ge exempel på när de är avgörande.
- Förklara egenskaper som densitet, ledningsförmåga och korrosionsbeständighet samt ge exempel på när de är avgörande.
- Tolka materialdata ur tabeller och datablad och jämföra material utifrån givna egenskaper.

### Mekaniska egenskaper
### Fysikaliska och kemiska egenskaper
### Materialdata

## 5.3 Materialval
- Välja material till en given konstruktion utifrån krav och motivera valet som en avvägning mellan egenskaper, kostnad och hållbarhet.

## 5.4 Tillverkning och material
- Beskriva vanliga tillverkningsmetoder och koppla dem till lämpliga materialgrupper.
- Förklara hur valet av material och tillverkningsmetod påverkar en detaljs utformning och kostnad.

### Tillverkningsmetoder
### Tillverkningsanpassning

## 5.5 Material i ett livscykelperspektiv
- Bedöma ett materials miljöpåverkan genom livscykeln från utvinning till återvinning.
- Förklara skillnaden mellan återanvändning, materialåtervinning och energiåtervinning samt hur materialvalet påverkar återvinningsbarheten.

### Materialets livscykel
### Återvinning och materialval

## Sammanfattning

## Begrepp

---

# Kapitel 6 · Mekanik och konstruktion

## 6.1 Krafter
- Beskriva en kraft med storlek, riktning och angreppspunkt samt rita krafter som vektorer.
- Bestämma resultanten av flera krafter grafiskt och genom beräkning med komposanter.
- Frilägga en enkel konstruktion och identifiera de krafter som verkar på den.

### Kraftbegreppet
### Att lägga samman och dela upp krafter
### Friläggning

## 6.2 Moment
- Beräkna momentet av en kraft kring en punkt, även när kraften verkar snett, med hjälp av momentarmen eller kraftens vinkelräta komposant.
- Använda hävarmsprincipen för att förklara och beräkna utväxling i verktyg och maskiner, och redogöra för vad en hög utväxling kostar i rörelsesträcka.

### Momentbegreppet
### Hävarmsprincipen

## 6.3 Jämvikt
- Formulera jämviktsvillkoren och använda dem för att beräkna okända krafter i enkla fall.
- Beräkna stödreaktioner för en enkelt belastad balk.
- Bedöma en konstruktions stabilitet utifrån tyngdpunktens läge och stödytans storlek, och förklara när den välter.

### Jämviktsvillkoren
### Stödreaktioner
### Tyngdpunkt och stabilitet

## 6.4 Hållfasthet
- Identifiera drag, tryck, böjning, skjuvning, vridning och knäckning i verkliga konstruktioner.
- Förklara begreppen spänning och töjning samt beräkna normalspänning i en belastad detalj.
- Läsa av elasticitetsmodul, sträckgräns och brottgräns ur en dragprovkurva och använda värdena som underlag för materialval och dimensionering.

### Belastningstyper
### Spänning och töjning
### Dragprovet

## 6.5 Konstruktioner
- Förklara hur tvärsnitt och geometri påverkar en konstruktions styvhet och bärförmåga, med I-balken som exempel på materialeffektiv geometri.
- Identifiera drag- och tryckbelastade delar i ett fackverk och förklara hur laster förs ned till stöden genom balkar, pelare, bågar och ramar.
- Jämföra olika konstruktionsprinciper utifrån hållfasthet, vikt, materialåtgång, tillverkning och kostnad, och motivera ett val för ett givet ändamål.

### Balkar, pelare och tvärsnittets form
### Fackverk, bågar, ramar och stagning
### Att välja konstruktionsprincip

## 6.6 Dimensionering
- Identifiera vilka laster en konstruktion kan utsättas för, däribland egentyngd, nyttig last, vind- och snölast, och skilja mellan statisk och dynamisk belastning.
- Dimensionera en enkel konstruktionsdetalj mot en given belastning med hjälp av tillåten spänning och säkerhetsfaktor.
- Bedöma beräkningsresultats rimlighet med överslagsräkning och enhetskontroll.

### Laster och belastningsfall
### Säkerhetsfaktor och dimensioneringsprocessen
### Rimlighetsbedömning

## Sammanfattning

## Begrepp

---

# Kapitel 7 · Mätteknik och dataanalys

## 7.1 Mätning och mätinstrument
- Använda SI-systemets storheter, enheter och prefix samt genomföra enhetsomvandlingar.
- Välja lämpligt mätinstrument för en given mätuppgift och använda det korrekt.
- Skilja mellan systematiska och slumpmässiga mätfel samt ange mätvärden med rimligt antal värdesiffror.

### SI-systemet
### Mäta med rätt instrument
### Mätosäkerhet

## 7.2 Datainsamling och dataanalys
- Planera och genomföra en mätserie med strukturerad dokumentation, manuellt eller med digital datainsamling.
- Sammanställa mätdata i tabeller och diagram samt beräkna medelvärde och spridning.
- Tolka samband i mätdata, anpassa en enkel modell till data och dra slutsatser med hänsyn till mätosäkerheten.

### Planera och genomföra mätningar
### Sammanställa mätdata
### Tolka mätdata

## Sammanfattning

## Begrepp

---

# Kapitel 8 · Modellering och simulering

## 8.1 Modeller och digital modellering
- Förklara vad en modell är, varför modeller används och vilka begränsningar de har.
- Skilja mellan fysiska, matematiska och digitala modeller och välja modelltyp för ett givet syfte.
- Bygga en enkel digital modell av ett tekniskt förlopp i kalkylprogram eller Python.

### Modellbegreppet
### Välja modelltyp
### Bygga en digital modell

## 8.2 Simulering och verifiering
- Förklara vad simulering är och när simulering är att föredra framför fysisk provning.
- Genomföra en enkel simulering, variera parametrar och tolka resultatet.
- Förklara skillnaden mellan verifiering och validering samt jämföra modellresultat med mätningar.

### Simuleringens princip
### Genomföra en simulering
### Verifiering och validering

## Sammanfattning

## Begrepp

---

# Kapitel 9 · IT-system

## 9.1 IT-systemets delar
- Beskriva ett IT-systems uppbyggnad med hårdvara, mjukvara, data, nätverk och användare samt ge exempel på IT-systems roll i teknikutveckling.

## 9.2 Datorer
- Beskriva datorns huvuddelar och förklara hur de samverkar när ett program körs.
- Förklara hur tal, text och bilder representeras binärt.

### Datorns uppbyggnad
### Digital representation

## 9.3 Nätverk och internet
- Beskriva hur lokala nätverk är uppbyggda och hur data tar sig mellan enheter.
- Förklara hur internet fungerar med IP-adresser, DNS och paketförmedling.

### Nätverkets delar
### Så fungerar internet

## 9.4 Digitalisering
- Förklara digitaliseringens betydelse för produktion, kommunikation och människans livsmiljö.
- Beskriva hur uppkopplade enheter och molntjänster används i tekniska system och produktion.

### Digitaliseringens betydelse
### Uppkopplade system

## Sammanfattning

## Begrepp

---

# Kapitel 10 · Programmering

## 10.1 Grunderna i Python
- Skriva, köra och felsöka ett enkelt Python-program med utskrift och inmatning.
- Använda variabler och grundläggande datatyper för att utföra beräkningar i program.

### Första programmet
### Variabler och datatyper

## 10.2 Styra programflödet
- Skriva program som fattar beslut med villkorssatser och logiska uttryck.
- Använda for- och while-loopar för att upprepa beräkningar i program.
- Använda listor för att lagra och bearbeta data i program.

### Villkorssatser
### For- och while-loopar
### Listor

## 10.3 Funktioner och problemlösning
- Skriva och använda funktioner med parametrar och returvärden för att strukturera programkod.
- Bryta ned ett tekniskt problem i delsteg och implementera lösningen som ett strukturerat Python-program.
- Testa ett program systematiskt samt lokalisera och rätta fel i programkod.

### Funktioner
### Från problem till program
### Testa och felsöka

## Sammanfattning

## Begrepp

---

# Kapitel 11 · Projekt och entreprenörskap

## 11.1 Projektarbete
- Förklara vad som kännetecknar ett projekt samt beskriva vanliga faser och roller i tekniska projekt.

## 11.2 Projektplanering
- Upprätta en projektplan med mål, aktiviteter, tidsplan och ansvarsfördelning.
- Identifiera risker i ett projekt och planera förebyggande åtgärder.

### Projektplan
### Projektrisker

## 11.3 Entreprenörskap
- Förklara entreprenörskapets roll i teknikutveckling och vilka villkor som påverkar vägen från idé till produkt på en marknad.
- Beskriva en affärsmodell för en teknisk produkt eller tjänst med kundnytta, kostnader och intäkter.

### Entreprenörskapets villkor
### Affärsmodell

## 11.4 Genomförande och utvärdering
- Genomföra ett tekniskt projekt enligt plan med möten, dokumentation och uppföljning av tid och resultat.
- Utvärdera ett projekts resultat och arbetsprocess samt presentera projektet för en mottagare.

### Arbeta i projekt
### Utvärdera och presentera

## Sammanfattning

## Begrepp

---

# Kapitel 12 · Kvalitet, risk och arbetsmiljö

## 12.1 Kvalitet
- Förklara begreppet kvalitet och beskriva hur systematiskt kvalitetsarbete med ständiga förbättringar bedrivs.
- Kontrollmäta en detalj mot ställda krav och avgöra om den ska godkännas.

### Kvalitet och kvalitetsarbete
### Kvalitetskontroll

## 12.2 Risk, arbetsmiljö och miljösäkring
- Genomföra en riskanalys med bedömning av sannolikhet och konsekvens samt föreslå riskreducerande åtgärder.
- Beskriva hur systematiskt arbetsmiljöarbete bedrivs och identifiera arbetsmiljörisker i en teknisk miljö.
- Förklara hur miljösäkring bedrivs och hur miljökrav påverkar tekniskt utvecklings- och produktionsarbete.

### Genomföra riskanalys
### Systematiskt arbetsmiljöarbete
### Miljösäkring

## Sammanfattning

## Begrepp

---

# Kapitel 13 · Teknik, människa och samhälle

## 13.1 Teknik och samhälle
- Analysera hur teknik förändrar samhället och hur samhällets behov och värderingar styr teknikutvecklingen.
- Beskriva teknikerns roll och ansvar i utvecklingen av ett hållbart samhälle.

### Teknikens växelverkan med samhället
### Teknikerns roll

## 13.2 Etik, normer och genus
- Identifiera etiska frågor i teknikutveckling och värdera tekniska lösningar utifrån etiska aspekter.
- Förklara hur normer och genusstrukturer påverkar teknikens utformning, användning och tillgänglighet.
- Granska en teknisk lösning ur ett norm- och tillgänglighetsperspektiv och föreslå förbättringar.

### Etik i teknikutveckling
### Normer i tekniken
### Normkritisk granskning

## 13.3 Hållbar utveckling
- Förklara hållbar utveckling ur miljömässigt, ekonomiskt och socialt perspektiv och använda perspektiven vid värdering av tekniska lösningar.
- Förklara cirkulär ekonomi och nya affärsmodeller samt hur de förändrar teknikutveckling och produktion.

### Hållbarhet som konstruktionskrav
### Cirkulär ekonomi

## 13.4 Framtidens teknik
- Beskriva möjligheter och risker med framtidens teknik och värdera teknikens roll i att möta samhällsutmaningar.

## Sammanfattning

## Begrepp

---

# Produktionsstatus

För varje avsnitt registreras status i respektive fils frontmatter:

- Ej påbörjad
- Under utveckling
- Färdig första version
- Fackgranskad
- Språkgranskad
- Klar

Detta dokument anger **målskelettet** — vilka kapitel och avsnitt, med vilka delavsnitt och lärandemål, som ska finnas. Det faktiska produktionsläget genereras automatiskt av valideringsskriptet i produktionsarkitekturen (se 12-produktionsarkitektur.md, "Kvalitetskontroller och kursplanetäckning") utifrån statusfältet i varje avsnittsfil. De två ska alltid stämma överens i innehåll (samma kapitel/avsnitt/delavsnitt/lärandemål); det är bara *var det faktiska läget avläses* som skiljer sig.
