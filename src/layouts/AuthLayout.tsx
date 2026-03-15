import Box from "@mui/material/Box";
import { MainHeader } from "../components";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";

export function AuthLayout() {
  const [page, setPage] = useState<string | undefined>(undefined);

  useEffect(() => {
    console.log("AuthLayout page:", page);
  }, [page]);
  
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", p: 0 }}>
      <MainHeader />
      <Outlet context={{ setPage }} />
    </Box>
  );
}
