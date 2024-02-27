import React, { useState } from "react";
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
  } from "@mui/material";
const Content = () => {
  const [inputValue, setInputValue] = useState("Placeholder");
  const [background, setBackground] = useState("This is a placeholder slide.");
  const handleTextFieldChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleBackgroundTextFieldChange = (event) => {
    setBackground(event.target.value);
  };
  return (
    <Box sx={{ marginBottom: "25px" }}>
      <Typography sx={{ fontSize: "1.3em", marginBottom: "10px" }}>
        Content
      </Typography>
      <Box
        sx={{
          borderLeft: "2px solid blue",
          marginLeft: "25px",
          paddingLeft: "25px",
          marginTop: "15px",
        }}
      >
        <Box sx={{ marginBottom: "25px" }}>
          <Typography sx={{ marginBottom: "15px", opacity: 0.6 }}>
            Tilte
          </Typography>
          <TextField
            value={inputValue}
            onChange={handleTextFieldChange}
            sx={{
              color: "white",
              background: "#24232a",
              border: "none",
              borderRadius: "10px",
            }}
          />
          </Box>
            <Box sx={{ marginBottom: "0px" }}>
              <Typography sx={{ marginBottom: "15px", opacity: 0.6 }}>
              Subtitle
              </Typography>
              <TextField
                value={background}
                onChange={handleBackgroundTextFieldChange}
                sx={{
                  color: "white",
                  background: "#24232a",
                  border: "none",
                  borderRadius: "10px",
                }}
              />
            </Box>
      </Box>
    </Box>

  )
}

export default Content