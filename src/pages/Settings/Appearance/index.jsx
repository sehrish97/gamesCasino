import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import {
  Box,
  FormControlLabel,
  Typography,
  Switch,
  TextField,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
const Appearance = () => {
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
        Appearance
      </Box>
      <Box
        sx={{
          top: "0px",
          opacity: "1",
          position: "relative",
        }}
      >
        <Box sx={{ marginTop: "35px" }}>
          <Typography sx={{ marginBottom: "20px", fontSize: "1.1em" }}>
            Website logo
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ marginRight: "25px" }}>
              <Button
                component="label"
                variant="contained"
                startIcon={<UploadOutlinedIcon />}
                sx={{
                  background: "blue",
                  color: "white",
                  cursor: "default",
                  borderRadius: "30px",
                }}
              >
                Upload
              </Button>
            </Box>
            <Box>
              <img src="/public/assets/phoenix.png" width={55} />
            </Box>
          </Box>
        </Box>
        <Box sx={{marginTop:"35px"}}>
        <Typography sx={{ marginBottom: "20px", fontSize: "1.1em" }}>
        Website favicon (16x16 px)
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ marginRight: "25px" }}>
            <Button
                component="label"
                variant="contained"
                startIcon={<UploadOutlinedIcon />}
                sx={{
                  background: "blue",
                  color: "white",
                  cursor: "default",
                  borderRadius: "30px",
                }}
              >
                Upload
              </Button>
              <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Box sx={{background:"#201f25", display:"flex", borderRadius:"15px",padding:"0px 20px"}}>

                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Appearance;
