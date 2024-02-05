import React, { useEffect, useReducer, useRef, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { Box, Button, Divider, FormControl, IconButton, InputLabel, MenuItem, Modal, OutlinedInput, Select, TextField, Typography, styled } from "@mui/material";
import { useGetAllCompaniesQuery } from "../../../../../redux/api/company/companyApiSlice";
import { useCreateBrandMutation, useUpdateBrandMutation } from "../../../../../redux/api/brand/brandApiSlice";
import DeleteBrand from "../DeleteBrand";

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

const AddBrand = ({ open, onClose, brand }) => {
  const [brandId, setBrandId] = useState("");
  const initialState = {
    title: "",
    acronym: "",
    imgUrl: "",
    company: "",
  };
  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  const fileInputRef = useRef(null);
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  //API
  const { data: companies, isSuccess } = useGetAllCompaniesQuery();
  const [createBrand] = useCreateBrandMutation();
  const [updateBrand] = useUpdateBrandMutation();

  useEffect(() => {
    if (brand) {
      dispatch({
        title: brand.title,
        acronym: brand.acronym,
        company: brand.company._id,
        imgUrl: brand.imgUrl,
      });
      setBrandId(brand._id);
    }
  }, [brand]);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    dispatch({ imgUrl: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", state.title);
    formData.append("acronym", state.acronym);
    formData.append("company", state.company);
    formData.append("file", state.imgUrl);

    let data;
    if (brand) {
      data = await updateBrand({ brandId, data: formData });
      onClose();
    } else {
      data = await createBrand(formData);
      dispatch(initialState);
      onClose();
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" color="primary" variant="h5" component="h2" sx={{ textAlign: "center", textTransform: "uppercase", marginBottom: 1 }}>
              Create Brand
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
              <Box sx={{ width: 200, height: 100, overflow: "hidden" }}>
                <img
                  src={typeof state.imgUrl === "object" ? URL.createObjectURL(state.imgUrl) : `http://localhost:8000/${state.imgUrl}`}
                  alt="company icon"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </Box>
            ) : (
              <IconButton onClick={handleFileInputClick}>
                <ImageIcon sx={{ width: 200, height: 100 }} color="secondary" />
                <VisuallyHiddenInput type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileInputChange} />
              </IconButton>
            )}

            <TextField fullWidth id="standard-basic" label="Brand Title" variant="standard" value={state.title} onChange={(e) => dispatch({ title: e.target.value })} />
            <TextField fullWidth id="standard-basic" label="Brand Acroynm" variant="standard" value={state.acronym} onChange={(e) => dispatch({ acronym: e.target.value })} />
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {!brandId && (
              <Button fullWidth variant="outlined" onClick={handleFormSubmit}>
                Submit
              </Button>
            )}
            {brandId && (
              <Button fullWidth variant="outlined" onClick={handleFormSubmit}>
                Update
              </Button>
            )}
            {brandId && <DeleteBrand onClose={onClose} brand={brand} dispatch={() => dispatch(initialState)} />}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddBrand;
