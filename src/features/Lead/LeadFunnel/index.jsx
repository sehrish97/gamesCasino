import React from "react";
import LeadFunnelTable from "./Table";
import { Box, Paper } from "@mui/material";
import LeadFunnelTabs from "./Tabs";
import TableSearch from "./TableSearch";

const LeadFunnel = () => {
  return (
    <>
      <Box component={Paper} sx={{ borderRadius: "1rem", minHeight: "85vh", p: 3, display:"flex", flexDirection: "column", gap:"2rem" }}>
        <LeadFunnelTabs />
        <TableSearch />
        <LeadFunnelTable />
      </Box>
    </>
  );
};

export default LeadFunnel;
