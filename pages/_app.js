import "../styles/globals.css";

import Head from "next/head";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Layout from "../components/Layout";


import localFont from "@next/font/local";

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-LightItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

const Montserrat = montserrat;

function App({ Component, pageProps }) {
  return (
    <main className={Montserrat.className}>
      <Head>
      <link rel="icon" type="image/x-icon" href="/images/logotype.png"/>
      </Head>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </main>
  );
}
export default App;
