import type { Faq, Feature, Testimonial, VenueCard } from "@/types/restaurant";

export const houseStats = [
  { value: "12 ft", label: "open hearth" },
  { value: "300+", label: "bottles in the cellar" },
  { value: "22", label: "wines by the glass" },
];

export const venueCards: VenueCard[] = [
  {
    kicker: "Tue – Sun from 5 pm",
    title: "The Dining Room",
    body: "Shared plates, whole fish and dry-aged cuts from the hearth, served family-style or course by course.",
    href: "/menus",
    cta: "View menus",
    image: {
      src: "/images/dining-room-wide.webp",
      alt: "The main dining room set for dinner",
      width: 1920,
      height: 1281,
    },
  },
  {
    kicker: "Walk-ins welcome",
    title: "The Wine Bar",
    body: "Twenty-two wines by the glass, small plates until close, and Vine Hour pours Tuesday through Friday.",
    href: "/visit",
    cta: "Hours & location",
    image: {
      src: "/images/wine-bar.webp",
      alt: "The wine bar with curved velvet chairs and a backlit shelf of bottles",
      width: 1200,
      height: 1500,
    },
  },
  {
    kicker: "8 to 140 guests",
    title: "Private Events",
    body: "Rehearsal dinners, team offsites and birthdays in the Cellar Room, at the Long Table or with a full buyout.",
    href: "/private-events",
    cta: "Plan an event",
    image: {
      src: "/images/long-table.webp",
      alt: "A long communal table set for a private dinner",
      width: 1920,
      height: 1268,
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The hanger steak is the best thing I ate all year, and the sommelier talked me into a Sierra Foothills red I would never have picked. Both were right.",
    name: "Marisol T.",
    neighborhood: "Altadena",
  },
  {
    quote:
      "We booked the Cellar Room for my parents’ fortieth. The team handled every detail, down to the wine they drank at their wedding.",
    name: "Graham O.",
    neighborhood: "South Pasadena",
  },
  {
    quote:
      "My Tuesday ritual: a seat at the bar, a glass of whatever they’re excited about, and the shishitos. It never gets old.",
    name: "Priya S.",
    neighborhood: "Pasadena",
  },
];

export const cookingRules: Feature[] = [
  {
    marker: "01",
    title: "Real wood, every plate",
    body: "California live oak for heat, almond wood for sweetness. No gas, no shortcuts — the fire sets the rhythm of the kitchen.",
  },
  {
    marker: "02",
    title: "The market sets the menu",
    body: "Our chefs shop the Pasadena and Santa Monica farmers’ markets each week and buy whole animals from ranches in the Central Coast.",
  },
  {
    marker: "03",
    title: "Wine you can talk about",
    body: "Every bottle is tasted by the whole floor team, so whoever pours your glass can tell you who made it and why it’s here.",
  },
];

export const neighborCommitments: Feature[] = [
  {
    marker: "Mondays",
    title: "Industry nights",
    body: "Once a month we open on our day off for hospitality workers, with a family-meal menu and wines at cost.",
  },
  {
    marker: "Every week",
    title: "Nothing wasted",
    body: "Trim becomes chorizo and stock, spent wood ash goes to a community garden in Altadena, and leftover bread becomes breadcrumbs.",
  },
  {
    marker: "All year",
    title: "Fair kitchens",
    body: "Health coverage for every full-time employee, and a service charge that is shared across the whole team, front and back.",
  },
];

export const faqs: Faq[] = [
  {
    question: "Do I need a reservation?",
    answer:
      "We recommend booking the dining room, especially Friday and Saturday. The wine bar and patio are first come, first served, and we keep a few dining room tables back for walk-ins each night.",
  },
  {
    question: "Can you accommodate allergies and dietary needs?",
    answer:
      "Yes. Most of the menu is naturally gluten-free, and there are vegetarian and vegan dishes in every section. Add a note to your reservation and your server will walk you through options.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "No dress code — come as you are. Most guests land somewhere between after-work and date night.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Absolutely, in the dining room before 8 pm. We have high chairs and a short kids’ menu from the hearth. The wine bar is 21 and over.",
  },
  {
    question: "What is your corkage policy?",
    answer:
      "Corkage is $30 per 750 ml bottle, up to two bottles per table, waived for each bottle you buy from our list.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, in any amount. They can be used in the dining room, the wine bar and for private events.",
  },
];
