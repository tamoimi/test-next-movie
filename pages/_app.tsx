import { SWRConfig } from "swr/_internal";
import "../styles/globals.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
