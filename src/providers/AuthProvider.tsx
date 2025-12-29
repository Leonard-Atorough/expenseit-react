import { type ReactNode, useCallback, useEffect, useState } from "react";
import type { userData } from "../types";
import { AuthContext } from "../context/AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<userData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("accessToken");

        if (token && !isTokenExpired(token)) {
          setAccessToken(token);
          setIsLoggedIn(true);
          // Optionally, fetch user data here using the token
          const user = await fetch("http://localhost:3001/auth/me", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          });
          if (user.ok) {
            const userData = (await user.json()) as userData;
            setUser(userData);
          }
        } else {
          setIsLoggedIn(false);
          setUser(null);
          setAccessToken(null);
          localStorage.removeItem("accessToken");
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void checkAuthStatus();
  }, []);

  // Things we need to implement: login, register, logout functions
  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      if (isLoggedIn) return;

      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:3001/auth/login", {
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
        localStorage.setItem("accessToken", data.accessToken);
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
        const response = await fetch("http://localhost:3001/auth/register", {
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
        const data = (await response.json()) as { user: userData; accessToken: string };

        setUser(data.user);
        localStorage.setItem("accessToken", data.accessToken);
        setAccessToken(data.accessToken);
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
      const response = await fetch("http://localhost:3001/auth/logout", {
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
      localStorage.removeItem("accessToken");
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

function isTokenExpired(token: string): boolean {
  try {
    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson) as { exp: number };
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  } catch (error) {
    console.error("Error checking token expiration:", error);
    return true;
  }
}

export default AuthProvider;
