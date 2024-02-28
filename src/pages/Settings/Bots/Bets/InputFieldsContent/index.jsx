import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Typography,
  Switch,
  TextField,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
const InputFieldsContent = ({ initialValue, label, helperText }) => {
  const [value, setValue] = useState(initialValue);
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box
      sx={{
        marginBottom: "15px",
      }}
    >
      <Box sx={{ marginBottom: "5px", fontSize: "1.1em" }}>
        {label}
      </Box>
      <Box sx={{ marginBottom: "10px", opacity: 0.6 }}>
        {helperText}
      </Box>
      <TextField
        type="text"
        value={value}
        onChange={handleInputChange}
        sx={{ marginBottom: "15px" }}
      />
    </Box>
  );
};

export default InputFieldsContent;
