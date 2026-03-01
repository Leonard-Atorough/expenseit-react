import { IconButton, Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBarContainerCopy } from "../../common/AppBarContainer copy";
import { useAuthActions, useCurrentUser } from "../../../hooks/useAuth";

export function AppHeader() {
  const action = useAuthActions();
  const user = useCurrentUser();

  const handleLogout = async () => {
    await action.logout();
  };

  const innerContent = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, zIndex: 10 }}>
      <Typography variant="body1">
        {user?.firstName} {user?.lastName}
      </Typography>
      <IconButton color="inherit" onClick={() => void handleLogout()}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );

  return (
    <AppBarContainerCopy brand="EXPENSEIT" pageTitle="Dashboard" position="static">
      {innerContent}
    </AppBarContainerCopy>
  );
}
