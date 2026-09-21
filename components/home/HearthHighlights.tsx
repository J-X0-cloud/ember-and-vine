import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { hearthHighlights } from "@/lib/data/menus";
import { formatPrice } from "@/lib/format";

export function HearthHighlights() {
  return (
    <div className="hearth">
      <div className="frame">
        <Image
          src="/images/hearth-feast.webp"
          alt="A platter of oak-grilled steak, lamb and sausage with blistered peppers and baked empanadas"
          width={1280}
          height={1040}
          sizes="(max-width: 980px) 100vw, 640px"
        />
      </div>
      <div>
        <ul className="dish-list">
          {hearthHighlights.map((dish) => (
            <li key={dish.name}>
              <h3>{dish.name}</h3>
              <span className="price">{formatPrice(dish.price)}</span>
              <p>{dish.description}</p>
            </li>
          ))}
        </ul>
        <ButtonLink href="/menus" variant="ghost">
          See the full menus
        </ButtonLink>
      </div>
    </div>
  );
}
