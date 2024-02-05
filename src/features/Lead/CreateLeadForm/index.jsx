import React, { useEffect, useReducer, useState } from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Icon,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//Api
import { useGetAllBrandsQuery } from "../../../redux/api/brand/brandApiSlice";

// Library
import { useGetAllLeadSourceQuery } from "../../../redux/api/lead/leadSourceApiSlice";

//MUI ICON
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useGetAllServicesQuery } from "../../../redux/api/services/servicesApiSlice";
import TagInput from "../../../components/TagInput";
import { pink } from "@mui/material/colors";
import budgetData from "../../../_api/budget-data";

import countryStates from "../../../_api/countryStates";
import country from "../../../_api/country";

const CreateLeadForm = () => {
  const theme = useTheme();
  const usCountry = country.getCountryByCode("US");
  const caCountry = country.getCountryByCode("CA");

  const initialState = {
    brand: "",
    country: usCountry,
    state: "",
    timezone: "",
    abbreviation: "",
    city: "",
    leadSource: null,
    name: "",
    leadType: "individual",
    phone: [{ phone: "", phoneType: "primary" }],
    email: [{ email: "", emailType: "primary" }],
    leadIndustry: "",
    leadBrief: "",
    leadBudget: "",
    leadDomain: "",
    services: [],
    serviceTags: [],
    leadFacebook: "",
    leadInstagram: "",
    leadLinkedIn: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "updatePhone":
        const { indexPhone, phone, phoneType } = action.payload;
        const updatedPhones = [...state.phone];
        updatedPhones[indexPhone] = { phone, phoneType };
        return { ...state, phone: updatedPhones };
      case "addPhone":
        return { ...state, phone: [...state.phone, { phone: "", phoneType: "" }] };
      case "removePhone":
        if (state.phone.length > 1) {
          const updatedPhones = [...state.phone];
          updatedPhones.splice(action.index, 1);
          return { ...state, phone: updatedPhones };
        }
        return state;

      case "updateEmail":
        const { indexEmail, email, emailType } = action.payload;
        const updatedEmails = [...state.email];
        updatedEmails[indexEmail] = { email, emailType };
        return { ...state, email: updatedEmails };
      case "addEmail":
        return { ...state, email: [...state.email, { email: "", emailType: "" }] };
      case "removeEmail":
        if (state.email.length > 1) {
          const updatedEmails = [...state.email];
          updatedEmails.splice(action.index, 1);
          return { ...state, email: updatedEmails };
        }
        return state;

      case "updateClientType":
        return { ...state, clientType: action.value };

      case "updateSelectedServices":
        const { services } = action.payload;
        const updatedSelectedServices = state.services ? [...state.services] : [];
        if (updatedSelectedServices.includes(services)) {
          return { ...state, services: updatedSelectedServices.filter((service) => service !== services) };
        } else {
          return { ...state, services: [...updatedSelectedServices, services] };
        }
      default:
        return { ...state, ...action };
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  //API
  const { data: brands, isSuccess: isBrandsSuccess, isError: isBrandError } = useGetAllBrandsQuery();
  const { data: leadSource, isSuccess: isLeadSourceSuccess, isError: isLeadSourceError } = useGetAllLeadSourceQuery();
  const { data: servicesData, isSuccess: isServicesSuccess, isError: isServicesError } = useGetAllServicesQuery();

  const countries = country.getAllCountries();
  const states = countryStates.getStatesOfCountry(state.country.isoCode);

  useEffect(() => {
    const foundState = states.find((data) => data.name === state.state);

    if (foundState) {
      const { timezone } = foundState;
      dispatch({ timezone });
    }
  }, [state.state]);

  const isPrimarySelected = (index) => {
    return state.phone.some((phoneData, i) => i !== index && phoneData.phoneType === "primary");
  };
  const enterPhone = (
    <FormControl size="small" fullWidth variant="outlined">
      {state.phone.map((phoneData, indexPhone) => (
        <Box key={indexPhone} display="flex" marginTop={1} gap={1} alignItems="center">
          <FormControl size="small" fullWidth>
            <PhoneInput
              country={state.country.isoCode.toLowerCase()}
              value={phoneData.phone}
              inputProps={{
                name: `phone_${indexPhone}`,
                id: `phone_${indexPhone}`,
                type: "tel",
                placeholder: "Enter Phone",
              }}
              onChange={(phone) =>
                dispatch({
                  type: "updatePhone",
                  payload: { indexPhone, phone, phoneType: phoneData.phoneType },
                })
              }
              inputStyle={{
                borderRadius: "12px",
                width: "100%",
              }}
            />
          </FormControl>
          <FormControl size="small" sx={{ width: 500 }}>
            <Select
              value={phoneData.phoneType}
              onChange={(e) =>
                dispatch({
                  type: "updatePhone",
                  payload: { indexPhone, phone: phoneData.phone, phoneType: e.target.value },
                })
              }
            >
              <MenuItem value="primary" disabled={isPrimarySelected(indexPhone)}>
                Primary
              </MenuItem>
              <MenuItem value="secondary">Secondary</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            aria-label="delete"
            variant="outlined"
            color="secondary"
            onClick={() => dispatch({ type: "removePhone", index: indexPhone })}
            disabled={state.phone.length <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <IconButton variant="outlined" color="primary" onClick={() => dispatch({ type: "addPhone" })}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>
      ))}
    </FormControl>
  );

  const isPrimaryEmailSelected = (index) => {
    return state.email.some((emailData, i) => i !== index && emailData.emailType === "primary");
  };
  const enterEmail = (
    <FormControl size="small" fullWidth variant="outlined">
      {state.email.map((emailData, indexEmail) => (
        <Box key={indexEmail} display="flex" marginTop={1} gap={1} alignItems="center">
          <FormControl size="small" fullWidth>
            <TextField
              size="small"
              value={emailData.email}
              name={`email_${indexEmail}`}
              id={`email_${indexEmail}`}
              type="email"
              label="Email"
              placeholder="Enter Email"
              onChange={(e) =>
                dispatch({
                  type: "updateEmail",
                  payload: { indexEmail, email: e.target.value, emailType: emailData.emailType },
                })
              }
              InputProps={{
                style: { borderRadius: "0.75rem" },
              }}
              variant="outlined"
              style={{
                width: "100%",
              }}
            />
          </FormControl>
          <FormControl size="small" sx={{ width: 500 }}>
            <Select
              value={emailData.emailType}
              onChange={(e) =>
                dispatch({
                  type: "updateEmail",
                  payload: { indexEmail, email: emailData.email, emailType: e.target.value },
                })
              }
            >
              <MenuItem value="primary" disabled={isPrimaryEmailSelected(indexEmail)}>
                Primary
              </MenuItem>
              <MenuItem value="secondary">Secondary</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            aria-label="delete"
            variant="outlined"
            color="secondary"
            onClick={() => dispatch({ type: "removeEmail", index: indexEmail })}
            disabled={state.email.length <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <IconButton variant="outlined" color="primary" onClick={() => dispatch({ type: "addEmail" })}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>
      ))}
    </FormControl>
  );

  let selectBrands;
  if (isBrandsSuccess) {
    selectBrands = (
      <FormControl size="small" fullWidth variant="outlined">
        <InputLabel htmlFor="select-brand">Select Brand</InputLabel>
        <Select
          labelId="select-brand"
          id="select-brand"
          value={state.brand}
          label="Select Brand"
          onChange={(e) => dispatch({ brand: e.target.value })}
          sx={{ borderRadius: "12px" }}
        >
          <MenuItem value="">Select Brand</MenuItem>
          {brands &&
            brands.map((brand) => (
              <MenuItem key={brand._id} value={brand.title}>
                {brand.title}
              </MenuItem>
            ))}
          {!brands && <MenuItem value="No Brand Found">No Brand Found</MenuItem>}
        </Select>
      </FormControl>
    );
  } else if (isBrandError) {
    selectBrands = (
      <Typography variant="h5" color="warning.main">
        Error fetching brands. Please try again later.
      </Typography>
    );
  }

  let selectLeadSource;
  if (isLeadSourceSuccess) {
    const leadSourceCopy = [...leadSource];
    const sortedLeadSource = leadSourceCopy.sort((a, b) => a.sequence - b.sequence);
    const firstFourLeadSources = sortedLeadSource.slice(0, 4);
    selectLeadSource = (
      <>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="lead-source"
            name="lead-source"
            value={state.leadSource}
            onChange={(e) => dispatch({ leadSource: e.target.value })}
            sx={{ display: "flex", flexDirection: "row", gap: 1 }}
          >
            {firstFourLeadSources.map((data) => (
              <FormControlLabel
                key={data._id}
                value={data.title}
                control={<Radio style={{ display: "none" }} />}
                label={<Chip label={data.title} variant="outlined" color={state.leadSource === data.title ? "secondary" : "default"} />}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    dispatch({ leadSource: data.title });
                  }
                }}
              />
            ))}
            <Autocomplete
              size="small"
              id="select-state"
              value={state.leadSource && firstFourLeadSources.some((source) => source.title === state.leadSource) ? null : state.leadSource}
              onChange={(_, newValue) => dispatch({ leadSource: newValue })}
              options={leadSourceCopy.map((data) => data.title).filter((title) => !firstFourLeadSources.some((source) => source.title === title))}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Other"
                  InputLabelProps={{
                    shrink: false,
                    sx: {
                      display: params.inputProps.value ? "none" : "block",
                    },
                  }}
                  variant="outlined"
                />
              )}
              renderTags={(value, getTagProps) => value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}
              getOptionLabel={(option) => option}
              sx={{
                "& .MuiAutocomplete-inputRoot": {
                  borderRadius: "2rem",
                },
                "& .MuiAutocomplete-listbox": {
                  borderRadius: "2rem",
                },
                minWidth: 200,
              }}
            />
          </RadioGroup>
        </FormControl>
      </>
    );
  } else if (isBrandError) {
    selectBrands = (
      <Typography variant="h5" color="warning.main">
        Error fetching brands. Please try again later.
      </Typography>
    );
  }

  let selectCountry;
  if (countries) {
    selectCountry = (
      <FormControl size="small" sx={{ display: "flex", flexDirection: "row" }} fullWidth variant="outlined">
        <RadioGroup
          aria-label="lead-country"
          name="lead-country"
          value={state.country}
          onChange={(e) => {
            const selectedCountry = countries.find((country) => country.name === e.target.value);
            dispatch({ type: "updateCountry", country: selectedCountry, state: "" });
          }}
          sx={{ display: "flex", flexDirection: "row", gap: 1 }}
        >
          {countries.map((country) => (
            <FormControlLabel
              key={country.name}
              value={country.name}
              control={<Radio style={{ display: "none" }} />}
              label={
                <Chip
                  icon={<Typography sx={{ fontSize: 18 }}>{country.flag}</Typography>}
                  label={<Typography>{country.name}</Typography>}
                  variant="outlined"
                  color={state.country.name === country.name ? "secondary" : "default"}
                />
              }
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  dispatch({ type: "updateCountry", country: country, state: "" });
                }
              }}
            />
          ))}
        </RadioGroup>
        <FormControl size="small" variant="outlined" sx={{ minWidth: 200 }}>
          <Autocomplete
            size="small"
            id="select-state"
            value={state.state || null}
            onChange={(_, newValue) => dispatch({ state: newValue })}
            options={states.map((state) => state.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select State"
                InputLabelProps={{
                  shrink: false,
                  sx: {
                    display: params.inputProps.value ? "none" : "block",
                  },
                }}
                variant="outlined"
              />
            )}
            renderTags={(value, getTagProps) => value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}
            getOptionLabel={(option) => option}
            sx={{
              "& .MuiAutocomplete-inputRoot": {
                borderRadius: "2rem",
              },
              "& .MuiAutocomplete-listbox": {
                borderRadius: "2rem",
              },
            }}
          />
        </FormControl>
      </FormControl>
    );
  }

  const leadType = ["individual", "company"];
  const selectClientType = (
    <FormControl fullWidth component="fieldset" sx={{ marginLeft: 4 }}>
      <RadioGroup
        aria-label="client-type"
        name="client-type"
        value={state.leadType}
        onChange={(e) => dispatch({ leadType: e.target.value })}
        sx={{ display: "flex", flexDirection: "row", gap: 1 }}
      >
        {leadType.map((data) => (
          <FormControlLabel
            key={data}
            value={data}
            control={<Radio style={{ display: "none" }} />}
            label={<Chip label={data} variant="outlined" color={state.leadType === data ? "secondary" : "default"} onClick={() => dispatch({ leadType: data })} />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );

  const enterName = (
    <FormControl size="small" fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-enter-name">Enter Name</InputLabel>
      <OutlinedInput
        id="outlined-enter-name"
        type="text" // Assuming it's a text input for a name
        label="Enter Name"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) => dispatch({ name: e.target.value })}
        sx={{ borderRadius: "12px" }}
      />
    </FormControl>
  );

  let selectServices;
  let selectedServicesChips;
  if (servicesData) {
    selectedServicesChips = servicesData.map((data) => (
      <Chip
        key={data._id}
        label={data.title}
        clickable
        variant="outlined"
        color={state.services.includes(data.title) ? "secondary" : "default"}
        onClick={() =>
          dispatch({
            type: "updateSelectedServices",
            payload: { services: data.title },
          })
        }
      />
    ));

    selectServices = (
      <FormControl component="fieldset">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, maxWidth: 1100 }}>
          {selectedServicesChips} <TagInput selected={state.serviceTags} setSelected={(e) => dispatch({ serviceTags: e })} placeholder="Type a service and press [ENTER]" />
        </Box>
      </FormControl>
    );
  }
  let selectBudget;
  if (budgetData) {
    selectBudget = (
      <>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="lead-budget"
            name="lead-budget"
            value={state.leadBudget}
            onChange={(e) => dispatch({ leadBudget: e.target.value })}
            sx={{ display: "flex", flexDirection: "row", gap: 1 }}
          >
            {budgetData.map((data) => (
              <FormControlLabel
                key={data._id}
                value={data.title}
                control={<Radio style={{ display: "none" }} />}
                label={<Chip label={data.title} variant="outlined" color={state.leadBudget === data.title ? "secondary" : "default"} />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </>
    );
  }

  const enterIndustry = (
    <FormControl size="small" fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-enter-leadIndustry">Enter Lead Industry</InputLabel>
      <OutlinedInput
        id="outlined-enter-leadIndustry"
        type="text"
        label="Enter leadIndustry"
        placeholder="Enter leadIndustry"
        value={state.leadIndustry}
        onChange={(e) => dispatch({ leadIndustry: e.target.value })}
        sx={{ borderRadius: "12px" }}
      />
    </FormControl>
  );

  const enterLeadDomain = (
    <FormControl size="small" fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-enter-email">Enter Lead Domain</InputLabel>
      <OutlinedInput
        id="outlined-enter-email"
        type="text" // Assuming it's a text input for a name
        label="Enter Lead Domain"
        placeholder="www.leaddomain.com"
        value={state.leadDomain}
        onChange={(e) => dispatch({ leadDomain: e.target.value })}
        sx={{ borderRadius: "12px" }}
      />
    </FormControl>
  );

  const enterLeadFacebook = (
    <FormControl size="small" fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-enter-email">Enter Facebook Link</InputLabel>
      <OutlinedInput
        id="outlined-enter-email"
        type="text" // Assuming it's a text input for a name
        label="Enter Facebook Link"
        placeholder="www.facebook.com"
        value={state.leadFacebook}
        onChange={(e) => dispatch({ leadFacebook: e.target.value })}
        sx={{ borderRadius: "12px" }}
      />
    </FormControl>
  );

  const enterLeadInstagram = (
    <FormControl size="small" fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-enter-email">Enter Instagram Link</InputLabel>
      <OutlinedInput
        id="outlined-enter-email"
        type="text" // Assuming it's a text input for a name
        label="Enter Instagram Link"
        placeholder="www.instagram.com"
        value={state.leadInstagram}
        onChange={(e) => dispatch({ leadInstagram: e.target.value })}
        sx={{ borderRadius: "12px" }}
      />
    </FormControl>
  );
  const enterLeadLinkedIn = (
    <FormControl size="small" fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-enter-email">Enter LinkedIn Link</InputLabel>
      <OutlinedInput
        id="outlined-enter-email"
        type="text" // Assuming it's a text input for a name
        label="Enter LinkedIn Link"
        placeholder="www.linkedin.com"
        value={state.leadLinkedIn}
        onChange={(e) => dispatch({ leadLinkedIn: e.target.value })}
        sx={{ borderRadius: "12px" }}
      />
    </FormControl>
  );

  const enterBrief = (
    <FormControl size="small" fullWidth variant="outlined">
      <TextareaAutosize
        className="border rounded-xl px-4 py-2 border-gray-300 hover:border-black min-h-[100px]"
        aria-label="empty textarea"
        placeholder="Eg. I need a logo design"
        value={state.leadBrief}
        onChange={(e) => dispatch({ leadBrief: e.target.value })}
      />
    </FormControl>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Box component="form">
      <Paper
        sx={{
          boxShadow: theme.customShadows.z2, // Increased shadow depth
          borderRadius: "24px", // More rounded corners
          p: 4, // Increased padding
          // maxWidth:1100
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Lead Source
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 132 }}>
                Location
              </Typography>
            </Box>
            {selectCountry}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 132 }}>
                Lead Source
              </Typography>
            </Box>
            {selectLeadSource}
          </Box>
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Basic Information
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                Full Name
              </Typography>
            </Box>
            {enterName}
            {selectClientType}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                Phone Number
              </Typography>
            </Box>
            {enterPhone}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                Email
              </Typography>
            </Box>
            {enterEmail}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                Services
              </Typography>
            </Box>
            {selectServices}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                Industry
              </Typography>
            </Box>
            {enterIndustry}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                Lead Brief
              </Typography>
            </Box>
            {enterBrief}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 132 }}>
                Budget {`(${state.country.currency})`}
              </Typography>
            </Box>
            {selectBudget}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                Domain
              </Typography>
            </Box>
            {enterLeadDomain}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                <FacebookIcon color="primary" />
                Facebook
              </Typography>
            </Box>
            {enterLeadFacebook}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                <InstagramIcon sx={{ color: pink[500] }} />
                Instagram
              </Typography>
            </Box>
            {enterLeadInstagram}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ my: 2, whiteSpace: "nowrap", width: 120 }}>
                <LinkedInIcon color="primary" />
                LinkedIn
              </Typography>
            </Box>
            {enterLeadLinkedIn}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleSubmit}>
            Add Lead
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CreateLeadForm;
