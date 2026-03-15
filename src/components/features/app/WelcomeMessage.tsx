import { Box, Typography } from "@mui/material";
import type { UserResponse } from "../../../api/schemas";

export function WelcomeMessage({ user }: { user: UserResponse | null }) {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.firstName}!
      </Typography>
    </Box>
  );
}
