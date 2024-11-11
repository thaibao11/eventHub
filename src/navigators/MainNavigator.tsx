import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import EventHomeDetail from '../screens/HomeScreen/components/EventHomeDetail';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="EventHomeDetail" component={EventHomeDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
