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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginOrRegister /> },
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
