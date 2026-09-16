import type { HoursRow, HoursTableRow, OpeningHoursSpec } from "@/types/restaurant";

/**
 * Single source of truth for opening hours. The hours table, the info strip, the
 * reservation slot rules and the JSON-LD schema are all derived from or kept next to this.
 */
export const openingHours: OpeningHoursSpec[] = [
  { venue: "dining", days: ["Tu", "We", "Th"], opens: "17:00", closes: "22:00" },
  { venue: "dining", days: ["Fr", "Sa"], opens: "17:00", closes: "23:00" },
  { venue: "dining", days: ["Su"], opens: "16:00", closes: "21:00" },
  { venue: "bar", days: ["Tu", "We", "Th", "Fr", "Sa"], opens: "16:00", closes: "24:00" },
  { venue: "bar", days: ["Su"], opens: "16:00", closes: "22:00" },
];

export const vineHourSpec = { days: ["Tu", "We", "Th", "Fr"], opens: "16:00", closes: "18:00" };

export const heroHours = {
  headline: "Open Tuesday – Sunday",
  lines: ["Dining room 5 – 10 pm", "Wine bar 4 pm – late"],
};

export const diningRoomHours: HoursRow[] = [
  { label: "Tue – Thu", value: "5 – 10 pm" },
  { label: "Fri – Sat", value: "5 – 11 pm" },
  { label: "Sunday", value: "4 – 9 pm" },
];

export const wineBarHours: HoursRow[] = [
  { label: "Tue – Sat", value: "4 pm – midnight" },
  { label: "Sunday", value: "4 – 10 pm" },
  { label: "Vine Hour", value: "Tue – Fri, 4 – 6 pm" },
];

export const hoursTable: HoursTableRow[] = [
  { days: "Monday", lines: ["Closed"] },
  { days: "Tuesday – Thursday", lines: ["Bar 4 pm – midnight", "Dining room 5 – 10 pm"] },
  { days: "Friday – Saturday", lines: ["Bar 4 pm – midnight", "Dining room 5 – 11 pm"] },
  { days: "Sunday", lines: ["Bar 4 – 10 pm", "Dining room 4 – 9 pm"] },
  { days: "Vine Hour", lines: ["Tue – Fri, 4 – 6 pm at the bar"] },
];
