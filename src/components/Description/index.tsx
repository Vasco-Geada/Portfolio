import type { DescriptionProps } from "@store/components/Description";

import styles from "./styles.module.scss";

export type {
  DescriptionAlign,
  DescriptionProps,
  DescriptionSize,
  DescriptionTone,
  DescriptionWidth,
} from "@store/components/Description";

export function Description({
  children,
  size = "medium",
  tone = "muted",
  align = "left",
  width = "default",
  className,
  ...props
}: DescriptionProps) {
  const classes = [
    styles.description,
    styles[size],
    styles[tone],
    styles[align],
    styles[`width-${width}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}
