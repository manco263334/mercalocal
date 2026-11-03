import type { ReactNode } from "react";

export type BadgeTone = "green" | "yellow" | "blue" | "purple" | "red" | "gray";

export function Badge({ tone = "gray", children }: { tone?: BadgeTone; children: ReactNode }) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
