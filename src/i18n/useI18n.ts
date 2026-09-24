"use client";

import { useTranslation } from "react-i18next";

import { getDictionary, normalizeLocale } from "@lang/index";

export function useI18n() {
  const { i18n, t } = useTranslation();
  const locale = normalizeLocale(i18n.resolvedLanguage ?? i18n.language);

  return {
    content: getDictionary(locale),
    i18n,
    locale,
    t,
  };
}
