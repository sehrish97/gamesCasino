import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
// import CachedIcon from "@mui/icons-material/Cached";
import SettingsIcon from "@mui/icons-material/Settings";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import BoxComponent from "./BoxComponent";
// const Wallet = () => {
//   const [expanded, setExpanded] = useState(false);
//   const handleExpansion = () => {
//     setExpanded((prevExpanded) => !prevExpanded);
//   };
//   const Configuration = [
//     {
//       title: "Coinbase Commerce API key",
//       description1: `Register  `,
//       blockText1: " self-managed ",
//       planeText1: " account on ",
//       linkurl1: " Coinbase Commerce ",
//       planeText2: ".",
//       description2: `Generate your API key on `,
//       linkurl2: " this page ",
//       description3: `.`,
//     },
//     {
//       title: "Webhook",
//       description1: ` Create webhook on   `,
//       blockText1: " ",
//       planeText1: "  ",
//       linkurl1: " this page ",
//       planeText2: "with URL:",
//       description2: ` https://phoenix-gambling.com/license/commerce/callback/- `,
//       linkurl2: "",
//       description3: ``,
//     },
//   ];
//   return (
//     <Box
//       sx={{
//         padding: "40px 50px",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <Box
//         sx={{
//           fontSize: "3em",
//           marginBottom: "35px",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         $0.00
//         <CachedIcon
//           sx={{
//             marginLeft: "20px",
//             fontSize: "32px",
//             "&:hover": {
//               transform: "rotate(180deg)",
//               transition: "transform 0.3s ease",
//               cursor: "pointer",
//             },
//           }}
//         />
//       </Box>
//       <Box
//         sx={{
//           top: "0px",
//           opacity: "1",
//           position: "relative",
//         }}
//       >
//         <Box>
//           <Accordion
//             sx={{
//               boxShadow: "0 0 1px 2px #9aa1ff",
//               background: "#1c1b20",
//               marginBottom: "25px",
//               borderRadius: "10px",
//             }}
//           >
//             <AccordionSummary aria-controls="panel2-content" id="panel2-header">
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   padding: "10px 15px",
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//               >
//                 <SettingsIcon
//                   fontSize="large"
//                   sx={{ color: "#9aa1ff !important", marginRight: "20px" }}
//                 />
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Box
//                     sx={{
//                       marginRight: "10px",
//                       background: "#6c51d7",
//                       borderRadius: "6px",
//                       padding: "5px 8px",
//                       color: "#fff",
//                     }}
//                   >
//                     Configuration
//                   </Box>
//                   Coinbase Commerce
//                 </Box>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <BoxComponent data={Configuration} />
//             </AccordionDetails>
//           </Accordion>
//           <Box sx={{ height: "25px" }}></Box>
//         </Box>
//         <Box>
//         <Accordion
//             sx={{
//               boxShadow: "0 0 1px 2px #9aa1ff",
//               background: "#1c1b20",
//               marginBottom: "25px",
//               borderRadius: "10px",
//             }}
//           >
//             <AccordionSummary aria-controls="panel2-content" id="panel2-header">
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   padding: "10px 15px",
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//               > <svg class="svg-inline--fa fa-tether fa-w-16 transformed"
//               role="img" xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 32 32"
//               data-v-8f1cfd85="" data-v-f282a21b=""
//               style={{color: "lightgreen",width:"25px",marginRight: "25px"}}>
//                 <path fill="currentColor" d="M15.906 1.006c0.906-0.006 1.381 0.025 2 0.119 0.444 0.069 1.081 0.175 1.406 0.244s0.975 0.256 1.438 0.413c0.462 0.163 1.069 0.394 1.344 0.519s0.756 0.369 1.063 0.531c0.306 0.169 0.844 0.494 1.188 0.719 0.344 0.231 0.881 0.625 1.188 0.881s0.819 0.725 1.125 1.038c0.306 0.313 0.756 0.806 0.988 1.094 0.238 0.294 0.625 0.825 0.869 1.188 0.238 0.363 0.65 1.094 0.919 1.625 0.262 0.531 0.6 1.319 0.744 1.75s0.331 1.075 0.419 1.438c0.081 0.363 0.212 1.044 0.281 1.512 0.087 0.594 0.125 1.188 0.125 1.894 0 0.694-0.044 1.325-0.125 1.919-0.069 0.494-0.206 1.231-0.306 1.644s-0.281 1.031-0.406 1.375c-0.119 0.344-0.325 0.881-0.462 1.188s-0.394 0.831-0.575 1.156c-0.181 0.325-0.519 0.875-0.756 1.219s-0.663 0.906-0.95 1.25c-0.288 0.344-0.8 0.881-1.144 1.2-0.337 0.313-0.813 0.725-1.056 0.913s-0.706 0.512-1.031 0.725c-0.325 0.219-0.875 0.544-1.219 0.725s-0.95 0.462-1.344 0.619c-0.394 0.156-0.956 0.356-1.25 0.444s-0.837 0.231-1.219 0.313c-0.381 0.081-0.944 0.181-1.25 0.231-0.337 0.050-1.106 0.081-1.906 0.081-0.963 0-1.55-0.031-2.063-0.106-0.394-0.063-1.056-0.194-1.469-0.294s-1.031-0.281-1.375-0.406c-0.344-0.119-0.881-0.325-1.188-0.462s-0.831-0.394-1.156-0.575c-0.325-0.181-0.831-0.494-1.125-0.688s-0.713-0.506-0.938-0.681c-0.225-0.181-0.644-0.544-0.931-0.806s-0.794-0.788-1.119-1.169c-0.319-0.381-0.775-0.969-1.013-1.313-0.231-0.344-0.563-0.881-0.737-1.188s-0.431-0.831-0.575-1.156c-0.144-0.325-0.369-0.9-0.5-1.281-0.125-0.381-0.306-0.994-0.394-1.375-0.094-0.381-0.225-1.075-0.294-1.55-0.087-0.587-0.125-1.175-0.125-1.887 0-0.694 0.044-1.325 0.125-1.925 0.069-0.488 0.206-1.225 0.306-1.637s0.281-1.031 0.406-1.375c0.119-0.344 0.331-0.894 0.475-1.219s0.4-0.85 0.575-1.156c0.175-0.306 0.506-0.844 0.744-1.188 0.231-0.344 0.613-0.85 0.844-1.125s0.563-0.65 0.737-0.838c0.175-0.181 0.625-0.6 1.006-0.925 0.375-0.325 1.050-0.837 1.5-1.144 0.444-0.3 1.006-0.644 1.25-0.769 0.238-0.119 0.731-0.344 1.094-0.5 0.363-0.15 0.963-0.375 1.344-0.5 0.381-0.119 0.956-0.281 1.281-0.356 0.325-0.069 0.919-0.181 1.313-0.244 0.488-0.081 1.1-0.119 1.906-0.125zM9.5 12h5v2.063c-0.438 0-0.975 0.044-1.488 0.094-0.506 0.056-1.175 0.137-1.481 0.188-0.306 0.056-0.9 0.181-1.313 0.281s-0.95 0.262-1.188 0.363c-0.244 0.094-0.606 0.287-0.806 0.425-0.206 0.131-0.438 0.344-0.519 0.463s-0.169 0.344-0.188 0.5c-0.031 0.212-0.006 0.35 0.094 0.563 0.075 0.169 0.25 0.375 0.431 0.519 0.162 0.131 0.469 0.319 0.675 0.419 0.206 0.094 0.556 0.238 0.781 0.306 0.225 0.075 0.713 0.2 1.094 0.288 0.381 0.081 0.981 0.194 1.344 0.244 0.363 0.056 1.088 0.131 1.613 0.175l0.95 0.081v6.031h3v-6.063c0.438 0 0.994-0.044 1.512-0.1 0.525-0.050 1.325-0.163 1.769-0.244s1.056-0.225 1.356-0.313c0.306-0.087 0.712-0.219 0.906-0.3 0.2-0.081 0.519-0.244 0.706-0.369s0.425-0.331 0.519-0.469c0.1-0.131 0.188-0.363 0.212-0.519 0.031-0.225 0.006-0.344-0.113-0.587-0.1-0.206-0.262-0.394-0.462-0.55-0.175-0.125-0.538-0.331-0.813-0.444-0.275-0.119-0.85-0.306-1.281-0.412s-1.038-0.238-1.344-0.287c-0.306-0.050-0.988-0.137-1.5-0.188-0.519-0.050-1.056-0.094-1.206-0.094h-0.262v-2.063h5v-3h-13zM14.5 15.063v1.938h3v-1.969l0.7 0.050c0.387 0.025 1.087 0.1 1.55 0.169 0.462 0.063 1.056 0.162 1.313 0.219 0.256 0.050 0.706 0.169 1 0.256 0.294 0.094 0.669 0.231 0.844 0.313 0.169 0.081 0.375 0.206 0.45 0.275 0.081 0.069 0.144 0.15 0.144 0.188s-0.038 0.1-0.081 0.137c-0.044 0.044-0.175 0.144-0.294 0.219s-0.512 0.231-0.875 0.35c-0.363 0.119-0.95 0.275-1.313 0.35-0.363 0.069-0.981 0.169-1.375 0.225-0.394 0.050-1.144 0.119-1.656 0.156-0.519 0.031-1.375 0.063-1.906 0.063s-1.394-0.031-1.906-0.063c-0.519-0.038-1.262-0.106-1.656-0.156-0.394-0.056-1-0.15-1.344-0.225-0.344-0.069-0.863-0.2-1.156-0.288s-0.675-0.225-0.844-0.306c-0.175-0.081-0.375-0.206-0.456-0.275-0.075-0.069-0.137-0.15-0.137-0.188s0.050-0.106 0.106-0.163c0.063-0.056 0.269-0.181 0.456-0.275s0.581-0.244 0.875-0.331c0.294-0.094 0.813-0.219 1.156-0.287s0.95-0.169 1.344-0.219c0.394-0.056 0.831-0.106 0.969-0.119s0.438-0.025 1.094-0.044z" data-v-8f1cfd85=""></path></svg>
//                 {/* <SettingsIcon
//                   fontSize="large"
//                   sx={{ color: "#9aa1ff !important", marginRight: "20px" }}
//                 /> */}
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Box
//                     sx={{
//                       marginRight: "10px",
//                       background: "#6c51d7",
//                       borderRadius: "6px",
//                       padding: "5px 8px",
//                       color: "#fff",
//                     }}
//                   >
//                     Token
//                   </Box>
//                   USTD
//                 </Box>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <BoxComponent data={Configuration} />
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Wallet;

import React from "react";
import CustomAccordion from "./CustomAccordion";
import BoxComponent from "./BoxComponent";
import TokenBox from "./TokenBox";

const Wallet = () => {
  const Configuration = [
    {
      title: "Coinbase Commerce API key",
      description1: `Register  `,
      blockText1: " self-managed ",
      planeText1: " account on ",
      linkurl1: " Coinbase Commerce ",
      planeText2: ".",
      description2: `Generate your API key on `,
      linkurl2: " this page ",
      description3: `.`,
    },
    {
      title: "Webhook",
      description1: ` Create webhook on   `,
      blockText1: " ",
      planeText1: "  ",
      linkurl1: " this page ",
      planeText2: "with URL:",
      description2: ` https://phoenix-gambling.com/license/commerce/callback/- `,
      linkurl2: "",
      description3: ``,
    },
  ];
  const tokenData = [
    {
      key: "ID",
      value: "node_eth_usdt",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "eth_usdt",
      description: "",
    },
    {
      key: "USD Price",
      value: "$1.00",
      description: "",
    },
    {
      key: "Chains",
      value: "Ethereum (ERC20)",
      description: "",
    },
    {
      key: "L1 Node URL)",
      value: "",
      description: "Ethereum L1 node url",
    },
    {
      key: "Min. withdrawal (USD)",
      value: "",
      description: "Minimal withdrawal order",
    },
    {
      key: "Free demo balance",
      value: "",
      description: "Free demo balance.",
      description1:
        "Demo balance cannot be withdrawn or converted into real balance.",
    },
    {
      key: `Min. bet amount to appear in "High Rollers"`,
      value: "",
      description: "",
    },
    {
      key: "Trivia answer reward ",
      value: "",
      description: "Reward amount for correctly answering trivia question",
    },
    {
      key: "Rain reward amount",
      value: "",
      description:
        "Rain is a free reward available to random people who deposited any amount in the last 24 hours.",
    },
    {
      key: "Active referral reward",
      value: "",
      description: "Referrers are rewarded if their affiliate is active",
    },
  ];
  const bitcoinData = [
    {
      key: "ID",
      value: "commerce_bitcoin",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "btc",
      description: "",
    },
    {
      key: "USD Price",
      value: "$61439.00000000",
      description: "",
    },
    {
      key: "Min. withdrawal (USD)",
      value: "",
      description: "Minimal withdrawal order",
    },
    {
      key: "Free demo balance",
      value: "",
      description: "Free demo balance.",
      description1:
        "Demo balance cannot be withdrawn or converted into real balance.",
    },
    {
      key: `Min. bet amount to appear in "High Rollers"`,
      value: "",
      description: "",
    },
    {
      key: "Trivia answer reward ",
      value: "",
      description: "Reward amount for correctly answering trivia question",
    },
    {
      key: "Rain reward amount",
      value: "",
      description:
        "Rain is a free reward available to random people who deposited any amount in the last 24 hours.",
    },
    {
      key: "Active referral reward",
      value: "",
      description: "Referrers are rewarded if their affiliate is active",
    },
  ];
  const ethereumData = [
    {
      key: "ID",
      value: "commerce_ethereum",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "eth",
      description: "",
    },
    {
      key: "USD Price",
      value: "$3389.09000000",
      description: "",
    },
    {
      key: "Min. withdrawal (USD)",
      value: "",
      description: "Minimal withdrawal order",
    },
    {
      key: "Free demo balance",
      value: "",
      description: "Free demo balance.",
      description1:
        "Demo balance cannot be withdrawn or converted into real balance.",
    },
    {
      key: `Min. bet amount to appear in "High Rollers"`,
      value: "",
      description: "",
    },
    {
      key: "Trivia answer reward ",
      value: "",
      description: "Reward amount for correctly answering trivia question",
    },
    {
      key: "Rain reward amount",
      value: "",
      description:
        "Rain is a free reward available to random people who deposited any amount in the last 24 hours.",
    },
    {
      key: "Active referral reward",
      value: "",
      description: "Referrers are rewarded if their affiliate is active",
    },
  ];
  const dogecoinData = [
    {
      key: "ID",
      value: "commerce_dogecoin",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "doge",
      description: "",
    },
    {
      key: "USD Price",
      value: "$0.12899300",
      description: "",
    },
    {
      key: "Min. withdrawal (USD)",
      value: "",
      description: "Minimal withdrawal order",
    },
    {
      key: "Free demo balance",
      value: "",
      description: "Free demo balance.",
      description1:
        "Demo balance cannot be withdrawn or converted into real balance.",
    },
    {
      key: `Min. bet amount to appear in "High Rollers"`,
      value: "",
      description: "",
    },
    {
      key: "Trivia answer reward ",
      value: "",
      description: "Reward amount for correctly answering trivia question",
    },
    {
      key: "Rain reward amount",
      value: "",
      description:
        "Rain is a free reward available to random people who deposited any amount in the last 24 hours.",
    },
    {
      key: "Active referral reward",
      value: "",
      description: "Referrers are rewarded if their affiliate is active",
    },
  ];
  const daicoinData = [
    {
      key: "ID",
      value: "commerce_eth_dai",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "dai",
      description: "",
    },
    {
      key: "Min. withdrawal (USD)",
      value: "",
      description: "Minimal withdrawal order",
    },
    {
      key: "Free demo balance",
      value: "",
      description: "Free demo balance.",
      description1:
        "Demo balance cannot be withdrawn or converted into real balance.",
    },
    {
      key: `Min. bet amount to appear in "High Rollers"`,
      value: "",
      description: "",
    },
    {
      key: "Trivia answer reward ",
      value: "",
      description: "Reward amount for correctly answering trivia question",
    },
    {
      key: "Rain reward amount",
      value: "",
      description:
        "Rain is a free reward available to random people who deposited any amount in the last 24 hours.",
    },
    {
      key: "Active referral reward",
      value: "",
      description: "Referrers are rewarded if their affiliate is active",
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
      <CustomAccordion
        buttonName="Configuration"
        description="Coinbase Commerce"
        icon={
          <SettingsIcon
            fontSize="large"
            sx={{ color: "#9aa1ff !important", marginRight: "20px" }}
          />
        }
        bordercolor="#9aa1ff"
        buttoncolor="#6c51d7"
      >
        <BoxComponent data={Configuration} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Token"
        description="USTD"
        icon={
          <svg
            className="svg-inline--fa fa-tether fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 32 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{ color: "lightgreen", width: "25px", marginRight: "25px" }}
          >
            <path
              fill="currentColor"
              d="M15.906 1.006c0.906-0.006 1.381 0.025 2 0.119 0.444 0.069 1.081 0.175 1.406 0.244s0.975 0.256 1.438 0.413c0.462 0.163 1.069 0.394 1.344 0.519s0.756 0.369 1.063 0.531c0.306 0.169 0.844 0.494 1.188 0.719 0.344 0.231 0.881 0.625 1.188 0.881s0.819 0.725 1.125 1.038c0.306 0.313 0.756 0.806 0.988 1.094 0.238 0.294 0.625 0.825 0.869 1.188 0.238 0.363 0.65 1.094 0.919 1.625 0.262 0.531 0.6 1.319 0.744 1.75s0.331 1.075 0.419 1.438c0.081 0.363 0.212 1.044 0.281 1.512 0.087 0.594 0.125 1.188 0.125 1.894 0 0.694-0.044 1.325-0.125 1.919-0.069 0.494-0.206 1.231-0.306 1.644s-0.281 1.031-0.406 1.375c-0.119 0.344-0.325 0.881-0.462 1.188s-0.394 0.831-0.575 1.156c-0.181 0.325-0.519 0.875-0.756 1.219s-0.663 0.906-0.95 1.25c-0.288 0.344-0.8 0.881-1.144 1.2-0.337 0.313-0.813 0.725-1.056 0.913s-0.706 0.512-1.031 0.725c-0.325 0.219-0.875 0.544-1.219 0.725s-0.95 0.462-1.344 0.619c-0.394 0.156-0.956 0.356-1.25 0.444s-0.837 0.231-1.219 0.313c-0.381 0.081-0.944 0.181-1.25 0.231-0.337 0.050-1.106 0.081-1.906 0.081-0.963 0-1.55-0.031-2.063-0.106-0.394-0.063-1.056-0.194-1.469-0.294s-1.031-0.281-1.375-0.406c-0.344-0.119-0.881-0.325-1.188-0.462s-0.831-0.394-1.156-0.575c-0.325-0.181-0.831-0.494-1.125-0.688s-0.713-0.506-0.938-0.681c-0.225-0.181-0.644-0.544-0.931-0.806s-0.794-0.788-1.119-1.169c-0.319-0.381-0.775-0.969-1.013-1.313-0.231-0.344-0.563-0.881-0.737-1.188s-0.431-0.831-0.575-1.156c-0.144-0.325-0.369-0.9-0.5-1.281-0.125-0.381-0.306-0.994-0.394-1.375-0.094-0.381-0.225-1.075-0.294-1.55-0.087-0.587-0.125-1.175-0.125-1.887 0-0.694 0.044-1.325 0.125-1.925 0.069-0.488 0.206-1.225 0.306-1.637s0.281-1.031 0.406-1.375c0.119-0.344 0.331-0.894 0.475-1.219s0.4-0.85 0.575-1.156c0.175-0.306 0.506-0.844 0.744-1.188 0.231-0.344 0.613-0.85 0.844-1.125s0.563-0.65 0.737-0.838c0.175-0.181 0.625-0.6 1.006-0.925 0.375-0.325 1.050-0.837 1.5-1.144 0.444-0.3 1.006-0.644 1.25-0.769 0.238-0.119 0.731-0.344 1.094-0.5 0.363-0.15 0.963-0.375 1.344-0.5 0.381-0.119 0.956-0.281 1.281-0.356 0.325-0.069 0.919-0.181 1.313-0.244 0.488-0.081 1.1-0.119 1.906-0.125zM9.5 12h5v2.063c-0.438 0-0.975 0.044-1.488 0.094-0.506 0.056-1.175 0.137-1.481 0.188-0.306 0.056-0.9 0.181-1.313 0.281s-0.95 0.262-1.188 0.363c-0.244 0.094-0.606 0.287-0.806 0.425-0.206 0.131-0.438 0.344-0.519 0.463s-0.169 0.344-0.188 0.5c-0.031 0.212-0.006 0.35 0.094 0.563 0.075 0.169 0.25 0.375 0.431 0.519 0.162 0.131 0.469 0.319 0.675 0.419 0.206 0.094 0.556 0.238 0.781 0.306 0.225 0.075 0.713 0.2 1.094 0.288 0.381 0.081 0.981 0.194 1.344 0.244 0.363 0.056 1.088 0.131 1.613 0.175l0.95 0.081v6.031h3v-6.063c0.438 0 0.994-0.044 1.512-0.1 0.525-0.050 1.325-0.163 1.769-0.244s1.056-0.225 1.356-0.313c0.306-0.087 0.712-0.219 0.906-0.3 0.2-0.081 0.519-0.244 0.706-0.369s0.425-0.331 0.519-0.469c0.1-0.131 0.188-0.363 0.212-0.519 0.031-0.225 0.006-0.344-0.113-0.587-0.1-0.206-0.262-0.394-0.462-0.55-0.175-0.125-0.538-0.331-0.813-0.444-0.275-0.119-0.85-0.306-1.281-0.412s-1.038-0.238-1.344-0.287c-0.306-0.050-0.988-0.137-1.5-0.188-0.519-0.050-1.056-0.094-1.206-0.094h-0.262v-2.063h5v-3h-13zM14.5 15.063v1.938h3v-1.969l0.7 0.050c0.387 0.025 1.087 0.1 1.55 0.169 0.462 0.063 1.056 0.162 1.313 0.219 0.256 0.050 0.706 0.169 1 0.256 0.294 0.094 0.669 0.231 0.844 0.313 0.169 0.081 0.375 0.206 0.45 0.275 0.081 0.069 0.144 0.15 0.144 0.188s-0.038 0.1-0.081 0.137c-0.044 0.044-0.175 0.144-0.294 0.219s-0.512 0.231-0.875 0.35c-0.363 0.119-0.95 0.275-1.313 0.35-0.363 0.069-0.981 0.169-1.375 0.225-0.394 0.050-1.144 0.119-1.656 0.156-0.519 0.031-1.375 0.063-1.906 0.063s-1.394-0.031-1.906-0.063c-0.519-0.038-1.262-0.106-1.656-0.156-0.394-0.056-1-0.15-1.344-0.225-0.344-0.069-0.863-0.2-1.156-0.288s-0.675-0.225-0.844-0.306c-0.175-0.081-0.375-0.206-0.456-0.275-0.075-0.069-0.137-0.15-0.137-0.188s0.050-0.106 0.106-0.163c0.063-0.056 0.269-0.181 0.456-0.275s0.581-0.244 0.875-0.331c0.294-0.094 0.813-0.219 1.156-0.287s0.95-0.169 1.344-0.219c0.394-0.056 0.831-0.106 0.969-0.119s0.438-0.025 1.094-0.044z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="#6c51d7"
      >
        <TokenBox data={tokenData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="Bitcoin"
        icon={
          <svg
            className="svg-inline--fa fa-btc-icon fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 512 512"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(247, 147, 26)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={bitcoinData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="Ethereum"
        icon={
          <svg
            className="svg-inline--fa fa-eth fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 32 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(98, 126, 234)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M26.535 18.061l-10.517 3.895-10.518-3.895 10.518-18.061z
                                   M26.076 20.231l-10.058 11.769-10.058-11.769 10.058 3.725z
                                   M16.018 23.956l10.058-3.725-10.058 11.769z
                                   M26.535 18.061l-10.517 3.895v-21.957z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={ethereumData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="Dogecoin"
        icon={
          <svg
            className="svg-inline--fa fa-dogecoin fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 32 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(194, 166, 51)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M16.416 10.565c-0.856 0-2.291 0-2.291 0v4.515h3.604v1.891h-3.604v4.515c0 0 1.785 0 2.402 0s5.068 0.070 5.062-5.254c-0.007-5.323-4.316-5.668-5.173-5.668z
                                       M16.031 0c-8.854 0-16.031 7.177-16.031 16.031s7.177 16.031 16.031 16.031c8.854 0 16.031-7.177 16.031-16.031s-7.177-16.031-16.031-16.031zM16.661 24.689h-5.806v-7.718h-2.046v-1.891h2.046v-7.719c0 0 3.804 0 4.983 0s8.986-0.245 8.986 8.809c0 9.203-8.163 8.519-8.163 8.519z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={dogecoinData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="DAI"
        icon={
          <svg
            className="svg-inline--fa fa-dai fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 37 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(244, 173, 39)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M11.815 1.158c5.872 0 6.364 0.007 7.5 0.145 0.666 0.087 1.586 0.232 2.042 0.333 0.456 0.109 1.209 0.319 1.665 0.478 0.456 0.152 1.274 0.492 1.81 0.753s1.253 0.659 1.593 0.876c0.34 0.224 0.811 0.55 1.050 0.738 0.239 0.181 0.724 0.608 1.079 0.948 0.348 0.34 0.876 0.905 1.166 1.267s0.717 0.941 0.948 1.303c0.232 0.362 0.594 1.028 0.804 1.484 0.217 0.456 0.427 0.912 0.572 1.195l1.824 0.036c1.52 0.029 1.839 0.058 1.897 0.145 0.036 0.058 0.072 0.775 0.072 1.593 0 1.072-0.022 1.506-0.087 1.578-0.065 0.065-0.449 0.087-1.426 0.087-0.746 0-1.376 0.029-1.419 0.058s-0.072 0.717-0.072 3.555l0.217 0.036c0.116 0.029 0.746 0.043 1.397 0.043 0.948 0 1.195 0.022 1.281 0.109s0.109 0.362 0.109 1.52c0 0.796-0.029 1.477-0.072 1.557-0.072 0.138-0.145 0.145-1.861 0.145-1.339 0-1.824 0.022-1.919 0.087-0.065 0.051-0.253 0.405-0.42 0.782s-0.456 0.963-0.652 1.303c-0.188 0.34-0.594 0.941-0.89 1.339s-0.862 1.043-1.26 1.426c-0.391 0.391-1.021 0.956-1.397 1.253-0.376 0.304-0.963 0.717-1.303 0.912-0.34 0.203-0.941 0.521-1.339 0.717s-1.209 0.514-1.81 0.709c-0.594 0.203-1.397 0.427-1.774 0.514-0.376 0.080-1.231 0.21-1.897 0.297-1.137 0.138-1.614 0.145-13.886 0.145v-9.412l-4.090-0.036-0.014-1.593c-0.014-1.18 0.007-1.614 0.072-1.687s0.514-0.094 1.955-0.087c1.021 0 1.911-0.014 1.969-0.036 0.094-0.029 0.109-0.297 0.109-3.584h-1.897c-1.050 0-1.976-0.014-2.23-0.072v-3.33h1.919c1.137 0 1.976-0.029 2.063-0.072 0.145-0.072 0.145-0.138 0.13-4.728-0.014-3.917 0-4.67 0.087-4.742 0.080-0.065 1.6-0.087 6.386-0.087zM8.673 7.616c0.014 2.744 0.029 3.178 0.123 3.207 0.058 0.022 4.409 0.036 9.665 0.036s9.607-0.014 9.665-0.036c0.080-0.029 0.094-0.087 0.043-0.232-0.029-0.116-0.145-0.362-0.246-0.565-0.094-0.195-0.369-0.623-0.594-0.941-0.232-0.319-0.637-0.818-0.898-1.108s-0.688-0.702-0.948-0.912c-0.261-0.21-0.717-0.543-1.014-0.746s-0.869-0.529-1.267-0.724c-0.398-0.203-0.999-0.463-1.339-0.586-0.34-0.116-0.905-0.282-1.267-0.362-0.355-0.087-0.97-0.188-1.354-0.224-0.427-0.051-2.657-0.080-5.582-0.080-2.686 0-4.901 0.022-4.938 0.051-0.036 0.022-0.058 1.477-0.051 3.222zM8.673 16.014l0.014 1.723h20.561c0.065-0.362 0.072-1.151 0.058-1.976-0.014-1.238-0.043-1.513-0.13-1.571-0.065-0.043-3.982-0.072-10.208-0.072-7.761 0-10.129 0.022-10.208 0.087-0.080 0.072-0.101 0.413-0.087 1.81zM8.702 24.471l0.022 3.077c8.767 0.036 9.629 0.022 10.425-0.080 0.514-0.065 1.303-0.21 1.738-0.319 0.442-0.116 1.006-0.29 1.267-0.391 0.261-0.094 0.796-0.333 1.195-0.514 0.398-0.188 1.014-0.543 1.376-0.789 0.355-0.239 0.919-0.702 1.253-1.021 0.34-0.319 0.818-0.84 1.064-1.158 0.253-0.319 0.623-0.854 0.825-1.195s0.369-0.673 0.369-0.738c0-0.123-0.514-0.13-9.738-0.13-7.725 0-9.752 0.022-9.774 0.094-0.022 0.043-0.029 1.47-0.022 3.164z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={daicoinData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="SHIBA"
        icon={
          <svg
            className="svg-inline--fa fa-dai fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 37 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(244, 173, 39)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M11.815 1.158c5.872 0 6.364 0.007 7.5 0.145 0.666 0.087 1.586 0.232 2.042 0.333 0.456 0.109 1.209 0.319 1.665 0.478 0.456 0.152 1.274 0.492 1.81 0.753s1.253 0.659 1.593 0.876c0.34 0.224 0.811 0.55 1.050 0.738 0.239 0.181 0.724 0.608 1.079 0.948 0.348 0.34 0.876 0.905 1.166 1.267s0.717 0.941 0.948 1.303c0.232 0.362 0.594 1.028 0.804 1.484 0.217 0.456 0.427 0.912 0.572 1.195l1.824 0.036c1.52 0.029 1.839 0.058 1.897 0.145 0.036 0.058 0.072 0.775 0.072 1.593 0 1.072-0.022 1.506-0.087 1.578-0.065 0.065-0.449 0.087-1.426 0.087-0.746 0-1.376 0.029-1.419 0.058s-0.072 0.717-0.072 3.555l0.217 0.036c0.116 0.029 0.746 0.043 1.397 0.043 0.948 0 1.195 0.022 1.281 0.109s0.109 0.362 0.109 1.52c0 0.796-0.029 1.477-0.072 1.557-0.072 0.138-0.145 0.145-1.861 0.145-1.339 0-1.824 0.022-1.919 0.087-0.065 0.051-0.253 0.405-0.42 0.782s-0.456 0.963-0.652 1.303c-0.188 0.34-0.594 0.941-0.89 1.339s-0.862 1.043-1.26 1.426c-0.391 0.391-1.021 0.956-1.397 1.253-0.376 0.304-0.963 0.717-1.303 0.912-0.34 0.203-0.941 0.521-1.339 0.717s-1.209 0.514-1.81 0.709c-0.594 0.203-1.397 0.427-1.774 0.514-0.376 0.080-1.231 0.21-1.897 0.297-1.137 0.138-1.614 0.145-13.886 0.145v-9.412l-4.090-0.036-0.014-1.593c-0.014-1.18 0.007-1.614 0.072-1.687s0.514-0.094 1.955-0.087c1.021 0 1.911-0.014 1.969-0.036 0.094-0.029 0.109-0.297 0.109-3.584h-1.897c-1.050 0-1.976-0.014-2.23-0.072v-3.33h1.919c1.137 0 1.976-0.029 2.063-0.072 0.145-0.072 0.145-0.138 0.13-4.728-0.014-3.917 0-4.67 0.087-4.742 0.080-0.065 1.6-0.087 6.386-0.087zM8.673 7.616c0.014 2.744 0.029 3.178 0.123 3.207 0.058 0.022 4.409 0.036 9.665 0.036s9.607-0.014 9.665-0.036c0.080-0.029 0.094-0.087 0.043-0.232-0.029-0.116-0.145-0.362-0.246-0.565-0.094-0.195-0.369-0.623-0.594-0.941-0.232-0.319-0.637-0.818-0.898-1.108s-0.688-0.702-0.948-0.912c-0.261-0.21-0.717-0.543-1.014-0.746s-0.869-0.529-1.267-0.724c-0.398-0.203-0.999-0.463-1.339-0.586-0.34-0.116-0.905-0.282-1.267-0.362-0.355-0.087-0.97-0.188-1.354-0.224-0.427-0.051-2.657-0.080-5.582-0.080-2.686 0-4.901 0.022-4.938 0.051-0.036 0.022-0.058 1.477-0.051 3.222zM8.673 16.014l0.014 1.723h20.561c0.065-0.362 0.072-1.151 0.058-1.976-0.014-1.238-0.043-1.513-0.13-1.571-0.065-0.043-3.982-0.072-10.208-0.072-7.761 0-10.129 0.022-10.208 0.087-0.080 0.072-0.101 0.413-0.087 1.81zM8.702 24.471l0.022 3.077c8.767 0.036 9.629 0.022 10.425-0.080 0.514-0.065 1.303-0.21 1.738-0.319 0.442-0.116 1.006-0.29 1.267-0.391 0.261-0.094 0.796-0.333 1.195-0.514 0.398-0.188 1.014-0.543 1.376-0.789 0.355-0.239 0.919-0.702 1.253-1.021 0.34-0.319 0.818-0.84 1.064-1.158 0.253-0.319 0.623-0.854 0.825-1.195s0.369-0.673 0.369-0.738c0-0.123-0.514-0.13-9.738-0.13-7.725 0-9.752 0.022-9.774 0.094-0.022 0.043-0.029 1.47-0.022 3.164z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={daicoinData} />
      </CustomAccordion>
    </Box>
  );
};

export default Wallet;
