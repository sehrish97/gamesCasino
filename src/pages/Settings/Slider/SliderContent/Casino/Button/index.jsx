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
const ButtonContent = () => {
    const [inputValue, setInputValue] = useState("Button Text");
    const [textColor, setTextColor] = useState("white");
    const [link, setLink] = useState("https://example.com");
    const handleTextFieldChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleLinkTextFieldChange = (event) => {
      setLink(event.target.value);
    };
    const handleTextColorTextFieldChange = (event) => {
      setTextColor(event.target.value);
    };
    return (
      <Box sx={{ marginBottom: "25px" }}>
        <Typography sx={{ fontSize: "1.3em", marginBottom: "10px" }}>
          Button
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
              Text
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
                Text color
                </Typography>
                <TextField
                  value={textColor}
                  onChange={handleTextColorTextFieldChange}
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
                Link 
                </Typography>
                <TextField
                  value={link}
                  onChange={handleLinkTextFieldChange}
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

export default ButtonContent