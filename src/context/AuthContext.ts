/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";

import type { authContextType } from "../providers/AuthProvider";
import type { LoginData, RegisterData } from "../api/schemas";

export const AuthContext = createContext<authContextType>({
  isLoading: false,
  isLoggedIn: false,
  accessToken: null,
  user: null,
  login: async (_: LoginData) => {},
  register: async (_: RegisterData) => {},
  logout: async () => {},
  refresh: async () => {},
});
