import type { SVGProps } from "react";

export type IconName =
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-right"
  | "github"
  | "linkedin"
  | "mail"
  | "phone"
  | "download"
  | "menu"
  | "code"
  | "briefcase"
  | "spark";

export type SocialIconName = Extract<IconName, "github" | "linkedin" | "mail" | "phone">;

export type IconSize = "small" | "medium" | "large" | number;

type NativeSvgProps = Omit<
  SVGProps<SVGSVGElement>,
  | "aria-hidden"
  | "children"
  | "height"
  | "role"
  | "viewBox"
  | "width"
>;

export interface IconProps extends NativeSvgProps {
  /** The icon artwork to render. */
  name: IconName;
  /** A preset or pixel size. */
  size?: IconSize;
  /**
   * Gives the icon an accessible name. Omit this for icons that are only
   * decorative or already described by adjacent text.
   */
  label?: string;
  /** Hides the icon from assistive technology, even when a label is supplied. */
  decorative?: boolean;
}
