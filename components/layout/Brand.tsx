import Link from "next/link";

export function BrandMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle
        cx="32"
        cy="32"
        r="30.5"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".45"
        strokeWidth="1.5"
      />
      <path
        d="M32 10c2.4 8.2 11 12.6 11 23.4C43 41.6 38 48 32 48s-11-6.4-11-14.2c0-5.4 3-8.6 5.2-10.6.4 3.6 2 6 4.4 6.8C29.4 23.4 30 16.6 32 10z"
        fill="#e07a45"
      />
      <path d="M32 54c0-6 2-10 8-13.5-1 5.5-3.6 9.6-8 13.5z" fill="#8fa06a" />
      <path d="M32 47.5V55" stroke="#8fa06a" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Ember & Vine, home">
      <BrandMark />
      <span className="brand-word">
        Ember <em>&amp;</em> Vine
      </span>
    </Link>
  );
}
