import axiosInstance from './axiosClients';
import { User, RegisterRequest, LoginRequest, verifyOTPRequest } from '../types/user';
import { ApiResponse, ApiError } from './axiosClients';

export const getUser = async () => {
  try {
    const response = await axiosInstance.get<ApiResponse<User>>('/user');
    return response.data;
  } catch (err) {
    throw err as ApiError;
  }
};

export const register = async (RequestData: RegisterRequest) => {
  try {
    const response = await axiosInstance.post<RegisterRequest, ApiResponse<User>>(
      '/auth/register',
      RequestData
    );
    return response.data;
  } catch (err) {
    throw err as ApiError;
  }
};

export const login = async (RequestData: LoginRequest) => {
  try {
    const response = await axiosInstance.post<LoginRequest, ApiResponse<User>>(
      '/auth/login',
      RequestData
    );
    return response.data;
  } catch (err) {
    throw err as ApiError;
  }
};

export const verifyOTP = async (RequestData: verifyOTPRequest) => {
  try {
    const response = await axiosInstance.post<verifyOTPRequest, ApiResponse<User>>(
      '/auth/verifyOTP',
      RequestData
    );
    return response.data;
  } catch (err) {
    throw err as ApiError;
  }
};
