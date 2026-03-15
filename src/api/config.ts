interface ApiConfig {
  apiBaseUrl: string;
  endpoints: {
    auth: {
      login: string;
      register: string;
      me: string;
      logout: string;
      refresh: string;
    };
    user: {
      profile: string;
    };
    transaction: {
      list: string;
      create: string;
      get: (id: string) => string;
      update: (id: string) => string;
      delete: (id: string) => string;
    };
  };
  defaultHeaders: Record<string, string>;
}

export const config: ApiConfig = {
  apiBaseUrl:
    (import.meta.env.VITE_BASE_API_URL as string | undefined) ?? "http://localhost:4000/api",
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
    transaction: {
      list: "/transactions",
      create: "/transactions",
      get: (id: string) => `/transactions/${id}`,
      update: (id: string) => `/transactions/${id}`,
      delete: (id: string) => `/transactions/${id}`,
    },
  },
  defaultHeaders: {
    "Content-Type": "application/json",
    "X-Forwarded-For": "expenseit-client", // Placeholder for client IP, research how to get real IP
    "User-Agent": "ExpenseIt-Client", // Need to see about sending user-agent from browser
  },
};
