import clsx from "clsx";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type SplitSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  media: ReactNode;
  /** Put the media on the left on desktop. */
  reverse?: boolean;
  /** Media first in source order (text on the right on desktop). */
  mediaFirst?: boolean;
  alignStart?: boolean;
  children: ReactNode;
};

/** Two-column text + media layout used across every page. */
export function SplitSection({
  eyebrow,
  title,
  media,
  reverse = false,
  mediaFirst = false,
  alignStart = false,
  children,
}: SplitSectionProps) {
  const body = (
    <div className="body">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {children}
    </div>
  );

  return (
    <div className={clsx("wrap split", reverse && "rev", alignStart && "align-start")}>
      {mediaFirst ? media : body}
      {mediaFirst ? body : media}
    </div>
  );
}
