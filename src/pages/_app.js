import Layout from "@/components/layout";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="" />
    </Head>
    <Provider store={store}>
      <Layout>
        {loading && <SkeltonStaticPages />}
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </>
  );
}
