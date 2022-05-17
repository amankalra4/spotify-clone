import LargeScreenHeader from "../large-screen";
import { headerData, largeScreen, mobile, headerContainer } from "./styles";
import Spotify from "../../../../public/icons/spotify-logo.svg";
import { spotifyLogo } from "../common-styles";
import SimpleBackdrop from "../backdrop";

const Header = () => {
  return (
    <div className={headerContainer}>
      <div className={headerData}>
        <Spotify className={spotifyLogo} />
        <div className={largeScreen}>
          <LargeScreenHeader />
        </div>
        <div className={mobile}>
          <SimpleBackdrop />
        </div>
      </div>
    </div>
  );
};

export default Header;
