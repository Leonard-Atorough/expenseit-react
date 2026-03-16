import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useOutletContext } from "react-router";
import { ErrorAlert } from "../../components/common";
import { LoginForm } from "../../components/features/auth";

export default function LoginOrRegisterPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const auth = useAuth();
  const navigate = useNavigate();

  const { setPage } = useOutletContext<{ setPage: (page: string | undefined) => void }>();

  useEffect(() => {
    setPage(isLoginMode ? "LOGIN" : "REGISTER");
  }, [isLoginMode, setPage]);

  useEffect(() => {
    if (auth.isLoggedIn) {
      void navigate("/app/dashboard");
    }
  }, [auth.isLoggedIn, navigate]);

  const displayErrorForTime = (message: string, duration: number) => {
    setError(message);
    setTimeout(() => setError(null), duration);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email") as string;
    const password = data.get("password") as string;
    if (isLoginMode) {
      void (async () => {
        try {
          console.log("Attempting login for:", email);
          await auth.login({ email, password });
          Promise.resolve(navigate("/app/dashboard")).catch(console.log); // weird but we need to catch this to avoid unhandled promise rejection warning
        } catch (error) {
          console.error("Login error:", error);
          displayErrorForTime(error instanceof Error ? error.message : String(error), 5000);
        }
      })();
    } else {
      const firstName = data.get("firstName") as string;
      const lastName = data.get("lastName") as string;
      void (async () => {
        try {
          console.log("Attempting registration for:", email);
          await auth.register({ firstName, lastName, email, password });

          await auth.login({ email, password });
          Promise.resolve(navigate("/app/dashboard")).catch(console.log);
        } catch (error) {
          console.error("Registration error:", error);
          displayErrorForTime(error instanceof Error ? error.message : String(error), 5000);
        }
      })();
    }
  };

  return (
    <Container maxWidth="sm" component="main" sx={{ marginTop: 8 }}>
      <ErrorAlert message={error} />
      <LoginForm
        isLoginMode={isLoginMode}
        onSubmit={handleSubmit}
        onToggleMode={() => setIsLoginMode(!isLoginMode)}
        isLoading={auth.isLoading}
      />
    </Container>
  );
}
