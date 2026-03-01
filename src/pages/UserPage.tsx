import { Outlet, useOutletContext } from "react-router";
import Box from "@mui/material/Box";
import { useAuth } from "../hooks/useAuth";
import { AppSidebar, DRAWER_WIDTH } from "../components/features/app";
import { useCallback, useEffect, useState } from "react";
import type { Transaction } from "../models/TransactionModel";

export function UserPage() {
  const API_BASE_URL = "http://localhost:4000/api";
  const TRANSACTIONS_ENDPOINT = `${API_BASE_URL}/transactions`;
  const { setPage } = useOutletContext<{ setPage: (page: string | undefined) => void }>();
  const auth = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setPage(`${auth.user?.firstName}'s DASHBOARD`);
  }, [setPage, auth.user?.firstName]);

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
    <Box sx={{ display: "flex", height: "100%" }}>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          overflowY: "auto",
          height: "100%",
        }}
      >
        <Outlet context={{ setPage, transactions }} />
      </Box>
    </Box>
  );
}
