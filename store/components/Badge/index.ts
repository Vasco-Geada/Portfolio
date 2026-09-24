import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "soft" | "outline";
export type BadgeTone = "primary" | "neutral";
export type BadgeSize = "small" | "medium";

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  children: ReactNode;
  variant?: BadgeVariant;
  tone?: BadgeTone;
  size?: BadgeSize;
}
