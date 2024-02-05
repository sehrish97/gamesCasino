import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { Box, Breadcrumbs, Toolbar, useMediaQuery, useTheme } from "@mui/material";

//Component
import Header from "./Header";
import MainDrawer from "./Drawer";

//Redux
import { openDrawer } from "../../redux/slices/menu/menuSlice";

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("lg"));

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
  }, [drawerOpen]);


  // ####### BREAD CRUMBS START ##################################################################
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/").filter((segment) => segment !== "");
  const breadcrumbs = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    return { label: segment, path };
  });
  // ####### BREAD CRUMBS END ###################################################################

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <MainDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          width: "100%",
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          backgroundSize: "cover",
          bgcolor: "#1A191E",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Toolbar />
        {/* <Breadcrumbs>
          {breadcrumbs.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.label}
            </Link>
          ))}
        </Breadcrumbs> */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
