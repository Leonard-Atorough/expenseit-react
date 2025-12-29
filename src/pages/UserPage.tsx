import { Outlet, useOutletContext } from "react-router";
import Box from "@mui/material/Box";
import { useAuth } from "../hooks/Auth";
import { AppSidebar, DRAWER_WIDTH } from "../components/features/app";
import { useEffect } from "react";

export function UserPage() {
  const { setPage } = useOutletContext<{ setPage: (page: string | undefined) => void }>();
  const auth = useAuth();

  useEffect(() => {
    setPage(`${auth.user?.firstName}'s DASHBOARD`);
  }, [setPage, auth.user?.firstName]);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          overflowY: "auto",
          height: "100%",
        }}
      >
        <Outlet context={{ setPage }} />
      </Box>
    </Box>
  );
}
