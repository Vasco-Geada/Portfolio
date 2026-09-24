import type { ImageProps as NextImageProps } from "next/image";

export type ImageRadius = "none" | "small" | "medium" | "large" | "round";
export type ImageFit = "cover" | "contain";

export interface ImageProps extends Omit<NextImageProps, "className"> {
  className?: string;
  radius?: ImageRadius;
  fit?: ImageFit;
}
