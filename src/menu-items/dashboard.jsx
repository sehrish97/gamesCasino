// assets
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HubIcon from "@mui/icons-material/Hub";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WaterIcon from '@mui/icons-material/Water';
import PercentIcon from '@mui/icons-material/Percent';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TelegramIcon from '@mui/icons-material/Telegram';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// icons
const icons = {
  NoteAltIcon,
  HubIcon,
  SelfImprovementIcon,
  DashboardIcon,
  NotificationsIcon,
  GroupIcon,
  AutoAwesomeIcon,
  WaterIcon,
  PercentIcon,
  SportsVolleyballIcon,
  AccountBalanceWalletIcon,
  WorkspacePremiumIcon,
  ConfirmationNumberIcon,
  LocalActivityIcon,
  TelegramIcon,
  ContentCopyIcon,
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
      icon: icons.DashboardIcon
      ,
      breadcrumbs: false,
    },
    {
      id: "notifications",
      title: "Notifications",
      type: "item",
      url: "/admin/notifications  ",
      icon: icons.NotificationsIcon,
      breadcrumbs: false,
    },
    {
      id: "Users",
      title: "Users",
      type: "item",
      url: "/admin/users",
      icon: icons.GroupIcon,
      breadcrumbs: false,
    },
    {
      id: "analytics",
      title: "Analytics",
      type: "item",
      url: "/admin/games/stats",
      icon: icons.AutoAwesomeIcon,
      breadcrumbs: false,
    },
    {
      id: "activity",
      title: "Activity",
      type: "item",
      url: "/admin/activity",
      icon: icons.WaterIcon,
      breadcrumbs: false,
    },
    {
      id: "promocodes",
      title: "Promocodes",
      type: "collapse",
      icon: icons.PercentIcon,
      breadcrumbs: false,
      children: [
        {
          id: "deposits",
          title: "Deposits",
          type: "item",
          url: "/admin/promocodes",
          icon: icons.AccountBalanceWalletIcon,
        },
        {
          id: "bonus",
          title: "Bonus",
          type: "item",
          url: "/admin/promocodes/bonus  ",
          icon: icons.WorkspacePremiumIcon,
        },
      ],
    },
    {
      id: "sportsbook",
      title: "Sportsbook",
      type: "collapse",
      icon: icons.SportsVolleyballIcon,
      breadcrumbs: false,
      children: [
        {
          id: "single-slips",
          title: "Single Slips",
          type: "item",
          url: "/admin/sport/singleSlips",
          icon: icons.ConfirmationNumberIcon,
        },
        {
          id: "multi-slips",
          title: "Multi Slips",
          type: "item",
          url: "admin/sport/multiSlips",
          icon: icons.LocalActivityIcon,
        },
        {
          id: "featured",
          title: "Featured",
          type: "item",
          url: "/admin/sport/featured",
          icon: icons.AutoAwesomeIcon,
        },
      ],
    },
    {
      id: "telegram",
      title: "Telegram",
      type: "collapse",
      icon: icons.TelegramIcon,
      breadcrumbs: false,
      children: [
        {
          id: "templates",
          title: "Templates",
          type: "item",
          url: "admin/database/telegram_templates",
          icon: icons.ContentCopyIcon,
        },
      ],
    },
   
  ],
};

export default dashboard;
