import { ChildHeader, DropDown } from "./styles";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommonHeader from "../common-header";
import Dropdown from "../dropdown";
import { DividerContainer } from "../common-styles";
import LoginLink from "../login-link";
import useGetCookie from "@src/modules/libs/use-get-cookie";

const LargeScreenHeader = () => {
    const { cookieData } = useGetCookie();
    return (
        <ChildHeader>
            <CommonHeader />
            <DividerContainer>
                <Divider orientation="vertical" variant="middle" flexItem={true} />
            </DividerContainer>
            <DropDown>
                {cookieData ? (
                    <>
                        <AccountCircleIcon fontSize="large" />
                        <Dropdown />
                    </>
                ) : (
                    <LoginLink />
                )}
            </DropDown>
        </ChildHeader>
    );
};

export default LargeScreenHeader;
