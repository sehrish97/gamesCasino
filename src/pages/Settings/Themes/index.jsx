import { Popover, Box, Tab, useMediaQuery, Typography, Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import ColorSelector from "./Card/ColorSelector";

import EditIcon from '@mui/icons-material/Edit';

const Themes = () => {

  const [webData, setWebData] = useState([
    {
      id: 1,
      title: "header",
      type: "hex",
      value: "#0e121b",
    },
    {
      id: 2,
      title: "body",
      type: "hex",
      value: "#0e121b",
    },
    {
      id: 3,
      title: "secondary",
      type: "hex",
      value: "#0e121b",
    },
    {
      id: 4,
      title: "border",
      type: "hex",
      value: "#0e121b",
    },
    {
      id: 5,
      title: "shadow",
      type: "rgba",
      value: "#0e121b",
    },
    {
      id: 6,
      title: "block",
      type: "hex",
      value: "#0e121b",
    },
    {
      id: 7,
      title: "table-color",
      type: "rgba",
      value: "#0e121b",
    },
    {
      id: 8,
      title: "wallet",
      type: "hex",
      value: "#0e121b",
    },
    {
      id: 9,
      title: "text",
      type: "rgba",
      value: "#0e121b",
    },
    {
      id: 10,
      title: "textInverted",
      type: "rgba",
      value: "#0e121b",
    },
    {
      id: 11,
      title: "sidebar",
      type: "hex",
      value: "#0e121b",
    },
    {
      id: 12,
      title: "chat-accent",
      type: "hex",
      value: "#19202e",
    },
    {
      id: 13,
      title: "link",
      type: "hex",
      value: "#97a1b5",
    },
    {
      id: 14,
      title: "link-hover",
      type: "rgba",
      value: "white",
    },
    {
      id: 15,
      title: "input",
      type: "hex",
      value: "#242e42",
    },
    {
      id: 16,
      title: "footer",
      type: "rgba",
      value: "linear-gradient(to bottom, #121721, #19202e)",
    },
    {
      id: 17,
      title: "switchBackground",
      type: "rgba",
      value: "rgb(255, 255, 255, .15)",
    },
    {
      id: 18,
      title: "switchBackgroundDot",
      type: "rgba",
      value: "rgb(255, 255, 255, .15)",
    },
    {
      id: 19,
      title: "switchBackgroundOn",
      type: "hex",
      value: "#4bcb27",
    },
    {
      id: 20,
      title: "switchBackgroundDotOn",
      type: "rgba",
      value: "rgb(255, 255, 255, .4)",
    },
    {
      id: 21,
      title: "selectorArrow",
      type: "input",
      value: `url("data:image/svg+xml;utf8,<svg fill='white' height='34' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
    },
  ])


  const [value, setValue] = useState("marketplace"); // Set initial value to 'marketplace'
  const [editIndex, setEditIndex] = useState(null); // State to track the index being edited
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const updateInputValue = (dataId, value) => {
    const updatedWebData = webData.map(data => {
      if (data.id === dataId) {
        return { ...data, value: value };
      }
      return data;
    });
    setWebData(updatedWebData);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverDataId, setPopoverDataId] = useState(null);

  const handlePopoverOpen = (event, dataId) => {
    setAnchorEl(event.currentTarget);
    setPopoverDataId(dataId);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

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
            <Box width={200}>
              {webData
                .map((data, index) => (
                  <Box key={index} >
                    <Typography >{data.title}</Typography>
                    {data.type === "rgba" && (
                      <>
                        <Box sx={{ display: "flex", gap: 1, my: 1, alignItems: "center", justifyContent: "space-between", borderRadius: "0.5rem", }}>
                          <TextField placeholder={data.value} value={data.value} onChange={(e) => updateInputValue(data.id, e.target.value)} />
                          <Box sx={{ backgroundColor: `${data.value}`, borderRadius: "50%" }} width={40} height={30}></Box>
                        </Box>
                      </>
                    )}
                    <Box sx={{ display: "flex", my: 1, alignItems: "center", justifyContent: "space-between", borderRadius: "0.5rem", paddingX: 1, backgroundColor: `${data.value}` }} >

                      {data.type === "hex" && (
                        <>
                          <Typography>{data.value}</Typography>
                          <IconButton onClick={(event) => handlePopoverOpen(event, data.id)}>
                            <EditIcon sx={{ color: "white" }} />
                          </IconButton>
                        </>
                      )}

                    </Box>

                    <Popover
                      open={Boolean(anchorEl && popoverDataId === data.id)}
                      anchorEl={anchorEl}
                      onClose={handlePopoverClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <Box sx={{ padding: 2 }}>
                        <ColorSelector data={data} updateInputValue={updateInputValue} />
                      </Box>
                    </Popover>
                  </Box>
                ))}
            </Box>
          </TabPanel>

        </Box>
      </Box>
    </TabContext>
  );
};

export default Themes;
