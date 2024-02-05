import React, { useReducer } from "react";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Paper, Select, useTheme } from "@mui/material";

// Dummy Api
import paymentType from "../../_api/paymentType.json";

const CreateOrderForm = () => {
  const theme = useTheme();

  const initialState = {
    email: "",
    password: "",
    paymentType: "",
    brand: "",
  };

  const reducer = (state, action) => ({ ...state, ...action });

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Paper
        sx={{
          boxShadow: theme.customShadows.z2, // Increased shadow depth
          borderRadius: "12px", // More rounded corners
          p: 4, // Increased padding
          maxWidth:600
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Payment Type</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.paymentType} label="Payment Type" onChange={(e) => dispatch({ paymentType: e.target.value })} sx={{ borderRadius: "12px" }}>
                {paymentType.map((data) => {
                  <MenuItem key={data._id} value={data.title}>
                    {data.title}
                  </MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Select Brand</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.brand} label="Payment Type" onChange={(e) => dispatch({ brand: e.target.value })} sx={{ borderRadius: "12px" }}>
                <MenuItem value={10}>Credit Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Select Brand</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.brand} label="Payment Type" onChange={(e) => dispatch({ brand: e.target.value })} sx={{ borderRadius: "12px" }}>
                <MenuItem value={10}>Credit Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Select Brand</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.brand} label="Payment Type" onChange={(e) => dispatch({ brand: e.target.value })} sx={{ borderRadius: "12px" }}>
                <MenuItem value={10}>Credit Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Select Client Email</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.brand} label="Payment Type" onChange={(e) => dispatch({ brand: e.target.value })} sx={{ borderRadius: "12px" }}>
                <MenuItem value={10}>Credit Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Sales Person Email</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.brand} label="Payment Type" onChange={(e) => dispatch({ brand: e.target.value })} sx={{ borderRadius: "12px" }}>
                <MenuItem value={10}>Credit Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Order Amount</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.brand} label="Payment Type" onChange={(e) => dispatch({ brand: e.target.value })} sx={{ borderRadius: "12px" }}>
                <MenuItem value={10}>Credit Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Order Type</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.brand} label="Payment Type" onChange={(e) => dispatch({ brand: e.target.value })} sx={{ borderRadius: "12px" }}>
                <MenuItem value={10}>Credit Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="select-payment-type">Payment Gateway</InputLabel>
              <Select labelId="select-payment-type" id="demo-simple-select" value={state.brand} label="Payment Type" onChange={(e) => dispatch({ brand: e.target.value })} sx={{ borderRadius: "12px" }}>
                <MenuItem value={10}>Credit Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          {/* <Grid>
            <Button variant="contained">Add Order</Button>
          </Grid> */}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained">Add Order</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CreateOrderForm;
