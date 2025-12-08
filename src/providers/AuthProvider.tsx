import { type ReactNode, useCallback, useState } from "react";
import type { userData } from "../types";
import { AuthContext } from "../context/AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<userData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Things we need to implement: login, register, logout functions
  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      if (isLoggedIn) return;

      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:4000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "ExpenseIt-Client", // Need to see about sending user-agent from browser
            "X-Forwarded-For": "127.0.0.1", // Placeholder for client IP, research how to get real IP
          },
          credentials: "include",
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          const errorData = (await response.json()) as { message: string };
          throw new Error(
            "message" in errorData ? errorData.message : "Login failed for unknown reasons."
          );
        }
        const data = (await response.json()) as { user: userData; accessToken: string };

        setUser(data.user);
        setAccessToken(data.accessToken);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Login failed:", error instanceof Error ? error.message : String(error));
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [isLoggedIn]
  );

  const register = useCallback(
    async (credentials: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }) => {
      if (isLoggedIn) return;

      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:4000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          const errorData = (await response.json()) as { message: string };
          throw new Error(
            "message" in errorData ? errorData.message : "Registration failed for unknown reasons."
          );
        }
        const data = (await response.json()) as { user: userData };

        setUser(data.user);

        setIsLoggedIn(true);
      } catch (error) {
        console.error(
          "Registration failed:",
          error instanceof Error ? error.message : String(error)
        );
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [isLoggedIn]
  );

  const logout = useCallback(async () => {
    if (!isLoggedIn) return;

    setIsLoading(true);

    try {
      console.log("Document cookies:", document.cookie);
      const response = await fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(
          "message" in errorData ? errorData.message : "Logout failed for unknown reasons."
        );
      }

      const data = (await response.json()) as { message: string };
      console.log(data.message);
    } catch (error) {
      console.error("Logout failed:", error instanceof Error ? error.message : String(error));
      throw error;
    } finally {
      setIsLoading(false);
      setUser(null);
      setAccessToken(null);
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, accessToken]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        accessToken,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
