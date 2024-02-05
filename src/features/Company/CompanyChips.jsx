import { Box, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import imgUrl from "../../assets/logo.png";
import EditIcon from "@mui/icons-material/Edit";
import { useGetAllCompaniesQuery } from "../../redux/api/company/companyApiSlice";
import CompanyModal from "./CompanyModal";

const CompanyChips = () => {

  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");
  
  const handleOpen = (company) => {
    setOpen(true)
    setCompany(company)
  }
  
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  // API
  const { data: companies, isSuccess } = useGetAllCompaniesQuery();

  let CompaniesChip;
  if (isSuccess) {
    if (companies.length > 0) {
      CompaniesChip = (
        <>
          {companies.map((data) => (
            <Grid item lg={2} key={data._id}>
              <Box sx={{ width: "100%" }}>
                <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, p: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                  <img src={`http://localhost:8000/${data.imgUrl}`} alt="logo" width={50} height={20} className="h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 border border-gray-200" />
                  <Typography variant="h6">{data.title}</Typography>
                  <IconButton onClick={()=>handleOpen(data)} >
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
      <Grid item lg={2} >
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, p: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <img src="https://source.unsplash.com/random?logos" alt="logo" width={50} height={20} className="h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 border border-gray-200" />
            <Typography variant="h6">Dummy Company</Typography>
            <IconButton onClick={()=>handleOpen()}>
              <EditIcon />
            </IconButton>
          </Paper>
        </Box>
      </Grid>
    </>
  );

  return (
  <>

  {CompaniesChip ? CompaniesChip : DummyChip}
  <CompanyModal open={open} onClose={handleClose} company={company} />
  
  </>);
};

export default CompanyChips;
