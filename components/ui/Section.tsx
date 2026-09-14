import clsx from "clsx";
import type { ReactNode } from "react";

type Tone = "default" | "dark" | "vine" | "sand";

const toneClass: Record<Tone, string | undefined> = {
  default: undefined,
  dark: "on-dark",
  vine: "on-vine",
  sand: "on-sand",
};

type SectionProps = {
  tone?: Tone;
  tight?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ tone = "default", tight = false, id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(tight ? "section-tight" : "section", toneClass[tone], className)}
    >
      {children}
    </section>
  );
}
