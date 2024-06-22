import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>('');
  const { getItem, setItem } = useAsyncStorage('accessToken');

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getItem();

    token && setAccessToken(token);
  };

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>{accessToken ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default App;
