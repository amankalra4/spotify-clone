import LargeScreenHeader from "../large-screen";
import { HeaderContainer, HeaderData, LargeScreen, Mobile } from "./styles";
import Spotify from "../../../../public/icons/spotify-logo.svg";
import { SpotifyLogo } from "../common-styles";
import dynamic from "next/dynamic";

const SimpleBackdrop = dynamic(() => import("../backdrop"), { ssr: false });

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderData>
                <SpotifyLogo>
                    <Spotify />
                </SpotifyLogo>
                <LargeScreen>
                    <LargeScreenHeader />
                </LargeScreen>
                <Mobile>
                    <SimpleBackdrop />
                </Mobile>
            </HeaderData>
        </HeaderContainer>
    );
};

export default Header;
