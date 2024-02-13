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

const dashboard = {
  id: "group-dashboard",
  title: "Dashboard",
  groupTitleVisible: false,
  groupDivider: false,
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/admin",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "notifications",
      title: "Notifications",
      type: "item",
      url: "/admin/notifications  ",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "Users",
      title: "Users",
      type: "item",
      url: "/admin/users",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "analytics",
      title: "Analytics",
      type: "item",
      url: "/admin/games/stats",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "activity",
      title: "Activity",
      type: "item",
      url: "/admin/activity",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "promocodes",
      title: "Promocodes",
      type: "collapse",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
      children: [
        {
          id: "deposits",
          title: "Deposits",
          type: "item",
          url: "/admin/promocodes",
          icon: icons.SelfImprovementIcon,
        },
        {
          id: "bonus",
          title: "Bonus",
          type: "item",
          url: "/admin/promocodes/bonus  ",
          icon: icons.SelfImprovementIcon,
        },
      ],
    },
    {
      id: "sportsbook",
      title: "Sportsbook",
      type: "collapse",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
      children: [
        {
          id: "single-slips",
          title: "Single Slips",
          type: "item",
          url: "/admin/sport/singleSlips",
          icon: icons.SelfImprovementIcon,
        },
        {
          id: "multi-slips",
          title: "Multi Slips",
          type: "item",
          url: "admin/sport/multiSlips",
          icon: icons.SelfImprovementIcon,
        },
        {
          id: "featured",
          title: "Featured",
          type: "item",
          url: "/admin/sport/featured",
          icon: icons.SelfImprovementIcon,
        },
      ],
    },
    {
      id: "telegram",
      title: "Telegram",
      type: "collapse",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
      children: [
        {
          id: "templates",
          title: "Templates",
          type: "item",
          url: "admin/database/telegram_templates",
          icon: icons.SelfImprovementIcon,
        },
      ],
    },
   
  ],
};

export default dashboard;
