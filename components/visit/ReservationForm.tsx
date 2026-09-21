"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { Field, errorProps } from "@/components/ui/Field";
import { MAX_ONLINE_PARTY, reservationTimes, seatingOptions } from "@/lib/data/reservations";
import { formatGuests, formatTime } from "@/lib/format";
import { availableSlotsOn, isDiningRoomOpen, todayInPasadena } from "@/lib/hours";
import type { ReservationConfirmation } from "@/lib/reservations";
import { useFormSubmission } from "@/lib/use-form-submission";
import { reservationSchema } from "@/lib/validation/reservation";

export type ReservationDefaults = {
  date?: string;
  time?: string;
  party?: number;
};

const partySizes = Array.from({ length: MAX_ONLINE_PARTY }, (_, index) => index + 1);

export function ReservationForm({ defaults = {} }: { defaults?: ReservationDefaults }) {
  const [date, setDate] = useState(defaults.date ?? "");
  const [time, setTime] = useState(defaults.time ?? "19:00");
  const { state, errors, submit, reset } = useFormSubmission<ReservationConfirmation>(
    "/api/reservations",
    reservationSchema,
  );

  // Until a date is chosen, show every slot; after that, only the ones inside that night's hours.
  const slots = useMemo<string[]>(() => (date ? availableSlotsOn(date) : [...reservationTimes]), [date]);
  const closed = date !== "" && !isDiningRoomOpen(date);
  const selectedTime = slots.includes(time) ? time : (slots.at(-1) ?? time);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit(Object.fromEntries(new FormData(event.currentTarget)));
  }

  if (state.status === "success") {
    return (
      <div className="form-card form-success" role="status">
        <h2>Request received</h2>
        <p>
          <strong>{state.data.summary}</strong>
          <br />
          Reference {state.data.reference}
        </p>
        <p>
          You’ll get a text confirmation within the hour. We hold tables for{" "}
          {state.data.holdMinutes} minutes, and you can cancel up to 24 hours ahead at no charge.
        </p>
        <button className="btn btn-line" type="button" onClick={reset}>
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h2>Reserve a table</h2>
      <p>
        We hold tables for 15 minutes. For parties of nine or more, please use our{" "}
        <Link href="/private-events#enquire">event enquiry form</Link>.
      </p>
      <div className="form-grid">
        <Field id="r-date" label="Date" error={errors.date ?? (closed ? "The dining room is closed on Mondays" : undefined)}>
          <input
            id="r-date"
            type="date"
            name="date"
            required
            min={todayInPasadena()}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            {...errorProps("r-date", errors.date)}
          />
        </Field>
        <Field id="r-time" label="Time" error={errors.time}>
          <select
            id="r-time"
            name="time"
            value={selectedTime}
            onChange={(event) => setTime(event.target.value)}
            disabled={closed}
            {...errorProps("r-time", errors.time)}
          >
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {formatTime(slot)}
              </option>
            ))}
          </select>
        </Field>
        <Field id="r-party" label="Guests" error={errors.partySize}>
          <select
            id="r-party"
            name="partySize"
            defaultValue={defaults.party ?? 2}
            {...errorProps("r-party", errors.partySize)}
          >
            {partySizes.map((size) => (
              <option key={size} value={size}>
                {formatGuests(size)}
              </option>
            ))}
          </select>
        </Field>
        <Field id="r-seat" label="Seating">
          <select id="r-seat" name="seating" defaultValue="dining-room">
            {seatingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="r-name" label="Name" error={errors.name}>
          <input id="r-name" name="name" required autoComplete="name" {...errorProps("r-name", errors.name)} />
        </Field>
        <Field id="r-phone" label="Mobile" error={errors.phone}>
          <input
            id="r-phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            {...errorProps("r-phone", errors.phone)}
          />
        </Field>
        <Field id="r-notes" label="Occasion or allergies" full error={errors.notes}>
          <textarea
            id="r-notes"
            name="notes"
            placeholder="Celebrating something? Any allergies we should know about?"
          />
        </Field>
        <div className="full">
          <button
            className="btn btn-ember"
            type="submit"
            disabled={closed || state.status === "submitting"}
          >
            {state.status === "submitting" ? "Sending…" : "Request reservation"}
          </button>
        </div>
      </div>
      {state.status === "error" ? (
        <p className="form-alert" role="alert">
          {state.message}
        </p>
      ) : null}
      <p className="form-note">
        You’ll get a text confirmation within the hour. Cancel up to 24 hours ahead at no charge.
      </p>
    </form>
  );
}
