import { Box, Tab, useMediaQuery, Typography } from "@mui/material";
import { useState } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import StoreIcon from "@mui/icons-material/Store";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CardComponent from "./Card";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const Themes = () => {
  const [value, setValue] = useState("marketplace"); // Set initial value to 'marketplace'
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  console.log(Boolean(isSmallScreen));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const cardData = [
    {
      title: "header",
      type: "hex",
      value: "#0e121b",
    },
    {
      title: "body",
      type: "hex",
      value: "#0e121b",
    },
    {
      title: "secondary",
      type: "hex",
      value: "#0e121b",
    },
    {
      title: "border",
      type: "hex",
      value: "#0e121b",
    },
    {
      title: "shadow",
      type: "rgba",
      value: "#0e121b",
    },
    {
      title: "block",
      type: "hex",
      value: "#0e121b",
    },
    {
      title: "table-color",
      type: "rgba",
      value: "#0e121b",
    },
    {
      title: "wallet",
      type: "hex",
      value: "#0e121b",
    },
    {
      title: "text",
      type: "rgba",
      value: "#0e121b",
    },
    {
      title: "textInverted",
      type: "rgba",
      value: "#0e121b",
    },
    {
      title: "sidebar",
      type: "hex",
      value: "#0e121b",
    },
    {
      title: "chat-accent",
      type: "hex",
      value: "#19202e",
    },
    {
      title: "link",
      type: "hex",
      value: "#97a1b5",
    },
    {
      title: "link-hover",
      type: "rgba",
      value: "white",
    },
    {
      title: "input",
      type: "hex",
      value: "#242e42",
    },
    {
      title: "footer",
      type: "rgba",
      value: "linear-gradient(to bottom, #121721, #19202e)",
    },
    {
      title: "switchBackground",
      type: "rgba",
      value: "rgb(255, 255, 255, .15)",
    },
    {
      title: "switchBackgroundDot",
      type: "rgba",
      value: "rgb(255, 255, 255, .15)",
    },
    {
      title: "switchBackgroundOn",
      type: "hex",
      value: "#4bcb27",
    },
    {
      title: "switchBackgroundDotOn",
      type: "rgba",
      value: "rgb(255, 255, 255, .4)",
    },
    {
      title: "selectorArrow",
      type: "input",
      value: `url("data:image/svg+xml;utf8,<svg fill='white' height='34' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
    },
  ];
  // const cardData2 = [
  //   {
  //     title: "Metamask Authentication",
  //     version: "3.0.0",
  //     description: "Adds one-click authentication using Metamask",
  //     author: "@ Phoenix Gambling, https://phoenix-gambling.com",
  //     image: "/public/assets/metamask.png",
  //   },
  //   {
  //     title: "Telegram Integration",
  //     version: "3.0.0",
  //     description: "Adds Telegram integration",
  //     author: "@ Phoenix Gambling, https://phoenix-gambling.com",
  //     image: "/public/assets/telegramicon.svg",
  //   },
  //   // Add data for other cards
  // ];

  return (
    <TabContext
      sx={{
        borderTop: "1px solid grey",
      }}
      value={value}
      onChange={handleChange}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          padding: "0px",
          height: "100%",
          borderTop: "1px solid #201f25",
        }}
      >
        <Box
          sx={{
            borderRight: "1px solid #201f25",
            paddingTop: "30px",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="icon position tabs example"
            orientation="vertical"
            sx={{
              minWidth: 300,
              height: isSmallScreen ? "auto" : "100%",
              ".css-tnih2g-MuiTabs-indicator": {
                width: "0px",
                backgroundColor: "transparent",
              },
              paddingTop: "25px",
            }}
          >
            <Tab label="Web" value="web" iconPosition="start" />
            {/* Assign value to tabs */}
            <Tab label="Dashboard" value="dashboard" iconPosition="start" />
            {/* Assign value to tabs */}
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
          <Typography
            sx={{
              fontSize: "3em",
              marginBottom: "25px",
            }}
          >
            Themes
          </Typography>
          <TabPanel
            value="web" // Change value to match tab value
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {cardData.map((card, index) => (
                <CardComponent key={index} data={card} />
              ))}
            </Box>
          </TabPanel>
          <TabPanel
            value="installed" // Change value to match tab value
          >
            {/* <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {cardData2.map((card, index) => (
                <CardComponent key={index} data={card} />
              ))}
            </Box> */}
          </TabPanel>
        </Box>
      </Box>
    </TabContext>
  );
};

export default Themes;
