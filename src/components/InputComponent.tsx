import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { EyeSlash } from 'iconsax-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  value: string;
  onChange: (value: string) => void;
  affix?: React.ReactNode;
  placeholder?: string;
  suffix?: React.ReactNode;
  isPassword?: boolean;
  style?: StyleProp<ViewStyle>;
}

const InputComponent = (props: Props) => {
  const { value, onChange, affix, placeholder, suffix, isPassword, style } = props;
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onPress = () => {
    if (isShowPassword) {
      setIsShowPassword(!isShowPassword);
    } else {
      onChange('');
    }
  };
  return (
    <View style={[styles.container, style]}>
      {affix ?? affix}
      <TextInput
        style={styles.input}
        placeholder={placeholder ?? ''}
        onChangeText={onChange}
        secureTextEntry={isPassword}
      />
      {suffix ?? suffix}
      <TouchableOpacity onPress={onPress}>
        {isPassword ? (
          <EyeSlash size={20} color="black" />
        ) : (
          value.length > 0 && <Icon name="close" size={20} color="#111" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#797D81',
    borderRadius: 12,
    width: '100%',
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    margin: 0,
    padding: 0,
    flex: 1,
    paddingHorizontal: 15,
  },
});
