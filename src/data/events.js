// src/data/events.js
//
// Denne fil fungerer som en statisk database for alle events på kalendersiden.
// Vi har valgt en statisk datastruktur frem for en dynamisk database som Supabase,
// fordi Autopouls events ændrer sig sæsonbaseret og ikke løbende.
// Filen eksporterer to ting: months og events.
// Begge importeres i CalendarView.astro og bruges til at bygge kalenderen op.

// ─────────────────────────────────────────────
// MÅNEDER
// ─────────────────────────────────────────────
// months er et array med de seks måneder Autopoul har åbent.
// Hver måned har to egenskaber:
//   id    → bruges som nøgle til at slå events op i events-objektet nedenunder
//   label → den tekst der vises i månedsskifteren i UI'et
// Rækkefølgen i arrayet bestemmer hvilken måned der kommer først og sidst.

export const months = [
  { id: "maj", label: "MAJ" },
  { id: "juni", label: "JUNI" },
  { id: "juli", label: "JULI" },
  { id: "august", label: "AUGUST" },
  { id: "september", label: "SEPTEMBER" },
  { id: "oktober", label: "OKTOBER" },
];

// ─────────────────────────────────────────────
// EVENTS
// ─────────────────────────────────────────────
// events er et objekt hvor hver nøgle matcher id'et fra months-arrayet ovenfor.
// Det betyder at events.maj indeholder alle events for maj,
// events.juni indeholder alle events for juni osv.
//
// Hvert event har fem egenskaber:
//   slot  → nummeret på det felt i kalender-gridet eventet skal placeres i (1-31)
//   date  → datoen der vises øverst til venstre på event-kortet
//   time  → tidspunktet der vises øverst til højre på event-kortet
//   title → eventets navn der vises nederst på event-kortet
//   img   → stien til billedet der bruges som baggrund på event-kortet
//
// Sådan bruges dataen i CalendarView:
// 1. JavaScript finder den aktive måneds id fx "maj"
// 2. Slår events["maj"] op og får alle events for maj
// 3. Bygger et grid med 31 felter hvor events placeres på deres slot-nummer
// 4. Felter uden event vises som tomme felter med border

export const events = {
  maj: [
    {
      slot: 2,
      date: "02.05.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event1.webp",
    },
    {
      slot: 6,
      date: "06.05.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event2.webp",
    },
    {
      slot: 7,
      date: "07.05.2026",
      time: "FROM 19",
      title: "SUNDAY MARKET",
      img: "/img/event1.webp",
    },
    {
      slot: 9,
      date: "09.05.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event4.webp",
    },
    {
      slot: 13,
      date: "13.05.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event6.webp",
    },
    {
      slot: 16,
      date: "16.05.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event5.webp",
    },
    {
      slot: 19,
      date: "19.05.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event2.webp",
    },
    {
      slot: 23,
      date: "23.05.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event3.webp",
    },
    {
      slot: 26,
      date: "26.05.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event4.webp",
    },
    {
      slot: 29,
      date: "29.05.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event3.webp",
    },
  ],
  juni: [
    {
      slot: 1,
      date: "01.06.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event5.webp",
    },
    {
      slot: 4,
      date: "04.06.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event4.webp",
    },
    {
      slot: 8,
      date: "08.06.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event3.webp",
    },
    {
      slot: 11,
      date: "11.06.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event2.webp",
    },
    {
      slot: 15,
      date: "15.06.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event4.webp",
    },
    {
      slot: 18,
      date: "18.06.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event5.webp",
    },
    {
      slot: 22,
      date: "22.06.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event4.webp",
    },
    {
      slot: 25,
      date: "25.06.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event2.webp",
    },
    {
      slot: 28,
      date: "28.06.2026",
      time: "FROM 19",
      title: "SUNDAY MARKET",
      img: "/img/event5.webp",
    },
    {
      slot: 30,
      date: "30.06.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event3.webp",
    },
  ],
  juli: [
    {
      slot: 3,
      date: "03.07.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event4.webp",
    },
    {
      slot: 5,
      date: "05.07.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event2.webp",
    },
    {
      slot: 9,
      date: "09.07.2026",
      time: "FROM 19",
      title: "SUNDAY MARKET",
      img: "/img/event1.webp",
    },
    {
      slot: 12,
      date: "12.07.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event6.webp",
    },
    {
      slot: 16,
      date: "16.07.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event3.webp",
    },
    {
      slot: 20,
      date: "20.07.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event6.webp",
    },
    {
      slot: 24,
      date: "24.07.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event2.webp",
    },
    {
      slot: 27,
      date: "27.07.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event6.webp",
    },
    {
      slot: 29,
      date: "29.07.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event5.webp",
    },
    {
      slot: 31,
      date: "31.07.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event2.webp",
    },
  ],
  august: [
    {
      slot: 2,
      date: "02.08.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event3.webp",
    },
    {
      slot: 6,
      date: "06.08.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event6.webp",
    },
    {
      slot: 10,
      date: "10.08.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event4.webp",
    },
    {
      slot: 14,
      date: "14.08.2026",
      time: "FROM 19",
      title: "SUNDAY MARKET",
      img: "/img/event1.webp",
    },
    {
      slot: 17,
      date: "17.08.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event2.webp",
    },
    {
      slot: 21,
      date: "21.08.2026",
      time: "FROM 19",
      title: "SUNDAY MARKET",
      img: "/img/event1.webp",
    },
    {
      slot: 24,
      date: "24.08.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event4.webp",
    },
    {
      slot: 26,
      date: "26.08.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event3.webp",
    },
    {
      slot: 28,
      date: "28.08.2026",
      time: "FROM 19",
      title: "SUNDAY MARKET",
      img: "/img/event1.webp",
    },
    {
      slot: 30,
      date: "30.08.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event4.webp",
    },
  ],
  september: [
    {
      slot: 1,
      date: "01.09.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event6.webp",
    },
    {
      slot: 5,
      date: "05.09.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event2.webp",
    },
    {
      slot: 8,
      date: "08.09.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event5.webp",
    },
    {
      slot: 12,
      date: "12.09.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event5.webp",
    },
    {
      slot: 15,
      date: "15.09.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event4.webp",
    },
    {
      slot: 19,
      date: "19.09.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event3.webp",
    },
    {
      slot: 22,
      date: "22.09.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event4.webp",
    },
    {
      slot: 25,
      date: "25.09.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event2.webp",
    },
    {
      slot: 27,
      date: "27.09.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event3.webp",
    },
    {
      slot: 30,
      date: "30.09.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event2.webp",
    },
  ],
  oktober: [
    {
      slot: 2,
      date: "02.10.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event6.webp",
    },
    {
      slot: 5,
      date: "05.10.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event3.webp",
    },
    {
      slot: 9,
      date: "09.10.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event5.webp",
    },
    {
      slot: 13,
      date: "13.10.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event4.webp",
    },
    {
      slot: 16,
      date: "16.10.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event6.webp",
    },
    {
      slot: 20,
      date: "20.10.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event3.webp",
    },
    {
      slot: 23,
      date: "23.10.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event6.webp",
    },
    {
      slot: 26,
      date: "26.10.2026",
      time: "FROM 19",
      title: "LIVE ART AUCTION",
      img: "/img/event2.webp",
    },
    {
      slot: 28,
      date: "28.10.2026",
      time: "FROM 19",
      title: "SUNDAY MARKET",
      img: "/img/event1.webp",
    },
    {
      slot: 31,
      date: "31.10.2026",
      time: "FROM 19",
      title: "POP-UP FOOD EVENT",
      img: "/img/event3.webp",
    },
  ],
};
