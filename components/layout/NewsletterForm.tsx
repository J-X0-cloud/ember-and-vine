"use client";

import { useState, type FormEvent } from "react";
import { postJson } from "@/lib/api-client";

type Status = "idle" | "sending" | "done" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    setStatus("sending");
    const result = await postJson<{ subscribed: boolean }>("/api/newsletter", { email });

    if (result.ok) {
      setStatus("done");
      setMessage("You’re on the list. See you in the next letter.");
      form.reset();
    } else {
      setStatus("error");
      setMessage(result.fieldErrors?.email?.[0] ?? result.error);
    }
  }

  return (
    <>
      <form className="news" onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor="news-email">
          Email address
        </label>
        <input
          id="news-email"
          type="email"
          name="email"
          placeholder="Your email address"
          autoComplete="email"
          required
          aria-invalid={status === "error" || undefined}
          aria-describedby={message ? "news-status" : undefined}
        />
        <button type="submit" disabled={status === "sending"}>
          Join
        </button>
      </form>
      <p id="news-status" className="news-status" role="status">
        {message}
      </p>
    </>
  );
}
