import { Box, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import imgUrl from "../../../../../assets/logo.png";
import EditIcon from "@mui/icons-material/Edit";
import AddDepartment from "../AddDepartment";
import { useGetAllDepartmentsQuery } from "../../../../../redux/api/department/departmentApiSlice";

const DepartmentChips = ({ companyId }) => {
  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState("");

  const handleOpen = (department) => {
    setOpen(true);
    setDepartment(department);
  };

  const handleClose = () => setOpen(false);

  const theme = useTheme();

  // API
  const { data: departments, isSuccess } = useGetAllDepartmentsQuery();
  console.log(departments)
  let DepartmentsChip;
  if (isSuccess && departments.length > 0) {
    DepartmentsChip = (
      <>
        <Box sx={{ display: "flex", gap: 2 }}>
          {departments
            .filter((department) => department?.company?._id === companyId)
            .map((department) => (
              <Box
                key={department._id}
                sx={{
                  width: "100%",
                  maxWidth: "260px",
                  minHeight: 60,
                  border: "1px solid #8DCFED",
                  borderRadius: "1.5rem",
                  backgroundColor: "#8DCFED",
                  p: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography variant="h6">{department.title}</Typography>
                <IconButton onClick={() => handleOpen(department)}>
                  <EditIcon />
                </IconButton>
              </Box>
            ))}
        </Box>
      </>
    );
  }

  let DummyChip = (
    <>
      <Grid item lg={2}>
        <Box sx={{ width: "100%", maxWidth: 250 }}>
          <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, p: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <img
              src="https://source.unsplash.com/random?logos"
              alt="logo"
              width={50}
              height={20}
              className="h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 border border-gray-200"
            />
            <Typography variant="h6">Dummy Brand</Typography>
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
      {DepartmentsChip ? DepartmentsChip : DummyChip}
      <AddDepartment open={open} onClose={handleClose} department={department} />
    </>
  );
};

export default DepartmentChips;
