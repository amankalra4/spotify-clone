import { ChildHeader, DropDown, profileIcon } from "./styles";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommonHeader from "../common-header";
import Dropdown from "../dropdown";
import { divider } from "../common-styles";

const LargeScreenHeader = () => {
  return (
    <ChildHeader>
      <CommonHeader />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem={true}
        className={divider}
      />

      <DropDown>
        <AccountCircleIcon className={profileIcon} />
        <Dropdown />
      </DropDown>
    </ChildHeader>
  );
};

export default LargeScreenHeader;
