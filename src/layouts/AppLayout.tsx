import Box from "@mui/material/Box";
import { AppHeader, AppSidebar } from "../components/features/app";
import { Outlet } from "react-router";
import { useState, useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import type { Transaction } from "../models";

export function AppLayout() {
  const API_BASE_URL = "http://localhost:4000/api";
  const TRANSACTIONS_ENDPOINT = `${API_BASE_URL}/transactions`;
  const auth = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const page = `${auth.user?.firstName}'s DASHBOARD`;

  useCallback(async () => {
    const transactions = await fetch(TRANSACTIONS_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
      credentials: "include",
    });
    if (transactions.ok) {
      const transactionsData = (await transactions.json()) as Transaction[];
      setTransactions(transactionsData);
    }
  }, [TRANSACTIONS_ENDPOINT, auth.accessToken]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppHeader />
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <AppSidebar />
        <Box
          sx={{
            flex: 1,
            p: 3,
            overflowY: "auto",
          }}
        >
          <Outlet context={{ page, transactions }} />
        </Box>
      </Box>
    </Box>
  );
}
