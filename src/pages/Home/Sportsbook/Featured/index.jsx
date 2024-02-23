import {
  Box,
  FormControlLabel,
  Typography,
  Switch,
  TextField,
  Snackbar,
  Alert
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { useState } from "react";

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

const Featured = () => {
  const[open,setOpen]=useState(false)
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const leagues = `Premier League
Bundesliga
Serie A
Ligue 1
La Liga
NCAA
NHL`;
  return (
    <Box
      sx={{
        padding: "40px 50px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          fontSize: "3rem",
          marginBottom: "35px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Sports
      </Box>
      <Box
        sx={{
          top: "0px",
          opacity: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            onClick={handleClick}
            label='Enable "Featured" sport category"'
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
        <Box
          sx={{
            display: "flex",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              width: "20%",
              minWidth: "200px",
              marginBottom: "25px",
            }}
          >
            <Box
              sx={{
                fontSize: "1.4em",
                fontWeight: 400,
                marginBottom: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.4em",
                  fontWeight: 400,
                }}
              >
                Filters
              </Typography>
            </Box>
            <Box
              sx={{
                fontSize: "1.4em",
                fontWeight: 400,
                marginBottom: "25px",
              }}
            >
              <Typography>
                {" "}
                "Featured" category will include games based on these filters.{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                id="filled-basic"
                multiline
                rows={10}
                variant="filled"
                value={leagues}
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
    </Box>
  );
};

export default Featured;
