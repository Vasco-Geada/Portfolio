import type { HTMLAttributes, ReactNode } from "react";

export type CardElement = "article" | "div" | "li";
export type CardVariant = "default" | "outlined" | "accent";
export type CardPadding = "none" | "small" | "medium" | "large";

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  children: ReactNode;
  as?: CardElement;
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
}
