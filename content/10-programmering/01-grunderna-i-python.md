---
id: "10.1"
chapter: 10
sectionNumber: 1
title: Grunderna i Python
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-07"]
  niva2: []
learningGoals:
  - Skriva, köra och felsöka ett enkelt Python-program med utskrift och
    inmatning.
  - Använda variabler och grundläggande datatyper för att utföra beräkningar i
    program.
abilities: [f2, f5]
concepts_introduced: ["program", "källkod", "variabel", "datatyp", "heltal", "flyttal", "sträng", "syntaxfel"]
concepts_used: ["processor"]
figures: []
prerequisites: ["9.2"]
---

## Första programmet

En dator gör ingenting av sig själv. Den utför instruktioner, en i taget, i den ordning de står. Ett *program* är en sådan följd av instruktioner, skriven för att lösa en bestämd uppgift, och den text programmeraren skriver kallas *källkod*.

Python är ett av de vanligaste språken för teknisk beräkning, och det är bokens språk. Skälet är att koden är kort och läsbar. Det som i äldre språk kräver tio rader kräver ofta två i Python, och de två raderna går dessutom att läsa nästan som vanlig text.

Det första programmet skriver ut en rad:

```python
print("Nu kör vi.")
```

Ordet `print` är en inbyggd funktion som skriver ut det som står innanför parentesen. Citattecknen talar om att innehållet är text och inte något programmet ska försöka räkna på. Körs raden visas `Nu kör vi.` i det fönster där programmet körs, utan citattecken.

Ett program körs genom att koden sparas i en fil med ändelsen `.py` och startas i en Python-tolk. Tolken läser koden uppifrån och ner och översätter varje rad till sådant [[begrepp:processor]]n kan utföra. Var koden skrivs spelar mindre roll: en enkel editor duger, liksom en utvecklingsmiljö eller en tjänst i webbläsaren. Koden blir densamma.

Datorn är obarmhärtigt bokstavlig. Glöms ett citattecken eller en parentes förstår tolken inte vad som menas och avbryter med ett felmeddelande, ett *syntaxfel*. Namnet betyder att koden bryter mot språkets regler, ungefär som en mening utan verb.

```python
print("Nu kör vi.)
```

Här saknas det avslutande citattecknet, och tolken svarar med ett meddelande som innehåller radnumret och en beskrivning av vad den inte förstod. Felmeddelanden är inte tillrättavisningar utan den bästa information som finns om vad som är fel, och den som lär sig läsa dem sparar mycket tid. Radnumret pekar dessutom på den rad där tolken *upptäckte* problemet, vilket ibland är raden efter den som faktiskt är fel.

Ett program blir användbart först när det arbetar med värden som kan ändras. Här läses ett värde in från den som kör programmet:

```python
namn = input("Vad heter du? ")
print("Hej " + namn + "!")
```

Första raden visar frågan och väntar tills något skrivits in och retur tryckts. Det inskrivna sparas under namnet `namn`. Andra raden fogar samman tre textbitar till en enda och skriver ut den. Skrivs Amina in blir svaret `Hej Amina!`.

## Variabler och datatyper

Namnet `namn` i föregående program är en *variabel*, alltså en namngiven plats i minnet där ett värde lagras och kan hämtas fram igen. Likhetstecknet betyder inte att de två sidorna är lika, utan att värdet till höger läggs i variabeln till vänster. Det är en tilldelning, inte en ekvation, vilket också gör raden `x = x + 1` fullt begriplig: ta det värde som finns i `x`, lägg till ett, och lägg tillbaka resultatet i `x`.

Variabelnamn väljs så att koden går att läsa. `spannvidd` säger vad värdet betyder, medan `s` inte gör det, och den som återvänder till sin kod en månad senare är tacksam för det längre namnet. Namnet får innehålla bokstäver, siffror och understreck, men inte börja med en siffra eller innehålla mellanslag. Svenska tecken fungerar i moderna Python-versioner men undviks ändå i kod, eftersom de ställer till problem så snart koden byter dator eller delas med någon annan.

Varje värde har en *datatyp*, som avgör vad som går att göra med det. Tre räcker långt.

Ett *heltal* är ett tal utan decimaler, som `5` eller `-12`. Ett *flyttal* är ett tal med decimaler, som `2.5`, och i Python skrivs decimaltecknet alltid som punkt, aldrig som komma. En *sträng* är text, som `"Amina"`, och känns igen på citattecknen.

Typen avgör vad ett tecken betyder. Plustecknet mellan två tal adderar, medan plustecknet mellan två strängar fogar samman dem. Därför blir `2 + 3` talet `5`, medan `"2" + "3"` blir strängen `"23"`. Det är inte en egenhet utan en följd av att samma tecken har olika innebörd för olika typer, precis som samma bitmönster kan vara ett tal eller en bokstav.

Här ligger avsnittets vanligaste fel. Allt som kommer från `input` är en sträng, även när användaren skrivit ett tal. Ska värdet räknas med måste det först omvandlas, med `int` för heltal och `float` för flyttal:

```python
langd = float(input("Balkens langd i meter: "))
bredd = float(input("Balkens bredd i meter: "))
area = langd * bredd
print("Arean ar", area, "kvadratmeter")
```

Utan `float` runt den första raden skulle `langd` innehålla strängen `"6.0"` i stället för talet `6.0`, och multiplikationen skulle avbrytas med ett felmeddelande om att en sträng inte går att multiplicera med en sträng. Programmet ovan skriver för längden 6.0 och bredden 1.5 ut `Arean ar 9.0 kvadratmeter`.

Kommatecknen i den sista `print`-raden gör något annat än plustecknen gjorde tidigare. De skiljer flera värden åt, och Python skriver ut dem efter varandra med mellanslag emellan. Det fungerar oavsett typ, medan plustecken kräver att alla delar är strängar.

De fyra räknesätten skrivs `+`, `-`, `*` och `/`, och parenteser styr ordningen precis som i matematiken. Två operatorer till är värda att känna till. Dubbla stjärnor betyder upphöjt till, så `2 ** 3` blir `8`, och procenttecknet ger resten vid en division, så `7 % 2` blir `1`.

En sista sak hör till läsbar kod. Allt efter ett nummertecken på en rad är en kommentar, som tolken hoppar över:

```python
# Beraknar arean av en rektangulär platta
sida_a = 0.8   # meter
sida_b = 0.6   # meter
area = sida_a * sida_b
print("Arean:", round(area, 3), "m2")
```

Kommentarerna förklarar varför något görs, inte vad som står. Raden `area = sida_a * sida_b` behöver ingen kommentar som säger att arean beräknas, men enheten meter är värd att skriva ut, eftersom den inte syns i koden och är precis den sortens antagande som annars glöms bort. Funktionen `round` avrundar till angivet antal decimaler, här tre, och programmet skriver ut `Arean: 0.48 m2`.

[BILD 10.1-1] Innehåll: Programmet med balkens area visat i tre spalter bredvid varandra. Vänster spalt: källkoden rad för rad. Mittspalt: minnets innehåll efter varje rad, ritat som namngivna lådor där langd, bredd och area fylls i efter hand med sina värden och sin datatyp utsatt. Höger spalt: vad som syns för användaren, alltså frågorna och den utskrivna arean. Pilar från varje kodrad till motsvarande förändring i minnet. Bildtext: "Varje rad ändrar något i minnet. Variablerna är namngivna lådor, och datatypen avgör vad som går att göra med innehållet."

## Instuderingsfrågor

1. Vad är ett program, och vad menas med källkod?
2. Vad gör funktionen `print`?
3. Vad händer med koden när ett Python-program körs?
4. Vad är ett syntaxfel? Ge ett exempel.
5. Varför pekar ett felmeddelandes radnummer ibland på en annan rad än den som är fel?
6. Vad är en variabel?
7. Varför är `x = x + 1` en meningsfull rad i ett program trots att den vore orimlig som ekvation?
8. Vilka regler gäller för variabelnamn, och varför väljs beskrivande namn?
9. Vilka tre datatyper behandlas i avsnittet, och hur skiljer de sig åt?
10. Varför blir `2 + 3` något annat än `"2" + "3"`?
11. Vilken typ har allt som kommer från `input`, och vad måste göras innan värdet kan användas i en beräkning?
12. Vad är skillnaden mellan att skilja värden åt med komma och att foga samman dem med plus i en `print`-rad?
13. Vad gör operatorerna `**` och `%`?
14. Vad bör en kommentar förklara, och vad behöver den inte upprepa?

## Övningar

1. **Kör och bryt.** Skriv och kör ett program som skriver ut ditt namn och din ort på var sin rad. Ta därefter bort ett citattecken, kör igen och skriv ner felmeddelandet ordagrant. Ange vilken rad meddelandet pekar på och rätta felet.

2. **Tre datatyper.** Skriv ett program som skapar en variabel av varje typ: ett heltal, ett flyttal och en sträng. Skriv ut alla tre med en enda `print`-rad. Använd därefter funktionen `type` för att skriva ut varje variabels typ och redovisa vad utskriften blev.

3. **Enhetsomvandlaren.** Skriv ett program som frågar efter en längd i millimeter och skriver ut samma längd i meter och i tum, avrundat till tre decimaler. En tum är 25,4 millimeter. Kontrollera programmet med värdena 1 000 mm och 25,4 mm och redovisa svaren.

4. **Räkna på en platta.** Skriv ett program som frågar efter en rektangulär plåtplattas längd, bredd och tjocklek i millimeter, och som skriver ut plattans volym i kubikcentimeter och dess massa i kilogram. Räkna med stål, som har densiteten 7 850 kilogram per kubikmeter. Kontrollera svaret för en platta på 200 gånger 100 gånger 5 millimeter genom att räkna för hand, och redovisa båda svaren.

5. **Fel som inte är syntaxfel.** Skriv ett program som frågar efter två tal och skriver ut deras summa, men utan att omvandla svaren från `input`. Kör programmet, skriv ner vad som händer och förklara resultatet med avsnittets begrepp. Rätta därefter programmet och visa att det räknar rätt.
