import type { DocumentInitialProps } from "next/document";

import type { Locale } from "@store/I18n";

export interface PortfolioDocumentProps extends DocumentInitialProps {
  locale: Locale;
}
