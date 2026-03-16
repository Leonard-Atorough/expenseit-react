import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import type { Transaction } from "../../models";
import TransactionHeader from "../../components/features/app/transactions/TransactionHeader";
import TransactionTable from "../../components/features/app/transactions/TransactionTable";
import { useState } from "react";
import AddTransactionDialog from "../../components/features/app/transactions/AddTransactionDialog";

export interface TransactionsPageProps {
  transactions: Transaction[];
}

export default function TransactionsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Paper elevation={1} sx={{ p: 4, height: "100%" }}>
      <TransactionHeader onAddTransaction={() => setIsOpen(true)} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        height="100%"
        width="100%"
        sx={{ mt: 3 }}
      >
        <TransactionTable />
      </Box>
      <AddTransactionDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </Paper>
  );
}
