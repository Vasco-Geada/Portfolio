"use client";

import NextLink from "next/link";
import type { ButtonProps } from "@store/components/Button";
import { useI18n } from "@/i18n/useI18n";

import styles from "./styles.module.scss";

export type {
  ButtonElementProps,
  ButtonLinkProps,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "@store/components/Button";

export function Button({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const { content } = useI18n();
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href !== undefined) {
    const {
      href,
      external = false,
      download,
      rel,
      target,
      ...anchorProps
    } = props;

    return (
      <NextLink
        {...anchorProps}
        href={href}
        className={classes}
        download={download}
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

  const { type = "button", ...buttonProps } = props;

  return (
    <button {...buttonProps} type={type} className={classes}>
      {children}
    </button>
  );
}
