import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, FormControl, IconButton, Paper, Tab, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { styled } from "@mui/system";
import CompanySetting from "./Company";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BrandSetting from "./Brand";
import DepartmentSetting from "./Department";
import UserSetting from "./User";
import RoleAndPermissionSetting from "./RoleAndPermission";
const VerticalTabLabel = styled(Tab)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const SettingAdmin = () => {
  const [value, setValue] = useState("Companies");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <FormControl fullWidth component={Paper} sx={{ p: 3, borderRadius: "1.5rem" }}>
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box width="18rem">
            <TabList
              orientation="vertical"
              onChange={handleChange}
              sx={{
                marginRight: "20px",
                paddingRight: "20px",
                borderRight: "1px solid #BDBDBD",
              }}
            >
              <VerticalTabLabel label="Companies" value="Companies" />
              <VerticalTabLabel label="Brands" value="Brands" />
              <VerticalTabLabel label="Departments" value="Departments" />
              <VerticalTabLabel label="Roles And Permissions" value="Roles And Permissions" />
              <VerticalTabLabel label="Users" value="Users" />
              <VerticalTabLabel label="Services" value="Services" />
              <VerticalTabLabel label="Lead Source" value="Lead Source" />
              <VerticalTabLabel label="Lead Status" value="Lead Status" />
              <VerticalTabLabel label="Lead Stages" value="Lead Stages" />
              <VerticalTabLabel label="Client Categories" value="Client Categories" />
              <VerticalTabLabel label="Status" value="Status" />
              <VerticalTabLabel label="Health" value="Health" />
              <VerticalTabLabel label="Order Type" value="Order Type" />
              <VerticalTabLabel label="Stages" value="Stages" />
              <VerticalTabLabel label="Payment Types" value="Payment Types" />
              <VerticalTabLabel label="Payment Gateways" value="Payment Gateways" />
              <VerticalTabLabel label="Uploads" value="Uploads" />
            </TabList>
          </Box>

          <Box width="100%">
            <TabPanel value="Companies">
              <CompanySetting />
            </TabPanel>
            <TabPanel value="Brands">
              <BrandSetting />
            </TabPanel>
            <TabPanel value="Departments">
              <DepartmentSetting />
            </TabPanel>
            <TabPanel value="Roles And Permissions">
              <RoleAndPermissionSetting />
            </TabPanel>
            <TabPanel value="Users">
              <UserSetting />
            </TabPanel>
          </Box>
        </Box>
      </TabContext>
    </FormControl>
  );
};

export default SettingAdmin;
