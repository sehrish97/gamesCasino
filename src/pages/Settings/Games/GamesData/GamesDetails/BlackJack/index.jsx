import React, { useState } from "react";
import { Box } from "@mui/material";
import DynamicSwitches from "../DynamicSwitches";
import { InfoRounded } from "@mui/icons-material";
import ReuseableComponent from "../DynamicSwitches/ReuseableComponent";

const BlackJack = () => {

  const [data, setData] = useState([
    {
      id: 3,
      title: "House Edge",
      description: "Applied to payouts",
      inputValues: [
        {
          key: "inputText20",
          label: "House Edge",
          value: "5",
          description: "Percent (1-100)",
        },
      ],
    },
    {
      id: 4,
      title: "Static Loss %",
      description:
        "Additional static loss %. \n Recommended only for *Quick games.",
      inputValues: [
        {
          key: "inputText21",
          label: "Loss %",
          value: "1",
          description: "Loss %",
        },
      ],
    },
    // Add more data items as needed
  ]);
  const updateInputValue = (dataId, inputKey, value) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === dataId) {
          return {
            ...item,
            inputValues: item.inputValues.map((input) => {
              if (input.key === inputKey) {
                return {
                  ...input,
                  value: value,
                };
              }
              return input;
            }),
          };
        }
        return item;
      });
    });
  };
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
      <Box
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
      ))}
    </Box>
  );
};


export default BlackJack