import type { ApiConfig } from "../types";

export const config: ApiConfig = {
  apiBaseUrl:
    (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "http://localhost:8080/api",
  endpoints: {
    auth: {
      login: "/auth/login",
      register: "/auth/register",
      me: "/auth/me",
      logout: "/auth/logout",
      refresh: "/auth/refresh",
    },
    user: {
      profile: "/user/profile",
    },
  },
  defaultHeaders: {
    "Content-Type": "application/json",
    "X-Forwarded-For": "expenseit-client", // Placeholder for client IP, research how to get real IP
    "User-Agent": "ExpenseIt-Client", // Need to see about sending user-agent from browser
  },
};
