import React, { useEffect, useReducer, useRef, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useGetAllCompaniesQuery } from "../../../../../redux/api/company/companyApiSlice";
import { useCreateBrandMutation, useGetAllBrandsQuery, useUpdateBrandMutation } from "../../../../../redux/api/brand/brandApiSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useGetAllDepartmentsQuery } from "../../../../../redux/api/department/departmentApiSlice";
import { useGetAllRolesQuery } from "../../../../../redux/api/role/roleApiSlice";
import { useCreateUserMutation } from "../../../../../redux/api/user/userApiSlice";
// import DeleteBrand from "../DeleteBrand";

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
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const initialState = {
    name: "",
    email: "",
    password: "",
    companies: [],
    selectedBrands: [],
    selectedDepartments: [],
    role: [],
    isActive: true,
  };

  const fileInputRef = useRef(null);
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  //API
  const { data: companies, isSuccess } = useGetAllCompaniesQuery();
  const { data: brands, isSuccess: isBrandSuccess } = useGetAllBrandsQuery();
  const { data: departments, isSuccess: isDepartmentSuccess } = useGetAllDepartmentsQuery();
  const { data: roles, isSuccess: isRoleSuccess } = useGetAllRolesQuery();

  const [createUser] = useCreateUserMutation();
  const [updateBrand] = useUpdateBrandMutation();

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_COMPANY":
        const newCompanies = action.payload;

        // Check if a previously selected company is being unchecked
        const uncheckedCompany = state.companies.find((company) => !newCompanies.includes(company));

        if (uncheckedCompany) {
          const clearedBrands = state.selectedBrands.filter((brandId) => {
            const brand = brands.find((b) => b._id === brandId);
            return brand && brand.company?._id !== uncheckedCompany;
          });

          const clearedDepartments = state.selectedDepartments.filter((departmentId) => {
            const department = departments.find((d) => d._id === departmentId);
            return department && department.company?._id !== uncheckedCompany;
          });

          return {
            ...state,
            companies: newCompanies,
            selectedBrands: clearedBrands,
            selectedDepartments: clearedDepartments,
          };
        }

        // If the unchecked company is not in the previous selection, just update the companies
        return { ...state, companies: newCompanies };
      case "TOGGLE_IS_ACTIVE":
        return { ...state, isActive: !state.isActive };
      case "SELECT_BRAND":
        return { ...state, selectedBrands: action.payload };
      case "SELECT_DEPARTMENT":
        return { ...state, selectedDepartments: action.payload };
      case "SELECT_ROLE":
        return { ...state, role: action.payload };
      default:
        return { ...state, ...action };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   if (brand) {
  //     dispatch({
  //       title: brand.title,
  //       acronym: brand.acronym,
  //       company: brand.company._id,
  //       imgUrl: brand.imgUrl,
  //     });
  //     setBrandId(brand._id);
  //   }
  // }, [brand]);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    dispatch({ imgUrl: file });
  };

//frontend
const handleFormSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", state.name);
  formData.append("email", state.email);
  formData.append("password", state.password);
  formData.append("isActive", state.isActive);

  // Map userAssociations to an array of objects
  const userAssociations = state.companies.map((companyId, index) => ({
    company: companyId,
    brands: state.selectedBrands[index] || [], // Ensure it's an array
    departments: state.selectedDepartments[index] || [], // Ensure it's an array
  }));

  // Append userAssociations to formData
  formData.append("userAssociations", JSON.stringify(userAssociations));

  formData.append("role", JSON.stringify(state.role));
  formData.append("file", state.imgUrl);


  let data;
  if (brand) {
    data = await updateBrand({ brandId, data: formData });
    onClose();
  } else {
    data = await createUser(formData);
    dispatch(initialState);
  }
};


  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" color="primary" variant="h5" component="h2" sx={{ textAlign: "center", textTransform: "uppercase", marginBottom: 1 }}>
              Create User
            </Typography>
          </Box><p></p>
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

            <TextField fullWidth id="standard-basic" label="User Name" variant="standard" value={state.name} onChange={(e) => dispatch({ name: e.target.value })} />
            <TextField fullWidth id="standard-basic" label="User Email" variant="standard" value={state.email} onChange={(e) => dispatch({ email: e.target.value })} />
            <TextField
              fullWidth
              id="standard-basic"
              label="User Password"
              variant="standard"
              value={state.password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => dispatch({ password: e.target.value })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Select Role</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                multiple // Enable multiple selections
                value={state.role} // Fix here
                onChange={(e) => dispatch({ type: "SELECT_ROLE", payload: e.target.value })}
                label="role"
                renderValue={(selected) => selected.map((roleId) => roles.find((role) => role._id === roleId)?.title).join(", ")}
              >
                {isRoleSuccess && roles.length > 0 ? (
                  roles.map((role) => (
                    <MenuItem key={role._id} value={role._id}>
                      <Checkbox checked={state.role.includes(role._id)} />
                      <ListItemText primary={role.title} />
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem>No Role Found</MenuItem>
                )}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Company</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                multiple // Enable multiple selections
                value={state.companies}
                onChange={(e) => dispatch({ type: "SELECT_COMPANY", payload: e.target.value })} // Update the state
                label="Company"
                renderValue={(selected) => selected.map((companyId) => companies.find((company) => company._id === companyId)?.title).join(", ")} // Display selected companies as a comma-separated string
              >
                {isSuccess && companies.length > 0 ? (
                  companies.map((company) => (
                    <MenuItem key={company._id} value={company._id}>
                      <Checkbox checked={state.companies.includes(company._id)} />
                      <ListItemText primary={company.title} />
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem>No Company Found</MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>
          <FormGroup sx={{ m: 1, minWidth: 120 }}>
            <Box>
              {state.companies.length > 0 && <FormLabel component="legend">Select Brand</FormLabel>}
              {state.companies.length > 0 &&
                brands
                  .filter((brand) => brand?.company?._id === state.companies[state.companies.length - 1])
                  .map((brand) => (
                    <FormControlLabel
                      key={brand._id}
                      control={
                        <Checkbox
                          checked={state.selectedBrands.includes(brand._id)}
                          onChange={() => {
                            const selectedBrands = state.selectedBrands.includes(brand._id)
                              ? state.selectedBrands.filter((id) => id !== brand._id)
                              : [...state.selectedBrands, brand._id];

                            dispatch({ type: "SELECT_BRAND", payload: selectedBrands });
                          }}
                        />
                      }
                      label={brand.title}
                    />
                  ))}
            </Box>
          </FormGroup>

          <FormGroup sx={{ m: 1, minWidth: 120 }}>
            <Box>
              {state.companies.length > 0 && <FormLabel component="legend">Select Department</FormLabel>}
              {state.companies.length > 0 &&
                departments
                  .filter((department) => department?.company?._id === state.companies[state.companies.length - 1])
                  .map((department) => (
                    <FormControlLabel
                      key={department._id}
                      control={
                        <Checkbox
                          checked={state.selectedDepartments.includes(department._id)}
                          onChange={() => {
                            const selectedDepartments = state.selectedDepartments.includes(department._id)
                              ? state.selectedDepartments.filter((id) => id !== department._id)
                              : [...state.selectedDepartments, department._id];

                            dispatch({ type: "SELECT_DEPARTMENT", payload: selectedDepartments });
                          }}
                        />
                      }
                      label={department.title}
                    />
                  ))}
            </Box>
          </FormGroup>
          <FormControlLabel control={<Checkbox checked={state.isActive} onChange={() => dispatch({ type: "TOGGLE_IS_ACTIVE" })} />} label="Active" />

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
