import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { Transaction } from "../../models";
import TransactionHeader from "../../components/features/app/transactions/TransactionHeader";
import { useTransactions } from "../../hooks/useData";

export interface TransactionsPageProps {
  transactions: Transaction[];
}

export default function TransactionsPage() {
  const transactions = useTransactions();
  
  return (
    <Paper elevation={1} sx={{ p: 4, height: "100%" }}>
      <TransactionHeader />
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="h6" color="textSecondary">
          {transactions.length === 0 ? "No transactions yet" : "Transactions available"}
        </Typography>
      </Box>
    </Paper>
  );
}
