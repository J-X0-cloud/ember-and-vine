import { openingHours } from "@/lib/data/hours";
import { menuSections } from "@/lib/data/menus";
import { absoluteUrl, siteConfig } from "@/lib/site";
import type { DayCode } from "@/types/restaurant";

const SCHEMA_DAYS: Record<DayCode, string> = {
  Mo: "https://schema.org/Monday",
  Tu: "https://schema.org/Tuesday",
  We: "https://schema.org/Wednesday",
  Th: "https://schema.org/Thursday",
  Fr: "https://schema.org/Friday",
  Sa: "https://schema.org/Saturday",
  Su: "https://schema.org/Sunday",
};

const DIETS = {
  V: "https://schema.org/VegetarianDiet",
  VG: "https://schema.org/VeganDiet",
  GF: "https://schema.org/GlutenFreeDiet",
} as const;

const toSchemaTime = (value: string) => (value === "24:00" ? "23:59" : value);

export function buildRestaurantSchema() {
  const { address, geo, phone } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": absoluteUrl("/#restaurant"),
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    image: [
      absoluteUrl("/images/dining-room-hero.webp"),
      absoluteUrl("/images/hearth-feast.webp"),
      absoluteUrl("/images/wine-bar.webp"),
    ],
    telephone: phone.e164,
    email: siteConfig.email,
    priceRange: "$$$",
    servesCuisine: ["Californian", "Wood-fired", "Wine bar"],
    acceptsReservations: absoluteUrl("/visit#reserve"),
    hasMenu: absoluteUrl("/menus"),
    foundingDate: String(siteConfig.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.latitude, longitude: geo.longitude },
    hasMap: siteConfig.directionsUrl,
    sameAs: [siteConfig.instagramUrl],
    // Schema.org has no concept of separate rooms, so the widest window (the bar) wins per day.
    openingHoursSpecification: openingHours
      .filter((spec) => spec.venue === "bar")
      .map((spec) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: spec.days.map((day) => SCHEMA_DAYS[day]),
        opens: spec.opens,
        closes: toSchemaTime(spec.closes),
      })),
  };
}

export function buildMenuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.name} dinner, dessert and bar menu`,
    url: absoluteUrl("/menus"),
    inLanguage: "en-US",
    hasMenuSection: menuSections.map((section) => ({
      "@type": "MenuSection",
      name: section.title,
      description: section.intro,
      url: absoluteUrl(`/menus#${section.id}`),
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: typeof item.price === "number" ? item.price : item.price.glass,
          priceCurrency: "USD",
        },
        ...(item.tags?.length ? { suitableForDiet: item.tags.map((tag) => DIETS[tag]) } : {}),
      })),
    })),
  };
}
