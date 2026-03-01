/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import type { loginCredentials, registerCredentials } from "../types";
import type { authContextType } from "../providers/AuthProvider";

export const AuthContext = createContext<authContextType>({
  isLoading: false,
  isLoggedIn: false,
  accessToken: null,
  user: null,
  login: async (_: loginCredentials) => {},
  register: async (_: registerCredentials) => {},
  logout: async () => {},
  refresh: async () => {},
});
