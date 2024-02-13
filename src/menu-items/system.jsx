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

const system = {
  id: "group-system",
  title: "System",
  groupTitleVisible: true,
  groupDivider: false,
  type: "group",
  children: [
    {
      id: "license",
      title: "License",
      type: "item",
      url: "/admin/license",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "SSH",
      title: "SSH",
      type: "item",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "ssl",
      title: "SSL",
      type: "item",
      url: "/admin/ssl",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "database",
      title: "Database",
      type: "item",
      url: "/admin/database",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "file-manager",
      title: "File Manager",
      type: "item",
      url: "/admin/files",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "update",
      title: "update",
      type: "item",
      url: "/admin/ota",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
    {
      id: "logs",
      title: "Logs",
      type: "item",
      url: "/admin/logs",
      icon: icons.SelfImprovementIcon,
      breadcrumbs: false,
    },
  ],
};

export default system;
