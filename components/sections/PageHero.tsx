import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  image: { src: string; width: number; height: number; position?: string };
};

export function PageHero({ eyebrow, title, lede, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        sizes="100vw"
        priority
        style={image.position ? { objectPosition: image.position } : undefined}
      />
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}
