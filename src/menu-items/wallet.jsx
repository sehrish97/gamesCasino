// assets
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HubIcon from "@mui/icons-material/Hub";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

// icons
const icons = {
  NoteAltIcon,
  HubIcon,
  SelfImprovementIcon,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const wallet = {
  id: "group-wallet",
  title: "Wallet",
  groupTitleVisible: true,
  groupDivider: false,
  type: "group",
  children: [
    {
      id: "deposits",
      title: "Deposits",
      type: "item",
      url: "/admin/deposits",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "withdraws",
      title: "Withdraws",
      type: "item",
      url: "/admin/withdraws",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    
  ],
};

export default wallet;
