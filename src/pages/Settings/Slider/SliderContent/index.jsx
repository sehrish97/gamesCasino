import React from "react";
import { Box, Typography, Button, Paper, FormControl, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const SliderContent = ({title,heading,subtitle,discription}) => {
  return (
    <>
    <FormControl fullWidth>
  <Typography sx={{ fontSize: "18.72px", marginBottom: "1rem" }}>
    {title}
  </Typography>
  <Grid container spacing={2} sx={{marginBottom:"4rem"}}>
    {/* Use Grid container to manage layout */}
    <Grid item xs={12} sm={4}> {/* On mobile, each placeholder will take full width */}
    <Link to={`/admin/slider/${title?.toLowerCase()}`}>
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
              {heading}
            </Typography>
          </Box>

          <Box marginY={2}>
            <Typography marginY={1} variant="subtitle1">
              {subtitle}
            </Typography>
            <Typography>{discription}</Typography>
          </Box>
        </Box>

        <Box>
          <Button variant="outlined">BUTTON TEXT</Button>
        </Box>
        </Box>
        </Link>
    </Grid>
    <Grid item xs={12} sm={4}>
    <Link to={`/admin/slider/${title?.toLowerCase()}`}>
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
          "@media (max-width: 600px)": { // Media query for mobile screens
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
              {heading} 
            </Typography>
          </Box>

          <Box marginY={2}>
            <Typography marginY={1} variant="subtitle1">
              {subtitle}
            </Typography>
            <Typography>{discription}</Typography>
          </Box>
        </Box>

        <Box>
          <Button variant="outlined">BUTTON TEXT</Button>
        </Box>
      </Box>
      </Link>
    </Grid>
    <Grid item xs={12} sm={4}>
    <Link to={`/admin/slider/${title?.toLowerCase()}`}>
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
          <Box sx={{ display: "flex", justifyContent: "flex-end",
         "@media (max-width: 600px)": { // Media query for mobile screens
            justifyContent: "flex-start", // Align content to start on mobile
          },
           }}>
            {/* Change justifyContent to flex-start for mobile */}
            <Typography
              sx={{
                bgcolor: "white",
                color: "#000",
                px: 1,
                borderRadius: "0.2rem",
              }}
            >
              {heading} 
            </Typography>
          </Box>

          <Box
            marginY={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              "@media (max-width: 600px)": { // Media query for mobile screens
                alignItems: "start", // Align content to start on mobile
              }, // Align content to start on mobile
            }}
          >
            <Typography marginY={1} variant="subtitle1">
              {subtitle}
            </Typography>
            <Typography>{discription}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end", 
            "@media (max-width: 600px)": { // Media query for mobile screens
                alignItems: "start", // Align content to start on mobile
              },// Align button to start on mobile
          }}
        >
          <Button variant="outlined">BUTTON TEXT</Button>
        </Box>
      </Box>
      </Link>
    </Grid>
  </Grid>
</FormControl>
      {/* <FormControl fullWidth sx={{ marginTop: "3rem" }}>
        <Typography sx={{ fontSize: "18.72px", marginBottom: "1rem" }}>
          Sport
        </Typography>
        <Box sx={{ display: "flex", width: "100%",  }}>
          <Box
            component={Paper}
            sx={{
              border: "1px solid white",
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
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    bgcolor: "white",
                    color: "#000",
                    px: 1,
                    borderRadius: "0.2rem",
                  }}
                >
                  PLACEHOLDER
                </Typography>
              </Box>

              <Box marginY={2}>
                <Typography marginY={1} variant="subtitle1">
                  Placeholder
                </Typography>
                <Typography>This is a placeholder slide</Typography>
              </Box>
            </Box>

            <Box>
              <Button variant="outlined">BUTTON TEXT</Button>
            </Box>
          </Box>
          <Box
            component={Paper}
            sx={{
              border: "1px solid white",
              borderRadius: "1rem",
              p: 4,
              width: "100%",
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
                  PLACEHOLDER
                </Typography>
              </Box>

              <Box marginY={2}>
                <Typography marginY={1} variant="subtitle1">
                  Placeholder
                </Typography>
                <Typography>This is a placeholder slide</Typography>
              </Box>
            </Box>

            <Box>
              <Button variant="outlined">BUTTON TEXT</Button>
            </Box>
          </Box>
          <Box
            component={Paper}
            sx={{
              border: "1px solid white",
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
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography
                  sx={{
                    bgcolor: "white",
                    color: "#000",
                    px: 1,
                    borderRadius: "0.2rem",
                  }}
                >
                  PLACEHOLDER
                </Typography>
              </Box>

              <Box
                marginY={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end ",
                }}
              >
                <Typography marginY={1} variant="subtitle1">
                  Placeholder
                </Typography>
                <Typography>This is a placeholder slide</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end ",
              }}
            >
              <Button variant="outlined">BUTTON TEXT</Button>
            </Box>
          </Box>
        </Box>
      </FormControl> */}
    </>
  );
};

export default SliderContent;
