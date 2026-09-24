import type { BadgeProps } from "@store/components/Badge";

import styles from "./styles.module.scss";

export type {
  BadgeProps,
  BadgeSize,
  BadgeTone,
  BadgeVariant,
} from "@store/components/Badge";

export function Badge({
  children,
  variant = "soft",
  tone = "neutral",
  size = "medium",
  className,
  ...props
}: BadgeProps) {
  const classes = [styles.badge, styles[variant], styles[tone], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
