import { Box, Container } from "@mui/material";
import { AppHeader, AppSidebar, DRAWER_WIDTH } from "../components/features/app";
import { Outlet, useOutletContext } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import type { Transaction } from "../models";

export function AppLayout() {
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
    <Container>
      <AppHeader />
      <Box>
        <AppSidebar />
        <Box
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
    </Container>
  );
}
