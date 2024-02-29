import { Box, Button } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import SettingsIcon from '@mui/icons-material/Settings';
const Wallet = () => {
  return (
    <Box
      sx={{
        padding: "40px 50px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          fontSize: "3em",
          marginBottom: "35px",
          display: "flex",
          alignItems: "center",
        }}
      >
        $0.00
        <CachedIcon
          sx={{
            marginLeft: "20px",
            fontSize: "32px",
            "&:hover": {
              transform: "rotate(180deg)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          top: "0px",
          opacity: "1",
          position: "relative",
        }}
      >
        <Box>
          <Box
            sx={{
              boxShadow: "0 0 1px 2px #9aa1ff",
              background: "#1c1b20",
              marginBottom: "25px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "20px 25px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <SettingsIcon fontSize="large" sx={{color:"#9aa1ff !important",marginRight:"20px"}}/>
              <Box sx={{display:"flex",alignItems:"center"}}>
                <Box sx={{
                  marginRight: "10px",
                  background: "#6c51d7",
                  borderRadius:"6px",
                  padding:"5px 8px",
                  color: "#fff"
                }}>Configuration</Box>
                 Coinbase Commerce 
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Wallet;
