import axiosInstance from './axiosClients';
import { User, RegisterRequest } from '../type/user';
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
