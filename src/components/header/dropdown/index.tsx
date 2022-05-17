import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { dropDown1 } from "./styles";

export default function Dropdown() {
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    setOpen(false);
  };

  return (
    <div className={dropDown1}>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <Select
          displayEmpty
          renderValue={(value: any) => <span>Profile</span>}
          onChange={handleChange}
        >
          <MenuItem onClick={handleChange}>Account</MenuItem>
          <MenuItem onClick={handleChange}>Log out</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
