---
id: "9.3"
chapter: 9
sectionNumber: 3
title: Nätverk och internet
status: fardig-forsta-version
levels: [niva1]
curriculumReferences:
  niva1: ["n1-03"]
  niva2: []
learningGoals:
  - Beskriva hur lokala nätverk är uppbyggda och hur data tar sig mellan enheter.
  - Förklara hur internet fungerar med IP-adresser, DNS och paketförmedling.
abilities: [f3]
concepts_introduced: ["lokalt nätverk", "switch", "router", "bandbredd", "paketförmedling", "IP-adress", "DNS", "protokoll"]
concepts_used: ["nätverk", "data", "byte"]
figures: []
prerequisites: ["9.2"]
---

## Nätverkets delar

Inne i bussen finns ett eget litet [[begrepp:nätverk]]. Kortläsaren vid dörren, förarens skärm, skyltarna i taket och fordonsdatorn är kopplade till varandra, och de talar med varandra utan att någonting av det behöver lämna fordonet. Ett sådant nät, där enheterna är samlade inom ett begränsat område som ett fordon, en våning eller en skola, kallas *lokalt nätverk*.

Varje enhet i nätet behöver tre saker: en anslutning, en adress och någon som ser till att meddelandet hamnar rätt. Anslutningen är antingen en kabel eller radio. Kabeln är stabil och störs inte av grannen, medan radio slipper dragning men delar utrymmet med allt annat som sänder i närheten. Därför sitter det som måste fungera varje gång oftast i kabel, medan det som ska vara flyttbart är trådlöst. I bussen är kortläsaren kabelansluten, medan den som reser når nätet över radio.

Adressen är enhetens namn i nätet, och den behövs för att ett meddelande ska kunna riktas till en bestämd mottagare i stället för till alla.

Den som ser till att meddelandet hamnar rätt är i det lokala nätet en *switch*. Den har ett antal portar, och när ett meddelande kommer in på en av dem skickar den vidare det bara till den port där mottagaren sitter. En äldre lösning skickade allt till alla, vilket fungerade så länge näten var små men blev ohållbart när trafiken växte, ungefär som om varje samtal i ett hus hördes i alla rum.

En *router* har en annan uppgift. Den kopplar ihop två nät med varandra och bestämmer vilken väg trafiken ska ta ut ur det egna nätet. Bussens router har ett mobilabonnemang och är fordonets enda dörr mot omvärlden. I ett hem eller en skola sitter samma slags låda mellan det lokala nätet och den förbindelse som går ut mot internet, ofta med switch och trådlös sändare inbyggda i samma dosa.

Nätets kapacitet beskrivs med två tal som ofta blandas ihop. *Bandbredd* är hur mycket [[begrepp:data]] som hinner passera per sekund, och den mäts i bit per sekund, inte i [[begrepp:byte]]. Fördröjningen är i stället hur lång tid det tar för ett enskilt meddelande att komma fram. Ett nät kan ha hög bandbredd och ändå kännas långsamt, om varje meddelande måste vänta länge på sin tur. För att strömma film krävs bandbredd, medan en biljettspärr som ska svara innan resenären hunnit ta ett steg kräver låg fördröjning.

[BILD 9.3-1] Innehåll: Två lokala nätverk sida vid sida. Till vänster bussens nät med kortläsare, förarskärm, takskyltar och fordonsdator anslutna till en switch, samt en router med mobilantenn som enda väg ut. Till höger skolans nät med stationära datorer i kabel till en switch, trådlösa enheter via en accesspunkt, och en router mot internet. Varje enhet är märkt med en adress, och kabelanslutningar ritas som heldragna linjer och radioanslutningar som streckade. En pil från vardera routern pekar ut mot en molnsymbol märkt internet. Bildtext: "Switchen fördelar trafiken inne i nätet. Routern är nätets enda dörr ut."

## Så fungerar internet

Internet är inte ett nät utan miljontals nät som kopplats ihop. Bussens nät, skolans nät, ett företags nät och en operatörs stamnät är var för sig små och slutna, och det som gör dem till internet är att routrarna mellan dem är överens om hur trafik ska lämnas över.

Överenskommelsen är själva kärnan. Ett *protokoll* är en uppsättning regler för hur två parter ska utbyta information, alltså vad som skickas först, hur mottagaren bekräftar och vad som händer om något går fel. Internet vilar på ett fåtal sådana protokoll, och de fungerar likadant oavsett vem som byggt utrustningen. Det är därför en telefon från en tillverkare kan tala med en server från en annan utan att någon av dem känner till den andra i förväg.

Trafiken skickas med *paketförmedling*. Ett meddelande delas i små bitar, vanligen några hundra till ett par tusen byte stora, och varje bit förses med avsändarens och mottagarens adress samt ett ordningsnummer. Paketen skickas i väg var för sig och kan ta olika vägar genom nätet, och hos mottagaren sätts de ihop i rätt ordning igen. Saknas ett paket begärs just det om, inte hela meddelandet.

Det gamla telefonnätet arbetade tvärtom. Där kopplades en fast förbindelse upp mellan de två som talade, och den var upptagen under hela samtalet oavsett om någon sade något. Paketförmedlingen låter i stället tusentals samtidiga överföringar dela på samma ledningar, eftersom paketen kan trängas ihop i luckorna mellan varandra. Den tål också avbrott: går en förbindelse sönder skickar routrarna helt enkelt paketen en annan väg, och överföringen fortsätter.

[BILD 9.3-2] Innehåll: Samma meddelande skickat på två sätt. Överst en fast förbindelse, ritad som en enda obruten linje genom nätet från avsändare till mottagare, märkt upptagen hela tiden. Underst paketförmedling, där meddelandet delats i fem numrerade paket som tar tre olika vägar genom ett nät av routrar och sätts ihop i rätt ordning hos mottagaren. En av förbindelserna i den undre bilden är markerad som bruten, och de paket som skulle gått den vägen är omdirigerade. Bildtext: "Paketen tar egna vägar och sätts ihop hos mottagaren. Därför överlever överföringen ett brott på vägen."

För att adresserna ska fungera i hela världen har varje ansluten enhet en *IP-adress*. Den äldre varianten skrivs som fyra tal mellan 0 och 255, till exempel 192.168.1.7, och bygger på 32 bitar. Det räcker till drygt fyra miljarder adresser, vilket verkade obegränsat när systemet togs fram och tog slut när världen fyllde sig med uppkopplade enheter. Efterföljaren använder 128 bitar och ger ett adressutrymme som i praktiken inte kan ta slut.

Ingen skriver dock in tal för att nå en tjänst. Namnen översätts till adresser av *DNS*, ett system av namnservrar som fungerar som nätets adressbok. Appen frågar en namnserver vad trafikbolagets servernamn har för adress, får ett tal tillbaka och skickar sedan sina paket dit. Uppslagningen tar några hundradelar av en sekund och sparas en tid, så att den inte behöver göras om vid varje ny fråga. Slutar namnservrarna svara upplevs det som att internet ligger nere, trots att varje förbindelse är hel. Datorerna kan fortfarande nå varandra, men ingen vet längre vart de ska.

Ett biljettköp visar hela kedjan. Appen slår upp serverns namn och får en IP-adress. Köpet delas i paket som lämnar telefonen, går genom mobiloperatörens nät och vidare via ett antal routrar till den datorhall där servern står. Servern behandlar köpet, drar betalningen och skickar tillbaka biljetten som nya paket, och telefonen sätter ihop dem och visar resultatet. Hela vägen har paketen passerat utrustning från många olika ägare, och ingen av dem har behövt veta något om biljetter. Trafiken går dessutom krypterad, så att den som råkar se paketen på vägen inte kan läsa vad de innehåller.

[BILD 9.3-3] Innehåll: Biljettköpets väg i fem numrerade steg från vänster till höger. Först telefonen med appen, sedan en namnserver som svarar på frågan om serverns adress, därefter paketen på väg genom mobilnätets router och tre mellanliggande routrar hos olika operatörer, sedan datorhallen med servern som behandlar köpet, och sist svaret tillbaka till telefonen som visar biljetten. Tidsåtgången anges vid varje steg, med uppslagningen i hundradelar och hela förloppet under en sekund. Ett hänglås markerar att trafiken är krypterad hela vägen. Bildtext: "Ett biljettköp passerar utrustning från många ägare. Ingen av dem behöver veta vad ett paket innehåller."

## Instuderingsfrågor

1. Vad menas med ett lokalt nätverk? Ge två exempel.
2. Vilka tre saker behöver en enhet för att kunna kommunicera i ett nätverk?
3. När väljs kabel framför radio, och varför?
4. Vilken uppgift har en switch?
5. Vad skiljer en router från en switch?
6. Vad är bandbredd, och hur skiljer den sig från fördröjning?
7. Varför kräver en biljettspärr låg fördröjning medan strömmande film kräver hög bandbredd?
8. Vad är ett protokoll, och varför kan utrustning från olika tillverkare fungera ihop tack vare protokoll?
9. Beskriv hur paketförmedling går till.
10. Vad är fördelarna med paketförmedling jämfört med en fast uppkopplad förbindelse? Ange minst två.
11. Vad är en IP-adress, och varför räckte inte den äldre varianten till?
12. Vilken uppgift har DNS?
13. Varför upplevs ett fel i namnservrarna som att internet ligger nere, trots att alla förbindelser är hela?
14. Beskriv vad som händer från det att du trycker på köpknappen i en app till dess att svaret visas.

## Övningar

1. **Rita ditt nät.** Kartlägg det nätverk du har hemma eller i skolan. Rita routern, eventuella switchar och accesspunkter samt minst fem anslutna enheter, och markera vilka som är anslutna med kabel och vilka trådlöst. Ange var nätets gräns går, alltså vilken utrustning som är den enda vägen ut.

2. **Mät nätet.** Genomför ett hastighetstest på två platser, till exempel nära routern och i ett rum längre bort, och notera både hastighet och svarstid. Genomför testet trådlöst på båda platserna och med kabel om du har möjlighet. Ställ upp värdena i en tabell och förklara skillnaderna med avsnittets begrepp.

3. **Följ paketen.** Använd ett spårningsverktyg i operativsystemet, till exempel tracert eller traceroute, för att följa vägen till två olika servrar, en svensk och en utländsk. Redovisa antalet steg och den sammanlagda tiden för varje väg, och förklara varför de skiljer sig åt.

4. **Slå upp adressen.** Ta reda på IP-adressen till tre olika tjänster du använder, med kommandot nslookup eller ett motsvarande verktyg. Undersök för minst en av dem om samma namn ger olika adresser vid upprepade frågor eller från olika platser, och ge ett tekniskt skäl till att det kan vara så.

5. **När en del faller bort.** Beskriv för vart och ett av tre fall vad en användare skulle märka och varför: routern förlorar sin förbindelse ut, namnservern slutar svara, och en av flera vägar mellan två routrar bryts. Ange för varje fall om trafiken stannar helt eller tar en annan väg.
