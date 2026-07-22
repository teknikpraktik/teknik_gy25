// Migreringsstatus per kapitel + känd, förväntad migreringsskuld.
//
// Bakgrund (produktionslogg.md, redaktionellt beslut 2026-07-22): styrdokumenten
// och 06-bokstruktur.md är omskrivna till den nya modellen (avsnittsmönster
// löptext → Instuderingsfrågor → Övningar; kapitelavslutningar Sammanfattning +
// Begrepp; inga projektuppgiftsavsnitt). content/ och delar av tooling migreras
// däremot KAPITEL FÖR KAPITEL. Fram till dess uppstår avvikelser i validate som
// är väntade, inte nya buggar.
//
// Denna fil är den enda redigeringsytan för migreringsläget. validate.mjs läser
// den för att skilja förväntad migreringsskuld från aktiva fel. Uppdatera den i
// takt med att kapitel migreras (flytta kapitelnummer till migreradeKapitel, ta
// bort poster ur legacyOvningsrubrikFiler när respektive avsnitt fått rubriken
// "Övningar", osv.).

// Kapitel vars innehållsmodell räknas som migrerad. Ett kapitel räknas som
// migrerat först när ALLA dess avsnitt följer referensstandarden (03; 1.1). I ett
// migrerat kapitel är utfasade rubriker och gamla mönster aktiva fel, inte skuld.
//
// Inget kapitel är migrerat ännu. Kapitel 1 (Teknikens grunder) är påbörjat men
// inte klart: bara 1.1 är omskrivet till referensstandarden, medan 1.2 fortfarande
// bär rubriken "Praktiska uppgifter" och 1.3 saknar övningssektion. Kapitel 1 flyttas
// hit först när 1.1, 1.2 och 1.3 alla följer standarden (rättat 2026-07-22, se
// produktionslogg.md). Så länge settet är tomt behandlas varje kapitels utfasade
// rubriker som förväntad migreringsskuld — utom när ett kapitel läggs till här, då de
// blir aktiva fel (säkerhetsgrind: en osann migreringsflagga döljer aldrig avvikelser).
export const migreradeKapitel = new Set();

// Kategorietiketter för grupperingen i validate-utdata.
// KAP1_MAPP (kapitel 1-mappen ej omdöpt) är borttagen 2026-07-22: mappen
// content/01-teknik-och-teknikutveckling har döpts om till 01-teknikens-grunder,
// så den skulden är åtgärdad.
export const strukturskuldKategorier = {
	PROJEKTUPPGIFTER: 'Utfasade projektuppgiftsfiler kvar i content/ (NN-projektuppgifter.md saknas i 06)',
	OVNINGSRUBRIK: 'Utfasad övningsrubrik "Praktiska uppgifter" i ej migrerat kapitel (migreras till "Övningar")',
	BEGREPP_FORMAT: 'Gammalt begreppslisteformat (ifyllnadslista) i ej migrerat kapitel (migreras till ordlisteformatet)',
};

// Explicit register över avsnittsfiler i ej migrerade kapitel som ännu bär den
// utfasade rubriken "Praktiska uppgifter" i stället för "Övningar". Klassificeringen
// aktivt fel/skuld styrs av kapitlets migreringsstatus (migreradeKapitel), inte av
// detta register — en "Praktiska uppgifter"-rubrik i ett ej migrerat kapitel är alltid
// förväntad skuld, i ett migrerat kapitel alltid aktivt fel. Registret dokumenterar
// vilka konkreta filer som återstår och hålls ärligt av en hygienkontroll i validate
// (varnar för en post som inte längre bär rubriken, dvs. har migrerats utan att
// avregistreras). Ta bort posten när avsnittet fått rubriken "Övningar".
//
// Kapitel 1 hanteras numera via sin migreringsstatus, inte via detta register: 1.2
// har därför lyfts ut (rättat 2026-07-22). Att bara 1.1 är omskrivet är exakt varför
// kapitel 1 inte längre är migrerat (se migreradeKapitel).
export const legacyOvningsrubrikFiler = new Set([
	'06-mekanik-och-konstruktion/01-krafter.md',
	'06-mekanik-och-konstruktion/02-moment.md',
	'06-mekanik-och-konstruktion/03-jamvikt.md',
	'06-mekanik-och-konstruktion/04-hallfasthet.md',
	'06-mekanik-och-konstruktion/05-konstruktioner.md',
	'06-mekanik-och-konstruktion/06-dimensionering.md',
]);

// Begreppsövningsfiler (kapitelavslutningar) som ännu använder det gamla
// ifyllnadsformatet (punktlista med bara begrepp, utan definitioner) i stället
// för ordlisteformatet `**Begrepp:** Definition.` (03-bokens-arkitektur.md,
// "Begrepp"). Begreppslistans formatkontroll i validate hoppar över dessa och
// redovisar dem som förväntad migreringsskuld i stället för aktivt fel, eftersom
// de kräver nyskrivna definitioner som hör till kapitlets revidering. Ta bort
// posten när kapitlet fått definitioner i det nya formatet. Endast kapitel 6 har
// producerat innehåll som ännu inte reviderats; övriga ej producerade kapitels
// begreppsfiler är tomma skelett (status ej-paborjad) och kontrolleras inte.
export const legacyBegreppFiler = new Set([
	'06-mekanik-och-konstruktion/08-begrepp.md',
]);

// Klassificerar ett redan genererat valideringsfel som känd strukturell
// migreringsskuld och returnerar kategorietiketten, annars null. Signaturen är
// medvetet smal och förankrad i den konkreta skuldposten (de 13
// NN-projektuppgifter.md-filerna) så att ett nytt, äkta fel — även i ett ej
// migrerat kapitel — inte råkar sväljas som skuld.
export function klassificeraStrukturskuld(msg) {
	// De 13 NN-projektuppgifter.md-filerna finns kvar i content/ men saknas i 06.
	if (/\/\d{2}-projektuppgifter\.md: kapitelavslutning \(type uppgiftsbank\) finns inte i 06-bokstruktur\.md\.$/.test(msg)) {
		return strukturskuldKategorier.PROJEKTUPPGIFTER;
	}
	return null;
}
