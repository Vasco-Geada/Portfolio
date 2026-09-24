import type { TitleProps } from "@store/components/Title";

import styles from "./styles.module.scss";

export type {
  TitleAlign,
  TitleElement,
  TitleProps,
  TitleSize,
  TitleTone,
} from "@store/components/Title";

export function Title({
  children,
  as: Component = "h2",
  size = "large",
  align = "left",
  tone = "default",
  balance = true,
  className,
  ...props
}: TitleProps) {
  const classes = [
    styles.title,
    styles[size],
    styles[align],
    styles[tone],
    balance && styles.balance,
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
