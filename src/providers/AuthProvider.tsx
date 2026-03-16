import { type ReactNode, useCallback, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
} from "../api/services/authentication";
import type { LoginData, RegisterData, UserResponse } from "../api/schemas";
import { tokenManager } from "../api/tokenManager";

export interface authContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: UserResponse | null;
  accessToken: string | null;
  login: (credentials: LoginData) => Promise<void>;
  register: (credentials: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserResponse | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Sync token to token manager whenever it changes
  useEffect(() => {
    tokenManager.setToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (token && !isTokenExpired(token)) {
          // Sync token to tokenManager immediately (don't wait for state updates)
          tokenManager.setToken(token);
          setAccessToken(token);
          console.log("token found in localStorage:", token);
          try {
            const user = await getCurrentUser(token);
            setUser(user);
            setIsLoggedIn(true);
          } catch (error) {
            console.error("Error fetching user data:", error);
            // Token exists but user data fetch failed - clear auth state
            tokenManager.setToken(null);
            setIsLoggedIn(false);
            setUser(null);
            setAccessToken(null);
            localStorage.removeItem("accessToken");
          }
        } else {
          // Token missing or expired
          if (token && isTokenExpired(token)) {
            console.warn("Token expired, attempting refresh...");
            await refreshAuthToken(token);
          } else {
            tokenManager.setToken(null);
            setIsLoggedIn(false);
            setUser(null);
            setAccessToken(null);
            localStorage.removeItem("accessToken");
          }
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        tokenManager.setToken(null);
        setIsLoggedIn(false);
        setUser(null);
        setAccessToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    void checkAuthStatus();
  }, []);

  const login = useCallback(
    async (credentials: LoginData) => {
      if (isLoggedIn) return;

      setIsLoading(true);
      try {
        const data = await loginUser(credentials);
        const token = data.token;
        if (!token) {
          throw new Error("No access token returned from login");
        }
        const user = data as UserResponse;

        localStorage.setItem("accessToken", token);
        tokenManager.setToken(token); // Sync immediately, don't wait for state effect
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
    async (credentials: RegisterData) => {
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
      tokenManager.setToken(null); // Sync immediately
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
      tokenManager.setToken(data.accessToken); // Sync immediately
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
      tokenManager.setToken(data.accessToken); // Sync immediately
      setAccessToken(data.accessToken);
      const user = await getCurrentUser(data.accessToken);
      setUser(user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error refreshing token:", error);
      tokenManager.setToken(null); // Sync immediately on error
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
