import { FaqList } from "@/components/visit/FaqList";
import { ContactList } from "@/components/visit/ContactList";
import { HoursTable } from "@/components/visit/HoursTable";
import { LocationMap } from "@/components/visit/LocationMap";
import { ReservationForm, type ReservationDefaults } from "@/components/visit/ReservationForm";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/lib/data/content";
import { MAX_ONLINE_PARTY, reservationTimes } from "@/lib/data/reservations";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Reservations, Hours & Location",
  description:
    "Reserve a table at Ember & Vine, 1140 E. Green Street, Pasadena. Opening hours, parking, Vine Hour and answers to common questions.",
  path: "/visit",
  image: "/images/wine-bar.webp",
});

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

/** Reads the booking bar's hand-off (?date=&time=&party=) and ignores anything malformed. */
function parseDefaults(params: Awaited<SearchParams>): ReservationDefaults {
  const pick = (key: string) => {
    const value = params[key];
    return typeof value === "string" ? value : undefined;
  };
  const date = pick("date");
  const time = pick("time");
  const party = Number(pick("party"));

  return {
    date: date && /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined,
    time: time && (reservationTimes as readonly string[]).includes(time) ? time : undefined,
    party: Number.isInteger(party) && party >= 1 && party <= MAX_ONLINE_PARTY ? party : undefined,
  };
}

export default async function VisitPage({ searchParams }: { searchParams: SearchParams }) {
  const defaults = parseDefaults(await searchParams);

  return (
    <>
      <PageHero
        eyebrow="Reservations & visit"
        title={
          <>
            Come in, <em>warm up</em>
          </>
        }
        lede="Book the dining room online for up to eight guests. The wine bar keeps seats for walk-ins every night we’re open."
        image={{ src: "/images/wine-bar.webp", width: 1200, height: 1500, position: "center 40%" }}
      />

      <Section id="reserve">
        <div className="wrap visit-grid">
          <div>
            <Eyebrow>Plan your visit</Eyebrow>
            <ContactList />
            <HoursTable />
          </div>
          <ReservationForm defaults={defaults} />
        </div>
      </Section>

      <Section tone="sand" tight>
        <div className="wrap">
          <LocationMap />
        </div>
      </Section>

      <Section id="faq">
        <SplitSection
          alignStart
          eyebrow="Good to know"
          title={
            <>
              Questions, <em>answered</em>
            </>
          }
          media={<FaqList items={faqs} />}
        >
          <p>
            Can’t find what you need? Call us after 2 pm, Tuesday through Sunday, or email the team.
          </p>
          <ButtonLink href={`mailto:${siteConfig.email}`} variant="line">
            Email the team
          </ButtonLink>
        </SplitSection>
      </Section>
    </>
  );
}
