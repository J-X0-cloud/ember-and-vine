import type { DietaryTag } from "@/types/menu";

const labels: Record<DietaryTag, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten-free",
};

export function DietBadge({ tag }: { tag: DietaryTag }) {
  return (
    <span className="diet" title={labels[tag]}>
      {tag}
    </span>
  );
}
