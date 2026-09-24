import en from "./en";
import pt from "./pt";

import type { Locale, TranslationResource } from "@store/I18n";

export const defaultLocale: Locale = "pt";
export const localeCookieName = "portfolio-locale";

export const dictionaries: Record<Locale, TranslationResource> = {
  pt,
  en,
};

export const resources = {
  pt: { translation: pt },
  en: { translation: en },
};

export function normalizeLocale(locale?: string | null): Locale {
  return locale?.toLowerCase().startsWith("en") ? "en" : defaultLocale;
}

export function getDictionary(locale: Locale): TranslationResource {
  return dictionaries[locale];
}

export function getProjectById(locale: Locale, id: string) {
  return dictionaries[locale].projects.find((project) => project.id === id);
}

export function getProjectIds(): string[] {
  return dictionaries[defaultLocale].projects.map((project) => project.id);
}
