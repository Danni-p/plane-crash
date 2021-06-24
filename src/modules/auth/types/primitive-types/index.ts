export interface User {
  email: string | null
  uid: string
}

export interface UserCredentials {
  name: string;
  email: string;
  isNewUser: boolean;
  uid: string;
}

export interface AuthData {
  name?: string;
  email: string;
  password: string;
}
