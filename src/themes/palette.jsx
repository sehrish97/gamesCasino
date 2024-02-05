import { createTheme } from '@mui/material';

const Palette = (mode) => {

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#fff"
      },
      common: {
        black: 'red',
        white: 'red',
      },
      text: {
        primary: "#fff",
        secondary: "#BEBEBE",
      },
      divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
      background: {
        paper: mode === 'dark' ? "#111827" : "#1C1B20", // Adjust paper color for dark and light mode
        default: mode === 'dark' ? "#030712" : "#1C1B20", // Adjust default background color
      },
    },
  });
};

export default Palette;
