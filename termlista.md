# Termlista

Löpande termlista för terminologikonsekvens (05-forfattarmanual.md, "Terminologikonsekvens"): ett ord per sak genom hela boken, vardagsord före fackmetafor. Nya termval med tänkbara synonymer förs in här när de görs, med det valda ordet först.

| Vald term | Används inte | Kommentar |
|---|---|---|
| dragkedja | blixtlås | Vardagsord före fackmetafor. Fastställd i referensimplementationen 1.1 (2026-07-22). |
| bild | figur, illustration | I elevtext och platshållare (`[BILD X.Y-N]`). "Figur" var det tidigare produktionsordet. |
| teknisk lösning | — | Begrepp med huvudställe i 1.1. |
| Övningar | Praktiska uppgifter, Projektuppgifter | Enda tillåtna rubrik för avsnittets uppgiftssektion (03, "Avsnittets struktur"; 05, "Uppgiftsrubrik"). Låst 2026-07-22. `npm run validate` flaggar "Praktiska uppgifter" i content-filer (aktivt fel utom i den kända legacy-uppsättningen, som migreras per kapitel). |
| varv (i en loop) | iteration | Vardagsord före fackterm i kapitel 10. Begreppet *iteration* har sitt huvudställe i 3.1 och betyder där ett varv i utvecklingsarbetet. Att återanvända ordet för ett loopvarv skulle peka eleven mot fel definition, så programmeringskapitlet säger varv (2026-07-28). |
| funktion | — | Ordet bär två skilda betydelser i boken och kan inte undvikas i någondera. I 2.1 är funktionen vad en lösning ska göra för användaren; i 10.3 är den ett namngivet stycke kod. Huvudställena hålls isär i metadatan (`funktion` respektive `funktion (programmering)`), och 10.3 varnar uttryckligen för dubbelbetydelsen vid introduktionen. Samma lösning används för `parameter`, som i 8.1 är ett tal i en modell och i 10.3 en variabel i en funktion (2026-07-28). |
