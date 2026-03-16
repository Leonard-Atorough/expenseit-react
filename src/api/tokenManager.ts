/**
 * Simple token manager module
 * Provides a reliable, single source of truth for access tokens
 * API client reads from this directly; AuthProvider updates it
 */

let accessToken: string | null = null;

export const tokenManager = {
  /**
   * Get the current access token
   */
  getToken(): string | null {
    return accessToken;
  },

  /**
   * Set the access token (called by AuthProvider when token changes)
   */
  setToken(token: string | null): void {
    accessToken = token;
  },

  /**
   * Check if a token is currently stored
   */
  hasToken(): boolean {
    return accessToken !== null;
  },

  /**
   * Clear the token
   */
  clear(): void {
    accessToken = null;
  },
};
