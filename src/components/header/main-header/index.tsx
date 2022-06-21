import LargeScreenHeader from "../large-screen";
import { HeaderContainer, HeaderData, LargeScreen, Mobile } from "./styles";
import dynamic from "next/dynamic";
import React from "react";
import useDevice from "@src/modules/libs/use-is-Phone";

const SimpleBackdrop = dynamic(() => import(/* webpackChunkName: "simple-backdrop" */ "../backdrop"));

const Header = () => {
    const isPhone = useDevice("992");
    return (
        <HeaderContainer>
            <HeaderData>
                <img src="/icons/spotify-logo.svg" alt="spotify-logo" height="30" width="100" />
                <LargeScreen>
                    <LargeScreenHeader />
                </LargeScreen>
                <Mobile>{isPhone && <SimpleBackdrop />}</Mobile>
            </HeaderData>
        </HeaderContainer>
    );
};

export default Header;
