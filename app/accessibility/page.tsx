import { LegalPage } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Accessibility",
  description: "How Ember & Vine makes its website and restaurant accessible to every guest.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage eyebrow="Accessibility" title="Accessibility statement" updated="March 2026">
      <p>
        We want every guest to be able to read our menus, check our hours and book a table without
        help. This site is built with semantic HTML, labelled form fields, visible focus states and
        text alternatives for images, and is tested with keyboard navigation and screen readers
        against WCAG 2.2 AA.
      </p>
      <h2>In the restaurant</h2>
      <p>
        The dining room, wine bar, patio and the Cellar Room are step-free from the courtyard
        entrance, and our restroom is fully accessible. Let us know in your reservation notes if
        you’d like a particular table and we’ll have it ready.
      </p>
      <h2>Tell us what isn’t working</h2>
      <p>
        If anything on this site gets in your way, email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{" "}
        <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a> and we’ll take your booking
        by phone while we fix it.
      </p>
    </LegalPage>
  );
}
