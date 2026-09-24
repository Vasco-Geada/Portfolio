import type { ContainerProps } from "@store/components/Container";

import styles from "./styles.module.scss";

export type {
  ContainerElement,
  ContainerProps,
  ContainerSize,
} from "@store/components/Container";

export function Container({
  children,
  as: Component = "div",
  size = "default",
  gutter = true,
  className,
  ...props
}: ContainerProps) {
  const classes = [
    styles.container,
    styles[size],
    gutter && styles.gutter,
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
