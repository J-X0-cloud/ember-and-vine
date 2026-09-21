import Image from "next/image";
import { SplitSection } from "@/components/sections/SplitSection";
import { ButtonLink } from "@/components/ui/Button";
import { vineHour } from "@/lib/data/menus";

export function VineHour() {
  return (
    <section className="menu-block" id={vineHour.id}>
      <SplitSection
        eyebrow={vineHour.schedule}
        title={vineHour.title}
        media={
          <div className="frame">
            <Image
              src="/images/wine-bar.webp"
              alt="The wine bar with velvet chairs"
              width={1200}
              height={1500}
              sizes="(max-width: 980px) 100vw, 560px"
              style={{ aspectRatio: "5 / 4" }}
            />
          </div>
        }
      >
        <p>{vineHour.body}</p>
        <ButtonLink href="/visit" variant="line">
          Hours &amp; directions
        </ButtonLink>
      </SplitSection>
    </section>
  );
}
