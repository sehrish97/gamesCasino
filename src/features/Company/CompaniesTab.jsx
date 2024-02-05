import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper, Tab, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useGetAllCompaniesQuery } from "../../redux/api/company/companyApiSlice";
import BrandChips from "../Brand/BrandChips";
import { data } from "autoprefixer";

const CompaniesTab = () => {
  const theme = useTheme();
  //API
  const { data: companies } = useGetAllCompaniesQuery();

  const [value, setValue] = useState(companies && companies.length > 0 ? companies[0]._id : "companies");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ width: "100%", maxWidth: 1536 }}>
          <Paper
            sx={{
              boxShadow: theme.customShadows.z1,
              borderRadius: theme.mixins.borderRadius,
              paddingX: 2,
            }}
          >
            <TabList variant="scrollable" onChange={handleChange}>
              {companies && companies.map((data) => <Tab key={data._id} label={data.title} value={data._id} />)}
              {!companies && <Tab label="companies" value="companies" />}
            </TabList>
          </Paper>
        </Box>
        {companies &&
          companies.map((data) => (
            <TabPanel value={data._id}>
              <BrandChips companyId={data._id} />
            </TabPanel>
          ))}
        {!companies && (
          <TabPanel value="companies">
            <BrandChips />
          </TabPanel>
        )}
      </TabContext>
    </>
  );
};

export default CompaniesTab;
