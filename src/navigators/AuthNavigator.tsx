import { View, Text } from 'react-native';
import React from 'react';
import { AuthStackNavigator } from '../type/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens';

const AuthNavigator = () => {
  const RootStack = createNativeStackNavigator<AuthStackNavigator>();
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
    </RootStack.Navigator>
  );
};

export default AuthNavigator;
