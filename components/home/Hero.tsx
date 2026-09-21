import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { heroHours } from "@/lib/data/hours";
import { RESERVE_HREF } from "@/lib/data/nav";

export function Hero() {
  return (
    <section className="hero">
      <Image
        src="/images/dining-room-hero.webp"
        alt="The Ember & Vine dining room at dusk, with glass chandeliers, green banquettes and set tables"
        width={1920}
        height={1440}
        sizes="100vw"
        priority
      />
      <div className="wrap">
        <Eyebrow>Wood-fired kitchen &amp; wine bar · Pasadena</Eyebrow>
        <h1>
          Cooked over live oak. <em>Poured with intention.</em>
        </h1>
        <p className="lede">
          Seasonal California cooking from a twelve-foot hearth, a wine list built one bottle at a
          time, and a dining room that stays warm long after the last ticket.
        </p>
        <div className="actions">
          <ButtonLink href={RESERVE_HREF}>Reserve a table</ButtonLink>
          <ButtonLink href="/menus" variant="ghost">
            Tonight’s menus
          </ButtonLink>
        </div>
      </div>
      <div className="hero-meta">
        <strong>{heroHours.headline}</strong>
        {heroHours.lines.map((line) => (
          <span key={line}>
            <br />
            {line}
          </span>
        ))}
      </div>
    </section>
  );
}
