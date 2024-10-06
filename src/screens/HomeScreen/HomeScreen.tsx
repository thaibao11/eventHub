import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearAccessToken } from '../../redux/authSlice';
const HomeScreen = () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    await AsyncStorage.clear();
    dispatch(clearAccessToken(''));
  };
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button onPress={onLogout} title="Logout" />
    </SafeAreaView>
  );
};

export default HomeScreen;
