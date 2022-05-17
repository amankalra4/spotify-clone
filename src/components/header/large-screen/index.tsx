import { childHeader, dropDown, profileIcon } from "./styles";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommonHeader from "../common-header";
import Dropdown from "../dropdown";
import { divider } from "../common-styles";

const LargeScreenHeader = () => {
  return (
    <div className={childHeader}>
      <CommonHeader />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem={true}
        className={divider}
      />

      <div className={dropDown}>
        <AccountCircleIcon className={profileIcon} />
        <Dropdown />
      </div>
    </div>
  );
};

export default LargeScreenHeader;
