import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Header from "../src/components/header/main-header";
import Footer from "../src/components/footer";

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
