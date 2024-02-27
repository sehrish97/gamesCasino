import {
  Box,
  FormControlLabel,
  Typography,
  Switch,
  TextField,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';
const Bets = () => {
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
        Bets
        <SmartToyIcon sx={{marginLeft:"20px", fontSize:"54px"}}/>
        </Box>
        <Box
          sx={{
            top: "0px",
            opacity: "1",
            position: "relative",
          }}
        >
          <Box sx={{}}></Box>

        
      </Box>
    </Box>
  );
};

export default Bets;
