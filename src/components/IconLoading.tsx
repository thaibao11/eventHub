import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { colors } from '../color/color';

const IconLoading = () => {
  return (
    <ActivityIndicator
      color={colors.primary}
      size={'large'}
      style={{ position: 'absolute', top: '50%' }}
    />
  );
};

export default IconLoading;
