import { DietBadge } from "@/components/ui/DietBadge";
import { formatPrice } from "@/lib/format";
import type { MenuItem } from "@/types/menu";

export function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="item">
      <div className="row">
        <h3>
          {item.name}
          {item.tags?.map((tag) => <DietBadge key={tag} tag={tag} />)}
        </h3>
        <span className="price">{formatPrice(item.price)}</span>
      </div>
      <p>{item.description}</p>
    </div>
  );
}
