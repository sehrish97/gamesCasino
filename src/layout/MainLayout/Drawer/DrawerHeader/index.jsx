import React from "react";

// material-ui
import { Box, Stack, Typography, useTheme } from "@mui/material";
import DrawerHeaderStyled from "./DrawerHeaderStyled";

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box sx={{ display: "flex", alignItems: "center", alignContent: "center", p: 4, }}>
          <Typography variant="h3">Logo</Typography>
        </Box>
      </Stack>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
