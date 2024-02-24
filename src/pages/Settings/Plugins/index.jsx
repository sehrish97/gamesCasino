

import { Box, Tab, useMediaQuery , Typography} from "@mui/material";
import { useState } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import StoreIcon from '@mui/icons-material/Store';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CardComponent from "./Card";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Plugins = () => {
  const [value, setValue] = useState("marketplace"); // Set initial value to 'marketplace'
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  console.log(Boolean(isSmallScreen));
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
        { label: 'Uninstall', backgroundColor: 'grey', icon:<FileDownloadOutlinedIcon fontSize="small"/> },
      ]
    },
    {
      title: "Support Chat",
      version: "3.0.0",
      description: "Manage tickets directly on your website",
      author: "@ Phoenix Gambling, https://phoenix-gambling.com",
      image: '/public/assets/chaticon.png',
      buttons: [
        { label: 'Install', backgroundColor: 'blue' , icon:<FileDownloadOutlinedIcon fontSize="small"/>},
      ]
    },
    {
      title: "Telegram Integration",
      version: "3.0.0",
      description: "Adds Telegram integration",
      author: "@ Phoenix Gambling, https://phoenix-gambling.com",
      image: '/public/assets/telegramicon.svg',
      buttons: [
        { label: 'Configuration', backgroundColor: 'blue', icon:<SettingsOutlinedIcon fontSize="small" /> } ,
        { label: 'Uninstall', backgroundColor: 'grey', icon:<FileDownloadOutlinedIcon fontSize="small" />} // Additional button
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
      borderTop:"1px solid grey"
    }} value={value} onChange={handleChange}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          padding: "0px",
          height: "100%",
          borderTop:"1px solid #201f25"
        }}
      >
        <Box sx={{
          borderRight:"1px solid #201f25",
          paddingTop:"30px"

        }}>
          <TabList
            onChange={handleChange}
            aria-label="icon position tabs example"
            orientation="vertical"
            sx={{ minWidth: 300, height: isSmallScreen ? "auto" : '100%',
            '.css-tnih2g-MuiTabs-indicator':{
              width:'0px',
              backgroundColor:"transparent"
            },
            paddingTop:"25px"
          }}
          > 
            <Tab label="Marketplace" value="marketplace" icon={<StoreIcon />}
            iconPosition="start" /> {/* Assign value to tabs */}
            <Tab label="Installed" value="installed" icon={<FileDownloadOutlinedIcon />}
            iconPosition="start"/>{" "}
            {/* Assign value to tabs */}
          </TabList>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Adjust alignment as needed
            height: "100%",
            width:"auto",
            padding:"20px 30px"
          }}
        >
          <Typography sx={{
            fontSize: '3em',
            marginBottom: '25px',
            
          }}>Plugins</Typography>                                                                                                                                     
          <TabPanel
            value="marketplace" // Change value to match tab value
          >
            <Box sx={{
              display:"flex",
              flexWrap:"wrap"
            }}>
              
                {cardData.map((card,index)=>(
                 <CardComponent key={index} data={card} /> 
                ))}
                </Box>
           
          </TabPanel>
          <TabPanel
            value="installed" // Change value to match tab value
          >
             <Box sx={{
              display:"flex",
              flexWrap:"wrap"
            }}>
              
                {cardData2.map((card,index)=>(
                 <CardComponent key={index} data={card} /> 
                ))}
                </Box>
          </TabPanel>
        </Box>
      </Box>
    </TabContext>
  );
};

export default Plugins;
