import React, { useState } from "react";
import { Box } from "@mui/material";
import DynamicSwitches from "../DynamicSwitches";
import { InfoRounded } from "@mui/icons-material";
import ReuseableComponent from "../DynamicSwitches/ReuseableComponent";

const Plinko = () => {
    
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
      id: 2,
      title: "Max Payout",
      name: "Max Payout",
      label: "Enable",
      description: "Limits max profit based on each currency",
      inputValues: [
        {
          key: "inputText3",
          label: "Max profit (USDT)",
          value: "0.00",
          description: "Max profit per game, for example 1 USDT",
        },
        {
          key: "inputText4",
          label: "Max profit (Ethereum)",
          value: "0.00",
          description: "Max profit per game, for example 1 ETH",
        },
        {
          key: "inputText5",
          label: "Max profit (Bitcoin)",
          value: "0.00",
          description: "Max profit per game, for example 1 BTC",
        },
        {
          key: "inputText6",
          label: "Max profit (Ethereum)",
          value: "0.00",
          description: "Max profit per game, for example 1 ETH",
        },
        {
          key: "inputText7",
          label: "Max profit (Litecoin)",
          value: "0.00",
          description: "Max profit per game, for example 1 LTC",
        },
        {
          key: "inputText8",
          label: "Max profit (Bitcoin Cash)",
          value: "0.00",
          description: "Max profit per game, for example 1 BCH",
        },
        {
          key: "inputText9",
          label: "Max profit (Dogecoin)",
          value: "0.00",
          description: "Max profit per game, for example 1 DOGE",
        },
        {
          key: "inputText10",
          label: "Max profit (DAI)",
          value: "0.00",
          description: "Max profit per game, for example 1 DAI",
        },
        {
          key: "inputText11",
          label: "Max profit (SHIB)",
          value: "0.00",
          description: "Max profit per game, for example 1 SHIB",
        },
        {
          key: "inputText12",
          label: "Max profit (MATIC)",
          value: "0.00",
          description: "Max profit per game, for example 1 MATIC",
        },
        {
          key: "inputText13",
          label: "Max profit (APE)",
          value: "0.00",
          description: "Max profit per game, for example 1 APE",
        },
        {
          key: "inputText14",
          label: "Max profit (USDC)",
          value: "0.00",
          description: "Max profit per game, for example 1 USDC",
        },
        {
          key: "inputText15",
          label: "Max profit (Bitcoin)",
          value: "0.00",
          description: "Max profit per game, for example 1 BTC",
        },
        {
          key: "inputText16",
          label: "Max profit (Litecoin)",
          value: "0.00",
          description: "Max profit per game, for example 1 LTC",
        },
        {
          key: "inputText17",
          label: "Max profit (Dogecoin)",
          value: "0.00",
          description: "Max profit per game, for example 1 DOGE",
        },
        {
          key: "inputText18",
          label: "Max profit (Bitcoin Cash)",
          value: "0.00",
          description: "Max profit per game, for example 1 BCH",
        },
        {
          key: "inputText19",
          label: "Max profit (Solana)",
          value: "0.00",
          description: "Max profit per game, for example 1 SOL",
        },

        // Add more input value objects as needed
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
  )
}

export default Plinko