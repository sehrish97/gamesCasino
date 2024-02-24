import React, { useMemo } from "react";
import CssBaseline  from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";

import createTheme from "@mui/material/styles/createTheme";
import componentsOverride from "./overrides";
import Palette from "./palette";
import Typography from "./typography";
import CustomShadows from "./shadows";

const ThemeCustomization = ({ children }) => {
  const theme = Palette("light", "default");
  const themeTypography = Typography(`'Inter', sans-serif,'Train One', cursive,'Public Sans','sans-serif'`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 450,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
        borderRadius:"1.25rem",
        chipRadius:"0.3rem",
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default ThemeCustomization;
