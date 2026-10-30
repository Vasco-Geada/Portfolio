import type { ReactNode } from "react";
import type {
  IconName,
  IconProps,
  IconSize,
} from "@store/components/Icon";

import styles from "./styles.module.scss";

export type {
  IconName,
  IconProps,
  IconSize,
} from "@store/components/Icon";

const SIZE_IN_PIXELS: Record<Exclude<IconSize, number>, number> = {
  small: 16,
  medium: 20,
  large: 24,
};

const ICONS: Record<IconName, ReactNode> = {
  "arrow-left": (
    <>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </>
  ),
  github: (
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4-2" />
  ),
  linkedin: (
    <path
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 .8 2.2A6.4 6.4 0 0 0 16.8 9l2.2.8-2.2.8a6.4 6.4 0 0 0-4 3.8l-.8 2.3-.8-2.3a6.4 6.4 0 0 0-4-3.8L5 9.8 7.2 9a6.4 6.4 0 0 0 4-3.8L12 3Z" />
      <path d="m19 16 .35.95a3.2 3.2 0 0 0 1.9 1.9l.95.35-.95.35a3.2 3.2 0 0 0-1.9 1.9l-.35.95-.35-.95a3.2 3.2 0 0 0-1.9-1.9l-.95-.35.95-.35a3.2 3.2 0 0 0 1.9-1.9L19 16Z" />
    </>
  ),
};

export function Icon({
  name,
  size = "medium",
  label,
  decorative = false,
  className,
  "aria-label": ariaLabel,
  ...svgProps
}: IconProps) {
  const resolvedSize = typeof size === "number" ? size : SIZE_IN_PIXELS[size];
  const accessibleLabel = decorative
    ? undefined
    : (label ?? ariaLabel)?.trim() || undefined;
  const isDecorative = accessibleLabel === undefined;
  const classes = className ? `${styles.icon} ${className}` : styles.icon;

  return (
    <svg
      {...svgProps}
      aria-hidden={isDecorative ? true : undefined}
      aria-label={accessibleLabel}
      className={classes}
      fill="none"
      focusable="false"
      height={resolvedSize}
      role={isDecorative ? undefined : "img"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
      width={resolvedSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      {ICONS[name]}
    </svg>
  );
}
