import {  Button } from "@mui/material";
import React, {  useState } from "react";
import CompanyModal from "./CompanyModal"; 

const Company = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    
      <Button onClick={handleOpen} variant="outlined" color="primary">
        Add Company
      </Button>
      <CompanyModal open={open} onClose={handleClose} />

    </>
  );
};

export default Company;
