import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useRecentTransactions } from "../../../hooks/useData";

export function RecentTransactions() {
  const transactions = useRecentTransactions();

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Recent Transactions
      </Typography>
      <Paper sx={{ p: 3 }}>
        {transactions.length === 0 ? (
          <Typography color="text.secondary">No transactions yet</Typography>
        ) : (
          transactions.map((transaction) => (
            <Typography key={transaction.id}>
              {transaction.description} - {transaction.amount}
            </Typography>
          ))
        )}
      </Paper>
    </Box>
  );
}
