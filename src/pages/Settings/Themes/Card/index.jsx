import {useState}  from "react";
import { Box, Typography, IconButton } from "@mui/material";
// import ColorSelector from "./ColorSelector";
import EditIcon from "@mui/icons-material/Edit";
import ColorSelector from "./ColorSelector";

const CardComponent = ({ data }) => {
  const [showHexColorPicker,setShowHexColorPicker] = useState(true)

  return (
    <>
      <Box
        sx={{
          top: "0px",
          opacity: "1",
          position: "relative",
        }}
      >
        <Box>
          <Box sx={{borderLeft:"1px solid blue",
        padding: "10px 15px",
        position: "relative",
        marginBottom: "25px",
        fontSize: "1.1em",}}>

        </Box>
        </Box>
        <Typography>{data?.title}</Typography>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography>{data?.value}</Typography>
          </Box>
          <IconButton >
            <EditIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <ColorSelector/>
      </Box>
    </>
  );
};
export default CardComponent;
