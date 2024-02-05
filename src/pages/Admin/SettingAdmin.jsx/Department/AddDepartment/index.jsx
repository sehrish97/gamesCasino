import React, { useReducer, useRef, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { Box, Button, Divider, FormControl, IconButton, InputLabel, MenuItem, Modal, OutlinedInput, Select, TextField, Typography, styled } from "@mui/material";
import { useGetAllCompaniesQuery } from "../../../../../redux/api/company/companyApiSlice";
import { useCreateDepartmentMutation } from "../../../../../redux/api/department/departmentApiSlice";
import { SignalWifiStatusbar4BarRounded } from "@mui/icons-material";

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

const AddDepartment = ({ open, onClose, department }) => {
  const initialState = {
    title: "",
    company: "",
  };
  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  //API
  const { data: companies, isSuccess } = useGetAllCompaniesQuery();
  const [createDepartment] = useCreateDepartmentMutation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { data } = await createDepartment({
      title: state.title,
      company: state.company,
    });
    if (data) {
      onClose();
      dispatch(initialState);
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" color="primary" variant="h5" component="h2" sx={{ textAlign: "center", textTransform: "uppercase", marginBottom: 1 }}>
              Create Department
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
            <TextField fullWidth id="standard-basic" label="Department Title" variant="standard" onChange={(e) => dispatch({ title: e.target.value })} />
            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Company</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={state.company}
                onChange={(e) => dispatch({ company: e.target.value })} // Update the state
                label="Company"
              >
                {isSuccess && companies.length > 0 ? (
                  companies.map((company) => (
                    <MenuItem key={company._id} value={company._id}>
                      {company.title}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem>No Company Found</MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>
          <Button fullWidth variant="outlined" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddDepartment;
