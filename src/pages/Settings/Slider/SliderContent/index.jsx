import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  FormControl,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const SliderContent = ({ data, title, heading, subtitle, discription, id }) => {
  return (
    <>
      <FormControl fullWidth>
        <Typography sx={{ fontSize: "18.72px", marginBottom: "1rem" }}>
          {data[0]?.title}
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: "4rem" }}>
          {/* Use Grid container to manage layout */}
          <Grid item xs={12} sm={4}>
            {/* On mobile, each placeholder will take full width */}
            <Link to={`/admin/slider/${data[0]?.id}`}>
              <Box
                component={Paper}
                sx={{
                  border: "1px solid grey",
                  borderRadius: "1rem",
                  p: 4,
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "#201F25",
                  },
                }}
              >
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        bgcolor: "white",
                        color: "#000",
                        px: 1,
                        borderRadius: "0.2rem",
                      }}
                    >
                      {data[0]?.heading}
                    </Typography>
                  </Box>

                  <Box marginY={2}>
                    <Typography marginY={1} variant="subtitle1">
                      {data[0]?.subtitle}
                    </Typography>
                    <Typography>{data[0]?.discription}</Typography>
                  </Box>
                </Box>

                <Box>
                  <Button variant="outlined">BUTTON TEXT</Button>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to={`/admin/slider/${data[1]?.id}`}>
              <Box
                component={Paper}
                sx={{
                  border: "1px solid grey",
                  borderRadius: "1rem",
                  p: 4,
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transform: "scale(1.1)",
                  zIndex: 3,
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "#201F25",
                  },
                  "@media (max-width: 600px)": {
                    // Media query for mobile screens
                    transform: "none", // Reset transformation for mobile
                  },
                }}
              >
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        bgcolor: "white",
                        color: "#000",
                        px: 1,
                        borderRadius: "0.2rem",
                      }}
                    >
                      {data[1]?.heading}
                    </Typography>
                  </Box>

                  <Box marginY={2}>
                    <Typography marginY={1} variant="subtitle1">
                      {data[1]?.subtitle}
                    </Typography>
                    <Typography>{data[1]?.discription}</Typography>
                  </Box>
                </Box>

                <Box>
                  <Button variant="outlined">BUTTON TEXT</Button>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to={`/admin/slider/${data[1]?.id}`}>
              <Box
                component={Paper}
                sx={{
                  border: "1px solid grey",
                  borderRadius: "1rem",
                  p: 4,
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "#201F25",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      "@media (max-width: 600px)": {
                        // Media query for mobile screens
                        justifyContent: "flex-start", // Align content to start on mobile
                      },
                    }}
                  >
                    {/* Change justifyContent to flex-start for mobile */}
                    <Typography
                      sx={{
                        bgcolor: "white",
                        color: "#000",
                        px: 1,
                        borderRadius: "0.2rem",
                      }}
                    >
                      {data[2]?.heading}
                    </Typography>
                  </Box>

                  <Box
                    marginY={2}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      "@media (max-width: 600px)": {
                        // Media query for mobile screens
                        alignItems: "start", // Align content to start on mobile
                      }, // Align content to start on mobile
                    }}
                  >
                    <Typography marginY={1} variant="subtitle1">
                      {data[2]?.subtitle}
                    </Typography>
                    <Typography>{data[2]?.discription}</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    "@media (max-width: 600px)": {
                      // Media query for mobile screens
                      alignItems: "start", // Align content to start on mobile
                    }, // Align button to start on mobile
                  }}
                >
                  <Button variant="outlined">BUTTON TEXT</Button>
                </Box>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
};

export default SliderContent;
