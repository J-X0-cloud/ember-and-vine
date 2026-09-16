export type NavLink = {
  label: string;
  href: string;
};

export type DayCode = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";

/** A block of opening hours for one part of the restaurant, in 24h "HH:mm" local time. */
export type OpeningHoursSpec = {
  venue: "dining" | "bar";
  days: DayCode[];
  opens: string;
  /** Closing time; "24:00" means midnight. */
  closes: string;
};

export type HoursRow = {
  label: string;
  value: string;
};

export type HoursTableRow = {
  days: string;
  lines: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  neighborhood: string;
};

export type Feature = {
  marker: string;
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type EventSpace = {
  slug: string;
  kind: "Semi-private" | "Private" | "Exclusive";
  name: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  seated: string;
  reception: string;
  priceFrom: string;
  priceNote: string;
  cta: string;
};

export type VenueCard = {
  kicker: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  image: { src: string; alt: string; width: number; height: number };
};
