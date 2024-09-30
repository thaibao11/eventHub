import { useMutation } from '@tanstack/react-query';
import { register } from '../api/userApi';
import { RegisterRequest } from '../type/user';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => {
      console.log('useRegister payload: ', JSON.stringify(data));
      return register(data);
    },
    onSuccess: () => {},
    onError: () => {},
  });
};
