import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTransactionActions } from "../../../../hooks/useData";
import type { CreateTransactionData } from "../../../../api/schemas";
import { useState } from "react";

export interface AddTransactionDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function AddTransactionDialog({ open, onClose }: AddTransactionDialogProps) {
  const transactionActions = useTransactionActions();
  const [category, setCategory] = useState<string | null>("Other");
  const [typeValue, setTypeValue] = useState<"Income" | "Expense">("Expense");

  const addTransaction = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const newTransaction: CreateTransactionData = {
      date: (formData.get("date") as string) || new Date().toISOString().split("T")[0],
      description: (formData.get("description") as string) || "",
      amount: parseFloat((formData.get("amount") as string) || "0"),
      category: (formData.get("category") as string) || "Other",
      type: ((formData.get("type") as string)?.toLowerCase() as "income" | "expense") || "expense",
    };
    await transactionActions.addTransaction(newTransaction);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Transaction</DialogTitle>
      <Box
        component="form"
        onSubmit={(e) => void addTransaction(e)}
        sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2, width: "400px" }}
      >
        <TextField
          name="date"
          label="Date"
          type="date"
          fullWidth
          slotProps={{ inputLabel: true }}
          defaultValue={new Date().toISOString().split("T")[0]}
        />

        <TextField name="description" label="Description" fullWidth />

        <TextField name="amount" label="Amount" type="number" fullWidth />

        <Autocomplete
          options={["Food", "Rent", "Salary", "Entertainment", "Other"]}
          value={category}
          onChange={(_, newValue) => setCategory(newValue)}
          renderInput={(params) => <TextField {...params} label="Category" fullWidth />}
        />

        <Autocomplete
          options={["Income", "Expense"]}
          value={typeValue}
          onChange={(_, newValue) => setTypeValue((newValue as "Income" | "Expense") ?? "Expense")}
          renderInput={(params) => <TextField {...params} label="Type" fullWidth />}
        />

        {/* Hidden inputs so FormData picks up Autocomplete values */}
        <input type="hidden" name="category" value={category ?? ""} />
        <input type="hidden" name="type" value={typeValue ?? ""} />

        <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
