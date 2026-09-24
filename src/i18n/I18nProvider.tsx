"use client";

import { useEffect, useState } from "react";
import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

import { defaultLocale, resources } from "@lang/index";
import type { I18nProviderProps } from "@store/components/I18nProvider";

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
  const [i18n] = useState(() => {
    const instance = createInstance();

    void instance.use(initReactI18next).init({
      resources,
      lng: initialLocale,
      fallbackLng: defaultLocale,
      supportedLngs: ["pt", "en"],
      defaultNS: "translation",
      initAsync: false,
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });

    return instance;
  });

  useEffect(() => {
    if (i18n.resolvedLanguage !== initialLocale) {
      void i18n.changeLanguage(initialLocale);
    }
  }, [i18n, initialLocale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
