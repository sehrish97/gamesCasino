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
import { InfoRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
const License = () => {
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
        License
      </Box>
      <Box
        sx={{
          top: "0px",
          opacity: "1",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
            border: "2px solid white",
            padding: "20px 25px",
            borderRadius: "500px",
            borderColor: "#9aa1ff",
            color: "#dcdeff",
            "@media (max-width: 600px)":{
              borderRadius:"15px"
            }
          }}
        >
          <InfoRounded sx={{ marginRight: "10px", fontSize: "1.1rem" }} />
          You are viewing a demo website.
        </Box>
        <Box sx={{ marginBottom: "15px" }}>
          <Link
            to=""
            style={{
              opacity: 0.6,
              transition: "opacity .3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = 1;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = 0.6;
            }}
          >
            Visit Phoenix Gambling website
          </Link>{" "}
          or
          <Link to=""
          style={{
            opacity: 0.6,
            transition: "opacity .3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.opacity = 1;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.opacity = 0.6;
          }}
          > contact us </Link> to purchase Win5X.
        </Box>
      </Box>
    </Box>
  );
};

export default License;
