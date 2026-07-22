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
//   id      — stabilt punkt-id (n1-01…, n2-01…, s-01); används som tagg i
//             lärandemålsfilernas curriculum.niva1/niva2 och får aldrig ändras
//   text    — punktens lydelse (förkortad där 07 förkortar)
//   kategori — kursplanens kategorirubrik
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
		id: "n1-01",
		text: 'Teknikutvecklingsprocessens alla delar från idé och modell, produkt/tjänst till användning och återvinning',
		kategori: 'Tekniska processer och system',
		primar: 3,
		berors: [11],
	},
	{
		id: "n1-02",
		text: 'Tekniska egenskaper och användningsområden för olika material',
		kategori: 'Tekniska processer och system',
		primar: 5,
		berors: [6],
	},
	{
		id: "n1-03",
		text: 'IT-systems uppbyggnad och funktion samt deras roll i teknikutveckling',
		kategori: 'Tekniska processer och system',
		primar: 9,
		berors: [10],
	},
	{
		id: "n1-04",
		text: 'Strategier för att lösa tekniska problem',
		kategori: 'Problemlösning',
		primar: 2,
		berors: [11],
	},
	{
		id: "n1-05",
		text: 'Arbete i projektform med praktisk tillämpning och problemlösning inom något teknikområde',
		kategori: 'Problemlösning',
		primar: 11,
		berors: [2],
	},
	{
		id: "n1-06",
		text: 'Problemlösning med hjälp av programmering',
		kategori: 'Problemlösning',
		primar: 10,
		berors: [2],
	},
	{
		id: "n1-07",
		text: 'Skapande och strukturering av programkod',
		kategori: 'Problemlösning',
		primar: 10,
		berors: [],
	},
	{
		id: "n1-08",
		text: 'Testning och utvärdering av lösningar och resultat utifrån flera aspekter, däribland hållbar utveckling',
		kategori: 'Problemlösning',
		primar: 3,
		berors: [7, 8, 12],
	},
	{
		id: "n1-09",
		text: 'Begrepp, teorier och modeller, däribland för konstruktion',
		kategori: 'Begrepp, teorier och modeller',
		primar: 6,
		berors: [],
	},
	{
		id: "n1-10",
		text: 'Beräkningar och rimlighetsbedömningar som gäller konstruktion',
		kategori: 'Begrepp, teorier och modeller',
		primar: 6,
		berors: [7],
	},
	{
		id: "n1-11",
		text: 'Metoder för modellering och simulering, t.ex. prototyper samt testning och verifiering',
		kategori: 'Begrepp, teorier och modeller',
		primar: 8,
		berors: [6],
	},
	{
		id: "n1-12",
		text: 'Teknikens och teknikerns roll i ett hållbart samhälle, möjligheter och risker med framtidens teknik',
		kategori: 'Teknik, människa och samhälle',
		primar: 13,
		berors: [1],
	},
	{
		id: "n1-13",
		text: 'Tekniska framsteg som har haft betydelse för samhället',
		kategori: 'Teknik, människa och samhälle',
		primar: 1,
		berors: [13],
	},
	{
		id: "n1-14",
		text: 'Hur normer, genusstrukturer och etiska värderingar påverkar teknik, dess användning och tillgänglighet',
		kategori: 'Teknik, människa och samhälle',
		primar: 13,
		berors: ['löpande'],
	},
	{
		id: "n1-15",
		text: 'Kommunikation, dokumentation och presentation av teknik, muntligt och skriftligt, med digitala medier',
		kategori: 'Teknisk kommunikation',
		primar: 4,
		berors: [11],
	},
	{
		id: "n1-16",
		text: 'Användning av ritningar, skiss- och ritteknik samt tekniker för modeller med digitala och manuella verktyg',
		kategori: 'Teknisk kommunikation',
		primar: 4,
		berors: [8],
	},
];

export const niva2 = [
	{
		id: "n2-01",
		text: 'Tillämpning av teknikutvecklingsprocessen inom något teknikområde',
		kategori: 'Tekniska processer och system',
		primar: 11,
		berors: [3],
	},
	{
		id: "n2-02",
		text: 'Entreprenörskap och entreprenörskapets villkor i en innovativ och kreativ teknikutvecklingsprocess',
		kategori: 'Tekniska processer och system',
		primar: 11,
		berors: [13],
	},
	{
		id: "n2-03",
		text: 'Problemlösning och praktisk tillämpning inom något teknikområde (produktion, design, informationsteknik)',
		kategori: 'Problemlösning',
		primar: 11,
		berors: [2, 10],
	},
	{
		id: "n2-04",
		text: 'Metodik och arbetsformer i projekt',
		kategori: 'Problemlösning',
		primar: 11,
		berors: [],
	},
	{
		id: "n2-05",
		text: 'Tillämpning av programmering för problemlösning',
		kategori: 'Problemlösning',
		primar: 10,
		berors: [11],
	},
	{
		id: "n2-06",
		text: 'Systematiskt kvalitetsarbete: kvalitetssäkring, miljösäkring, riskanalys, arbetsmiljö',
		kategori: 'Problemlösning',
		primar: 12,
		berors: [],
	},
	{
		id: "n2-07",
		text: 'Tillämpning av begrepp/teorier/modeller för att konstruera, dimensionera, beräkna, bedöma rimlighet inom något teknikområde',
		kategori: 'Begrepp, teorier och modeller',
		primar: 6,
		berors: [7, 11],
	},
	{
		id: "n2-08",
		text: 'Modellering och simulering inom något teknikområde med relevanta metoder',
		kategori: 'Begrepp, teorier och modeller',
		primar: 8,
		berors: [7],
	},
	{
		id: "n2-09",
		text: 'Tekniska framsteg och teknikutveckling med fokus på framtidens teknik och hållbar utveckling (cirkulär ekonomi, nya affärsmodeller)',
		kategori: 'Teknik, människa och samhälle',
		primar: 13,
		berors: [1],
	},
	{
		id: "n2-10",
		text: 'Värdering av tekniska lösningar utifrån olika aspekter, däribland genus, etik och hållbar utveckling',
		kategori: 'Teknik, människa och samhälle',
		primar: 13,
		berors: ['löpande'],
	},
	{
		id: "n2-11",
		text: 'Digitaliseringens betydelse för produktion, kommunikation och människans livsmiljö',
		kategori: 'Teknik, människa och samhälle',
		primar: 9,
		berors: [13],
	},
	{
		id: "n2-12",
		text: 'Kommunikation, dokumentation och presentation inom något teknikområde',
		kategori: 'Teknisk kommunikation',
		primar: 4,
		berors: [11],
	},
	{
		id: "n2-13",
		text: 'Tolkning och framställning av digitala ritningar och modeller',
		kategori: 'Teknisk kommunikation',
		primar: 4,
		berors: [8],
	},
];

// Syftesmål och syftesstoff utan explicit hem i centralt innehåll (07, egen tabell).
// Syftesmål/syftesstoff gäller båda nivåerna: taggarna s-01, s-02, s-03 är
// giltiga i såväl curriculum.niva1 som curriculum.niva2.
export const syftesmal = [
	{
		id: "s-01",
		text: 'Mätning och dataanalys ("arbeta med mätning, testning, beräkning, modellering samt risk- och rimlighetsbedömning")',
		kategori: null, // ingår inte i centralt innehålls kategorier
		primar: 7,
		berors: [6, 8],
	},
	{
		id: "s-02",
		text: 'Teknikbegreppet (ämnets ingress: teknik uppfyller "människors behov och önskemål" genom "produkter, processer, anläggningar och system"; behandlas i 1.1)',
		kategori: null,
		primar: 1,
		berors: [13],
	},
	{
		id: "s-03",
		text: 'Samspelet mellan teknik, naturvetenskap och matematik (ämnets tvärvetenskapliga karaktär, ingressen; behandlas i 1.1)',
		kategori: null,
		primar: 1,
		berors: [6, 7, 8],
	},
];

// Uppslagslista: punkt-id → punkt med nivåtillhörighet.
export function allaPunkter() {
	const map = new Map();
	for (const p of niva1) map.set(p.id, { ...p, niva: 'niva1' });
	for (const p of niva2) map.set(p.id, { ...p, niva: 'niva2' });
	for (const p of syftesmal) map.set(p.id, { ...p, niva: 'syftesmal' });
	return map;
}
