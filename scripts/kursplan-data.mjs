// Maskinläsbar spegling av 07-kursplanetackning.md: centralt innehåll per nivå,
// kategorier och kapitelansvar. 07 förblir den redaktionella auktoriteten —
// denna fil läses av validate.mjs och begreppsregister-/rapportverktyg men
// skriver aldrig till 07 och avgör aldrig täckningsbeslut. Ändras 07 ska denna
// fil uppdateras i samma steg.
//
// Kursplanens ordagranna lydelser finns i "Skolverket Kursplan Teknik GY25.md"
// (projektroten). Textfälten nedan följer 07:s förkortade tabellydelser.
//
// Fält per punkt:
//   text    — punktens lydelse (förkortad där 07 förkortar)
//   kategori — kursplanens kategorirubrik (samma vokabulär som curriculum-taggar)
//   primar  — kapitel med primärt ansvar (● i 07)
//   berors  — kapitel där punkten berörs/vävs in (○ i 07); 'löpande' = löpande tråd

export const kursplanKategorier = [
	'Tekniska processer och system',
	'Problemlösning',
	'Begrepp, teorier och modeller',
	'Teknik, människa och samhälle',
	'Teknisk kommunikation',
];

export const niva1 = [
	{
		text: 'Teknikutvecklingsprocessens alla delar från idé och modell, produkt/tjänst till användning och återvinning',
		kategori: 'Tekniska processer och system',
		primar: 3,
		berors: [11],
	},
	{
		text: 'Tekniska egenskaper och användningsområden för olika material',
		kategori: 'Tekniska processer och system',
		primar: 5,
		berors: [6],
	},
	{
		text: 'IT-systems uppbyggnad och funktion samt deras roll i teknikutveckling',
		kategori: 'Tekniska processer och system',
		primar: 9,
		berors: [10],
	},
	{
		text: 'Strategier för att lösa tekniska problem',
		kategori: 'Problemlösning',
		primar: 2,
		berors: [11],
	},
	{
		text: 'Arbete i projektform med praktisk tillämpning och problemlösning inom något teknikområde',
		kategori: 'Problemlösning',
		primar: 11,
		berors: [2],
	},
	{
		text: 'Problemlösning med hjälp av programmering',
		kategori: 'Problemlösning',
		primar: 10,
		berors: [2],
	},
	{
		text: 'Skapande och strukturering av programkod',
		kategori: 'Problemlösning',
		primar: 10,
		berors: [],
	},
	{
		text: 'Testning och utvärdering av lösningar och resultat utifrån flera aspekter, däribland hållbar utveckling',
		kategori: 'Problemlösning',
		primar: 2,
		berors: [7, 8, 12],
	},
	{
		text: 'Begrepp, teorier och modeller, däribland för konstruktion',
		kategori: 'Begrepp, teorier och modeller',
		primar: 6,
		berors: [],
	},
	{
		text: 'Beräkningar och rimlighetsbedömningar som gäller konstruktion',
		kategori: 'Begrepp, teorier och modeller',
		primar: 6,
		berors: [7],
	},
	{
		text: 'Metoder för modellering och simulering, t.ex. prototyper samt testning och verifiering',
		kategori: 'Begrepp, teorier och modeller',
		primar: 8,
		berors: [6],
	},
	{
		text: 'Teknikens och teknikerns roll i ett hållbart samhälle, möjligheter och risker med framtidens teknik',
		kategori: 'Teknik, människa och samhälle',
		primar: 13,
		berors: [1],
	},
	{
		text: 'Tekniska framsteg som har haft betydelse för samhället',
		kategori: 'Teknik, människa och samhälle',
		primar: 1,
		berors: [13],
	},
	{
		text: 'Hur normer, genusstrukturer och etiska värderingar påverkar teknik, dess användning och tillgänglighet',
		kategori: 'Teknik, människa och samhälle',
		primar: 13,
		berors: ['löpande'],
	},
	{
		text: 'Kommunikation, dokumentation och presentation av teknik, muntligt och skriftligt, med digitala medier',
		kategori: 'Teknisk kommunikation',
		primar: 4,
		berors: [11],
	},
	{
		text: 'Användning av ritningar, skiss- och ritteknik samt tekniker för modeller med digitala och manuella verktyg',
		kategori: 'Teknisk kommunikation',
		primar: 4,
		berors: [8],
	},
];

export const niva2 = [
	{
		text: 'Tillämpning av teknikutvecklingsprocessen inom något teknikområde',
		kategori: 'Tekniska processer och system',
		primar: 11,
		berors: [3],
	},
	{
		text: 'Entreprenörskap och entreprenörskapets villkor i en innovativ och kreativ teknikutvecklingsprocess',
		kategori: 'Tekniska processer och system',
		primar: 11,
		berors: [13],
	},
	{
		text: 'Problemlösning och praktisk tillämpning inom något teknikområde (produktion, design, informationsteknik)',
		kategori: 'Problemlösning',
		primar: 11,
		berors: [2, 10],
	},
	{
		text: 'Metodik och arbetsformer i projekt',
		kategori: 'Problemlösning',
		primar: 11,
		berors: [],
	},
	{
		text: 'Tillämpning av programmering för problemlösning',
		kategori: 'Problemlösning',
		primar: 10,
		berors: [11],
	},
	{
		text: 'Systematiskt kvalitetsarbete: kvalitetssäkring, miljösäkring, riskanalys, arbetsmiljö',
		kategori: 'Problemlösning',
		primar: 12,
		berors: [],
	},
	{
		text: 'Tillämpning av begrepp/teorier/modeller för att konstruera, dimensionera, beräkna, bedöma rimlighet inom något teknikområde',
		kategori: 'Begrepp, teorier och modeller',
		primar: 6,
		berors: [7, 11],
	},
	{
		text: 'Modellering och simulering inom något teknikområde med relevanta metoder',
		kategori: 'Begrepp, teorier och modeller',
		primar: 8,
		berors: [7],
	},
	{
		text: 'Tekniska framsteg och teknikutveckling med fokus på framtidens teknik och hållbar utveckling (cirkulär ekonomi, nya affärsmodeller)',
		kategori: 'Teknik, människa och samhälle',
		primar: 13,
		berors: [1],
	},
	{
		text: 'Värdering av tekniska lösningar utifrån olika aspekter, däribland genus, etik och hållbar utveckling',
		kategori: 'Teknik, människa och samhälle',
		primar: 13,
		berors: ['löpande'],
	},
	{
		text: 'Digitaliseringens betydelse för produktion, kommunikation och människans livsmiljö',
		kategori: 'Teknik, människa och samhälle',
		primar: 9,
		berors: [13],
	},
	{
		text: 'Kommunikation, dokumentation och presentation inom något teknikområde',
		kategori: 'Teknisk kommunikation',
		primar: 4,
		berors: [11],
	},
	{
		text: 'Tolkning och framställning av digitala ritningar och modeller',
		kategori: 'Teknisk kommunikation',
		primar: 4,
		berors: [8],
	},
];

// Syftesmål utan explicit hem i centralt innehåll (07, egen tabell).
export const syftesmal = [
	{
		text: 'Mätning och dataanalys ("arbeta med mätning, testning, beräkning, modellering samt risk- och rimlighetsbedömning")',
		kategori: null, // ingår inte i centralt innehålls kategorier — taggas inte i curriculum
		primar: 7,
		berors: [6, 8],
	},
];
