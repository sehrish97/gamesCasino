import { Box, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import imgUrl from "../../../../../assets/logo.png";
import EditIcon from "@mui/icons-material/Edit";
import { useGetAllRolesQuery } from "../../../../../redux/api/role/roleApiSlice";
// import AddCompany from "../AddCompany";

const ExistingRoleAndPermission = () => {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");

  const handleOpen = (company) => {
    setOpen(true);
    setCompany(company);
  };

  const handleClose = () => setOpen(false);

  const theme = useTheme();

  // API
  const { data: roles, isSuccess } = useGetAllRolesQuery();

  let RoleAndPermissionChip;
  if (isSuccess) {
    if (roles.length > 0) {
      RoleAndPermissionChip = (
        <>
          <Box sx={{display:"flex" , gap:2}}>
            {roles.map((data) => (
              <Box
                key={data._id}
                sx={{ width: "100%", maxWidth:"260px", minHeight: 60, border:"1px solid #8DCFED", borderRadius:"1.5rem", backgroundColor:"#8DCFED",p: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}
              >
              
                <Typography variant="h6">{data.title}</Typography>
                <IconButton onClick={() => handleOpen(data)}>
                  <EditIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
        </>
      );
    }
  }
  let DummyChip = (
    <>
      <Grid item lg={2}>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, p: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <img
              src="https://source.unsplash.com/random?logos"
              alt="logo"
              width={50}
              height={20}
              className="h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 border border-gray-200"
            />
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
      {RoleAndPermissionChip ? RoleAndPermissionChip : DummyChip}
      {/* <AddCompany open={open} onClose={handleClose} company={company} /> */}
    </>
  );
};

export default ExistingRoleAndPermission;
