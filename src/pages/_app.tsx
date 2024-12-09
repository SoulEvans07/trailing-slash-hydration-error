import type { AppProps } from "next/app";
import type { AppContextType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";

export function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Hydration error by Trailing slash</title>
        <link rel="icon" href={router.basePath + "/favicon.ico"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContextType) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default appWithTranslation(App);
