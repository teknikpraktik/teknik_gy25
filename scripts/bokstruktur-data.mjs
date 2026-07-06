// Maskinläsbar spegling av 06-bokstruktur.md:s kapitel- och modulnamn.
// Detta är EN AV FLERA representationer av samma beslut — 06-bokstruktur.md
// förblir den redaktionella källan (målskelett). Ändras kapitel-/modulnamn i 06
// ska denna fil uppdateras i samma steg, annars går skeleton/validate ur synk.
// Inga lärandemål listas här: de finns inte ännu (06 anger dem bara som
// "(Lärandemål)"-platshållare), och den här filen ska inte hitta på titlar.

export const kapitel = [
	{
		nr: 1,
		titel: 'Teknikhistoria',
		moduler: [
			'Teknik – människans problemlösning',
			'Teknikens utveckling genom historien',
			'Industriella revolutionerna',
			'Digitaliseringens framväxt',
			'Framtidens teknik',
		],
	},
	{
		nr: 2,
		titel: 'Att lösa tekniska problem',
		moduler: ['Vad är ett tekniskt problem?', 'Problemlösningsstrategier', 'Testning och utvärdering'],
	},
	{
		nr: 3,
		titel: 'Teknikutvecklingsprocessen',
		moduler: [
			'Teknikutvecklingsprocessen',
			'Kravspecifikation',
			'Idégenerering',
			'Konceptutveckling',
			'Prototyper',
			'Produktens livscykel',
		],
	},
	{
		nr: 4,
		titel: 'Skiss, ritteknik och CAD',
		moduler: ['Skisser', 'Ritningar', 'Måttsättning', 'CAD', 'Ritningar och modeller'],
	},
	{
		nr: 5,
		titel: 'Material och deras egenskaper',
		moduler: [
			'Materialgrupper',
			'Materialegenskaper',
			'Materialval',
			'Tillverkning och material',
			'Material i ett livscykelperspektiv',
		],
	},
	{
		nr: 6,
		titel: 'Mekanik och konstruktion',
		moduler: ['Krafter', 'Moment', 'Jämvikt', 'Hållfasthet', 'Konstruktion', 'Dimensionering'],
	},
	{
		nr: 7,
		titel: 'Mätteknik och dataanalys',
		moduler: ['Storheter och enheter', 'Mätinstrument', 'Mätfel', 'Datainsamling', 'Dataanalys'],
	},
	{
		nr: 8,
		titel: 'Modellering och simulering',
		moduler: ['Modeller', 'Digital modellering', 'Simulering', 'Verifiering'],
	},
	{
		nr: 9,
		titel: 'IT-system',
		moduler: ['IT-system', 'Datorer', 'Nätverk', 'Internet', 'Digitalisering'],
	},
	{
		nr: 10,
		titel: 'Programmering',
		moduler: ['Python', 'Variabler', 'Villkor', 'Loopar', 'Funktioner', 'Problemlösning'],
	},
	{
		nr: 11,
		titel: 'Projekt och entreprenörskap',
		moduler: ['Projektarbete', 'Projektplanering', 'Entreprenörskap', 'Genomförande', 'Projektutvärdering'],
	},
	{
		nr: 12,
		titel: 'Kvalitet, risk och arbetsmiljö',
		moduler: ['Kvalitet', 'Riskanalys', 'Arbetsmiljö', 'Miljösäkring'],
	},
	{
		nr: 13,
		titel: 'Teknik, människa och samhälle',
		moduler: ['Teknik och samhälle', 'Etik', 'Genus och normer', 'Hållbar utveckling', 'Framtidens teknik'],
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
	return `${k.nr}.${moduleIndex + 1}-${slugify(k.moduler[moduleIndex])}`;
}
