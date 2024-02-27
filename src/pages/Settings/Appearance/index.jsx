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
              '@media (max-width: 600px)':{
                flexDirection:"column",
                alignItems: "flex-start",
                gap:2
              }
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
        <Box sx={{ marginTop: "35px",marginBottom: "35px" }}>
          <Typography sx={{ marginBottom: "20px", fontSize: "1.1em" }}>
            Website favicon (16x16 px)
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap:"wrap",
              gap:2
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    background: "#201f25",
                    display: "flex",
                    borderRadius: "15px",
                    padding: "0px 20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "15px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fa6350",
                        width: "12px",
                        height: "12px",
                        marginRight: " 8px",
                        borderRadius: " 50%",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        backgroundColor: "#fcbb2e",
                        width: "12px",
                        height: "12px",
                        marginRight: " 8px",
                        borderRadius: " 50%",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        backgroundColor: "#2bc63e",
                        width: "12px",
                        height: "12px",
                        marginRight: " 0px",
                        borderRadius: " 50%",
                      }}
                    ></Box>
                  </Box>
                  <Box sx={{
                    background: "#24232a",
                    padding: "10px 15px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    fontsize: ".9em",
                  }}>
                    <img src="/public/assets/phoenix.png" width={16} height={16} style={{marginRight:"10px"}}/>
                    Phoenix
                  </Box>
                </Box>
              </Box>
          </Box>
        </Box>
        <Box sx={{marginBottom:0}}>
        <Typography sx={{ marginBottom: "20px", fontSize: "1.1em" }}>
        Website name
          </Typography>
          <TextField sx={{backgroundColor:"#24232a", color:"#fff",
            padding: "5px 10px",
            borderRadius: "10px",
            opacity:.5,
            pointerEvents:"none"}} placeholder="Pheonix" type="text" />
        </Box>
      </Box>
    </Box>
  );
};

export default Appearance;
