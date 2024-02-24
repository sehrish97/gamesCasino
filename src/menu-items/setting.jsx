// assets
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HubIcon from "@mui/icons-material/Hub";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';



// icons
const icons = {
  NoteAltIcon,
  HubIcon,
  SelfImprovementIcon,
  CardGiftcardOutlinedIcon,
  PhotoLibraryOutlinedIcon,
  PaletteOutlinedIcon,
  FormatColorFillOutlinedIcon,
  SettingsOutlinedIcon,
  AccountBalanceWalletOutlinedIcon,
  AdUnitsOutlinedIcon,
  StarsOutlinedIcon,
  SmartToyOutlinedIcon,
  QuestionAnswerOutlinedIcon
  
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
      icon: icons.CardGiftcardOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "slider",
      title: "Slider",
      type: "item",
      url: "/admin/slider",
      icon: icons.PhotoLibraryOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "themes",
      title: "Themes",
      type: "item",
      url: "/admin/themes",
      icon: icons.PaletteOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "appearance",
      title: "Appearance",
      type: "item",
      url: "/admin/appearance",
      icon: icons.FormatColorFillOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "roles",
      title: "Roles",
      type: "item",
      url: "/admin/roles",
      icon: icons.SettingsOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "wallet",
      title: "Wallet",
      type: "item",
      url: "/admin/wallet",
      icon: icons.AccountBalanceWalletOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "banner",
      title: "Banner",
      type: "item",
      url: "/admin/banner",
      icon: icons.AdUnitsOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "vip",
      title: "VIP",
      type: "item",
      url: "/admin/vip",
      icon: icons.StarsOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: "bots",
      title: "Bots",
      type: "collapse",
      url: "/admin/bots",
      icon: icons.SmartToyOutlinedIcon,
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
          icon: icons.QuestionAnswerOutlinedIcon,
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
