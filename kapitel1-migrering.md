# Kapitel 1 – migreringsanteckningar (intern)

Internt arbetsdokument för struktur- och innehållsrevisionen av kapitel 1
(Teknikens utveckling). Ingår **inte** i bokexporten (export läser endast
content/). Här dokumenteras ID-migrering, hur samhällskonsekvenserna fördelades
och vilket framtidsinnehåll som reserverats för kapitel 13.

## ID-migrering (gammalt → nytt)

| Gammalt ID / titel | Nytt ID / titel | Åtgärd |
|---|---|---|
| 1.1.1 Vad är teknik? | 1.1.1 Vad är teknik? | Behållet |
| 1.1.2 Teknik, naturvetenskap och matematik | 1.1.2 (samma) | Behållet |
| 1.2.1 Tekniska genombrott före industrialiseringen | 1.2.1 Teknik före industrialiseringen | Behållet id, omdöpt |
| 1.3.1 Fyra industriella revolutioner | delas upp | Uppdelat i 1.2.2–1.2.5 |
| 1.3.2 Industrialiseringens samhällskonsekvenser | — | Borttaget mål; innehåll invävt i 1.2.2–1.2.5 |
| 1.4.1 Från transistor till AI | — | Innehåll fördelat på 1.2.4 och 1.2.5 |
| 1.4.2 Digitala teknikskiften | — | Innehåll invävt i 1.2.5 |
| 1.5.1 Teknikutvecklingens drivkrafter | 1.3.1 Vad driver teknikutvecklingen? | Flyttat och utvidgat |
| 1.5.2 Att bedöma framtidens teknik | — | Borttaget; reserverat för kapitel 13 (se nedan) |
| (nytt) | 1.2.2 Ångmaskinen och mekaniseringen | Nytt |
| (nytt) | 1.2.3 Elektricitet och massproduktion | Nytt |
| (nytt) | 1.2.4 Elektronik och datorer | Nytt |
| (nytt) | 1.2.5 Digitalisering, internet och AI | Nytt |
| (nytt) | 1.3.2 Varför ser tekniska lösningar olika ut? | Nytt (syntes) |

Figur-id: fig-1.3.1-a/b, fig-1.3.2-a, fig-1.4.1-a, fig-1.4.2-a repurposade till
fig-1.2.2-a/b, fig-1.2.3-a, fig-1.2.4-a/b, fig-1.2.5-a. fig-1.5.1-a → fig-1.3.1-a
(drivkraftsmodell). fig-1.3.2-a nyskapad (formande faktorer). fig-1.5.2-a (Amaras
tumregel) borttagen ur registret och reserverad som figurunderlag för kapitel 13.

## Samhällskonsekvenser – fördelning per epok

Det tidigare separata målet 1.3.2 Industrialiseringens samhällskonsekvenser är
borttaget. Innehållet är spårbart invävt där det uppstår tekniskt och historiskt:

| Samhällskonsekvens | Nytt hem |
|---|---|
| fabriksproduktion (hantverk → fabrik) | 1.2.2 |
| urbanisering | 1.2.2 |
| förändrade arbetsvillkor (ångvissla, 12 h, klockan) | 1.2.2 |
| barnarbete och reglering | 1.2.2 |
| facklig organisering (Sundsvallsstrejken, åttatimmarsdagen) | 1.2.2 |
| billigare varor (tidiga) | 1.2.2 |
| kolera, trångboddhet, emigration, stigande reallöner | 1.2.2 |
| massproduktion och konsumtionssamhälle | 1.2.3 |
| billigare varor (bil, symaskin, cykel) | 1.2.3 |
| elektrifiering av hem och samhälle | 1.2.3 |
| nya transporter och stadsplanering | 1.2.3 |
| automation | 1.2.4 |
| förändrade yrkesroller och kompetenskrav | 1.2.4 |
| ökad produktivitet, datorisering av arbetsliv | 1.2.4 |
| digitalisering av tjänster (musik, foto, bank) | 1.2.5 |
| digitalt utanförskap | 1.2.5 |
| förändrade affärsmodeller, beroende av digital infrastruktur | 1.2.5 |

Analysverktyget "vad förändrades, och för vem" är bevarat (avslutar 1.2.2).

## Reserverat för kapitel 13 (framtidsinnehåll – skapa inte text nu)

Det tidigare målet 1.5.2 Att bedöma framtidens teknik är borttaget ur kapitel 1.
Följande material reserveras som planerat innehåll/exempel/figurunderlag för
kapitel 13 och ska tas i produktion när kapitel 13 skrivs. Det är inte färdig
text och ligger inte i content/.

| Reserverat innehåll | Föreslaget hem | Form |
|---|---|---|
| Amaras tumregel (över-/underskattning på kort/lång sikt) | 13.4 Framtidens teknik | analysmodell + figur |
| Figurunderlag: förväntans- vs påverkanskurva (f.d. fig-1.5.2-a) | 13.4 | figurunderlag |
| Självkörande fordon som exempel på överskattning på kort sikt | 13.4 | planerat exempel |
| Lagermönstret (ny teknik läggs ovanpå gammal) | 13.1 Teknik och samhälle (delavsnitt "Teknikens växelverkan med samhället") | planerat resonemang |
| Oväntade följder (bilen → städer kring vägar) | 13.1 (samma delavsnitt) | planerat exempel |
| Möjligheter och risker med framtidens teknik | 13.4 Framtidens teknik | huvudansvar |
| Klimatomställning som drivkraft (behov + kunskap + politik) | 13.3 Hållbar utveckling (delavsnitt "Hållbarhet som konstruktionskrav") | planerat exempel |
| Solcellers prisutveckling (~90 % fall under 2010-talet) | 13.3 (delavsnitt "Cirkulär ekonomi" eller "Hållbarhet som konstruktionskrav") | planerad datapunkt (kontrolleras mot IRENA) |
| Framtidsbedömning som förmåga (n1-12) | 13.4 | huvudansvar |

(Sektionsnumren ovan avser den avsnittsbaserade strukturen efter arkitekturrevisionen
2026-07-15, se produktionslogg.md. Kapitel 13:s "Etik" och "Genus och normer"
slogs samman till avsnitt 13.2, vilket sköt "Hållbar utveckling" till 13.3 och
"Framtidens teknik" till 13.4, ett steg tidigare än den gamla modul 13.5.)

Kursplanepunkten n1-12 (teknikens och teknikerns roll i ett hållbart samhälle,
möjligheter och risker med framtidens teknik) har primärt hem i kapitel 13 och
täcks där; kapitel 1:s tidigare berörs-tagg för n1-12 har därför tagits bort utan
att någon primärtäckning påverkas.
