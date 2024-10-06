export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
