import type { Transaction } from "../../models";
import APIClient from "../client";
import { config } from "../config";
import type { CreateTransactionData, UpdateTransactionData } from "../schemas";

async function fetchTransactions(): Promise<Transaction[]> {
  const result = await APIClient.GET<Transaction[]>(config.endpoints.transaction.list);
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to fetch transactions");
  }
  return result.data!;
}

async function fetchTransactionById(id: string): Promise<Transaction> {
  const result = await APIClient.GET<Transaction>(config.endpoints.transaction.get(id));
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to fetch transaction");
  }
  return result.data!;
}

async function createTransaction(transactionData: CreateTransactionData): Promise<Transaction> {
  const result = await APIClient.POST<Transaction, CreateTransactionData>(
    config.endpoints.transaction.create,
    transactionData,
  );
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to create transaction");
  }
  return result.data!;
}

async function updateTransaction(
  id: string,
  transactionData: UpdateTransactionData,
): Promise<Transaction> {
  const result = await APIClient.PUT<Transaction, UpdateTransactionData>(
    config.endpoints.transaction.update(id),
    transactionData,
  );
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to update transaction");
  }
  return result.data!;
}

async function deleteTransaction(id: string): Promise<void> {
  const result = await APIClient.DELETE<void>(config.endpoints.transaction.delete(id));
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to delete transaction");
  }
}

export {
  createTransaction,
  fetchTransactions,
  fetchTransactionById,
  updateTransaction,
  deleteTransaction,
};
