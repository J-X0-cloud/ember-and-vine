import type { EventSpace, Feature } from "@/types/restaurant";

export const eventSpaces: EventSpace[] = [
  {
    slug: "cellar-room",
    kind: "Semi-private",
    name: "The Cellar Room",
    description:
      "Tucked behind the wine wall, with its own entrance from the courtyard. Ideal for rehearsal dinners, family milestones and client dinners that need a little quiet.",
    image: {
      src: "/images/dining-room-corner.webp",
      alt: "A semi-private corner of the dining room",
      width: 1200,
      height: 1800,
    },
    seated: "8–24",
    reception: "30",
    priceFrom: "$1.8k",
    priceNote: "From, Tue–Thu",
    cta: "Enquire about the Cellar Room",
  },
  {
    slug: "long-table",
    kind: "Private",
    name: "The Long Table",
    description:
      "A single oak table running the length of the back room, under the arched windows of the old print works. Built for team offsites, wine dinners and big birthdays.",
    image: {
      src: "/images/long-table.webp",
      alt: "The long communal table set for a private dinner",
      width: 1920,
      height: 1268,
    },
    seated: "24–60",
    reception: "75",
    priceFrom: "$4.5k",
    priceNote: "From, Tue–Thu",
    cta: "Enquire about the Long Table",
  },
  {
    slug: "buyout",
    kind: "Exclusive",
    name: "Full buyout",
    description:
      "The dining room, wine bar and courtyard are yours. Popular for weddings, launch parties and holiday celebrations — with a live-fire station on the patio if you want one.",
    image: {
      src: "/images/dining-room-hero.webp",
      alt: "The full dining room under glass chandeliers",
      width: 1920,
      height: 1440,
    },
    seated: "110",
    reception: "140",
    priceFrom: "$14k",
    priceNote: "From, Sun–Thu",
    cta: "Enquire about a buyout",
  },
];

export const eventInclusions: Feature[] = [
  {
    marker: "01",
    title: "Menus from the hearth",
    body: "Family-style feasts or plated courses, written with our chefs around your guests, dietary needs and the season.",
  },
  {
    marker: "02",
    title: "Wine pairings",
    body: "Our sommelier builds a pairing flight or a curated list for the evening, with magnums and older vintages on request.",
  },
  {
    marker: "03",
    title: "A single point of contact",
    body: "One coordinator handles floor plans, printed menus, AV, florals and timing — so you can enjoy the night.",
  },
];

export const guestRanges = [
  { value: "8-24", label: "8–24" },
  { value: "25-60", label: "25–60" },
  { value: "61-110", label: "61–110" },
  { value: "reception-140", label: "Up to 140 (reception)" },
] as const;

export const occasions = [
  { value: "celebration", label: "Birthday or anniversary" },
  { value: "wedding", label: "Rehearsal dinner or wedding" },
  { value: "corporate", label: "Corporate dinner or offsite" },
  { value: "wine-dinner", label: "Wine dinner" },
  { value: "other", label: "Something else" },
] as const;
