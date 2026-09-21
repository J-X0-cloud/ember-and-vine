"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/types/restaurant";

type NavLinksProps = {
  links: NavLink[];
  onNavigate?: () => void;
};

/** Primary links with `aria-current` driven by the active route. */
export function NavLinks({ links, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      aria-current={pathname === link.href ? "page" : undefined}
      onClick={onNavigate}
    >
      {link.label}
    </Link>
  ));
}
