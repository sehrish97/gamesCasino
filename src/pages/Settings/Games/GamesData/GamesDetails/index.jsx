import { Box, Switch } from "@mui/material";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Mines from "./Mines";
import Dice from "./Dice";
import Plinko from "./Plinko";
import Coinflip from "./Coinflip";
import Tower from "./Tower";
import Keno from "./Keno";
import Stairs from "./Stairs";
import BlackJack from "./BlackJack";
import Diamonds from "./Diamonds";
import Roulette from "./Roulette";
import Hilo from "./Hilo";
import Limbo from "./Limbo";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#4bcb27" : "#4bcb27",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#4bcb27",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === "light" ? "rgba(255,255,255,.15)" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const GamesDetails = () => {
  const { gameName } = useParams();
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
          fontSize: "3rem",
          marginBottom: "35px",
          display: "flex",
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        {gameName}
      </Box>
      {gameName === "mines" && <Mines />}
      {gameName === "dice" && <Dice />}
      {gameName === "plinko" && <Plinko />}
      {gameName === "coinflip" && <Coinflip />}
      {gameName === "tower" && <Tower />}
      {gameName === "keno" && <Keno />}
      {gameName ==="stairs" && <Stairs />}
      {gameName === "blackjack" && <BlackJack />}
      {gameName === "diamonds" && <Diamonds />}
      {gameName === "roulette" && <Roulette />}
      {gameName === "hilo" && <Hilo />}
      {gameName === "limbo" && <Limbo />}
    </Box>
  );
};

export default GamesDetails;
