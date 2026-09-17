import { openingHours } from "@/lib/data/hours";
import { LAST_SEATING_BUFFER_MIN, reservationTimes } from "@/lib/data/reservations";
import type { DayCode } from "@/types/restaurant";

const DAY_CODES: DayCode[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const RESTAURANT_TIME_ZONE = "America/Los_Angeles";

export function toMinutes(value: string): number {
  const [h = "0", m = "0"] = value.split(":");
  return Number(h) * 60 + Number(m);
}

/** Parses "YYYY-MM-DD" as a calendar date (no timezone shift). */
export function parseISODate(isoDate: string): Date {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
}

export function dayCodeFor(isoDate: string): DayCode {
  return DAY_CODES[parseISODate(isoDate).getDay()] ?? "Mo";
}

export function diningHoursOn(isoDate: string) {
  const day = dayCodeFor(isoDate);
  return openingHours.find((spec) => spec.venue === "dining" && spec.days.includes(day)) ?? null;
}

export function isDiningRoomOpen(isoDate: string): boolean {
  return diningHoursOn(isoDate) !== null;
}

/** Reservation slots that fall inside the dining room's seating window for a given date. */
export function availableSlotsOn(isoDate: string): string[] {
  const hours = diningHoursOn(isoDate);
  if (!hours) return [];
  const first = toMinutes(hours.opens);
  const last = toMinutes(hours.closes) - LAST_SEATING_BUFFER_MIN;
  return reservationTimes.filter((slot) => {
    const minutes = toMinutes(slot);
    return minutes >= first && minutes <= last;
  });
}

/** Today's date in Pasadena, as "YYYY-MM-DD". */
export function todayInPasadena(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: RESTAURANT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function addDays(isoDate: string, days: number): string {
  const date = parseISODate(isoDate);
  date.setDate(date.getDate() + days);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * "This weekend" in the booking bar: today if it is already Friday to Sunday,
 * otherwise the coming Friday.
 */
export function upcomingWeekend(isoDate: string): string {
  const day = parseISODate(isoDate).getDay();
  if (day === 0 || day === 5 || day === 6) return isoDate;
  const offset = 5 - day;
  return addDays(isoDate, offset);
}
