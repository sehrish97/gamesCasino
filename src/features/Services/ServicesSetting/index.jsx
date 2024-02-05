import { Button } from "@mui/material";
import React, { useState } from "react";
import ServicesSettingModal from "./ServicesSettingModal";

const ServicesSetting = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" color="primary">
        Add Service
      </Button>
      <ServicesSettingModal open={open} onClose={handleClose} />
    </>
  );
};

export default ServicesSetting;
