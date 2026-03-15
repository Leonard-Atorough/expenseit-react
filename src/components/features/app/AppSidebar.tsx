import { useLocation, useNavigate } from "react-router";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

export const DRAWER_WIDTH = " 240px";

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

interface AppSidebarProps {
  menuItems?: MenuItem[];
}

export function AppSidebar({ menuItems }: AppSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const defaultMenuItems: MenuItem[] = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/app/dashboard" },
    { text: "Transactions", icon: <ReceiptIcon />, path: "/app/transactions" },
    { text: "Reports", icon: <AssessmentIcon />, path: "/app/reports" },
    { text: "Settings", icon: <SettingsIcon />, path: "/app/settings" },
  ];

  const items = menuItems ?? defaultMenuItems;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        py: 2,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          position: "relative",
          height: "calc(100vh - 64px)",
          top: "6px",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <List>
          {items.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => void navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
