import type { Testimonial } from "@/types/restaurant";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="quotes">
      {items.map((item) => (
        <figure className="quote" key={item.name}>
          <blockquote>{item.quote}</blockquote>
          <figcaption>
            {item.name} · {item.neighborhood}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
