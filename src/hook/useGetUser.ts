import { getUser } from '../api/userApi';
import { useMutation } from '@tanstack/react-query';

export const useGetUser = () => {
  return useMutation({
    mutationFn: () => {
      return getUser();
    },
    onSuccess: (res) => {
      //   console.log('Res---->', res);
    },
    onError: (err) => {
      //   console.log('Err---->', err);
    },
  });
};
