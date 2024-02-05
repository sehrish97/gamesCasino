export default function Button(theme) {
  const disabledStyle = {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey[200]
    }
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontWeight: 400
        },
        contained: {
          ...disabledStyle,
          // background: 'linear-gradient(50deg, #FF5223, #00F97F, #2DCEF3)',
          borderRadius: '0.75rem',
          // color: '#fff', // Text color
        },
        outlined: {
          ...disabledStyle,
          borderRadius:'0.75rem',
          '&:hover': {
            backgroundColor: '#2DCEF3',
            border:"1px solid #2DCEF3",
            color:"#fff" // Specify your desired background color
          },
        }
      }
    }
  };
}
