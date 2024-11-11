import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'iconsax-react-native';

type Props = {
  title: string;
  rightButton?: React.ReactNode;
  titleStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Header = (props: Props) => {
  const { title, rightButton, titleStyle, style, onPress } = props;
  return (
    <View style={style}>
      <View style={titleStyle}>
        <TouchableOpacity onPress={onPress}>
          <ArrowLeft size="30" color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, fontWeight: 'bold' }}>
          {title}
        </Text>
        {rightButton && <View>{rightButton}</View>}
      </View>
    </View>
  );
};

export default Header;
