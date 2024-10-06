import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackNavigator } from '../types/navigation';
import { HomeScreen } from '../screens';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator<RootStackNavigator>();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
