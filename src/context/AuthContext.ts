/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import type { loginCredentials, registerCredentials, userData } from "../types";

export const AuthContext = createContext<{
  user?: userData | null;
  accessToken?: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  login: (credentials: loginCredentials) => Promise<void>;
  register: (credentials: registerCredentials) => Promise<void>;
  logout: () => Promise<void>;
}>({
  isLoading: false,
  isLoggedIn: false,
  accessToken: null,
  user: null,
  login: async (_: loginCredentials) => {},
  register: async (_: registerCredentials) => {},
  logout: async () => {},
});
