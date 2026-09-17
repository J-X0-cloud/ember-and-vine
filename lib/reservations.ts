import { TABLE_HOLD_MIN } from "@/lib/data/reservations";
import { formatGuests, formatLongDate, formatTime } from "@/lib/format";
import { availableSlotsOn, toMinutes } from "@/lib/hours";
import { notifyTeam } from "@/lib/notify";
import type { ReservationRequest } from "@/lib/validation/reservation";

export type ReservationConfirmation = {
  reference: string;
  status: "requested";
  summary: string;
  holdMinutes: number;
};

export class SlotUnavailableError extends Error {
  constructor(public readonly alternatives: string[]) {
    super("That time is fully booked");
    this.name = "SlotUnavailableError";
  }
}

export interface ReservationService {
  request(input: ReservationRequest): Promise<ReservationConfirmation>;
}

/** Covers the floor can seat per half-hour slot for online bookings. */
const COVERS_PER_SLOT = 24;

/**
 * Online bookings are held in memory and forwarded to the floor team, who confirm by text.
 * Swap for the reservation platform's API client without changing the route handler.
 */
class FloorTeamReservationService implements ReservationService {
  private readonly booked = new Map<string, number>();

  async request(input: ReservationRequest): Promise<ReservationConfirmation> {
    const key = `${input.date}T${input.time}`;
    const covers = this.booked.get(key) ?? 0;

    if (covers + input.partySize > COVERS_PER_SLOT) {
      throw new SlotUnavailableError(this.nearbySlots(input));
    }

    this.booked.set(key, covers + input.partySize);
    const reference = createReference("EV");
    const summary = `${formatGuests(input.partySize)}, ${formatLongDate(input.date)} at ${formatTime(input.time)}`;

    await notifyTeam("reservations", { reference, summary, ...input });

    return { reference, status: "requested", summary, holdMinutes: TABLE_HOLD_MIN };
  }

  /** Other open slots within an hour of the requested time that can still fit the party. */
  private nearbySlots(input: ReservationRequest): string[] {
    const requested = toMinutes(input.time);
    return availableSlotsOn(input.date).filter((slot) => {
      const distance = Math.abs(toMinutes(slot) - requested);
      const covers = this.booked.get(`${input.date}T${slot}`) ?? 0;
      return distance > 0 && distance <= 60 && covers + input.partySize <= COVERS_PER_SLOT;
    });
  }
}

export function createReference(prefix: string): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return `${prefix}-${Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("")}`;
}

export const reservationService: ReservationService = new FloorTeamReservationService();
