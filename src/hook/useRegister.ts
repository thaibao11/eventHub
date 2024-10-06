import { useMutation } from '@tanstack/react-query';
import { register } from '../api/userApi';
import { RegisterRequest } from '../types/user';
import { AxiosError } from 'axios';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => {
      console.log('useRegister payload: ', JSON.stringify(data));
      return register(data);
    },
    onSuccess: (data) => {
      console.log('useRegister success: ', JSON.stringify(data));
    },
    onError: (err: AxiosError) => {
      console.log('useRegister error:', err.response);
    },
  });
};
