import { Layout } from "../components/Layout";
import { React, useEffect } from "react";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onwheel = () => {
      console.log("hello wip");
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
