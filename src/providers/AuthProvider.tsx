import { type ReactNode, useCallback, useEffect, useState } from "react";
import type { loginCredentials, registerCredentials, userData } from "../types";
import { AuthContext } from "../context/AuthContext";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
} from "../api/services/authentication";

export interface authContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: userData | null;
  accessToken: string | null;
  login: (credentials: loginCredentials) => Promise<void>;
  register: (credentials: registerCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<userData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (token && !isTokenExpired(token)) {
          setAccessToken(token);
          try {
            const user = await getCurrentUser(token);
            setUser(user);
            setIsLoggedIn(true);
          } catch (error) {
            console.error("Error fetching user data:", error);
            // Token exists but user data fetch failed - clear auth state
            setIsLoggedIn(false);
            setUser(null);
            setAccessToken(null);
            localStorage.removeItem("accessToken");
          }
        } else {
          setIsLoggedIn(false);
          setUser(null);
          setAccessToken(null);
          localStorage.removeItem("accessToken");
          // If token is expired, try to refresh it
          await refreshAuthToken(token);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsLoggedIn(false);
        setUser(null);
        setAccessToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    void checkAuthStatus();
  }, []);

  // Things we need to implement: login, register, logout functions
  const login = useCallback(
    async (credentials: loginCredentials) => {
      if (isLoggedIn) return;

      setIsLoading(true);

      try {
        const data = await loginUser(credentials);
        const token = data.token;
        if (!token) {
          throw new Error("No access token returned from login");
        }
        const user = data as userData;

        localStorage.setItem("accessToken", token);
        setAccessToken(token);
        setUser(user);

        setIsLoggedIn(true);
      } catch (error) {
        console.error("Login failed:", error instanceof Error ? error.message : String(error));
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [isLoggedIn],
  );

  const register = useCallback(
    async (credentials: registerCredentials) => {
      if (isLoggedIn) return;
      setIsLoading(true);

      try {
        const data = await registerUser(credentials);
        setUser(data);
      } catch (error) {
        console.error(
          "Registration failed:",
          error instanceof Error ? error.message : String(error),
        );
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [isLoggedIn],
  );

  const logout = useCallback(async () => {
    if (!isLoggedIn) return;

    setIsLoading(true);

    try {
      await logoutUser(accessToken!);
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

  const refresh = useCallback(async () => {
    if (!isLoggedIn) return;

    setIsLoading(true);

    try {
      const data = await refreshToken(accessToken!);

      localStorage.setItem("accessToken", data.accessToken);
      setAccessToken(data.accessToken);
    } catch (error) {
      console.error(
        "Token refresh failed:",
        error instanceof Error ? error.message : String(error),
      );
      throw error;
    } finally {
      setIsLoading(false);
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
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

  async function refreshAuthToken(token: string | null) {
    try {
      const data = await refreshToken(token!);
      localStorage.setItem("accessToken", data.accessToken);
      setAccessToken(data.accessToken);
      const user = await getCurrentUser(data.accessToken);
      setUser(user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error refreshing token:", error);
      setIsLoggedIn(false);
      setUser(null);
      setAccessToken(null);
      localStorage.removeItem("accessToken");
    }
  }
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
