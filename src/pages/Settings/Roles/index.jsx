

import { Box, Tab, useMediaQuery, Typography, Button } from "@mui/material";
import { useState } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import StoreIcon from '@mui/icons-material/Store';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExampleRole from "./ExampleRole";
import Moderator from "./Moderator";
import Administrator from "./Administrator";
const Roles = () => {
  const [value, setValue] = useState("marketplace");
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const cardData = [
    {
      title: "Metamask Authentication",
      version: "3.0.0",
      description: "Adds one-click authentication using Metamask",
      author: "@ Phoenix Gambling, https://phoenix-gambling.com",
      image: '/public/assets/metamask.png',
      buttons: [
        { label: 'Uninstall', backgroundColor: 'grey', icon: <FileDownloadOutlinedIcon fontSize="small" /> },
      ]
    },
    {
      title: "Support Chat",
      version: "3.0.0",
      description: "Manage tickets directly on your website",
      author: "@ Phoenix Gambling, https://phoenix-gambling.com",
      image: '/public/assets/chaticon.png',
      buttons: [
        { label: 'Install', backgroundColor: 'blue', icon: <FileDownloadOutlinedIcon fontSize="small" /> },
      ]
    },
    {
      title: "Telegram Integration",
      version: "3.0.0",
      description: "Adds Telegram integration",
      author: "@ Phoenix Gambling, https://phoenix-gambling.com",
      image: '/public/assets/telegramicon.svg',
      buttons: [
        { label: 'Configuration', backgroundColor: 'blue', icon: <SettingsOutlinedIcon fontSize="small" /> },
        { label: 'Uninstall', backgroundColor: 'grey', icon: <FileDownloadOutlinedIcon fontSize="small" /> } // Additional button
      ]
    },
    // Add data for other cards
  ];
  const cardData2 = [
    {
      title: "Metamask Authentication",
      version: "3.0.0",
      description: "Adds one-click authentication using Metamask",
      author: "@ Phoenix Gambling, https://phoenix-gambling.com",
      image: '/public/assets/metamask.png',

    },
    {
      title: "Telegram Integration",
      version: "3.0.0",
      description: "Adds Telegram integration",
      author: "@ Phoenix Gambling, https://phoenix-gambling.com",
      image: '/public/assets/telegramicon.svg',

    },
    // Add data for other cards
  ];

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
