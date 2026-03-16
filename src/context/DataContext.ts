import { createContext } from "react";
import type { CreateTransactionData, UpdateTransactionData } from "../api/schemas";
import type { Transaction } from "../models";

export interface DataContextType {
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
  addTransaction: (transaction: CreateTransactionData) => Promise<void>;
  updateTransaction: (id: string, updatedData: UpdateTransactionData) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
  listTransactions: () => Promise<void>;
  getTransactionById: (id: string) => Promise<Transaction | undefined>;
}

export const DataContext = createContext<DataContextType>({
  transactions: [],
  isLoading: false,
  error: null,
  addTransaction: async () => {
    await Promise.reject(new Error("addTransaction called outside of DataProvider"));
  },
  updateTransaction: async () => {
    await Promise.reject(new Error("updateTransaction called outside of DataProvider"));
  },
  deleteTransaction: async () => {
    await Promise.reject(new Error("deleteTransaction called outside of DataProvider"));
  },
  listTransactions: async () => {
    await Promise.reject(new Error("listTransactions called outside of DataProvider"));
  },
  getTransactionById: async () => {
    return await Promise.reject(new Error("getTransactionById called outside of DataProvider"));
  },
});
