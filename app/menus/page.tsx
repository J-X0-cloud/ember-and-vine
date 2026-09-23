import { DietLegend } from "@/components/menus/DietLegend";
import { MenuNav } from "@/components/menus/MenuNav";
import { MenuSectionBlock } from "@/components/menus/MenuSectionBlock";
import { VineHour } from "@/components/menus/VineHour";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { MenuJsonLd } from "@/components/seo/MenuJsonLd";
import { menuSections } from "@/lib/data/menus";
import { RESERVE_HREF } from "@/lib/data/nav";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Menus",
  description:
    "Dinner, dessert, wine and cocktail menus at Ember & Vine in Pasadena: wood-fired small plates, dry-aged steaks from the hearth, 22 wines by the glass and Vine Hour Tue to Fri.",
  path: "/menus",
  image: "/images/hearth-feast.webp",
});

export default function MenusPage() {
  return (
    <>
      <PageHero
        eyebrow="Menus"
        title={
          <>
            Everything passes <em>through the fire</em>
          </>
        }
        lede="Our menus change with the markets. What follows is this week’s dinner, dessert and bar list — ask your server what came off the truck this morning."
        image={{ src: "/images/hearth-feast.webp", width: 1280, height: 1040 }}
      />
      <MenuNav />
      <DietLegend />

      {menuSections.map((section) => (
        <MenuSectionBlock key={section.id} section={section} />
      ))}
      <VineHour />

      <CtaBand
        eyebrow="Reservations"
        title={
          <>
            Hungry yet? <em>Pull up a chair.</em>
          </>
        }
        body="Book online for parties of up to eight. For larger groups, our events team will build a menu with you."
        image="/images/dining-room-wide.webp"
        primary={{ label: "Reserve a table", href: RESERVE_HREF }}
        secondary={{ label: "Private events", href: "/private-events" }}
      />
      <MenuJsonLd />
    </>
  );
}
