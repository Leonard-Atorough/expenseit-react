import type { ApiResponse, ApiErrorResponse } from "../models";
import { config } from "./config";

type TokenProvider = () => string | null;

let tokenProvider: TokenProvider = () => null;

export function setTokenProvider(fn: TokenProvider) {
  tokenProvider = fn;
}

export default class APIClient {
  private static baseUrl = config.apiBaseUrl;

  private static async request<T>(endpoint: string, options: RequestInit = {}) {
    const url = `${APIClient.baseUrl}${endpoint}`;
    options.headers = {
      ...options.headers,
      ...config.defaultHeaders,
    };

    // Attach token if provided by the token provider
    try {
      const token = tokenProvider?.();
      if (token) {
        options.headers = { ...options.headers, Authorization: `Bearer ${token}` };
      }
    } catch (err) {
      // If token provider throws, just continue without Authorization header
      console.warn("tokenProvider threw an error:", err);
    }

    options.credentials = "include"; // Ensure cookies are sent with requests

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const error: ApiErrorResponse<string> = (await response.json()) as ApiErrorResponse<string>;
        // log to console for now.
        console.error(`API error: ${response.status} ${response.statusText}`, error);
        throw new Error(error.message ?? "API request failed");
      }
      return (await response.json()) as ApiResponse<T>;
    } catch (error) {
      console.error("Network error:", error);
      throw new Error("Network error");
    }
  }

  /**
   * Helper method for GET requests.
   * @template T - The expected type of the response data.
   * @param endpoint - The API endpoint to send the request to.
   * @returns A promise that resolves to the response data.
   */
  static async GET<T>(endpoint: string, options?: Omit<RequestInit, "method">) {
    return this.request<T>(endpoint, { method: "GET", ...options });
  }

  /**
   * Helper method for POST requests. Automatically sets Content-Type to application/json and stringifies the body.
   * @template T - The expected type of the response data.
   * @template U - The type of the request body.
   * @param endpoint - The API endpoint to send the request to.
   * @param body - The request payload.
   * @returns A promise that resolves to the response data.
   */
  static async POST<T, U>(endpoint: string, body?: U, options?: Omit<RequestInit, "method">) {
    return this.request<T>(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      ...options,
    });
  }

  static async PUT<T, U>(endpoint: string, body: U, options?: Omit<RequestInit, "method">) {
    return this.request<T>(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      ...options,
    });
  }

  static async DELETE<T>(endpoint: string, options?: Omit<RequestInit, "method">) {
    return this.request<T>(endpoint, { method: "DELETE", ...options });
  }
}
