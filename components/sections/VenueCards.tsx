import Image from "next/image";
import Link from "next/link";
import { ArrowLabel } from "@/components/ui/LinkArrow";
import type { VenueCard } from "@/types/restaurant";

export function VenueCards({ cards }: { cards: VenueCard[] }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Link className="card" href={card.href} key={card.title}>
          <div className="img">
            <Image
              src={card.image.src}
              alt={card.image.alt}
              width={card.image.width}
              height={card.image.height}
              sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 400px"
            />
          </div>
          <div className="txt">
            <span className="kicker">{card.kicker}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <ArrowLabel>{card.cta}</ArrowLabel>
          </div>
        </Link>
      ))}
    </div>
  );
}
