import { StrictMode, use } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import { LandingPage } from "./pages/LandingPage.tsx";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.ts";
import { CssBaseline } from "@mui/material";
import { LoginOrRegisterPage } from "./pages/LoginOrRegisterPage";
import { ProtectedRoute } from "./components/common";
import { UserPage } from "./pages/UserPage.tsx";
import { Dashboard, Transactions, Reports, Settings } from "./components/features/app";
import { useAuth } from "./hooks/Auth.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginOrRegisterPage /> },
      {
        path: "user",
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Dashboard /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "transactions", element: <Transactions /> },
          { path: "reports", element: <Reports /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
