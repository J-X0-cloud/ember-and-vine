import type { Feature } from "@/types/restaurant";

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="features">
      {features.map((feature) => (
        <div className="feature" key={feature.title}>
          <span className="num">{feature.marker}</span>
          <h3>{feature.title}</h3>
          <p>{feature.body}</p>
        </div>
      ))}
    </div>
  );
}
