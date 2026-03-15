import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
