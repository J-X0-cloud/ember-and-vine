import { z } from "zod";
import { guestRanges, occasions } from "@/lib/data/events";
import { todayInPasadena } from "@/lib/hours";

type GuestRange = (typeof guestRanges)[number]["value"];
type Occasion = (typeof occasions)[number]["value"];

const guestRangeValues = guestRanges.map((range) => range.value) as [GuestRange, ...GuestRange[]];
const occasionValues = occasions.map((occasion) => occasion.value) as [Occasion, ...Occasion[]];

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please add your name").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a preferred date")
    .refine((value) => value >= todayInPasadena(), "Choose a date in the future"),
  guests: z.enum(guestRangeValues, { errorMap: () => ({ message: "Select a guest count" }) }),
  occasion: z.enum(occasionValues).default("celebration"),
  notes: z.string().trim().max(2000).default(""),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type EventEnquiry = z.output<typeof enquirySchema>;
