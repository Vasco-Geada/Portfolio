import type { HTMLAttributes, ReactNode } from "react";

export type ContainerElement =
  | "div"
  | "section"
  | "main"
  | "nav"
  | "header"
  | "footer";

export type ContainerSize = "narrow" | "default" | "wide" | "full";

export interface ContainerProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  children: ReactNode;
  as?: ContainerElement;
  size?: ContainerSize;
  gutter?: boolean;
}
