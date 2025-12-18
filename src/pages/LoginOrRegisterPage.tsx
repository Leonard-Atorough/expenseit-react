import Container from "@mui/material/Container";
import { useState } from "react";
import { useAuth } from "../hooks/Auth";
import { useNavigate, useOutletContext } from "react-router";
import { ErrorAlert } from "../components/common";
import { LoginForm } from "../components/features/auth";

export function LoginOrRegisterPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const auth = useAuth();
  const navigate = useNavigate();

  useOutletContext<{ setPage: (page: string | undefined) => void }>().setPage(
    isLoginMode ? "LOGIN" : "REGISTER"
  );

  const displayErrorForTime = (message: string, duration: number) => {
    setError(message);
    setTimeout(() => setError(null), duration);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email") as string;
    const password = data.get("password") as string;
    if (isLoginMode) {
      try {
        console.log("Attempting login for:", email);
        await auth.login({ email, password });
        // Successful login actions can be handled here, e.g., redirecting the user
        await navigate("/user/dashboard");
      } catch (error) {
        console.error("Login error:", error);
        displayErrorForTime(error instanceof Error ? error.message : String(error), 5000);
        // Optionally, display an error message to the user
      }
    } else {
      const firstName = data.get("firstName") as string;
      const lastName = data.get("lastName") as string;
      try {
        await auth.register({ firstName, lastName, email, password });
        // Successful registration actions can be handled here, e.g., redirecting the user
        await navigate("/login");
      } catch (error) {
        console.error("Registration error:", error);
        // Optionally, display an error message to the user
      }
    }
  };

  return (
    <Container maxWidth="sm" component="main" sx={{ marginTop: 8 }}>
      <ErrorAlert message={error} />
      <LoginForm
        isLoginMode={isLoginMode}
        onSubmit={handleSubmit}
        onToggleMode={() => setIsLoginMode(!isLoginMode)}
      />
    </Container>
  );
}
