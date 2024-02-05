import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import CreateOrderForm from "../../features/CreateOrderForm/CreateOrderForm";

const CreateOrder = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h5">Create a new order</Typography>
      <Box sx={{ p: 4 }}>
       
          <CreateOrderForm />
      </Box>
    </>
  );
};

export default CreateOrder;