import { View, Text } from 'react-native';
import React from 'react';
import { AuthStackNavigator } from '../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens';
import SignIn from '../screens/AuthScreen/SignIn';
import ResetPasswordScreen from '../screens/AuthScreen/ResetPasswordScreen';
import VerifyScreen from '../screens/AuthScreen/VerifyScreen';

const AuthNavigator = () => {
  const RootStack = createNativeStackNavigator<AuthStackNavigator>();
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="SignIn" component={SignIn} />
      <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <RootStack.Screen name="Verify" component={VerifyScreen} />
    </RootStack.Navigator>
  );
};

export default AuthNavigator;
