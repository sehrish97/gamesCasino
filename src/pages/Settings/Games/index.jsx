import GamesData from "./GamesData";
import { Box, Typography, Button } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
// import ExternalGameDetail from "./ExternalGameDetail";

import TelegramData from "./TelegramData";
import { Link } from "react-router-dom";
import PheonixGamblingSlotData from "./PheonixGamblingSlotData";

const Games = () => {
  let gamesData = [
    {
      title: "Originals",
      games: [
        { id: 1, imageUrl: "/assets/mines.png", name: "Mines" },
        { id: 2, imageUrl: "/assets/dice.png", name: "Dice" },
        { id: 3, imageUrl: "/assets/Wheel.jpg", name: "Wheel" },
        { id: 4, imageUrl: "/assets/plinko.png", name: "Plinko" },
        { id: 5, imageUrl: "/assets/coinflip.png", name: "Coinflip" },
        { id: 6, imageUrl: "/assets/tower.png", name: "Tower" },
        { id: 7, imageUrl: "/assets/keno.jpg", name: "Keno" },
        { id: 8, imageUrl: "/assets/unknown-game-image.jpg", name: "Stairs" },
        {
          id: 9,
          imageUrl: "/assets/unknown-game-image.jpg",
          name: "BlackJack",
        },
        { id: 10, imageUrl: "/assets/Diamonds.jpg", name: "Diamonds" },
        { id: 11, imageUrl: "/assets/roulette.png", name: "Roulette" },
        { id: 12, imageUrl: "/assets/HiLo.jpg", name: "HiLo" },
        { id: 13, imageUrl: "/assets/Limbo.jpg", name: "Limbo" },
      ],
    },
    // {
    //   title: "[Telegram] Originals",
    //   games:[
    //     {id:1,imageUrl:"/assets/telegram-slot.png",name:"Slote"}
    //   ]
    // },
  ];
  let telegramData = [
    {
      title: "[Telegram] Originals",
      games: [{ id: 1, imageUrl: "/assets/telegram-slot.png", name: "Slot" }],
    },
  ];

  return (
    <Box>
      <Box>
        <Typography variant="h1">Games</Typography>
        <GamesData gameData={gamesData} />
        <TelegramData />
        <PheonixGamblingSlotData />
      </Box>
      <Button
        sx={{
          pointerEvents: "none",
          cursor: "default",
          padding: "10px 15px",
          borderRadius: "30px",
          background: "blue",
        }}
      >
        <CachedIcon color="white" />
        <Typography sx={{ textIndent: "5px" }}>Sync</Typography>
      </Button>
    </Box>
  );
};

export default Games;
