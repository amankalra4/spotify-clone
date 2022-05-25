import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import { Account, BackdropContainer, closeIcon, HamMenuContainer, HamBurgerMenu, MyProfileIcon } from "./styles";
import Divider from "@mui/material/Divider";
import CommonHeader from "../common-header";
import { divider, SpotifyLogo } from "../common-styles";
import { AccountCircle, Menu } from "@mui/icons-material";
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
        <BackdropContainer>
            <MyProfileIcon>
                <AccountCircle fontSize="large" />
            </MyProfileIcon>
            <HamBurgerMenu>
                <Menu fontSize="large" onClick={handleToggle} />
            </HamBurgerMenu>
            <Backdrop
                sx={{
                    color: "white",
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={open}
            >
                <HamMenuContainer>
                    <div>
                        <CloseIcon fontSize="large" onClick={handleClose} className={closeIcon} />
                        <CommonHeader />
                        <Divider variant="middle" flexItem={true} className={divider} />
                        <Account>
                            <p>Account</p>
                            <p>Log out</p>
                        </Account>
                    </div>
                    <SpotifyLogo>
                        <Spotify />
                    </SpotifyLogo>
                </HamMenuContainer>
            </Backdrop>
        </BackdropContainer>
    );
}
