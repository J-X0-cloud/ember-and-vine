import { houseStats } from "@/lib/data/content";

export function HouseStats() {
  return (
    <div className="sig">
      {houseStats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          {stat.label}
        </div>
      ))}
    </div>
  );
}
