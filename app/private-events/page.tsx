import { Suspense } from "react";
import { EnquiryForm } from "@/components/events/EnquiryForm";
import { SpaceList } from "@/components/events/SpaceList";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { eventInclusions } from "@/lib/data/events";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Private Events & Dining",
  description:
    "Host a private dinner, rehearsal dinner or buyout at Ember & Vine in Pasadena: the Cellar Room for 8 to 24, the Long Table for up to 60 and full buyouts for 140 guests.",
  path: "/private-events",
  image: "/images/long-table.webp",
});

export default function PrivateEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Private events"
        title={
          <>
            Your table, <em>our fire</em>
          </>
        }
        lede="Seated dinners for 8 to 60, cocktail receptions for up to 140, and menus built around the hearth by our chefs and sommelier."
        image={{ src: "/images/long-table.webp", width: 1920, height: 1268 }}
      />

      <Section>
        <div className="wrap">
          <SectionHead
            title={
              <>
                Three spaces, <em>one kitchen</em>
              </>
            }
            intro="Every event is run by a dedicated coordinator from first call to last pour. Tell us the occasion and we’ll suggest the right room."
          />
          <SpaceList />
        </div>
      </Section>

      <Section tone="vine">
        <div className="wrap">
          <SectionHead
            title="What’s included"
            intro="Every private booking comes with the details handled."
          />
          <FeatureGrid features={eventInclusions} />
        </div>
      </Section>

      <Section tone="sand" id="enquire">
        <div className="wrap split">
          <div className="body">
            <Eyebrow>Start planning</Eyebrow>
            <h2>
              Tell us about <em>your event</em>
            </h2>
            <p>
              Share a few details and our events coordinator will reply within one business day
              with availability, sample menus and pricing.
            </p>
            <ul className="contact-list">
              <li>
                <span>Events</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
              </li>
              <li>
                <span>Tours</span>Walk-throughs Tue–Fri, 2–4 pm, by appointment
              </li>
            </ul>
          </div>
          <Suspense fallback={null}>
            <EnquiryForm />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
