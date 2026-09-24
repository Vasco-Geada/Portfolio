import type { ReactNode } from "react";

import type { Locale } from "@store/I18n";

export interface I18nProviderProps {
  children: ReactNode;
  initialLocale: Locale;
}
