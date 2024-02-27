import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Title from "./Title";
import Content from "./Content";
import ButtonContent from "./Button";

const Sport = () => {
  const [age, setAge] = useState(10);
  const [objectFit, setObjectFit] = useState(10);

  const [imageUrl, setImageUrl] = useState("/img/misc/ph.png"); // Default image URL

  const handleChange = (event) => {
    setAge(event.target.value);

    // Update image URL based on selected value
    switch (event.target.value) {
      case 10: // Image
        setImageUrl("/img/misc/ph.png");
        break;
      case 20: // Gradient
        setImageUrl("#010001");
        break;
      case 30: // Video
        setImageUrl("/img/misc/ph.png");
        break;
      default:
        setImageUrl("/img/misc/ph.png");
        break;
    }
  };
  const handleTextFieldChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleChangeObjectFit = (event) => {
    setObjectFit(event.target.value);

    // Update image URL based on selected value
    switch (event.target.value) {
      case 10: // Image
        setImageUrl("cover");
        break;
      case 20: // Gradient
        setImageUrl("#010001");
        break;
      case 30: // Video
        setImageUrl("/img/misc/ph.png");
        break;
      default:
        setImageUrl("cover");
        break;
    }
  };
  return (
    <Box
      sx={{
        padding: "40px 50px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ top: "0px", opacity: 1, position: "relative" }}>
        <Box sx={{ marginBottom: "25px" }}>
          <Typography sx={{ fontSize: "1.3em", marginBottom: "10px" }}>
            Type
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
                Slide Type
              </Typography>
              <Box sx={{ minWidth: 150 }}>
                <FormControl sx={{ backgroundColor: "#24232a", color: "#fff" }}>
                  {/* <InputLabel id="demo-simple-select-label">Image</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    sx={{ borderRadius: "10px", border: "none" }}
                  >
                    <MenuItem value={10}>Image</MenuItem>
                    <MenuItem value={20}>Gradient</MenuItem>
                    <MenuItem value={30}>Video</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
                    {age === 10
                      ? "Image URL"
                      : age === 20
                      ? "Color #1"
                      : "Video URL"}
                  </Typography>
                  <TextField
                    value={imageUrl}
                    onChange={handleTextFieldChange}
                    sx={{
                      color: "white",
                      background: "#24232a",
                      border: "none",
                      borderRadius:"10px"
                    }}
                  />
                </Box>
                <Box sx={{ marginBottom: 0 }}>
                  <Typography sx={{ marginBottom: "15px", opacity: 0.6 }}>
                    Object Fit
                  </Typography>
                  <Box sx={{ minWidth: 150 }}>
                    <FormControl
                      sx={{ backgroundColor: "#24232a", color: "#fff" }}
                    >
                      {/* <InputLabel id="demo-simple-select-label">Image</InputLabel> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={objectFit}
                        onChange={handleChangeObjectFit}
                        sx={{ borderRadius: "10px", border: "none" }}
                      >
                        <MenuItem value={10}>Cover</MenuItem>
                        <MenuItem value={20}>Contain</MenuItem>
                        <MenuItem value={30}>Fill</MenuItem>
                        <MenuItem value={40}>Scale Down</MenuItem>
                        <MenuItem value={50}>None</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <Box sx={{marginTop:"25px"}}></Box>
              <Box sx={{marginBottom:"0px"}}>
              <Typography sx={{ marginBottom: "15px", opacity: 0.6 }}>Custom HTML</Typography>
              <TextField
                id="filled-basic"
                multiline
                rows={10}
                variant="filled"
                inputProps={{
                  sx:
                  {
                    backgroundColor:"#24232a",
                    border:"none !important",
                    fontSize:"14px",
                    '&:focus':{
                      borderBottom:"none !important",
                      border:"none !important"
                    }
                  }
                }}
                sx={{
                  backgroundColor:"#24232a",
                  borderRadius:"10px"
                }}
              />
              </Box>
            </Box>
          </Box>
        </Box>
        <Title />
        <Content />
        <ButtonContent />
      </Box>
    </Box>
  )
}

export default Sport