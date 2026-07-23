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
// takt med att kapitel migreras (flytta kapitelnummer till migreradeKapitel).

// Kapitel vars innehållsmodell räknas som migrerad. Ett kapitel räknas som
// migrerat först när ALLA dess avsnitt följer referensstandarden (03; 1.1). I ett
// migrerat kapitel är utfasade rubriker och gamla mönster aktiva fel, inte skuld.
//
// Inget kapitel är formellt migrerat än. migreradeKapitel flippas per kapitel
// efter genomläsning och bekräftad full standardkonformitet (se
// produktionslogg.md för respektive beslut). Så länge settet är tomt behandlas
// varje kapitels utfasade rubriker som förväntad migreringsskuld — utom när ett
// kapitel läggs till här, då de blir aktiva fel (säkerhetsgrind: en osann
// migreringsflagga döljer aldrig avvikelser).
export const migreradeKapitel = new Set();

// Låsta kapitel — redigeringsskydd (redaktionellt beslut 2026-07-23).
// Ett kapitel i detta set är låst för redigering av Claude Code: filer under
// kapitlets mapp (content/NN-...) får läsas men ALDRIG ändras (CLAUDE.md, "Låsta
// kapitel"). Validate har en vakt som ger aktivt fel om någon fil under ett låst
// kapitels mapp skiljer sig från HEAD (oincheckad ändring), så en oavsiktlig
// redigering fångas innan den committas. Låset lyfts bara på projektägarens
// uttryckliga begäran — ta då bort kapitelnumret här.
//
// Inget kapitel är låst just nu. Kapitel 2 (Att lösa tekniska problem) låstes
// 2026-07-23 sedan det reviderats klart, och låstes upp igen 2026-07-23 på
// projektägarens uttryckliga begäran för en översyn av instuderingsfrågorna.
// Lås ett kapitel genom att lägga till dess nummer i settet.
export const lastaKapitel = new Set([]);

// Kategorietiketter för grupperingen i validate-utdata.
// KAP1_MAPP (kapitel 1-mappen ej omdöpt) är borttagen 2026-07-22: mappen
// content/01-teknik-och-teknikutveckling har döpts om till 01-teknikens-grunder,
// så den skulden är åtgärdad.
export const strukturskuldKategorier = {
	PROJEKTUPPGIFTER: 'Utfasade projektuppgiftsfiler kvar i content/ (NN-projektuppgifter.md saknas i 06)',
	OVNINGSRUBRIK: 'Utfasad övningsrubrik "Praktiska uppgifter" i ej migrerat kapitel (migreras till "Övningar")',
};

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
