import type { Transaction } from "../../models";
import APIClient from "../client";
import { config } from "../config";
import type { CreateTransactionData, UpdateTransactionData } from "../schemas";

async function getTransactions(token: string): Promise<Transaction[]> {
  const result = await APIClient.GET<Transaction[]>(config.endpoints.transaction.list, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to fetch transactions");
  }
  return result.data!;
}

async function getTransactionById(id: string, token: string): Promise<Transaction> {
  const result = await APIClient.GET<Transaction>(config.endpoints.transaction.get(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to fetch transaction");
  }
  return result.data!;
}

async function createTransaction(
  transactionData: CreateTransactionData,
  token: string,
): Promise<Transaction> {
  const result = await APIClient.POST<Transaction, CreateTransactionData>(
    config.endpoints.transaction.create,
    transactionData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to create transaction");
  }
  return result.data!;
}

async function updateTransaction(
  id: string,
  transactionData: UpdateTransactionData,
  token: string,
): Promise<Transaction> {
  const result = await APIClient.PUT<Transaction, UpdateTransactionData>(
    config.endpoints.transaction.update(id),
    transactionData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to update transaction");
  }
  return result.data!;
}

async function deleteTransaction(id: string, token: string): Promise<void> {
  const result = await APIClient.DELETE<void>(config.endpoints.transaction.delete(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!result.ok) {
    throw new Error(result.message ?? "Failed to delete transaction");
  }
}

export {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
