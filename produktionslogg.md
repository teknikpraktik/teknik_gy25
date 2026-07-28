# Produktionslogg

Löpande logg över färdigställda lärandemål (första version och uppåt).
Kvalitetsbedömningen görs mot referensimplementationen 1.1 (09-kvalitetssakring.md,
"Helhetsbedömning"; tidigare kallad Golden Master 1.1.1, se revisionen 2026-07-22
nedan). Ett avsnitt som bedöms "Under referensimplementationen" får inte
betraktas som färdig första version. "Överträffar referensimplementationen" ska
motiveras och eventuell ny standard lyftas för redaktionellt beslut. Loggen
ingår inte i bokexporten (export läser endast content/).

---

# 2026-07-28 — Kapitel 10 färdigt i första version

Kapitel 10 (Programmering) är producerat, ett avsnitt per commit, med
sammanfattning, begreppslista och facit. Samtliga tre avsnitt har status
`fardig-forsta-version`. Kapitlet omfattar cirka 6 200 ord, 3
bildplatshållare, 18 kodblock, 44 instuderingsfrågor, 16 övningar och 20
begrepp.

**Tre beslut av projektägaren före skrivandet.**

*Kodblock blev ett andra undantag från regeln om ren löptext.* 03 förbjöd
utbrutna exempel oavsett stofftyp, vilket gör ett programmeringskapitel
omöjligt att skriva: i Python är indraget syntax, och kod skriven som prosa
upphör att vara kod. Undantaget är infört i 03 och speglat i CLAUDE.md, snävt
hållet till körbar programkod och med kravet att prosan förklarar koden före
och efter blocket. `scripts/validate.mjs` undantog redan kodblock från
tankstreckskontrollen, så verktygen förutsatte detta.

*Röd tråd valdes bort.* Till skillnad från kapitel 5, 6, 8 och 9 har kapitel 10
inga genomgående exempel utan fristående småexempel per avsnitt, enligt
projektägarens beslut. Avsnitt 10.3 knyter ändå an till balkens mätserie från
7.2, eftersom lärandemålet kräver att programmet bearbetar mätdata.

*AI-stödd programmering togs med som eget inslag*, vilket krävde ett fjärde
delavsnitt i 10.3 i 06: "Att granska kod du inte skrivit själv". Innehållet är
hållet inom n1-07, skapande och strukturering av programkod, och formulerat som
en granskningsfärdighet som gäller all kod man inte skrivit själv, oavsett om
den kommer från ett bibliotek, en kollega, en webbplats eller ett AI-verktyg.
Därmed hamnar det inte utanför kursplanen.

**Två termkollisioner upptäckta av validate och lösta.** *Iteration* har
huvudställe i 3.1 och betyder där ett varv i utvecklingsarbetet, vilket inte är
ett loopvarv. Kapitel 10 säger därför varv. *Funktion* ägs av 2.1 i betydelsen
vad en lösning ska göra, och *parameter* av 8.1 i betydelsen ett tal i en
modell. Båda är oundgängliga programmeringstermer, så huvudställena skiljs åt i
metadatan (`funktion (programmering)`, `parameter (programmering)`) och 10.3
varnar eleven för dubbelbetydelsen vid introduktionen. Samtliga tre termval är
införda i termlista.md.

**Koden är verifierad för hand, inte körd.** Python är inte installerat i
utvecklingsmiljön (bara Windows Store-stubben), vilket är värt att veta inför
kommande revideringar av kapitlet. Två konsekvenser drogs av det. Dels valdes
värdena i while-exemplet så att svaret inte avgörs av flyttalsavrundning:
starttemperaturen är 21,5 och inte 21,0, eftersom 21,0 med 0,3 grader per varv
landar exakt på tröskeln 15,0. Samma justering gjordes i övning 3, där de
ursprungliga sänkningarna 0,5 och 0,1 grader per timme båda landade exakt på
gränsen. Dels ändrade kontrollräkningen texten i 10.3: delvärdenas spridning
blir 0,06 och inte 0,030 som först skrevs, och med det ursprungliga
tiondelskriteriet hade programmet dragit motsatt slutsats om linjäriteten.
Gränsen är satt till en femtedel, och avsnittet förklarar nu varför
differenser mellan närliggande mätpunkter förstorar avläsningsfelet.

**Facit.** Samtliga 44 instuderingsfrågor är besvarade. Sju övningar har
bestämda svar och är genomräknade, medan nio är registrerade i `utanSvar`,
eftersom de bygger på elevens eget program, eget problemval eller arbete i par.

**Kvar att göra:** kapitelgranskning i en egen genomläsning. Kapitel 3, 4, 5, 8,
9 och 10 väntar nu alla på granskning, och kön växer fortare än den betas av.

---

# 2026-07-28 — Kapitel 9 färdigt i första version

Kapitel 9 (IT-system) är producerat, ett avsnitt per commit, med
sammanfattning, begreppslista och facit. Samtliga fyra avsnitt har status
`fardig-forsta-version`. Kapitlet omfattar cirka 7 000 ord, 10
bildplatshållare, 53 instuderingsfrågor, 19 övningar och 25 begrepp.

**Två förberedande beslut.** 03 saknade skrivna avgränsningar för kapitel 9, och
fyra gränser skrevs därför in före skrivandet: mot kapitel 1, 10, 12 och 13.
Gränsen mot kapitel 13 fastställdes av projektägaren så att kapitel 9 äger
digitaliseringens faktiska verkan på produktion, kommunikation och livsmiljö,
medan värderingen ligger kvar i 13. Utan den fördelningen hade halva n2-11
fallit mellan stolarna, vilket 07 varnar för i observation 4. Facitraden lades
till i 06 på samma sätt som för kapitel 8.

**Krocken med det låsta kapitel 1 löstes utan att röra kapitel 1.** Avsnitt 1.2
äger redan begreppen digitalisering, automation, transistor, integrerad krets
och artificiell intelligens, mönstret att informationen lämnar sin fysiska
bärare, samt Coop-fallet 2021. Kapitel 9 återanvänder begreppen via
`concepts_used` och väljer medvetet en annan vinkel i 9.4: vad som händer med
systemets anatomi när giltigheten flyttar från ett papper till en databas.
Coop-fallet nämns inte, och det generella resonemanget om delade
molnleverantörer skrivs utan namngivet exempel.

**Röd tråd.** Kollektivtrafikens biljettsystem bär hela kapitlet. Systemets fem
delar i 9.1, telefonen och fordonsdatorn som datorer i 9.2, bussens lokala nät
och biljettköpets väg genom flera operatörers routrar i 9.3, och övergången
från papperskort till app i 9.4.

**Ett uppställt räkneexempel** i 9.2 enligt kapitel 6 som förlaga: omvandlingen
mellan 25 och 11001 i båda riktningarna med kontrollräkning, samt en
tolvmegapixelbilds 36 megabyte obehandlad.

**Facit.** Samtliga 53 instuderingsfrågor är besvarade. Fem övningar har
bestämda svar, medan 14 är registrerade i `utanSvar`, eftersom de bygger på
elevens eget system, egen utrustning eller egna mätningar. Andelen är hög men
följer av kapitlets karaktär: övningarna är undersökande snarare än räknande.

**Kvar att göra:** kapitelgranskning i en egen genomläsning. Kapitel 3, 4, 5, 8
och 9 väntar nu alla på granskning.

---

# 2026-07-28 — Kapitel 8 färdigt i första version

Kapitel 8 (Modellering och simulering) är producerat, ett avsnitt per commit,
med sammanfattning, begreppslista och facit. Båda avsnitten har status
`fardig-forsta-version`. Kapitlet omfattar cirka 4 100 ord, 6 bildplatshållare,
27 instuderingsfrågor, 10 övningar och 12 begrepp.

**Två strukturbeslut fattades av projektägaren före skrivandet.** Facitraden
lades till för kapitel 8 i 06-bokstruktur.md, i linje med kapitel 1 till 7.
Lärandemålet om digital modellbyggnad i 8.1 skrevs om från "kalkylprogram eller
Python" till "ett kalkylprogram", eftersom kapitel 10 ligger efter kapitel 8 och
ett kapitel inte får förutsätta det som kommer senare i bokens ordningslogik.
Båda ändringarna committades separat från avsnittsarbetet.

**Röd tråd.** Huset som svalnar vid ett strömavbrott bär hela kapitlet, med
stormen Gudrun i januari 2005 som verkligt ankare. Samma hus förenklas till en
modell i 8.1, byggs som kalkylark med tidssteg, körs i fyra parametervarianter
i 8.2, verifieras mot handräkning och halverat tidssteg, och valideras mot en
uppmätt avsvalning.

**Gränserna hölls.** Prototypen som steg i utvecklingsarbetet är kvar i 3.5 och
återanvänds här bara som exempel på en fysisk modell. CAD-modellens
framställning är kvar i 4.4. Mätserien, den kontrollerade variabeln,
mätosäkerheten och extrapolationen återanvänds från kapitel 7 utan att läras ut
på nytt. Testplan och godkäntgräns skrivs inte, eftersom de ägs av kapitel 3;
modellens valideringsgräns formuleras i stället utan de begreppen.

**Kvantitativa ankare, genomräknade.** Husets parametrar är värmegenomgången
0,15 kW/°C och värmekapaciteten 13 kWh/°C, vilket ger tidskonstanten cirka
87 timmar. Första timmens avsvalning är uppställd i löptexten (3,9 kW, 3,9 kWh,
0,3 grader) med enhetskontroll och rimlighetsbedömning. Samtliga timtal i
texten, övningarna och facit är framräknade ur samma modell.

**Facit.** Alla 27 instuderingsfrågor och 7 av 10 övningar är besvarade. Tre
övningar är registrerade i `utanSvar`, eftersom de bygger på elevens eget val av
förlopp, egen modell eller egna mätningar.

**Kvar att göra:** kapitelgranskning i en egen genomläsning, och därefter beslut
om kapitlet ska låsas. Kapitel 3, 4, 5 och 8 väntar nu alla på granskning.

---

# 2026-07-27 — Kapitel 5 färdigt i första version

Kapitel 5 (Material och deras egenskaper) är producerat, ett avsnitt per commit,
med sammanfattning, begreppslista och facit. Samtliga fem avsnitt har status
`fardig-forsta-version`. Kapitlet omfattar cirka 11 300 ord, 12
bildplatshållare, 71 instuderingsfrågor, 26 övningar och 28 begrepp.

**Gränsen mot kapitel 6 hölls.** Inget av kapitel 6:s begrepp införs i kapitel 5.
Avsnitt 5.2 behandlar hållfasthet, styvhet, hårdhet, seghet och utmattning
kvalitativt och jämförande, och nämner elasticitetsmodul och sträckgräns endast
som databladets storheter med sin praktiska innebörd. Dessa två står i 5.2:s
`concepts_used` utan shortcode, eftersom en länk framåt skulle peka mot ett
kapitel eleven ännu inte läst. Kapitel 6 är orört och fortfarande låst.

**Röd tråd.** Cykelramen i stål, aluminium och kolfiber bär hela kapitlet: tre
materialgrupper i 5.1, rörens grovlek som följd av styvheten i 5.2, tre olika
rätta svar beroende på användare i 5.3, tre tillverkningskedjor i 5.4 och tre
olika slut i återvinningen i 5.5.

**Verkliga ankare, kontrollerade mot källa.** Elektrolysens omkring fjorton
kilowattimmar per kilo aluminium och omsmältningens fem procent av den energin,
kolfiberpyrolysen vid 450 till 600 grader med sjuttio till sjuttiofem procents
kvarvarande hållfasthet, RoHS-bytet till blyfri lödning 2006 som exempel på
substitution, samt Sara kulturhus i Skellefteå från 2021 som exempel på
korslimmat trä i flervåningshus.

**Två uppställda beräkningar** bär de kvantitativa inslagen: hållfasthet delad med
densitet för de tre ramarna i 5.2, och styckkostnaden med verktygskostnaden
utslagen på antalet med framräknad brytpunkt i 5.4.

**Facit.** Samtliga 71 instuderingsfrågor är besvarade. Två övningar har bestämda
svar och är genomräknade (5.2:3 specifik hållfasthet och 5.4:2 styckkostnad med
brytpunkt), medan 24 är registrerade i `utanSvar`, eftersom de bygger på elevens
egna föremål, mätningar eller materialval.

**Kvar att göra:** kapitelgranskning i en egen genomläsning, och därefter beslut
om kapitlet ska låsas. Kapitel 3, 4 och 5 väntar nu alla på granskning.

---

# 2026-07-27 — Kapitel 5 förberett: krocken med det låsta kapitel 6 löst

Kapitel 5 (Material och deras egenskaper) tas i produktion. Tre beslut fattades
av projektägaren i förberedelsesteget.

**Gränsen mot det låsta kapitel 6.** Avsnitt 5.2 ska behandla hållfasthet och
styvhet och tolka materialdata ur datablad, medan 6.4 redan äger spänning,
töjning, elasticitetsmodul, sträckgräns samt dragprovet. Eftersom kapitel 5 läses
före kapitel 6 får det varken införa begreppen på nytt eller luta sig mot dem.
Beslutet är att 5.2 behandlar egenskaperna **kvalitativt och jämförande** med
egna begrepp, och att databladets storheter får nämnas vid namn med sin
praktiska innebörd medan definitioner, formler och dragprov ligger kvar i 6.4.
Kapitel 6 förblir låst och orört.

**Röd tråd:** cykelramen i stål, aluminium och kolfiber, samma detalj i tre
materialgrupper genom hela kapitlet.

**03 uppdaterat om tillverkning.** Meningen om att tillverkning inte är eget
bärande stoff stämde inte längre sedan 06 fått avsnitt 5.4, och den hänvisade
till den avvecklade redaktionella specifikationen. Den är omskriven: tillverkning
har sitt hem i 5.4, övriga kapitel rör vid den utan att lära ut den, och
tillverkningsteknik i egen rätt ingår inte i boken.

**Två kapitelgränser skrevs in i 03**, som därmed har tretton skrivna gränser: 5
mot 6 enligt ovan, och 5 mot 13, där 5.5 äger materialets miljöpåverkan och
återvinningsformerna medan hållbar utveckling som begrepp och cirkulär ekonomi
ägs av 13.3.

---

# 2026-07-27 — Kapitel 4 färdigt i första version

Kapitel 4 (Skiss, ritteknik och CAD) är producerat, ett avsnitt per commit, med
sammanfattning, begreppslista och facit. Samtliga sex avsnitt har status
`fardig-forsta-version`. Kapitlet omfattar cirka 12 400 ord, 13
bildplatshållare, 82 instuderingsfrågor, 30 övningar och 22 begrepp.

**Röd tråd.** Mobilhållaren följer kapitlet från idéskiss till utlämnad
handling: fyra idéskisser och en volymskiss i 4.1, tre vyer i 4.2, måttsättning
och toleranser i 4.3, parametrisk modell och sammanställning i 4.4, genererad
ritning och revidering i 4.5, samt fyra handlingar för fyra mottagare i 4.6.

**Verkliga ankare, kontrollerade mot källa.** Första vinkelns projektion med
vyn ovanifrån under huvudvyn och vyn från vänster till höger, samt
projektionssymbolen med de koncentriska cirklarna till höger om konen.
Legoklossens knopp på 4,8 millimeter och klosshöjden 9,6 millimeter med
tillverkningstolerans på hundradels millimeter, i 4.3. IKEA:s textlösa
monteringsanvisningar som exempel på mottagaranpassning i 4.6. CAD-avsnittet är
skrivet programneutralt med en kort orientering om vanliga program.

**Facit.** Kapitlet fick facit som tredje kapitelavslutning, och raden
`## Facit` lades till i 06. Samtliga 82 instuderingsfrågor är besvarade. Två
övningar har bestämda svar och är genomräknade (4.3:2 gränsmått och passning,
4.3:3 felstapling i kedja mot referenskant), medan 28 är registrerade i
`utanSvar`. Andelen öppna övningar är hög eftersom kapitlets övningar i huvudsak
är rit-, modellerings- och redovisningsuppgifter vars resultat är elevens eget
alster.

**Kvar att göra:** kapitelgranskning i en egen genomläsning, och därefter beslut
om kapitlet ska låsas.

---

# 2026-07-27 — Kapitel 4 förberett: strukturfel i 06 rättat och två gränser skrivna

Kapitel 4 (Skiss, ritteknik och CAD) tas i produktion. Tre beslut fattades av
projektägaren i förberedelsesteget.

**Strukturfel i 06 rättat.** Avsnitt 4.6 bar två delavsnittsrader som blivit
kvar från strukturen före 4.6 lades till (`### Ritning ur modell` och
`### Presentera teknik`), medan 4.5 stod utan delavsnitt. Parsern läste båda
raderna som delavsnitt i 4.6. Raderna är strukna, och 4.5 har i stället fått två
egna delavsnitt: `### Vyer ur modellen` och `### Revidering och gällande
ritning`. Revideringsfrågan, alltså vilken handling som styr tillverkningen och
hur en ändring i modellen följs upp i ritningen, får därmed ett hem i boken.

**Röd tråd genom kapitlet**, samma upplägg som i kapitel 3. Ett enkelt
vardagsföremål skissas i 4.1, ritas i tre vyer i 4.2, måttsätts i 4.3,
modelleras i CAD i 4.4, får sin ritning ur modellen i 4.5 och dokumenteras för
en mottagare i 4.6. Kapitlets moment är stegen i en och samma arbetsgång, så
tråden följer stoffet. Övningarna hålls fristående enligt 03.

**CAD skrivs programneutralt.** Arbetsgång och funktioner beskrivs med termer
som fungerar i alla parametriska program, kompletterat med en kort orientering
om de program som faktiskt används i skolan. Skälet är att kapitlet annars
åldras snabbt och blir fel för skolor med andra licenser.

**Två kapitelgränser skrevs in i 03**, som därmed har elva skrivna gränser: 4
mot 11 (kommunikationshantverket mot projektets redovisning) och 4 mot 5 och 6
(framställningen mot materialval och dimensionering). Den andra befäster
skrivanvisningen att kapitel 4:s exempel varken förutsätter hållfasthet eller
materialkunskap.

---

# 2026-07-27 — Kapitel 3 färdigt i första version

Kapitel 3 (Teknikutvecklingsprocessen) är producerat i ett svep, ett avsnitt per
commit, med sammanfattning, begreppslista och facit. Samtliga sju avsnitt har
status `fardig-forsta-version`. Kapitlet omfattar cirka 15 600 ord, 15
bildplatshållare, 81 instuderingsfrågor, 36 övningar och 22 begrepp.

**Röd tråd.** Hela kapitlet bärs av robotgräsklipparens utveckling, enligt
projektägarens beslut i förberedelsesteget. Trådens fakta är kontrollerade mot
källa: Husqvarnas konstruktörsgrupp 1992, Solar Mower 1995 som världens första
robotgräsklippare med 50 kvadratmeters kapacitet, den batteridrivna modellen
1998 med laddstation och 500 kvadratmeter, säkerhetsstandardens provkroppar med
den knästående barnfoten tillagd 2020, igelkottstestet från Oxford och Aalborg
2024 med 3D-utskrivna provkroppar, samt satellitpositioneringen med virtuella
gränser 2021 som nådde konsumentmodellerna 2023. I 3.7 tillkommer EU:s
ekodesignkrav från mars 2021 (reservdelar i sju till tio år, leverans inom
femton arbetsdagar, byte med vanliga verktyg) och batteriförordningens krav på
användarutbytbara batterier från februari 2027.

**Facit.** Kapitlet fick en tredje kapitelavslutning, och raden `## Facit` lades
till i 06. Sju övningar har bestämda svar och redovisas i facit, medan 29 är
registrerade i `utanSvar`. Andelen öppna övningar är hög för att kapitlets stoff
är metod: en idésession, en egen kravspecifikation och en egen testplan har inga
bestämda svar. Samtliga 81 instuderingsfrågor är besvarade. De två räknande
övningarna (3.4:2 och 3.4:3, viktade beslutsmatriser) är genomräknade och
kontrollerade, liksom exemplet i löptexten i 3.4.

**Kvar att göra:** kapitelgranskning i en egen genomläsning, och därefter beslut
om kapitlet ska låsas.

---

# 2026-07-27 — Kapitel 3 påbörjat: fyra avgränsningar och ett nytt lärandemål

Kapitel 3 (Teknikutvecklingsprocessen) tas i produktion. Skelettet var redan
strukturellt migrerat, så kapitlet skrivs direkt under den nya standarden. Tre
beslut fattades av projektägaren i förberedelsesteget.

**Röd tråd genom kapitlet.** Kapitel 3 bärs av ett genomgående huvudexempel i
stället för ett eget exempel per avsnitt, eftersom kapitlets stoff är en
sammanhängande process. Övningarna hålls ändå fristående enligt 03,
"Kapitelövergripande uppgifter": all information en övning behöver står i
uppgiften, aldrig som hänvisning till ett tidigare avsnitt.

**3.3 Idégenerering fick ett andra lärandemål** ("Förklara varför idégenerering
skiljer på att skapa och att värdera idéer och genomföra en idésession efter den
principen"), infört i 06-bokstruktur.md och synkat i avsnittsfilens frontmatter.
Skälet är att avsnittet med ett enda mål blev tunt mot grannavsnitten, som har
två till tre. Inga delavsnittsrader lades till; avsnittet disponeras med fria
underrubriker i löptexten.

**Fyra kapitelgränser skrevs in i 03-bokens-arkitektur.md**, som därmed har nio
skrivna gränser: 3 mot 5 (produktens livscykel mot materialets miljöpåverkan och
återvinningsformerna), 3 mot 11 (processen som metod mot arbetsformen), 3 mot 12
(test under utveckling mot kvalitetsarbete i drift och produktion) samt 3 mot 8
och 13 i utvärderingen (verifiering/validering tillhör 8, hållbar utveckling som
begrepp och cirkulär ekonomi tillhör 13).

Kursplanetäckningen är oförändrad: kapitel 3 är primärt hem för n1-01 och n1-08
och berör n1-11 och n2-01. Ändringarna committades separat från
avsnittsproduktionen.

---

# 2026-07-26 — Kapitel 6 låst

Kapitel 6 (Mekanik och konstruktion) är fryst och ligger i `lastaKapitel`
(`scripts/migreringsstatus.mjs`). Vakten är verifierad: en provocerad ändring i
`09-facit.md` gav aktivt fel med HEAD-avstämning, och filen återställdes.

Kapitlet är genomarbetat enligt den nya modellen: trettiosex övningar med namn i
fetstil, sex autentiska övningar med elevens egen indata, instuderingsfrågor och
övningar inom 03:s spann i samtliga sex avsnitt, samtliga metakommentarer
åtgärdade, tre svällande passager komprimerade, och två faktafel rättade i
kapitelgranskningen (gångtrafiklasten i 6.6 och vältgränsen i 6.3, båda
dokumenterade i faktagranskning.md).

**Facit är verifierat i två led.** Samtliga trettio räkneövningar är genomräknade
steg för steg och redovisade, och de sex autentiska övningarna är upptagna i
`utanSvar` eftersom elevens egna mätvärden är indata. Utöver det har
projektägaren gjort ett stickprov av de fem uppgifter som har flest beräkningsled.
Facittäckningen är dessutom maskinellt kontrollerad: 93 av 93 poster har antingen
svar eller post i `utanSvar`, som hårt krav från status `fardig-forsta-version`.

Kapitel 6 är därmed bokens referenskapitel för **procedur- och beräkningsstoff**,
på samma sätt som kapitel 1 är referens för beskrivande stoff. Facitfilen ligger
på `fardig-forsta-version` och är inte fackgranskad; låset omfattar även den.

---

# 2026-07-26 — Projektuppgiftsfilerna raderade, migreringsskulden noll

Samtliga elva `NN-projektuppgifter.md` är raderade ur `content/` (kapitel 2, 3, 4,
5, 7, 8, 9, 10, 11, 12 och 13). De var utfasade sedan 2026-07-22 och stod aldrig i
06-bokstruktur.md, vilket är precis vad validate rapporterade om dem. 06 krävde
därför ingen ändring.

Tio av filerna var tomma skelett på 49 ord utan en enda numrerad uppgift. Den
elfte, `content/02-att-losa-tekniska-problem/05-projektuppgifter.md`, innehöll
fyra skrivna uppgifter på 327 ord. **Innehållet är bevarat** i det interna
arbetsdokumentet `uppskjutna-projektuppgifter.md` i projektroten, som inte ingår
i bokexporten och inte publiceras på webbplatsen.

Skuldkategorin `PROJEKTUPPGIFTER` är borttagen ur `scripts/migreringsstatus.mjs`.
**Migreringsskulden är därmed 0**, och siffran är åter informativ: en post som
dyker upp där är verklig skuld, inte bakgrundsbrus. Validate skriver numera
"ingen migreringsskuld" i stället för att hänvisa till en tom lista.

Utfall: markdownfiler 87 → 76, kapitelavslutningar 38 → 27, migreringsskuld
11 → 0, webbsidor 106 → 95. Noll aktiva fel, fyra varningar, oförändrat.

**Beslutet om var kapitelövergripande uppgifter hör hemma är fortfarande
uppskjutet.** Boken har inga helkapitelövningar och inga projektuppgiftsavsnitt,
och varje avsnitts Övningar tränar bara det egna avsnittets stoff. Var de större,
integrerande uppgifterna ska ligga avgörs separat; projektägaren bygger dem i ett
senare, fristående projekt. Raderingen är en städning av skräpdata, inte ett svar
på den frågan.

---

# 2026-07-26 — Två uppskjutna frågor efter införandet från gamla specen

**Projektuppgifterna och lärarmaterialet är en uppskjuten fråga.** Ambitionen att
kapitlens större, integrerande uppgifter ska ligga i ett separat lärarmaterial
utanför boken är utlyft ur bokprojektet (commit `2bd421f`, se posten nedan).
Projektägaren bygger projektuppgifterna i ett senare, fristående projekt, och
frågan avgörs separat. Till samma uppskjutna beslut hör
`content/02-att-losa-tekniska-problem/05-projektuppgifter.md`, som innehåller
fyra skrivna uppgifter och därför inte raderas tillsammans med de tio tomma
skelettfilerna. Ingenting i den frågan rörs tills den avgörs.

Precisering av läget: i `2bd421f` ersattes formuleringarna i 03, 12, 13 och
CLAUDE.md av att kapitelövergripande uppgifter inte ingår i bokprojektet. Det
finns alltså i dag ingen formulering kvar som motiverar frånvaron av
helkapitelövningar med att uppgifterna ligger i ett lärarmaterial. Kvarvarande
omnämnanden av lärarmaterial i 03, 09, 12 och 13 gäller bedömningsstöd och
betygsunderlag i en separat privat källa, vilket är en annan fråga och inte
berörs av det uppskjutna beslutet.

**Kursplanematrisen tryckt i boken är en öppen fråga.** Den gamla specifikationen
föreslog att innehållsmatrisen skulle ligga synligt i boken och kunna användas i
säljmaterial. Trygghetskravet är infört i 01 och 07 (commit `2816eef`), men
förslaget att trycka matrisen är **inte** infört. Det är ett strukturbeslut av
samma slag som facit: det kräver plats i 06-bokstruktur.md, en egen `type`, en
väg genom skeleton, validate och båda exporterna, samt ett svar på om matrisen
ska visas per kapitel eller samlat. Ingenting är byggt. Frågan avgörs separat.

---

# 2026-07-26 — Lärarmaterialet utgår ur bokprojektet

Beslutet från 2026-07-24, att kapitlens större och integrerande uppgifter skulle
ligga i ett separat lärarmaterial utanför boken, **återtas**. Projektägaren bygger
projektuppgifterna i ett senare, fristående projekt.

Konsekvens för styrdokumenten: formuleringen "ligger i ett separat lärarmaterial
utanför boken" är struken ur 03, 05, 06, 09, 12, 13, CLAUDE.md,
`scripts/bokstruktur-data.mjs` och felmeddelandet i `scripts/validate.mjs`. Den
ersätts av att kapitelövergripande uppgifter **inte ingår i bokprojektet**.

Oförändrat: boken har inga helkapitelövningar och inga projektuppgiftsavsnitt,
och varje avsnitts Övningar tränar bara det egna avsnittets stoff. Det som
ändras är var de större uppgifterna sägs ta vägen, inte vad boken innehåller.

Oförändrat är också att **bedömningsstöd och betygsunderlag** ligger i en separat
privat källa utanför repot (12, "Facit"). Det är en annan sak än
projektuppgifter och berörs inte av det här beslutet.

De elva kvarvarande `NN-projektuppgifter.md` raderas nu i migreringen i stället
för att flyttas. Tio av dem är tomma skelett; `02-att-losa-tekniska-problem/05-projektuppgifter.md`
innehåller fyra skrivna uppgifter och kräver därför projektägarens besked om
innehållet ska sparas undan först.

Tidigare loggposter är oförändrade. De är protokoll över vad som beslutades då.

---

# 2026-07-26 — Kapitel 1 färdigställt och låst, nio redaktionella beslut

Kapitel 1 (Teknikens grunder) är korrekturläst, godkänt och låst. Samtidigt
avgjordes en rad frågor som utredningen inför frysningen lyfte. Besluten gäller
framåt och är inte retroaktiva mot låsta kapitel.

1. **Den skarpa texten gäller framför referensimplementationen.**
   `referensimplementation-avsnitt-1-1.md` hade glidit ifrån
   `content/01-teknikens-grunder/01-vad-ar-teknik.md` på fem punkter och kunde
   därför inte längre användas som kalibrering. Synken går åt ett håll:
   referensen uppdateras mot content, aldrig tvärtom. Regeln står nu i
   referensfilens egen ingress.

2. **Referensens tidigare fråga 9 utgår ur projektet.** "Förklara med egna ord
   vad som menas med begreppen behov, teknik och teknisk lösning" fanns bara i
   referensen, inte i den skarpa texten, och förs inte in.

3. **03:s begreppsfråga läses som frågetyp, inte som obligatorisk
   formulering.** Frasen "Förklara med egna ord" förekom inte i en enda
   avsnittsfil och kontrollerades inte av validate, medan flera avsnitt hade
   fullgoda begreppsfrågor i annan form. Kravet gäller nu vad frågan ska
   efterfråga: begreppets innebörd, inte igenkänning eller tillämpning. Frågan
   får vara enkel, och en rak definitionsfråga räcker. Inskrivet i 03
   ("Instuderingsfrågor") och 09.

4. **Avsnitt 1.1 kompletterat med "Vad menas med en teknisk lösning?"** som
   fråga 2. 1.1 var bokens enda avsnitt utan en fråga som efterfrågar
   innebörden i ett centralt begrepp. Ingen befintlig fråga togs bort, och
   frågan om igenkänning står kvar eftersom den svarar mot en verklig poäng i
   texten. Avsnittet har därmed tio frågor.

5. **Kravet på hård radbrytning i begreppslistan är borttaget** ur 03 och 13.
   Kapitel 1:s lista skrevs 2026-07-24 om till blankrad mellan posterna, vilket
   satte styrdokumenten i konflikt med den godkända texten. Radavstånd och
   vertikal rytm är en formgivningsfråga och regleras inte i 03. Övriga
   formatkrav står kvar som hårda fel: fetstilt begrepp med kolon inom
   fetstilen, versal, fullständig mening med avslutande punkt, inga tankstreck,
   ingen punktmarkering. `validate.mjs` behövde inte ändras, eftersom den redan
   accepterade båda formerna.

6. **Avsnitt 1.1 omtaggat från n1-13 till s-02 och s-03.** n1-13 ("Tekniska
   framsteg som har haft betydelse för samhället") svarar mot 1.2, inte mot
   1.1. Syftesstoffet s-02 (teknikbegreppet) och s-03 (samspelet teknik,
   naturvetenskap och matematik) pekar enligt 07 ut 1.1 som huvudställe men
   saknade tagg. Båda slår nu om till täckt i primärkapitlet, och n1-13 står
   kvar som täckt via 1.2 och 1.3.

7. **Kapitel 1 migrerat till `[BILD]`.** Frontmatterfältet `figures` är tömt i
   de tre teoriavsnitten, och kapitlets elva poster är borttagna ur
   `figures/registry.yml` (44 till 33 poster). Kapitlet har tolv
   `[BILD X.Y-N]`-platshållare och noll `[[figur:]]`-shortcodes.
   **Kvarstående verktygsskuld:** validate räknar bara frontmatterfältet och
   känner inte igen `[BILD]`-platshållare, så de tre avsnitten ger var sin
   falsk varning "inga figurer". Åtgärdas när figurkontrollen migreras.

8. **Kapitel 1 låst** i `lastaKapitel` (`scripts/migreringsstatus.mjs`).
   Filerna under `content/01-teknikens-grunder/` får läsas men aldrig ändras av
   Claude Code. Vakten är verifierad: en provocerad ändring gav aktivt fel med
   HEAD-avstämning. Kapitlet läses som förlaga för struktur, ton,
   instuderingsfrågor och övningar, men dess exempel, kompressionsgrad och
   övningstyper kopieras inte rakt av — kapitel 1 är beskrivande stoff, och
   procedurkapitel följer procedurdelen i 03.

9. **Ny hård regel i CLAUDE.md: projektroten är arbetsytan.** Claude Code
   arbetar uteslutande i projektroten. Filer utanför den läses aldrig och ändras
   aldrig. Namnger en instruktion en fil som inte finns i projektet ska arbetet
   stanna och frågan ställas, aldrig en snarlik fil letas upp i en annan mapp.

Valideringsläge efter frysningen: 0 aktiva fel, 7 varningar (från 18), 11 kända
migreringsskuldposter (`NN-projektuppgifter.md` i kapitel 2–5 och 7–13).

---

# Produktionsstandard 2026-07-23 — tre regeländringar (projektägarens beslut)

Tre regler inskrivna i styrdokumenten (03-bokens-arkitektur.md, 05-forfattarmanual.md,
CLAUDE.md) och delvis i validate. Gäller Claude Codes generering och revidering framåt,
**inte retroaktivt mot låsta kapitel** (kapitel 2).

1. **Språk — kolon och semikolon.** Talstreck fortsatt förbjudet (oförändrat, 05
   "Tankstreck"). Nytt avsnitt 05 "Kolon och semikolon": kolon och semikolon används
   sparsamt, aldrig som pausmarkörer i prosa, bryt hellre meningen. Strukturella kolon
   (definitionslista, uppställning, figuretiketter `Innehåll:`/`Bildtext:`, skalor som
   2:1) är undantagna. Ingen hård lint (falska träffar på strukturella kolon); validate
   ger en **mjuk varning** vid fler än 4 semikolon i ett avsnitt (endast avsnittsfiler,
   så definitionslistor i begreppsövningar träffas inte).
2. **Instuderingsfrågor.** Spannet ändrat från 5–10 till **5–15** per avsnitt. Hård
   validate-regel tillagd (från status `fardig-forsta-version`, låsta kapitel undantas).
   Alla befintliga icke-låsta avsnitt ligger på 5–10 och passerar. Nytt innehållskrav i
   03: frågorna prioriterar teknisk karaktär (funktion, samband, beräkning, konstruktion)
   framför samhällsvetenskaplig, med undantag åt samma håll som procedurspåret för avsnitt
   vars innehåll faktiskt är teknik och samhälle (kapitel 1:s samspel teknik/naturvetenskap/
   matematik, kapitel 13). Regeln är "prioritera", inte "förbjud".
3. **Helkapitelövningar.** EN fokuserad, avgränsad helkapitelövning per kapitel (inte
   flera). Den utskrivna nivåstaplingen grund + "Bygg ut:" + "Bygg ut vidare:" utgår —
   E-till-A-progressionen ligger i uppgiftens öppenhet och betygskriteriernas kvalitetsord,
   inte i utskrivna delsteg. Storprojektet bor kvar i kapitel 11; inget nytt projektkapitel.
   Formuleringsregeln står fast (boken låter eleven visa, mäter inte). Validate ger en
   **mjuk varning** (regressionsskydd) om "Bygg ut" står kvar i en övningssektion, inte
   hårt fel eftersom befintlig text ännu inte är deflaterad.

**Öppen deflateringspost — kapitel 1:s helkapitelövningar (avslutad 2026-07-24).**
Kapitel 1:s tidigare staplade helkapitelövningar är borta. Regel 3 ovan (en fokuserad
helkapitelövning per kapitel) är dessutom upphävd av beslutet 2026-07-24 nedan:
helkapitelövningar utgår helt ur boken. Ingen deflatering behövs längre.

---

# Produktionsstandard 2026-07-24 — helkapitelövningar utgår (projektägarens beslut)

Boken innehåller **inga helkapitelövningar** och inga integrerande storuppgifter som
spänner över flera avsnitt. Beslutet ersätter regel 3 i 2026-07-23-standarden (som
krävde EN fokuserad helkapitelövning per kapitel).

- **Övningar refererar bara sitt eget avsnitt.** Varje avsnitts Övningar tränar och
  hänvisar enbart till det egna avsnittets stoff.
- **Storuppgifter flyttar ut ur boken.** Kapitlets större, integrerande och
  kapitelövergripande uppgifter (syntesprojekt, tvärgående tillämpningar, storprojekt)
  ligger i ett separat lärarmaterial utanför boken, inte i elevtexten. Storprojektet bor
  kvar som ämnesinnehåll i kapitel 11.
- **Styrdokument uppdaterade:** 03 (avsnittet "Helkapitelövningar" omdöpt till
  "Kapitelövergripande uppgifter"), 05, 09, 12, 13, CLAUDE.md samt validate-meddelandena
  i scripts/validate.mjs och kommentaren i scripts/bokstruktur-data.mjs.
- **Tillämpat:** helkapitelövningarna borttagna ur kapitel 1 (1.3), kapitel 2 (2.2) och
  kapitel 6 (6.6). Kapitel 2 låstes upp 2026-07-24 på projektägarens begäran för denna
  revidering (CLAUDE.md och `lastaKapitel` synkade, settet är tomt). I 1.3 skrevs Övningarna
  om till tre avsnittsnära uppgifter; i 2.2 ersattes helkapitelövningen "Från behov till
  vald strategi" av en avsnittsnära "Bryt ned och välj strategi" (nedbrytning + strategival
  inom 2.2, utan att dra in 2.1:s problemformulering); i 6.6 togs "Gångbron från last till
  dimension" bort (övningarna 1–5, alla dimensioneringsnära, räcker).
- **Kvarvarande migreringsskuld:** övriga skrivna kapitel bör scannas för integrerande
  storuppgifter när de revideras vidare. Ingen ny validate-flagga tillkommer (ingen regel
  kräver en helkapitelövning; "Bygg ut"-varningen står kvar som regressionsskydd).

---

# Backlog: väntande uppslag till ännu ej skrivna kapitel

Uppslag som flyttats ut ur ett skrivet kapitel men hör hemma i ett kapitel som ännu inte är producerat. Bevakas här tills målkapitlet skrivs, så att inget innehåll tappas.

- **Kapitel 13 — värdering av digitaliseringens fördelningskonsekvenser (vinnare och förlorare).** Flyttad 2026-07-22 ur kapitel 1:s projektuppgifter (forna projektuppgift 3, "Digitaliseringens vinnare och förlorare") eftersom den är värderande, inte teknikhistorisk, och hör till kapitel 13:s värderande stoff (n1-14 / n2-10, värdering utifrån bl.a. genus, etik och hållbar utveckling). Uppgiftens kärna: välj en bransch som digitaliserats (musik, foto, bank, tidningar, resebyråer, taxi …), kartlägg hur informationen lämnade sin fysiska bärare och vilka tekniska komponenter som möjliggjorde skiftet, och värdera vad som blev bättre och för vem, vad som gick förlorat och vilka yrken eller företag som försvann eller tillkom, med källor. **Koppling:** bygger vidare på 1.2:s digitaliseringsinnehåll (delavsnittet "Digitalisering, internet och AI" och mönstret att informationen frigörs från sin fysiska bärare); förutsätter att eleven läst 1.2. När kapitel 13 produceras: forma om till en värderingsuppgift i det kapitlets modell.

---

# Kapitel 1 — utkaststatus och produktionsnoteringar (2026-07-22)

Kapitel 1 är reviderat mot referensstandarden men **ännu inte färdiggranskat** (ligger inte i `migreradeKapitel`). Följande noteringar flyttades hit ur brödtexten när inline-`[UTKAST]`-markörerna togs bort (05-forfattarmanual.md, "Granskningsnotiser"):

- **1.3 Övningar** skrevs nya (avsnittet saknade tidigare övningar): fyra avsnittsnära övningar samt två helkapitelövningar (nr 5–6) som viker in kapitlets tidigare projektuppgifter. I helkapitelövningarna är grunduppgift, "Bygg ut" och "Bygg ut vidare" tänkta att motsvara stigande nivå (E/C/A). Den uttryckliga betygskopplingen hör enligt 03 hemma i lärarhandledningen, inte i elevtexten, och står därför inte i uppgiftstexten.
- **1.3/1.2 bildtexter** ([BILD]-block) är utkast till illustratörsbrief, byggda på figures/registry.yml; bör läsas igenom vid facit-/fackgranskning.
- **Begrepp (05-begrepp.md)** omvandlades från gammalt ifyllnadsformat till definitionslista (uppslagsfunktion). Definitionerna är nyskrivna, byggda på hur begreppen införs i 1.1–1.3, max ungefär en mening per begrepp; granska sakinnehållet.

Allt kapitel 1-innehåll är alltså utkast tills projektägaren läst det och kapitlet förs till `migreradeKapitel`.

---

# Kapitel 2 — utkaststatus och produktionsnoteringar (2026-07-22)

Kapitel 2 (2.1, 2.2 + avslutning) reviderat mot referensstandarden, beskrivande spår. **Ännu inte färdiggranskat** (ligger inte i `migreradeKapitel`).

Mekaniskt: rubriken "Praktiska uppgifter" → "Övningar" i 2.1 och 2.2; begrepp fetstil → kursiv vid definierande förekomst (2.1: *tekniskt problem*, *funktion*, *krav*, *begränsning*; 2.2: *delproblem*); `[[figur:ID]]` → `[BILD X.Y-N]` med Innehåll ordagrant ur figures/registry.yml (7 bilder). Inga begreppsgränsfall — alla fetade ord var registrerade begrepp. `01-vad-ar-ett-tekniskt-problem.md` och `02-att-valja-problemlosningsstrategi.md` avregistrerade ur `legacyOvningsrubrikFiler`.

Nyskrivet utkast (granska sakinnehåll):
- **Bildtexter** till alla 7 `[BILD]`-block är nyskrivna (registret saknar bildtextfält); Innehåll är däremot ordagrant ur registret.
- **Begrepp (04-begrepp.md)** omvandlat från ifyllnadsövning till definitionslista, sex begrepp, byggda på hur de införs i 1.1–2.2.
- **2.2 Övningar** fick två helkapitelövningar (nr 4–5) som viker in kapitlets fyra projektuppgifter: nr 4 "Från behov till vald strategi" (formulering → nedbrytning → strategival, viker in projektuppgift 2–4) och nr 5 "Samma behov, en annan problemformulering" (viker in projektuppgift 1, Hövding/skal). Grund/"Bygg ut"/"Bygg ut vidare" motsvarar stigande nivå; betygskopplingen hör till lärarhandledningen, inte elevtexten.

Den gamla `05-projektuppgifter.md` ligger kvar som migreringsskuld (raderas vid kapitlets finalisering, som för kapitel 1).

---

# Kapitel 6 — revidering klar (mekanik + begrepp + helkapitelövning), avvaktar granskning (2026-07-22, uppdaterad 2026-07-23)

Kapitel 6 (procedurspår) reviderat mekaniskt: rubrik "Praktiska uppgifter" → "Övningar" i 6.1–6.6, in-texthänvisningen "en av de praktiska uppgifterna" i 6.1 ändrad till "en av övningarna", alla 23 `[[figur:ID]]` → `[BILD X.Y-N]` med Innehåll ordagrant ur registret och nyskrivna bildtexter. 6.1–6.6 avregistrerade ur `legacyOvningsrubrikFiler`.

**06-synk (lutande plan):** 6.1:s delavsnitt "Krafter på ett lutande plan" fanns i filen men saknades i 06-bokstruktur.md. Det är ett avsett, fullständigt delavsnitt (egen figur, flera stycken, parallellt med de andra), så det lades till i 06 mellan Kraftresultanter och Friläggning.

**Begreppsdelen genomförd (2026-07-23, kurerad lista):** omfånget avgjordes till den
kurerade listan — de 30 begrepp som redan stod i begreppslistans `ordlista`
(08-begrepp.md), inte alla ca 60 registrerade. Principen markerat = listat är nu
uppfylld: varje avsnitts `concepts_introduced` är trimmat till snittet med ordlistan,
och unionen över 6.1–6.6 är exakt de 30 (9 + 2 + 4 + 10 + 3 + 2).

- **Begreppsmarkering (fetstil → kursiv) i 6.1–6.6:** de 30 listade begreppen kursiveras
  vid sitt huvudställe; alla övriga tidigare fetstilta ord (bl.a. *jämviktsvillkor,
  ledstöd, rullstöd, inspänning, stödyta, belastning, deformation, brott, dragprov,
  brottgräns, tvärsnitt, pelare, neutralaxel, I-balken, triangulering, stagning, båge,
  ram, förband, last, egentyngd, nyttig last, vindlast, snölast, statisk/dynamisk
  belastning, tillåten spänning, överslagsräkning, verkningslinje, hävstång, utväxling*)
  är avfetade till vanlig brödtext och avregistrerade ur `concepts_introduced`. Inga
  fetstilta ord kvar i 6.1–6.6:s brödtext. Redaktionell konsekvens att notera vid
  fackgranskning: ett par bärande mekanikord (t.ex. *belastning*, *last*) är därmed inte
  längre registrerade begrepp — de behålls som vanliga ord, i linje med den kurerade
  listan. `concepts_used` i 6.6 rensat från `belastning`/`tvärsnitt` (nu oregistrerade).
- **Begreppslistan (08-begrepp.md) konverterad** från gammalt ifyllnadsformat till
  ordlisteformatet `**Begrepp:** Definition.` med 30 nyskrivna definitioner (max ~en
  mening, byggda på hur begreppen införs i 6.1–6.6). Granska sakinnehållet i
  definitionerna vid fackgranskning. Filen avregistrerad ur `legacyBegreppFiler`
  (scripts/migreringsstatus.mjs); begreppslistans aktiva formatkontroll gäller nu och
  passeras. `npm run validate`: 0 aktiva fel.

**Helkapitelövning invikt (2026-07-23, ny avgränsad form).** De fem projektuppgifterna i
`09-projektuppgifter.md` ersattes av EN fokuserad helkapitelövning enligt den nya standarden
(03, "Helkapitelövningar"): övning 6 i 6.6, "Gångbron från last till dimension". Den väver
samman friläggning (6.1), jämvikt och stödreaktioner (6.3), belastningsfall och dimensionering
(6.6) samt lastväg och belastningstyper (6.4/6.5) längs kapitlets röda tråd, gångbron, och ger
ett dokumenterat resultat (friläggningsdiagram, beräkningsgång, dimensioneringskedja). Ingen
utskriven nivåstapling, ingen betygsetikett i elevtexten. `09-projektuppgifter.md` raderad
(migreringsskulden för kapitel 6 därmed avförd). De övriga fyra projektuppgifternas praktiska
kärnor (kraftdiagram/hävstång, tyngdpunkt/vältning, tvärsnitt/knäckning, bygg-och-testa) täcks i
allt väsentligt av avsnittsnära övningar i 6.1–6.6; den nya standarden håller banken avskaffad.

**Statuskoll (bekräftad 2026-07-23):** rubrik "Övningar" i alla sex avsnitten (klart tidigare),
in-texthänvisningen i 6.1 lyder "en av övningarna" (klart tidigare), alla `[[figur:ID]]` är
`[BILD X.Y-N]` (klart tidigare), begreppsmarkering och definitionslista klara (commit b8979f1).
06-synken för 6.1:s delavsnitt "Krafter på ett lutande plan" var redan gjord: 06-bokstruktur.md
listar det som ett av 6.1:s fyra delavsnitt och det speglar filens faktiska struktur (eget
delavsnitt med egen figur BILD 6.1-4). Ingen åtgärd behövdes.

Kapitel 6 är mekaniskt och innehållsligt klart mot referensstandarden men står **inte** i
`migreradeKapitel` — det avvaktar projektägarens genomläsning.

---

# Begreppslistans format — ordlista (2026-07-22)

Redaktionellt beslut: begreppslistorna (kapitelavslutningen Begrepp) skrivs som en kompakt ordlista i stället för punktlista med tankstreck. Obligatoriskt format, en post per rad utan punktmarkering:

`**Begrepp:** Definition.`

Begreppet i fetstil med kolon inom fetstilen, versal på både begrepp och definition, definitionen en fullständig mening som slutar med punkt, inga tankstreck som avskiljare, hård radbrytning (avslutande `\`) på varje rad utom den sista för kompakt vertikal rytm. Verifierat i webb (Astro/Starlight, `<br>`), granskningsvy och Pandoc-export (`<br />` i Word/HTML).

Genomfört: begreppslistorna i kapitel 1 (17 begrepp) och kapitel 2 (6 begrepp) konverterade från `- **begrepp** — definition.` till det nya formatet. Standarden inskriven i 03 ("Begrepp"), 11, 12, 13, 09 och CLAUDE.md. Ny kontrollregel i `scripts/validate.mjs` felar på punktlista, tankstreck, ofetstilat begrepp eller definition utan avslutande punkt i en begreppslista (testad mot fixturer). Kapitel 6:s begreppslista har ännu det gamla ifyllnadsformatet (bara begrepp, inga definitioner) och redovisas som förväntad migreringsskuld (`legacyBegreppFiler`) tills kapitel 6 revideras — den kräver nyskrivna definitioner. Övriga kapitels begreppsfiler är tomma skelett och berörs inte.

---

**Redaktionell revision 2026-07-22 (produktionsstandard, uttryckligt beslut av
projektägaren; kvalitetsreferensen bytt namn från Golden Master till
referensimplementation):** Avsnitt 1.1 "Vad är teknik?" ersattes i sin helhet av
en slutredigerad version och fastställdes samtidigt som ny, namnbytt
kvalitetsreferens (`referensimplementation-avsnitt-1-1.md`, projektroten,
verbatim och oredigerbar utom efter uttryckligt beslut). Samma prompt fastställde
en ny generell produktionsstandard, normerande för hela boken framåt:

- **Överordnat kriterium** infört i 03: självstudiebar mot kondenserad, prövat åt
  båda hållen för varje redaktionellt val.
- **Avsnittsmönstret** ändrat till löptext (med `[BILD X.Y-N]`-bildplatshållare,
  ersätter `[[figur:ID]]`/`figures/registry.yml` för nytt och migrerat innehåll)
  → Instuderingsfrågor (5–10) → Övningar (2–10, ersätter Praktiska uppgifter).
  Formuleringsregel: boken "låter eleven visa", mäter/testar/examinerar inget.
- **Kapitelavslutningarna** minskade från tre till två: Sammanfattning (kort
  löptext, ej punktlista) och Begrepp (färdiga definitioner, uppslagsfunktion).
  Ingen egen projektuppgiftsdel längre — kapitlets större uppgifter blir i
  stället en eller två **helkapitelövningar** i de senare avsnittens Övningar,
  med krav på flerdelsstoff, ett dokumenterat resultat och utskrivna
  utbyggnadssteg (grunduppgift + "Bygg ut: ...") för E/C/A.
- **Begreppsmarkering** ändrad från fetstil till kursiv vid huvudställe (05).
  **Terminologikonsekvens** infört med löpande `termlista.md` (dragkedja före
  blixtlås, bild före figur, m.fl.).
- **Kapitel 1** bytte titel till "Teknikens grunder" (från "Teknik och
  teknikutveckling"); 06-bokstruktur.md skrivet om för hela boken med denna
  modell (alla 13 kapitel), 07-kursplanetackning.md fick nya rader s-02/s-03 för
  syftesstoff (teknikbegreppet; samspelet teknik/naturvetenskap/matematik) med
  huvudhem i 1.1.
- **Migreringsläge:** styrdokumenten (03, 05, 06, 07, 09, 11, 12, 13, CLAUDE.md)
  är omskrivna för hela boken enligt den nya modellen. `scripts/bokstruktur-data.mjs`
  uppdaterades i samma steg (annars hade 06:s nya, onumrerade kapitelavslutningar
  gjort att parsern kraschade och hela toolchain slutat fungera) — detta var en
  nödvändig mekanisk fix, inte innehållsmigrering. Content/ och övriga skript
  (validate.mjs, generate-skeleton.mjs, exportskripten, schemat) migreras
  **kapitel för kapitel** när respektive kapitel produceras eller revideras;
  fram till dess visar `npm run validate` känd, väntad migreringsskuld (fel
  mappnamn för kapitel 1, kvarvarande `NN-projektuppgifter.md` i alla kapitel).

**Arkitekturrevision 2026-07-15 (Kapitel → Modul → Lärandemål avvecklad,
uttryckligt beslut av projektägaren):** Hela produktions- och publiceringsstrukturen
migrerad till Kapitel (H1) → Avsnitt (H2) → Delavsnitt (H3, vid behov). Avsnittet
är nu bokens minsta produktionsenhet och publicerade enhet; modulnivån är helt
avvecklad. Lärandemål är sedan revisionen metadata på avsnittet
(frontmatterfältet `learningGoals`, flera per avsnitt tillåtna), inte en egen
rubriknivå, fil eller sida.

Ändrade system: `06-bokstruktur.md` skrivet om för hela boken (87 avsnitt över
13 kapitel, alla med lärandemålslistor ur den tidigare bokstrukturen); schemat
(`schemas/larandemal.schema.mjs`) fick nya fält `sectionNumber`, `learningGoals`,
`curriculumReferences`, `abilities`, `levels`, och pensionerade `module`/`goal`;
`scripts/bokstruktur-data.mjs` omskriven för den nya radformaten och avsnittsbaserade
filstigar (`content/<kapitel>/<NN>-slug.md`, ingen modulundermapp); `validate.mjs`,
`generate-skeleton.mjs` och `manuscript-core.mjs` (export) uppdaterade i linje
med detta; `scripts/kapitelavslutningar-data.mjs` borttagen — kapitelavslutningarna
styrs numera direkt av 06, som vilket annat avsnitt. Webbplatsens modulvy
(`site/src/pages/[...oversikt].astro`) togs bort och slogs samman med
kapitelvyn; sidopanelen (`astro.config.mjs`) och granskningsvyn (`/review/`)
förenklade till en nivå (kapitel → avsnitt).

Kapitel 1 och 2 (de enda med producerat innehåll, 22 filer) migrerades med full
textbevarande sammanslagning: tidigare lärandemålsfiler blev H3-delavsnitt i
respektive avsnittsfil, med tidigare separata "Instuderingsfrågor"-sektioner
slagna ihop till en samlad sektion per avsnitt (10 respektive 23 frågor).
Kapitel 1 döptes om från "Teknikens utveckling" till "Teknik och
teknikutveckling" för att bättre täcka både teknikbegreppet och den historiska
tillbakablicken. Kapitel 3–13 (uteslutande tomma skelettfiler, status
`ej-paborjad`) skelettgenererades om mekaniskt ur den nya 06 utan
innehållsförlust, med redaktionellt sammanslagna avsnitt där gamla moduler var
mycket små eller tydligt överlappande (se rapporttext i konversationen/PR:en
för fullständig lista över sammanslagningar per kapitel).

`npm run validate`, fullt webbygge (rensad cache), `npm run export` och
`npm run export:review` kördes samtliga grönt efter migreringen; export:review
uppdaterad att läsa nivå 2 (inte tidigare nivå 3) som avsnittsrubrik och matcha
mot numrerade rubriker för att skilja avsnitt från kapitelavslutningar.

**Strukturrevision 2026-07-14 (modul 2.2 ombytt ordning, speglar ingenjörens
beslutslogik):** "Dela upp problemet" flyttad från sista till andra plats i
modulen, så att disponeringen följer den faktiska beslutsordningen: (1)
bedöm om problemet går att överblicka, (2) om inte, dela upp det, (3) välj
sedan en av de tre strategierna (återanvänd/pröva-förbättra/analysera) för
det överblickbara problemet. Ny ordning: 2.2.1 Bedöma problemets karaktär →
2.2.2 Dela upp problemet → 2.2.3 Återanvänd befintlig lösning → 2.2.4 Pröva
och förbättra → 2.2.5 Analysera innan du bygger. Filerna döpta om i tur och
ordning (via temporära namn för att undvika kollisioner), figurregistrets
fig-2.2.x roterat i samma ordning, `prerequisites` uppdaterade så de tre
strategi-lärandemålen nu även bygger på 2.2.2 (dela upp), inte bara 2.2.1.

Övergångar justerade: "ett eget avsnitt längre fram" i 2.2.1 bytt mot en
direkt hänvisning ("nästa avsnitt"), eftersom nedbrytningen nu faktiskt är
nästa avsnitt. Kapitlets övergång till kapitel 3 ("Nästa steg: från strategi
till lösning") flyttad från slutet av "Dela upp problemet" till slutet av
"Analysera innan du bygger", som nu är modulens sista lärandemål. En kort
ny inledningsmening i "Återanvänd befintlig lösning" ("Ett problem som går
att överblicka... kan angripas med tre strategier") gör explicit att de tre
strategierna är alternativ för ett redan hanterbart problem, inte
konkurrenter till nedbrytningen. Passade också på att ta bort en oavsiktlig
meningsdubblering i samma lärandemål (kvarleva från begreppsbytet
strategimatris → namnlös metod tidigare samma dag).

Kapitlets sammanfattning följde redan den begärda ordningen (förstå →
formulera → avgöra delning → välja strategi → övergång) och lämnades
oförändrad. Begreppsövning och uppgiftsbank innehöll inga ordningsberoende
hänvisningar och lämnades oförändrade.

Verifierat med fullt sitebygge (rensad cache), export och export:review;
16 lärandemål, samtliga efterkontroller passerade, exporterad rubrikordning
kontrollerad manuellt mot den nya dispositionen.

**Redaktionellt beslut 2026-07-14 (kursplanetäckning, uttryckligt beslut av
projektägaren):** n1-08 (Testning och utvärdering av lösningar och resultat
utifrån flera aspekter, däribland hållbar utveckling) bytte primärkapitel
från 2 till 3, som uppföljning av att motsvarande innehåll togs bort ur
kapitel 2 samma dag (se revisionen nedan) och ska in i kapitel 3 när det
produceras. Uppdaterat i 07-kursplanetackning.md (tabellraden och
observation 2) och den maskinläsbara speglingen scripts/kursplan-data.mjs.
`berors`-listan (7, 8, 12) oförändrad. 03-bokens-arkitektur.md:s
kapitelavgränsning för kapitel 2/3 justerad i linje med detta: kapitel 2
stannar vid att välja och motivera en strategi, kapitel 3 äger att ta fram,
testa, utvärdera och förbättra en lösning. Verifierat med `npm run
validate`: n1-08 visar nu kapitel 3 som primärkapitel, konsekvent med övriga
oproducerade kapitel.

**Strukturrevision 2026-07-14 (kapitel 2 renodlat till två huvudfrågor,
ändrar 06):** kapitlet skars ned till "Vad är ett tekniskt problem?" (2.1,
oförändrad i sak) och "Att välja problemlösningsstrategi" (2.2, omdöpt från
"Problemlösningsstrategier"). Modul 2.3 Testning och utvärdering (2.3.1 Att
testa mot krav, 2.3.2 Utvärdering ur flera aspekter, 2.3.3 Från testresultat
till förbättring — begreppen testplan, hållbar utveckling, grundorsak) togs
bort ur kapitlet och flyttades **inte** in någon annanstans i detta arbete.

**INNEHÅLL SOM BÖR FLYTTAS TILL KAPITEL 3** (teknikutvecklingsprocessen,
prototyper, testning, utvärdering, iteration) **när kapitel 3:s struktur
analyseras**: de tre borttagna lärandemålens fulla text finns kvar i git-
historiken (commit före denna revision) — Euro NCAP/termosexemplet och
begreppet testplan (2.3.1), elsparkcykelexemplet och de fyra utvärderings-
aspekterna funktion/kostnad/säkerhet/hållbar utveckling (2.3.2), Galaxy Note
7-exemplet och grundorsaksanalys med "fem varför" (2.3.3). Även tre
uppgiftsbanksuppgifter (Testa mot krav, Väg lösningen på fyra vågskålar,
Gräv fram grundorsaken) och kapitlets tidigare kapstensuppgift (Äggfallet
från idé till testad lösning, som gick igenom hela bygg-testa-förbättra-
loopen) togs bort ur kapitel 2:s uppgiftsbank av samma skäl och bör
återinföras i kapitel 3:s uppgiftsbank. Figurregistrets fig-2.3.1-a,
fig-2.3.2-a och fig-2.3.3-a lämnades kvar oanvända (varning, inte fel) i
väntan på detta.

07-kursplanetackning.md rör INTE denna revision (kursplanetäckning ändras
aldrig utan uttryckligt beslut, CLAUDE.md): n1-08 anger fortfarande kapitel 2
som primärkapitel trots att inget innehåll i kapitel 2 längre taggar n1-08.
Kräver ett separat beslut när kapitel 3 tar över testning/utvärdering.

Modul 2.2 disponerad om till exakt kapitlets två huvudfrågor: 2.2.1 Bedöma
problemets karaktär (namnlös metod, ingen "strategimatris"/"valkarta";
frågan om nedbrytning kommer uttryckligen först, inte "en fjärde strategi
som kommer sist") → 2.2.2 Återanvänd befintlig lösning → 2.2.3 Pröva och
förbättra → 2.2.4 Analysera innan du bygger (omdöpt från "Systematisk
problemlösning"; byggresultat-testa-förbättra-loopen i Apollo 13-exemplet
kortad till det kontrollerade marktestet, eftersom kapitlet inte längre ska
täcka hela ta fram/testa/förbättra-processen; ny mening tillagd om att andra
strategier också kan användas systematiskt) → 2.2.5 Dela upp problemet
(omdöpt från "Dela upp i minsta beståndsdelar"; avslutas nu med en kort
övergång till kapitel 3, eftersom modul 2.3 inte längre finns). Modulmappen
bytt namn (`2.02-problemlosningsstrategier` → `2.02-att-valja-problemlosningsstrategi`).
Kapitlets sammanfattning, begreppsövning (testplan/hållbar utveckling/
grundorsak/strategimatris borttagna ur ordlistan) och uppgiftsbank omskrivna
i linje med det ovanstående.

Verifierat med fullt sitebygge (rensad cache), export och export:review; 16
lärandemål (var 19), samtliga efterkontroller passerade.

**Redaktionellt beslut 2026-07-14 (begreppsbyte, modul 2.2):** "valkarta" var
en egen konstruktion utan etablerad förlaga. Bytt till **strategimatris**
("beslutsträd" övervägdes och är i sak träffsäkrare, se resonemang i
konversationen, men "beslutsmatris" var redan upptaget av 3.4.2 Konceptval;
projektägaren valde ändå matris-formen). 2.2.1 döpt om från "Valkartan" till
"Strategimatrisen" (fil och 06 uppdaterade), begreppet och alla hänvisningar
i modul 2.2, kapitlets begreppsövning, sammanfattning och uppgiftsbank
uppdaterade. Modellen i sak oförändrad: strategimatrisen är fortfarande inte
symmetrisk (återanvänd-fältet spänner hela den välkända kolumnen), och
nedbrytning ligger fortfarande uttryckligen utanför den.

**Strukturrevision 2026-07-14 (modul 2.2, redaktionellt beslut, ändrar 06):**
modul 2.2 Problemlösningsstrategier omstrukturerad från tre till fem
lärandemål, ett per strategi, i en ny presentationsordning: 2.2.1 Valkartan
(ramverket, tidigare "Val av strategi") → 2.2.2 Återanvänd befintlig lösning
→ 2.2.3 Pröva och förbättra → 2.2.4 Systematisk problemlösning (tidigare
2.2.1) → 2.2.5 Dela upp i minsta beståndsdelar (tidigare 2.2.2, "Nedbrytning
i delproblem"). Bakgrund: valkartan visade sig vid närmare analys inte vara
en symmetrisk fyrfältare — "väl förstått" dominerar över kostnadsfrågan
(återanvänd gäller oavsett kostnad så fort problemet är välkänt), och
nedbrytning svarar på en helt annan fråga (är problemet för stort att
greppa) än de tre kostnads-/kunskapsstyrda strategierna. Fyrfältaren i ny
fig-2.2.1-a gör detta synligt: återanvänd-fältet spänner hela den välkända
kolumnen, och nedbrytning presenteras uttryckligen sist, som liggande
utanför kartan, även om den i praktiken ofta prövas först. Alla fem filer
skrivna om i sin helhet (inte bara flyttade); sakinnehållet i Apollo 13-
och Husqvarna-exemplen oförändrat, Edison/SpaceX/kardborre-exemplen
omfördelade till egna lärandemål med utökat innehåll. Figurregistret
omnumrerat i sin helhet för modulen (fig-2.2.1-a t.o.m. fig-2.2.5-a), två
nya figurer tillkom (kardborre-jämförelse, iterationscykel). 2.3.3:s
prerequisite till gamla 2.2.2 uppdaterad till nya 2.2.5. Kapitlets
sammanfattning omskriven för att följa den nya presentationsordningen.
Verifierat med fullt sitebygge (rensad cache) och export; 19 lärandemål
(tidigare 17), samtliga efterkontroller passerade.

**Redaktionellt beslut 2026-07-14 (kapitelavslutningar, gäller alla kapitel):**
tre förändringar av standardmallen, tillämpade på kapitel 1 och 2 och
normerande för alla framtida kapitel (03/12/13 uppdaterade). (1) Ny tredje
kapitelavslutningstyp `kapitelsammanfattning`: en löptext på cirka 300 ord som
binder ihop kapitlets moduler, ingen `ordlista`, inga nya fakta eller begrepp.
Ny fil `sammanfattning.md` skapad för kapitel 1 och 2. Placering beslutad
efter fråga till projektägaren: sist i kapitlet som en tredje
kapitelavslutning (inte som en kapitelingress), eftersom kapitelöversikts-
sidan är en genererad vy utan eget textfält och kapitelavslutningsmekaniken
redan fanns att återanvända. (2) Ordningen sist i kapitlet omvänd: sammanfattning,
begreppsövning, uppgiftsbank (var uppgiftsbank, begreppsövning) —
`scripts/kapitelavslutningar-data.mjs` och alla styrdokument uppdaterade. (3)
Begreppsövningens format ändrat från sammanhängande ifyllnadsövning med
numrerade luckor till en **punktlista**: ett begrepp per punkt, eleven
förklarar med en egen mening. Kapitel 1 och 2:s begreppsövningar omskrivna;
kapitel 2:s lista kompletterad med begreppet valkarta (infört i 2.2.3 men
tidigare inte med i övningen). Schema (`schemas/larandemal.schema.mjs`)
utökat med den nya typen; ingen kodändring behövdes i validate.mjs, Astro-
sidorna eller exportskripten eftersom hela kedjan redan är manifest-/typdriven.
Verifierat med fullt sitebygge.

**Redaktionell revision 2026-07-14 (kapitel 2, läsarfeedback):** kapitlet
bedömdes monotont (nästan alla lärandemål följde mönstret historiskt exempel →
teori → fördjupning → slutsats → instuderingsfrågor) och åtgärdades utan att
ändra sakinnehållet. Öppningarna varierade: 2.2.3 inleds nu direkt med teori
(ingen anekdot), 2.3.1 inleds med figuren (ifylld testplan) före löptexten,
övriga behöll sin redan spridda mix av vardagsexempel, historiska exempel och
misslyckanden. Apollo 13 i 2.2.1 kortades cirka 10-15 % utan sakförlust.
Instuderingsfrågornas antal varierat 3-7 (tidigare enhetligt 5) och kompletterat
med val-/motiveringsfrågor i alla åtta lärandemål (jämför två formuleringar,
bedöm ett scenario, motivera ett val) i stället för enbart återgivning.
Modul 2.2 disponerad om med explicita rubriker "Strategi 1 av 4" till "Strategi
4 av 4" och en tydlig fyra-strategier-utfästelse redan i 2.2.1:s öppning, så att
eleven vet tidigt att modulen har fyra strategier; strategierna 3 och 4 (pröva
och förbättra, återanvänd befintlig lösning) fick egna rubriker i 2.2.3 i
stället för att ligga ostrukturerade i ett stycke. Begreppet valkarta infört
och definierat i 2.2.3 (fanns tidigare odefinierat i uppgiftsbanken). Kapitlets
uppgiftsbank skuren från 13 till 8 uppgifter: kvarvarande uppgifter täcker vart
och ett av kapitlets åtta lärandemål (2.2.1 via äggfallets fulla process),
borttagna uppgifter var antingen redundanta med en kvarvarande uppgift (samma
förmåga övad två gånger) eller en sammanslagning av två andra kvarvarande
uppgifter. Raden "Facit finns i lärarmaterialet." borttagen ur begreppsövningarna
i kapitel 1 och 2 (facit ska inte omnämnas i elevmanuset alls, 03/12/13).

**Redaktionellt beslut 2026-07-14 (övergång kapitel 2 → kapitel 3):**
teknikutvecklingsprocessen är underordnad problemlösning, inte tvärtom —
processen är en formaliserad, industriellt strukturerad tillämpning av
problemlösning, byggd ovanpå de fyra strategierna i avsnitt 2.2. Brygga
tillagd sist i 2.3.3 (efter kapitlets sista sakinnehåll, före
Instuderingsfrågor) eftersom kapitel 3 saknar en egen ingresstext att skriva
bryggan i — kapitel-/modulsidor är genererade vyer utan fritt brödtextfält
(CLAUDE.md). När 3.1.1 (Processens faser) produceras ska den peka tillbaka på
avsnitt 2.2 explicit; kravet är noterat i 3.1.1:s platshållarkommentar.
Gränsen mellan 2.3 (Testning och utvärdering) och 3.5 (Prototyper) låst: 2.3
äger testning som princip (varför man testar, hur man värderar en lösning mot
krav — oförändrat, gäller oavsett testobjekt), 3.5 äger prototypen som
konkret verktyg (fysisk eller digital bärare av testet) och ska hänvisa
tillbaka till 2.3 i stället för att upprepa testprinciperna. 2.3.1 kompletterad
med en mening om att en prototyp kan vara testobjektet. Kraven är noterade i
3.5.1:s och 3.5.2:s platshållarkommentarer och gäller tills de lärandemålen
produceras.

**Strukturrevision 2026-07-13 (redaktionellt beslut, lärandemålsstyrd modell):**
övergång från uppslagsstyrd till lärandemålsstyrd modell. Uppslaget avskaffat som
arkitekturnivå; inga fasta antalsintervall för instuderingsfrågor. Synliga
Begrepp-block borttagna ur lärandemålen (begreppen kvar i teorin). Praktiska
uppgifter flyttade till kapitelvisa uppgiftsbanker med tre omfattningsnivåer.
Ny begreppsövning per kapitel. Kapitel 1 omstrukturerat (drivkrafter och framtid
i ny modul 1.5; kapitelrubrik "Teknikens utveckling"). Äldre uppgiftsrubriker
(Förstå/Utveckla/Utmana) och uppgiftsdelen Begrepp är därmed helt utfasade.
Fält `uppslag` och `practical_component` pensionerade.

**Strukturrevision 2026-07-10 (redaktionellt beslut):** samtliga 15 färdiga
lärandemål reviderade till dåvarande uppgiftsstruktur (Instuderingsfrågor/Begrepp/
Praktiska uppgifter), personnamn gallrade enligt 05 "Personnamn", tonen
skärpt enligt 10 "Teknik före samhälle", synliga uppslagsrubriker borttagna.
1.1.1 reviderades först, kvalitetsgranskades fullständigt mot 09 och
fastställdes därefter på nytt som Golden Master i sin reviderade form.

| Lärandemål | Status | Kvalitet mot Golden Master | Ny generell standard | Kort kommentar |
|---|---|---|---|---|
| 1.1.1 Vad är teknik? | fardig-forsta-version | Är Golden Master | — | Kvalitetsreferens per redaktionellt beslut 2026-07-10; på nytt fastställd i reviderad form efter strukturrevisionen; ändras endast efter uttryckligt beslut |
| 1.1.2 Teknik, naturvetenskap och matematik | fardig-forsta-version | Likvärdig med Golden Master | — | Första målet utan nya begrepp; Öresundsförbindelsen som röd tråd |
| 1.2.1 Tekniska genombrott före industrialiseringen | fardig-forsta-version | Likvärdig med Golden Master | — | Första fleruppslagsmålet: uppgiftsdelar per uppslag (13 preciserad); begreppet tekniskt genombrott introducerat; etiktråden (n1-14-området) invävd vid oceansjöfarten |
| 1.2.2 Teknikutvecklingens drivkrafter | fardig-forsta-version | Likvärdig med Golden Master | — | Tre drivkrafter med tre historiska fall (konserven, telegrafen, Londons avlopp) och samspelsavslut; inga nya begrepp |
| 1.3.1 Fyra industriella revolutioner | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppen teknikskifte och industriell revolution introducerade; lager-på-lager-principen bär missuppfattningarna; ASEA IRB 6 som svensk förankring |
| 1.3.2 Industrialiseringens samhällskonsekvenser | fardig-forsta-version | Likvärdig med Golden Master | — | Sverige som huvudarena (Sundsvall 1879, tändsticksfabrikerna, emigrationen); genus- och barnarbetestråden invävd; analysverktyget "vad förändrades, och för vem" |
| 1.4.1 Från transistor till AI | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppen transistor och artificiell intelligens introducerade; Moores lag som bokens första beräkningsuppgift; gräns mot kapitel 9 hålls (när/varför, inte hur) |
| 1.4.2 Digitala teknikskiften | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppet digitalisering introducerat (fördjupas i 9.5.1); mönstret "informationen lämnar bäraren"; digital utestängning bär etik-/tillgänglighetstråden; intervjuuppgift som ny uppgiftsvariation |
| 1.5.1 Att bedöma framtidens teknik | fardig-forsta-version | Likvärdig med Golden Master | — | Kapitel 1 komplett. Fyra bedömningsmönster ur kapitlets historia; dubbeltaggning n1-13 + n1-12 (berörs); falsifierbarhetskrav i Utmana; inga apokryfiska citat |
| 2.1.1 Tekniska problem | fardig-forsta-version | Likvärdig med Golden Master | — | Kapitel 2 påbörjat; n1-04 första gången. Begreppen behov och tekniskt problem introducerade (1.1.1:s medvetna skuld inlöst); Hövding som huvudexempel på problemformuleringens makt |
| 2.1.2 Problemformulering | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppen funktion, krav och begränsning introducerade; IKEA:s platta paket (Lundgren 1956); kamratgranskning som redovisningsform i Utmana |
| 2.2.1 Systematisk problemlösning | fardig-forsta-version | Likvärdig med Golden Master | — | Apollo 13:s koldioxidfilter som fall; första praktiska momentet sedan 1.1.1 (äggfallet, hela processen tillämpad); iteration som ord sparas till 3.1.2 |
| 2.2.2 Nedbrytning i delproblem | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppet delproblem introducerat; Husqvarnas robotgräsklippare 1995 som nedbrytningsfall; Mars Climate Orbiter bär skarvarnas risk; nedbrytningsträd som visuell redovisningsform |
| 2.2.3 Val av strategi | fardig-forsta-version | Likvärdig med Golden Master | — | Modul 2.2 komplett. Fyra strategier med valkarta (kostnad per försök × kunskapsläge); Edison, de Mestral och SpaceX som fall; muntligt försvar som redovisningsform |
| 2.3.1 Att testa mot krav | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppet testplan introducerat; n1-08 första gången; Euro NCAP och IP67 som standardiserade testexempel; praktiskt moment (eget test med protokoll); godkäntgräns före testet som bärande princip |
| 2.3.2 Utvärdering ur flera aspekter | fardig-forsta-version | Likvärdig med Golden Master | — | Begreppet hållbar utveckling introducerat (Brundtlanddefinitionen); elsparkcykeln vägd på fyra vågskålar (funktion, kostnad, säkerhet, hållbar utveckling); ingen coverage-krav kvar sedan uppgiftsbanken förenklades |
| 2.3.3 Från testresultat till förbättring | fardig-forsta-version | Likvärdig med Golden Master | — | Modul 2.3 och kapitel 2 komplett (8/8). Begreppet grundorsak introducerat; Galaxy Note 7-fallet (två separata tillverkningsfel hos två leverantörer); avslutas med brygga till kapitel 3, se redaktionellt beslut 2026-07-14 nedan |
