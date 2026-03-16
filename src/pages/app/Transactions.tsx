import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import type { Transaction } from "../../models";
import TransactionHeader from "../../components/features/app/transactions/TransactionHeader";
import TransactionTable from "../../components/features/app/transactions/TransactionTable";

export interface TransactionsPageProps {
  transactions: Transaction[];
}

export default function TransactionsPage() {

  return (
    <Paper elevation={1} sx={{ p: 4, height: "100%" }}>
      <TransactionHeader />
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <TransactionTable />
      </Box>
    </Paper>
  );
}
