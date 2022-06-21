import { backgroundImageLargeScreen } from "@src/constants";
import MetaData from "@src/modules/meta-data";
import type { NextPage } from "next";
import Head from "next/head";
import BottomSection from "../src/components/home-page/bottom-section";
import TopSection from "../src/components/home-page/top-container";

const Home: NextPage = () => (
    <>
        <MetaData
            pageTitle="Listening is everything - Spotify"
            ogTitle="Listening is everything"
            description="Spotify is all the music you’ll ever need."
            ogDescription="Spotify is all the music you’ll ever need."
            image="https://www.scdn.co/i/_global/open-graph-default.png"
        />
        <Head>
            <link rel="preload" href={backgroundImageLargeScreen} as="image" />
            <link rel="preload" href="/icons/spotify-logo.svg" as="image" />
        </Head>
        <TopSection />
        <BottomSection />
    </>
);

export default Home;
