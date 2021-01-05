import Head from "next/head";
import '../styles.css'
import Layout from "../components/common/Layout";
import ContextProvider from "../lib/context";

function MyApp({ Component, pageProps }) {
  console.log("app", Component, pageProps )
  return <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
    </>
}

export default MyApp
