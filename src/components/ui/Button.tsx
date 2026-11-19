"use client";

import type { ReactNode, MouseEventHandler } from "react";
import type { IconName } from "@/types/navigation";
import { Icon } from "./Icon";
import Link from "next/link";

interface ButtonProps {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: IconName;
  fullWidth?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  fullWidth,
  disabled,
  ariaLabel,
  onClick
}: ButtonProps) {
  const className = `btn btn--${variant} btn--${size}${fullWidth ? " btn--block" : ""}${children ? "" : " btn--icon"}`;
  const content = (
    <>
      {icon && <Icon name={icon} size={size === "sm" ? 18 : 20} />}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type="button" 
      className={className} 
      disabled={disabled} 
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
