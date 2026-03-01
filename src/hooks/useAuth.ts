import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import type { authContextType } from "../providers/AuthProvider";

export function useAuth(): authContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export function useAuthToken(): string | null {
  const { accessToken } = useAuth();
  return accessToken ?? null;
}

export function useCurrentUser() {
  const { user } = useAuth();
  return user;
}

export function useIsAuthenticated(): boolean {
  const { user } = useAuth();
  return !!user;
}

export function useAuthActions() {
  const { login, logout, register } = useAuth();
  return { login, logout, register };
}

export function useAuthState() {
  const { user, accessToken } = useAuth();
  return { user, accessToken };
}
