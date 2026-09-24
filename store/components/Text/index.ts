import type { HTMLAttributes, ReactNode } from "react";

export type TextElement = "p" | "span" | "small" | "strong" | "div";
export type TextSize = "xsmall" | "small" | "medium" | "large";
export type TextWeight = "regular" | "medium" | "semibold";
export type TextTone = "default" | "secondary" | "muted" | "primary" | "inherit";
export type TextAlign = "left" | "center" | "right";

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  children: ReactNode;
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
  tone?: TextTone;
  align?: TextAlign;
}
