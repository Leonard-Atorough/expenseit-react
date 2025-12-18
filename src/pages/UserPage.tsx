import { Outlet, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../hooks/Auth";
import { useState } from "react";
import { AppBarContainer } from "../components/common";
import { AppSidebar, DRAWER_WIDTH } from "../components/features/app";

export function UserPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const theme = useTheme();

  const [page, setPage] = useState<string | undefined>(undefined);

  const handleLogout = async () => {
    try {
      await logout();
      void navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBarContainer
        brand="EXPENSEIT"
        pageTitle={page}
        rightContent={
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">
              {user?.firstName} {user?.lastName}
            </Typography>
            <IconButton color="inherit" onClick={() => void handleLogout()}>
              <LogoutIcon />
            </IconButton>
          </Box>
        }
        sx={{
          position: "fixed",
          zIndex: theme.zIndex.drawer + 1,
        }}
      />

      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${DRAWER_WIDTH}px)` }}>
        <Box sx={{ height: "64px" }} /> {/* Spacer for fixed AppBar */}
        <Outlet context={{ setPage }} />
      </Box>
    </Box>
  );
}
