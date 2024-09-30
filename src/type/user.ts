export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
