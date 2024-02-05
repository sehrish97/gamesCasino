import React, { useState } from "react";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import { useDeleteCompanyMutation } from "../../../../../redux/api/company/companyApiSlice";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  pt: 2,
  px: 2,
  pb: 2,
};

const DeleteCompany = ({ company, onClose, dispatch }) => {
  const [open, setOpen] = useState(false);

  //API
  const [deleteCompany] = useDeleteCompanyMutation();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const { data } = await deleteCompany({ companyId: company._id });
    if (data) {
      setOpen(!open);
      onClose();
      dispatch();
    }
  };

  return (
    <>
      <Button fullWidth variant="outlined" onClick={handleOpen}>
        Delete
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <Box sx={{ ...modalStyle }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
            <Typography variant="h6" color="warning.main">
              Confirmation
            </Typography>
            <Divider />
              <Typography variant="body1" color="">
                Are you certain you wish to proceed with the deletion? Please be aware that all associated data will be permanently removed.
              </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button variant="outlined" onClick={handleDelete}>
              Yes
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteCompany;
