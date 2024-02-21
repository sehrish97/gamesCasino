import React, { useState } from "react";
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#4bcb27" : "#4bcb27",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#4bcb27",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const DynamicSwitches = ({ switches }) => {
  const [open, setOpen] = useState(false); 
  const [switchStates, setSwitchStates] = useState(
    switches.map((s) => ({ label: s.label }))
  );
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      {switchStates.map((state) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
          key={state.label}
        >
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            onClick={handleClick}
            label={state.label}
          />
          <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{ width: "100%", backgroundColor: "#DF9A9F", color: "black" }}
            >
              Failed to save
            </Alert>
          </Snackbar>
        </Box>
      ))}
    </>
    // <Box
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     marginBottom:"15px"
    //   }}
    // >
    //   <FormControlLabel
    //     control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
    //     onClick={handleClick}
    //     label="Visible"
    //   />
    //   </Box>
    //   <Box
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     marginBottom:"15px"
    //   }}
    // >
    //   <FormControlLabel
    //     control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
    //     onClick={handleClick}
    //     label="Featured"
    //   />
    //   </Box>
  );
};

export default DynamicSwitches;
