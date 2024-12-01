import { RequestSearchLocation, LocationType } from '../types/event';
import axiosInstance, { ApiError, ApiResponse } from './axiosClients';
import Config from 'react-native-config';

export const searchLocation = async (data: RequestSearchLocation) => {
  try {
    const response = await axiosInstance.get<RequestSearchLocation, LocationType[]>(
      `https://nominatim.openstreetmap.org/search.php?q=${data.keyword}&polygon_geojson=${data.polygon_geojson}&format=jsonv2`
    );
    return response;
  } catch (err) {
    throw err as ApiError;
  }
};
