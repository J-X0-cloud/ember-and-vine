import type { NavLink } from "@/types/restaurant";

export const primaryNav: NavLink[] = [
  { label: "Menus", href: "/menus" },
  { label: "Our Story", href: "/about" },
  { label: "Private Events", href: "/private-events" },
  { label: "Visit", href: "/visit" },
];

export const mobileNav: NavLink[] = [{ label: "Home", href: "/" }, ...primaryNav];

export const footerExplore: NavLink[] = [
  { label: "Menus", href: "/menus" },
  { label: "Our Story", href: "/about" },
  { label: "Private Events", href: "/private-events" },
  { label: "Reservations & Hours", href: "/visit" },
];

export const legalLinks: NavLink[] = [
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy", href: "/privacy" },
  { label: "Gift cards", href: "/visit#faq" },
];

export const RESERVE_HREF = "/visit#reserve";
