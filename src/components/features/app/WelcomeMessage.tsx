import { Box, Typography } from "@mui/material";
import type { userData } from "../../../types";

export function WelcomeMessage({ user }: { user: userData }) {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.firstName}!
      </Typography>
    </Box>
  );
}
