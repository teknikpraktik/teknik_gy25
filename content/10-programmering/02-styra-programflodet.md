---
id: "10.2"
chapter: 10
sectionNumber: 2
title: Styra programflödet
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-07"]
  niva2: []
learningGoals:
  - Skriva program som fattar beslut med villkorssatser och logiska uttryck.
  - Använda for- och while-loopar för att upprepa beräkningar i program.
  - Använda listor för att lagra och bearbeta data i program.
abilities: [f2, f5]
concepts_introduced: ["villkorssats", "logiskt uttryck", "indentering", "loop", "lista", "index"]
concepts_used: ["variabel", "program", "sträckgräns", "säkerhetsfaktor"]
figures: []
prerequisites: ["10.1"]
---

## Villkorssatser

Programmen i föregående avsnitt körde rakt igenom. Varje rad utfördes en gång, i tur och ordning, oavsett vilka värden som matats in. Nyttan blir en helt annan när programmet kan välja väg.

En *villkorssats* låter programmet utföra olika kod beroende på om ett påstående är sant eller falskt. En kontroll av om en uppmätt spänning ligger under den tillåtna ser ut så här:

```python
spanning = float(input("Uppmatt spanning i N/mm2: "))
tillaten = 117.5

if spanning <= tillaten:
    print("Godkand.")
else:
    print("For hog spanning.")
```

Raden som inleds med `if` innehåller ett *logiskt uttryck*, alltså ett påstående som är antingen sant eller falskt. Är det sant utförs raderna under `if`, annars raderna under `else`. Kolonet avslutar villkorsraden, och `else`-delen är valfri: utan den händer helt enkelt ingenting när villkoret är falskt.

Indraget är inte en vanesak utan syntax. Python avgör vad som hör till villkoret genom *indentering*, alltså hur långt in på raden koden börjar. Raderna som ska utföras dras in fyra mellanslag, och när indraget upphör är villkorssatsen slut. I andra språk används klamrar för samma sak, medan indraget där bara är prydnad. Blandas mellanslag och tabbtecken i samma fil avbryter tolken med ett felmeddelande om indenteringen, vilket är ett av de vanligaste felen för den som klistrat in kod från flera håll.

Sex jämförelseoperatorer används i logiska uttryck: `<` mindre än, `>` större än, `<=` mindre än eller lika med, `>=` större än eller lika med, `==` lika med, och `!=` skilt från. Det dubbla likhetstecknet är värt att stanna vid. Ett enkelt likhetstecken tilldelar ett värde, medan det dubbla jämför två värden, och att skriva `=` där `==` avses är ett fel som drabbar alla förr eller senare.

Flera fall prövas i tur och ordning med `elif`, en förkortning av *else if*:

```python
utnyttjande = spanning / tillaten

if utnyttjande > 1.0:
    print("Underkand: spanningen overstiger tillaten.")
elif utnyttjande > 0.9:
    print("Godkand, men med liten marginal.")
else:
    print("Godkand med god marginal.")
```

Ordningen är avgörande. Villkoren prövas uppifrån och ner, och det första som är sant vinner, varefter resten hoppas över. Byttes de två första raderna skulle ett utnyttjande på 1,3 fastna redan i villkoret större än 0,9 och felaktigt rapporteras som godkänt med liten marginal. Att pröva det strängaste villkoret först är därför regel.

Villkor kan kombineras med `and`, `or` och `not`. Med `and` krävs att båda leden är sanna, med `or` räcker det att ett av dem är det, och `not` vänder på ett villkor. En kontroll av att ett mätvärde ligger inom ett tillåtet intervall skrivs:

```python
if matvarde >= 24.9 and matvarde <= 25.1:
    print("Inom tolerans.")
else:
    print("Utanfor tolerans.")
```

## For- och while-loopar

Ett program som ska räkna på tjugo mätvärden ska inte innehålla tjugo likadana rader. En *loop* upprepar samma kod flera gånger, och varje gång koden i loopen utförs kallas det ett varv.

En `for`-loop används när antalet varv är känt i förväg:

```python
for i in range(5):
    print("Varv", i)
```

Funktionen `range(5)` ger talen 0, 1, 2, 3 och 4, alltså fem tal som börjar på noll och slutar strax före fem. Att räkningen börjar på noll är genomgående i programmering och förvånar de flesta första gången. Variabeln `i` får ett av talen vid varje varv, och koden under raden utförs en gång per tal. Precis som i villkorssatsen är det indraget som avgör vad som ingår i loopen.

Ett belastningsschema räknas ut på fyra rader:

```python
for last in range(0, 30, 5):
    nedbojning = 0.40 * last
    print(last, "N ger", round(nedbojning, 1), "mm")
```

Här får `range` tre tal: var räkningen börjar, var den slutar och hur stort steget är. Lasterna blir 0, 5, 10, 15, 20 och 25 newton, och programmet skriver ut en rad per last, från `0 N ger 0.0 mm` till `25 N ger 10.0 mm`.

En `while`-loop används i stället när antalet varv inte är känt utan beror på ett villkor:

```python
temperatur = 21.5
timmar = 0

while temperatur > 15.0:
    temperatur = temperatur - 0.3
    timmar = timmar + 1

print("Under 15 grader efter", timmar, "timmar.")
```

Loopen fortsätter så länge villkoret är sant och prövar det på nytt före varje varv. Programmet svarar `Under 15 grader efter 22 timmar.`, vilket går att kontrollera överslagsmässigt: 6,5 graders fall vid tre tiondelar per varv blir knappt 22 varv, och eftersom villkoret måste bli falskt innan loopen avbryts landar svaret på 22 hela timmar.

En `while`-loop bär en risk som `for`-loopen saknar. Ändras inget som påverkar villkoret blir loopen oändlig och programmet hänger sig. Raden som sänker temperaturen är alltså inte en detalj utan det enda som får programmet att någonsin ta slut, och en `while`-loop bör alltid läsas med frågan om vad som gör villkoret falskt till slut.

## Listor

Enskilda variabler räcker inte när många värden ska hanteras. En *lista* håller flera värden under ett enda namn:

```python
nedbojning = [0.0, 2.1, 4.0, 6.2, 8.1, 10.1]
```

Värdena når man med sitt *index*, alltså platsnumret i listan, skrivet inom hakparenteser. Numreringen börjar på noll, så `nedbojning[0]` är 0.0 och `nedbojning[3]` är 6.2. Det sista värdet nås enklast med index `-1`, som räknar bakifrån. Funktionen `len` ger antalet värden, här 6, vilket betyder att det högsta giltiga indexet är 5. Att be om `nedbojning[6]` avbryter programmet med ett felmeddelande om att indexet ligger utanför listan.

En `for`-loop går igenom en lista direkt, utan att index behöver skrivas ut:

```python
matvarden = [6.2, 6.0, 6.3, 6.1, 6.2]

summa = 0
for varde in matvarden:
    summa = summa + varde

medelvarde = summa / len(matvarden)
print("Medelvarde:", round(medelvarde, 2), "mm")
```

Variabeln `summa` börjar på noll och växer med ett värde per varv, ett mönster som återkommer i nästan all databehandling. Programmet skriver ut `Medelvarde: 6.16 mm`. Python har färdiga funktioner för just detta, `sum`, `min`, `max` och `len`, så samma medelvärde fås med `sum(matvarden) / len(matvarden)`. De färdiga funktionerna används i skarpa program, medan den utskrivna loopen visar vad som faktiskt sker.

Med `min` och `max` blir spridningen en rad, och programmet kan räkna ut både medelvärde och variationsbredd för en mätserie:

```python
matvarden = [6.2, 6.0, 6.3, 6.1, 6.2]

medelvarde = sum(matvarden) / len(matvarden)
variationsbredd = max(matvarden) - min(matvarden)

print("Antal matningar:", len(matvarden))
print("Medelvarde:", round(medelvarde, 2), "mm")
print("Variationsbredd:", round(variationsbredd, 2), "mm")
```

Variationsbredden blir 6.3 minus 6.0, alltså 0.3 millimeter, precis som när samma serie behandlades för hand i kapitlet om dataanalys. Att svaret stämmer med en handräkning är inte en tillfällighet utan det enda sättet att veta att programmet räknar rätt.

Listor går att ändra efter att de skapats. Ett värde läggs till sist med `nedbojning.append(12.0)`, och ett värde ändras genom tilldelning till en plats, som `nedbojning[1] = 2.2`.

[BILD 10.2-1] Innehåll: Tre kontrollstrukturer ritade som flödesscheman bredvid varandra, var och en med sin kodrad under sig. Först villkorssatsen, som en romb med två utgångar märkta sant och falskt som leder till var sitt block och sedan samman igen. Sedan for-loopen, med en pil som går tillbaka och en räknare som visar värdena 0 till 4 innan flödet lämnar loopen. Sist while-loopen, med villkorsprövningen före varje varv och en markering vid den rad som ändrar villkoret, märkt utan denna tar loopen aldrig slut. Bildtext: "Villkoret väljer väg, loopen går tillbaka. Indraget avgör vad som hör till vilken struktur."

## Instuderingsfrågor

1. Vad gör en villkorssats?
2. Vad är ett logiskt uttryck?
3. Varför är indenteringen syntax i Python och inte bara en vanesak?
4. Vad är skillnaden mellan `=` och `==`?
5. Vad gör `elif`, och varför spelar ordningen mellan villkoren roll?
6. Vad är skillnaden mellan `and` och `or` i ett sammansatt villkor?
7. Vad är en loop, och vad menas med ett varv i en loop?
8. När används en `for`-loop och när används en `while`-loop?
9. Vilka tal ger `range(0, 30, 5)`, och vad betyder de tre talen?
10. Varför börjar `range(5)` på noll och slutar på fyra?
11. Vilken risk bär en `while`-loop som en `for`-loop saknar, och vad skyddar mot den?
12. Vad är en lista, och hur når man ett enskilt värde i den?
13. En lista innehåller sex värden. Vilket är det högsta giltiga indexet, och vad händer om ett högre används?
14. Beskriv mönstret med en variabel som börjar på noll och växer inuti en loop, och vad det används till.
15. Varför räknas ett programs resultat igenom för hand innan programmet används?

## Övningar

1. **Godkänd eller inte.** Skriv ett program som frågar efter ett materials sträckgräns och en säkerhetsfaktor, räknar ut den tillåtna spänningen och sedan frågar efter en uppmätt spänning. Programmet ska svara om spänningen är godkänd, godkänd med liten marginal eller underkänd. Kontrollera det med sträckgränsen 235, säkerhetsfaktorn 2 och de uppmätta spänningarna 96, 112 och 130, och redovisa svaren.

2. **Tabell med loop.** Skriv ett program som skriver ut en tabell över nedböjningen vid lasterna 0 till 50 newton i steg om 5, där nedböjningen är 0,40 millimeter per newton. Utöka programmet så att det efter varje rad skriver ut en varning när nedböjningen överstiger 15 millimeter.

3. **Räkna tills det räcker.** Skriv ett program som utgår från innetemperaturen 21,5 grader och sänker den med 0,3 grader per timme tills den understiger 15 grader, och som skriver ut hur många timmar det tog. Ändra därefter programmet så att sänkningen per timme läses in av användaren. Pröva med 0,4 och 0,2 grader per timme och förklara varför det ena fallet tar dubbelt så lång tid som det andra.

4. **Analysera en mätserie.** Skriv ett program som innehåller en lista med minst åtta mätvärden och skriver ut antalet mätningar, medelvärdet, det största och det minsta värdet samt variationsbredden, allt avrundat till två decimaler. Räkna igenom medelvärdet och variationsbredden för hand och redovisa båda uträkningarna tillsammans med programmets utskrift.

5. **Hitta det som avviker.** Utgå från programmet i föregående uppgift. Låt det gå igenom listan och skriva ut varje mätvärde som avviker mer än en angiven gräns från medelvärdet. Pröva med två olika gränser på samma mätserie och redovisa vad som hände. Ange vad du skulle göra med ett värde programmet pekat ut.
