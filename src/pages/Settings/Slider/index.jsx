import { Box } from "@mui/material";
import SliderContent from "./SliderContent";
const Slider = () => {
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
        Slider
      </Box>

      <SliderContent title='Casino' 
      heading='PLACEHOLDER'
      subtitle='Placeholder' 
      discription='This is a placeholder slide' />
      
      <SliderContent title='Sports' 
      heading='PLACEHOLDER'
      subtitle='Placeholder' 
      discription='This is a placeholder slide for sports.' />
    </Box>
  );
};

export default Slider;
