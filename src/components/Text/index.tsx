import type { TextProps } from "@store/components/Text";

import styles from "./styles.module.scss";

export type {
  TextAlign,
  TextElement,
  TextProps,
  TextSize,
  TextTone,
  TextWeight,
} from "@store/components/Text";

export function Text({
  children,
  as: Component = "p",
  size = "medium",
  weight = "regular",
  tone = "default",
  align = "left",
  className,
  ...props
}: TextProps) {
  const classes = [
    styles.text,
    styles[`size-${size}`],
    styles[`weight-${weight}`],
    styles[`tone-${tone}`],
    styles[`align-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
