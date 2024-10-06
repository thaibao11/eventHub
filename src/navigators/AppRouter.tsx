import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAccessToken } from '../redux/authSlice';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const AppRouter = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  console.log('token', accessToken);
  const dispatch = useDispatch();
  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      dispatch(setAccessToken(token));
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return <>{accessToken ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default AppRouter;
