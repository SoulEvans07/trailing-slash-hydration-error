import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
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
