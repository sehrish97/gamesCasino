import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Grid, Paper, Tab, TabScrollButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

import CompanySetting from "./CompanySetting";
import CompanyChips from "../../features/Company/CompanyChips";

import BrandSetting from "./BrandSetting";
import BrandChips from "../../features/Brand/BrandChips";
import CompaniesTab from "../../features/Company/CompaniesTab";

import ClientCategorySetting from "./ClientCategorySetting";
import LeadSource from "./LeadSource";
import LeadSourceChips from "../../features/Lead/LeadSourceSetting/LeadSourceSettingChips";
import Services from "./Services";
import ServicesSettingChips from "../../features/Services/ServicesSetting/ServicesSettingChips";
import LeadStatusSettingChips from "../../features/Lead/LeadStatusSetting/LeadStatusSettingChips";

const Setting = () => {
  const theme = useTheme();

  const [value, setValue] = useState("Companies");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* row 1 */}
        <Typography variant="h5">Setting</Typography>
        <Grid item>
          <Box sx={{ width: "100%", maxWidth: 1536 }}>
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                borderRadius: theme.mixins.borderRadius,
              }}
            >
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                  }}
                >
                  <TabList variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Companies" value="Companies" />
                    <Tab label="Brands" value="Brands" />
                    <Tab label="Services" value="Services" />
                    <Tab label="Lead Source" value="Lead Source" />
                    <Tab label="Lead Status" value="Lead Status" />
                    <Tab label="Lead Stages" value="Lead Stages" />
                    <Tab label="Client Categories" value="Client Categories" />
                    <Tab label="Status" value="Status" />
                    <Tab label="Health" value="Health" />
                    <Tab label="Order Type" value="Order Type" />
                    <Tab label="Stages" value="Stages" />
                    <Tab label="Payment Types" value="Payment Types" />
                    <Tab label="Payment Gateways" value="Payment Gateways" />
                    <Tab label="Department" value="Department" />
                    <Tab label="Roles And Permissions" value="Roles And Permissions" />
                    <Tab label="Users" value="Users" />
                    <Tab label="Uploads" value="Uploads" />
                  </TabList>
                </Box>
                <TabPanel value="Companies">
                  <CompanySetting />
                </TabPanel>
                <TabPanel value="Brands">
                  <BrandSetting />
                </TabPanel>
                <TabPanel value="Services">
                  <Services/>
                </TabPanel>
                <TabPanel value="Lead Source">
                  <LeadSource/>
                </TabPanel>
                <TabPanel value="Lead Status">LEAD STATUS</TabPanel>
                <TabPanel value="Lead Stages">LEAD STAGES</TabPanel>
                <TabPanel value="Client Categories">
                  <ClientCategorySetting />
                </TabPanel>
                <TabPanel value="Status">STATUS</TabPanel>
                <TabPanel value="Health">HEALTH</TabPanel>
                <TabPanel value="Order Type">ORDER TYPE</TabPanel>
                <TabPanel value="Stages">STAGES</TabPanel>
                <TabPanel value="Payment Types">PAYMENT TYPES</TabPanel>
                <TabPanel value="Payment Gateways">PAYMENT GATEWAYS</TabPanel>
                <TabPanel value="Department">DEPARTMENT</TabPanel>
                <TabPanel value="Roles And Permissions">ROLE AND PERMISSIONS</TabPanel>
                <TabPanel value="Users">USERS</TabPanel>
                <TabPanel value="Uploads">UPLOADS</TabPanel>
              </TabContext>
            </Paper>
          </Box>
        </Grid>

        {/* row 2 */}
        <Typography variant="h5">{value}</Typography>
        {value === "Brands" && <CompaniesTab />}

        <Grid container rowSpacing={2} columnSpacing={2.75}>
          {value === "Companies" && <CompanyChips />}
          {value === "Lead Source" && <LeadSourceChips />}
          {value === "Services" && <ServicesSettingChips />}
          {value === "Lead Status" && <LeadStatusSettingChips />}
          {/* {value === "Brands" && <BrandChips />} */}
        </Grid>
      </Box>
    </>
  );
};

export default Setting;
