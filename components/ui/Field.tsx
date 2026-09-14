import clsx from "clsx";
import type { ReactNode } from "react";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  full?: boolean;
  children: ReactNode;
};

/** Label + control + inline error, laid out on the `.form-grid`. */
export function Field({ id, label, error, full = false, children }: FieldProps) {
  return (
    <div className={clsx(full && "full", error && "has-error")}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Props that connect a control to its Field error for assistive tech. */
export function errorProps(id: string, error?: string) {
  return error ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : {};
}
