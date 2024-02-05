import React, { useEffect, useReducer, useRef, useState } from "react";
import { Box, Button, Divider, IconButton, Modal, TextField, Typography, styled } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

// import CompanyDeleteModal from "./CompanyDeleteModal";

//Redux
import { useCreateLeadSourceMutation } from "../../../redux/api/lead/leadSourceApiSlice";
// import {  useUpdateCompanyMutation } from "../../redux/api/company/companyApiSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "0.75rem",
  boxShadow: 24,
  p: 2,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const LeadSourceSettingModal = ({ open, onClose, company }) => {
  const [companyId, setCompanyId] = useState("");

  const initialState = {
    title: "",
    sequence: "",
  };
  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  // API
  const [createLeadSource] = useCreateLeadSourceMutation();
//   const [createCompany] = useCreateCompanyMutation();
//   const [updateCompany] = useUpdateCompanyMutation();

  useEffect(() => {
    if (company) {
      dispatch({
        title: company.title,
      });
      setCompanyId(company._id);
    }
  }, [company]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const  data = await createLeadSource({ title: state.title});
    // let data;
    // if (company) {
    //   data = await updateCompany({ companyId, data: formData });
    // } else {
    //   data = await createLeadSource(formData);
    // }
    if (data) {
      onClose();
      dispatch(initialState);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box>
          <Typography id="modal-modal-title" color="primary" variant="h5" component="h2" sx={{ textAlign: "center", textTransform: "uppercase", marginBottom: 1 }}>
            Lead Source
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            mt: 2,
            mb: 4,
            mx: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >

          <TextField fullWidth id="standard-basic" label="Lead Source Title" variant="standard" value={state.title} onChange={(e) => dispatch({ title: e.target.value })} />
          <TextField fullWidth id="standard-basic" label="Lead Source Title" variant="standard" value={state.sequence} onChange={(e) => dispatch({ sequence: e.target.value })} />
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
          <Button fullWidth variant="outlined" onClick={handleFormSubmit}>
            Submit
          </Button>
          {/* <LeadSourceSettingModal onClose={onClose} company={company} dispatch={()=>dispatch(initialState)}/> */}
        </Box>
      </Box>
    </Modal>
  );
};

export default LeadSourceSettingModal;
