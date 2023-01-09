import { SWRConfig } from "swr/_internal";
import "../styles/globals.css";
import NavBar from "../components/NavBar";

const fetcher = (url) => fetch(url).then((r) => r.json());

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <NavBar />
      <Component {...pageProps} />
      <style>{`
    
      body {
        margin: 30px;
        background: #2C3639;
      }
      `}</style>
    </SWRConfig>
  );
}

export default MyApp;
