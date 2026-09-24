import type { GetServerSideProps } from "next";

import { localeCookieName, normalizeLocale } from "./index";
import type { Locale, LocalePageProps } from "@store/I18n";

export function getLocaleFromCookieHeader(cookieHeader?: string): Locale {
  const cookiePrefix = `${localeCookieName}=`;
  const localeCookie = cookieHeader
    ?.split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(cookiePrefix));

  return normalizeLocale(localeCookie?.slice(cookiePrefix.length));
}

export function createLocaleServerSideProps(): GetServerSideProps<LocalePageProps> {
  return async ({ req }) => ({
    props: {
      initialLocale: getLocaleFromCookieHeader(req.headers.cookie),
    },
  });
}
