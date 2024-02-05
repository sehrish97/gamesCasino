import React, { useState } from "react";
import LeadFunnelTabList from "../../../../_api/lead-funnel-tabs";
import { Box, Paper, Tab, useTheme } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const LeadFunnelTabs = () => {
  const theme = useTheme();
  const [tab, setTab] = useState("New Leads");
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <TabContext value={tab}>
        <TabList
          variant="standard"
          onChange={handleTabChange}
          sx={{
              borderBottom:"1px solid #BDBDBD"
            // width: 570,
            // borderRadius: "1.25rem",
            // minHeight: "20px", // it control the height of the tab ###AB
          }}
        >
          {LeadFunnelTabList.map((list) => (
            <Tab
              sx={{
                // fontSize: "11px",
                // padding: "0px",
                // minHeight: "20px", // it control the height of the tab ###AB
              }}
              key={list._id}
              label={list.title}
              value={list.title}
            />
          ))}
        </TabList>
      </TabContext>
    </>
  );
};

export default LeadFunnelTabs;
