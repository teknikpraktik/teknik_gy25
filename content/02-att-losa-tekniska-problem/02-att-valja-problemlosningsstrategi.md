---
id: "2.2"
chapter: 2
sectionNumber: 2
title: Att välja problemlösningsstrategi
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-04"]
  niva2: []
learningGoals:
  - Bedöma ett tekniskt problems karaktär utifrån om det går att överblicka, hur
    väl förstått det är och vad ett misslyckat försök kostar, för att välja och
    motivera en problemlösningsstrategi.
  - Bryta ned ett sammansatt tekniskt problem i delproblem och lösa dem var för
    sig.
  - Identifiera och tillämpa en befintlig, beprövad lösning på ett tekniskt
    problem.
  - Använda pröva-och-förbättra som strategi för att lösa ett tekniskt problem
    genom upprepade, dokumenterade försök.
  - Använda analys, beräkning, simulering och kontrollerade tester för att lösa
    ett tekniskt problem innan en dyr eller riskfylld fullskalig lösning
    genomförs.
abilities: [f2]
concepts_introduced: ["delproblem"]
concepts_used: ["teknik", "tekniskt problem", "krav", "funktion", "begränsning"]
figures: ["fig-2.2.1-a", "fig-2.2.2-a", "fig-2.2.3-a", "fig-2.2.4-a", "fig-2.2.5-a"]
prerequisites: ["2.1"]
---

## Bedöma problemets karaktär

Alla tekniska problem ska inte angripas likadant. Ett problem som är välkänt och billigt att pröva sig fram på kräver en annan ingång än ett problem som är dåligt förstått och dyrt att misslyckas med. Tre frågor avgör vilken strategi som passar.

### Går problemet att överblicka?

Den första frågan kommer före de andra två: går problemet att greppa i sin helhet, eller är det för stort och sammansatt för att överblickas på en gång? Ett problem som inte går att överblicka måste delas upp i mindre delar innan någon strategi väljs för dem; nästa avsnitt visar hur. Bara ett problem som går att greppa kan bedömas vidare med de två återstående frågorna.

### Hur väl förstått är problemet, och vad kostar ett misslyckande?

Den andra frågan: hur väl förstått är problemet? Ett välkänt problem har nästan alltid en beprövad lösning, i en standard, en handbok eller hos naturen, och då är det slöseri att uppfinna själv. Det gäller oavsett vad ett misslyckat försök skulle kosta, eftersom det inte finns någon anledning att experimentera fram ett svar som redan finns.

Den tredje frågan avgör bara när problemet inte är välkänt: vad kostar eller innebär ett misslyckat försök? Är det billigt, snabbt och ofarligt, till exempel för en app som kan testas på riktiga användare samma dag, passar det att pröva och förbättra. Är det dyrt, farligt eller svårt att göra om, som för en bro som bara byggs en gång, krävs i stället analys, beräkning och kontrollerade tester innan bygget.

[[figur:fig-2.2.1-a]]

### Motivera valet

Att pröva sig fram avfärdas ibland som fusk, som om bara beräkning vore riktig ingenjörskonst. Det stämmer inte: strategierna är likvärdiga verktyg, och rätt val avgörs av hur väl förstått problemet är och vad ett misslyckande kostar, inte av vilket som ser mest vetenskapligt ut. Det som skiljer ingenjören från gissaren är motiveringen: att kunna säga varför problemet bedöms som det gör, och vad som skulle få bedömningen att ändras.

## Dela upp problemet

En gräsmatta som klipper sig själv låter som ett enda problem, men när Husqvarna 1995 lanserade världens första robotgräsklippare hade ingenjörerna löst fem eller sex. Maskinen skulle klippa gräset, hålla sig inom arbetsområdet, undvika hinder, försörja sig med energi och tåla regn. Vart och ett av detta är ett eget tekniskt problem, med egen funktion, egna krav och egna möjliga lösningar.

### Överblick före allt annat

Innan frågorna om kostnad och kunskapsläge går att ställa måste problemet gå att greppa i sin helhet. Ett sammansatt problem som Husqvarnas är för stort för det: det svarar inte på "vad kostar ett misslyckat försök" utan på en helt annan fråga, är problemet över huvud taget möjligt att överblicka. Ett sådant problem bryts ned i **delproblem**: mindre problem som kan formuleras, lösas och testas var för sig. När delproblemen är formulerade kan varje del bedömas för sig utifrån hur väl förstådd den är och vad ett misslyckande skulle kosta.

[[figur:fig-2.2.2-a]]

### Bryt ned efter funktion

En bra nedbrytning följer vad lösningen ska göra, inte hur den råkar se ut. Att hålla sig inom arbetsområdet är ett delproblem oavsett om det löses med en nedgrävd slinga, satellitnavigering eller kamera, och den som formulerar delproblemet lösningsfritt kan byta lösning senare utan att resten av maskinen påverkas. Nedbrytningen fortsätter tills varje del är hanterbar: går delproblemet fortfarande inte att överblicka bryts det ned en gång till.

Nedbrytningen gör också arbetet delbart. När delproblemen är formulerade kan olika personer eller team lösa dem parallellt, och varje dellösning kan testas mot sina egna krav långt innan helheten är byggd. Det är så stora tekniska system blir möjliga att utveckla över huvud taget: ingen ingenjör förstår hela flygplanet, men var och en förstår sitt delproblem.

### Delarna måste passa ihop

Nedbrytningens risk sitter i skarvarna. År 1999 förlorade NASA rymdsonden Mars Climate Orbiter, sedan ett team räknat i engelska kraftenheter och ett annat i newton: dellösningarna möttes och styrde tillsammans in sonden för lågt i Mars atmosfär. Båda delarna fungerade; kopplingen mellan dem gjorde det inte. Den som bryter ned ett problem måste därför bestämma hur delarna ska hänga ihop och i vilka enheter, och testa även skarvarna, inte bara delarna.

## Återanvänd befintlig lösning

Ett problem som går att överblicka, direkt eller efter en nedbrytning, kan angripas med tre strategier. Den första gäller när lösningen redan finns.

En schweizisk ingenjör undersökte kardborrar som fastnat i hundens päls efter en jakttur, såg krokarna i mikroskop och tog patent på kardborrebandet 1955. Naturen hade redan löst ett [[begrepp:tekniskt problem]], ett föremål ska sitta fast men gå att lossa igen; hans insats var att känna igen lösningen och flytta den till tyg och plast, en av teknikens äldsta tricks.

[[figur:fig-2.2.3-a]]

### Tre källor till en beprövad lösning

En beprövad lösning hittas sällan genom att uppfinna den på nytt. Den finns oftast på ett av tre ställen. En standard samlar en lösning som hela branschen är överens om, till exempel gängmåtten på en skruv: ingen konstruktör uppfinner sitt eget gängsystem, alla slår upp det rätta i en standard. En handbok samlar beprövade lösningar för ett helt fackområde, färdiga att slå upp och tillämpa. Och naturen har genom evolutionen redan löst en stor mängd tekniska problem, som kardborrens fästproblem, årmiljoner innan någon ingenjör ställde samma fråga.

### Varför uppfinna om lösningen redan finns

Att uppfinna på nytt kostar tid, pengar och risk, utan att nödvändigtvis ge ett bättre resultat än det som redan är beprövat. Strategin att återanvända en befintlig lösning gäller så fort problemet är välkänt, oavsett vad ett misslyckat försök skulle kosta: när svaret redan finns är det ingen mening att experimentera fram det på nytt, och kostnaden spelar bara roll när svaret inte redan är känt. Insatsen ligger i stället i att känna igen att en känd lösning passar, och i att anpassa den till det nya sammanhanget, som när kardborrens krokar blev ett textilt band.

## Pröva och förbättra

När Thomas Edison sökte en glödtråd som lyste länge utan att brinna av var det [[begrepp:tekniskt problem]] han ställdes inför olöst av teorin. Hans laboratorium testade i stället tusentals material, från förkolnad bomullstråd till bambu. Ingen teori kunde peka ut svaret; det fick sökas försök för försök, med mätning och dokumentation som skilde metoden från rent gissande.

[[figur:fig-2.2.4-a]]

### Billiga försök bygger snabbast förståelse

Pröva och förbättra passar när ett misslyckat försök är billigt. En apputvecklare kan testa en idé på riktiga användare samma dag och backa i morgon om den inte fungerar. Raketföretaget SpaceX har satt strategin i system och flyger tidiga raketprototyper tills de går sönder, eftersom varje haveri ger data om vad som faktiskt brister, data som åratal av beräkning på papper inte kan ge på samma sätt. Ju billigare och snabbare ett försök är, desto mer förståelse köper varje runda.

### Från gissning till metod

Skillnaden mot att bara gissa är dokumentationen. Edisons laboratorium förde noggranna anteckningar om vilket material som testats, hur länge det höll och varför det gick sönder, så att nästa försök byggde på det förra i stället för att upprepa det. Utan anteckningar är varje försök en isolerad slump; med dem blir en lång rad misslyckanden till en metod som med säkerhet närmar sig svaret.

## Analysera innan du bygger

I april 1970 exploderade en syrgastank ombord på Apollo 13, halvvägs till månen. Besättningen tog skydd i månlandaren, byggd för två personer i två dygn men nu bebodd av tre i fyra. Koldioxiden steg: landarens runda filter mättades, och reservfiltren från kommandomodulen var fyrkantiga och passade inte i de runda uttagen. Markpersonalen i Houston fick ett [[begrepp:tekniskt problem]] med en brutal begränsning: lösningen fick bara byggas av sådant som redan fanns ombord.

Ett misslyckat försök hade kostat tre liv, och ingen visste i förväg exakt hur adaptern skulle behöva se ut. Det är precis den kombinationen, dyrt att misslyckas och dåligt förstått i förväg, som kräver den här strategin: analys, beräkning och kontrollerade tester innan lösningen genomförs i skarpt läge.

### Testa i det lilla innan du litar i det stora

Houston-teamet räknade ut vilket material som fanns tillgängligt ombord och skissade en adapter av plastpåsar, kartong, tejp och en slang från en tryckdräkt. Innan instruktionerna skickades till besättningen byggde teamet en likadan adapter på marken och kontrollerade att den faktiskt höll tätt. Först då lästes bygginstruktionen upp över radio, och koldioxidhalten sjönk inom en timme.

[[figur:fig-2.2.5-a]]

Det kontrollerade testet på marken var inte ett extra steg, det var själva poängen. En lösning som bara fungerar i teorin men aldrig prövats i något kontrollerat sammanhang är en gissning i finare kläder. Ju dyrare eller farligare det är att misslyckas i skarpt läge, desto viktigare är det att hitta ett sätt att pröva lösningen i förväg: i beräkningar, i en simulering, i en modell eller i en kopia byggd under kontrollerade former.

### Inte den enda systematiska strategin

Att analysera innan man bygger är inte det enda sättet att arbeta noggrant inom teknik. Även att pröva och förbättra eller att återanvända en befintlig lösning kan göras systematiskt eller slarvigt. Det som avgör om analysera-innan-du-bygger är rätt val är inte att den är mest seriös, utan att den passar problem där ett misslyckat försök i verkligheten är för dyrt eller farligt för att vara ett alternativ.

### Nästa steg: från strategi till lösning

När problemet är formulerat och en strategi vald börjar arbetet med att ta fram, testa och förbättra en teknisk lösning. Det behandlas i nästa kapitel.

## Instuderingsfrågor

1. Vilka tre frågor avgör vilken problemlösningsstrategi som passar ett tekniskt problem, och varför måste frågan om problemet går att överblicka besvaras före de andra två?
2. Varför gäller strategin återanvänd befintlig lösning oavsett kostnad, så fort problemet är välkänt?
3. Vad är det, enligt texten, som skiljer ingenjören från gissaren?
4. Förklara med egna ord vad ett delproblem är, och varför en nedbrytning ska följa vad lösningen ska göra i stället för hur den ser ut.
5. En robotdammsugare ska både hitta hem till laddstationen och undvika att köra i trappan. Bör de två funktionerna brytas ned som ett delproblem tillsammans eller som två separata delproblem? Motivera ditt val.
6. Vad menas med att nedbrytningens risk sitter i skarvarna, och vad måste den som bryter ned ett problem därför bestämma om delarnas gränssnitt? Använd Mars Climate Orbiter som exempel.
7. Vilka tre källor till en beprövad lösning tar texten upp? Förklara utifrån kardborrebandet vad den schweiziske ingenjörens egen insats bestod i, om naturen redan hade löst fästproblemet.
8. Beskriv strategin pröva och förbättra med Edisons glödtråd som exempel, och förklara varför den passar särskilt bra när ett misslyckat försök är billigt.
9. Vad skiljer ett dokumenterat försök från en isolerad slump, och vad är det som gör SpaceX sätt att testa raketer till pröva och förbättra snarare än gissande?
10. Varför krävde Apollo 13-problemet analys och kontrollerade tester snarare än att pröva sig fram i skarpt läge? Beskriv vad Houston-teamet gjorde på marken innan bygginstruktionen skickades upp, och förklara utifrån det vad som avgör när analysera-innan-du-bygger är rätt strategi.

## Praktiska uppgifter

1. **Leta upp den beprövade lösningen.** Här är tre små tekniska problem: en hylla ska fästas i väggen och bära tunga böcker, två plaströr ska skarvas så att skarven blir tät, och en affisch ska sitta uppe ett halvår utan att skada väggen. Ta för vart och ett reda på en befintlig, beprövad lösning och ange vilken av källorna standard, handbok eller naturen den kommer från. Redovisa vad du sökte på eller slog upp i, och skissa hur lösningen sitter fast eller tätar. Ange sist vilket av de tre problemen som var svårast att hitta ett färdigt svar på, och varför.

2. **Fem försök och en slutsats.** Genomför ett eget pröva-och-förbättra-arbete på ett litet konstruktionsproblem som läraren anger eller som du väljer själv, till exempel en pappersremsa som ska bära en mynthög, ett pappersflygplan som ska flyga så långt som möjligt eller en förpackning som ska skydda ett rått ägg vid ett fall. Genomför minst fem försök och för protokoll: vad du ändrade från förra försöket, vad som hände och vilken slutsats du drog. Redovisa protokollet som en tabell, och visa i en avslutande kommentar hur varje försök byggde på det föregående i stället för att upprepa det.

3. **Testa i det lilla först.** En cykeltillverkare vill veta hur en ny däckblandning slits, och överväger att låta hundra kunder cykla på däcken i sex månader. Bedöm problemet utifrån de tre frågorna och avgör om det är rimligt att pröva sig fram i skarpt läge. Utforma därefter ett kontrollerat test som kan göras innan däcken går ut till kunder: beskriv vad som ska mätas, på vilken modell eller uppställning, hur länge, och vilket resultat som skulle få tillverkaren att gå vidare respektive avbryta. Skissa uppställningen.
