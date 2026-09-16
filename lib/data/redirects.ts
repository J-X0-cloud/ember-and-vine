/**
 * Permanent redirects from the previous page-builder (WordPress) site. Keeps inbound links,
 * Google Business Profile links and printed QR codes working after the migration.
 * Consumed by `redirects()` in next.config.ts.
 */
export type LegacyRedirect = {
  source: string;
  destination: string;
  has?: { type: "query"; key: string; value?: string }[];
};

export const legacyRedirects: LegacyRedirect[] = [
  // Old page slugs
  { source: "/home", destination: "/" },
  { source: "/our-menu", destination: "/menus" },
  { source: "/menu", destination: "/menus" },
  { source: "/dinner-menu", destination: "/menus" },
  { source: "/dessert-menu", destination: "/menus#dessert" },
  { source: "/wine-list", destination: "/menus#wine" },
  { source: "/drinks", destination: "/menus#cocktails" },
  { source: "/happy-hour", destination: "/menus#vine-hour" },
  { source: "/about-us", destination: "/about" },
  { source: "/our-story", destination: "/about" },
  { source: "/private-dining", destination: "/private-events" },
  { source: "/events", destination: "/private-events" },
  { source: "/event-inquiry", destination: "/private-events#enquire" },
  { source: "/reservations", destination: "/visit#reserve" },
  { source: "/book-a-table", destination: "/visit#reserve" },
  { source: "/contact-us", destination: "/visit" },
  { source: "/location-hours", destination: "/visit" },
  { source: "/faq", destination: "/visit#faq" },

  // Menus used to be PDF uploads in the media library
  { source: "/wp-content/uploads/:year/:month/:file(.*menu.*\\.pdf)", destination: "/menus" },
  { source: "/wp-content/uploads/:year/:month/:file(.*wine.*\\.pdf)", destination: "/menus#wine" },
  {
    source: "/wp-content/uploads/:year/:month/:file(.*event.*\\.pdf)",
    destination: "/private-events",
  },

  // Blog archive, feeds and query-string permalinks
  { source: "/category/:slug*", destination: "/" },
  { source: "/tag/:slug*", destination: "/" },
  { source: "/feed", destination: "/" },
  { source: "/", has: [{ type: "query", key: "page_id", value: "12" }], destination: "/menus" },
  { source: "/", has: [{ type: "query", key: "page_id", value: "18" }], destination: "/about" },
  {
    source: "/",
    has: [{ type: "query", key: "page_id", value: "24" }],
    destination: "/private-events",
  },
  { source: "/", has: [{ type: "query", key: "page_id", value: "31" }], destination: "/visit" },
];
