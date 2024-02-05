import React, { useState } from "react";
import ClientCategoryModal from "./ClientCategoryModal";
import { Button } from "@mui/material";

const ClientCategory = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" color="primary">
        Add Client Category
      </Button>
      <ClientCategoryModal open={open} onClose={handleClose} />
    </>
  );
};

export default ClientCategory;
