import "./App.css";
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.ts";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import { ProtectedRoute } from "./components/common";
import { AuthLayout, AppLayout, PublicLayout } from "./layouts";
import AuthProvider from "./providers/AuthProvider.tsx";
import DataProvider from "./providers/DataProvider.tsx";

const LandingPage = lazy(() => import("./pages/public/LandingPage.tsx"));
const LoginOrRegisterPage = lazy(() => import("./pages/auth/LoginOrRegisterPage.tsx"));
const Dashboard = lazy(() => import("./pages/app/Dashboard.tsx"));
const Transactions = lazy(() => import("./pages/app/Transactions.tsx"));
const Reports = lazy(() => import("./pages/app/Reports.tsx"));
const Settings = lazy(() => import("./pages/app/Settings.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<CircularProgress />}>
            <LandingPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<CircularProgress />}>
            <LoginOrRegisterPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/app",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "transactions", element: <Transactions /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <DataProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
