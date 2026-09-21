"use client";

import { useSearchParams } from "next/navigation";
import { type FormEvent } from "react";
import { Field, errorProps } from "@/components/ui/Field";
import { guestRanges, occasions } from "@/lib/data/events";
import type { EnquiryReceipt } from "@/lib/enquiries";
import { todayInPasadena } from "@/lib/hours";
import { useFormSubmission } from "@/lib/use-form-submission";
import { enquirySchema } from "@/lib/validation/enquiry";

/** Pre-selects a guest range when the guest clicks "Enquire about…" on a space. */
const spaceDefaults: Record<string, (typeof guestRanges)[number]["value"]> = {
  "cellar-room": "8-24",
  "long-table": "25-60",
  buyout: "61-110",
};

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const space = searchParams.get("space") ?? "";
  const { state, errors, submit, reset } = useFormSubmission<EnquiryReceipt>(
    "/api/enquiries",
    enquirySchema,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit(Object.fromEntries(new FormData(event.currentTarget)));
  }

  if (state.status === "success") {
    return (
      <div className="form-card form-success" role="status">
        <h3>Thank you — we’re on it</h3>
        <p>
          Your enquiry reference is <strong>{state.data.reference}</strong>. Based on your guest
          count we’d suggest <strong>{state.data.suggestedSpace}</strong>; our events coordinator
          will reply by {state.data.replyBy} with availability, sample menus and pricing.
        </p>
        <button className="btn btn-line" type="button" onClick={reset}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h3>Event enquiry</h3>
      <p>All fields marked * are required.</p>
      <div className="form-grid">
        <Field id="e-name" label="Name *" error={errors.name}>
          <input id="e-name" name="name" required autoComplete="name" {...errorProps("e-name", errors.name)} />
        </Field>
        <Field id="e-email" label="Email *" error={errors.email}>
          <input
            id="e-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            {...errorProps("e-email", errors.email)}
          />
        </Field>
        <Field id="e-date" label="Preferred date *" error={errors.date}>
          <input
            id="e-date"
            type="date"
            name="date"
            required
            min={todayInPasadena()}
            {...errorProps("e-date", errors.date)}
          />
        </Field>
        <Field id="e-guests" label="Guests *" error={errors.guests}>
          <select
            id="e-guests"
            name="guests"
            required
            defaultValue={spaceDefaults[space] ?? ""}
            key={space}
            {...errorProps("e-guests", errors.guests)}
          >
            <option value="">Select</option>
            {guestRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="e-type" label="Occasion" full>
          <select id="e-type" name="occasion" defaultValue="celebration">
            {occasions.map((occasion) => (
              <option key={occasion.value} value={occasion.value}>
                {occasion.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="e-notes" label="Tell us more" full error={errors.notes}>
          <textarea
            id="e-notes"
            name="notes"
            placeholder="Budget, timing, dietary needs, anything we should know"
          />
        </Field>
        <div className="full">
          <button className="btn btn-ember" type="submit" disabled={state.status === "submitting"}>
            {state.status === "submitting" ? "Sending…" : "Send enquiry"}
          </button>
        </div>
      </div>
      {state.status === "error" ? (
        <p className="form-alert" role="alert">
          {state.message}
        </p>
      ) : null}
      <p className="form-note">
        We never share your details. Deposits are fully refundable up to 14 days before your event.
      </p>
    </form>
  );
}
