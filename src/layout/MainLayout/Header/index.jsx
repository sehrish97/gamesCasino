import { AppBar, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

//Component
import HeaderContent from "./HeaderContent";
import { useTheme } from "@emotion/react";
import AppBarStyled from "./AppBarStyled";

const Header = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

    // app-bar params
    const appBar = {
      position: 'fixed',
      elevation: 0,
      color:"inherit",
      sx: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.customShadows.z1
      }
    };

  const mainHeader = (
    <Toolbar>
      <IconButton disableRipple aria-label="open drawer" onClick={handleDrawerToggle} edge="start" >
        <MenuIcon />
      </IconButton>
      <HeaderContent />
    </Toolbar>
  );

  return <>{!matchDownMD ? <AppBarStyled open={open} {...appBar}>{mainHeader}</AppBarStyled> : <AppBar {...appBar}>{mainHeader}</AppBar>}</>}

export default Header;
