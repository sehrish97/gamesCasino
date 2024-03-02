import {
  Box,
  Typography,
  IconButton,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedIcon from '@mui/icons-material/Speed';
import ArchiveIcon from '@mui/icons-material/Archive';
import Dashboard from "./Dashboard";
import LogsData from "./LogsData";

const Logs = () => {
  const pages = ["Dashboard", "Logs"];
  const [value, setValue] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box
      sx={{
        padding: "40px 10px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          fontSize: "3em",
          marginBottom: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        Logs
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <IconButton
          size="large"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
        <TabContext value={value} onChange={handleChange}>
        {menuOpen==true? (// Conditionally render TabList based on menuOpen state
          <TabList
            orientation="vertical"
            sx={{
              minWidth: 300,
              minHeight: 100,
              ".css-1h1swpg-MuiTabs-indicator": {
                width: "0px",
                backgroundColor: "transparent",
              },
              '.css-tnih2g-MuiTabs-indicator': {
                width: '0px !important',
                backgroundColor: "transparent",
              },
              '.css-pe9fv7-MuiButtonBase-root-MuiTab-root':{
                alignItems: "flex-start !important",
              justifyContent: "flex-start !important",
              },
              position: "sticky",
              top: 0,
              zIndex: 1,
              display:{md:"none"},
              
            }}
            onChange={handleChange}
            aria-label="tabs"
          >
            {pages.map((page) => (
              <Tab
                key={page}
                label={page}
                value={page}
                sx={{ color: "#6785FF !important", ':focus': { color: "#6785FF" }, 
              alignItems:"flex-start !important" }}
                icon={page === "Dashboard" ? <SpeedIcon /> : <ArchiveIcon />}
                iconPosition="start"
              />
            ))}
          </TabList>
          ):(
            <TabList
            orientation='horizontal'
            sx={{
              minWidth: 300,
              minHeight: 30,
              ".css-1h1swpg-MuiTabs-indicator": {
                width: "0px",
                backgroundColor: "transparent",
              },
              '.css-tnih2g-MuiTabs-indicator': {
                width: '0px !important',
                backgroundColor: "transparent",
              },
              position: "sticky",
              top: 0,
              zIndex: 1,
              display: {xs:"none",md:"block"}
            }}
            onChange={handleChange}
            aria-label="tabs"
          >
            {pages.map((page) => (
              <Tab
                key={page}
                label={page}
                value={page}
                sx={{ color: "#6785FF !important", ':focus': { color: "#6785FF" }, 
              alignItems:"flex-start !important" }}
                icon={page === "Dashboard" ? <SpeedIcon /> : <ArchiveIcon />}
                iconPosition="start"
              />
            ))}
          </TabList>
          )}
          {pages.map((tab, index) => (
            <TabPanel key={index} value={tab}>
              <Box sx={{ padding: "10px", maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
                <Typography sx={{ fontSize: "3em", color: "#6785FF" }}>
                  {tab}
                </Typography>
                {tab === "Dashboard" ? (
                  <Dashboard data={tab} />
                ) : tab === "Logs" ? (
                  <LogsData />
                ) : null}
              </Box>
            </TabPanel>
          ))}
        </TabContext>
    </Box>
  );
};

export default Logs;
