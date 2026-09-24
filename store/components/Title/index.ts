import type { HTMLAttributes, ReactNode } from "react";

export type TitleElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TitleSize = "small" | "medium" | "large" | "xl";
export type TitleAlign = "left" | "center" | "right";
export type TitleTone = "default" | "primary" | "muted" | "inherit";

export interface TitleProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, "children"> {
  children: ReactNode;
  as?: TitleElement;
  size?: TitleSize;
  align?: TitleAlign;
  tone?: TitleTone;
  balance?: boolean;
}
