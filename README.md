# Human-Centered-Design

Welkom bij de read-me van Human Centered Design. Voor dit project heb ik een toegankelijke app gemaakt voor 1 specifiek persoon met een beperking. Elke week hebben we een prototype getest om te ontdekken wat ze precies wou en wat het beste voor haar werkte. In deze read-me kan je lezen hoe dat proces is gegaan.

## Interview met Petra

Petra is een geboren blinde vrouw. De opdracht is om een app te maken die speciaal voor haar is bedoeld. Ze wil een app waarmee ze makkelijker kan kiezen welk type kleding bij elkaar past. Hier zijn een paar punten van het eerste interview die we hebben gedaan:

**Navigatie door de app**

-   Het belangrijkste is dat ze moet weten waar ze zich op de site bevindt. Dit betekent dat elke knop, link of wat dan ook correct moet worden beschreven.
-   Ze gebruikt zowel desktop als mobiel, maar geeft de voorkeur aan mobiel. Op desktop gebruikt ze nvda en op mobiel de ingebouwde iPhone screenreader.
-   Ze wil alles kunnen zien/horen wat de app te bieden heeft, dus geen links overslaan.
-   Websites en apps KUNNEN leuk zijn en bijvoorbeeld geluid bevatten, maar het is belangrijk dat het Petra niet verwart of afleidt.

**Kleding**

-   Haar grootste probleem is het vinden van kleuren en kleurencombinaties. Ze vindt het belangrijk dat de kleuren haar goed staan. Het is dus belangrijk dat ze weet welke kleuren ze kiest.
-   Als ze een kledingstuk wil kiezen, wil ze precies weten hoe het eruit ziet. De alt-tekst/beschrijving moet dus heel gedetailleerd en objectief zijn (bijv. 'deze blauwe jurk heeft een bloemenpatroon' in plaats van 'deze mooie zomerse jurk heeft vrolijke bloemen verspreid over een levendige blauwe lucht').
-   Ze heeft verschillende kledingstukken voor verschillende gelegenheden (ze vermeldt dat ze een winter- en zomerdoos heeft). Ze heeft echter geen hulp nodig bij het kiezen van deze kledingstukken voor een gelegenheid. Als het buiten regent, weet ze dat ze een jas moet kiezen.

**Andere**

-   Ze wil niet afhankelijk zijn van andere mensen om de app te gebruiken.

### Wat doe ik met deze informatie?

De eerste indruk is dat het erg moeilijk wordt om dit te maken. Maar ik heb wel wat eerste ideeën:

Ten eerste: ik weet niet precies welke kledingcombinaties ze wil. Zelf Petra kan niet eens echt weten wat ze wil, omdat ze zelf niet kan zien wat voor kleding ze draagt. Dus om het eenvoudig te houden, ga ik er voor mijn prototype van uit welke kledingcombinaties ze het liefst draagt. Op die manier kan ik me volledig richten op de functionaliteit van de app. In een perfecte wereld zou ik alle gegevens hebben over wat ze leuk vindt en welke combinaties ze leuk vindt, zodat de app dan vlekkeloos zou werken. Dus door aannames te doen over de kleding/kleurcombinaties kan ik in ieder geval testen of de app ook echt goed functioneert voor Petra.

Ik heb hier een eerste idee:

-   Een flowchart/filter systeem. De hele app is gebaseerd op combinaties van kleuren en kleding, dus er is een manier om dat eruit te filteren. Dus laten we zeggen dat je begint met een kleur. Omdat er algemene conventies zijn over welke kleuren mooi bij elkaar passen, kunnen we andere kleuren er al uitfilteren. Roze past bijvoorbeeld niet bij groen. Dus als je roze kiest, sluit je groen uit en omgekeerd.

## Week 2

### Voorbereiding eerste test

Ik heb een prototype gemaakt waar je een outfit kan maken met 3 kledingstukken: een shirt, een broek en schoenen. Je hebt in het begin de keus met welk kledingstuk je wil beginnen. Dus als je voor een shirt kiest, krijg je een lijst van shirts waar je uit kan kiezen. Als je daarna een shirt hebt gekozen, moet je kiezen voor het volgende kledingstuk, in dit geval krijg je een lijst van broeken. Er komen ook alleen broeken in deze lijst die passen bij het vorige kledingstuk. De manier hoe ik dit doe is door een JSON object te maken van een kledingstuk met daarin een id and een array van matches. Als een bepaald kledingstuk in die array zit, wordt het getoond:

```json
    "rode shirt": {
        "id": "s-red",
        "matches": ["p-white", "p-black", "p-blue", "sh-white", "sh-black", "jack-winter", "jack-summer", "hat-party", "hat-cap"]
    }
```

![alt text](<img/Schermafbeelding 2024-04-24 220240.png>)

![alt text](<img/Schermafbeelding 2024-04-24 220316.png>)

### Prototype testen

Feedback Petra:

Positief:

-   Fijn dat de screenreader zegt welk kledingstuk is gekozen.

Verbeterpunten:

-   Taal in het Nederlands veranderen
-   Zorg ervoor dat je niet overal heen kan. Ze ging vooral terug naar de beginkeuzes en over de aria label heen waardoor ze niet meer wist waar ze was. Je moet eigenlijk vast zitten in een loop in de keuzes.
-   Op een telefoon leest ie eerst de button en daarna de aria-live. Het moet eigenlijk andersom.

Dingen om toe te voegen:

-   Een knop die aangeeft wat je tot nu toe hebt gekozen.
-   Meer beschrijvende kledingstukken.
-   Eventueel een manier om zelf kledingstukken toe te voegen.

### Reflectie test 1

Ik had al een verwachting dat er wel IETS fout zou gaan, maar ik had wel iets ontdekt dat ik niet had verwacht. Ik dacht dat selecteren op een screenreader ongeveer hetzelfde zou zijn al focussen met tab. Maar dat is dus wel anders. Het grootste probleem wat Petra dus had was dat ze constant ging swipen naar de knoppen waar ze eigenlijk niet heen moest. Hierdoor wist ze niet altijd waar ze was. Wat ik vooral opmerkte was dat toen ze een outfit ging kiezen ze koos voor een shirt, toen een broek, maar bij schoenen ging ze weer verder terug naar de beginkeuzes. Toen klikte ze op de schoenen knop en dacht ze dat ze klaar was. Maar eigenlijk was ze dus opnieuw begonnen. Waar ik vooral op moet focussen is dus dat ze niet overal heen kan met de screenreader.

## Week 3

### Prototype testing

### Voorbereiding tweede test

Voor de tweede test heb ik besloten om het op mijn laptop te testen. Ik heb namelijk de focus states redelijk goed geoptimaliseerd voor laptop momenteel en dat wil ik toch nog even testen. Nu veranderd de focus naar de juiste buttons en zit je ge-focus trapt zodat ze niet perongeluk de weg kwijtraakt. Ik heb ook een knop toegevoegd waarmee je kan herhalen wat de kledingstukken zijn die je momenteel hebt gekozen.

![alt text](<img/Schermafbeelding 2024-04-24 220433.png>)

Positief

-   Opnieuw beginnen binnen keuzes is fijn.
-   De knop om te herhalen wat je al had is goed.

Verbeterpunten

-   Op het einde kan je alsnog erbuiten focussen dus dat fixen. Ik moet sowieso even goed kijken naar de focus traps.
-   Als je verder focust dan hoor je de aria-live niet meer. Die moet je dus opnieuw kunnen horen ook.

Dingen om toe te voegen

-   Meer beschrijvende kledingstukken.
-   Ook op mobiel dit goed laten werken.
-   Uitleg van de app toevoegen? Ik heb namelijk het idee dat ze niet weet dat de app automatisch de kledingstukken kiezen die bij elkaar passen.

Overige opmerkingen

-   Als ze op een knop drukte en hoorde: "Je hebt nu een [kledingstuk] gekozen", dan ging ze meteen verder tabben zonder de tekst uit te laten spreken. Ze is dus redelijk 'haastig' maar ik wil het er toch in laten want het kan geen kwaad om te weten hoe ver je bent. Ze is dus vrij om meteen verder te gaan, maar kan ook meer informatie krijgen als ze de tekst uit laat spreken.

### Lijst van dingen die ik nog wil toevoegen

-   Meer kledingstukken toevoegen (rok, jurk, jas etc.).
    -   Ervoor zorgen dat het niet mogelijk is om sommige combinaties te kiezen (jurk moet zonder shirt).
-   Uitgebreide beschrijving toevoegen aan elk kledingstuk. Ik denk gewoon een nieuw property in het object.

### Tamara feedback

-   Add more clothing pieces.
    -   In this way I can also add more groups and subgroups so that she doesn't need to tab for a very long time.
-   Skip button.
-   Add accessories (hat, earrings, bracelets etc.).

### Eric feedback

-   Zorg ervoor dat de functionaliteit wat je hebt, dat je die goed verbetert.

### Reflectie test 2

Ze kon goed op weg met deze versie van de app. Ze kon makkelijk erdoorheen en raakt niet de weg kwijt. Waar ik me vooral nu op moet focussen is echt het 'echter' maken van de app. Meer kledingstukken toevoegen en meer gedetailleerde beschrijvingen van die kledingstukken.

## Week 4

### Voorbereiding derde test

Voor de derde test heb ik vooral gekeken naar de mobiele navigatie om die te verbeteren. Ik heb het ook voor mezelf in de code makkelijker gemaakt om kledingstukken toe te voegen. Ten slotte heb ik nog beschrijvingen toe gevoegd aan de kledingstukken

### Prototype testing

Opdracht die ik haar wil geven:

-   1: Maak 2 keer achter elkaar een outfit.
-   2: Als je niet meer weet waar je bent, probeer alsnog terug te gaan naar de buttons. Is dat lastig / vervelend?

-   Dingen wat ik uit deze test wil halen:
    -   Kan ze makkelijk een outfit creeëren op mobiel zonder de weg kwijt te raken?
    -   Als ze de weg alsnog kwijtraakt, kan ze toch haar weg terugvinden?

#### Petra feedback

-   Wat als ze blij is met een outfit? Dan een knop toevoegen dat het is afgerond
-   Kledingstukken kunnen skippen.
-   Zorgen dat ze weet dat ze aan het einde of aan het begin is.

### Exclusive design principles

Voor dit project hebben we gewerkt met de exclusive design principles. Dit laatste stukje gaat over hoe ik dat heb aangepakt in mijn app.

**Study situation**

Aan het begin van het project hebben we Petra geïnterviewt om te ontdekken wat ze precies wil in haar app, maar ook hoe ze haar navigeert door het web en wat voor device ze gebruikt. We hebben toen ontdekt dat ze het makkelijkst op haar iPhone werkt, dus we moesten de mobiele ervaring prioriteren. Als ze haar laptop gebruikt, gebruikt ze een software genaamd NVDA.

Voor mijn app heb ik dus ook zelf de screenreader vaak aan gezet om te kijken wat het doet en of het goed gaat met mijn app. Ik heb het ook op mobiel getest, maar omdat ik een android telefoon heb werkt het toch net wat anders. Dat merkte ik ook vooral toen ik beschrijvingen heb toegevoegd aan elk kledingstuk. Die werden niet voorgelezen door mijn screenreader, maar wel door die van Petra. Wel geluk gehad daarmee dus, maar wel goede dingen om op te letten.

**Ignore conventions**

Normaal gesproken heeft een website een navigatie, main content en een footer. Die van mij heeft alleen de main content. De reden is natuurlijk omdat een navigatie en een footer overbodig zouden zijn voor Petra. Ze wil simpelweg een app waarmee ze outfits kan maken, dus die extra informatie is niet nodig. Eigenlijk zitten die dingen alleen maar in de weg, vooral voor een blind persoon.

De andere convention die ik heb genegeerd zijn focus traps. Een focus trap is een gedeelte van je app waarbij je eigenlijk vast zit in een gedeelte van de website als je geen muis kan gebruiken. Normaal gesproken zou je alle controle willen hebben en overal heen willen gaan, maar in het geval van Petra heb ik expres focus traps gemaakt. Ik merkte namelijk bij de tests dat ze constant over de headings en de aria-live tekst ging waardoor ze kwijt was waar ze was gebleven. Ik heb er dus voor gekozen dat ze juist vast zit in de lijst van buttons zodat ze altijd weet waar ze is.

**Prioritise Identity**

Voor prioritise identity is het vooral dat deze app echt is gericht naar Petra. Het is misschien niet exact in mijn app zo, maar in theorie zouden alle kleren die Petra in haar kledingkast heeft in de app zitten. Die kleren zouden dus ook matchen met andere kledingstukken naar Petra's voorkeur. In dit geval heb ik dus wel zelf de kledingstukken uitgekozen en heb ik me vooral gefocust op de functionaliteit.

Hierbij moet ik wel zeggen dat ik wel wat meer had kunnen doen om de app zo te maken dat het écht van Petra is. Dat kon op een simpele manier door bijvoorbeeld een intro tekst toe te voegen die Petra bij haar naam benoemd, of juist door de styling zo te maken dat het bij haar stijl past. Ze kan misschien blind zijn, maar ze vind overduidelijk belangrijk hoe ze eruit ziet qua kleding en dat had ik wat beter kunnen vertalen naar de app.

**Add nonsense**

De nonsense heb ik vooral voor mezelf toegevoegd. Ik heb een leuke styling toegevoegd met neon buttons die oplichten en vergoten wanneer je eroverheen tabt. Natuurlijk omdat Petra blind is krijgt ze hier niks van mee. Maar het is niet alleen voor gein. Voor mij is het eigenlijk best handig om duidelijk te zien waar ze op focust met die focus states. Met een kleine outline kan het best lastig zijn om te zien wat er precies gebeurt, dus daarom is het toch best handig voor mij tijdens het testen.

Ik merkte al sinds het begin dat focus states net wat anders werken dan 'screenreader focus states'. Een heading kan bijvoorbeeld geen focus krijgen, maar je kan er wel op 'focussen' met een screenreader. Van wat ik heb gezien is er ook geen mogelijkheid om screenreader focus te stylen. Op desktop kan je met de pijltjes toetsen de screenreader focus bedienen, maar je kan alleen HOREN via de screenreader waar je bent. Je ziet niet een outline (wel op mobiel). Dus eigenlijk vind ik dat je screenreader focus wel zou moeten kunnen stylen zodat ik niet alleen meer nonsense kan toevoegen, maar ook beter toegankelijkheid kan ontwerpen voor slechtzienden. Overigens lijkt het me ook enorm handig voor mensen die niet volledig blind zijn als het deel dat wordt voorgelezen ook gestyled kan worden. Je zou de tekst dan vetgedrukt, groter en een highlight kunnen geven wanneer het wordt gelezen door een screenreader.

Wat ik zelf nog wel had willen toevoegen aan mijn app waar ik niet aan toe ben gekomen zijn geluiden. En dan vooral specifieke geluiden voor als je elementen selecteert, op buttons drukt, wanneer je opnieuw begint en wanneer je kledingstukken herhaalt. Dat zou de app toch wat meer persoonlijkheid geven terwijl het ook nog een functie heeft.

### Conclusie

Ik ben redelijk blij met het eindproduct, maar ik heb toch het gevoel dat ik wat meer kon toevoegen. Als ik nog meer tijd overhad zou ik sowieso een functie toevoegen dat je je outfits kan opslaan. Ik was ook in het begin heel bang om te proberen een functie te maken om zelf kledingstukken toe te voegen. Maar toen ik bij anderen heb gezien hoe ze het hebben gedaan, denk ik toch bij mezelf dat ik dat ook wel had kunnen doen. Dus over het algemeen wel blij, maar achteraf had ik de app nog iets vollediger kunnen maken met een net wat andere aanpak.
