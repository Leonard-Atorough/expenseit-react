import type { userData, userDataWithToken } from "../../types";
import APIClient from "../client";
import { config } from "../config";
import type { LoginData, RegisterData } from "../schemas";

export async function registerUser(credentials: RegisterData): Promise<userData> {
  const result = await APIClient.POST<userData, RegisterData>(
    config.endpoints.auth.register,
    credentials,
  );
  if (!result.data) {
    throw new Error("No user data returned from registration");
  }

  return result.data;
}

export async function loginUser(
  credentials: LoginData,
): Promise<userDataWithToken> {
  const apiResponse = await APIClient.POST<userDataWithToken, LoginData>(
    config.endpoints.auth.login,
    credentials,
  );
  if (!apiResponse.data) {
    throw new Error("No user data returned from login");
  }
  return apiResponse.data;
}

export async function getCurrentUser(token: string): Promise<userData> {
  const result = await APIClient.GET<userData>(config.endpoints.auth.me, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!result.data) {
    throw new Error("No user data returned from /auth/me");
  }

  return result.data;
}

export async function logoutUser(token: string): Promise<void> {
  await APIClient.POST<{ message: string }, null>(
    config.endpoints.auth.logout,
    null,
    {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export async function refreshToken(token: string): Promise<{ accessToken: string }> {
  const result = await APIClient.POST<{ accessToken: string }, null>(
    config.endpoints.auth.refresh,
    null,
    {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!result.data) {
    throw new Error("Token refresh failed");
  }

  return result.data;
}
