import React from 'react';
import { Control, Controller, FieldError, UseFormRegister } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import { Text, TextInputProps, View, StyleSheet, TextInput } from 'react-native';

type CustomInputProps = {
  control: Control<any>;
  name?: string;
  label?: string;
  error?: FieldError;
  style?: StyleProp<ViewStyle>;
  register: UseFormRegister<any>;
} & TextInputProps;

const ControllerInput = (props: CustomInputProps) => {
  const { control, name, label, value, register, placeholder, style, ...textInputProps } = props;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        control={control}
        name={name ?? ''}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            {...register(`${name}`)}
            style={[styles.input, style]}
            onBlur={onBlur}
            onChangeText={(text) => {
              onChange(text);
            }}
            value={value}
            {...textInputProps}
          />
        )}
      />
    </View>
  );
};

export default ControllerInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 15,
  },
});
