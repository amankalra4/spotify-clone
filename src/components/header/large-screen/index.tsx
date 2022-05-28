import { ChildHeader, DropDown } from "./styles";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommonHeader from "../common-header";
import Dropdown from "../dropdown";
import { DividerContainer } from "../common-styles";

const LargeScreenHeader = () => {
  return (
    <ChildHeader>
      <CommonHeader />
      <DividerContainer>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem={true}
        />
      </DividerContainer>
      <DropDown>
        <AccountCircleIcon fontSize="large" />
        <Dropdown />
      </DropDown>
    </ChildHeader>
  );
};

export default LargeScreenHeader;
