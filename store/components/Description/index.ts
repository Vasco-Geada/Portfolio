import type { HTMLAttributes, ReactNode } from "react";

export type DescriptionSize = "small" | "medium" | "large";
export type DescriptionTone = "default" | "muted" | "primary";
export type DescriptionAlign = "left" | "center" | "right";
export type DescriptionWidth = "compact" | "default" | "wide" | "none";

export interface DescriptionProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, "children"> {
  children: ReactNode;
  size?: DescriptionSize;
  tone?: DescriptionTone;
  align?: DescriptionAlign;
  width?: DescriptionWidth;
}
