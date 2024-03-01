import { Link } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const TokenBox = ({ data }) => {
  return (
    <Box
      sx={{
        padding: "0px 10px 10px",
      }}
    >
      {data.map((data, index) => (
        <Box
          key={index}
          sx={{
            marginTop: "25px",
            marginBottom: "25px",
            display: "flex",
          }}
        >
          <Box>
            <Typography>{data.key}</Typography>
            <Typography
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "0.9em",
                opacity: 0.6,
                lineHeight: "1.8em",
              }}
            >
              {data.description}
            </Typography>
          </Box>
          <Box
            sx={{ marginLeft: "auto", textAlign: "right", paddingLeft: "30px" }}
          >
            {data.value ? (
              <Typography>{data.value}</Typography>
            ) : (
              <TextField
                type="text"
                sx={{
                  background: "#24232a",
                  color: "#fff",
                  borderRadius: "10px",
                  border: "none",
                }}
              />
            )}
          </Box>
        </Box>
      ))}
      <Box sx={{ marginTop: "10px" }}>
        <Button
          sx={{
            pointerEvents: "none",
            opacity: 0.5,
            borderRadius: "30px",
            background: "blue",
          }}
        >
          Disable
        </Button>
      </Box>
    </Box>
  );
};

export default TokenBox;
