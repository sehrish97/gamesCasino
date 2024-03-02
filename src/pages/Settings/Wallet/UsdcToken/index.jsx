import { Link } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "95px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  color: "black",
  borderRadius: "20px",
};

const UsdcToken = ({ data, enableButton, content }) => {
  const [destinationAddress, setDestinationAddress] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOkClick = () => {
    // Handle the logic for saving the destination address
    setOpen(false);
  };

  const handleCancelClick = () => {
    setDestinationAddress("");
    setOpen(false);
  };
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
            marginTop: "0px",
            display: "flex",
            flexWrap:"wrap",
            flexDirection: "row",
            "@media(max-width:600px)":{
              flexDirection:"column"
            }
          }}
        >
          <Box sx={{marginTop: "auto"}}>
            <Typography >{data.key}</Typography>
            <Typography
              sx={{
                marginTop: "5px",
                marginBottom: "15px",
                fontSize: "0.9em",
                opacity: 0.6,
                lineHeight: "1.8em",
              }}
            >
              {data.description} <br />
              {data.description1}
            </Typography>
          </Box>
          <Box
            sx={{ marginLeft: "auto", textAlign: "right", paddingLeft: "30px" ,
            "@media(max-width:600px)":{
                marginLeft:"unset",
                paddingLeft:"0px",
                textAlign:"left"
              }}}
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
          onClick={handleOpen}
          sx={{
            opacity: 0.5,
            borderRadius: "30px",
            background: "white",
            cursor: "pointer",
            color: "black",
            ":hover": {
              background: "white",
            },
            marginRight: "10px",
          }}
        >
          Save
        </Button>
        {enableButton == true ? (
          <Button
            sx={{
              pointerEvents: "none",
              opacity: 0.5,
              borderRadius: "30px",
              background: "blue",
            }}
          >
            Enable
          </Button>
        ) : (
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
        )}
        <Typography
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            fontSize: "0.9em",
            opacity: 0.6,
            lineHeight: "1.8em",
          }}
        >
          {content}
        </Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography variant="h5" id="child-modal-title">
            demo.phoenix-gambling.com says
          </Typography>
          <Box sx={{ marginTop: "10px" }} id="child-modal-description">
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Enter destination Solana address:
            </Typography>
            <input
              type="text"
              value={destinationAddress}
              style={{
                width: "100%",
                border: "1px solid black",
                height: "40px",
                borderRadius: "5px",
                padding: "10px",
              }}
              onChange={(e) => setDestinationAddress(e.target.value)}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "baseline",
                gap: 1,
                marginTop: "10px",
              }}
            >
              <Button
                onClick={handleOkClick}
                sx={{
                  borderRadius: "30px",
                  background: "blue",
                  ":hover": {
                    background: "blue",
                  },
                }}
              >
                OK
              </Button>
              <Button
                onClick={handleCancelClick}
                sx={{
                  borderRadius: "30px",
                  background: "grey",
                  ":hover": {
                    background: "grey",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default UsdcToken;
