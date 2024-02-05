import React from "react";
import { useMemo } from "react";

//material-ui
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, useMediaQuery } from "@mui/material";

import DrawerContent from "./DrawerContent";
import DrawerHeader from "./DrawerHeader";
import { drawerWidth } from "../../../config";
import MiniDrawerStyled from "./MiniDrawerStyled";

const MainDrawer = ({ open, handleDrawerToggle, window }) => {
  const theme = useTheme();

  // If the screen size is below the 'lg' breakpoint, matchDownMD will be true;
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined;
  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <>
      <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
        {!matchDownMD && (
          <MiniDrawerStyled variant="permanent" open={open}
          >
            {drawerHeader}
            {drawerContent}
          </MiniDrawerStyled>
        )}
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              borderRight: `1px solid ${theme.palette.divider}`,
              width: drawerWidth,
              backgroundImage: "none",
              boxShadow: "inherit",
            },
          }}
        >
          {open && drawerHeader}
          {open && drawerContent}
        </Drawer>
      </Box>
    </>
  );
};

export default MainDrawer;
