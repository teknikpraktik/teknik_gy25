// Maskinläsbar spegling av 06-bokstruktur.md: kapitel, moduler och lärandemål.
// Detta är EN AV FLERA representationer av samma beslut — 06-bokstruktur.md
// förblir den redaktionella källan (målskelett). Ändras kapitel, moduler eller
// lärandemål i 06 ska denna fil uppdateras i samma steg (och `npm run skeleton`
// + `npm run validate` köras), annars går strukturerna ur synk — validate.mjs
// felar när content/ och denna fil inte stämmer överens.
//
// Varje lärandemål har:
//   titel   — kort arbetstitel (blir filnamnsslug och sidrubrik)
//   mal     — mätbar målformulering, inleds med observerbart verb
//   uppslag — planerat antal uppslag (1 om inget annat anges i 06)

export const kapitel = [
	{
		nr: 1,
		titel: 'Teknikhistoria',
		moduler: [
			{
				titel: 'Teknik – människans problemlösning',
				larandemal: [
					{
						titel: 'Vad är teknik?',
						mal: 'Förklara vad teknik är och ge exempel på hur tekniska lösningar svarar mot mänskliga behov och problem.',
					},
					{
						titel: 'Teknik, naturvetenskap och matematik',
						mal: 'Beskriva hur teknik samspelar med naturvetenskap och matematik i en verklig teknisk lösning.',
					},
				],
			},
			{
				titel: 'Teknikens utveckling genom historien',
				larandemal: [
					{
						titel: 'Tekniska genombrott före industrialiseringen',
						mal: 'Beskriva tekniska genombrott från de första verktygen till 1700-talet och förklara deras betydelse för samhället.',
						uppslag: 2,
					},
					{
						titel: 'Teknikutvecklingens drivkrafter',
						mal: 'Förklara hur behov, kunskap och samhällsförändringar driver teknikutveckling, med historiska exempel.',
					},
				],
			},
			{
				titel: 'Industriella revolutionerna',
				larandemal: [
					{
						titel: 'Fyra industriella revolutioner',
						mal: 'Beskriva de fyra industriella revolutionerna och de teknikskiften som kännetecknar dem.',
						uppslag: 2,
					},
					{
						titel: 'Industrialiseringens samhällskonsekvenser',
						mal: 'Analysera hur industrialiseringen förändrade produktion, arbete och levnadsvillkor.',
					},
				],
			},
			{
				titel: 'Digitaliseringens framväxt',
				larandemal: [
					{
						titel: 'Från transistor till AI',
						mal: 'Beskriva digitalteknikens viktigaste utvecklingssteg från transistorn till internet och AI.',
					},
					{
						titel: 'Digitala teknikskiften',
						mal: 'Ge exempel på hur digitala teknikskiften har förändrat branscher och vardagsliv.',
					},
				],
			},
			{
				titel: 'Framtidens teknik',
				larandemal: [
					{
						titel: 'Att bedöma framtidens teknik',
						mal: 'Använda historiska teknikskiften för att resonera om hur dagens nya teknik kan utvecklas och påverka samhället.',
					},
				],
			},
		],
	},
	{
		nr: 2,
		titel: 'Att lösa tekniska problem',
		moduler: [
			{
				titel: 'Vad är ett tekniskt problem?',
				larandemal: [
					{
						titel: 'Tekniska problem',
						mal: 'Förklara vad som kännetecknar ett tekniskt problem och skilja mellan behov, problem och lösning.',
					},
					{
						titel: 'Problemformulering',
						mal: 'Formulera ett tekniskt problem med funktion, krav och begränsningar.',
					},
				],
			},
			{
				titel: 'Problemlösningsstrategier',
				larandemal: [
					{
						titel: 'Systematisk problemlösning',
						mal: 'Beskriva och tillämpa en systematisk problemlösningsprocess från problem till testad lösning.',
					},
					{
						titel: 'Nedbrytning i delproblem',
						mal: 'Bryta ned ett sammansatt tekniskt problem i delproblem och lösa dem var för sig.',
					},
					{
						titel: 'Val av strategi',
						mal: 'Välja problemlösningsstrategi utifrån problemets karaktär och motivera valet.',
					},
				],
			},
			{
				titel: 'Testning och utvärdering',
				larandemal: [
					{
						titel: 'Att testa mot krav',
						mal: 'Planera och genomföra ett test av en teknisk lösning mot uppställda krav.',
					},
					{
						titel: 'Utvärdering ur flera aspekter',
						mal: 'Utvärdera en teknisk lösning utifrån funktion, kostnad, säkerhet och hållbar utveckling.',
					},
					{
						titel: 'Från testresultat till förbättring',
						mal: 'Dra slutsatser av testresultat och föreslå konkreta förbättringar av lösningen.',
					},
				],
			},
		],
	},
	{
		nr: 3,
		titel: 'Teknikutvecklingsprocessen',
		moduler: [
			{
				titel: 'Teknikutvecklingsprocessen',
				larandemal: [
					{
						titel: 'Processens faser',
						mal: 'Beskriva teknikutvecklingsprocessens delar från idé till återvinning och förklara hur de hänger samman.',
						uppslag: 2,
					},
					{
						titel: 'Iteration',
						mal: 'Förklara varför teknikutveckling är iterativ och ge exempel på hur testresultat leder tillbaka till tidigare faser.',
					},
				],
			},
			{
				titel: 'Kravspecifikation',
				larandemal: [
					{
						titel: 'Behov, krav och önskemål',
						mal: 'Skilja mellan behov, krav och önskemål och förklara varför mätbara krav behövs.',
					},
					{
						titel: 'Upprätta kravspecifikation',
						mal: 'Upprätta en kravspecifikation med mätbara krav för en produkt eller tjänst.',
					},
				],
			},
			{
				titel: 'Idégenerering',
				larandemal: [
					{
						titel: 'Idégenereringsmetoder',
						mal: 'Använda metoder för idégenerering för att ta fram flera olika lösningsförslag på ett tekniskt problem.',
					},
				],
			},
			{
				titel: 'Konceptutveckling',
				larandemal: [
					{
						titel: 'Från idé till koncept',
						mal: 'Utveckla en idé till ett koncept som beskriver funktion, utformning och tänkt användning.',
					},
					{
						titel: 'Konceptval',
						mal: 'Jämföra koncept med en viktad beslutsmatris och välja koncept med motivering.',
					},
				],
			},
			{
				titel: 'Prototyper',
				larandemal: [
					{
						titel: 'Prototypers roll',
						mal: 'Förklara vad prototyper används till och skilja mellan olika typer av prototyper.',
					},
					{
						titel: 'Bygga och testa prototyp',
						mal: 'Bygga en enkel prototyp och använda den för att testa och förbättra ett koncept.',
					},
				],
			},
			{
				titel: 'Produktens livscykel',
				larandemal: [
					{
						titel: 'Livscykelns faser',
						mal: 'Beskriva en produkts livscykel från råvara till återvinning och koppla miljöpåverkan till livscykelns faser.',
					},
					{
						titel: 'Design för livscykeln',
						mal: 'Förklara hur konstruktionsval påverkar produktens livslängd, underhåll och återvinning.',
					},
				],
			},
		],
	},
	{
		nr: 4,
		titel: 'Skiss, ritteknik och CAD',
		moduler: [
			{
				titel: 'Skisser',
				larandemal: [
					{
						titel: 'Idéskisser',
						mal: 'Skissa tekniska idéer frihand så att form och funktion framgår.',
					},
					{
						titel: 'Volymskisser',
						mal: 'Skissa föremål i isometrisk vy så att proportioner och tredimensionell form framgår.',
					},
				],
			},
			{
				titel: 'Ritningar',
				larandemal: [
					{
						titel: 'Vyer och projektion',
						mal: 'Rita ett föremål i tre vyer och förklara hur vyerna placeras.',
					},
					{
						titel: 'Ritningens språk',
						mal: 'Tolka linjetyper, skala och ritningshuvud på en teknisk ritning.',
					},
				],
			},
			{
				titel: 'Måttsättning',
				larandemal: [
					{
						titel: 'Måttsätta ritningar',
						mal: 'Måttsätta en enkel ritning enligt gällande standard.',
					},
					{
						titel: 'Toleranser',
						mal: 'Förklara varför toleranser behövs och tolka toleransangivelser på en ritning.',
					},
				],
			},
			{
				titel: 'CAD',
				larandemal: [
					{
						titel: 'CAD och parametrisk modellering',
						mal: 'Förklara vad CAD är och hur parametrisk modellering bygger på skisser, mått och villkor.',
					},
					{
						titel: 'Modellera en detalj',
						mal: 'Skapa en 3D-modell av en enkel detalj i ett CAD-program.',
						uppslag: 2,
					},
					{
						titel: 'Sammanställningar',
						mal: 'Sätta samman flera detaljer till en sammanställning i CAD och förklara hur delarna förhåller sig till varandra.',
					},
				],
			},
			{
				titel: 'Ritningar och modeller',
				larandemal: [
					{
						titel: 'Ritning ur modell',
						mal: 'Ta fram en måttsatt ritning ur en 3D-modell.',
					},
					{
						titel: 'Presentera teknik',
						mal: 'Välja lämplig form för att dokumentera och presentera en teknisk lösning för en given mottagare, muntligt och skriftligt med digitala medier.',
					},
				],
			},
		],
	},
	{
		nr: 5,
		titel: 'Material och deras egenskaper',
		moduler: [
			{
				titel: 'Materialgrupper',
				larandemal: [
					{
						titel: 'Materialens huvudgrupper',
						mal: 'Klassificera material i huvudgrupperna metaller, polymerer, keramer, kompositer och träbaserade material samt ge exempel på användningsområden.',
						uppslag: 2,
					},
				],
			},
			{
				titel: 'Materialegenskaper',
				larandemal: [
					{
						titel: 'Mekaniska egenskaper',
						mal: 'Förklara centrala mekaniska egenskaper som hållfasthet, styvhet, hårdhet och seghet samt ge exempel på när de är avgörande.',
					},
					{
						titel: 'Fysikaliska och kemiska egenskaper',
						mal: 'Förklara egenskaper som densitet, ledningsförmåga och korrosionsbeständighet samt ge exempel på när de är avgörande.',
					},
					{
						titel: 'Materialdata',
						mal: 'Tolka materialdata ur tabeller och datablad och jämföra material utifrån givna egenskaper.',
					},
				],
			},
			{
				titel: 'Materialval',
				larandemal: [
					{
						titel: 'Välja material',
						mal: 'Välja material till en given konstruktion utifrån krav och motivera valet som en avvägning mellan egenskaper, kostnad och hållbarhet.',
					},
				],
			},
			{
				titel: 'Tillverkning och material',
				larandemal: [
					{
						titel: 'Tillverkningsmetoder',
						mal: 'Beskriva vanliga tillverkningsmetoder och koppla dem till lämpliga materialgrupper.',
						uppslag: 2,
					},
					{
						titel: 'Tillverkningsanpassning',
						mal: 'Förklara hur valet av material och tillverkningsmetod påverkar en detaljs utformning och kostnad.',
					},
				],
			},
			{
				titel: 'Material i ett livscykelperspektiv',
				larandemal: [
					{
						titel: 'Materialets livscykel',
						mal: 'Bedöma ett materials miljöpåverkan genom livscykeln från utvinning till återvinning.',
					},
					{
						titel: 'Återvinning och materialval',
						mal: 'Förklara skillnaden mellan återanvändning, materialåtervinning och energiåtervinning samt hur materialvalet påverkar återvinningsbarheten.',
					},
				],
			},
		],
	},
	{
		nr: 6,
		titel: 'Mekanik och konstruktion',
		moduler: [
			{
				titel: 'Krafter',
				larandemal: [
					{
						titel: 'Kraftbegreppet',
						mal: 'Beskriva en kraft med storlek, riktning och angreppspunkt samt rita krafter som vektorer.',
					},
					{
						titel: 'Kraftresultanter',
						mal: 'Bestämma resultanten av flera krafter grafiskt och genom beräkning med komposanter.',
					},
					{
						titel: 'Friläggning',
						mal: 'Frilägga en enkel konstruktion och identifiera de krafter som verkar på den.',
					},
				],
			},
			{
				titel: 'Moment',
				larandemal: [
					{
						titel: 'Momentbegreppet',
						mal: 'Förklara vad ett moment är och beräkna moment kring en punkt.',
					},
					{
						titel: 'Hävarmsprincipen',
						mal: 'Använda hävarmsprincipen för att förklara och beräkna utväxling i enkla maskiner och verktyg.',
					},
				],
			},
			{
				titel: 'Jämvikt',
				larandemal: [
					{
						titel: 'Jämviktsvillkoren',
						mal: 'Formulera jämviktsvillkoren och använda dem för att beräkna okända krafter i enkla fall.',
					},
					{
						titel: 'Stödreaktioner',
						mal: 'Beräkna stödreaktioner för en enkelt belastad balk.',
					},
				],
			},
			{
				titel: 'Hållfasthet',
				larandemal: [
					{
						titel: 'Belastningstyper',
						mal: 'Identifiera drag, tryck, böjning, skjuvning, vridning och knäckning i verkliga konstruktioner.',
					},
					{
						titel: 'Spänning och töjning',
						mal: 'Förklara begreppen spänning och töjning samt beräkna normalspänning i en belastad detalj.',
					},
					{
						titel: 'Dragprovet',
						mal: 'Tolka en dragprovkurva och avläsa elasticitetsmodul, sträckgräns och brottgräns.',
					},
				],
			},
			{
				titel: 'Konstruktion',
				larandemal: [
					{
						titel: 'Geometri och styvhet',
						mal: 'Förklara hur tvärsnitt och geometri påverkar en konstruktions styvhet och bärförmåga.',
					},
					{
						titel: 'Fackverk och kraftvägar',
						mal: 'Identifiera drag- och tryckbelastade delar i ett fackverk och förklara hur laster förs ned till stöden.',
					},
				],
			},
			{
				titel: 'Dimensionering',
				larandemal: [
					{
						titel: 'Säkerhetsfaktor och dimensionering',
						mal: 'Dimensionera en enkel konstruktionsdetalj mot en given belastning med hjälp av tillåten spänning och säkerhetsfaktor.',
						uppslag: 2,
					},
					{
						titel: 'Rimlighetsbedömning',
						mal: 'Bedöma beräkningsresultats rimlighet med överslagsräkning och enhetskontroll.',
					},
				],
			},
		],
	},
	{
		nr: 7,
		titel: 'Mätteknik och dataanalys',
		moduler: [
			{
				titel: 'Storheter och enheter',
				larandemal: [
					{
						titel: 'SI-systemet',
						mal: 'Använda SI-systemets storheter, enheter och prefix samt genomföra enhetsomvandlingar.',
					},
				],
			},
			{
				titel: 'Mätinstrument',
				larandemal: [
					{
						titel: 'Mäta med rätt instrument',
						mal: 'Välja lämpligt mätinstrument för en given mätuppgift och använda det korrekt.',
						uppslag: 2,
					},
				],
			},
			{
				titel: 'Mätfel',
				larandemal: [
					{
						titel: 'Mätosäkerhet',
						mal: 'Skilja mellan systematiska och slumpmässiga mätfel samt ange mätvärden med rimligt antal värdesiffror.',
					},
				],
			},
			{
				titel: 'Datainsamling',
				larandemal: [
					{
						titel: 'Planera och genomföra mätningar',
						mal: 'Planera och genomföra en mätserie med strukturerad dokumentation, manuellt eller med digital datainsamling.',
					},
				],
			},
			{
				titel: 'Dataanalys',
				larandemal: [
					{
						titel: 'Sammanställa mätdata',
						mal: 'Sammanställa mätdata i tabeller och diagram samt beräkna medelvärde och spridning.',
					},
					{
						titel: 'Tolka mätdata',
						mal: 'Tolka samband i mätdata, anpassa en enkel modell till data och dra slutsatser med hänsyn till mätosäkerheten.',
					},
				],
			},
		],
	},
	{
		nr: 8,
		titel: 'Modellering och simulering',
		moduler: [
			{
				titel: 'Modeller',
				larandemal: [
					{
						titel: 'Modellbegreppet',
						mal: 'Förklara vad en modell är, varför modeller används och vilka begränsningar de har.',
					},
					{
						titel: 'Välja modelltyp',
						mal: 'Skilja mellan fysiska, matematiska och digitala modeller och välja modelltyp för ett givet syfte.',
					},
				],
			},
			{
				titel: 'Digital modellering',
				larandemal: [
					{
						titel: 'Bygga en digital modell',
						mal: 'Bygga en enkel digital modell av ett tekniskt förlopp i kalkylprogram eller Python.',
						uppslag: 2,
					},
				],
			},
			{
				titel: 'Simulering',
				larandemal: [
					{
						titel: 'Simuleringens princip',
						mal: 'Förklara vad simulering är och när simulering är att föredra framför fysisk provning.',
					},
					{
						titel: 'Genomföra en simulering',
						mal: 'Genomföra en enkel simulering, variera parametrar och tolka resultatet.',
					},
				],
			},
			{
				titel: 'Verifiering',
				larandemal: [
					{
						titel: 'Verifiering och validering',
						mal: 'Förklara skillnaden mellan verifiering och validering samt jämföra modellresultat med mätningar.',
					},
				],
			},
		],
	},
	{
		nr: 9,
		titel: 'IT-system',
		moduler: [
			{
				titel: 'IT-system',
				larandemal: [
					{
						titel: 'IT-systemets delar',
						mal: 'Beskriva ett IT-systems uppbyggnad med hårdvara, mjukvara, data, nätverk och användare samt ge exempel på IT-systems roll i teknikutveckling.',
					},
				],
			},
			{
				titel: 'Datorer',
				larandemal: [
					{
						titel: 'Datorns uppbyggnad',
						mal: 'Beskriva datorns huvuddelar och förklara hur de samverkar när ett program körs.',
					},
					{
						titel: 'Digital representation',
						mal: 'Förklara hur tal, text och bilder representeras binärt.',
					},
				],
			},
			{
				titel: 'Nätverk',
				larandemal: [
					{
						titel: 'Nätverkets delar',
						mal: 'Beskriva hur lokala nätverk är uppbyggda och hur data tar sig mellan enheter.',
					},
				],
			},
			{
				titel: 'Internet',
				larandemal: [
					{
						titel: 'Så fungerar internet',
						mal: 'Förklara hur internet fungerar med IP-adresser, DNS och paketförmedling.',
					},
				],
			},
			{
				titel: 'Digitalisering',
				larandemal: [
					{
						titel: 'Digitaliseringens betydelse',
						mal: 'Förklara digitaliseringens betydelse för produktion, kommunikation och människans livsmiljö.',
					},
					{
						titel: 'Uppkopplade system',
						mal: 'Beskriva hur uppkopplade enheter och molntjänster används i tekniska system och produktion.',
					},
				],
			},
		],
	},
	{
		nr: 10,
		titel: 'Programmering',
		moduler: [
			{
				titel: 'Python',
				larandemal: [
					{
						titel: 'Första programmet',
						mal: 'Skriva, köra och felsöka ett enkelt Python-program med utskrift och inmatning.',
					},
				],
			},
			{
				titel: 'Variabler',
				larandemal: [
					{
						titel: 'Variabler och datatyper',
						mal: 'Använda variabler och grundläggande datatyper för att utföra beräkningar i program.',
					},
				],
			},
			{
				titel: 'Villkor',
				larandemal: [
					{
						titel: 'Villkorssatser',
						mal: 'Skriva program som fattar beslut med villkorssatser och logiska uttryck.',
					},
				],
			},
			{
				titel: 'Loopar',
				larandemal: [
					{
						titel: 'for och while',
						mal: 'Använda for- och while-loopar för att upprepa beräkningar i program.',
					},
					{
						titel: 'Listor',
						mal: 'Använda listor för att lagra och bearbeta data i program.',
					},
				],
			},
			{
				titel: 'Funktioner',
				larandemal: [
					{
						titel: 'Funktioner',
						mal: 'Skriva och använda funktioner med parametrar och returvärden för att strukturera programkod.',
					},
				],
			},
			{
				titel: 'Problemlösning',
				larandemal: [
					{
						titel: 'Från problem till program',
						mal: 'Bryta ned ett tekniskt problem i delsteg och implementera lösningen som ett strukturerat Python-program.',
						uppslag: 2,
					},
					{
						titel: 'Testa och felsöka',
						mal: 'Testa ett program systematiskt samt lokalisera och rätta fel i programkod.',
					},
				],
			},
		],
	},
	{
		nr: 11,
		titel: 'Projekt och entreprenörskap',
		moduler: [
			{
				titel: 'Projektarbete',
				larandemal: [
					{
						titel: 'Projektformen',
						mal: 'Förklara vad som kännetecknar ett projekt samt beskriva vanliga faser och roller i tekniska projekt.',
					},
				],
			},
			{
				titel: 'Projektplanering',
				larandemal: [
					{
						titel: 'Projektplan',
						mal: 'Upprätta en projektplan med mål, aktiviteter, tidsplan och ansvarsfördelning.',
					},
					{
						titel: 'Projektrisker',
						mal: 'Identifiera risker i ett projekt och planera förebyggande åtgärder.',
					},
				],
			},
			{
				titel: 'Entreprenörskap',
				larandemal: [
					{
						titel: 'Entreprenörskapets villkor',
						mal: 'Förklara entreprenörskapets roll i teknikutveckling och vilka villkor som påverkar vägen från idé till produkt på en marknad.',
					},
					{
						titel: 'Affärsmodell',
						mal: 'Beskriva en affärsmodell för en teknisk produkt eller tjänst med kundnytta, kostnader och intäkter.',
					},
				],
			},
			{
				titel: 'Genomförande',
				larandemal: [
					{
						titel: 'Arbeta i projekt',
						mal: 'Genomföra ett tekniskt projekt enligt plan med möten, dokumentation och uppföljning av tid och resultat.',
						uppslag: 2,
					},
				],
			},
			{
				titel: 'Projektutvärdering',
				larandemal: [
					{
						titel: 'Utvärdera och presentera',
						mal: 'Utvärdera ett projekts resultat och arbetsprocess samt presentera projektet för en mottagare.',
					},
				],
			},
		],
	},
	{
		nr: 12,
		titel: 'Kvalitet, risk och arbetsmiljö',
		moduler: [
			{
				titel: 'Kvalitet',
				larandemal: [
					{
						titel: 'Kvalitet och kvalitetsarbete',
						mal: 'Förklara begreppet kvalitet och beskriva hur systematiskt kvalitetsarbete med ständiga förbättringar bedrivs.',
					},
					{
						titel: 'Kvalitetskontroll',
						mal: 'Kontrollmäta en detalj mot ställda krav och avgöra om den ska godkännas.',
					},
				],
			},
			{
				titel: 'Riskanalys',
				larandemal: [
					{
						titel: 'Genomföra riskanalys',
						mal: 'Genomföra en riskanalys med bedömning av sannolikhet och konsekvens samt föreslå riskreducerande åtgärder.',
					},
				],
			},
			{
				titel: 'Arbetsmiljö',
				larandemal: [
					{
						titel: 'Systematiskt arbetsmiljöarbete',
						mal: 'Beskriva hur systematiskt arbetsmiljöarbete bedrivs och identifiera arbetsmiljörisker i en teknisk miljö.',
					},
				],
			},
			{
				titel: 'Miljösäkring',
				larandemal: [
					{
						titel: 'Miljösäkring',
						mal: 'Förklara hur miljösäkring bedrivs och hur miljökrav påverkar tekniskt utvecklings- och produktionsarbete.',
					},
				],
			},
		],
	},
	{
		nr: 13,
		titel: 'Teknik, människa och samhälle',
		moduler: [
			{
				titel: 'Teknik och samhälle',
				larandemal: [
					{
						titel: 'Teknikens växelverkan med samhället',
						mal: 'Analysera hur teknik förändrar samhället och hur samhällets behov och värderingar styr teknikutvecklingen.',
					},
					{
						titel: 'Teknikerns roll',
						mal: 'Beskriva teknikerns roll och ansvar i utvecklingen av ett hållbart samhälle.',
					},
				],
			},
			{
				titel: 'Etik',
				larandemal: [
					{
						titel: 'Etik i teknikutveckling',
						mal: 'Identifiera etiska frågor i teknikutveckling och värdera tekniska lösningar utifrån etiska aspekter.',
					},
				],
			},
			{
				titel: 'Genus och normer',
				larandemal: [
					{
						titel: 'Normer i tekniken',
						mal: 'Förklara hur normer och genusstrukturer påverkar teknikens utformning, användning och tillgänglighet.',
					},
					{
						titel: 'Normkritisk granskning',
						mal: 'Granska en teknisk lösning ur ett norm- och tillgänglighetsperspektiv och föreslå förbättringar.',
					},
				],
			},
			{
				titel: 'Hållbar utveckling',
				larandemal: [
					{
						titel: 'Hållbarhet som konstruktionskrav',
						mal: 'Förklara hållbar utveckling ur miljömässigt, ekonomiskt och socialt perspektiv och använda perspektiven vid värdering av tekniska lösningar.',
					},
					{
						titel: 'Cirkulär ekonomi',
						mal: 'Förklara cirkulär ekonomi och nya affärsmodeller samt hur de förändrar teknikutveckling och produktion.',
					},
				],
			},
			{
				titel: 'Framtidens teknik',
				larandemal: [
					{
						titel: 'Möjligheter och risker',
						mal: 'Beskriva möjligheter och risker med framtidens teknik och värdera teknikens roll i att möta samhällsutmaningar.',
					},
				],
			},
		],
	},
];

export function slugify(text) {
	return text
		.toLowerCase()
		.replace(/å/g, 'a')
		.replace(/ä/g, 'a')
		.replace(/ö/g, 'o')
		.replace(/é/g, 'e')
		.replace(/ü/g, 'u')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function kapitelSlug(k) {
	return `${String(k.nr).padStart(2, '0')}-${slugify(k.titel)}`;
}

export function modulSlug(k, moduleIndex) {
	return `${k.nr}.${moduleIndex + 1}-${slugify(k.moduler[moduleIndex].titel)}`;
}

export function larandemalId(k, moduleIndex, lmIndex) {
	return `${k.nr}.${moduleIndex + 1}.${lmIndex + 1}`;
}

export function larandemalFilnamn(k, moduleIndex, lmIndex) {
	const lm = k.moduler[moduleIndex].larandemal[lmIndex];
	return `${larandemalId(k, moduleIndex, lmIndex)}-${slugify(lm.titel)}.md`;
}

// Platt lista över alla planerade lärandemål — används av validate.mjs för
// synkkontrollen mellan bokstrukturen och content/-mapparna.
export function allaLarandemal() {
	const result = [];
	for (const k of kapitel) {
		for (let i = 0; i < k.moduler.length; i++) {
			const m = k.moduler[i];
			for (let j = 0; j < m.larandemal.length; j++) {
				const lm = m.larandemal[j];
				result.push({
					id: larandemalId(k, i, j),
					chapter: k.nr,
					module: `${k.nr}.${i + 1}`,
					titel: lm.titel,
					mal: lm.mal,
					uppslag: lm.uppslag ?? 1,
					relPath: `${kapitelSlug(k)}/${modulSlug(k, i)}/${larandemalFilnamn(k, i, j)}`,
				});
			}
		}
	}
	return result;
}
