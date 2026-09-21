"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NavLinks } from "@/components/layout/NavLinks";
import { mobileNav, RESERVE_HREF } from "@/lib/data/nav";

/**
 * Native <details> disclosure, so the menu still opens before hydration or with JS disabled.
 * Once hydrated it closes on navigation and on Escape.
 */
export function MobileNav() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const close = () => ref.current?.removeAttribute("open");

  useEffect(() => {
    ref.current?.removeAttribute("open");
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") ref.current?.removeAttribute("open");
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <details className="mnav" ref={ref}>
      <summary aria-label="Open menu">
        <span>Menu</span>
        <span className="burger" />
      </summary>
      <nav className="mnav-panel" aria-label="Mobile">
        <NavLinks links={mobileNav} onNavigate={close} />
        <Link className="btn btn-ember" href={RESERVE_HREF} onClick={close}>
          Reserve a table
        </Link>
      </nav>
    </details>
  );
}
