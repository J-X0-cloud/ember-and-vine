import { DietBadge } from "@/components/ui/DietBadge";
import { dietaryLegend } from "@/lib/data/menus";

export function DietLegend() {
  return (
    <div className="wrap legend-wrap">
      <p className="legend">
        {dietaryLegend.map(({ tag, label }) => (
          <span key={tag}>
            <DietBadge tag={tag} />
            {label}
          </span>
        ))}
        <span>Please tell us about any allergies — most dishes can be adapted.</span>
      </p>
    </div>
  );
}
