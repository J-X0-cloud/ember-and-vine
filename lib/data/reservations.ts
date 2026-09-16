export const MAX_ONLINE_PARTY = 8;
/** Minutes before the dining room closes that we stop seating new tables. */
export const LAST_SEATING_BUFFER_MIN = 60;
export const TABLE_HOLD_MIN = 15;

export const reservationTimes = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
] as const;

/** The home-page booking bar offers a shorter evening window. */
export const bookingBarTimes = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"] as const;

export const seatingOptions = [
  { value: "dining-room", label: "Dining room" },
  { value: "chefs-counter", label: "Chef’s counter" },
  { value: "patio", label: "Patio" },
  { value: "no-preference", label: "No preference" },
] as const;

/** Party-size buckets used by the booking bar; each maps to the first size in the bucket. */
export const bookingBarParties = [
  { value: 1, label: "1 guest" },
  { value: 2, label: "2 guests" },
  { value: 3, label: "3 guests" },
  { value: 4, label: "4 guests" },
  { value: 5, label: "5–6 guests" },
  { value: 7, label: "7–8 guests" },
] as const;

export const bookingBarDates = [
  { value: "tonight", label: "Tonight" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "weekend", label: "This weekend" },
  { value: "pick", label: "Pick a date…" },
] as const;

export type ReservationTime = (typeof reservationTimes)[number];
export type SeatingOption = (typeof seatingOptions)[number]["value"];
export type BookingBarDate = (typeof bookingBarDates)[number]["value"];
