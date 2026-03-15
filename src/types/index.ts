export interface userData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface userDataWithToken extends userData {
  token: string;
}
