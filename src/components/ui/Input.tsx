import type { ReactNode } from "react";
import type { IconName } from "@/types/navigation";
import { Icon } from "./Icon";

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  hideLabel?: boolean;
}

interface InputProps extends FieldProps {
  type?: "text" | "email" | "password" | "tel" | "search";
  placeholder?: string;
  defaultValue?: string;
  icon?: IconName;
}

export function Input({ id, label, hint, hideLabel, type = "text", placeholder, defaultValue, icon }: InputProps) {
  return (
    <div className="field">
      <label htmlFor={id} className={hideLabel ? "sr-only" : "field__label"}>
        {label}
      </label>
      <div className={`field__control${icon ? " field__control--icon" : ""}`}>
        {icon && <Icon name={icon} size={20} />}
        <input id={id} name={id} type={type} placeholder={placeholder} defaultValue={defaultValue} />
      </div>
      {hint && <p className="field__hint">{hint}</p>}
    </div>
  );
}

interface SelectProps extends FieldProps {
  options: string[];
  defaultValue?: string;
}

export function Select({ id, label, hint, hideLabel, options, defaultValue }: SelectProps) {
  return (
    <div className="field">
      <label htmlFor={id} className={hideLabel ? "sr-only" : "field__label"}>
        {label}
      </label>
      <div className="field__control">
        <select id={id} name={id} defaultValue={defaultValue ?? options[0]}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {hint && <p className="field__hint">{hint}</p>}
    </div>
  );
}

export function Checkbox({ id, children }: { id: string; children: ReactNode }) {
  return (
    <label htmlFor={id} className="check">
      <input id={id} name={id} type="checkbox" />
      <span>{children}</span>
    </label>
  );
}
