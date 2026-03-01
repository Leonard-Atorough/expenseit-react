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

export interface ApiResponse<T> {
  message: string;
  data?: T;
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
  };
  defaultHeaders: Record<string, string>;
}
