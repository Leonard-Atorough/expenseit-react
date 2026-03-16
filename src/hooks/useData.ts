import { useContext } from "react";
import { DataContext, type DataContextType } from "../context/DataContext";

/**
 * Custom hook to access the DataContext. Provides state and actions related to transactions.
 * Must be used within a DataProvider.
 * @returns The context value containing transactions and related actions.
 * @throws Will throw an error if used outside of a DataProvider.
 */
export function useData(): DataContextType {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

/**
 * Custom hook to access transaction-related actions from the DataContext.
 * Provides functions to add, update, delete, and fetch transactions.
 * @returns An object containing transaction action functions.
 */
export function useDataActions() {
  const {
    addTransaction,
    updateTransaction,
    deleteTransaction,
    listTransactions,
    getTransactionById,
  } = useData();
  return {
    addTransaction,
    updateTransaction,
    deleteTransaction,
    listTransactions,
    getTransactionById,
  };
}

/**
 * Custom hook to access the list of transactions from the DataContext.
 * @returns An array of transactions.
 */
export function useTransactions() {
  const { transactions } = useData();
  return transactions;
}

/**
 * Custom hook to access a specific transaction by its ID from the DataContext.
 * @param id - The ID of the transaction to retrieve.
 * @returns The transaction with the specified ID.
 */
export function useTransactionById(id: string) {
  const { getTransactionById } = useData();
  return getTransactionById(id);
}

/**
 * Custom hook to calculate and return a summary of transactions, including total income, total expenses, and net total.
 * @returns An object containing totalIncome, totalExpense, and netTotal.
 */
export function useTransactionSummary() {
  const { transactions } = useData();
  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const netTotal = totalIncome + totalExpense;
  return { totalIncome, totalExpense, netTotal };
}

/**
 * Custom hook to extract and return a list of unique transaction categories from the transactions in the DataContext.
 * @returns An array of unique transaction categories.
 */
export function useTransactionCategories() {
  const { transactions } = useData();
  const categories = Array.from(new Set(transactions.map((t) => t.category))).filter((c) => c);
  return categories;
}

/**
 * Custom hook to return the most recent transactions, sorted by date in descending order.
 * @param count - The number of recent transactions to return (default is 5).
 * @returns An array of the most recent transactions.
 */
export function useRecentTransactions(count = 5) {
  const { transactions } = useData();
  return transactions
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}