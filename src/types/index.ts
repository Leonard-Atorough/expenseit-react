export interface loginCredentials {
  email: string;
  password: string;
}

export interface registerCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface userData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface userDataWithToken extends userData {
  token: string;
}

export interface ApiResponse<T> {
  ok: boolean;
  code: number;
  data?: T;
  message?: string;
  internal?: string;
}

export interface ApiConfig {
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
