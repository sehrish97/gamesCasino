import { Box, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
// import CompanyModal from "./CompanyModal";

//Redux
import { useGetAllLeadSourceQuery } from "../../../redux/api/lead/leadSourceApiSlice";

const LeadSourceChips = () => {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");

  const handleOpen = (company) => {
    setOpen(true);
    setCompany(company);
  };

  const handleClose = () => setOpen(false);

  const theme = useTheme();

  // API
  const { data: leadSource, isSuccess } = useGetAllLeadSourceQuery();

  let LeadSourceChip;
  if (isSuccess) {
    if (leadSource.length > 0) {
      LeadSourceChip = (
        <>
          {leadSource.map((data) => (
            <Grid item lg={2} key={data._id}>
              <Box sx={{ width: "100%" }}>
                <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, py: 1,px:3, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                  <Typography variant="h6">{data.title}</Typography>
                  <IconButton onClick={() => handleOpen(data)}>
                    <EditIcon />
                  </IconButton>
                </Paper>
              </Box>
            </Grid>
          ))}
        </>
      );
    }
  }
  let DummyChip = (
    <>
      <Grid item lg={2}>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, p: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <Typography variant="h6">Dummy Lead Source</Typography>
            <IconButton onClick={() => handleOpen()}>
              <EditIcon />
            </IconButton>
          </Paper>
        </Box>
      </Grid>
    </>
  );

  return (
    <>
      {LeadSourceChip ? LeadSourceChip : DummyChip}
      {/* <CompanyModal open={open} onClose={handleClose} company={company} /> */}
    </>
  );
};

export default LeadSourceChips;
