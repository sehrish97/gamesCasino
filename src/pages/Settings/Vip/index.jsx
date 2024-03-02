import { Box, Tab, useMediaQuery, Typography } from "@mui/material";
import { useState } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import StoreIcon from "@mui/icons-material/Store";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CardComponent from "./Card";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const Vip = () => {
  const [value, setValue] = useState("Level 0"); // Set initial value to 'Level 0'
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const cardData = [
    {
      level: "Level 0",
      data: [
        {
          initialValue: "Player",
          label: "Name",
        },
        {
          initialValue: "2",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "500",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "2.5",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "1",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "1",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "1",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 1",
      data: [
        {
          initialValue: "Pro I",
          label: "Name",
        },
        {
          initialValue: "100",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "800",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "2",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "2500",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "2.5",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "5",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "5",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "2",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "100",
          label: "Level protection (USD)",
        },
        {
          initialValue: "2",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 2",
      data: [
        {
          initialValue: "Pro II",
          label: "Name",
        },
        {
          initialValue: "500",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "4000",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "2",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "5000",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "2.5",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "10",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "10",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "3",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "200",
          label: "Level protection (USD)",
        },
        {
          initialValue: "3",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 3",
      data: [
        {
          initialValue: "Pro III",
          label: "Name",
        },
        {
          initialValue: "1000",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "1500",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "2",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "5000",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "2.5",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "20",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "20",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "4",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "100",
          label: "Level protection (USD)",
        },
        {
          initialValue: "4",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 4",
      data: [
        {
          initialValue: "Epic I",
          label: "Name",
        },
        {
          initialValue: "2500",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "35000",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "3",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "5000",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "2.5",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "50",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "50",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "4",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "400",
          label: "Level protection (USD)",
        },
        {
          initialValue: "5",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 5",
      data: [
        {
          initialValue: "Epic II",
          label: "Name",
        },
        {
          initialValue: "5000",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "75000",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "3",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "5000",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "2",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "100",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "100",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "6",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "500",
          label: "Level protection (USD)",
        },
        {
          initialValue: "10",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 6",
      data: [
        {
          initialValue: "Elite I",
          label: "Name",
        },
        {
          initialValue: "10000",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "125000",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "3",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "10000",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "2",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "200",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "200",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "7",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "600",
          label: "Level protection (USD)",
        },
        {
          initialValue: "20",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 7",
      data: [
        {
          initialValue: "Elite II",
          label: "Name",
        },
        {
          initialValue: "15000",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "200000",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "4",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "10000",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "1.5",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "500",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "500",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "8",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "700",
          label: "Level protection (USD)",
        },
        {
          initialValue: "35",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 8",
      data: [
        {
          initialValue: "Grand Elite I",
          label: "Name",
        },
        {
          initialValue: "30000",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "500000",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "4",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "10000",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "1.5",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "1000",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "1000",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "9",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "800",
          label: "Level protection (USD)",
        },
        {
          initialValue: "50",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 9",
      data: [
        {
          initialValue: "Grand Elite II",
          label: "Name",
        },
        {
          initialValue: "50000",
          label: "Deposit requirement (USD)",
        },
        {
          initialValue: "750000",
          label: "Wager requirement (USD)",
        },
        {
          initialValue: "5",
          label: "Number of withdrawals per day",
        },
        {
          initialValue: "20000",
          label: "Max. withdrawal (USD)",
        },
        {
          initialValue: "1",
          label: "Withdrawal fee (%)",
        },
        {
          initialValue: "2000",
          label: "One-time bonus after level is reached (USD)",
        },
        {
          initialValue: "2000",
          label: "Invite bonus (USD)",
        },
        {
          initialValue: "10",
          label: "Referral deposit fee (%)",
        },
        {
          initialValue: "900",
          label: "Level protection (USD)",
        },
        {
          initialValue: "75",
          label: "Bonus wheel - Max reward (USD)",
        },
      ],
    },
    {
      level: "Level 10",
      data: [
         {
        initialValue: "Legend",
        label: "Name",
      },
      {
        initialValue: "100000",
        label: "Deposit requirement (USD)",
      },
      {
        initialValue: "100000",
        label: "Wager requirement (USD)",
      },
      {
        initialValue: "5",
        label: "Number of withdrawals per day",
      },
      {
        initialValue: "20000",
        label: "Max. withdrawal (USD)",
      },
      {
        initialValue: "1",
        label: "Withdrawal fee (%)",
      },
      {
        initialValue: "5000",
        label: "One-time bonus after level is reached (USD)",
      },
      {
        initialValue: "5000",
        label: "Invite bonus (USD)",
      },
      {
        initialValue: "20",
        label: "Referral deposit fee (%)",
      },
      {
        initialValue: "1000",
        label: "Level protection (USD)",
      },
      {
        initialValue: "100",
        label: "Bonus wheel - Max reward (USD)",
      },
    ],
    },
    // Add data for other cards
  ];

  return (
    <TabContext
      sx={{
        borderTop: "1px solid grey",
      }}
      value={value}
      onChange={handleChange}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          padding: "0px",
          height: "100%",
          borderTop: "1px solid #201f25",
        }}
      >
        <Box
          sx={{
            borderRight: "1px solid #201f25",
            paddingTop: "30px",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="icon position tabs example"
            orientation="vertical"
            sx={{
              minWidth: 300,
              height: isSmallScreen ? "40%" : "100%",
              ".css-tnih2g-MuiTabs-indicator": {
                width: "0px",
                backgroundColor: "transparent",
              },
              paddingTop: "25px",
             
            }}
            
          >
            <Tab sx={{alignItems: "baseline"}} label="Level 0" value="Level 0" /> {/* Assign value to tabs */}
            <Tab sx={{alignItems: "baseline"}}  label="Level 1" value="Level 1" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 2" value="Level 2" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 3" value="Level 3" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 4" value="Level 4" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 5" value="Level 5" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 6" value="Level 6" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 7" value="Level 7" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 8" value="Level 8" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 9" value="Level 9" />
            <Tab sx={{alignItems: "baseline"}}  label="Level 10" value="Level 10" />{" "}
            {/* Assign value to tabs */}
          </TabList>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Adjust alignment as needed
            height: "100%",
            width: "auto",
            padding: "40px 50px",
          }}
        >
          <Typography
            sx={{
              fontSize: "3em",
              marginBottom: "35px",
            }}
          >
            VIP
          </Typography>
          <Box
            sx={{
              top: "0px",
              opacity: "1",
              position: "relative",
            }}
          >
            {cardData.map((tab, index) => (
              <TabPanel key={index} value={tab.level}>
                {tab.data.map((card, cardIndex) => (
                  <CardComponent key={cardIndex} data={card} />
                ))}
              </TabPanel>
            ))}
            {/* <TabPanel
              value="Level 0" // Change value to match tab value
            >
              {cardData.map((card, index) => (
                <CardComponent key={index} data={card} />
              ))}
            </TabPanel>
            <TabPanel
              value="Level 1" // Change value to match tab value
            >
              {cardData1.map((card, index) => (
                <CardComponent key={index} data={card} />
              ))}
            </TabPanel>
            <TabPanel
              value="Level 2" // Change value to match tab value
            >
              {cardData2.map((card, index) => (
                <CardComponent key={index} data={card} />
              ))}
            </TabPanel>
            <TabPanel
              value="Level 3" // Change value to match tab value
            >
              {cardData3.map((card, index) => (
                <CardComponent key={index} data={card} />
              ))}
            </TabPanel> */}
          </Box>
        </Box>
      </Box>
    </TabContext>
  );
};

export default Vip;
