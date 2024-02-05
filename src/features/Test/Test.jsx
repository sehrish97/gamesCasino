import { FormControl, FormHelperText, Grid, Input, InputLabel, Stack, Typography } from "@mui/material";

import React from "react";

const Test = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid>
        <Typography variant="h3">hello</Typography>
        <Stack>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
        </Stack>
        {/* <Box>
          <FormControl>
            <InputLabel htmlFor="email-login">Email</InputLabel>
          </FormControl>
        </Box> */}
      </Grid>
    </Grid>
  );
};

export default Test;
