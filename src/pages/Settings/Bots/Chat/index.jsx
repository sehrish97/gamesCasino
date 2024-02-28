import { Box, Button, TextField } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import InputFieldsContent from "./InputFieldsContent";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
const Chat = () => {
  const leagues = `casino_en
  casino_pt-br
  sport_en`;
  const messageData = `Hello guys.
  WOW
  How are you?
  Everything is fine how are you?
  Guys this is the best site.
  What cool slots are here
  huhiu
  kjiji
  knii`;
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
        Chat
        <SmartToyIcon sx={{ marginLeft: "20px", fontSize: "54px" }} />
      </Box>
      <Box
        sx={{
          top: "0px",
          opacity: "1",
          position: "relative",
        }}
      >
        <Box sx={{ marginTop: "30px", marginBottom: "30px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "22%",
              minWidth: "200px",
            }}
          >
            <InputFieldsContent
              initialValue="15"
              label="Message interval (seconds)"
              helperText="Messages will be sent each X seconds"
            />
            <InputFieldsContent
              initialValue="15"
              label="Message interval random delay (seconds)"
              helperText="Messages will be sent with X seconds delay"
            />
            <Box
              sx={{
                marginBottom: "15px",
              }}
            >
              <Box sx={{ marginBottom: "5px", fontSize: "1.1em" }}>
                Chat bot channel
              </Box>
              <Box sx={{ marginBottom: "10px", opacity: 0.6 }}>
                Chat channels where chat bot will be active
              </Box>
              <TextField
                type="text"
                multilinesid="filled-basic"
                multiline
                rows={5}
                variant="filled"
                value={leagues}
                inputProps={{
                  sx: {
                    backgroundColor: "#24232a",
                    border: "none !important",
                    fontSize: "14px",
                    "&:focus": {
                      borderBottom: "none !important",
                      border: "none !important",
                    },
                  },
                }}
                // onChange={handleInputChange}
                sx={{
                  marginBottom: "15px",
                  backgroundColor: "#24232a",
                  borderRadius: "10px",
                  resize: "none",
                }}
              />
            </Box>
            <Box
              sx={{
                marginBottom: "15px",
              }}
            >
              <Box sx={{ marginBottom: "5px", fontSize: "1.1em" }}>
                Messages
              </Box>
              <Box sx={{ marginBottom: "10px", opacity: 0.6 }}>
                One of these messages will be randomly picked.
              </Box>
              <TextField
                type="text"
                multilinesid="filled-basic"
                multiline
                rows={5}
                variant="filled"
                value={messageData}
                inputProps={{
                  sx: {
                    backgroundColor: "#24232a",
                    border: "none !important",
                    fontSize: "14px",
                    "&:focus": {
                      borderBottom: "none !important",
                      border: "none !important",
                    },
                  },
                }}
                // onChange={handleInputChange}
                sx={{
                  marginBottom: "15px",
                  backgroundColor: "#24232a",
                  borderRadius: "10px",
                  resize: "none",
                }}
              />
            </Box>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
              border: "2px solid white",
              padding: "20px 25px",
              borderRadius: "500px",
              borderColor: "#9aa1ff",
              color: "#dcdeff",
              "@media (max-width: 600px)": {
                borderRadius: "25px",
              },
            }}
          >
            <InfoRounded sx={{ marginRight: "10px", fontSize: "1.1rem" }} />
            Bot will play games from "Originals" category only.
          </Box> */}
          <Button
            sx={{
              cursor: "default",
              pointerEvents: "none",
              backgroundColor: "blue",
              padding: "7px 13px",
              borderRadius: "30px",
            }}
            startIcon={<ClearOutlinedIcon />}
          >
            Stop
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Chat;
