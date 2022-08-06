import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  // Purspose: - context/providers, Themes, data
  // https://github.com/LayoutComponents
  // additional props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
