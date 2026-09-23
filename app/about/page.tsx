import Image from "next/image";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { ButtonLink } from "@/components/ui/Button";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { cookingRules, neighborCommitments } from "@/lib/data/content";
import { RESERVE_HREF } from "@/lib/data/nav";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Story",
  description:
    "The story of Ember & Vine, a wood-fired restaurant and wine bar in a converted 1920s print works on East Green Street in Pasadena.",
  path: "/about",
  image: "/images/dining-room-wide.webp",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            A fire we’ve kept lit <em>since 2016</em>
          </>
        }
        lede="How a converted 1920s printing works on Green Street became Pasadena’s wood-fired dining room."
        image={{ src: "/images/dining-room-wide.webp", width: 1920, height: 1281 }}
      />

      <Section>
        <SplitSection
          eyebrow="Where it started"
          title={
            <>
              Two cooks, one hearth, <em>no gas line</em>
            </>
          }
          media={
            <div className="frame">
              <Image
                src="/images/dining-room-corner.webp"
                alt="Dining chairs and chandeliers in the main room"
                width={1200}
                height={1800}
                sizes="(max-width: 980px) 100vw, 560px"
                style={{ aspectRatio: "4 / 5" }}
              />
            </div>
          }
        >
          <p>
            Nico and Hanna met cooking the line at a steakhouse downtown, and spent their days off
            grilling in a friend’s Altadena backyard. When a shuttered print shop on East Green
            Street came up for lease, they skipped the gas range altogether and built a twelve-foot
            hearth instead.
          </p>
          <p>
            Nearly a decade on, the hearth still runs every service. The kitchen has grown, the wine
            cellar has taken over the old press room, and the dining room has become the place where
            the neighborhood marks birthdays, promotions and ordinary Tuesdays.
          </p>
        </SplitSection>
      </Section>

      <Section tone="vine">
        <div className="wrap">
          <SectionHead
            title="How we cook"
            intro="Three rules that have not changed since the first night of service."
          />
          <FeatureGrid features={cookingRules} />
        </div>
      </Section>

      <Section>
        <SplitSection
          reverse
          mediaFirst
          eyebrow="The kitchen"
          title={
            <>
              Smoke, salt and <em>patience</em>
            </>
          }
          media={
            <div className="frame">
              <Image
                src="/images/hearth-feast.webp"
                alt="Grilled meats, peppers and empanadas on a marble table"
                width={1280}
                height={1040}
                sizes="(max-width: 980px) 100vw, 560px"
              />
            </div>
          }
        >
          <p>
            Steaks dry-age in-house for at least 28 days. Lamb shoulders spend twelve hours in the
            embers before they reach the pass. Vegetables go straight onto the coals and come off
            blistered, sweet and smoky.
          </p>
          <p>
            Our kitchen is led by chef de cuisine Daniela R., who joined as a line cook in the
            opening year and now writes the seasonal menus with the whole team.
          </p>
          <LinkArrow href="/menus">See what’s cooking</LinkArrow>
        </SplitSection>
      </Section>

      <Section tone="dark">
        <SplitSection
          eyebrow="The room"
          title={
            <>
              Low light, <em>long tables</em>
            </>
          }
          media={
            <div className="frame">
              <Image
                src="/images/wine-bar.webp"
                alt="The wine bar with a backlit shelf of bottles"
                width={1200}
                height={1500}
                sizes="(max-width: 980px) 100vw, 560px"
                style={{ aspectRatio: "4 / 5" }}
              />
            </div>
          }
        >
          <p>
            We kept the bones of the old print works — the arched windows, the brick, the
            fourteen-foot ceilings — and added deep green banquettes, glass chandeliers and a wall of
            wine you can see from the street.
          </p>
          <p>
            The wine bar opens an hour before the dining room and stays open late, for a glass before
            the Playhouse or a nightcap after.
          </p>
          <div className="actions actions-inline">
            <ButtonLink href={RESERVE_HREF}>Reserve a table</ButtonLink>
            <ButtonLink href="/private-events" variant="ghost">
              Host an event
            </ButtonLink>
          </div>
        </SplitSection>
      </Section>

      <Section tone="sand">
        <div className="wrap">
          <SectionHead
            title="Good neighbors"
            intro="What the restaurant gives back to the street it lives on."
          />
          <FeatureGrid features={neighborCommitments} />
        </div>
      </Section>

      <CtaBand
        eyebrow="Come by"
        title={
          <>
            There’s a seat <em>by the fire</em>
          </>
        }
        body="Book a table in the dining room, or walk in to the wine bar any night we’re open."
        image="/images/dining-room-hero.webp"
        primary={{ label: "Reserve a table", href: RESERVE_HREF }}
        secondary={{ label: "See the menus", href: "/menus" }}
      />
    </>
  );
}
