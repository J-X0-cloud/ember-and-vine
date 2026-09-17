import type { MenuItem } from "@/types/menu";

/** "17:30" -> "5:30 pm" */
export function formatTime(value: string): string {
  const [h = "0", m = "00"] = value.split(":");
  const hours = Number(h);
  const suffix = hours >= 12 && hours < 24 ? "pm" : "am";
  const display = hours % 12 === 0 ? 12 : hours % 12;
  return `${display}:${m} ${suffix}`;
}

export function formatPrice(price: MenuItem["price"]): string {
  if (typeof price === "number") return `$${price}`;
  return `$${price.glass} / $${price.bottle}`;
}

export function formatGuests(count: number): string {
  return `${count} ${count === 1 ? "guest" : "guests"}`;
}

export function formatLongDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1));
}
