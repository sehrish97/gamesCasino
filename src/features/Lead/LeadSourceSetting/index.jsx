import { Button } from "@mui/material";
import React, { useState } from "react";
import LeadSourceSettingModal from "./LeadSourceSettingModal";

const LeadSourceSetting = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" color="primary">
        Add Lead Source
      </Button>
      <LeadSourceSettingModal open={open} onClose={handleClose} />
    </>
  );
};

export default LeadSourceSetting;
