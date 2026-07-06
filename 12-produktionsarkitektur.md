# Produktionsarkitektur

## Syfte

Projektet utvecklas som en modulär kunskapsdatabas.

Den färdiga boken är en export av denna databas.

Projektets interna struktur styrs därför inte av hur en tryckt bok ser ut, utan av hur innehållet effektivast utvecklas, granskas och underhålls.

---

## Produktionsenhet

Projektets minsta produktionsenhet är ett lärandemål.

Varje lärandemål lagras i en egen fil.

Claude Code får aldrig skriva ett helt kapitel i en fil.

---

## Webbformat

Projektet presenteras som en statisk dokumentationswebbplats.

HTML används som presentationsformat.

Markdown används endast som källformat.

HTML genereras automatiskt.

---

## Navigering

Varje sida ska innehålla

- föregående lärandemål
- nästa lärandemål
- modul
- kapitel
- innehållsförteckning

---

## Begrepp

Alla tekniska begrepp har ett unikt huvudställe.

Interna länkar används mellan lärandemål.

---

## Figurer

Figurer identifieras med unika ID.

Flera lärandemål kan referera till samma figur.

---

## Export

Projektet ska när som helst kunna exporteras till

- tryckt bok
- PDF
- Word
- HTML
- framtida digitala format

Källmaterialet ska därför vara presentationsoberoende.