---
type: kapitelsammanfattning
chapter: 8
sectionNumber: 3
title: Sammanfattning
status: fardig-forsta-version
---

Modellering och simulering handlar om att göra verkligheten räknebar. En modell är en förenklad beskrivning av något verkligt, gjord för att svara på en bestämd fråga, och frågan styr allt annat. Huset som svalnar vid ett strömavbrott blev en enda låda med en innetemperatur, en värmegenomgång och en värmekapacitet. Allt annat valdes bort, och varje bortval är ett antagande som resultatet vilar på. Eftersom antagandena bara gäller under vissa förhållanden har varje modell ett giltighetsområde. Frågan är därför aldrig om en modell är sann, utan om den är tillräckligt bra för sitt syfte.

Modeller finns i tre slag. Den fysiska modellen är byggd och prövas i verkligheten, som fartygsskrovet i släpbassängen eller prototypen i ett utvecklingsarbete, och verkligheten sköter då själv även den fysik ingen tänkt på. Den matematiska modellen uttrycker samma sak som samband mellan storheter, med parametrar som beskriver just det fall som studeras. Den digitala modellen är en matematisk modell som en dator räknar på. Valet styrs av hur väl sambanden är kända, hur invecklat förloppet är och hur dyrt det vore att ha fel.

En digital modell byggs med parametrarna i ett eget indatablock, aldrig inbakade i formlerna, eftersom en modell som inte går att ändra bara kan besvara den enda fråga den byggdes för. Att köra modellen framåt i tidssteg är en simulering. Kortare steg ger ett resultat som ligger närmare det verkliga förloppet, men de gör inte antagandena bättre.

Värdet uppstår när modellen körs om. Ändras en parameter i taget visar en känslighetsanalys vad som styr utfallet, och därmed både vad som lönar sig att åtgärda och vilka tal som måste bestämmas noga. För huset vägde isoleringen tyngre än vädret. Till sist ställs två skilda frågor till varje resultat. Verifieringen prövar om modellen räknar rätt, med enhetskontroll, handräknat första steg, halverat tidssteg och extremfall. Valideringen prövar om den räknar på rätt saker, genom jämförelse med mätningar, och avgör därmed inom vilka förhållanden modellen får användas.
