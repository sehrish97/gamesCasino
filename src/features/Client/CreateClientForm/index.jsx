import { Box, Paper, useTheme } from "@mui/material";
import React from "react";

const CreateClientForm = () => {
  const theme = useTheme();
  return (
    <Box>
      <Paper
        sx={{
          boxShadow: theme.customShadows.z2,
          borderRadius: "24px",
          p: 4,
          // maxWidth:1100
        }}
      ></Paper>
    </Box>
  );
};

export default CreateClientForm;
