import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { UserResponse } from "../../../api/schemas";

export function WelcomeMessage({ user }: { user: UserResponse | null }) {
  return (
    <Box mb={4}>
      <Typography variant="h1" gutterBottom>
        <Typography component="span" variant="h1">
          Welcome back
        </Typography>
        <Typography component="span" variant="h1" color="primary">
          {user ? `, ${user.firstName}!` : "!"}
        </Typography>
      </Typography>

      <Typography variant="subtitle1" color="textSecondary">
        Here's a summary of your financial activity.
      </Typography>
    </Box>
  );
}
