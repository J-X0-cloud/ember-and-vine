import type { ReactNode } from "react";

type SectionHeadProps = {
  title: ReactNode;
  intro: ReactNode;
};

export function SectionHead({ title, intro }: SectionHeadProps) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}
