import "./App.css";
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.ts";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import { ProtectedRoute } from "./components/common";
import { LandingPage, LoginOrRegisterPage } from "./pages";
import { AuthLayout, AppLayout, PublicLayout } from "./layouts";
import AuthProvider from "./providers/AuthProvider.tsx";

const Dashboard = lazy(() => import("./pages/app/Dashboard.tsx"));
const Transactions = lazy(() => import("./components/features/app/Transactions.tsx"));
const Reports = lazy(() => import("./components/features/app/Reports.tsx"));
const Settings = lazy(() => import("./components/features/app/Settings.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginOrRegisterPage /> }],
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
      { path: "transactions", element: <Transactions transactions={[]} /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
