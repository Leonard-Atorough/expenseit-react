import { Outlet } from "react-router";
import { useState } from "react";
import Box from "@mui/material/Box";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import { Header } from "./components/common";

function App() {
  const [page, setPage] = useState<string | undefined>(undefined);

  return (
    <AuthProvider>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header pageTitle={page} />
        <Box sx={{ flex: 1, overflow: "hidden" }}>
          <Outlet context={{ setPage }} />
        </Box>
      </Box>
    </AuthProvider>
  );
}

export default App;
