import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
const Notifications = () => {
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
        }}
      >
        Notifications
      </Box>
      <Box
        sx={{
          width: "100%",
          flex: 1,
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: "0%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            Text
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            Actions
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            Example Notification
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Button
              sx={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "30px",
                paddingX: "10px",
                ":hover": { backgroundColor: "blue" },
              }}
            >
              <CloseIcon sx={{ fontSize: "16px" }} />
              <Typography sx={{ textIndent: "5px" }}>Delete</Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Button
              sx={{
                variant: "contained",
                color: "white",
                backgroundColor: "blue",
                borderRadius: "30px",
                paddingX: "10px",
                ":hover": { backgroundColor: "blue" },
              }}
            >
              <AddIcon sx={{ fontSize: "14px" }} />
              <Typography
                sx={{
                  textIndent: "5px",
                }}
              >
                Create
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Notifications;
