import React from "react";
import { Box } from "@mui/material";
import DynamicSwitches from "../DynamicSwitches";

const VideoPoker = () => {
  return (
    <Box
      sx={{
        top: "0px",
        opacity: 1,
        position: "relative",
      }}
    >
      <DynamicSwitches
        switches={[
          { label: "Enabled" },
          { label: "Visible" },
          { label: "Featured" },
        ]}
      />
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
        }}
      >
        <InfoRounded sx={{ marginRight: "10px", fontSize: "1.1rem" }} />
        This game uses fair RNG by default. By enabling any of the twisting
        modules below, you can override RNG results.
      </Box>
      {data.map((item) => (
        <ReuseableComponent
          key={item.id}
          data={item}
          updateInputValue={updateInputValue}
        />
      ))} */}
    </Box>
  );
};

export default VideoPoker;
