import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper, Tab, useTheme } from "@mui/material";
import React, { useState } from "react";
import DepartmentChips from "./DepartmentChips";
import { useGetAllCompaniesQuery } from "../../../../../redux/api/company/companyApiSlice";

const ExistingDepartment = () => {

  const theme = useTheme();
  //API
  const { data: companies } = useGetAllCompaniesQuery();

  const [value, setValue] = useState(companies && companies.length > 0 ? companies[0]._id : "companies");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext key={value} value={value}>
        <Box sx={{ width: "100%", maxWidth: 1536,   boxShadow: theme.customShadows.z1, borderRadius: theme.mixins.borderRadius, paddingX: 2 }} >
          <TabList variant="scrollable" onChange={handleChange}>
            {companies && companies.map((data) => <Tab key={data._id} label={data.title} value={data._id} />)}
            {!companies && <Tab label="companies" value="companies" />}
          </TabList>
        </Box>
        {companies &&
          companies.map((data) => (
            <TabPanel key={data._id} value={data._id}>
              <DepartmentChips companyId={data._id} />
            </TabPanel>
          ))}
        {!companies && (
          <TabPanel key="companies" value="companies">
            <DepartmentChips />
          </TabPanel>
        )}
      </TabContext>
    </>
  );
};

export default ExistingDepartment;
