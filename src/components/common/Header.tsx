import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/Auth";
import { AppBarContainer } from "./AppBarContainer";
import type { SxProps, Theme } from "@mui/material";

interface HeaderProps {
  pageTitle?: string;
  sx?: SxProps<Theme>;
}

export function Header({ pageTitle, sx }: HeaderProps) {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      void navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const rightContent = isLoggedIn ? (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, zIndex: 10 }}>
      <Typography variant="body1">
        {user?.firstName} {user?.lastName}
      </Typography>
      <IconButton color="inherit" onClick={() => void handleLogout()}>
        <LogoutIcon />
      </IconButton>
    </Box>
  ) : (
    <Button color="inherit" sx={{ fontWeight: "600" }} component={Link} to="/login">
      Login
    </Button>
  );

  return (
    <AppBarContainer
      position="sticky"
      brand="EXPENSEIT"
      pageTitle={pageTitle}
      rightContent={rightContent}
      sx={sx}
    />
  );
}
