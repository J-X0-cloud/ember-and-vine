import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
};

/** Plain text page for policies; sits under the dark header on a solid band. */
export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <>
      <section className="legal-hero on-dark">
        <div className="wrap">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>Last updated {updated}</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap prose">{children}</div>
      </section>
    </>
  );
}
