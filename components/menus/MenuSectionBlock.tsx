import Image from "next/image";
import { MenuItemRow } from "@/components/menus/MenuItemRow";
import type { MenuSection } from "@/types/menu";

export function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <section className="menu-block" id={section.id} aria-labelledby={`${section.id}-title`}>
      <div className="wrap menu-grid">
        <aside>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          <p>{section.intro}</p>
          <p className="note">{section.note}</p>
          {section.image ? (
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              sizes="320px"
            />
          ) : null}
        </aside>
        <div className="items">
          {section.items.map((item) => (
            <MenuItemRow key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
