import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store, { RootState } from './src/store/store';
import { Provider, useDispatch } from 'react-redux';
import { setAccessToken } from './src/redux/authSlice';
import { useSelector } from 'react-redux';
import AppRouter from './src/navigators/AppRouter';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
