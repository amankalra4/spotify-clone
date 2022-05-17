import SimpleBackdrop from "../backdrop";
import LargeScreenHeader from "../large-screen";
import { header, largeScreen, mobile, header2 } from "./styles";
import Spotify from "../../../../public/icons/spotify-logo.svg";
import { logo1 } from "../common-styles";
const Header = () => {
  return (
    <div className={header}>
      <div className={header2}>
        <Spotify className={logo1} />
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
