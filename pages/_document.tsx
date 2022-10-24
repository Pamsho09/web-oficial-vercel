import { Html, Head, Main, NextScript } from "next/document";
import Layout from "../layout";

export default function Document(): JSX.Element {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
