import React from 'react'
import {
    Box,
    Typography,
    IconButton,
    LinearProgress
  } from "@mui/material";
  import { styled } from '@mui/material/styles';
  import ViewListIcon from "@mui/icons-material/ViewList";
  import AdbIcon from '@mui/icons-material/Adb';
const CustomBox = ({ icon, data, progress, colour }) => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 3,
        borderRadius: 5,
      }));
  return (
    <Box
            sx={{
              padding: 0,
              minHeight: "70px",
              backgroundColor: colour,
              minWidth: "250px",
              boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
              borderRadius: "0.25rem",
            }}
          >
            <Box
              sx={{
                borderRadius: "2px 0 0 2px",
                display: "block",
                float: "left",
                height: "70px",
                width: "70px",
                textAlign: "center",
                fontSize: "40px",
                lineHeight: "70px",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              {icon}
            </Box>
            <Box sx={{ padding: "5px 10px", marginLeft: "70px" }}>
              <Box
                sx={{
                  display: "block",
                  color: "#FFF",
                  textShadow: " 0 1px 1px rgba(0, 0, 0, 0.3)",
                }}
              >
                {data}
                <Box
                  sx={{
                    height: "3px",
                    // background: "#fff",
                    margin: "5px -10px 5px -10px",
                  }}
                ><BorderLinearProgress variant="determinate" value={progress} /></Box>
                
              </Box>
            </Box>
          </Box>
  )
}

export default CustomBox