import React from 'react';
import { Control, Controller, FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Text, TextInputProps, View, StyleSheet, TextInput } from 'react-native';
import { NewEventType } from '../types/event';

type CustomInputProps = {
  control: Control<any>;
  name?: string;
  label?: string;
  error?: FieldError;
  style?: StyleProp<ViewStyle>;
  register: UseFormRegister<any>;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  setValue?: UseFormSetValue<NewEventType>;
} & TextInputProps;

const ControllerInput = (props: CustomInputProps) => {
  const {
    control,
    name,
    label,
    value,
    register,
    placeholder,
    style,
    prefix,
    suffix,
    setValue,
    ...textInputProps
  } = props;

  const onClearSearch = () => {
    setValue?.('location', '');
  };
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      {prefix && <View style={{ position: 'absolute', left: 10, top: 15 }}>{prefix}</View>}
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
      {suffix && value && (
        <TouchableOpacity
          style={{ position: 'absolute', right: 10, top: 15 }}
          onPress={onClearSearch}
        >
          {suffix}
        </TouchableOpacity>
      )}
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
    // padding: 15,
  },
});
