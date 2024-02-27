import { Box } from "@mui/material";
import SliderContent from "./SliderContent";
const Slider = () => {
  const sportsData = [
    {
      id: "4",
      title: "Sports",
      heading: "PLACEHOLDER",
      subtitle: "Placeholder",
      discription: "This is a placeholder slide for sports.",
    },
    {
      id: "5",
      title: "Sports",
      heading: "PLACEHOLDER",
      subtitle: "Placeholder",
      discription: "This is a placeholder slide for sports.",
    },
    {
      id: "6",
      title: "Sports",
      heading: "PLACEHOLDER",
      subtitle: "Placeholder",
      discription: "This is a placeholder slide for sports.",
    },
  ];
  const casinoData = [
    {
      id: "1",
      title: "Casino",
      heading: "PLACEHOLDER",
      subtitle: "Placeholder",
      discription: "This is a placeholder slide",
    },
    {
      id: "2",
      title: "Casino",
      heading: "PLACEHOLDER",
      subtitle: "Placeholder",
      discription: "This is a placeholder slide",
    },
    {
      id: "3",
      title: "Casino",
      heading: "PLACEHOLDER",
      subtitle: "Placeholder",
      discription: "This is a placeholder slide",
    },
  ];

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

      <SliderContent
        data={casinoData}
      />

      <SliderContent data={sportsData} />
    </Box>
  );
};

export default Slider;
