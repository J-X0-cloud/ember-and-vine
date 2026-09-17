import { z } from "zod";
import {
  MAX_ONLINE_PARTY,
  reservationTimes,
  seatingOptions,
  type SeatingOption,
} from "@/lib/data/reservations";
import { availableSlotsOn, isDiningRoomOpen, todayInPasadena } from "@/lib/hours";

const seatingValues = seatingOptions.map((option) => option.value) as [
  SeatingOption,
  ...SeatingOption[],
];

export const reservationSchema = z
  .object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a date for your table"),
    time: z.enum(reservationTimes, { errorMap: () => ({ message: "Choose a time" }) }),
    partySize: z.coerce
      .number()
      .int()
      .min(1, "At least one guest")
      .max(MAX_ONLINE_PARTY, "For nine or more guests, please send an event enquiry"),
    seating: z.enum(seatingValues).default("no-preference"),
    name: z.string().trim().min(2, "Tell us who the table is for").max(80),
    phone: z
      .string()
      .trim()
      .regex(/^\+?[\d\s().-]{7,20}$/, "Enter a mobile number we can text"),
    notes: z.string().trim().max(500, "Keep notes under 500 characters").default(""),
  })
  .superRefine((value, ctx) => {
    if (value.date < todayInPasadena()) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["date"], message: "That date has passed" });
      return;
    }
    if (!isDiningRoomOpen(value.date)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["date"],
        message: "The dining room is closed on Mondays",
      });
      return;
    }
    if (!availableSlotsOn(value.date).includes(value.time)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["time"],
        message: "That time is outside dining room hours for this day",
      });
    }
  });

export type ReservationInput = z.input<typeof reservationSchema>;
export type ReservationRequest = z.output<typeof reservationSchema>;
