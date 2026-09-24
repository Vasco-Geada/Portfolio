import NextImage from "next/image";
import type { ImageProps } from "@store/components/Image";

import styles from "./styles.module.scss";

export type {
  ImageFit,
  ImageProps,
  ImageRadius,
} from "@store/components/Image";

export function Image({
  radius = "medium",
  fit = "cover",
  className,
  ...props
}: ImageProps) {
  const classes = [styles.image, styles[`radius-${radius}`], styles[fit], className]
    .filter(Boolean)
    .join(" ");

  return <NextImage {...props} className={classes} />;
}
