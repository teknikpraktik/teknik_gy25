# Faktagranskning – kapitel 1 och 2

Internt arbetsdokument (ingår inte i bokexporten; export läser endast content/).
Registrerar de viktigaste faktapåståendena i det producerade materialet, med
källa och status, så att de kan kontrolleras senare (13-produktionsmanual.md;
redaktionellt beslut om faktagranskning). Institutionella eller primära källor
går före Wikipedia och allmänna nyhetssidor för exakta årtal, patent,
säkerhetsärenden, "världens första"-påståenden, historiska orsakssamband samt
precisa antal och priser.

## Korrigeringar gjorda i revisionen (2026-07-13)

| Påstående (före) | Åtgärd | Källa | Status |
|---|---|---|---|
| Spinning jenny "drevs av vattenhjul" (1.3.1) | Rättat: spinning jenny var handdriven; vattenramen (Arkwright, 1769) var vattendriven | Encyclopædia Britannica, "spinning jenny" och "water frame" | Verifierat (institutionell) |
| Järnvägen "snabbare än någon häst" (1.3.1) | Mjukat: "snabbare än hästen förmådde över längre sträckor" | Allmän teknikhistoria; borttagen absolut formulering | Verifierat (rimlighetsrättelse) |
| "smartphonen kom 2007" (1.4.1) | Ändrat: "den moderna pekskärmssmarttelefonen slog igenom 2007" (smarttelefoner fanns före 2007) | Allmän teknikhistoria | Verifierat (precisering) |
| "AI är vad som händer när båda finns i överflöd" (1.4.1) | Nyanserat: datorkraft + data i överflöd OCH nya metoder (maskininlärning) | Allmän beskrivning; borttagen förenkling | Verifierat (precisering) |
| "pengarna från sedlarna och kontoret" (1.4.2) | Ändrat: "betalningen från sedeln och bankkontoret" | Språklig/saklig precisering | Verifierat |
| "ett så kallat förutsägande underhåll" (1.3.1) | Omformulerat: "vilket kallas förutsägande underhåll" | Språklig rättelse | Verifierat |
| Hövding som aktuell produkt/produktrekommendation (2.1.1) | Skrivet neutralt/historiskt; produktrekommendations- och kostnadsuppgifter borttagna; nämner tillbakadragandet | Konsumentverket, "Hövding 3 har allvarliga brister" (säljförbud sent 2023; bolaget överklagade och gick sedan i konkurs) | Verifierat (institutionell) |
| Behovsdriven/möjlighetsdriven, absoluta formuleringar (1.5.1 telegrafen, 2.1.1 "kedjan är alltid densamma") | Harmoniserat: utveckling kan starta i behov/problem eller i en möjlighet som får betydelse när den kopplas till ett behov | Redaktionellt beslut (10-amnesfilosofi.md, "Teknikutvecklingens startpunkt") | Verifierat (principbeslut) |

## Korrigeringar gjorda i kapitelgranskningen av kapitel 6 (2026-07-26)

| Påstående (före) | Åtgärd | Källa | Status |
|---|---|---|---|
| "för gångtrafik räknar man i Sverige normalt med storleksordningen 4 kN per kvadratmeter gångbana" (6.6) | Rättat till 5 kN/m². Kaskad genom exemplets tal: full last 9,0 · 5000 = 45 000 N (var 36 000 N), drygt tolv gånger egentyngden (var tio), femtio gånger den enskilda cyklisten (var fyrtio). Figurspecifikationen för `[BILD 6.6-1]` uppdaterad med samma siffror. | EN 1991-2 (gäller genom EKS) ger för gångbroar q_fk = 2,0 + 120/(L+30) kN/m², med övre gräns 5,0 kN/m². För kapitlets bro, L = 6 m, ger formeln 5,33 och därmed 5,0 kN/m². | Verifierat (standard) |
| Ursprunget till det felaktiga värdet | 4 kN/m² är golvlast för byggnader enligt EN 1991-1-1, kategori C (utrymmen där människor samlas), alltså rätt storleksordning hämtad ur fel tabell. Gångbrolasten är högre eftersom en bro kan bli helt fullpackad. | EN 1991-1-1, kategori C | Noterat (felkälla) |
| "Ökar lasten till 9400 N … är momenten lika stora" (6.3) | Rättat till 9375 N. Vid 9400 N blir det vältande momentet 75 200 Nm, alltså större än det stabiliserande 75 000 Nm, så kranen hade passerat gränsen i stället för att nå den. Andra ledet rättat från "drygt en meter" till "knappt en och en halv meter": 75 000/8000 = 9,375 m, alltså 1,375 m längre ut än 8,0 m. | Kapitlets egna tal, kontrollräknade | Verifierat (räknefel) |

Standardernas beteckningar nämns inte i elevtexten. Kapitlet citerar inga
standarder någon annanstans, och lastvärdet anges därför som ett normalvärde.

## Korrigeringar gjorda i kapitelgranskningen av kapitel 7 (2026-07-26)

| Påstående (före) | Åtgärd | Källa | Status |
|---|---|---|---|
| "arean blivit 201 mm² och spänningen 89,6 N/mm²" (7.1) | Rättat till 201,1 mm² och 89,5 N/mm². Med den avrundade arean 201 mm² ger divisionen 89,55, som avrundas uppåt till 89,6, medan full precision (π · 16² / 4 = 201,06) ger 89,52 och därmed 89,5. Eleven kunde alltså inte reproducera det angivna svaret. Följdmeningen ändrad från "en halv procent" till "drygt en halv procent", eftersom skillnaden mot 90,1 N/mm² är 0,67 %. | Kapitlets egna tal, kontrollräknade | Verifierat (avrundningsfel) |

## Kvarstående uppgifter att stämma mot primär/institutionell källa

Följande precisa uppgifter bör kontrolleras mot primär eller institutionell källa
före fackgranskning (status `fackgranskad`). De bedöms i dag som korrekta men är
av den typ (exakt årtal, antal, "först", patent) som kräver institutionellt stöd.

- Skiftnyckelns patent 1892 och Johan Petter Johansson (1.1.1) – t.ex. Tekniska museet.
- Tumstockens noggrannhetsangivelse "±0,3 mm för en tumstock av en viss klass" (7.1) – bör stämmas mot gällande mätdonsklassning innan status höjs. Klassen är medvetet inte namngiven i elevtexten, men siffran bör vara rätt storleksordning för den klass som är vanligast i handeln.
- Öresundsförbindelsen: avtal 1991, invigning 2000, Pepparholm, sänktunnel (1.1.2) – Øresundsbron/officiella källor.
- Appert-belöningen 12 000 franc 1795, konservburken 1810 (1.5.1) – livsmedels-/teknikhistorisk institution.
- Domesday Book ">5 000 vattenkvarnar" (1.2.1) – historisk institution.
- Gutenbergbibeln ~180 exemplar, ~1455 (1.2.1) – biblioteks-/museikälla.
- NMT 1981 "världens första automatiska mobilnät över landsgränser" (1.4.1) – tele-/teknikhistorisk källa.
- ASEA IRB 6 1974 "en av världens första" mikroprocessorstyrda industrirobotar (1.3.1) – ABB/Tekniska museet.
- Husqvarna 1995 "världens första robotgräsklippare" (2.2.2) – Husqvarna/oberoende källa.
- Solcellspriser föll ~90 % under 2010-talet (1.5.2) – IRENA eller motsvarande.
- SEB internetbank 1996 "en av världens första" (1.4.2) – SEB/oberoende källa.
- Edisons glödtrådsförsök; kardborrebandet (de Mestral, patent 1955) (2.2.3) – patent-/museikälla.
- Mars Climate Orbiter 1999 (enhetsfel) och Apollo 13 1970 (CO2-filter) (2.2.1–2.2.2) – NASA.

## Använda källor i denna omgång

- Encyclopædia Britannica: https://www.britannica.com/technology/spinning-jenny , https://www.britannica.com/technology/water-frame
- Konsumentverket: https://www.konsumentverket.se/aktuellt/nyheter-och-pressmeddelanden/nyheter/2024/hovding-3-har-allvarliga-brister/

---

## Kontrollposter inför kapitel 11 (2026-07-29)

Kapitel 11 har inget bärande exempel. Teorin illustreras av flera fristående
exempel, och två av dem är verkliga svenska infrastrukturprojekt. Det
koncentrerade fallet sist i 11.3 är Tetra Pak. Posterna nedan är kontrollerade i
detta steg och ska stämmas av på nytt före tryck.

MIPS-posterna som fördes in tidigare samma dag är borttagna. Rotationsskyddet
utgick som exempel och posterna saknade därmed innehåll att stödja.

### Tetra Pak, koncentrerat fall i 11.3

| Påstående | Status | Källa |
|---|---|---|
| Erik Wallenberg fick idén till den tetraederformade förpackningen 1944, och Ruben Rausing lämnade in patentansökan i slutet av mars samma år | Verifierat | Tekniska museet |
| Den första maskinen levererades i september 1952 till Lundaortens mejeriförening, som i november samma år började sälja grädde i tetraederformade förpackningar om en deciliter | Verifierat | Tekniska museet |
| Geometrins poäng: en tetraeder kan vikas ur ett enda pappersark, och ett rör av papper kan delas i hur många tetraedrar som helst utan spill | Verifierat | Tekniska museet |
| Maskiner och förpackningsmaterial såldes tillsammans, och köparen bands avtalsmässigt till Tetra Paks egna förpackningar | Verifierat. EU-kommissionens beslut 1991 i ärendet Tetra Pak II slog fast att köpare och leasetagare av maskinerna var bundna, direkt eller indirekt, att använda bolagets egna förpackningar, och att bindningen upprätthölls av avtalsvillkor och prissättning och inte bara av teknisk passform | EU-kommissionen, beslut 92/163/EEG (IV/31043 Tetra Pak II) |
| **"Maskinerna säljs med låg marginal"** | **Ej belagt.** Beskrivningen är vanlig i populär affärslitteratur men jag hittar ingen institutionell källa. Tetra Laval är privatägt och marginaler per produktled är inte offentliga. Skrivs därför inte som faktapåstående. Texten säger i stället det som är dokumenterat: att intäkten återkommer med förpackningsmaterialet och att kunden binds till leverantören | Ingen |
| Marknadsandelar omkring 90 procent för både maskiner och förpackningar på den aseptiska marknaden vid tiden för beslutet | Verifierat, men tidsbundet till 1991 och skrivs bara med årtal utsatt | EU-kommissionen, samma beslut |

**Avgränsning enligt uppdraget:** expansionshistorien lämnas. Fallet behandlar
behovet, geometrin och affärsmodellen, inget annat.

### Citybanan, exempel i 11.1

| Påstående | Status | Källa |
|---|---|---|
| Ungefär sex kilometer lång pendeltågstunnel under centrala Stockholm, med två nya stationer, byggd av Trafikverket för att skilja pendeltågen från övrig tågtrafik | Verifierat | Trafikverket |
| Trafiken startade 2017 | Verifierat hos Trafikverket. Det exakta datumet 10 juli 2017 och byggstarten 24 januari 2009 kommer från andrahandskällor och skrivs bara ut om de bekräftas mot Trafikverket före tryck | Trafikverket, delvis |
| Kostnad omkring 16,8 miljarder kronor i 2007 års prisnivå | **Ej belagt hos institutionell källa.** Skrivs inte ut, eftersom exemplet inte behöver siffran | Ingen |

### Hallandsåsen, exempel i 11.2

| Påstående | Status | Källa |
|---|---|---|
| Arbetet inleddes 1992 och avbröts 1997 sedan tätningsmedlet Rhoca-Gil förorenat vattendrag i åsen | Verifierat i sak av flera oberoende källor. Bekräftas mot Trafikverket före tryck | Skanska; SVT; behöver Trafikverket |
| Arbetet återupptogs efter uppehåll, och tunneln färdigställdes med en tunnelborrmaskin i stället för den ursprungliga metoden | Verifierat i sak | Skanska |
| Tunneln öppnade i december 2015 | Verifierat i sak, bekräftas före tryck | Skanska |

**Skrivregel för det här fallet.** Hallandsåsen används som exempel på en
projektrisk som realiseras och tvingar fram metodbyte. Miljöhändelsen refereras
sakligt och kort, utan moraliserande och utan detaljer om hälsoeffekter, som
ligger utanför kapitlets ämne.

### Konstruerade exempel

De fem övriga exemplen i kapitlet är konstruerade och benämns öppet så i texten.
De registreras inte som faktapåståenden och ska inte förses med källa. Inga
möten, kravvärden, protokoll eller beslut i dem framställs som historiska.

**Källor i denna omgång**

- Tekniska museet, "Tetra Pak": https://www.tekniskamuseet.se/lar-dig-mer/100-innovationer/tetrapak/
- EU-kommissionen, beslut 92/163/EEG: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:31992D0163
- Trafikverket, Citybanan: https://www.trafikverket.se/resa-och-trafik/jarnvag/sveriges-jarnvagsnat/citybanan/
- Skanska, Hallandsåstunnlarna: https://www.skanska.se/om-skanska/press/nyheter/hallandsastunnlarna-ar-klara-efter-en-lang-resa/

---

## Kapitel 12 (2026-07-30)

Registrerade faktapåståenden i avsnitt 12.1 och 12.2. Kapitlets räkneexempel
(godkännandebeslut mot gränsmått, riskmatris med risktal) är konstruerade
skolexempel med given indata och registreras inte som faktapåståenden.

| Påstående | Var | Status | Att kontrollera före tryck |
|---|---|---|---|
| ISO 9001 är den internationella standarden för kvalitetsledningssystem, och certifiering görs av utomstående organ | 12.1 | Verifierat i sak | Aktuell utgåva av standarden anges inte i texten, medvetet |
| Kvalitetsbristkostnaden växer med ungefär en faktor tio per steg felet får vandra | 12.1 | Tumregel, medvetet angiven som storleksordning | Formuleringen "ungefär" ska stå kvar; ingen exakt siffra |
| Mätdonets osäkerhet bör inte ta mer än en tiondel av toleransen i anspråk | 12.1 | Etablerad tumregel inom mätteknik | Anges som tumregel, inte som norm |
| En detalj godkänns bara om hela osäkerhetsintervallet ligger innanför gränsmåtten | 12.1 | Verifierat i sak, motsvarar den försiktiga godkännanderegeln i mätteknisk praxis | Kontrollera mot ISO 14253-1 före tryck |
| I Toyotas produktionssystem har varje montör rätt att stoppa linjen vid fel | 12.1 | Verifierat i sak, väl belagt i litteraturen om produktionssystem | Källa läggs till före tryck |
| Arbetsmiljölagen styr arbetsmiljön, och Arbetsmiljöverket utfärdar föreskrifterna och utövar tillsyn | 12.2 | Verifierat i sak | Inget föreskriftsnummer anges, medvetet, eftersom regelstrukturen har ändrats |
| Elever omfattas av arbetsmiljölagen | 12.2 | Verifierat i sak | Källa: Arbetsmiljöverket, elevers arbetsmiljö |
| Skyddsombud utses av arbetstagarna och får avbryta arbete vid omedelbar och allvarlig fara i väntan på Arbetsmiljöverkets ställningstagande | 12.2 | Verifierat i sak | Kontrollera lydelsen mot arbetsmiljölagen 6 kap. före tryck |
| Miljöbalken kräver tillstånd eller anmälan för miljöfarlig verksamhet, och verksamhetsutövaren ska bedriva egenkontroll | 12.2 | Verifierat i sak | Källa läggs till före tryck |
| Substitutionsprincipen är inskriven i miljöbalken | 12.2 | Verifierat i sak, motsvarar produktvalsprincipen i miljöbalken 2 kap. | Kontrollera paragrafhänvisning före tryck; texten nämner medvetet ingen paragraf |
| ISO 14001 är den internationella standarden för miljöledningssystem | 12.2 | Verifierat i sak | — |
| Kemikalieinspektionen är svensk myndighet för kemiska produkter, och EU:s kemikalielagstiftning kräver att ämnen är undersökta | 12.2 | Verifierat i sak | Texten nämner medvetet inte Reach vid namn |
| BT Kemi tillverkade bekämpningsmedel i Teckomatorp under 1960- och 1970-talen, grävde ned kemiskt avfall i tunnor, föroreningen uppdagades på 1970-talet, verksamheten lades ned och området har sanerats i flera omgångar under decennier | 12.2 | Verifierat på decennienivå | **Öppen punkt:** exakta årtal för upptäckten och nedläggningen är medvetet utelämnade ur texten. Ska hämtas från Svalövs kommun eller Länsstyrelsen Skåne och skrivas in före tryck om precision önskas |

**Skrivregel för BT Kemi.** Fallet används som exempel på att miljöpåverkan som
inte tas om hand vid källan blir dyrare att åtgärda i efterhand. Händelsen
refereras kort och sakligt, utan detaljer om hälsoeffekter hos enskilda och utan
moraliserande, av samma skäl som gäller Hallandsåsen i kapitel 11.
