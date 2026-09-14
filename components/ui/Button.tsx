import Link from "next/link";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "ember" | "ghost" | "line";

const variantClass: Record<ButtonVariant, string> = {
  ember: "btn-ember",
  ghost: "btn-ghost",
  line: "btn-line",
};

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

const isExternal = (href: string) => /^(tel:|mailto:|https?:)/.test(href);

/** Link styled as a button. Phone, email and external links render a plain anchor. */
export function ButtonLink({ href, variant = "ember", className, children }: ButtonLinkProps) {
  const classes = clsx("btn", variantClass[variant], className);
  if (isExternal(href)) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & { variant?: ButtonVariant };

export function Button({ variant = "ember", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={clsx("btn", variantClass[variant], className)} {...props} />;
}
