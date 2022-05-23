import LargeScreenHeader from "../large-screen";
import { HeaderContainer, HeaderData, LargeScreen, Mobile } from "./styles";
import Spotify from "../../../../public/icons/spotify-logo.svg";
import { spotifyLogo } from "../common-styles";
import SimpleBackdrop from "../backdrop";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderData>
        <Spotify className={spotifyLogo} />
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
