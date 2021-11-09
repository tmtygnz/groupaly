import type { AppProps } from "next/app";
import { NewUserProvider } from "../context/NewUserContext";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`h-screen bg-bg text-black-pearl-900`}>
      <NewUserProvider>
        <Component {...pageProps} />
      </NewUserProvider>
    </div>
  );
}
export default MyApp;
