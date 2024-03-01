import { Box, Tab, useMediaQuery, Typography, Button } from "@mui/material";
import { useState } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import fileStructure from "./fileStructure.json";
import File from "./File";

const FileManager = () => {
  const data = fileStructure.files;
  const [value, setValue] = useState("exampleDir");
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <Tab
              sx={{ alignItems: "baseline" }}
              label="exampleDir"
              value="exampleDir"
            >
              exampleDir
            </Tab>
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
          <TabPanel
            value="exampleDir" // Change value to match tab value
          >
            <File previousFolder="" item={data} />
          </TabPanel>
        </Box>
      </Box>
    </TabContext>
  );
};

export default FileManager;
