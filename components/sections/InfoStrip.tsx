import { diningRoomHours, wineBarHours } from "@/lib/data/hours";
import { siteConfig } from "@/lib/site";
import type { HoursRow } from "@/types/restaurant";

function HoursList({ rows }: { rows: HoursRow[] }) {
  return (
    <dl>
      {rows.map((row) => (
        <div key={row.label} className="contents">
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function InfoStrip() {
  const { address, phone, email } = siteConfig;

  return (
    <section className="section-tight">
      <div className="wrap info">
        <div>
          <h3>Find us</h3>
          <p>
            {address.street}
            <br />
            {address.locality}, {address.region} {address.postalCode}
            <br />
            <a href={siteConfig.directionsUrl} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </p>
        </div>
        <div>
          <h3>Dining room</h3>
          <HoursList rows={diningRoomHours} />
        </div>
        <div>
          <h3>Wine bar</h3>
          <HoursList rows={wineBarHours} />
        </div>
        <div>
          <h3>Get in touch</h3>
          <p>
            <a href={phone.href}>{phone.display}</a>
            <br />
            <a href={`mailto:${email}`}>{email}</a>
            <br />
            Valet on Green St. after 5 pm
          </p>
        </div>
      </div>
    </section>
  );
}
