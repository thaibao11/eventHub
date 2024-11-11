import axios, { AxiosResponse, AxiosError } from 'axios';
import Config from 'react-native-config';

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface ApiError {
  errorCode: string;
  message: string;
}

const BASE_URL = `${Config.API_URL}`;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.status && error.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
