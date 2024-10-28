import { useMutation } from '@tanstack/react-query';
import { verifyOTP } from '../api/userApi';
import { verifyOTPRequest } from '../types/user';

export const useVerifyOTP = () => {
  return useMutation({
    mutationFn: (data: verifyOTPRequest) => {
      console.log('useVerifyOTP payload: ', JSON.stringify(data));
      return verifyOTP(data);
    },
    onSuccess: (data) => {
      console.log('useRegister success: ', JSON.stringify(data));
    },
    onError: (err) => {
      console.log('err', err);
    },
  });
};
