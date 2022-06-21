import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Header = dynamic(() => import(/* webpackChunkName: "header-ssr" */ "../src/components/header/main-header"));
const Footer = dynamic(() => import(/* webpackChunkName: "footer-ssr" */ "../src/components/footer"));

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
