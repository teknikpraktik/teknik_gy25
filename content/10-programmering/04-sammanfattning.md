---
type: kapitelsammanfattning
chapter: 10
sectionNumber: 4
title: Sammanfattning
status: fardig-forsta-version
---

Ett program är en följd av instruktioner som utförs i tur och ordning, skriven som källkod och översatt av en tolk. Python är bokens språk. Värden lagras i variabler, där likhetstecknet betyder tilldelning och inte likhet, och varje värde har en datatyp som avgör vad som går att göra med det. Heltal och flyttal räknas det med, medan strängar är text, och plustecknet mellan två strängar fogar samman i stället för att addera. Allt som kommer från inmatning är en sträng och måste omvandlas innan det används i en beräkning. Ett syntaxfel bryter mot språkets regler och stoppar programmet direkt.

Nyttan växer när programmet kan välja väg och upprepa sig. En villkorssats utför olika kod beroende på om ett logiskt uttryck är sant eller falskt, flera fall prövas i tur och ordning med det strängaste först, och villkor kombineras med and, or och not. Indenteringen är syntax och avgör vad som hör till vilken struktur. En for-loop används när antalet varv är känt i förväg och en while-loop när det beror på ett villkor, och en while-loop måste alltid innehålla något som till slut gör villkoret falskt. Listor håller många värden under ett namn, nås med index som börjar på noll och gås igenom med en loop.

När programmet växer bryts det upp i funktioner. En funktion tar emot värden genom sina parametrar, utför en avgränsad uppgift och lämnar tillbaka ett returvärde, vilket gör att en beräkning står på ett enda ställe även när den används på flera. Ett tekniskt problem angrips genom att först brytas ned i delsteg och först därefter skrivas som kod. Nedbrytningen mynnar ut i en beskrivning av vad programmet ska göra, med indata och enhet, det som ska räknas fram, hanteringen av gränsfall och vad som ska visas. Att kunna formulera den beskrivningen behövs lika mycket när koden hämtas eller beställs färdig som när den skrivs för hand, eftersom oprecisa krav ger fel program oavsett vem som skriver det. Programmet räknar, men det tolkar ingenting: att avgöra vad ett framräknat tal betyder och inom vilka förutsättningar det gäller är den tekniska bedömning som ligger utanför koden.

Ett program som kör utan felmeddelande har inte därmed räknat rätt. Mot logiska fel hjälper bara testfall med svar som är kända i förväg, prövade som normalfall, gränsfall, extremfall och feltillfälle, och felsökningen görs systematiskt genom att skriva ut mellanresultat och ändra en sak i taget. Kod som hämtas eller beställs färdig följer samma väg: precisera, hämta, granska, pröva. Bara ett av de fyra stegen försvinner, och de återstående är de som tar tid. Den som använder ett program ansvarar för vad det räknar ut, oavsett vem eller vad som skrev raderna, och kod som ser välskriven ut förtjänar hårdare granskning än kod som uppenbart är trasig. Att kunna granska förutsätter dessutom att man själv kan skriva, eftersom läsförmågan växer ur skrivandet.
