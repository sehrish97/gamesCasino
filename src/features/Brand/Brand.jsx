import { Button } from "@mui/material";
import React, { useState } from "react";
import BrandModal from "./BrandModal";

const Brand = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" color="primary">
        Add Brand
      </Button>
      <BrandModal open={open} onClose={handleClose} />
    </>
  );
};

export default Brand;
