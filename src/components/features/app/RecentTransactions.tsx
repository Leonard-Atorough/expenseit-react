import { Box, Paper, Typography } from "@mui/material";

export function RecentTransactions() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Recent Transactions
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography color="text.secondary">No transactions yet</Typography>
      </Paper>
    </Box>
  );
}
