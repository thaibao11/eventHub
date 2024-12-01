import { useMutation } from '@tanstack/react-query';
import { searchLocation } from '../api/searchLocationApi';
import { RequestSearchLocation } from '../types/event';

export const useSearchLocation = () => {
  return useMutation({
    mutationFn: (data: RequestSearchLocation) => {
      return searchLocation(data);
    },
    onSuccess: () => {},
    onError: (err) => {
      console.log('useSearchLocation error', err);
    },
  });
};
