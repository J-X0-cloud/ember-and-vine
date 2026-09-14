import Link from "next/link";
import type { ReactNode } from "react";

type LinkArrowProps = {
  href: string;
  children: ReactNode;
};

export function LinkArrow({ href, children }: LinkArrowProps) {
  return (
    <Link className="link-arrow" href={href}>
      {children}
    </Link>
  );
}

/** Visual-only arrow label, for use inside an already-linked card. */
export function ArrowLabel({ children }: { children: ReactNode }) {
  return <span className="link-arrow">{children}</span>;
}
