import {
  Box,
  Button,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import InputFieldsContent from "./InputFieldsContent";
import { InfoRounded, PlayArrowOutlined } from "@mui/icons-material";
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
        <SmartToyIcon sx={{ marginLeft: "20px", fontSize: "54px" }} />
      </Box>
      <Box
        sx={{
          top: "0px",
          opacity: "1",
          position: "relative",
        }}
      >
        <Box sx={{ marginTop: "30px", marginBottom:"30px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "22%",
              minWidth: "200px",
            }}
          >
            <InputFieldsContent
              initialValue="10"
              label="Create new bot every X seconds"
              helperText="New bot will be created every X seconds"
            />
            <InputFieldsContent
              initialValue="20"
              label="Private profile probability"
              helperText="Private profile probability (0 - 100)"
            />
            <InputFieldsContent
              initialValue="20"
              label="Min. amount of games from one bot"
              helperText="Bot will play at least X games"
            />
            <InputFieldsContent
              initialValue="50"
              label="Max. amount of games from one bot"
              helperText="Bot will play at least X games"
            />
            <InputFieldsContent
              initialValue="1"
              label="Min. delay between games (seconds)"
              helperText="Bot will wait at least X seconds before playing the next game"
            />
            <InputFieldsContent
              initialValue="5"
              label="Max. delay between games (seconds)"
              helperText="Bot will wait a maximum of X seconds before playing the next game"
            />
            
            
            {/* <Box
              sx={{
                marginBottom: "15px",
              }}
            >
              <Box sx={{ marginBottom: "5px", fontSize: "1.1em" }}>
                Create new bot every X seconds
              </Box>
              <Box sx={{ marginBottom: "10px", opacity: 0.6 }}>
                New bot will be created every X seconds
              </Box>
              <TextField
                type="text"
                value={value}
                onChange={handleInputChange}
                sx={{ marginBottom: "15px" }}
              />
            </Box> */}
          </Box>
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
            borderRadius:"25px"
          }
        }}
      >
        <InfoRounded sx={{ marginRight: "10px", fontSize: "1.1rem" }} />
        Bot will play games from "Originals" category only.
      </Box>
      <Button sx={{
        cursor:"default",
        pointerEvents:"none",
        backgroundColor:"blue",
        padding:"7px 13px",
        borderRadius:"30px"
      }} startIcon={<PlayArrowOutlined />}>Start</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Bets;
