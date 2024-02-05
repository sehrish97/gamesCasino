import { Box, Chip, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
// import CompanyModal from "./CompanyModal";

//Redux
import { useGetAllServicesQuery } from "../../../redux/api/services/servicesApiSlice";

const ServicesSettingChips = () => {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");

  const handleOpen = (company) => {
    setOpen(true);
    setCompany(company);
  };

  const handleClose = () => setOpen(false);

  const theme = useTheme();

  // API
  const { data: services, isSuccess } = useGetAllServicesQuery();
  //   const { data: companies, isSuccess } = useGetAllCompaniesQuery();

  let ServicesChip;
  if (isSuccess) {
    if (services.length > 0) {
      ServicesChip = (
        <>
          {services.map((data) => (
            <Grid item lg={2} key={data._id}>
              <Box sx={{ width: "100%" }}>
                <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, py: 1,px:3, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                  
                  {data.isActive && <Chip  label="Active" color="primary" size="small"/>}
                  {!data.isActive && <Chip label="In Active" color="warning" size="small" />}
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
            <img src="https://source.unsplash.com/random?logos" alt="logo" width={50} height={20} className="h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 border border-gray-200" />
            <Typography variant="h6">Dummy Company</Typography>
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
      {ServicesChip ? ServicesChip : DummyChip}
      {/* <CompanyModal open={open} onClose={handleClose} company={company} /> */}
    </>
  );
};

export default ServicesSettingChips;
