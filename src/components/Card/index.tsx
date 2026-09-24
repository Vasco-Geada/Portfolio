import type { CardProps } from "@store/components/Card";

import styles from "./styles.module.scss";

export type {
  CardElement,
  CardPadding,
  CardProps,
  CardVariant,
} from "@store/components/Card";

export function Card({
  children,
  as: Component = "article",
  variant = "default",
  padding = "medium",
  interactive = false,
  className,
  ...props
}: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    interactive && styles.interactive,
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
