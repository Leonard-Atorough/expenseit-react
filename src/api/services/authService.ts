import type { loginCredentials, registerCredentials, userData, userDataWithToken } from "../../types";
import APIClient from "../client";
import { config } from "../config";

export async function registerUser(credentials: registerCredentials): Promise<userData> {
  const result = await APIClient.POST<userData, registerCredentials>(
    config.endpoints.auth.register,
    credentials,
  );
  if (!result.data) {
    throw new Error("No user data returned from registration");
  }

  return result.data;
}

export async function loginUser(
  credentials: loginCredentials,
): Promise<userDataWithToken> {
  const apiResponse = await APIClient.POST<userDataWithToken, loginCredentials>(
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
  const result = await APIClient.POST<{ message: string }, null>(
    config.endpoints.auth.logout,
    null,
    {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!result.data) {
    throw new Error("Logout failed");
  }
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
