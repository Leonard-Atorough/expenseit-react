import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { LandingPage } from "./pages/LandingPage.tsx";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.ts";
import { CssBaseline } from "@mui/material";
import { LoginOrRegister } from "./components/auth/LoginOrRegister.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import { UserPage } from "./pages/UserPage.tsx";
import { Dashboard } from "./components/Dashboard.tsx";
import { Transactions } from "./components/Transactions.tsx";
import { Reports } from "./components/Reports.tsx";
import { Settings } from "./components/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginOrRegister /> },
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
