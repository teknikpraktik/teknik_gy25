# Dokumentnamn

09-kvalitetssakring.md

---

# Kvalitetssäkring

Detta dokument beskriver hur kvaliteten på läroboken ska säkerställas under utvecklingen.

Varje avsnitt och kapitel ska granskas mot kriterierna i detta dokument innan de betraktas som färdiga.

Kvalitetssäkring är en kontinuerlig process och genomförs efter varje större förändring.

---

# Kvalitetsnivåer

Granskning sker på tre nivåer.

1. Avsnitt
2. Kapitel
3. Hela boken

---

# Granskning av avsnitt

## Innehåll

□ Avsnittets lärandemål (`learningGoals`) är tydliga och mätbara.

□ Avsnittet behandlar ett sammanhängande delområde; ett avsnitt med flera delavsnitt (H3) har naturlig progression mellan dem.

□ All nödvändig teori finns.

□ Ingen onödig teori finns.

□ Inga faktafel finns.

□ Alla begrepp används korrekt.

□ Alla formler är korrekta.

□ Alla enheter är korrekta.

---

## Pedagogik

□ Stoffet presenteras i naturlig ordning.

□ Svårighetsgraden är rimlig.

□ Eleven behöver inte kunna något som ännu inte introducerats.

□ Ett konkret exempel används när det förbättrar förståelsen.

□ Praktiskt moment finns när det känns naturligt.

□ Samhällsperspektiv utgår från konkreta tekniska lösningar (10, "Teknik före samhälle").

□ Personnamn förekommer endast där de behövs för förståelsen (05, "Personnamn").

---

## Bilder

□ Bilder som undervisar (förklarar samband, visualiserar system, visar processer eller jämför lösningar) finns i varje större avsnitt. Inga dekorationsbilder.

□ Varje bild är specificerad som platshållare i formatet `[BILD X.Y-N]` med Innehåll (vad bilden ska visa och varför) och färdigformulerad Bildtext (03, "Bilder").

□ Bild och text använder samma exempel.

□ Där en bild övertagit informationsbärande har motsvarande prosa kortats — ingen bild dubblerar texten.

---

## Instuderingsfrågor och övningar

□ Avsnittet följer mönstret löptext, instuderingsfrågor, övningar (03, redaktionellt beslut 2026-07-22).

□ Avsnittet har EN samlad sektion Instuderingsfrågor med 5–10 frågor.

□ Frågorna testar teknisk förståelse, inte läsförståelse: funktion, samband, begrepp, resonemang.

□ Inga formuleringar av typen "enligt texten", "i texten" eller "vad visar figuren".

□ Minst en fråga testar avsnittets begrepp ("Förklara med egna ord vad som menas med ...").

□ Frågorna kan besvaras med avsnittets innehåll men prövar förståelse av tekniken, inte minne av formuleringar.

□ Inga "vem/när/hur många"-frågor utom där person, tidpunkt eller antal är en del av ett lärandemål.

□ Inga frågor upprepar varandra, testar en oviktig detalj eller ligger utanför avsnittets lärandemål.

□ Avsnittet har EN samlad sektion Övningar med 2–10 övningar i tydlig progression: identifiera, analysera, jämföra, konstruera, förbättra, eget arbete.

□ Övningarna är autentiska och knutna till sådant eleven känner igen, inte instängda läroboksuppgifter.

□ Instuderingsfrågor och övningar är korrekt åtskilda: inga uppgifter som kräver att eleven räknar, ritar, programmerar, bygger, mäter eller testar ligger bland instuderingsfrågorna, och inga rena resonemangsfrågor bland övningarna.

□ Varje övning går att lösa med samband, metoder och begrepp som redan införts i eller före avsnittet, och har tillräckliga data.

□ Ingen formulering säger att boken mäter, testar eller examinerar något — uppgifter "låter eleven visa" (03, "Formuleringsregel").

□ Inga föråldrade uppgiftsrubriker används (Praktiska uppgifter, Projektuppgifter, Beräkningsuppgifter, Rituppgifter, CAD-uppgifter, Programmeringsuppgifter, Laborationer, Konstruktionsuppgifter, Tillämpningsuppgifter, Analysuppgifter, Tillämpningsproblem, Fördjupningsuppgifter, Kortare uppgifter, Projekt, Förstå/Utveckla/Utmana).

□ Inget synligt Begrepp-block ligger under avsnittet — begreppen behandlas i löptexten (03), definitionerna samlas i kapitlets begreppslista.

□ Begrepp är kursiverade första gången de introduceras, aldrig i fetstil, och definieras i prosa, inte i rutor (05, "Begreppsmarkering").

□ Terminologin följer `termlista.md` — ett ord per sak, vardagsord före fackmetafor.

---

## Länkar, självreferenser och numrering

□ Inga klickbara länkar förekommer i löptext, uppgiftsinstruktioner eller figurtext (12, "Länkar i elevtext").

□ Ordet "uppslag" förekommer inte som självreferens i elevtexten (05, "Självreferenser").

□ Synlig rubriknumrering har högst två nivåer: kapitel, avsnitt (12, "Rubriknumrering"). Delavsnitt (H3) är onumrerade.

---

## AI

□ AI används endast där det tillför verkligt värde.

□ AI används på ett realistiskt sätt.

---

## Språk

□ Texten känns mänskligt skriven.

□ Meningslängden varierar.

□ Onödiga upprepningar saknas.

□ AI-typiska formuleringar saknas.

□ Språket är sakligt.

---

## Helhetsbedömning

□ Eleven kan rimligen uppnå lärandemålet enbart med hjälp av materialet.

□ Avsnittet klarar det överordnade kriteriet åt båda hållen: självstudiebart utan lärare och kondenserat utan babbel (03, "Överordnat kriterium").

□ Kvaliteten motsvarar minst referensimplementationen 1.1 (`referensimplementation-avsnitt-1-1.md`, projektets kvalitetsreferens, fastställd 2026-07-22) i ton, kompressionsgrad, exempelanvändning, bildplatshållare, instuderingsfrågor och övningar. Referensimplementationen ändras endast efter uttryckligt redaktionellt beslut.

□ Om avsnittet har flera delavsnitt (H3): varje delavsnittstitel är tydligt skild från de andra och dubblerar inte avsnittets egen rubrik. Begrepp introduceras i rätt ordning över delavsnitten. Inga delavsnitt överlappar varandra eller ett senare kapitels huvudansvar. Ett avsnitt utan delavsnitt (en enda flödande text) är tillåtet och motiverat när delområdet inte har flera tydligt skilda delar.

---

# Granskning av kapitel

□ Kapitlets syfte uppfylls.

□ Avsnitten ligger i logisk ordning.

□ Kapitlet täcker sitt ansvar enligt innehållsmatrisen.

□ Kapitlet har en tydlig ämnesmässig avgränsning mot närliggande kapitel och dubblerar inte deras huvudansvar (03, "Kapitlens avgränsning").

□ Ett eventuellt syntesmål fungerar som syntes eller analysmodell, inte som en process som hör till ett senare kapitel.

□ Kapitelavslutningarna fungerar som syntes och övergång genom ämnesinnehållet, utan metatext om bokens disposition.

□ Exempel varierar.

□ Kapitlet känns jämnt i kvalitet.

## Kapitelavslutningar och helkapitelövningar

□ Kapitlet avslutas i ordningen Sammanfattning, Begrepp — två onumrerade avsnitt utan lärandemål (03).

□ Sammanfattningen är kort löpande text, inte punktlista, och låter eleven repetera hela kapitlet på några minuter (riktmärke cirka 300 ord), utan nya fakta, begrepp eller instuderingsfrågor (03).

□ Begreppslistan innehåller kapitlets centrala begrepp med färdiga definitioner, max ungefär en mening per begrepp (03).

□ Begreppslistan är en uppslagsfunktion: eleven fyller inte i något, och inget begrepp möter eleven här för första gången (11).

□ Kapitlet har inga projektuppgiftsavsnitt och ingen projektbank.

□ Kapitlet har en eller två helkapitelövningar i de senare avsnittens övningar (03).

□ Varje helkapitelövning uppfyller de tre kraven: kräver stoff från flera avsnitt, resulterar i något dokumenterat, och har utskrivna utbyggnadssteg i formatet grunduppgift plus "Bygg ut: ..." så att eleven kan visa arbete på E-, C- och A-nivå.

□ Helkapitelövningarna har inte trängt ut sista avsnittens egna grundövningar.

□ Minst en helkapitelövning fungerar som egentlig syntesuppgift.

□ Varje helkapitelövning fungerar fristående (inga hänvisningar till "föregående avsnitt" eller "figuren ovan") och innebär ett verkligt producerande eller genomförande moment.

□ Övningarna över kapitlet varierar i form på ett sätt som är relevant för kapitlets ämnesinnehåll. Variationen är inte artificiellt konstruerad.

□ Facit ingår aldrig i elevmanuset eller på den publika elevwebben (12).

---

# Granskning av hela boken

## Kursplan

□ Allt centralt innehåll täcks.

□ Alla fem bedömda förmågor tränas återkommande.

□ Ingen punkt har glömts.

□ Normer, genusstrukturer och etiska värderingar (kapitel 13:s primära ansvar) vävs in som en synlig tråd i övriga kapitel, inte bara behandlade i kapitel 13 — se 07-kursplanetackning.md, "Observationer och svaga punkter att bevaka", punkt 3.

---

## Progression

□ Svårighetsgraden ökar naturligt.

□ Tidigare kunskaper används senare.

□ Begrepp utvecklas successivt.

---

## Variation

□ Exempel varierar.

□ Teknikområden varierar.

□ Uppgiftstyper varierar.

□ Praktiska moment varierar.

---

## Balans

□ Ingen del av boken dominerar.

□ Inget kapitel känns oproportionerligt stort.

□ Programmering, konstruktion, samhälle och projekt har rimlig balans.

---

## Språk

□ Terminologin är konsekvent.

□ Samma begrepp används konsekvent.

□ Författarrösten är enhetlig.

□ Inga kapitel känns skrivna av olika personer.

---

## Teknisk kvalitet

□ Alla fakta är aktuella.

□ Alla exempel är verkliga.

□ Alla formler fungerar.

□ Alla hänvisningar stämmer.

---

# Förlagsgranskning

Inför manusleverans kontrolleras dessutom:

□ Alla figurplatshållare är kompletta.

□ Alla tabeller är kompletta.

□ Alla referenser fungerar.

□ Alla kapitel är numrerade korrekt.

□ Inga arbetsanteckningar finns kvar.

□ Inga interna kommentarer finns kvar.

---

# Slutlig kvalitetsprincip

Ingen del av boken betraktas som färdig därför att den är skriven.

Den betraktas som färdig först när den har granskats mot samtliga relevanta kriterier i detta dokument.

Kvalitet skapas genom systematisk granskning, inte genom första utkastet.