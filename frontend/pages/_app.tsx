import Header from "components/Header/Header";
import type { AppProps } from "next/app";
import "styles/global.scss";
import Page from "components/Page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Page>
        <Component {...pageProps} />
      </Page>
      <div id="portals" />
    </>
  );
}

export default MyApp;
