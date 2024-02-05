import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CreateLeadForm from "../../features/Lead/CreateLeadForm";

const CreateLead = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ p: 4 }}>
        <Typography  variant="h5" sx={{my:2}}>Create a New Lead</Typography>
        <CreateLeadForm />
      </Box>
    </>
  );
};

export default CreateLead;
