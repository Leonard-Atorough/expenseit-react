import { Container } from "@mui/material";
import { MainHeader } from "../components";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";

export function AuthLayout() {
  const [page, setPage] = useState<string | undefined>(undefined);

  useEffect(() => {
    console.log("AuthLayout page:", page);
  }, [page]);
  
  return (
    <Container>
      <MainHeader />
      <Outlet context={{ setPage }} />
    </Container>
  );
}
