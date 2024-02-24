// assets
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HubIcon from "@mui/icons-material/Hub";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
// icons
const icons = {
  NoteAltIcon,
  HubIcon,
  SelfImprovementIcon,
  ArrowDownwardOutlinedIcon,
  ArrowUpwardOutlinedIcon
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
      icon: icons.ArrowDownwardOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "withdraws",
      title: "Withdraws",
      type: "item",
      url: "/admin/withdraws",
      icon: icons.ArrowUpwardOutlinedIcon,
      breadcrumbs: false,
    },
    
  ],
};

export default wallet;
