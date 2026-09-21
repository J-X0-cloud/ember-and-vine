import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { eventSpaces } from "@/lib/data/events";

export function SpaceList() {
  return (
    <div className="spaces">
      {eventSpaces.map((space) => (
        <article className="space" key={space.slug} id={space.slug}>
          <Image
            src={space.image.src}
            alt={space.image.alt}
            width={space.image.width}
            height={space.image.height}
            sizes="(max-width: 980px) 100vw, 660px"
          />
          <div>
            <Eyebrow>{space.kind}</Eyebrow>
            <h3>{space.name}</h3>
            <p>{space.description}</p>
            <dl className="facts">
              <div>
                <dt className="sr-only">Seated</dt>
                <dd>
                  <strong>{space.seated}</strong>
                  <span aria-hidden="true">Seated</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Reception</dt>
                <dd>
                  <strong>{space.reception}</strong>
                  <span aria-hidden="true">Reception</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Starting price</dt>
                <dd>
                  <strong>{space.priceFrom}</strong>
                  <span>{space.priceNote}</span>
                </dd>
              </div>
            </dl>
            <a className="link-arrow" href={`?space=${space.slug}#enquire`}>
              {space.cta}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
