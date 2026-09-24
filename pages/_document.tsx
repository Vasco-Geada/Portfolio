import NextDocument, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
} from "next/document";

import { getLocaleFromCookieHeader } from "@lang/server";
import type { PortfolioDocumentProps } from "@store/components/Document";

export default class Document extends NextDocument<PortfolioDocumentProps> {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<PortfolioDocumentProps> {
    const initialProps = await NextDocument.getInitialProps(context);

    return {
      ...initialProps,
      locale: getLocaleFromCookieHeader(context.req?.headers.cookie),
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
