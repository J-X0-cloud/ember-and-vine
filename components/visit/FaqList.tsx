import type { Faq } from "@/types/restaurant";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((item, index) => (
        <details key={item.question} open={index === 0}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
