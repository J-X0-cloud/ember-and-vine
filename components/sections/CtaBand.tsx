import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

type CtaBandProps = {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  image: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export function CtaBand({ eyebrow, title, body, image, primary, secondary }: CtaBandProps) {
  return (
    <section className="band on-dark">
      <Image src={image} alt="" width={1920} height={1280} sizes="100vw" />
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="actions">
          <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
          <ButtonLink href={secondary.href} variant="ghost">
            {secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
