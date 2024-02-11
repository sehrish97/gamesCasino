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

const setting = {
  id: "group-setting",
  title: "Setting",
  groupTitleVisible: true,
  groupDivider: false,
  type: "group",
  children: [
    {
      id: "plugins",
      title: "Plugins",
      type: "item",
      url: "/admin/plugins",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "slider",
      title: "Slider",
      type: "item",
      url: "/admin/slider",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "themes",
      title: "Themes",
      type: "item",
      url: "/admin/themes",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "appearance",
      title: "Appearance",
      type: "item",
      url: "/admin/appearance",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "roles",
      title: "roles",
      type: "item",
      url: "/admin/roles",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "wallet",
      title: "Wallet",
      type: "item",
      url: "/admin/wallet",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "banner",
      title: "Banner",
      type: "item",
      url: "/admin/banner",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "vip",
      title: "VIP",
      type: "item",
      url: "/admin/vip",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "bots",
      title: "Bots",
      type: "collapse",
      url: "/admin/bots",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
      children: [
        {
          id: "bets(classic)",
          title: "Bets (classic)",
          type: "item",
          url: "/admin/bots/bets",
          icon: icons.SelfImprovementIcon,
        },
        {
          id: "chat",
          title: "chat",
          type: "item",
          url: "/admin/bots/chat",
          icon: icons.SelfImprovementIcon,
        },
      ],
    },
    {
      id: "games",
      title: "Games",
      type: "item",
      url: "/admin/games",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
  ],
};

export default setting;
