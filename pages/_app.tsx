import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";

import { defaultLocale } from "@lang/index";
import { I18nProvider } from "@/i18n/I18nProvider";
import type { PortfolioAppProps } from "@store/components/App";
import "@/styles/tailwind.css";
import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }: PortfolioAppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <I18nProvider initialLocale={pageProps.initialLocale ?? defaultLocale}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  );
}
