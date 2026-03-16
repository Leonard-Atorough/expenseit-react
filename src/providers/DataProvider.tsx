import { useState, useCallback, useEffect } from "react";
import type { CreateTransactionData, UpdateTransactionData } from "../api/schemas";
import type { Transaction } from "../models";
import { DataContext } from "../context/DataContext";
import {
  fetchTransactions,
  fetchTransactionById,
  createTransaction,
  updateTransaction as apiUpdateTransaction,
  deleteTransaction as apiDeleteTransaction,
} from "../api/services/transaction";
import { useAuth } from "../hooks/useAuth";
import { setTokenProvider } from "../api/client";

export default function DataProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const auth = useAuth();

  useEffect(() => {
    setTokenProvider(() => auth.accessToken ?? null);
  }, [auth.accessToken]);

  const addTransaction = useCallback(async (transaction: CreateTransactionData) => {
    try {
      setIsLoading(true);
      setError(null);
      const newTransaction = await createTransaction(transaction);
      setTransactions((prev) => [...prev, newTransaction]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateTransaction = useCallback(async (id: string, updatedData: UpdateTransactionData) => {
    try {
      setIsLoading(true);
      setError(null);
      const updatedTransaction = await apiUpdateTransaction(id, updatedData);
      setTransactions((prev) => prev.map((t) => (t.id === id ? updatedTransaction : t)));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteTransaction = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await apiDeleteTransaction(id);
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const listTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getTransactionById = useCallback(async (id: string): Promise<Transaction | undefined> => {
    try {
      setIsLoading(true);
      setError(null);
      const transaction = await fetchTransactionById(id);
      return transaction;
    } catch (err) {
      setError((err as Error).message);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        transactions,
        isLoading,
        error,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        listTransactions,
        getTransactionById,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
