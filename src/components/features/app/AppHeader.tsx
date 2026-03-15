import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router";
import { AppBarContainer } from "../../common/AppBarContainer";
import { useAuthActions, useCurrentUser } from "../../../hooks/useAuth";

export function AppHeader() {
  const action = useAuthActions();
  const user = useCurrentUser();

  const handleLogout = async () => {
    await action.logout();
  };

  return (
    <AppBarContainer position="static">
      <Link to="/app" style={{ textDecoration: "none", color: "inherit" }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          EXPENSEIT
        </Typography>
      </Link>
      <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body2">
          {user?.firstName} {user?.lastName}
        </Typography>
        <IconButton color="inherit" onClick={() => void handleLogout()} size="small">
          <LogoutIcon fontSize="small" />
        </IconButton>
      </Box>
    </AppBarContainer>
  );
}
