import Image from "next/image";
import { BookingBar } from "@/components/home/BookingBar";
import { HearthHighlights } from "@/components/home/HearthHighlights";
import { Hero } from "@/components/home/Hero";
import { HouseStats } from "@/components/home/HouseStats";
import { CtaBand } from "@/components/sections/CtaBand";
import { InfoStrip } from "@/components/sections/InfoStrip";
import { SplitSection } from "@/components/sections/SplitSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { VenueCards } from "@/components/sections/VenueCards";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { testimonials, venueCards } from "@/lib/data/content";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingBar />

      <Section>
        <SplitSection
          mediaFirst
          eyebrow="The house"
          title={<>A neighborhood dining room with a fire at its&nbsp;center</>}
          media={
            <div className="frame">
              <Image
                src="/images/dining-room-corner.webp"
                alt="Leather dining chairs and oak tables beneath a chandelier, with the wine wall glowing behind"
                width={1200}
                height={1800}
                sizes="(max-width: 980px) 100vw, 560px"
                style={{ aspectRatio: "4 / 5" }}
              />
              <span className="tag">Since {siteConfig.foundingYear} on Green St.</span>
            </div>
          }
        >
          <p>
            Ember &amp; Vine started with one idea: cook everything that matters over real wood. Our
            hearth burns California live oak and almond from the Central Valley, and every dish on
            the menu passes through it — charred, smoked, roasted or finished in the embers.
          </p>
          <p>
            The room is built for lingering: deep banquettes, low light, a bar that turns into a
            wine counter after dark, and a team that remembers how you like your steak.
          </p>
          <LinkArrow href="/about">Read our story</LinkArrow>
          <HouseStats />
        </SplitSection>
      </Section>

      <Section tone="dark">
        <div className="wrap">
          <SectionHead
            title={
              <>
                From the hearth <em>this season</em>
              </>
            }
            intro="The menu moves with the farmers’ markets in Pasadena and Santa Monica. A few plates we keep coming back to."
          />
          <HearthHighlights />
        </div>
      </Section>

      <Section tone="sand">
        <div className="wrap">
          <SectionHead
            title="Three ways to spend the evening"
            intro="Book the dining room, drop into the wine bar without a reservation, or take over the long table for something worth celebrating."
          />
          <VenueCards cards={venueCards} />
        </div>
      </Section>

      <Section>
        <SplitSection
          reverse
          mediaFirst
          eyebrow="The wine list"
          title={
            <>
              Small growers, <em>big opinions</em>
            </>
          }
          media={
            <div className="frame">
              <Image
                src="/images/sparkling-tray.webp"
                alt="A server carrying a tray of sparkling wine"
                width={720}
                height={510}
                sizes="(max-width: 980px) 100vw, 560px"
                style={{ aspectRatio: "4 / 3.2" }}
              />
              <Image
                className="frame-inset"
                src="/images/glass-pour.webp"
                alt="A glass of red wine raised at the bar"
                width={460}
                height={900}
                sizes="240px"
              />
            </div>
          }
        >
          <p>
            Our list leans California — Santa Barbara Syrah, Sierra Foothills Zinfandel, Anderson
            Valley Pinot — with Old World classics from the Rhône, Rioja and Piedmont that stand up
            to smoke and char.
          </p>
          <p>
            <strong>Vine Hour</strong> runs Tuesday to Friday from 4 to 6 pm at the bar: $9 pours,
            $12 cocktails and half-price empanadas.
          </p>
          <LinkArrow href="/menus#wine">Browse wine &amp; cocktails</LinkArrow>
        </SplitSection>
      </Section>

      <Section tone="dark">
        <div className="wrap">
          <SectionHead
            title="What our regulars say"
            intro="Notes from guests who have made Green Street part of their week."
          />
          <Testimonials items={testimonials} />
        </div>
      </Section>

      <InfoStrip />

      <CtaBand
        eyebrow="Private dining"
        title={
          <>
            Gather around the fire — <em>we’ll handle the rest</em>
          </>
        }
        body="Seated dinners for 8 to 60 and full buyouts for up to 140, with menus built around the hearth and a sommelier on hand for pairings."
        image="/images/long-table.webp"
        primary={{ label: "Plan a private event", href: "/private-events" }}
        secondary={{ label: "Call the events team", href: siteConfig.phone.href }}
      />
    </>
  );
}
