import { useMutation } from '@tanstack/react-query';
import { LoginRequest } from '../types/user';
import { login } from '../api/userApi';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => {
      console.log('useLogin payload', JSON.stringify(data));
      return login(data);
    },
    onSuccess: () => {},
    onError: (err) => {
      console.log('useLogin err:', err);
    },
  });
};
