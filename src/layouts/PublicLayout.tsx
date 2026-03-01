import { Box } from "@mui/material";
import { MainHeader } from "../components/features/landing/MainHeader";
import { Outlet } from "react-router";
import { useState } from "react";

export function PublicLayout() {
  const [page, setPage] = useState<string | undefined>(undefined);

  return (
    <Box
      sx={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", p: 0 }}
    >
      <MainHeader />
      <Outlet context={{ page, setPage }} />
      {/* footer eventually */}
    </Box>
  );
}
