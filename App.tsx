import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
const App = () => {
  const [isShowSplash, setIsShowSplash] = useState<boolean>(true);

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
