import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TelegramData = () => {
  let telegramData =[
    {
      title: "[Telegram] Originals",
      games:[
        {id:1,imageUrl:"/assets/telegram-slot.png",name:"Slot"}
      ]
    },
  ]
  console.log(telegramData,'data')
  return (
    <Box>
      {telegramData?.map((games) => (
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
              <Link key={item.id} to={`/games/telegram:${item.name.toLowerCase()}`}>
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

export default TelegramData;
