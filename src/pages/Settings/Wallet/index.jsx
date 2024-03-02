import {
  Box,
  Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CustomAccordion from "./CustomAccordion";
import BoxComponent from "./BoxComponent";
import TokenBox from "./TokenBox";
import UsdcToken from "./UsdcToken";

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
  const litcoinData = [
    {
      key: "ID",
      value: "commerce_litecoin",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "ltc",
      description: "",
    },
    {
      key: "USD Price",
      value: "$82.88000000",
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
  const bitcoinCashData = [
    {
      key: "ID",
      value: "commerce_bitcoincash",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "bch",
      description: "",
    },
    {
      key: "USD Price",
      value: "$310.38000000",
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
  const shibacoinData = [
    {
      key: "ID",
      value: "commerce_shibainu",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "shiba",
      description: "",
    },
    {
      key: "USD Price",
      value: "$0.00001468",
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
  const maticcoinData = [
    {
      key: "ID",
      value: "commerce_polygon:matic",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "matic",
      description: "",
    },
    {
      key: "USD Price",
      value: "$1.02100000",
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
  const apecoinData = [
    {
      key: "ID",
      value: "commerce_ape",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "ape",
      description: "",
    },
    {
      key: "USD Price",
      value: "$1.99000000",
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
  const usdcTokenData = [
    {
      key: "ID",
      value: "token_usdc",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "usdc",
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
  const solanaTokenData = [
    {
      key: "ID",
      value: "native_sol",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "sol",
      description: "",
    },
    {
      key: "USD Price",
      value: "$131.80000000",
      description: "",
    },
    {
      key: "Chains",
      value: "Ethereum (ERC20)",
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
    {
      key: "Required confirmations",
      value: "",
      description: "Deposit will be accepted after X number of confirmations",
    },
  ];
  const ethereumNode = [
    {
      key: "ID",
      value: "node_eth",
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
      key: "Base Node URL",
      value: "",
      description: "Ethereum Base node url",
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
  const bitcoinNodeData = [
    {
      key: "ID",
      value: "native_btc",
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
      key: "RPC URL",
      value: "",
      description: "",
    },
    { key: "Transfer deposits to this address", value: "", description: "" },
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
  const ltccoinNodeData = [
    {
      key: "ID",
      value: "native_ltc",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "ltc",
      description: "",
    },
    {
      key: "USD Price",
      value: "$82.88000000",
      description: "",
    },
    {
      key: "RPC URL",
      value: "",
      description: "",
    },
    { key: "Transfer deposits to this address", value: "", description: "" },
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
  const dogecoinNodeData = [
    {
      key: "ID",
      value: "native_doge",
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
      key: "RPC URL",
      value: "",
      description: "",
    },
    { key: "Transfer deposits to this address", value: "", description: "" },
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
  const btccashcoinNodeData = [
    {
      key: "ID",
      value: "native_bch",
      description: "",
    },
    {
      key: "Wallet ID",
      value: "bch",
      description: "",
    },
    {
      key: "USD Price",
      value: "$310.38000000",
      description: "",
    },
    {
      key: "RPC URL",
      value: "",
      description: "",
    },
    { key: "Transfer deposits to this address", value: "", description: "" },
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
      {/* etherium */}
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
      {/* litcoin */}
      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="Litecoin"
        icon={
          <svg
            className="svg-inline--fa fa-ltc fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 32 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(191, 187, 187)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M16 0c-8.794 0-16 7.206-16 16s7.206 16 16 16 16-7.206 16-16-7.206-16-16-16zM25.972 25.972c-2.678 2.678-6.22 4.153-9.972 4.153s-7.294-1.475-9.972-4.153c-2.678-2.678-4.153-6.22-4.153-9.972s1.475-7.294 4.153-9.972c2.678-2.678 6.22-4.153 9.972-4.153s7.294 1.475 9.972 4.153c2.678 2.678 4.153 6.22 4.153 9.972s-1.475 7.294-4.153 9.972z
                                   M24.646 7.354c-2.324-2.324-5.395-3.604-8.646-3.604s-6.322 1.28-8.646 3.604c-2.324 2.324-3.604 5.395-3.604 8.646s1.28 6.322 3.604 8.646c2.324 2.324 5.395 3.604 8.646 3.604s6.322-1.28 8.646-3.604c2.324-2.324 3.604-5.395 3.604-8.646s-1.28-6.322-3.604-8.646zM20.688 22.563h-9.675l1.8-6.281-3.188 0.637-0.375-1.837 4.125-0.825 1.725-6.019 1.8 0.525-1.462 5.081 3.188-0.637 0.375 1.837-4.125 0.825-1.387 4.819h7.2z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={litcoinData} />
      </CustomAccordion>
      {/* bitcoin cash */}
      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="Bitcoin Cash"
        icon={
          <svg
            className="svg-inline--fa fa-bch fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 32 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(141, 195, 81)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z
                                   M20.305 9.75c-1.070-1.83-3-1.705-5.19-0.92l-1.235-2.66-1.615 0.75 1.2 2.58-1.285 0.615-1.18-2.615-1.615 0.745 1.23 2.655c-0.345 0.17-0.69 0.34-1.025 0.5v0l-2.23 1.030 0.8 1.73s1.18-0.58 1.17-0.545c0.139-0.089 0.308-0.141 0.49-0.141 0.321 0 0.603 0.164 0.768 0.413l0.002 0.003 1.4 3.025 0.175-0.070-0.17 0.080 1.965 4.24c0.029 0.070 0.046 0.152 0.046 0.237 0 0.277-0.179 0.512-0.427 0.597l-0.004 0.001c0.030 0-1.175 0.545-1.175 0.545l0.57 2.080 2.105-0.975 1.16-0.525 1.265 2.67 1.615-0.745-1.23-2.66c0.445-0.195 0.875-0.39 1.295-0.585l1.225 2.645 1.595-0.75-1.24-2.7c2.645-1.415 4.23-3 3.285-5.64-0.76-2.145-2.155-2.615-3.865-2.27 0.715-0.89 0.91-2 0.125-3.34zM20.7 16.54c0.935 2-2.61 3.37-3.705 3.88l-1.645-3.56c1.095-0.505 4.385-2.415 5.35-0.32zM17.625 11.87c0.845 1.825-2.12 2.94-3.030 3.36l-1.495-3.23c0.9-0.42 3.645-2.035 4.525-0.13z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={bitcoinCashData} />
        {/* <UsdcToken data={ltccoinNodeData} enableButton={true} content="You can only use one type at once. Disable another type of LTC before enabling this."/> */}
      </CustomAccordion>
      {/* dogecoin  */}
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
      {/* dai */}
      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="SHIBA"
        icon={
          <svg
            className="svg-inline--fa fa-shib fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 30 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(255, 164, 9)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M2.209 0.51c0.175 0 0.445 0.095 0.758 0.262 0.277 0.146 0.707 0.415 0.969 0.598 0.262 0.19 0.853 0.634 1.312 0.991s1.246 0.984 1.749 1.385c0.503 0.401 1.188 0.984 1.531 1.283 0.343 0.306 0.78 0.758 0.984 1.013 0.284 0.35 0.401 0.452 0.51 0.423 0.080-0.022 0.488-0.16 0.911-0.306 0.423-0.138 1.108-0.328 1.531-0.408 0.51-0.102 1.174-0.168 2.005-0.197 0.736-0.022 1.538 0 1.968 0.051 0.401 0.044 1.042 0.153 1.421 0.233s1.057 0.262 2.311 0.685l0.226-0.328c0.124-0.182 0.561-0.656 0.977-1.064 0.416-0.401 1.392-1.239 2.172-1.866 0.78-0.62 1.779-1.378 2.223-1.684 0.445-0.299 1.057-0.671 1.363-0.809 0.313-0.146 0.649-0.262 0.751-0.262s0.248 0.036 0.328 0.073c0.109 0.051 0.16 0.19 0.219 0.532 0.036 0.248 0.109 0.875 0.16 1.4 0.051 0.569 0.087 2.15 0.095 6.998l-0.321 1.203c-0.175 0.663-0.408 1.414-0.51 1.677s-0.313 0.649-0.736 1.239l0.139 0.277c0.073 0.146 0.27 0.598 0.43 0.999s0.379 1.006 0.481 1.349c0.102 0.343 0.255 0.933 0.335 1.312 0.087 0.379 0.219 1.152 0.299 1.713 0.073 0.561 0.139 1.239 0.139 1.516 0 0.27-0.015 0.539-0.036 0.598-0.029 0.080-0.109 0.036-0.328-0.182-0.16-0.16-0.496-0.386-0.751-0.503-0.248-0.117-0.678-0.262-0.962-0.328-0.284-0.058-0.773-0.131-1.093-0.16-0.408-0.029-0.787-0.007-1.276 0.073-0.379 0.073-0.904 0.211-1.166 0.321s-0.7 0.35-0.984 0.539c-0.284 0.182-0.795 0.634-1.786 1.662l-0.306-0.525c-0.182-0.328-0.539-0.773-0.926-1.159-0.401-0.401-0.838-0.751-1.21-0.969-0.321-0.182-0.831-0.416-1.13-0.51-0.299-0.102-0.758-0.211-1.021-0.255s-0.671-0.080-0.911-0.080c-0.241 0-0.649 0.036-0.911 0.073-0.262 0.044-0.685 0.146-0.948 0.233-0.262 0.080-0.7 0.27-0.984 0.416-0.277 0.146-0.707 0.416-0.948 0.612-0.241 0.19-0.627 0.569-0.86 0.838-0.226 0.27-0.518 0.685-0.649 0.926-0.124 0.241-0.241 0.445-0.248 0.459-0.015 0.007-0.131-0.109-0.262-0.255-0.131-0.153-0.401-0.437-0.605-0.627-0.197-0.197-0.561-0.488-0.802-0.656-0.241-0.16-0.671-0.408-0.948-0.539s-0.722-0.292-0.984-0.364c-0.343-0.095-0.744-0.124-1.458-0.124-0.663 0-1.144 0.044-1.48 0.124-0.27 0.066-0.678 0.211-0.904 0.321-0.233 0.109-0.532 0.299-0.656 0.423-0.226 0.204-0.241 0.211-0.27 0.073-0.022-0.080-0.051-0.284-0.073-0.452-0.022-0.175-0.007-0.714 0.036-1.203 0.044-0.496 0.139-1.225 0.219-1.625s0.284-1.152 0.459-1.677c0.175-0.525 0.503-1.334 1.137-2.661l-0.292-0.379c-0.16-0.211-0.394-0.59-0.51-0.838-0.124-0.255-0.284-0.649-0.357-0.875-0.080-0.233-0.226-0.736-0.321-1.115-0.131-0.496-0.197-0.991-0.233-1.749-0.029-0.583-0.015-1.91 0.029-2.952s0.131-2.42 0.197-3.062c0.058-0.641 0.153-1.356 0.211-1.596 0.058-0.233 0.146-0.452 0.197-0.488s0.219-0.066 0.372-0.066zM2.77 3.353c-0.066 0.117-0.124 0.714-0.16 1.64-0.044 0.94-0.036 1.91 0.007 2.733 0.044 0.765 0.131 1.494 0.219 1.822 0.073 0.299 0.211 0.692 0.299 0.875 0.095 0.182 0.335 0.503 0.539 0.714s0.408 0.379 0.445 0.379c0.044 0 0.211-0.211 0.379-0.459s0.561-0.765 0.882-1.144c0.313-0.379 0.867-0.948 1.225-1.261s0.948-0.765 1.305-1.013c0.364-0.241 0.663-0.459 0.678-0.488 0.015-0.022-0.036-0.109-0.109-0.197s-0.576-0.561-1.115-1.057c-0.539-0.496-1.195-1.101-1.458-1.334-0.262-0.241-0.736-0.634-1.057-0.867-0.321-0.241-0.744-0.51-0.948-0.605-0.197-0.095-0.466-0.175-0.59-0.175s-0.277 0.058-0.335 0.131c-0.066 0.066-0.153 0.204-0.204 0.306zM25.112 3.754c-0.277 0.211-1.086 0.926-1.786 1.582s-1.407 1.356-1.567 1.545c-0.292 0.35-0.292 0.35-0.139 0.474 0.087 0.066 0.423 0.328 0.758 0.59s0.962 0.853 1.407 1.312c0.445 0.459 1.086 1.188 1.429 1.626 0.343 0.43 0.649 0.78 0.685 0.78 0.029 0 0.204-0.146 0.401-0.313 0.197-0.19 0.437-0.518 0.576-0.787 0.131-0.255 0.284-0.678 0.343-0.94 0.066-0.262 0.153-0.918 0.197-1.458 0.051-0.583 0.066-1.698 0.051-2.733-0.036-1.494-0.058-1.793-0.175-2.070-0.080-0.175-0.197-0.35-0.262-0.379-0.073-0.036-0.226-0.066-0.343-0.066-0.109 0-0.401 0.102-0.634 0.226s-0.656 0.401-0.94 0.612zM7.18 12.268c-0.197 0.102-0.481 0.306-0.62 0.452-0.226 0.233-0.255 0.313-0.277 0.714-0.022 0.379 0 0.496 0.153 0.707 0.095 0.139 0.299 0.313 0.459 0.394 0.248 0.117 0.437 0.131 1.596 0.109 1.174-0.029 1.334-0.044 1.509-0.175 0.109-0.080 0.262-0.262 0.343-0.401 0.087-0.146 0.153-0.394 0.153-0.583 0-0.226-0.051-0.408-0.16-0.583-0.095-0.139-0.335-0.364-0.532-0.496-0.204-0.131-0.481-0.27-0.62-0.313-0.139-0.036-0.437-0.080-0.656-0.102-0.219-0.015-0.532 0-0.692 0.029-0.16 0.036-0.452 0.146-0.656 0.248zM20.199 12.45c-0.219 0.146-0.459 0.386-0.532 0.525-0.102 0.19-0.131 0.35-0.102 0.62 0.015 0.204 0.095 0.445 0.175 0.547 0.073 0.102 0.248 0.255 0.386 0.35 0.233 0.153 0.313 0.168 1.56 0.16 1.181 0 1.334-0.015 1.553-0.146 0.124-0.080 0.299-0.255 0.379-0.379 0.080-0.131 0.168-0.357 0.19-0.496 0.029-0.168 0-0.364-0.087-0.583-0.095-0.226-0.233-0.394-0.452-0.547-0.175-0.124-0.474-0.277-0.656-0.35-0.19-0.073-0.539-0.146-0.78-0.168-0.262-0.015-0.598 0.015-0.838 0.080-0.219 0.066-0.576 0.233-0.795 0.386zM6.057 15.891c-0.036 0.182-0.036 0.481 0 0.678 0.036 0.19 0.109 0.43 0.168 0.547 0.051 0.109 0.211 0.306 0.343 0.445 0.138 0.131 0.394 0.321 0.576 0.408s0.539 0.233 0.802 0.313c0.262 0.080 0.787 0.233 1.166 0.335s0.969 0.233 1.312 0.299c0.343 0.058 0.729 0.095 0.86 0.073 0.168-0.029 0.248-0.087 0.277-0.197 0.022-0.109-0.022-0.262-0.146-0.437-0.102-0.153-0.445-0.496-0.751-0.758-0.313-0.262-1.013-0.78-1.553-1.144s-1.21-0.773-1.494-0.904c-0.277-0.131-0.641-0.255-0.809-0.284-0.241-0.036-0.328-0.015-0.488 0.124-0.131 0.117-0.219 0.292-0.262 0.503zM22.123 15.708c-0.197 0.117-0.656 0.408-1.020 0.641-0.357 0.241-0.918 0.641-1.239 0.889s-0.758 0.641-0.962 0.867c-0.255 0.27-0.386 0.474-0.386 0.59 0 0.131 0.058 0.204 0.204 0.255 0.139 0.058 0.357 0.058 0.744-0.007 0.299-0.044 1.072-0.226 1.713-0.394 0.641-0.175 1.349-0.394 1.567-0.488 0.219-0.102 0.51-0.277 0.649-0.394 0.131-0.117 0.328-0.357 0.43-0.539 0.124-0.219 0.197-0.481 0.219-0.765 0.022-0.299-0.007-0.525-0.087-0.707-0.066-0.16-0.197-0.306-0.299-0.35s-0.241-0.073-0.306-0.073c-0.073 0.007-0.292 0.066-0.496 0.139-0.197 0.066-0.525 0.219-0.729 0.335zM15.001 19.98c0.248 0 0.692 0.036 0.984 0.095 0.284 0.058 0.758 0.19 1.035 0.299 0.284 0.109 0.722 0.335 0.984 0.503 0.262 0.175 0.649 0.488 0.867 0.707 0.211 0.219 0.488 0.539 0.62 0.722 0.124 0.175 0.394 0.671 0.962 1.859l0.474-0.656c0.255-0.357 0.649-0.838 0.867-1.057 0.219-0.226 0.569-0.518 0.765-0.656 0.204-0.131 0.598-0.357 0.875-0.488 0.306-0.146 0.78-0.292 1.166-0.357 0.539-0.095 0.78-0.102 1.349-0.036 0.379 0.044 0.904 0.146 1.166 0.233s0.612 0.248 0.787 0.364c0.168 0.117 0.328 0.284 0.357 0.379 0.022 0.087 0.044 0.306 0.036 0.488 0 0.182-0.087 0.554-0.197 0.838-0.102 0.284-0.321 0.736-0.488 1.020s-0.481 0.758-0.707 1.057c-0.226 0.299-0.722 0.867-1.101 1.268-0.379 0.394-1.006 0.984-1.385 1.297-0.379 0.321-1.086 0.846-1.567 1.166s-1.334 0.802-1.895 1.079c-0.561 0.277-1.312 0.605-1.677 0.729-0.357 0.124-0.904 0.292-1.203 0.364s-0.933 0.204-1.4 0.284c-0.525 0.095-1.181 0.153-1.677 0.153-0.488 0-1.181-0.058-1.698-0.146-0.481-0.087-1.057-0.197-1.276-0.255s-0.714-0.204-1.093-0.328c-0.379-0.131-1.181-0.474-1.786-0.765-0.598-0.292-1.436-0.758-1.859-1.035s-1.093-0.773-1.494-1.093c-0.401-0.321-1.093-0.962-1.531-1.414-0.445-0.459-0.977-1.057-1.181-1.341-0.211-0.284-0.539-0.773-0.729-1.093s-0.415-0.795-0.51-1.057c-0.087-0.262-0.168-0.641-0.168-0.838-0.007-0.248 0.036-0.423 0.131-0.547 0.073-0.102 0.335-0.27 0.569-0.379s0.744-0.255 1.123-0.321c0.481-0.080 0.882-0.102 1.312-0.073 0.343 0.022 0.802 0.095 1.021 0.153s0.612 0.211 0.875 0.335c0.262 0.117 0.714 0.408 1.013 0.634s0.692 0.598 0.882 0.816c0.19 0.219 0.496 0.612 1.013 1.349l0.394-0.838c0.219-0.459 0.554-1.050 0.751-1.305 0.197-0.262 0.539-0.62 0.758-0.809 0.219-0.182 0.612-0.452 0.875-0.598s0.678-0.335 0.933-0.416c0.248-0.087 0.627-0.182 0.838-0.219 0.204-0.036 0.583-0.066 0.838-0.073zM13.011 21.795c-0.058 0.117-0.109 0.357-0.109 0.525 0 0.175 0.066 0.445 0.139 0.605s0.27 0.416 0.43 0.561c0.168 0.153 0.452 0.35 0.634 0.437l0.328 0.168v1.494c-0.765 0-1.261-0.036-1.604-0.073s-0.751-0.087-0.911-0.117l-0.292-0.044c0 2.099 0.029 2.712 0.058 2.712s0.211-0.153 0.408-0.35c0.241-0.233 0.386-0.459 0.466-0.729 0.102-0.306 0.146-0.372 0.255-0.335 0.066 0.022 0.401 0.109 0.743 0.19 0.445 0.102 0.867 0.146 1.494 0.146 0.496-0.007 1.093-0.051 1.385-0.117 0.284-0.058 0.598-0.139 0.714-0.182 0.109-0.044 0.233-0.080 0.27-0.080 0.044 0 0.073 0.066 0.073 0.146s0.066 0.284 0.153 0.452c0.087 0.175 0.241 0.408 0.35 0.518 0.102 0.117 0.248 0.241 0.321 0.277 0.117 0.058 0.124 0 0.080-0.94-0.029-0.547-0.015-1.174 0.015-1.385l0.066-0.386c-0.394 0.073-0.889 0.139-1.349 0.197s-0.977 0.102-1.144 0.102h-0.313v-1.531c0.313-0.124 0.561-0.277 0.758-0.423s0.416-0.372 0.488-0.488c0.073-0.117 0.16-0.364 0.204-0.547 0.051-0.211 0.051-0.423 0.007-0.583-0.036-0.139-0.168-0.357-0.292-0.474l-0.226-0.219c-2.916-0.036-3.032-0.029-3.251 0.109-0.131 0.080-0.292 0.248-0.35 0.364z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={shibacoinData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="MATIC"
        icon={
          <svg
            className="svg-inline--fa fa-matic fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 38.4 33.5"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(130, 71, 229)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3 c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7 c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1 L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={maticcoinData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Coinbase Commerce"
        description="APE"
        icon={
          <svg
            className="svg-inline--fa fa-apecoin fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 34 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "white",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M25.388 1.164c0.331 0.026 0.873 0.106 1.23 0.172 0.344 0.066 0.965 0.278 1.375 0.476 0.463 0.225 1.031 0.648 1.428 1.084 0.357 0.383 1.322 1.362 2.142 2.182 1.031 1.018 1.521 1.613 1.613 1.931 0.093 0.304 0.093 0.767 0.013 1.322-0.066 0.476-0.264 1.243-0.45 1.719-0.172 0.476-0.423 1.428-0.542 2.116s-0.37 1.534-0.542 1.891c-0.172 0.344-0.569 0.899-0.886 1.23-0.304 0.331-0.754 0.661-1.018 0.741-0.423 0.119-0.582 0.079-2.050-0.648-0.873-0.436-2.010-0.952-2.512-1.15-0.502-0.212-1.045-0.489-1.19-0.621-0.251-0.238-0.264-0.436-0.278-3.2 0-2.288-0.053-3.134-0.225-3.835-0.119-0.489-0.317-1.071-0.423-1.283-0.106-0.225-0.423-0.648-0.701-0.939-0.264-0.304-0.701-0.648-0.952-0.78s-0.701-0.291-0.992-0.37c-0.291-0.079-0.807-0.172-1.164-0.212-0.357-0.053-0.622-0.145-0.622-0.251 0-0.079 0.516-0.41 1.15-0.714 0.992-0.489 1.362-0.582 2.486-0.701 0.727-0.066 1.587-0.145 1.917-0.159 0.331-0.026 0.86-0.026 1.19 0zM25.891 16.926c0.119 0 0.476 0.119 0.793 0.264 0.304 0.145 0.555 0.344 0.555 0.423 0 0.093-0.145 0.383-0.344 0.635-0.185 0.251-0.41 0.608-0.489 0.793s-0.172 1.521-0.291 6.017l-0.529 0.965c-0.291 0.529-0.807 1.336-1.137 1.785s-0.833 0.965-1.124 1.15c-0.476 0.304-0.714 0.344-3.028 0.476-2.301 0.145-2.618 0.198-5.025 1.045l-3.174-0.013c-2.116 0-3.65-0.079-4.628-0.212-0.82-0.119-1.772-0.344-2.169-0.516-0.423-0.198-0.939-0.569-1.283-0.952-0.317-0.344-0.912-1.269-1.309-2.076s-0.701-1.507-0.661-1.587c0.040-0.079 0.225-0.093 0.423-0.040 0.212 0.053 0.489 0.212 0.635 0.357 0.212 0.198 0.37 0.238 0.82 0.172 0.529-0.093 0.582-0.066 0.767 0.304 0.106 0.225 0.304 0.45 0.423 0.516 0.132 0.066 0.41 0.093 0.635 0.053 0.251-0.040 0.463 0.013 0.595 0.145 0.106 0.106 0.423 0.291 0.688 0.397 0.278 0.119 0.82 0.225 1.19 0.225 0.383 0.013 0.833-0.013 0.992-0.066 0.212-0.053 0.317-0.198 0.331-0.45 0.040-0.291 0.093-0.344 0.37-0.317 0.185 0.026 0.489 0.238 0.688 0.502 0.304 0.37 0.463 0.45 0.86 0.45 0.317 0 0.688-0.119 0.992-0.331 0.278-0.185 0.621-0.331 0.767-0.331s0.291 0.053 0.331 0.132c0.040 0.079 0.198 0.132 0.357 0.132 0.172 0 0.436-0.132 0.608-0.304 0.159-0.159 0.291-0.37 0.291-0.463 0-0.119 0.159-0.132 0.555-0.079 0.542 0.079 0.595 0.066 0.978-0.423 0.278-0.344 0.45-0.463 0.502-0.357 0.040 0.093 0.225 0.172 0.41 0.172s0.423-0.026 0.529-0.066c0.106-0.040 0.251-0.304 0.331-0.595 0.079-0.331 0.238-0.582 0.423-0.674 0.172-0.079 0.476-0.317 0.701-0.516 0.225-0.185 0.635-0.423 0.926-0.489 0.291-0.079 0.979-0.225 1.521-0.304 0.542-0.093 1.15-0.251 1.349-0.344 0.212-0.106 0.463-0.317 0.569-0.489 0.106-0.159 0.238-0.714 0.304-1.217 0.066-0.516 0.198-1.071 0.291-1.256s0.463-0.846 0.82-1.494c0.423-0.741 0.727-1.15 0.873-1.15zM1.666 21.95c0.145 0.145 0.185 0.344 0.132 0.688-0.040 0.278-0.145 0.502-0.212 0.502-0.079 0-0.172-0.198-0.212-0.436-0.053-0.225-0.053-0.542 0-0.688 0.079-0.238 0.106-0.238 0.291-0.066zM11.372 2.75c0.185 0.040 0.807 0.291 1.388 0.555 0.582 0.278 1.269 0.529 1.521 0.569s0.701 0.013 0.992-0.053c0.291-0.066 1.124-0.172 1.851-0.238 0.82-0.079 1.719-0.079 2.34 0 0.569 0.066 1.283 0.225 1.587 0.37 0.317 0.132 0.793 0.489 1.058 0.793 0.331 0.344 0.608 0.859 0.793 1.428 0.264 0.82 0.291 1.19 0.304 3.941 0 2.539 0.040 3.121 0.225 3.504 0.132 0.264 0.41 0.555 0.661 0.674 0.238 0.119 0.767 0.317 1.164 0.45s1.256 0.476 1.891 0.78c0.635 0.291 1.15 0.595 1.15 0.674 0 0.066-0.132 0.264-0.304 0.436-0.159 0.159-0.37 0.291-0.463 0.291-0.079 0-0.555-0.185-1.058-0.41-0.489-0.212-1.269-0.516-1.745-0.661-0.569-0.172-1.045-0.238-1.388-0.185-0.291 0.040-0.846 0.251-1.23 0.463-0.529 0.304-0.741 0.529-0.926 0.952-0.132 0.317-0.45 0.767-0.701 0.992-0.251 0.238-0.661 0.608-1.375 1.203l-0.066 1.931c-0.066 1.745-0.093 1.944-0.357 2.221-0.185 0.198-0.357 0.264-0.489 0.198-0.172-0.079-0.198-0.238-0.119-0.939 0.093-0.701 0.066-0.873-0.093-0.939-0.106-0.040-0.793-0.013-1.521 0.066s-1.997 0.145-2.817 0.145c-0.807-0.013-1.587 0.040-1.719 0.106-0.159 0.079-0.37 0.040-0.688-0.132-0.251-0.145-0.714-0.251-1.031-0.251-0.304 0-0.582-0.066-0.621-0.132-0.040-0.079-0.251-0.106-0.463-0.066-0.331 0.053-0.463-0.013-0.78-0.37-0.344-0.383-0.463-0.423-1.164-0.436-0.423-0.013-0.952-0.079-1.164-0.159-0.225-0.079-0.608-0.198-0.859-0.278s-0.701-0.145-0.992-0.145c-0.291 0-0.648-0.093-0.793-0.198-0.145-0.119-0.37-0.198-0.502-0.198-0.119 0-0.251-0.066-0.291-0.132-0.040-0.079 0.582-0.807 1.375-1.626 0.793-0.807 1.507-1.64 1.587-1.851 0.079-0.198 0.106-0.516 0.053-0.727-0.040-0.198-0.185-0.595-0.317-0.886s-0.251-0.714-0.251-0.926c0-0.225 0.185-0.714 0.436-1.124 0.251-0.397 0.661-1.084 0.939-1.521 0.264-0.436 0.661-1.388 0.886-2.116s0.463-1.679 0.529-2.116c0.066-0.436 0.317-1.322 0.555-1.97 0.344-0.978 0.502-1.243 0.886-1.494 0.251-0.172 0.754-0.357 1.124-0.423 0.357-0.053 0.807-0.079 0.992-0.040zM9.931 5.25c-0.132 0.278-0.344 0.793-0.463 1.164-0.119 0.357-0.45 1.071-0.754 1.587-0.291 0.502-0.569 1.098-0.608 1.322-0.053 0.291 0.013 0.502 0.278 0.82 0.212 0.264 0.542 0.489 0.833 0.569 0.357 0.079 0.807 0.066 1.56-0.066 0.582-0.106 1.203-0.304 1.388-0.436 0.185-0.145 0.436-0.423 0.569-0.635 0.119-0.212 0.344-1.111 0.489-2.010 0.198-1.23 0.238-1.732 0.132-2.142-0.079-0.291-0.238-0.622-0.37-0.74-0.119-0.119-0.357-0.278-0.529-0.331-0.159-0.066-0.542-0.119-0.86-0.119s-0.727 0.106-0.992 0.264c-0.225 0.145-0.529 0.489-0.674 0.754zM16.159 5.58c-0.013 0.132 0.079 0.278 0.198 0.317 0.132 0.053 0.41-0.013 0.635-0.145 0.212-0.119 0.45-0.172 0.502-0.119 0.066 0.066-0.172 0.622-0.542 1.243-0.357 0.622-0.727 1.388-0.82 1.719-0.093 0.357-0.132 0.912-0.079 1.415 0.079 0.807 0.066 0.833-0.212 0.793-0.212-0.013-0.317-0.159-0.41-0.489-0.066-0.251-0.079-0.912-0.040-1.455 0.053-0.542 0.106-1.177 0.119-1.388 0.026-0.317-0.026-0.397-0.278-0.436-0.238-0.026-0.317 0.066-0.45 0.529-0.093 0.317-0.159 1.137-0.145 1.825 0.013 0.992 0.079 1.322 0.264 1.587 0.145 0.185 0.516 0.463 0.846 0.635 0.344 0.172 0.965 0.331 1.507 0.383 0.701 0.066 1.071 0.026 1.547-0.132 0.41-0.145 0.793-0.41 1.058-0.741 0.238-0.278 0.661-0.926 0.926-1.455 0.41-0.767 0.502-1.084 0.502-1.706 0-0.569-0.093-0.939-0.357-1.468-0.212-0.397-0.608-0.926-0.899-1.164-0.291-0.251-0.741-0.502-0.992-0.569-0.251-0.079-0.674-0.132-0.926-0.132s-0.793 0.159-1.19 0.357c-0.41 0.212-0.741 0.476-0.767 0.595zM7.326 12.866c-0.119 0.238-0.264 0.78-0.331 1.217s-0.278 1.243-0.463 1.785c-0.238 0.688-0.331 1.124-0.264 1.415 0.053 0.278 0.264 0.582 0.569 0.846 0.423 0.357 0.569 0.41 0.965 0.331 0.251-0.040 0.701-0.198 0.992-0.344 0.291-0.132 0.886-0.542 1.309-0.886 0.436-0.344 0.992-0.939 1.23-1.296 0.251-0.37 0.476-0.846 0.529-1.058 0.040-0.225 0.026-0.582-0.026-0.793-0.053-0.225-0.278-0.582-0.516-0.793-0.225-0.225-0.82-0.529-1.309-0.701-0.489-0.159-1.164-0.291-1.521-0.278-0.344 0-0.701 0.040-0.78 0.079-0.093 0.040-0.264 0.251-0.383 0.476zM23.63 16.264c0.383 0 0.846 0.053 1.031 0.132 0.185 0.066 0.331 0.212 0.331 0.291 0 0.093-0.357 0.82-0.793 1.626-0.608 1.111-0.807 1.626-0.873 2.182-0.040 0.397-0.093 0.86-0.132 1.018-0.026 0.172-0.172 0.357-0.317 0.436-0.145 0.066-0.899 0.251-1.693 0.397-0.78 0.145-1.455 0.264-1.521 0.264-0.053 0-0.093-0.688-0.093-1.521 0-1.494 0.013-1.521 0.357-1.825 0.198-0.159 0.608-0.542 0.926-0.86 0.317-0.304 0.674-0.78 0.793-1.045 0.145-0.304 0.436-0.608 0.767-0.793 0.357-0.198 0.754-0.304 1.217-0.304zM2.962 20.178c0.145 0.040 0.331 0.119 0.383 0.172 0.053 0.040-0.119 0.423-0.397 0.833-0.278 0.423-0.569 0.754-0.635 0.754-0.079 0-0.238-0.079-0.37-0.185-0.212-0.185-0.212-0.225 0.026-0.701 0.132-0.264 0.344-0.595 0.476-0.727 0.145-0.159 0.331-0.198 0.516-0.145zM4.311 20.496c0.172 0 0.344 0.053 0.383 0.132 0.040 0.066-0.066 0.291-0.238 0.489-0.159 0.212-0.383 0.569-0.489 0.807s-0.278 0.436-0.37 0.423c-0.079 0-0.278-0.066-0.423-0.132-0.238-0.119-0.251-0.159-0.079-0.502 0.093-0.198 0.344-0.555 0.542-0.793 0.212-0.264 0.476-0.423 0.674-0.423zM5.712 20.893c0.278 0 0.397 0.079 0.45 0.291 0.053 0.225-0.066 0.502-0.436 1.005-0.278 0.383-0.529 0.701-0.569 0.701-0.040-0.013-0.264-0.066-0.502-0.145-0.225-0.066-0.423-0.212-0.423-0.304 0-0.079 0.159-0.397 0.344-0.688 0.198-0.291 0.45-0.608 0.569-0.701 0.106-0.079 0.37-0.159 0.569-0.159zM7.339 21.157c0.212 0 0.476 0.053 0.569 0.106s0.225 0.331 0.291 0.622c0.106 0.45 0.079 0.595-0.463 1.402l-0.859-0.079c-0.476-0.053-0.912-0.132-0.965-0.172-0.066-0.053 0.145-0.489 0.463-0.979 0.489-0.78 0.622-0.899 0.965-0.899zM17.481 21.964c0.132 0 0.238 0.066 0.238 0.145 0 0.093-0.053 0.397-0.106 0.674-0.079 0.423-0.145 0.489-0.463 0.489-0.331 0-0.357-0.040-0.383-0.582-0.026-0.489 0-0.595 0.225-0.648 0.145-0.040 0.37-0.066 0.489-0.079zM9.058 22.136c0.079 0.013 0.106 0.304 0.066 0.688-0.040 0.357-0.066 1.217-0.053 1.904 0 0.688 0.053 1.455 0.185 2.116h-0.965c-0.714 0-1.058-0.066-1.388-0.264-0.278-0.172-0.423-0.37-0.423-0.569 0.013-0.159 0.555-1.111 1.23-2.102 0.661-1.005 1.269-1.798 1.349-1.772zM10.38 22.083c0.251 0 0.582 0.053 0.727 0.132 0.185 0.093 0.264 0.264 0.264 0.555 0 0.238-0.093 0.701-0.198 1.031-0.119 0.331-0.397 0.912-0.635 1.296s-0.489 0.688-0.555 0.688c-0.079 0-0.212-0.291-0.304-0.661-0.079-0.357-0.159-1.058-0.172-1.56-0.013-0.635 0.053-0.979 0.212-1.19 0.145-0.198 0.344-0.291 0.661-0.291zM12.826 22.255c0.251 0.026 0.344 0.106 0.37 0.357 0.026 0.185-0.066 0.608-0.198 0.965-0.225 0.595-0.264 0.622-1.23 0.622l0.079-0.569c0.040-0.304 0.093-0.714 0.132-0.912s0.172-0.383 0.291-0.41c0.119-0.040 0.37-0.053 0.555-0.053zM14.109 22.215c0.026 0 0.159 0.053 0.304 0.132s0.264 0.264 0.264 0.423c0 0.172-0.040 0.502-0.093 0.741-0.093 0.397-0.145 0.423-0.608 0.423-0.264 0-0.516-0.066-0.555-0.132-0.040-0.079 0.026-0.41 0.132-0.754 0.119-0.331 0.278-0.661 0.37-0.714 0.093-0.066 0.172-0.119 0.185-0.119zM15.669 22.215c0.304 0 0.331 0.053 0.331 0.595 0 0.516-0.053 0.608-0.331 0.727-0.185 0.066-0.397 0.132-0.463 0.132-0.079 0-0.106-0.225-0.053-0.569 0.040-0.304 0.093-0.635 0.132-0.727 0.026-0.079 0.198-0.159 0.383-0.159zM2.407 22.625c0.212 0.106 0.251 0.264 0.251 1.045-0.013 0.727-0.053 0.926-0.212 0.926-0.106 0-0.264-0.119-0.331-0.264-0.079-0.145-0.132-0.489-0.132-0.767 0-0.264 0.040-0.622 0.079-0.78 0.066-0.251 0.132-0.278 0.344-0.159zM3.332 23.008c0.093 0 0.291 0.040 0.436 0.079 0.198 0.053 0.291 0.225 0.357 0.754 0.053 0.383 0.132 0.82 0.172 0.979 0.066 0.278 0.013 0.304-0.463 0.304q-0.529 0-0.595-0.198c-0.040-0.106-0.066-0.582-0.066-1.058 0-0.595 0.053-0.86 0.159-0.86zM5.197 23.484c0.383 0.053 0.939 0.132 1.812 0.251l-0.383 0.793c-0.212 0.436-0.555 1.005-0.78 1.256-0.357 0.423-0.41 0.45-0.608 0.264-0.132-0.106-0.344-0.582-0.489-1.058s-0.251-1.031-0.251-1.23c0.013-0.37 0.013-0.37 0.701-0.278zM17.481 23.815c0.198-0.013 0.225 0.093 0.198 0.608-0.026 0.569-0.066 0.635-0.357 0.674-0.185 0.026-0.37-0.040-0.423-0.132s-0.119-0.357-0.132-0.595c-0.026-0.317 0.026-0.436 0.225-0.476 0.145-0.040 0.37-0.066 0.489-0.079zM15.894 24.079c0.344-0.013 0.37 0.026 0.37 0.476 0 0.278-0.079 0.648-0.172 0.833-0.093 0.198-0.304 0.344-0.489 0.37s-0.37-0.040-0.423-0.132c-0.053-0.093-0.119-0.45-0.132-0.793-0.026-0.516 0-0.622 0.225-0.674 0.145-0.040 0.423-0.066 0.621-0.079zM14.545 24.463v0.688c0 0.383-0.079 0.846-0.172 1.031s-0.304 0.344-0.463 0.357c-0.198 0.026-0.331-0.053-0.423-0.291-0.079-0.185-0.145-0.622-0.159-0.979-0.013-0.463 0.026-0.674 0.159-0.714 0.106-0.040 0.397-0.079 1.058-0.093zM11.623 24.912c0.264 0.040 0.608 0.079 0.767 0.079 0.278 0 0.304 0.066 0.304 0.661 0 0.529-0.066 0.727-0.331 0.992s-0.45 0.317-0.899 0.291c-0.529-0.026-0.555-0.040-0.595-0.489-0.026-0.251 0.026-0.727 0.119-1.045 0.159-0.569 0.172-0.569 0.635-0.489zM11.187 5.025c0.106 0 0.185 0.040 0.185 0.093 0 0.066-0.172 0.555-0.397 1.098s-0.595 1.283-0.82 1.653c-0.264 0.41-0.436 0.886-0.476 1.256-0.026 0.331-0.066 0.674-0.106 0.754-0.040 0.132-0.119 0.132-0.383 0-0.198-0.093-0.331-0.264-0.331-0.423 0-0.145 0.238-0.688 0.529-1.19 0.278-0.516 0.674-1.349 0.86-1.851 0.198-0.516 0.45-1.031 0.555-1.164 0.119-0.119 0.291-0.225 0.383-0.225zM8.304 12.959c0.119 0 0.264 0.040 0.317 0.093s0 0.278-0.119 0.502c-0.106 0.212-0.278 0.846-0.383 1.388-0.093 0.542-0.264 1.23-0.37 1.521s-0.198 0.688-0.212 0.886c0 0.264-0.053 0.357-0.198 0.304-0.106-0.040-0.238-0.225-0.278-0.436-0.053-0.225 0.013-0.648 0.198-1.15 0.159-0.436 0.37-1.269 0.489-1.851 0.106-0.582 0.225-1.098 0.264-1.164 0.040-0.053 0.172-0.093 0.291-0.093z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(7, 117, 195)"
      >
        <TokenBox data={apecoinData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Token"
        description="USDC"
        icon={
          <svg
            className="svg-inline--fa fa-usdc fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 32 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(39, 117, 202)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M15.952 0.002c0.357 0 0.766 0.006 0.912 0.014 0.146 0.010 0.39 0.027 0.544 0.040s0.344 0.032 0.424 0.042c0.080 0.008 0.253 0.030 0.384 0.048 0.133 0.018 0.326 0.046 0.432 0.064s0.301 0.053 0.432 0.078c0.133 0.026 0.355 0.072 0.496 0.104s0.314 0.072 0.384 0.090c0.070 0.018 0.264 0.070 0.432 0.118 0.168 0.046 0.416 0.122 0.552 0.165s0.406 0.138 0.6 0.208c0.194 0.070 0.47 0.179 0.616 0.24s0.357 0.152 0.472 0.205c0.115 0.051 0.355 0.166 0.536 0.256 0.181 0.091 0.429 0.219 0.552 0.288 0.123 0.067 0.339 0.19 0.48 0.275 0.141 0.083 0.357 0.218 0.48 0.296 0.123 0.080 0.307 0.202 0.408 0.272s0.259 0.182 0.352 0.25c0.093 0.066 0.294 0.219 0.448 0.341 0.154 0.12 0.398 0.322 0.544 0.445 0.146 0.125 0.426 0.379 0.621 0.565 0.197 0.187 0.475 0.466 0.619 0.619 0.142 0.154 0.317 0.346 0.386 0.424 0.070 0.080 0.19 0.222 0.27 0.318 0.080 0.094 0.229 0.282 0.333 0.414 0.102 0.134 0.262 0.347 0.354 0.475s0.237 0.341 0.325 0.472c0.088 0.133 0.205 0.312 0.261 0.4 0.054 0.088 0.168 0.278 0.253 0.424 0.083 0.146 0.226 0.405 0.317 0.576s0.229 0.448 0.307 0.616c0.078 0.168 0.174 0.379 0.214 0.472 0.042 0.093 0.11 0.258 0.154 0.368 0.045 0.11 0.128 0.326 0.184 0.48 0.058 0.154 0.139 0.392 0.184 0.528s0.114 0.36 0.152 0.496c0.040 0.136 0.101 0.36 0.138 0.496 0.035 0.136 0.090 0.363 0.12 0.504s0.082 0.389 0.112 0.552c0.030 0.163 0.077 0.451 0.104 0.64s0.059 0.445 0.072 0.568c0.014 0.123 0.032 0.31 0.042 0.416 0.008 0.106 0.022 0.325 0.032 0.488 0.008 0.163 0.016 0.544 0.016 0.848s-0.006 0.685-0.016 0.848c-0.008 0.163-0.022 0.382-0.032 0.488s-0.027 0.293-0.042 0.416c-0.013 0.123-0.045 0.379-0.072 0.568s-0.074 0.477-0.104 0.64c-0.030 0.163-0.082 0.411-0.112 0.552s-0.085 0.368-0.12 0.504c-0.037 0.136-0.098 0.36-0.138 0.496-0.038 0.136-0.107 0.36-0.152 0.496s-0.126 0.374-0.184 0.528c-0.056 0.154-0.139 0.37-0.184 0.48-0.043 0.11-0.114 0.28-0.157 0.376-0.042 0.096-0.128 0.288-0.192 0.424-0.062 0.136-0.182 0.381-0.267 0.544s-0.226 0.422-0.314 0.576c-0.088 0.154-0.206 0.355-0.264 0.448-0.056 0.093-0.154 0.248-0.216 0.344s-0.179 0.269-0.258 0.384c-0.078 0.115-0.24 0.338-0.358 0.496-0.12 0.158-0.307 0.4-0.419 0.536s-0.267 0.32-0.344 0.408c-0.077 0.088-0.253 0.283-0.392 0.432s-0.414 0.424-0.611 0.611c-0.195 0.186-0.475 0.44-0.621 0.565-0.146 0.123-0.39 0.325-0.544 0.445-0.154 0.122-0.355 0.275-0.448 0.341-0.093 0.067-0.251 0.179-0.352 0.25s-0.285 0.192-0.408 0.272c-0.123 0.078-0.339 0.213-0.48 0.296-0.141 0.085-0.357 0.208-0.48 0.277-0.123 0.067-0.405 0.211-0.624 0.32-0.221 0.109-0.493 0.238-0.608 0.288-0.115 0.051-0.36 0.152-0.544 0.224-0.184 0.074-0.44 0.17-0.568 0.216-0.128 0.045-0.333 0.115-0.456 0.155-0.123 0.038-0.36 0.11-0.528 0.157-0.168 0.048-0.422 0.115-0.568 0.15s-0.405 0.093-0.576 0.128c-0.171 0.035-0.398 0.078-0.504 0.096s-0.322 0.051-0.48 0.074c-0.158 0.021-0.429 0.054-0.6 0.070-0.171 0.018-0.427 0.042-0.568 0.053-0.168 0.013-0.546 0.021-1.096 0.021s-0.928-0.008-1.096-0.021c-0.141-0.011-0.397-0.035-0.568-0.053-0.171-0.016-0.442-0.050-0.6-0.070-0.158-0.022-0.374-0.056-0.48-0.074s-0.333-0.061-0.504-0.096c-0.171-0.035-0.43-0.093-0.576-0.128s-0.4-0.102-0.568-0.15c-0.168-0.046-0.405-0.118-0.528-0.157-0.123-0.040-0.328-0.11-0.456-0.155-0.128-0.046-0.384-0.142-0.568-0.216-0.184-0.072-0.437-0.178-0.56-0.232s-0.354-0.162-0.512-0.238c-0.158-0.077-0.406-0.203-0.552-0.282-0.146-0.077-0.358-0.195-0.472-0.261s-0.294-0.174-0.4-0.24c-0.106-0.066-0.307-0.197-0.448-0.29-0.141-0.094-0.36-0.246-0.488-0.338s-0.358-0.266-0.512-0.387c-0.154-0.12-0.398-0.322-0.544-0.445-0.146-0.125-0.426-0.379-0.621-0.565-0.197-0.187-0.472-0.462-0.61-0.611-0.139-0.149-0.31-0.336-0.381-0.416s-0.229-0.267-0.35-0.416c-0.123-0.149-0.317-0.398-0.432-0.552-0.114-0.154-0.274-0.373-0.352-0.488-0.080-0.115-0.221-0.326-0.314-0.472-0.091-0.146-0.216-0.347-0.277-0.448-0.059-0.101-0.17-0.291-0.243-0.424-0.074-0.131-0.224-0.419-0.333-0.64-0.109-0.219-0.238-0.493-0.29-0.608-0.050-0.115-0.126-0.294-0.17-0.4-0.045-0.106-0.136-0.344-0.205-0.528s-0.16-0.448-0.205-0.584c-0.045-0.136-0.12-0.384-0.17-0.552-0.048-0.168-0.12-0.437-0.16-0.6s-0.101-0.437-0.136-0.608c-0.035-0.171-0.085-0.445-0.112-0.608s-0.062-0.411-0.082-0.552c-0.018-0.141-0.042-0.36-0.056-0.488-0.013-0.128-0.032-0.35-0.043-0.496-0.013-0.168-0.021-0.571-0.021-1.104s0.008-0.936 0.021-1.104c0.011-0.146 0.030-0.368 0.043-0.496 0.014-0.128 0.038-0.347 0.056-0.488s0.051-0.371 0.074-0.512c0.022-0.141 0.074-0.414 0.112-0.608 0.040-0.194 0.104-0.482 0.142-0.64s0.11-0.429 0.16-0.6c0.050-0.171 0.142-0.47 0.206-0.664 0.066-0.194 0.16-0.459 0.21-0.592 0.050-0.131 0.117-0.301 0.147-0.376s0.114-0.269 0.186-0.432c0.072-0.163 0.224-0.483 0.339-0.712s0.288-0.552 0.384-0.72c0.094-0.166 0.227-0.39 0.293-0.496s0.192-0.299 0.28-0.432c0.086-0.131 0.234-0.344 0.325-0.472s0.253-0.344 0.358-0.48c0.106-0.136 0.27-0.342 0.366-0.456 0.094-0.114 0.248-0.291 0.338-0.392 0.091-0.101 0.253-0.278 0.362-0.392 0.107-0.114 0.354-0.357 0.546-0.539s0.467-0.432 0.613-0.557c0.146-0.123 0.39-0.325 0.544-0.445 0.154-0.122 0.384-0.296 0.512-0.387s0.347-0.243 0.488-0.338c0.141-0.093 0.342-0.224 0.448-0.29s0.286-0.174 0.4-0.24c0.114-0.066 0.326-0.184 0.472-0.261 0.146-0.078 0.394-0.205 0.552-0.282s0.389-0.184 0.512-0.238c0.123-0.054 0.322-0.139 0.44-0.187 0.118-0.050 0.363-0.142 0.544-0.208s0.44-0.155 0.576-0.2c0.136-0.043 0.384-0.118 0.552-0.165 0.168-0.048 0.362-0.101 0.432-0.118s0.243-0.058 0.384-0.090c0.141-0.032 0.365-0.078 0.496-0.104 0.133-0.026 0.326-0.061 0.432-0.078s0.275-0.043 0.376-0.056c0.101-0.014 0.27-0.035 0.376-0.048s0.325-0.035 0.488-0.050c0.163-0.014 0.39-0.032 0.504-0.038s0.499-0.014 0.856-0.016zM12.36 4.72c-0.008 0.010-0.070 0.032-0.136 0.053s-0.235 0.080-0.376 0.131c-0.141 0.051-0.397 0.152-0.568 0.224-0.171 0.074-0.41 0.179-0.528 0.235-0.118 0.058-0.334 0.166-0.48 0.245-0.146 0.077-0.373 0.205-0.504 0.285-0.133 0.080-0.37 0.232-0.528 0.338s-0.392 0.27-0.52 0.368c-0.128 0.096-0.336 0.261-0.464 0.368s-0.333 0.288-0.456 0.403c-0.123 0.115-0.318 0.307-0.432 0.424-0.115 0.118-0.28 0.294-0.366 0.39-0.088 0.098-0.232 0.266-0.322 0.376s-0.227 0.286-0.306 0.392c-0.080 0.106-0.203 0.275-0.274 0.376s-0.206 0.31-0.304 0.464c-0.096 0.154-0.229 0.378-0.296 0.496-0.066 0.118-0.19 0.357-0.277 0.528s-0.219 0.459-0.296 0.64c-0.077 0.181-0.19 0.469-0.253 0.64-0.061 0.171-0.149 0.438-0.195 0.592s-0.115 0.403-0.152 0.552c-0.038 0.15-0.099 0.419-0.134 0.6s-0.082 0.454-0.104 0.608c-0.022 0.154-0.051 0.395-0.064 0.536-0.014 0.141-0.034 0.397-0.043 0.568-0.011 0.186-0.014 0.48-0.008 0.728 0.006 0.229 0.018 0.528 0.027 0.664 0.008 0.136 0.030 0.378 0.048 0.536s0.056 0.443 0.088 0.632c0.030 0.189 0.082 0.459 0.112 0.6s0.091 0.389 0.134 0.552c0.043 0.163 0.125 0.437 0.181 0.608 0.058 0.171 0.154 0.442 0.214 0.6s0.162 0.4 0.222 0.536c0.059 0.136 0.176 0.381 0.258 0.544 0.080 0.163 0.211 0.408 0.29 0.544 0.077 0.136 0.205 0.349 0.282 0.472s0.221 0.339 0.318 0.48c0.099 0.141 0.256 0.354 0.347 0.472 0.093 0.118 0.229 0.288 0.302 0.376 0.075 0.088 0.238 0.272 0.363 0.408s0.312 0.331 0.416 0.432c0.106 0.101 0.259 0.246 0.342 0.322s0.25 0.218 0.368 0.317c0.118 0.099 0.338 0.272 0.488 0.386 0.15 0.112 0.408 0.294 0.576 0.403 0.168 0.11 0.416 0.266 0.552 0.344 0.136 0.080 0.352 0.202 0.48 0.269s0.365 0.184 0.528 0.259c0.163 0.075 0.382 0.173 0.488 0.216s0.278 0.112 0.384 0.152c0.106 0.038 0.31 0.11 0.456 0.16 0.229 0.075 0.275 0.086 0.344 0.077 0.045-0.005 0.109-0.027 0.144-0.048s0.080-0.054 0.099-0.075c0.019-0.019 0.054-0.077 0.077-0.125s0.051-0.106 0.064-0.128c0.019-0.032 0.024-0.144 0.024-0.611 0-0.512-0.003-0.582-0.029-0.656-0.016-0.046-0.058-0.128-0.094-0.181-0.035-0.053-0.11-0.138-0.166-0.189-0.083-0.075-0.126-0.099-0.23-0.134-0.070-0.022-0.235-0.086-0.368-0.141-0.131-0.054-0.358-0.158-0.504-0.229s-0.394-0.202-0.552-0.291c-0.158-0.090-0.41-0.245-0.56-0.344s-0.373-0.256-0.496-0.349c-0.123-0.091-0.354-0.278-0.512-0.416-0.158-0.136-0.418-0.379-0.576-0.541s-0.354-0.37-0.434-0.462c-0.078-0.093-0.187-0.222-0.24-0.288-0.054-0.066-0.158-0.203-0.234-0.304s-0.208-0.291-0.296-0.424c-0.088-0.131-0.206-0.318-0.264-0.416-0.056-0.096-0.154-0.269-0.218-0.384-0.062-0.115-0.17-0.331-0.24-0.48-0.069-0.149-0.17-0.379-0.224-0.512-0.053-0.131-0.141-0.37-0.195-0.528-0.053-0.158-0.13-0.403-0.168-0.544s-0.088-0.334-0.11-0.432c-0.021-0.096-0.058-0.269-0.080-0.384s-0.058-0.341-0.080-0.504c-0.022-0.163-0.050-0.397-0.061-0.52-0.013-0.142-0.021-0.45-0.021-0.84 0.002-0.466 0.008-0.68 0.029-0.88 0.016-0.146 0.043-0.365 0.061-0.488s0.054-0.336 0.080-0.472c0.027-0.136 0.082-0.378 0.122-0.536s0.112-0.41 0.16-0.56c0.050-0.149 0.13-0.387 0.181-0.528s0.122-0.325 0.157-0.408c0.034-0.083 0.11-0.256 0.168-0.384 0.059-0.128 0.17-0.347 0.245-0.488 0.077-0.141 0.192-0.346 0.258-0.456 0.067-0.11 0.203-0.318 0.302-0.464s0.242-0.341 0.314-0.434c0.074-0.094 0.227-0.282 0.342-0.416 0.117-0.136 0.365-0.398 0.552-0.582 0.189-0.186 0.437-0.414 0.55-0.51 0.114-0.094 0.317-0.254 0.448-0.354 0.133-0.099 0.355-0.256 0.496-0.349 0.141-0.091 0.362-0.23 0.493-0.306 0.13-0.075 0.363-0.202 0.52-0.28 0.155-0.078 0.378-0.182 0.491-0.234s0.291-0.125 0.392-0.163c0.101-0.038 0.216-0.090 0.256-0.114 0.040-0.022 0.104-0.072 0.144-0.109s0.091-0.106 0.115-0.152c0.022-0.048 0.050-0.13 0.061-0.182 0.013-0.066 0.016-0.277 0.013-0.68-0.005-0.413-0.013-0.6-0.027-0.64-0.011-0.030-0.046-0.091-0.080-0.136-0.038-0.053-0.090-0.096-0.146-0.125-0.048-0.026-0.12-0.048-0.16-0.051s-0.101 0.002-0.136 0.010c-0.035 0.010-0.072 0.022-0.080 0.030zM19.195 4.797c-0.034 0.032-0.090 0.117-0.125 0.187l-0.062 0.128c0 1.166 0.002 1.187 0.037 1.288 0.021 0.058 0.062 0.144 0.094 0.192s0.099 0.128 0.152 0.176c0.078 0.074 0.122 0.098 0.253 0.147 0.088 0.032 0.264 0.102 0.392 0.157s0.394 0.181 0.592 0.28c0.198 0.101 0.443 0.232 0.544 0.291 0.101 0.061 0.302 0.189 0.448 0.283 0.146 0.096 0.336 0.229 0.424 0.294 0.088 0.067 0.246 0.19 0.352 0.275s0.278 0.232 0.384 0.328c0.106 0.096 0.285 0.267 0.398 0.382s0.285 0.299 0.381 0.41c0.098 0.11 0.229 0.266 0.293 0.344 0.062 0.080 0.17 0.216 0.235 0.304s0.211 0.298 0.32 0.464c0.11 0.168 0.253 0.394 0.315 0.504 0.064 0.11 0.182 0.333 0.264 0.496 0.083 0.163 0.187 0.382 0.234 0.488s0.122 0.29 0.168 0.408c0.046 0.118 0.131 0.36 0.189 0.536s0.133 0.435 0.168 0.576c0.037 0.141 0.086 0.36 0.114 0.488 0.026 0.128 0.066 0.35 0.088 0.496s0.051 0.376 0.066 0.512c0.013 0.136 0.032 0.424 0.042 0.64s0.014 0.522 0.008 0.68c-0.005 0.158-0.021 0.406-0.034 0.552s-0.040 0.365-0.058 0.488c-0.018 0.123-0.054 0.336-0.080 0.472-0.027 0.136-0.074 0.349-0.104 0.472s-0.088 0.336-0.128 0.472c-0.040 0.136-0.117 0.371-0.17 0.52s-0.131 0.358-0.173 0.464c-0.042 0.106-0.107 0.261-0.144 0.344s-0.13 0.278-0.208 0.432c-0.077 0.154-0.195 0.378-0.264 0.496-0.067 0.118-0.211 0.349-0.32 0.512-0.107 0.163-0.275 0.398-0.37 0.522-0.096 0.125-0.253 0.32-0.349 0.432-0.098 0.114-0.328 0.358-0.512 0.544-0.186 0.186-0.435 0.421-0.554 0.522s-0.314 0.259-0.432 0.35c-0.118 0.091-0.334 0.246-0.48 0.344s-0.357 0.234-0.472 0.302c-0.115 0.069-0.315 0.181-0.448 0.251-0.131 0.070-0.341 0.174-0.464 0.232-0.123 0.056-0.36 0.158-0.528 0.224-0.168 0.067-0.333 0.141-0.368 0.165s-0.099 0.082-0.141 0.13c-0.043 0.048-0.093 0.126-0.112 0.174-0.034 0.085-0.035 0.107-0.035 0.744 0 0.651 0 0.656 0.037 0.736 0.021 0.045 0.074 0.114 0.12 0.157 0.053 0.048 0.112 0.086 0.163 0.102 0.056 0.018 0.107 0.022 0.168 0.014 0.048-0.005 0.104-0.021 0.125-0.034 0.019-0.013 0.149-0.064 0.288-0.114 0.138-0.050 0.374-0.138 0.523-0.195 0.149-0.056 0.39-0.157 0.536-0.222s0.376-0.176 0.512-0.246c0.136-0.069 0.334-0.173 0.44-0.232s0.296-0.173 0.424-0.251c0.128-0.078 0.333-0.213 0.456-0.298 0.123-0.083 0.322-0.226 0.44-0.314 0.118-0.090 0.302-0.234 0.408-0.32s0.253-0.211 0.328-0.278c0.075-0.067 0.234-0.214 0.352-0.33 0.118-0.114 0.306-0.301 0.414-0.416 0.109-0.114 0.286-0.309 0.392-0.434 0.107-0.123 0.274-0.328 0.371-0.456 0.098-0.126 0.248-0.331 0.334-0.454s0.222-0.328 0.304-0.456c0.082-0.128 0.205-0.33 0.272-0.448 0.069-0.118 0.195-0.352 0.282-0.52 0.086-0.166 0.219-0.445 0.294-0.616 0.077-0.171 0.195-0.462 0.264-0.648 0.069-0.184 0.168-0.477 0.221-0.648s0.118-0.395 0.146-0.496c0.027-0.101 0.077-0.314 0.112-0.472s0.090-0.443 0.12-0.632c0.032-0.189 0.072-0.474 0.088-0.632 0.018-0.158 0.040-0.406 0.051-0.552 0.010-0.146 0.018-0.483 0.018-0.752s-0.008-0.606-0.019-0.752c-0.010-0.146-0.029-0.368-0.042-0.496s-0.042-0.358-0.064-0.512c-0.022-0.154-0.069-0.424-0.104-0.6s-0.102-0.47-0.15-0.656c-0.046-0.184-0.109-0.408-0.136-0.496-0.026-0.088-0.093-0.286-0.146-0.44-0.054-0.154-0.141-0.384-0.19-0.512-0.051-0.128-0.133-0.322-0.181-0.432s-0.123-0.275-0.166-0.368c-0.045-0.093-0.142-0.286-0.221-0.432-0.077-0.146-0.198-0.362-0.269-0.48s-0.222-0.36-0.339-0.536c-0.117-0.176-0.293-0.429-0.394-0.562-0.101-0.134-0.262-0.339-0.36-0.456-0.098-0.118-0.278-0.326-0.402-0.462s-0.346-0.363-0.494-0.504c-0.149-0.141-0.331-0.31-0.406-0.378-0.075-0.066-0.219-0.189-0.32-0.274-0.101-0.083-0.285-0.227-0.408-0.32s-0.317-0.232-0.432-0.312c-0.115-0.078-0.312-0.208-0.44-0.288s-0.339-0.206-0.472-0.282c-0.131-0.074-0.355-0.194-0.496-0.264s-0.368-0.178-0.504-0.238c-0.136-0.062-0.366-0.16-0.512-0.218s-0.382-0.146-0.528-0.197c-0.166-0.058-0.296-0.094-0.352-0.098-0.051-0.002-0.114 0.006-0.152 0.021-0.035 0.013-0.091 0.050-0.125 0.083zM15.171 8.242c-0.029 0.021-0.078 0.075-0.107 0.118-0.030 0.045-0.070 0.123-0.088 0.176-0.030 0.091-0.032 0.133-0.032 0.885v0.787c-0.118 0.014-0.256 0.042-0.384 0.067s-0.315 0.072-0.416 0.104c-0.101 0.030-0.259 0.086-0.352 0.123-0.093 0.038-0.229 0.101-0.304 0.138-0.075 0.038-0.2 0.109-0.28 0.158-0.080 0.048-0.205 0.134-0.28 0.192-0.075 0.056-0.182 0.142-0.238 0.192s-0.166 0.162-0.245 0.25c-0.078 0.088-0.194 0.235-0.256 0.328s-0.146 0.234-0.186 0.312c-0.038 0.080-0.096 0.205-0.126 0.28s-0.075 0.216-0.101 0.312c-0.024 0.098-0.054 0.227-0.067 0.288-0.014 0.077-0.021 0.251-0.021 0.552 0 0.342 0.006 0.478 0.029 0.616 0.016 0.098 0.046 0.248 0.069 0.336s0.066 0.229 0.098 0.312c0.030 0.083 0.078 0.195 0.104 0.248 0.027 0.053 0.088 0.157 0.136 0.232 0.050 0.075 0.13 0.186 0.179 0.246s0.158 0.171 0.242 0.245c0.083 0.075 0.224 0.184 0.312 0.243s0.254 0.155 0.368 0.213c0.115 0.058 0.28 0.134 0.368 0.17s0.264 0.096 0.392 0.136c0.128 0.040 0.307 0.090 0.4 0.114 0.093 0.022 0.294 0.066 0.448 0.096 0.154 0.032 0.416 0.075 0.584 0.099 0.168 0.022 0.422 0.062 0.568 0.088s0.397 0.080 0.56 0.12c0.163 0.040 0.379 0.101 0.48 0.134s0.245 0.088 0.32 0.12c0.075 0.034 0.192 0.093 0.261 0.134 0.070 0.040 0.171 0.11 0.224 0.155 0.054 0.045 0.134 0.128 0.176 0.184 0.043 0.056 0.099 0.146 0.125 0.198s0.066 0.168 0.088 0.256c0.038 0.142 0.043 0.192 0.045 0.44 0.002 0.243-0.003 0.299-0.035 0.424-0.021 0.080-0.059 0.198-0.088 0.264-0.027 0.066-0.091 0.181-0.141 0.256-0.051 0.075-0.149 0.192-0.218 0.261s-0.194 0.171-0.277 0.227c-0.083 0.058-0.224 0.134-0.312 0.174-0.088 0.038-0.211 0.085-0.272 0.104-0.061 0.018-0.181 0.046-0.264 0.064s-0.253 0.040-0.376 0.050c-0.149 0.010-0.315 0.010-0.496 0-0.149-0.010-0.344-0.027-0.432-0.042s-0.232-0.043-0.32-0.066c-0.088-0.021-0.224-0.064-0.304-0.094-0.080-0.032-0.194-0.085-0.256-0.118-0.061-0.034-0.152-0.091-0.2-0.126-0.048-0.037-0.138-0.115-0.197-0.174-0.061-0.059-0.141-0.15-0.179-0.203-0.037-0.053-0.094-0.142-0.125-0.2-0.032-0.058-0.078-0.158-0.106-0.224-0.026-0.066-0.074-0.219-0.104-0.339-0.032-0.122-0.070-0.248-0.088-0.28-0.016-0.034-0.067-0.094-0.112-0.136-0.056-0.053-0.107-0.085-0.165-0.101-0.072-0.021-0.189-0.024-0.733-0.021l-0.648 0.005c-0.136 0.066-0.197 0.109-0.222 0.139-0.026 0.029-0.061 0.082-0.080 0.117-0.027 0.051-0.034 0.091-0.032 0.208 0 0.099 0.014 0.205 0.045 0.336 0.024 0.106 0.082 0.304 0.126 0.44 0.046 0.139 0.128 0.339 0.187 0.456 0.058 0.115 0.152 0.28 0.211 0.368 0.058 0.088 0.17 0.235 0.25 0.328 0.078 0.093 0.197 0.214 0.261 0.272 0.066 0.058 0.155 0.134 0.198 0.17 0.045 0.037 0.149 0.11 0.232 0.166 0.083 0.054 0.21 0.13 0.28 0.168s0.203 0.104 0.296 0.146c0.093 0.040 0.226 0.096 0.296 0.122s0.226 0.075 0.344 0.11c0.118 0.035 0.32 0.083 0.448 0.109s0.259 0.051 0.293 0.056l0.059 0.010c0 1.517 0.003 1.686 0.022 1.752 0.016 0.053 0.050 0.109 0.101 0.166 0.053 0.059 0.112 0.102 0.195 0.144l0.12 0.058 1.178 0.008c0.16-0.072 0.221-0.115 0.261-0.16 0.037-0.040 0.088-0.118 0.115-0.176l0.048-0.104 0.008-1.688c0.056-0.011 0.158-0.034 0.264-0.058 0.106-0.022 0.275-0.067 0.376-0.098s0.282-0.094 0.4-0.142c0.118-0.048 0.309-0.139 0.424-0.202s0.262-0.149 0.328-0.194c0.066-0.043 0.189-0.134 0.272-0.2 0.083-0.067 0.222-0.194 0.31-0.283 0.086-0.088 0.206-0.224 0.266-0.304 0.061-0.080 0.15-0.208 0.2-0.288s0.125-0.216 0.168-0.304c0.042-0.088 0.106-0.243 0.141-0.344 0.034-0.101 0.078-0.248 0.096-0.328 0.019-0.080 0.046-0.224 0.059-0.32 0.016-0.107 0.026-0.288 0.026-0.464 0-0.158-0.008-0.368-0.018-0.464s-0.029-0.24-0.042-0.32c-0.013-0.080-0.038-0.198-0.054-0.264s-0.053-0.184-0.082-0.264c-0.027-0.080-0.086-0.216-0.13-0.304-0.045-0.088-0.115-0.211-0.157-0.272s-0.122-0.165-0.178-0.23c-0.056-0.066-0.163-0.173-0.238-0.238s-0.211-0.17-0.304-0.23c-0.093-0.062-0.253-0.155-0.355-0.206-0.104-0.053-0.259-0.123-0.344-0.157-0.086-0.035-0.275-0.101-0.421-0.146s-0.408-0.112-0.584-0.152c-0.176-0.038-0.427-0.088-0.56-0.11-0.131-0.022-0.381-0.059-0.552-0.082s-0.398-0.056-0.504-0.074c-0.106-0.018-0.296-0.054-0.424-0.082-0.128-0.026-0.339-0.083-0.472-0.126-0.131-0.043-0.298-0.107-0.368-0.142-0.070-0.034-0.174-0.091-0.232-0.13-0.058-0.037-0.15-0.11-0.205-0.165-0.056-0.054-0.133-0.147-0.173-0.21-0.038-0.061-0.086-0.162-0.107-0.224-0.021-0.061-0.048-0.162-0.061-0.224-0.014-0.072-0.022-0.211-0.021-0.392 0-0.237 0.006-0.299 0.037-0.408 0.019-0.070 0.062-0.186 0.096-0.256s0.106-0.182 0.158-0.248c0.053-0.066 0.138-0.154 0.189-0.194 0.053-0.040 0.146-0.102 0.206-0.139 0.062-0.037 0.158-0.085 0.216-0.107s0.168-0.059 0.248-0.080c0.080-0.021 0.219-0.051 0.312-0.064 0.093-0.014 0.277-0.029 0.408-0.035 0.141-0.005 0.333-0.002 0.464 0.010 0.123 0.011 0.296 0.034 0.384 0.051s0.2 0.043 0.248 0.058c0.048 0.014 0.149 0.051 0.224 0.083s0.189 0.093 0.253 0.134c0.062 0.042 0.168 0.125 0.232 0.186 0.062 0.061 0.157 0.166 0.206 0.235 0.050 0.070 0.126 0.198 0.17 0.286s0.104 0.224 0.133 0.302c0.037 0.094 0.077 0.168 0.118 0.216 0.038 0.042 0.102 0.090 0.16 0.117l0.096 0.045c1.24 0 1.301-0.003 1.36-0.030 0.035-0.016 0.088-0.050 0.118-0.075 0.029-0.026 0.070-0.075 0.091-0.11s0.046-0.11 0.056-0.168c0.014-0.094 0.013-0.122-0.032-0.296-0.026-0.106-0.074-0.267-0.106-0.36s-0.102-0.258-0.157-0.368c-0.053-0.11-0.146-0.272-0.205-0.36s-0.165-0.229-0.235-0.312c-0.069-0.083-0.187-0.208-0.261-0.277-0.074-0.070-0.198-0.174-0.278-0.234s-0.198-0.141-0.264-0.182c-0.066-0.040-0.203-0.114-0.304-0.16-0.101-0.048-0.259-0.114-0.352-0.146-0.093-0.030-0.248-0.074-0.344-0.096-0.096-0.021-0.219-0.043-0.272-0.050-0.053-0.005-0.115-0.013-0.139-0.018l-0.045-0.006c0-1.594-0.002-1.68-0.027-1.758-0.018-0.056-0.056-0.117-0.101-0.166-0.048-0.051-0.114-0.099-0.19-0.138l-0.12-0.058c-1.152-0.008-1.206-0.006-1.266 0.021-0.035 0.016-0.088 0.046-0.117 0.069z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="#6c51d7"
      >
        <TokenBox data={usdcTokenData} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Self-hosted node"
        description="Solana"
        icon={
          <svg
            className="svg-inline--fa fa-sol fa-w-16 transformed"
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
              d="M15.894 2.006c0.794-0.006 1.363 0.025 1.775 0.094 0.337 0.050 0.881 0.15 1.206 0.219s0.806 0.181 1.063 0.25c0.256 0.075 0.75 0.244 1.094 0.381s0.962 0.419 1.375 0.631c0.413 0.206 1.056 0.587 1.438 0.844s0.969 0.706 1.306 1.006c0.344 0.294 0.831 0.763 1.087 1.037 0.25 0.275 0.656 0.75 0.887 1.063 0.231 0.306 0.575 0.8 0.756 1.094s0.506 0.894 0.719 1.344c0.219 0.45 0.506 1.137 0.637 1.531 0.137 0.394 0.306 1 0.381 1.344s0.194 0.988 0.262 1.438c0.075 0.525 0.119 1.131 0.119 1.719 0 0.581-0.044 1.219-0.131 1.781-0.069 0.481-0.194 1.156-0.275 1.5s-0.25 0.919-0.375 1.281c-0.125 0.363-0.419 1.050-0.65 1.531s-0.556 1.087-0.725 1.344c-0.163 0.256-0.5 0.738-0.75 1.063-0.244 0.325-0.756 0.906-1.131 1.281-0.375 0.381-0.894 0.863-1.15 1.069-0.256 0.212-0.75 0.569-1.094 0.806s-1.050 0.631-1.563 0.887c-0.519 0.25-1.319 0.581-1.781 0.731s-1.212 0.35-1.656 0.431c-0.444 0.087-0.994 0.188-1.219 0.225s-0.9 0.069-1.5 0.069c-0.6 0-1.275-0.031-1.5-0.069s-0.762-0.137-1.206-0.219c-0.438-0.081-1.181-0.275-1.656-0.431-0.469-0.156-1.281-0.488-1.794-0.744-0.519-0.25-1.194-0.625-1.5-0.831s-0.781-0.544-1.050-0.756c-0.263-0.212-0.681-0.575-0.925-0.813-0.25-0.231-0.7-0.712-1.013-1.075s-0.769-0.962-1.019-1.344c-0.25-0.381-0.594-0.969-0.769-1.313-0.181-0.344-0.462-0.975-0.625-1.406-0.169-0.431-0.381-1.063-0.469-1.406-0.081-0.344-0.219-0.975-0.3-1.406-0.119-0.65-0.138-1.006-0.144-2.125 0-1.131 0.025-1.475 0.144-2.188 0.081-0.463 0.219-1.125 0.306-1.469s0.294-0.975 0.462-1.406c0.163-0.431 0.444-1.063 0.625-1.406 0.175-0.344 0.519-0.931 0.769-1.313s0.706-0.981 1.013-1.344c0.313-0.362 0.844-0.912 1.188-1.225 0.338-0.313 0.888-0.763 1.212-1 0.325-0.244 0.887-0.612 1.25-0.825s0.981-0.525 1.375-0.694c0.394-0.163 1.025-0.4 1.406-0.525 0.381-0.119 1.081-0.294 1.563-0.388 0.481-0.087 0.988-0.188 1.125-0.219 0.137-0.025 0.775-0.050 1.419-0.056zM13.881 3.181c-0.225 0.044-0.769 0.169-1.219 0.288s-1.050 0.306-1.344 0.425c-0.294 0.119-0.8 0.35-1.125 0.513s-0.806 0.431-1.063 0.588c-0.256 0.162-0.694 0.456-0.969 0.662-0.275 0.2-0.862 0.719-1.3 1.15-0.537 0.531-0.975 1.031-1.337 1.537-0.287 0.412-0.681 1.019-0.862 1.344s-0.469 0.931-0.644 1.344c-0.169 0.412-0.381 1.006-0.469 1.313-0.094 0.306-0.219 0.856-0.294 1.219-0.069 0.363-0.15 0.925-0.188 1.25-0.031 0.325-0.063 0.863-0.063 1.188s0.031 0.863 0.063 1.188c0.038 0.325 0.119 0.887 0.188 1.25 0.075 0.363 0.2 0.913 0.294 1.219 0.087 0.306 0.3 0.9 0.469 1.313s0.475 1.044 0.681 1.406c0.206 0.363 0.563 0.925 0.787 1.25 0.263 0.369 0.781 0.956 1.362 1.531 0.55 0.55 1.181 1.113 1.531 1.356 0.325 0.231 0.887 0.587 1.25 0.794s0.994 0.512 1.406 0.681c0.412 0.169 1.006 0.381 1.313 0.469 0.306 0.094 0.856 0.219 1.219 0.294 0.363 0.069 0.925 0.15 1.25 0.188 0.325 0.031 0.863 0.063 1.188 0.063s0.863-0.031 1.188-0.063c0.325-0.038 0.887-0.119 1.25-0.188 0.363-0.075 0.913-0.2 1.219-0.294 0.306-0.087 0.9-0.3 1.313-0.469s1.044-0.475 1.406-0.681c0.363-0.206 0.925-0.563 1.25-0.788 0.369-0.262 0.956-0.781 1.531-1.363 0.55-0.55 1.113-1.181 1.356-1.531 0.231-0.325 0.587-0.887 0.794-1.25s0.512-0.994 0.681-1.406c0.169-0.413 0.381-1.006 0.469-1.313 0.094-0.306 0.219-0.856 0.294-1.219 0.069-0.363 0.15-0.925 0.188-1.25 0.031-0.325 0.063-0.863 0.063-1.188s-0.031-0.863-0.063-1.188c-0.038-0.325-0.119-0.887-0.188-1.25-0.075-0.363-0.2-0.912-0.294-1.219-0.087-0.306-0.3-0.9-0.469-1.313s-0.475-1.044-0.681-1.406c-0.206-0.363-0.563-0.919-0.794-1.244s-0.756-0.938-1.169-1.369c-0.413-0.431-1.006-0.975-1.313-1.219-0.306-0.237-0.8-0.581-1.094-0.763s-0.813-0.469-1.156-0.638c-0.344-0.175-0.881-0.413-1.188-0.538-0.306-0.119-0.831-0.294-1.156-0.381s-0.944-0.219-1.375-0.288c-0.431-0.069-1.175-0.138-1.656-0.156-0.481-0.013-1.156 0-1.5 0.025-0.344 0.031-0.806 0.081-1.031 0.125zM16 4c0.075 0 0.219 0.081 0.319 0.188 0.1 0.1 0.188 0.244 0.188 0.313s-0.081 0.206-0.181 0.313c-0.1 0.1-0.244 0.188-0.313 0.188-0.075 0-0.213-0.088-0.319-0.188-0.106-0.106-0.188-0.244-0.181-0.319 0-0.069 0.081-0.213 0.181-0.313s0.238-0.181 0.306-0.181zM14 4.188c0.075 0 0.213 0.081 0.319 0.188 0.106 0.1 0.188 0.237 0.188 0.294 0.006 0.063-0.050 0.188-0.125 0.281-0.1 0.144-0.175 0.175-0.375 0.175s-0.275-0.031-0.375-0.175c-0.075-0.094-0.125-0.219-0.125-0.281 0.006-0.063 0.088-0.2 0.188-0.3s0.238-0.181 0.306-0.181zM18 4.188c0.075 0 0.219 0.081 0.319 0.188 0.1 0.1 0.188 0.237 0.188 0.294 0.006 0.063-0.050 0.188-0.125 0.281-0.1 0.138-0.175 0.175-0.356 0.175q-0.238 0-0.381-0.144c-0.075-0.075-0.137-0.2-0.131-0.281 0-0.081 0.081-0.231 0.181-0.331s0.238-0.181 0.306-0.181zM12.063 4.688c0.075 0 0.213 0.081 0.319 0.188 0.106 0.1 0.188 0.244 0.188 0.313s-0.081 0.206-0.181 0.313c-0.1 0.1-0.244 0.188-0.313 0.188-0.075 0-0.213-0.088-0.319-0.188-0.106-0.106-0.188-0.244-0.181-0.319 0-0.069 0.081-0.213 0.181-0.313s0.238-0.181 0.306-0.181zM19.938 4.688c0.075 0 0.219 0.081 0.319 0.188 0.1 0.1 0.188 0.244 0.188 0.313s-0.081 0.206-0.181 0.313c-0.1 0.1-0.244 0.188-0.313 0.188-0.075 0-0.219-0.088-0.319-0.188-0.1-0.106-0.188-0.244-0.181-0.319 0-0.069 0.081-0.213 0.181-0.313s0.238-0.181 0.306-0.181zM10.256 5.563q0.188 0 0.35 0.169c0.125 0.138 0.15 0.219 0.125 0.362-0.019 0.1-0.1 0.237-0.181 0.3-0.075 0.063-0.231 0.112-0.338 0.106-0.15 0-0.244-0.050-0.331-0.175-0.075-0.094-0.125-0.225-0.125-0.3 0.006-0.075 0.075-0.206 0.156-0.3q0.15-0.162 0.344-0.162zM21.725 5.563c0.087 0 0.2 0.019 0.256 0.044 0.056 0.031 0.144 0.125 0.188 0.219 0.050 0.1 0.087 0.213 0.087 0.25 0.006 0.044-0.069 0.156-0.156 0.25-0.113 0.125-0.219 0.175-0.375 0.175-0.181 0-0.244-0.037-0.344-0.206-0.069-0.106-0.125-0.244-0.119-0.3 0-0.056 0.069-0.175 0.15-0.269 0.087-0.094 0.219-0.162 0.313-0.162zM8.613 6.688c0.063-0.006 0.188 0.050 0.287 0.125 0.137 0.1 0.169 0.175 0.169 0.375s-0.031 0.275-0.169 0.375c-0.1 0.075-0.219 0.131-0.269 0.125-0.050 0-0.188-0.056-0.294-0.125-0.162-0.1-0.206-0.162-0.2-0.319 0-0.119 0.069-0.256 0.181-0.375 0.1-0.1 0.231-0.181 0.294-0.181zM23.387 6.688c0.063 0 0.206 0.069 0.306 0.156 0.144 0.119 0.188 0.206 0.188 0.375 0 0.181-0.038 0.244-0.2 0.344-0.113 0.069-0.256 0.125-0.313 0.125-0.063 0-0.2-0.088-0.3-0.188-0.144-0.144-0.181-0.225-0.156-0.362 0.019-0.094 0.106-0.231 0.194-0.313 0.087-0.075 0.212-0.138 0.281-0.138zM7.231 8.125c0.175 0 0.237 0.037 0.338 0.2 0.069 0.113 0.125 0.256 0.125 0.313 0 0.063-0.081 0.194-0.188 0.3-0.144 0.144-0.225 0.181-0.356 0.156-0.1-0.019-0.237-0.106-0.313-0.188-0.081-0.088-0.15-0.213-0.15-0.275-0.006-0.069 0.069-0.206 0.162-0.313 0.125-0.144 0.219-0.194 0.381-0.194zM24.8 8.125c0.106 0 0.244 0.069 0.35 0.175 0.094 0.094 0.169 0.231 0.169 0.306 0 0.081-0.063 0.213-0.144 0.3-0.075 0.081-0.212 0.169-0.313 0.188-0.131 0.025-0.212-0.012-0.356-0.156-0.106-0.106-0.188-0.25-0.181-0.338 0-0.075 0.069-0.219 0.15-0.313 0.094-0.1 0.212-0.162 0.325-0.162zM11.769 9h11.425l0.156 0.188c0.087 0.1 0.156 0.244 0.156 0.313s-0.119 0.256-0.262 0.419c-0.144 0.169-0.881 0.925-3.019 3.081l-11.375 0.006-0.131-0.144c-0.075-0.081-0.156-0.2-0.175-0.269-0.025-0.081 0.019-0.206 0.137-0.375 0.1-0.137 0.838-0.919 1.631-1.738zM10.225 12.006h9.563l1.994-2.006h-9.556zM6.031 9.756c0.075 0 0.213 0.056 0.306 0.125 0.125 0.094 0.169 0.181 0.175 0.331 0 0.113-0.050 0.269-0.112 0.344s-0.194 0.156-0.3 0.175c-0.144 0.031-0.225 0-0.356-0.125-0.119-0.113-0.175-0.225-0.181-0.375-0.006-0.162 0.037-0.244 0.169-0.344 0.094-0.069 0.231-0.131 0.3-0.131zM25.925 9.756c0.044 0 0.163 0.044 0.256 0.088s0.194 0.131 0.219 0.188c0.025 0.056 0.044 0.175 0.044 0.256 0 0.094-0.069 0.225-0.169 0.319-0.094 0.088-0.238 0.156-0.313 0.156-0.081 0-0.212-0.075-0.3-0.162-0.1-0.1-0.156-0.231-0.163-0.369-0.006-0.162 0.038-0.244 0.169-0.344 0.094-0.069 0.206-0.131 0.256-0.131zM5.188 11.569c0.075 0 0.219 0.088 0.319 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.213-0.181 0.313c-0.1 0.106-0.244 0.188-0.313 0.188s-0.213-0.081-0.319-0.188c-0.1-0.1-0.181-0.244-0.181-0.313 0-0.075 0.088-0.213 0.181-0.313 0.1-0.1 0.237-0.188 0.306-0.188zM26.813 11.569c0.075 0 0.219 0.088 0.319 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.213-0.181 0.313c-0.1 0.106-0.244 0.188-0.313 0.188s-0.212-0.081-0.319-0.188c-0.1-0.1-0.181-0.244-0.181-0.313 0-0.075 0.087-0.213 0.181-0.313 0.1-0.1 0.238-0.188 0.306-0.188zM4.675 13.506c0.063 0 0.194 0.056 0.287 0.125 0.138 0.1 0.169 0.175 0.169 0.375s-0.031 0.275-0.169 0.381c-0.094 0.069-0.225 0.125-0.281 0.125-0.063 0-0.194-0.088-0.3-0.194-0.1-0.1-0.181-0.244-0.181-0.313 0-0.075 0.088-0.213 0.181-0.313 0.1-0.1 0.231-0.188 0.294-0.188zM27.331 13.506c0.063 0 0.2 0.088 0.3 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.213-0.181 0.313c-0.1 0.106-0.238 0.194-0.3 0.194s-0.188-0.056-0.281-0.125c-0.137-0.1-0.175-0.181-0.181-0.375-0.006-0.2 0.031-0.269 0.169-0.375 0.094-0.069 0.225-0.131 0.288-0.131zM8.831 14.006h11.394l1.381 1.394c0.756 0.763 1.494 1.525 1.637 1.687s0.262 0.35 0.262 0.419c0 0.069-0.069 0.212-0.313 0.5h-11.406l-1.506-1.512c-0.825-0.831-1.569-1.6-1.644-1.706-0.075-0.1-0.137-0.231-0.137-0.287-0.006-0.063 0.069-0.194 0.162-0.3zM12.225 17.006h9.563l-2-2h-9.563zM4.5 15.506c0.075 0 0.219 0.088 0.319 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.212-0.181 0.313c-0.1 0.106-0.244 0.188-0.313 0.188s-0.213-0.081-0.319-0.188c-0.1-0.1-0.181-0.244-0.181-0.319 0-0.069 0.088-0.213 0.181-0.313 0.1-0.1 0.237-0.181 0.306-0.181zM27.5 15.506c0.075 0 0.219 0.088 0.319 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.212-0.181 0.313c-0.1 0.106-0.244 0.188-0.313 0.188s-0.212-0.081-0.319-0.188c-0.1-0.1-0.181-0.244-0.181-0.319 0-0.069 0.087-0.213 0.181-0.313 0.1-0.1 0.238-0.181 0.306-0.181zM4.781 17.531c0.106 0.019 0.231 0.087 0.275 0.15 0.044 0.056 0.075 0.212 0.075 0.344 0 0.181-0.037 0.262-0.169 0.356-0.094 0.075-0.225 0.131-0.281 0.125-0.063 0-0.194-0.081-0.3-0.188-0.1-0.1-0.181-0.244-0.181-0.319 0-0.069 0.088-0.212 0.194-0.319 0.156-0.156 0.219-0.181 0.388-0.15zM27.331 17.506c0.063 0 0.2 0.087 0.3 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.212-0.181 0.313c-0.1 0.106-0.231 0.188-0.3 0.188-0.063 0.006-0.188-0.050-0.281-0.125-0.137-0.094-0.175-0.181-0.181-0.369-0.006-0.2 0.031-0.269 0.169-0.375 0.094-0.075 0.225-0.131 0.288-0.131zM11.769 19.006h11.425l0.156 0.188c0.087 0.106 0.156 0.244 0.156 0.313s-0.119 0.256-0.262 0.425c-0.144 0.163-0.881 0.919-3.019 3.075l-11.375 0.006-0.131-0.144c-0.075-0.081-0.15-0.2-0.175-0.269-0.025-0.081 0.019-0.206 0.137-0.375 0.1-0.137 0.838-0.919 1.637-1.731zM10.225 22.006h9.563l1.988-2h-9.556zM5.194 19.438c0.069 0 0.213 0.087 0.313 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.212-0.181 0.313c-0.1 0.106-0.237 0.188-0.313 0.188-0.069 0-0.213-0.081-0.319-0.188-0.1-0.1-0.181-0.244-0.181-0.313 0.006-0.075 0.088-0.212 0.181-0.313 0.1-0.1 0.237-0.188 0.313-0.188zM26.819 19.438c0.069 0 0.212 0.087 0.313 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.212-0.181 0.313c-0.1 0.106-0.238 0.188-0.313 0.188-0.069 0-0.212-0.081-0.319-0.188-0.1-0.1-0.181-0.244-0.181-0.313 0.006-0.075 0.087-0.212 0.181-0.313 0.1-0.1 0.238-0.188 0.313-0.188zM6 21.25c0.056 0.006 0.194 0.063 0.306 0.125 0.169 0.106 0.2 0.169 0.2 0.344 0 0.163-0.044 0.262-0.169 0.381-0.094 0.087-0.206 0.156-0.25 0.156s-0.156-0.044-0.25-0.087c-0.094-0.050-0.194-0.131-0.219-0.188s-0.050-0.188-0.056-0.288c0-0.131 0.044-0.219 0.169-0.313 0.094-0.069 0.219-0.131 0.269-0.131zM25.956 21.25c0.081 0 0.225 0.069 0.319 0.156q0.169 0.156 0.169 0.344c0 0.106-0.056 0.244-0.125 0.313s-0.2 0.144-0.294 0.169c-0.119 0.025-0.219 0-0.331-0.087-0.106-0.081-0.156-0.194-0.169-0.35-0.012-0.175 0.019-0.269 0.137-0.387 0.081-0.081 0.219-0.156 0.294-0.156zM7.25 22.906c0.088 0.019 0.225 0.106 0.306 0.194 0.075 0.081 0.138 0.2 0.138 0.262s-0.056 0.2-0.125 0.313c-0.1 0.169-0.162 0.2-0.344 0.2-0.162 0-0.256-0.044-0.375-0.188-0.081-0.1-0.15-0.244-0.15-0.313 0.006-0.075 0.088-0.219 0.194-0.319 0.15-0.15 0.219-0.181 0.356-0.15zM24.875 22.906c0.087 0.019 0.225 0.106 0.306 0.194 0.075 0.081 0.137 0.219 0.144 0.294 0 0.075-0.081 0.219-0.175 0.313-0.119 0.113-0.238 0.169-0.375 0.169-0.163 0-0.231-0.038-0.331-0.2-0.069-0.113-0.119-0.256-0.119-0.319 0.006-0.063 0.087-0.2 0.194-0.3 0.15-0.15 0.219-0.181 0.356-0.15zM8.6 24.313c0.094 0 0.238 0.081 0.344 0.188 0.15 0.15 0.181 0.231 0.156 0.363-0.019 0.094-0.1 0.238-0.188 0.313s-0.219 0.137-0.294 0.137c-0.081 0-0.219-0.075-0.313-0.169-0.113-0.113-0.175-0.238-0.169-0.35 0-0.094 0.069-0.244 0.15-0.325 0.088-0.087 0.225-0.156 0.313-0.156zM23.363 24.313c0.063 0.006 0.206 0.063 0.319 0.125 0.163 0.1 0.2 0.169 0.206 0.331 0 0.137-0.056 0.256-0.175 0.375-0.094 0.094-0.238 0.169-0.313 0.169-0.081 0-0.212-0.063-0.294-0.137-0.087-0.075-0.169-0.219-0.188-0.313-0.025-0.131 0.006-0.212 0.15-0.363 0.1-0.1 0.231-0.188 0.294-0.188zM21.85 25.481c0.069 0.019 0.188 0.1 0.269 0.181 0.075 0.087 0.137 0.194 0.137 0.244 0 0.056-0.038 0.175-0.081 0.269-0.050 0.094-0.131 0.194-0.188 0.219s-0.175 0.044-0.262 0.044c-0.087 0-0.225-0.069-0.313-0.169-0.131-0.137-0.156-0.212-0.125-0.363 0.019-0.1 0.069-0.225 0.106-0.269 0.031-0.050 0.125-0.106 0.2-0.137 0.075-0.025 0.188-0.038 0.256-0.019zM10.219 25.5c0.113 0 0.256 0.056 0.338 0.125 0.075 0.069 0.156 0.194 0.175 0.269 0.025 0.087-0.006 0.206-0.075 0.319-0.063 0.094-0.175 0.188-0.244 0.206s-0.2 0.019-0.294 0c-0.106-0.025-0.206-0.113-0.269-0.231-0.050-0.1-0.094-0.225-0.1-0.269 0-0.050 0.056-0.163 0.131-0.25 0.094-0.113 0.194-0.169 0.338-0.169zM12.069 26.313c0.069 0 0.213 0.087 0.313 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.212-0.181 0.313c-0.1 0.106-0.238 0.188-0.313 0.188-0.069 0-0.213-0.081-0.319-0.188-0.1-0.1-0.181-0.244-0.181-0.313 0.006-0.075 0.088-0.212 0.181-0.313 0.1-0.1 0.238-0.188 0.313-0.188zM19.944 26.313c0.069 0 0.212 0.087 0.313 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.212-0.181 0.313c-0.1 0.106-0.238 0.188-0.313 0.188-0.069 0-0.212-0.081-0.319-0.188-0.1-0.1-0.181-0.244-0.181-0.313 0.006-0.075 0.087-0.212 0.181-0.313 0.1-0.1 0.238-0.188 0.313-0.188zM13.944 26.813c0.037 0 0.162 0.044 0.281 0.094 0.169 0.075 0.231 0.144 0.25 0.281 0.019 0.106 0.006 0.244-0.031 0.313-0.031 0.069-0.125 0.169-0.2 0.225-0.081 0.050-0.194 0.094-0.25 0.094-0.063-0.006-0.194-0.087-0.3-0.194-0.1-0.1-0.181-0.244-0.181-0.313 0.006-0.075 0.088-0.212 0.181-0.313 0.1-0.1 0.213-0.188 0.25-0.188zM18.069 26.844c0.087 0.019 0.219 0.106 0.3 0.194 0.075 0.081 0.137 0.206 0.137 0.275s-0.081 0.212-0.181 0.313c-0.1 0.106-0.238 0.188-0.313 0.188-0.069 0-0.212-0.081-0.319-0.188-0.1-0.1-0.188-0.25-0.188-0.337-0.006-0.094 0.069-0.206 0.2-0.313 0.144-0.125 0.244-0.156 0.363-0.131zM16.006 27c0.069 0 0.212 0.087 0.313 0.188 0.106 0.106 0.188 0.244 0.188 0.313s-0.081 0.212-0.181 0.313c-0.1 0.106-0.238 0.188-0.313 0.188-0.069 0-0.213-0.081-0.319-0.188-0.1-0.1-0.181-0.244-0.181-0.313 0.006-0.075 0.088-0.212 0.181-0.313 0.1-0.1 0.238-0.188 0.312-0.188z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(215, 55, 55)"
        balance="0.00000000"
      >
        <UsdcToken data={solanaTokenData} />
      </CustomAccordion>
      <Divider sx={{backgroundColor:"grey"}}/>

      <CustomAccordion
        buttonName="Node"
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
        buttoncolor="rgb(215, 55, 55)"
        balance="0.00000000"
      >
        {/* <UsdcToken data={solanaTokenData} /> */}
        <TokenBox data={ethereumNode} enableButton={true} />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Self-hosted node"
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
        buttoncolor="rgb(215, 55, 55)"
        balance="0.00000000"
      >
        <UsdcToken
          data={bitcoinNodeData}
          enableButton={true}
          content="You can only use one type at once. Disable another type of BTC before enabling this."
        />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Self-hosted node"
        description="Litecoin"
        icon={
          <svg
            className="svg-inline--fa fa-ltc fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 32 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(191, 187, 187)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M16 0c-8.794 0-16 7.206-16 16s7.206 16 16 16 16-7.206 16-16-7.206-16-16-16zM25.972 25.972c-2.678 2.678-6.22 4.153-9.972 4.153s-7.294-1.475-9.972-4.153c-2.678-2.678-4.153-6.22-4.153-9.972s1.475-7.294 4.153-9.972c2.678-2.678 6.22-4.153 9.972-4.153s7.294 1.475 9.972 4.153c2.678 2.678 4.153 6.22 4.153 9.972s-1.475 7.294-4.153 9.972z
                                   M24.646 7.354c-2.324-2.324-5.395-3.604-8.646-3.604s-6.322 1.28-8.646 3.604c-2.324 2.324-3.604 5.395-3.604 8.646s1.28 6.322 3.604 8.646c2.324 2.324 5.395 3.604 8.646 3.604s6.322-1.28 8.646-3.604c2.324-2.324 3.604-5.395 3.604-8.646s-1.28-6.322-3.604-8.646zM20.688 22.563h-9.675l1.8-6.281-3.188 0.637-0.375-1.837 4.125-0.825 1.725-6.019 1.8 0.525-1.462 5.081 3.188-0.637 0.375 1.837-4.125 0.825-1.387 4.819h7.2z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(215, 55, 55)"
        balance="0.00000000"
      >
        <UsdcToken
          data={ltccoinNodeData}
          enableButton={true}
          content="You can only use one type at once. Disable another type of LTC before enabling this."
        />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Self-hosted node"
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
        buttoncolor="rgb(215, 55, 55)"
        balance="0.00000000"
      >
        <UsdcToken
          data={dogecoinNodeData}
          enableButton={true}
          content="You can only use one type at once. Disable another type of DOGE before enabling this."
        />
      </CustomAccordion>

      <CustomAccordion
        buttonName="Self-hosted node"
        description="Bitcoin Cash"
        icon={
          <svg
            className="svg-inline--fa fa-bch fa-w-16 transformed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 32 32"
            data-v-8f1cfd85=""
            data-v-f282a21b=""
            style={{
              color: "rgb(141, 195, 81)",
              width: "25px",
              marginRight: "25px",
            }}
          >
            <path
              fill="currentColor"
              d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z
                                   M20.305 9.75c-1.070-1.83-3-1.705-5.19-0.92l-1.235-2.66-1.615 0.75 1.2 2.58-1.285 0.615-1.18-2.615-1.615 0.745 1.23 2.655c-0.345 0.17-0.69 0.34-1.025 0.5v0l-2.23 1.030 0.8 1.73s1.18-0.58 1.17-0.545c0.139-0.089 0.308-0.141 0.49-0.141 0.321 0 0.603 0.164 0.768 0.413l0.002 0.003 1.4 3.025 0.175-0.070-0.17 0.080 1.965 4.24c0.029 0.070 0.046 0.152 0.046 0.237 0 0.277-0.179 0.512-0.427 0.597l-0.004 0.001c0.030 0-1.175 0.545-1.175 0.545l0.57 2.080 2.105-0.975 1.16-0.525 1.265 2.67 1.615-0.745-1.23-2.66c0.445-0.195 0.875-0.39 1.295-0.585l1.225 2.645 1.595-0.75-1.24-2.7c2.645-1.415 4.23-3 3.285-5.64-0.76-2.145-2.155-2.615-3.865-2.27 0.715-0.89 0.91-2 0.125-3.34zM20.7 16.54c0.935 2-2.61 3.37-3.705 3.88l-1.645-3.56c1.095-0.505 4.385-2.415 5.35-0.32zM17.625 11.87c0.845 1.825-2.12 2.94-3.030 3.36l-1.495-3.23c0.9-0.42 3.645-2.035 4.525-0.13z"
              data-v-8f1cfd85=""
            ></path>
          </svg>
        }
        buttoncolor="rgb(215, 55, 55)"
        balance="0.00000000"
      >
        <UsdcToken
          data={btccashcoinNodeData}
          enableButton={true}
          content="You can only use one type at once. Disable another type of BCH before enabling this."
        />
      </CustomAccordion>
    </Box>
  );
};

export default Wallet;   
