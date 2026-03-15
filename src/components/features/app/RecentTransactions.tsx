import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
