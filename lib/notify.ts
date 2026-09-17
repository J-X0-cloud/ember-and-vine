type Channel = "reservations" | "events" | "newsletter";

const WEBHOOKS: Record<Channel, string | undefined> = {
  reservations: process.env.RESERVATIONS_WEBHOOK_URL,
  events: process.env.EVENTS_WEBHOOK_URL,
  newsletter: process.env.NEWSLETTER_WEBHOOK_URL,
};

/**
 * Forwards a structured submission to the team's inbox automation. Falls back to a server
 * log in local development so forms can be exercised without credentials.
 */
export async function notifyTeam(channel: Channel, payload: Record<string, unknown>) {
  const url = WEBHOOKS[channel];
  if (!url) {
    console.info(`[${channel}] webhook not configured, submission logged`, payload);
    return;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ channel, submittedAt: new Date().toISOString(), ...payload }),
  });

  if (!response.ok) {
    throw new Error(`Failed to notify ${channel} webhook: ${response.status}`);
  }
}
