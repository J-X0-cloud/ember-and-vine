import { LegalPage } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "What Ember & Vine collects when you book a table, send an event enquiry or join our list.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy" title="Privacy policy" updated="March 2026">
      <p>
        We only collect what we need to look after your booking. We never sell or share your
        details with anyone outside the restaurant team.
      </p>
      <h2>Reservations and enquiries</h2>
      <p>
        When you request a table we keep your name, mobile number, party size and any notes about
        occasions or allergies, so we can confirm by text and prepare for your visit. Event
        enquiries also include your email, preferred date and guest count, which our events
        coordinator uses to reply.
      </p>
      <h2>The Ember Letter</h2>
      <p>
        If you join our monthly letter we store your email address only. Every letter has a one-click
        unsubscribe link.
      </p>
      <h2>Analytics</h2>
      <p>
        We use cookie-free, aggregated page analytics to see which pages guests use most. No
        advertising or cross-site tracking scripts run on this site.
      </p>
      <h2>Contact</h2>
      <p>
        To see or delete the information we hold about you, email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
