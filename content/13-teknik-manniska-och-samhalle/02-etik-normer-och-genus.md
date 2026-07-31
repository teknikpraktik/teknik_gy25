---
id: "13.2"
chapter: 13
sectionNumber: 2
title: Etik, normer och genus
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-14"]
  niva2: ["n2-10"]
learningGoals:
  - Identifiera etiska frågor i teknikutveckling och värdera tekniska lösningar
    utifrån etiska aspekter.
  - Förklara hur normer och genusstrukturer påverkar teknikens utformning,
    användning och tillgänglighet.
  - Granska en teknisk lösning ur ett norm- och tillgänglighetsperspektiv och
    föreslå förbättringar.
abilities: [f2, f4]
concepts_introduced: ["etisk fråga", "norm", "antropometri", "tillgänglighet", "universell utformning", "normkritisk granskning"]
concepts_used: ["krav", "kravspecifikation", "avvägning", "systematiskt mätfel", "oavsedd följd", "yrkesansvar"]
figures: []
prerequisites: ["3.2", "7.1", "13.1"]
---

En pulsoximeter är en liten klämma på fingret som mäter syremättnaden i blodet. Den lyser med två våglängder genom fingret och räknar ut mättnaden ur hur mycket ljus som absorberas. Instrumentet är billigt, snabbt och används överallt i vården för att avgöra hur sjuk en patient är.

Mätprincipen bygger på att ljuset passerar vävnaden. Hudens pigment absorberar också ljus, och instrumentet kalibrerades i huvudsak mot försökspersoner med ljus hud. Följden är att pulsoximetern systematiskt kan visa för hög syremättnad hos patienter med mörk hud, vilket uppmärksammades brett under covidpandemin, eftersom ett för högt värde kan betyda att en patient inte får vård i tid.

Det här är inte en fråga om åsikter. Det är ett [[begrepp:systematiskt mätfel]], av precis den sort som mättekniken beskriver, och det uppstod i ett konstruktionsbeslut, nämligen vilka som ingick i kalibreringsunderlaget. Avsnittet handlar om hur sådana beslut fattas och hur de går att upptäcka innan produkten är i bruk.

## Etik i teknikutveckling

De flesta frågor i ett konstruktionsarbete går att avgöra genom att mäta eller räkna. Håller balken? Räcker batteritiden? Ryms detaljen i toleransen? Svaren finns i verkligheten, och den som mäter noggrant får samma svar som alla andra.

En *etisk fråga* är en fråga om vem som bär risken och vem som får nyttan av en teknisk lösning, och den går inte att avgöra genom att mäta. Två personer som är helt överens om alla mätvärden kan ändå landa olika, eftersom frågan gäller vad som bör göras och inte vad som är fallet.

Etiska frågor i teknikutveckling kommer sällan som stora principfrågor. De kommer som vanliga val i vardagen, och de känns igen på ett par återkommande mönster.

**Nyttan och risken hamnar hos olika personer.** Ett bullrande arbetsmoment som flyttas ut ur fabriken till en underleverantör har inte upphört, det har bytt plats. Ett billigare material som håller kortare tid ger en lägre kostnad för köparen och en högre kostnad för den som ska underhålla. Frågan om det är godtagbart avgörs inte av kalkylen.

**Något samlas in därför att det är möjligt.** En uppkopplad produkt kan mäta hur den används, och den uppgiften har ett värde. Frågan om vad som ska samlas in besvaras alltför ofta med vad som går att samla in. Den tekniska frågan är vilka data som behövs för funktionen, och det är oftast betydligt färre än vad som är möjligt.

**Ett beslut flyttas från en människa till ett system.** När ett urval, en prioritering eller en bedömning byggs in i ett program blir det snabbare och mer enhetligt, men också svårare att överklaga. Den som konstruerar ett sådant system behöver kunna svara på hur ett felaktigt utfall upptäcks och rättas.

**Säkerheten kostar och någon bestämmer hur mycket.** Varje konstruktion har en gräns för hur säker den är gjord. Var gränsen läggs är delvis en [[begrepp:avvägning]] mot kostnad, och den avvägningen är ofrånkomlig. Det som skiljer ett hederligt arbete från ett ohederligt är inte att gränsen finns, utan om den är uttalad och redovisad.

[BILD 13.2-1] Innehåll: Ett beslutsträd med en fråga överst, formulerad som ska vi göra så här. Två grenar leder ned. Den vänstra grenen märkt frågor som mätning avgör, med exemplen håller konstruktionen, räcker batteritiden och ryms detaljen i toleransen, och under dem en ruta märkt samma svar för alla som mäter rätt. Den högra grenen märkt frågor som mätning inte avgör, med exemplen vem bär risken, vem får nyttan, vad ska samlas in och hur mycket säkerhet är nog, och under dem en ruta märkt måste avgöras och redovisas, inte räknas fram. En streckad pil från höger gren tillbaka till vänster visar att ett etiskt beslut ofta blir ett krav som sedan går att pröva. Bildtext: "Bägge sorternas frågor finns i varje projekt. Felet är inte att den högra sorten finns, utan att den behandlas som om den vore av den vänstra sorten."

Etiska frågor blir hanterbara när de skrivs in i [[begrepp:kravspecifikation]]en. Beslutet att produkten ska fungera utan uppkoppling, att den ska gå att reparera i tio år eller att den bara samlar in det som funktionen kräver är etiska ställningstaganden i den stund de fattas, men [[begrepp:krav]] i varje steg därefter. Då går de att pröva, och då syns det om de överges.

Det hänger ihop med [[begrepp:yrkesansvar]]et. Den som konstruerar avgör inte vad samhället ska vilja, men är den enda som kan se att en fråga över huvud taget finns. Att peka ut den i tid är en teknisk uppgift.

## Normer i tekniken

En *norm* är en outtalad föreställning om vad som är vanligt eller normalt, och som därför inte behöver motiveras. Normer är inte i sig ett problem. Problemet uppstår när en norm smyger in i ett konstruktionsbeslut utan att någon har prövat om den stämmer.

I teknik tar det nästan alltid samma form. Någonstans i arbetet finns en föreställning om vem som ska använda lösningen, och den föreställningen blir till mått, kalibrering, testfall eller gränssnitt. Är den tänkta användaren snävare än den verkliga får skillnaden tekniska följder.

**Kroppsmåtten är det tydligaste fallet.** *Antropometri* är läran om människokroppens mått och används för att dimensionera allt som människor ska hantera, alltså handtag, säten, räckvidder, skyddsutrustning och manöverdon. Måtten redovisas som fördelningar och inte som ett enda värde. Den femte percentilen är det mått som fem procent av gruppen ligger under, och den nittiofemte det som fem procent ligger över.

Anta att en arbetsstol ska passa så många som möjligt, och att mätningar av underbenslängden i den tänkta användargruppen ger femte percentilen 38 cm, femtionde percentilen 44 cm och nittiofemte percentilen 50 cm. En stol som går att ställa in mellan 42 och 54 cm ser generös ut, eftersom området är tolv centimeter brett. Men det ligger fel. Alla som har kortare underben än 42 cm får sitta utan stöd för fötterna, och de är betydligt fler än fem procent, eftersom 42 cm ligger fyra centimeter över femte percentilen. I andra änden går stolen att ställa fyra centimeter högre än den nittiofemte percentilen, alltså till ett läge nästan ingen behöver. En stol som går mellan 38 och 50 cm har exakt lika brett inställningsområde men täcker hela spannet från femte till nittiofemte percentilen, alltså nittio procent av gruppen.

Är det rimligt att nöja sig med nittio procent? Att gå från nittio till nittioåtta procent kräver att området vidgas i båda ändarna, och de sista procenten kostar oftast mer i konstruktion än de nittio första. Så ser det ut i nästan all dimensionering. Poängen är därför inte att alla alltid ska rymmas, utan att den som konstruerar ska veta vilka som lämnas utanför och ha skrivit ned det. Ett medvetet beslut går att ompröva. Ett bortglömt gör det inte.

[BILD 13.2-2] Innehåll: En fördelningskurva över ett kroppsmått, med den femte, femtionde och nittiofemte percentilen markerade med lodräta linjer och värdena utsatta. Under kurvan två vågräta band som visar två produkters inställningsområden. Det övre bandet, märkt fel placerat, ligger förskjutet mot de större måtten så att en tydlig del av kurvans vänstra svans hamnar utanför, och den ytan skrafferas och märks utanför. Det undre bandet, märkt rätt placerat, är lika brett men täcker området mellan femte och nittiofemte percentilen. Vid varje band anges hur stor andel av gruppen som ryms. Bildtext: "Två produkter med lika stort inställningsområde kan täcka helt olika många. Det avgörs av var området placeras, inte av hur brett det är."

Samma mönster återkommer där personbilar provas. Den docka som länge har varit standard i krockprov är byggd efter måtten hos en genomsnittlig vuxen man, och de dockor som representerat kvinnor har i huvudsak varit nedskalade versioner av samma docka. En nedskalad manskropp har inte samma proportioner, muskelfördelning eller nackstyvhet som en kvinnokropp, vilket bland annat påverkar hur nacken rör sig vid en påkörning bakifrån. Vid Statens väg- och transportforskningsinstitut har därför en dockmodell som motsvarar en genomsnittlig kvinna tagits fram, i första hand för att kunna pröva skydd mot just nackskador. Så länge provningen sker mot en docka gäller resultatet den kropp dockan beskriver, och inte de kroppar som faktiskt sitter i bilen.

Andra exempel har samma uppbyggnad. Handverktyg och skyddshandskar dimensionerade efter en manlig handstorlek blir svårare att använda säkert för den med mindre händer, vilket är en arbetsmiljöfråga och inte en smakfråga. Taligenkänning som tränats på ett underlag med vissa röster och uttal fungerar sämre för andra. I samtliga fall är orsaken densamma: underlaget som konstruktionen vilar på representerar inte de användare produkten möter, och det är ett fel av samma slag som ett [[begrepp:systematiskt mätfel]]. Det försvinner inte av fler mätningar, bara av ett bättre underlag.

**Tillgänglighet är samma fråga i sin bredaste form.** *Tillgänglighet* är i vilken utsträckning en produkt, en tjänst eller en miljö går att använda av människor med olika förutsättningar, oavsett funktionsförmåga. Krav på tillgänglighet finns i lag både för byggd miljö och för digitala tjänster hos det offentliga, och de handlar om konkret utformning, alltså nivåskillnader, kontraster, ljudmiljö, greppytor, tydlig märkning och möjligheten att styra ett gränssnitt på mer än ett sätt.

*Universell utformning* är principen att lösningen från början utformas så att den fungerar för så många som möjligt, i stället för att en särskild variant tas fram i efterhand. Skillnaden är teknisk och inte språklig. Ett trappsteg med en ramp bredvid är två lösningar som ska byggas, underhållas och skyltas. En entré utan nivåskillnad är en lösning. Den andra vägen kostar dessutom mindre, förutsatt att beslutet fattas medan byggnaden ännu ritas.

## Normkritisk granskning

*Normkritisk granskning* är att systematiskt undersöka vilken användare en teknisk lösning förutsätter och vad som händer med den som inte motsvarar antagandet. Den är en granskningsmetod och fungerar som andra granskningar, alltså genom att ställa bestämda frågor i bestämd ordning i stället för att förlita sig på intryck.

Granskningen görs i fyra steg.

**Först fastställs den förutsatta användaren.** Frågan är vad lösningen tar för givet om den som ska använda den. Kroppsmått och styrka, syn, hörsel och färgseende, finmotorik, språk och läsförmåga, tidigare vana vid liknande teknik, samt vad personen förutsätts äga, exempelvis en smarttelefon, ett bankkonto eller ett körkort. Svaret läses ur konstruktionen och inte ur avsikten, eftersom en produkt förutsätter det den kräver oavsett vad någon tänkte.

**Sedan prövas antagandena mot de verkliga användarna.** För varje antagande ställs frågan vilka som inte uppfyller det och hur många de är. Här skiljer sig en granskning från en gissning, eftersom svaret ofta går att ta reda på, antingen ur antropometriska data, ur uppgifter om syn- och hörselnedsättningar i befolkningen eller genom att fråga dem som faktiskt använder lösningen.

**Därefter beskrivs följden för den som faller utanför.** Skalan spänner från att lösningen blir obekväm, via att den blir långsammare eller kräver hjälp av någon annan, till att den blir omöjlig eller farlig att använda. Skillnaden mellan de tre nivåerna avgör vad som måste åtgärdas och vad som kan vänta.

**Till sist föreslås ändringar.** De ska vara konstruktionsändringar och inte uppmaningar. Att flytta ett inställningsområde, sänka en manöverhöjd, öka kontrasten i en märkning, lägga till ett andra sätt att styra en funktion eller ta bort ett krav på uppkoppling är ändringar. Att skriva i manualen att produkten kan vara svår att använda är det inte.

Ta en biljettautomat som exempel. Den förutsätter att användaren kan stå upp och nå en skärm på en viss höjd, kan se en skärm med svag kontrast i solljus, har ett betalkort, förstår svenska och kan använda en pekskärm som inte ger något känselintryck. Var och en av de fem antagandena utesluter en grupp. Ändringarna följer direkt ur listan: en manöverhöjd som fungerar sittande, en skärm med högre kontrast och matt yta, ett alternativt betalsätt, fler språk och taktil återkoppling eller fysiska knappar som komplement.

[BILD 13.2-3] Innehåll: En biljettautomat ritad i genomskärning från sidan, med en person stående och en person sittande i rullstol i samma bild, och två streckade räckviddsbågar som visar vad var och en når. Vid automaten fem numrerade utpekningar av de antaganden som granskningen hittat, alltså manöverhöjd, skärmkontrast, betalsätt, språk och pekskärm utan känselintryck. Vid sidan en tabell i fyra kolumner efter granskningens steg, med en rad per antagande, där sista kolumnen anger den föreslagna konstruktionsändringen. Bildtext: "Granskningen läser antagandena ur konstruktionen och inte ur avsikten. Varje antagande som hittas leder till en ändring som går att rita."

Granskningen har en gräns som är värd att säga rakt ut. Den visar vilka som utestängs och vad det kostar att inte utestänga dem. Den avgör inte hur mycket som ska läggas på saken, och det beslutet är en [[begrepp:etisk fråga]] av samma slag som avsnittets första del beskriver. Granskningens värde ligger i att den flyttar frågan från något ingen har tänkt på till något någon har beslutat, och en [[begrepp:oavsedd följd]] som blivit en redovisad avvägning är inte längre oavsedd.

## Instuderingsfrågor

1. Varför är pulsoximeterns sämre mätning på mörk hud ett tekniskt fel och inte en åsiktsfråga?
2. Vad är en etisk fråga, och vad skiljer den från en fråga som mätning kan avgöra?
3. Ange fyra mönster som etiska frågor i teknikutveckling brukar följa, med ett exempel på ett av dem.
4. Varför är svaret på vilka data en uppkopplad produkt ska samla in inte detsamma som vilka data den kan samla in?
5. Vad blir svårare när ett beslut flyttas från en människa till ett system, och vad måste den som konstruerar systemet kunna svara på?
6. Varför är det inte i sig ohederligt att en konstruktion har en gräns för hur säker den är gjord?
7. Hur blir en etisk fråga prövbar när den skrivs in i kravspecifikationen?
8. Vad är en norm, och när blir en norm ett problem i ett konstruktionsarbete?
9. Vad är antropometri, och varför redovisas kroppsmått som fördelningar i stället för som ett enda värde?
10. Vad betyder femte och nittiofemte percentilen?
11. Två arbetsstolar har lika stort inställningsområde men täcker olika många användare. Hur är det möjligt?
12. Varför gäller ett krockprovsresultat den kropp dockan beskriver och inte de kroppar som sitter i bilen?
13. Varför försvinner ett fel som beror på ett ensidigt underlag inte av att man gör fler mätningar?
14. Vad menas med universell utformning, och varför blir den ofta billigare än en särlösning i efterhand?
15. Ange granskningens fyra steg och varför den förutsatta användaren ska läsas ur konstruktionen och inte ur avsikten.

## Övningar

1. **Vilken sorts fråga?** Avgör för vart och ett av dessa fall om frågan går att avgöra genom mätning eller beräkning, eller om den är en etisk fråga, och motivera på en mening: om en balk håller för lasten, om en produkt ska gå att reparera i tio år, hur lång batteritiden blir vid full belastning, vilka data en uppkopplad maskin ska skicka vidare, och hur stor säkerhetsfaktorn ska vara. Ange därefter för det sista fallet vad som är den tekniska respektive den etiska delen av frågan.

2. **Placera inställningsområdet.** En verkstad ska köpa in arbetsbord med ställbar höjd. Mätningar av armbågshöjd stående i den tänkta användargruppen ger femte percentilen 96 cm, femtionde percentilen 106 cm och nittiofemte percentilen 116 cm. Tre bordsmodeller finns, med inställningsområdena 100 till 115 cm, 96 till 111 cm och 90 till 120 cm. Ange för varje modell vilka delar av gruppen som hamnar utanför och åt vilket håll. Ange därefter vilken modell du skulle välja om priset är lika, och motivera. Ange också vad som talar emot den bredaste modellen trots att den täcker flest, och vad valet mellan de två lika breda modellerna egentligen är för sorts fråga.

3. **Var uppstod utestängningen?** En kommun har tagit fram en app för att boka tid på återvinningscentralen. Arbetet gick till så här: kraven togs fram tillsammans med tre anställda på förvaltningen, gränssnittet ritades efter en färgskala hämtad ur kommunens grafiska profil, appen provades av utvecklingsgruppen på deras egna telefoner, och inloggningen löstes med bank-id. Ange minst fyra grupper som får svårt att använda tjänsten. Peka därefter ut i vilket av de fyra arbetsmomenten varje svårighet uppstod, och skriv för vart och ett vad som skulle ha gjorts i stället i just det momentet.

4. **Granska en lösning normkritiskt.** Välj en teknisk lösning du möter regelbundet, till exempel en dörr med portkod, en kaffemaskin, en tvättstugebokning, skolans schemaapp eller en toalett i en offentlig byggnad. Genomför granskningens fyra steg. Lista den förutsatta användarens egenskaper, ange för varje antagande vilka som inte uppfyller det, klassa följden som obekväm, långsam eller omöjlig, och föreslå en konstruktionsändring för var och en. Redovisa som en tabell och avsluta med vilken av ändringarna du bedömer ger mest per satsad krona.

5. **Pröva ditt eget underlag.** Utgå från en lösning du själv har konstruerat eller byggt. Skriv ned vem du hade i tankarna när du fattade besluten om mått, manövrering och märkning. Låt därefter minst två personer som inte liknar den du tänkte dig använda lösningen utan att du förklarar hur den fungerar. Anteckna vad de gör, var de tvekar och vad de gör fel. Ange vilka av dina antaganden som inte höll, och vilka ändringar iakttagelserna leder till.
