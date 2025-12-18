import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/Auth";
import { CircularProgress, Box } from "@mui/material";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      void navigate("/login", { replace: true });
    }
  }, [isLoggedIn, isLoading, navigate]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
}
