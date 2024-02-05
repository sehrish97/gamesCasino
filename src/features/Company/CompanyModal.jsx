import React, { useEffect, useReducer, useRef, useState } from "react";
import { Box, Button, Divider, IconButton, Modal, TextField, Typography, styled } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

import { useCreateCompanyMutation, useUpdateCompanyMutation } from "../../redux/api/company/companyApiSlice";
import CompanyDeleteModal from "./CompanyDeleteModal";

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

const CompanyModal = ({ open, onClose, company }) => {
  const [companyId, setCompanyId] = useState("");

  const initialState = {
    title: "",
    acronym: "",
    imgUrl: "",
  };
  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  const fileInputRef = useRef(null);
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    dispatch({ imgUrl: file });
  };

  // API
  const [createCompany] = useCreateCompanyMutation();
  const [updateCompany] = useUpdateCompanyMutation();

  useEffect(() => {
    if (company) {
      dispatch({
        title: company.title,
        acronym: company.acronym,
        imgUrl: company.imgUrl,
      });
      setCompanyId(company._id);
    }
  }, [company]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", state.title);
    formData.append("acronym", state.acronym);
    formData.append("file", state.imgUrl);

    let data;
    if (company) {
      data = await updateCompany({ companyId, data: formData });
    } else {
      data = await createCompany(formData);
    }
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
            Company
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
          {!!state.imgUrl ? (
            <Box sx={{ width: 200, height: 100 }}>
              <img src={typeof state.imgUrl === "object" ? URL.createObjectURL(state.imgUrl) : `http://localhost:8000/${state.imgUrl}`} alt="company icon" className="absolute inset-0 h-full w-full object-contain" />
            </Box>
          ) : (
            <IconButton onClick={handleFileInputClick}>
              <ImageIcon sx={{ width: 200, height: 100 }} color="secondary" />
              <VisuallyHiddenInput type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileInputChange} />
            </IconButton>
          )}

          <TextField fullWidth id="standard-basic" label="Company Title" variant="standard" value={state.title} onChange={(e) => dispatch({ title: e.target.value })} />
          <TextField fullWidth id="standard-basic" label="Company Acronym" variant="standard" value={state.acronym} onChange={(e) => dispatch({ acronym: e.target.value })} />
        </Box>
        <Box sx={{display:"flex",flexDirection:"column", gap:1}}>
          <Button fullWidth variant="outlined" onClick={handleFormSubmit}>
            Submit
          </Button>
          <CompanyDeleteModal onClose={onClose} company={company} dispatch={()=>dispatch(initialState)}/>
        </Box>
      </Box>
    </Modal>
  );
};

export default CompanyModal;
