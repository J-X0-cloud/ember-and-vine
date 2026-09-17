export const siteConfig = {
  name: "Ember & Vine",
  tagline: "Wood-Fired Restaurant & Wine Bar in Pasadena, CA",
  description:
    "Ember & Vine is a wood-fired restaurant and wine bar in Pasadena, CA: seasonal California cooking over live oak, 22 wines by the glass, and private dining for 8 to 140 guests.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.emberandvine.com",
  foundingYear: 2016,
  phone: { display: "(626) 555-0187", href: "tel:+16265550187", e164: "+16265550187" },
  email: "hello@emberandvine.com",
  address: {
    street: "1140 E. Green Street",
    locality: "Pasadena",
    region: "CA",
    postalCode: "91106",
    country: "US",
  },
  geo: { latitude: 34.14552, longitude: -118.13163 },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1140+E+Green+St+Pasadena+CA+91106",
  instagramUrl: "https://www.instagram.com/emberandvine",
  themeColor: "#1c1714",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
