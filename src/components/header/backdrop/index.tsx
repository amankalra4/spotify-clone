import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  account,
  backdrop,
  closeIcon,
  hamMenuContainer,
  menuIcon,
  myProfileIcon,
} from "./styles";
import Divider from "@mui/material/Divider";
import CommonHeader from "../common-header";
import { divider, logo1 } from "../common-styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Spotify from "../../../../public/icons/spotify-logo.svg";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={backdrop}>
      <AccountCircleIcon className={myProfileIcon} />
      <MenuIcon fontSize="large" className={menuIcon} onClick={handleToggle} />
      <Backdrop
        sx={{
          color: "white",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <div className={hamMenuContainer}>
          <div>
            <CloseIcon
              fontSize="large"
              onClick={handleClose}
              className={closeIcon}
            />
            <CommonHeader />
            <Divider variant="middle" flexItem={true} className={divider} />
            <div className={account}>
              <p>Account</p>
              <p>Log out</p>
            </div>
          </div>
          <Spotify className={logo1} />
        </div>
      </Backdrop>
    </div>
  );
}
