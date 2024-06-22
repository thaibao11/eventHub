import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  icon?: React.ReactNode;
  text?: string;
  type?: 'primary' | 'text' | 'link';
  style?: StyleProp<ViewStyle>;
  color?: string;
  onPress?: () => void;
  iconPosition?: 'right' | 'left';
}

const ButtonComponent = (props: Props) => {
  const { icon, text } = props;
  return (
    <TouchableOpacity>
      <Text>Click me</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
