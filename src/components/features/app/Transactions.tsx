import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import type { Transaction } from "../../../models/transactions";

export default function Transactions({ transactions }: { transactions: Transaction[] }) {
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h3">Transactions</Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add Transaction
        </Button>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography color="text.secondary">
          {transactions.length === 0 ? "No transactions yet" : ""}
        </Typography>
      </Paper>
      <Box>
        {transactions.map((transaction) => (
          <Paper key={transaction.id} sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">{transaction.description}</Typography>
            <Typography color="text.secondary">${transaction.amount.toFixed(2)}</Typography>
            <Typography color="text.secondary">
              {new Date(transaction.date).toLocaleDateString()}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
