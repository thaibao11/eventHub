import { View, Text } from 'react-native';
import React from 'react';
import { AuthStackNavigator } from '../type/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens';
import SignIn from '../screens/AuthScreen/SignIn';

const AuthNavigator = () => {
  const RootStack = createNativeStackNavigator<AuthStackNavigator>();
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="SignIn" component={SignIn} />
    </RootStack.Navigator>
  );
};

export default AuthNavigator;
