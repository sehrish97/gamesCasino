// material-ui
import { Drawer, styled } from "@mui/material";

// project import
import { drawerWidth } from "../../../config";

const openedMixin = (theme) => ({
  width: drawerWidth,
  maxHeight: "100vh",
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  overflowY: "hidden", // Add overflowY property for vertical scroll bar
  padding: "0 7px", // Adjust padding to account for scrollbar width
  ":hover": {
    overflowY: "auto",
    paddingRight: "0", // Remove right padding on hover to prevent shifting
  },
  boxShadow: "none",
  "&::-webkit-scrollbar": {
    width: "7px", // Set the width of the scrollbar
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(25, 118, 210, 0.2)", // Set the color of the scrollbar thumb
    borderRadius: "3.5px", // Set half of the width to get a rounded shape
  },
  "&::-webkit-scrollbar-track": {
    marginTop: "4.2rem", // Add 1px padding on top
    marginBottom: "1rem", // Add 1px padding on bottom
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  maxHeight: "95vh",
  width: "0",
  borderRight: "none",
  boxShadow: theme.customShadows.z1,
});

const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default MiniDrawerStyled;
