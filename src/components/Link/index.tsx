"use client";

import NextLink from "next/link";
import type { LinkProps } from "@store/components/Link";
import { useI18n } from "@/i18n/useI18n";

import styles from "./styles.module.scss";

export type {
  LinkProps,
  LinkUnderline,
  LinkVariant,
} from "@store/components/Link";

export function Link({
  children,
  variant = "inline",
  underline = "hover",
  external = false,
  className,
  rel,
  target,
  ...props
}: LinkProps) {
  const { content } = useI18n();
  const classes = [
    styles.link,
    styles[variant],
    styles[`underline-${underline}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <NextLink
      {...props}
      className={classes}
      target={external ? "_blank" : target}
      rel={external ? rel ?? "noopener noreferrer" : rel}
    >
      {children}
      {external ? (
        <span className="sr-only"> {content.common.opensInNewTab}</span>
      ) : null}
    </NextLink>
  );
}
