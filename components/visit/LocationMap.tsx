import { siteConfig } from "@/lib/site";

const blocks = [
  [0, 0, 135, 132], [165, 0, 250, 132], [445, 0, 310, 132], [785, 0, 250, 132], [1065, 0, 135, 132],
  [0, 168, 135, 144], [165, 168, 250, 144], [785, 168, 250, 144], [1065, 168, 135, 144],
  [0, 348, 135, 152], [165, 348, 250, 152], [445, 348, 310, 152], [785, 348, 250, 152], [1065, 348, 135, 152],
] as const;

const streets = ["M150 0V500", "M430 0V500", "M770 0V500", "M1050 0V500", "M0 330H1200"];

/** Illustrated street map — no third-party map embed, so it renders instantly on mobile. */
export function LocationMap() {
  return (
    <a
      className="map"
      href={siteConfig.directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Map showing Ember & Vine on East Green Street, between South Lake Avenue and South Wilson Avenue. Opens directions."
    >
      <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="1200" height="500" fill="#ebe0cf" />
        <g fill="#e2d3bd">
          {blocks.map(([x, y, width, height]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={width} height={height} rx="4" />
          ))}
        </g>
        <rect x="445" y="168" width="310" height="144" rx="4" fill="#d9c3a6" />
        <rect x="445" y="348" width="310" height="152" rx="4" fill="#cfd5bd" />
        <g stroke="#fffaf2" strokeWidth="20">
          {streets.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d="M0 150H1200" stroke="#e8c9a7" strokeWidth="26" />
        <g
          fontFamily="Manrope,sans-serif"
          fontSize="17"
          fontWeight="700"
          letterSpacing="3"
          fill="#6b5e53"
        >
          <text x="450" y="156">
            E. COLORADO BLVD
          </text>
          <text x="616" y="336">
            E. GREEN ST
          </text>
          <text x="436" y="470" transform="rotate(-90 436 470)">
            S. LAKE AVE
          </text>
          <text x="776" y="470" transform="rotate(-90 776 470)">
            S. WILSON AVE
          </text>
        </g>
        <text
          x="600"
          y="440"
          textAnchor="middle"
          fontFamily="Manrope,sans-serif"
          fontSize="15"
          fontWeight="700"
          letterSpacing="2"
          fill="#56643f"
        >
          PARKING
        </text>
      </svg>
      <div className="pin">
        <b>{siteConfig.name}</b>
        <i />
      </div>
    </a>
  );
}
