export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  accessToken?: string;
  refreshToken?: string;
  otp: string;
  verified: boolean;
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

export interface verifyOTPRequest {
  email: string;
  otp: string;
}
