# Human-Centered-Design

Welcome to blablabla ik doe dit later wel.

## Interview with Petra

Petra is a born blind woman. Our task is to create an app specifically for her to use. She wants an app where she can more easily choose what type of clothing fits each other. Here are some take-aways from the first interview we did:

**Navigating the app**

-   The most important thing is that she needs to know where she is on the site. This means that every button, link or whatever HAS to be correctly described.
-   She uses both desktop and mobile, but prefers mobile. On desktop she uses a software called nvda and on mobile she uses the built in iPhone screenreader.
-   She wants to be able to see/hear everything that the app has to offer, so no skipping links.
-   Websites and apps CAN be fun and have for example some audio, but it's important that it doesn't confuse or distract Petra.

**Clothing**

-   Her biggest difficulty is finding colors and color combinations. She does find it important that the colors look right on her. So making sure she KNOWS which colors she's choosing is an important factor.
-   If she wants to choose a clothing piece, she wants to exactly know what it looks like. So the alt text/description should be very detailed and objective (e.g. 'this blue dress has a flower pattern' instead of 'this beautiful summerlike dress has happy flowers scattered across a vibrant blue sky').
-   She has different clothing for different occasions (she mentions she has a winter- and summer box). However, she doesn't need handholding when it comes to picking these clothing items for an occassion. If it's raining outside, she will know that she wants to pick a jacket.

**Other**

-   She doesn't want to be dependant on other people to use this app.

### What will I do with this information?

So, first impressions is that it's gonna be very difficult to create this. But, I do have some first ideas:

First things first: I don't know exactly what clothing combinations she wants. Heck, she can't even TRULY know what she wants since she can't see the clothes she's wearing. So to make it simple, for my prototype I'm gonna assume which clothing combinations she prefers. That way I can completely focus on the functionality of the app. In a perfect world I would have all the data of what she likes and what combinations she likes, so that then the app would work flawlessly. So by making assumptions on the clothing/color combinations I can atleast test if the app actually works for Petra.

Now, for the ideas. I have a couple that I can work out.

-   A flow chart/filtering system. The entire app is based on combinations of colors and clothing, so there is a way to filter that out. So let's say you start with a color. Since there are general conventions of what colors are nice together, we can already filter out other colors. Pink wouldn't fit green for example. So choosing pink would exclude green and vice versa.

## Week 2

### Pre prototype testing

### Prototype testing

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

## Week 3

### Prototype testing

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
- Zorg ervoor dat de functionaliteit wat je hebt, dat je die goed verbetert.
