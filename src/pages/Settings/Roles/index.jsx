

import { Box, Tab, useMediaQuery, Typography, Button } from "@mui/material";
import { useState } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import ExampleRole from "./ExampleRole";
import Moderator from "./Moderator";
import Administrator from "./Administrator";
const Roles = () => {
  const [value, setValue] = useState("marketplace");
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
    <TabContext sx={{
      borderTop: "1px solid grey"
    }} value={value} onChange={handleChange}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          padding: "0px",
          height: "100%",
          borderTop: "1px solid #201f25"
        }}
      >
        <Box sx={{
          borderRight: "1px solid #201f25",
          paddingTop: "30px",


        }}>
          <TabList
            onChange={handleChange}
            aria-label="icon position tabs example"
            orientation="vertical"
            sx={{
              minWidth: 300, height: isSmallScreen ? "auto" : '100%',
              '.css-tnih2g-MuiTabs-indicator': {
                width: '0px',
                backgroundColor: "transparent"
              },
              paddingTop: "25px",
            }}
          >
            <Box>
              <Button sx={{borderRadius:"2rem"}} variant="outlined">Create</Button>
            </Box>
            <Tab sx={{ alignItems: "baseline" }} label="Administrator" value="Administrator">Admin</Tab>
            <Tab sx={{ alignItems: "baseline" }} label="Moderator" value="Moderator" />
            <Tab sx={{ alignItems: "baseline" }} label="Example Role One" value="Example Role One" />
            <Tab sx={{ alignItems: "baseline" }} label="Example Role Two" value="Example Role Two" />
          </TabList>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Adjust alignment as needed
            height: "100%",
            width: "auto",
            padding: "20px 30px",

          }}
        >
          <Typography sx={{
            fontSize: '3em',
            marginBottom: '25px',
            ml: 3

          }}>Roles</Typography>

          <TabPanel
            value="Administrator" // Change value to match tab value
          >
            <Administrator />
          </TabPanel>

          <TabPanel
            value="Moderator"
          >
            <Moderator />

          </TabPanel>
          <TabPanel
            value="Example Role One" // Change value to match tab value
          >

            <ExampleRole />

          </TabPanel>

          <TabPanel
            value="Example Role Two" // Change value to match tab value
          >
            <Box sx={{
              display: "flex",
              flexWrap: "wrap"
            }}>

              <ExampleRole />
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </TabContext>
  );
};

export default Roles;
