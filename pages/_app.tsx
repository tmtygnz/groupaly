import type { AppProps } from "next/app";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`h-screen bg-bg text-white`}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </div>
  );
}
export default MyApp;
