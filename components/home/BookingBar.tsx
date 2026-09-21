"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  bookingBarDates,
  bookingBarParties,
  bookingBarTimes,
  type BookingBarDate,
} from "@/lib/data/reservations";
import { formatTime } from "@/lib/format";
import { addDays, todayInPasadena, upcomingWeekend } from "@/lib/hours";

function resolveDate(choice: BookingBarDate): string | null {
  const today = todayInPasadena();
  switch (choice) {
    case "tonight":
      return today;
    case "tomorrow":
      return addDays(today, 1);
    case "weekend":
      return upcomingWeekend(today);
    case "pick":
      return null;
  }
}

/**
 * Quick availability bar under the home hero. Hands the guest's choices to the full
 * reservation form on /visit, which pre-fills from the query string.
 */
export function BookingBar() {
  const router = useRouter();
  const [date, setDate] = useState<BookingBarDate>("tonight");
  const [time, setTime] = useState<string>("19:00");
  const [party, setParty] = useState<number>(2);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({ time, party: String(party) });
    const resolved = resolveDate(date);
    if (resolved) params.set("date", resolved);
    router.push(`/visit?${params.toString()}#reserve`);
  }

  return (
    <div className="booking wrap">
      <form onSubmit={handleSubmit} aria-label="Check availability">
        <div className="field field-title">
          <strong>Book a table</strong>
          <span>Parties of 1–8 online</span>
        </div>
        <div className="field">
          <label htmlFor="b-date">Date</label>
          <select
            id="b-date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value as BookingBarDate)}
          >
            {bookingBarDates.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="b-time">Time</label>
          <select id="b-time" name="time" value={time} onChange={(event) => setTime(event.target.value)}>
            {bookingBarTimes.map((slot) => (
              <option key={slot} value={slot}>
                {formatTime(slot)}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="b-party">Guests</label>
          <select
            id="b-party"
            name="party"
            value={party}
            onChange={(event) => setParty(Number(event.target.value))}
          >
            {bookingBarParties.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-ember" type="submit">
          Find a table
        </button>
      </form>
    </div>
  );
}
