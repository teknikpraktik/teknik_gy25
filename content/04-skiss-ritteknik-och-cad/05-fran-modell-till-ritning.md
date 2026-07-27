---
id: "4.5"
chapter: 4
sectionNumber: 5
title: Från modell till ritning
status: fardig-forsta-version
levels: [niva1, niva2]
curriculumReferences:
  niva1: ["n1-16"]
  niva2: ["n2-13"]
learningGoals:
  - Ta fram en måttsatt ritning ur en 3D-modell.
abilities: [f5]
concepts_introduced: ["genererad vy", "revidering"]
concepts_used: ["ritning", "vy", "skala", "ritningshuvud", "måttsättning", "tolerans"]
figures: []
prerequisites: ["4.4"]
---

## Vyer ur modellen

Modellen av mobilhållaren är färdig, men den går inte att skicka till en verkstad. Det som ska ut därifrån är en ritning, och den tas ur modellen i stället för att ritas på nytt.

En *genererad vy* är en vy som programmet skapar ur modellen och som uppdateras när modellen ändras. Det som förr var timmar av omritning blir några klick, och just därför är det lätt att tro att ritningen också blir färdig av sig själv. Den blir den inte. Programmet vet hur föremålet ser ut men inte vad läsaren behöver veta.

Arbetsgången börjar med bladet. Välj format och en skala som gör att vyerna får plats med luft omkring sig, och kontrollera att projektionsmetoden är rätt inställd, eftersom många program har tredje vinkelns projektion förvald. En ritning som ser prydlig ut men är uppställd efter fel metod är inte otydlig, den är fel.

Därefter placeras huvudvyn, och valet av riktning är detsamma som vid handritning. För mobilhållaren är det sidovyn, där ryggens lutning syns. De övriga vyerna projiceras ut från huvudvyn och hamnar då automatiskt på rätt plats. Behövs den inre formen läggs ett snitt, och är någon detalj för liten för att måttsättas läggs en förstorad detaljvy med egen skala.

Sedan kommer det arbete som bara en människa kan göra. Centrumlinjer sätts ut i hål och symmetrier. Vyer som inte tillför något tas bort, och de är ofta fler än man tror, eftersom en extra vy inte kostar något att skapa och därför lätt blir kvar. Måttsättningen görs enligt samma regler som på en handritad ritning. Programmet kan hämta modellens mått automatiskt, men vilka mått som ska stå på ritningen och från vilken referenskant de ska räknas är ett beslut om funktion, inte om geometri. Ett automatiskt hämtat mått utgår från hur modellen råkade byggas, vilket sällan är detsamma som hur detaljen ska tillverkas och mätas.

Till sist fylls ritningshuvudet i med benämning, ritningsnummer, skala, datum och den som ritat, och toleranser läggs på de mått som behöver dem. Innan ritningen lämnas ifrån sig granskas den av någon annan än den som gjort den. Den som ritat ser vad hen menade, inte vad som står.

[BILD 4.5-1] Innehåll: Till vänster den färdiga 3D-modellen av mobilhållaren. Till höger det genererade ritningsbladet med tre vyer och ett snitt, med sex numrerade markeringar som visar arbetsgången: 1 bladformat och skala, 2 kontroll av projektionsmetod, 3 vald huvudvy, 4 snittvy, 5 centrumlinjer och måttsättning, 6 ifyllt ritningshuvud. Bildtext: "Vyerna kommer ur modellen. Vilka vyer och vilka mått som ska finnas är fortfarande en fråga för den som ritar."

## Revidering och gällande ritning

En ritning som lämnats ifrån sig lever vidare hos andra. Den ligger hos den som ska tillverka, hos den som ska köpa in och i skolans eller företagets arkiv. Ändras modellen efter det räcker det inte att spara om filen, eftersom alla som redan har ritningen fortsätter att arbeta efter den gamla.

En *revidering* är en dokumenterad ändring av en utgiven ritning. Ändringen får en beteckning, oftast en bokstav eller ett löpnummer, som skrivs in i ritningshuvudet. I en revisionstabell noteras beteckningen, datumet, vad som ändrats och vem som gjort det, och i vyn markeras det ändrade måttet så att läsaren hittar skillnaden utan att jämföra hela bladet. Utan den noteringen blir två ritningar med samma nummer olika, och ingen kan avgöra vilken som är den nya.

Bara en version gäller åt gången. Äldre versioner kastas inte, eftersom detaljer som redan tillverkats följer dem, men de märks som ersatta och arkiveras. Den som ska tillverka något behöver därför alltid kontrollera två saker på bladet: ritningsnumret och revisionsbeteckningen. En detalj som tillverkats efter rätt ritning men fel revision är lika oanvändbar som en som tillverkats efter fel ritning.

Modellen och ritningen måste dessutom följas åt. Vyerna uppdateras automatiskt när modellen ändras, vilket är bekvämt och samtidigt farligt. Ett mått som hämtats från en yta som flyttats kan bli kvar och peka på något annat än det gjorde förut, och en detaljvy kan hamna utanför den detalj den skulle visa. Efter varje ändring i modellen granskas därför ritningen om, mått för mått, innan den ges ut på nytt.

Detsamma gäller filerna. Ritningsnummer och revision hör hemma i filnamnet, och filerna sparas där alla hittar dem. Ett underlag som heter slutgiltig version tre ny är inte spårbart, och när två sådana filer ligger i olika mappar är frågan om vilken som gäller omöjlig att svara på.

[BILD 4.5-2] Innehåll: Samma ritningsvy av mobilhållaren visad två gånger, före och efter en ändring där kabelspårets bredd gått från 12 till 14 millimeter. Det ändrade måttet är inringat i den högra vyn och märkt med revisionsbeteckningen B. Under vyerna revisionstabellen med kolumnerna beteckning, datum, ändring och signatur, ifylld med två rader. Bildtext: "Revisionen talar om vad som ändrats och när. Ritningsnumret säger vilken detalj det gäller, revisionen vilken version."

## Instuderingsfrågor

1. Vad är en genererad vy?
2. Varför blir ritningen inte färdig av sig själv när vyerna hämtas ur modellen?
3. Varför måste projektionsmetoden kontrolleras innan vyerna placeras?
4. Hur väljs huvudvyn när en ritning tas ur en modell?
5. Varför blir det lätt för många vyer på en genererad ritning?
6. Programmet kan hämta modellens mått automatiskt. Varför räcker inte det?
7. Varför granskas en ritning av någon annan än den som gjort den?
8. Vad är en revidering, och vad ska noteras vid varje sådan?
9. Varför sparas gamla versioner av en ritning i stället för att kastas?
10. Vilka två uppgifter på ritningen måste den som ska tillverka en detalj kontrollera, och varför räcker inte den ena?
11. Vilken risk finns med att vyerna uppdateras automatiskt när modellen ändras?
12. Varför ska ritningsnummer och revision finnas i filnamnet?

## Övningar

1. **Ta ut en ritning.** Utgå från en CAD-modell du gjort själv. Skapa ett ritningsblad, ställ in rätt projektionsmetod och en lämplig skala, placera huvudvyn och de vyer som behövs, sätt ut centrumlinjer och måttsätt ritningen med basmåttsättning. Fyll i ritningshuvudet fullständigt och redovisa det färdiga bladet.

2. **Rensa bland vyerna.** Generera medvetet fler vyer än som behövs av samma modell, minst fem stycken inklusive ett snitt och en detaljvy. Gå sedan igenom bladet och ta bort varje vy som inte tillför något. Skriv för varje borttagen vy vilken information som redan fanns någon annanstans, och motivera de vyer du behöll.

3. **Ändra och revidera.** Ändra ett mått i din modell, till exempel en bredd eller en håldiameter. Uppdatera ritningen och gå igenom varje mått för att hitta sådant som blivit fel eller pekar på fel yta. Ge ut ritningen på nytt med revisionsbeteckning, ifylld revisionstabell och det ändrade måttet markerat i vyn.

4. **Vilken ritning gäller?** Ta fram två versioner av samma ritning, din egen före och efter revideringen, och byt med en klasskamrat utan att säga vilken som är nyast. Låt klasskamraten avgöra vilken som gäller enbart utifrån vad som står på bladen, och skriv ner vilka uppgifter som avgjorde saken. Om frågan inte gick att besvara, komplettera bladen tills den gör det.
