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
    {
      title: "Phoenix Gambling - Slots",
      games: [
        {
          id: 1,
          imageUrl: "/assets/game_thumbnail-dfa29520b07f989a401a4245ca9fb747.png",
          name: "Dragon's Lair",
        },
        {
          id: 1,
          imageUrl: "/assets/thumbnail-1e32fa29a4054d0d9b4a88bc0a6f1d07.png",
          name: "Phoenix Rises",
        },
        {
          id: 1,
          imageUrl: "/assets/thumbnail-cde9c040ad6cceddbdd806eecc22e111.png",
          name: "Spiral",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-2ea2b7d646a56e1967f341196b316d89.png",
          name: "Sweets",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-10b90b1ac2efad003a4532461723cf6d.png",
          name: "Alchemist's Lab",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-a3cc71963d3b1493eda92226bf18dad8.png",
          name: "Wild Flowers",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo_sm-ec997c2cac2b1293beb9e579626ae166.png",
          name: "Wild Fruits",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-d8029ca8450b14a7e0f9d7f3b903eaad.png",
          name: "Space Galaxy",
        },
        {
          id: 1,
          imageUrl: "/assets/preview-6f68b069f33596a941011d54aa71fab7.png",
          name: "Treasure Hunt",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-1f966dbbaad0722903573289f06f72c6.png",
          name: "West Cowboys",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-7eb90f66997f2c0d96feece64e57397e.png",
          name: "Dinosaurs",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-d3e4102bb5171e1ff3f39528305c9d2b.png",
          name: "Earth Evolution",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-c0d36b3a1ffc802b33c8cf3e47f92c47.png",
          name: "Divine Diamonds",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-8cb4dd63dcc955eb5540c7fce5e09a9f.png",
          name: "Pirates Of the Caribbean",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-d0c15c3643bcd47b141fc9618fad9230.png",
          name: "Vikings",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-60f93c835005d4eece4b1c4da0a38581.png",
          name: "Wild West",
        },
        {
          id: 1,
          imageUrl:
            "/assets/background_logo-1f966dbbaad0722903573289f06f72c6.png",
          name: "Pirates Of the Caribbean",
        },
      ],
    },
    {
      title: "Phoenix Gambling",
      games: [
        {
          id: 1,
          imageUrl: "/assets/game_thumbnail-dfa29520b07f989a401a4245ca9fb747.png",
          name: "Meteorite",
        },
        {
          id: 1,
          imageUrl: "/assets/preview_v2-8c2df6d96a80c565b4f1535110ef8ef3.png",
          name: "Wheel",
        },
        {
          id: 1,
          imageUrl: "/assets/thumbnail-af79738f6dcf61b0c054c9895edd9123.png",
          name: "Video Poker",
        },
        {
          id: 1,
          imageUrl: "/assets/thumbnail-c2760e5e52627b9a3b71513d90f62e1b.png",
          name: "Dice",
        },
        {
          id: 1,
          imageUrl: "/assets/thumbnail-3b8bf79e73f433e2f217b0359115ab29.png",
          name: "HiLo",
        },
        {
          id: 1,
          imageUrl: "/assets/thumbnail-72fdb7d7c1fa872c54d0a3087d358239.png",
          name: "Coinflip",
        },
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
        {/* <PheonixGamblingSlotData /> */}
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
