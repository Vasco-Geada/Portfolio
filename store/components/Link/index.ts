import type { LinkProps as NextLinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export type LinkVariant = "inline" | "nav" | "standalone" | "muted";
export type LinkUnderline = "none" | "hover" | "always";

export interface LinkProps
  extends NextLinkProps,
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "children" | "className" | "href" | keyof NextLinkProps
    > {
  children: ReactNode;
  className?: string;
  variant?: LinkVariant;
  underline?: LinkUnderline;
  external?: boolean;
}
