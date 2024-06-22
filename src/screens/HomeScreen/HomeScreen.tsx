import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button onPress={() => AsyncStorage.clear()} title="Logout" />
    </SafeAreaView>
  );
};

export default HomeScreen;
