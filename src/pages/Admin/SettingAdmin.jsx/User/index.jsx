import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

// Material-UI Icon
import AddBoxIcon from "@mui/icons-material/AddBox";
// import ExistingBrand from "./ExistingBrand";
import AddUser from "./AddUser";

const UserSetting = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ width: "100%" }}>
      <Box display="flex" justifyContent="end">
        <IconButton onClick={handleOpen}>
          <AddBoxIcon sx={{ fontSize: "1.8rem" }} />
        </IconButton>
      </Box>
      <AddUser open={open} onClose={handleClose} />
      {/* <Box>
        <ExistingBrand/>
      </Box> */}
    </Box>
  );
};

export default UserSetting;
