import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

let content = [
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
];

const PheonixGamblingSlotData = () => {
  return (
    <Box>
      {content.map((games) => (
        <>
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.3rem",
              }}
            >
              {games.title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginBottom: "25px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {games.games.map((item) => (
              <Link key={item.id} to={`/games/${item.name.toLowerCase()}`}>
                <Box
                  sx={{
                    borderRadius: "10px",
                    margin: "10px",
                    cursor: "pointer",
                    transition: "transform .4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  key={item.id}
                >
                  <Box
                    sx={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start", // Align items horizontally
                        alignItems: "flex-end", // Align items to bottom
                        height: "100%", // Make container take full height
                        padding: "8px", // Add padding to bottom
                        color: "white",
                      }}
                    >
                      <Typography
                        sx={{
                          background: "rgba(0,0,0,0.5)",
                          borderRadius: "3px",
                          padding: "5px 10px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </>
      ))}
    </Box>
  );
};

export default PheonixGamblingSlotData;
