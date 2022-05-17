import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { profileDropdown } from "./styles";

export default function Dropdown() {
  return (
    <div className={profileDropdown}>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <Select displayEmpty renderValue={() => <span>Profile</span>}>
          <MenuItem>Account</MenuItem>
          <MenuItem>Log out</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
