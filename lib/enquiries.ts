import { guestRanges, occasions } from "@/lib/data/events";
import { formatLongDate } from "@/lib/format";
import { notifyTeam } from "@/lib/notify";
import { createReference } from "@/lib/reservations";
import type { EventEnquiry } from "@/lib/validation/enquiry";

export type EnquiryReceipt = {
  reference: string;
  suggestedSpace: string;
  replyBy: string;
};

/** Suggests the right room from the guest count, so the coordinator starts with context. */
export function suggestSpace(guests: EventEnquiry["guests"]): string {
  switch (guests) {
    case "8-24":
      return "The Cellar Room";
    case "25-60":
      return "The Long Table";
    default:
      return "Full buyout";
  }
}

/** One business day, skipping the weekend. */
function nextBusinessDay(from: Date): Date {
  const next = new Date(from);
  do {
    next.setDate(next.getDate() + 1);
  } while (next.getDay() === 0 || next.getDay() === 6);
  return next;
}

export async function submitEnquiry(enquiry: EventEnquiry): Promise<EnquiryReceipt> {
  const reference = createReference("EVT");
  const suggestedSpace = suggestSpace(enquiry.guests);
  const replyBy = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    nextBusinessDay(new Date()),
  );

  await notifyTeam("events", {
    reference,
    suggestedSpace,
    ...enquiry,
    guestsLabel: guestRanges.find((range) => range.value === enquiry.guests)?.label,
    occasionLabel: occasions.find((occasion) => occasion.value === enquiry.occasion)?.label,
    dateLabel: formatLongDate(enquiry.date),
  });

  return { reference, suggestedSpace, replyBy };
}
