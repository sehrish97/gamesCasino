import React, { useState } from "react";
import { Box } from "@mui/material";
import DynamicSwitches from "../DynamicSwitches";
import { InfoRounded } from "@mui/icons-material";
import ReuseableComponent from "../DynamicSwitches/ReuseableComponent";

const Stairs = () => {

  const [data, setData] = useState([
    {
      id: 1,
      title: "Payout limit",
      name: "Payout limit",
      label: "Enable",
      description: "Lose game if payout reaches specific value.",
      inputValues: [
        {
          key: "inputText",
          label: "Max payout",
          value: "100.00",
          description: "Instantly lose if payout reaches specific value.",
        },
        {
          key: "inputText2",
          label: "% that this module won't work",
          value: "-1",
          description: "Use -1 to disable.",
        },
      ],
    },
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
        id: 5,
        title: "Stairs-specific",
        description:
          "This module lets you configure static loss % for every game mode (1-7 mines).",
        inputValues: [
          {
            key: "inputText22",
            label: "Number of mines: 1",
            value: "1",
            description: "Loss % with 1 mine(s) in the field",
          },
          {
            key: "inputText23",
            label: "Number of mines: 2",
            value: "1",
            description: "Loss % with 2 mine(s) in the field",
          },
          {
            key: "inputText24",
            label: "Number of mines: 3",
            value: "1",
            description: "Loss % with 3 mine(s) in the field",
          },
          {
            key: "inputText25",
            label: "Number of mines: 4",
            value: "1",
            description: "Loss % with 4 mine(s) in the field",
          },
          {
            key: "inputText25",
            label: "Number of mines: 5",
            value: "1",
            description: "Loss % with 5 mine(s) in the field",
          },
          {
            key: "inputText26",
            label: "Number of mines: 6",
            value: "1",
            description: "Loss % with 6 mine(s) in the field",
          },
          {
            key: "inputText27",
            label: "Number of mines: 7",
            value: "1",
            description: "Loss % with 7 mine(s) in the field",
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


export default Stairs