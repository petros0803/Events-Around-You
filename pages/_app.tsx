import "bootstrap/dist/css/bootstrap.css";
import Header from "common/components/Header/Header";
import Head from "next/head";
import "styles/globals.css";
import Theme from "../styles/theme/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
