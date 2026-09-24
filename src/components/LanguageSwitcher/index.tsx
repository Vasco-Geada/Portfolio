"use client";

import { useState } from "react";
import { useRouter } from "next/router";

import { localeCookieName } from "@lang/index";
import { useI18n } from "@/i18n/useI18n";
import type { Locale } from "@store/I18n";
import type { LanguageSwitcherProps } from "@store/components/LanguageSwitcher";

import styles from "./styles.module.scss";

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const { content, i18n, locale } = useI18n();
  const classes = [styles.switcher, className].filter(Boolean).join(" ");

  const changeLanguage = async (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    await i18n.changeLanguage(nextLocale);
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = nextLocale;

    setIsPending(true);

    try {
      await router.replace(router.asPath, undefined, { scroll: false });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className={classes} role="group" aria-label={content.common.languageSwitcherAriaLabel}>
      <button
        type="button"
        className={locale === "pt" ? styles.active : undefined}
        aria-pressed={locale === "pt"}
        title={content.common.portugueseLabel}
        disabled={isPending}
        onClick={() => void changeLanguage("pt")}
      >
        {content.common.portugueseShortLabel}
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={locale === "en" ? styles.active : undefined}
        aria-pressed={locale === "en"}
        title={content.common.englishLabel}
        disabled={isPending}
        onClick={() => void changeLanguage("en")}
      >
        {content.common.englishShortLabel}
      </button>
    </div>
  );
}

export type { LanguageSwitcherProps } from "@store/components/LanguageSwitcher";
