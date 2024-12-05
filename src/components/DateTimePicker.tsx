import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { Timer1 } from 'iconsax-react-native';
import { formatHour } from '../utils/formatHour';
import { Control, Controller, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { NewEventType } from '../types/event';

type Mode = 'time' | 'datetime' | 'date';

type Props = {
  mode: Mode;
  visible?: boolean;
  setVisible: (value: boolean) => void;
  onPress: () => void;
  isHalfWidth?: boolean;
  title: string;
  setValue?: UseFormSetValue<NewEventType>;
  name: string;
  control?: Control<any>;
};

const DateTimePicker = (props: Props) => {
  const {
    mode = 'time',
    visible,
    setVisible,
    onPress,
    isHalfWidth,
    title,
    setValue,
    name,
    control,
  } = props;
  const [date, setDate] = useState<Date>(new Date());

  return (
    <View style={[{ marginTop: 10 }, isHalfWidth && { width: '40%' }]}>
      <Text style={{ fontSize: 15 }}>{title}</Text>
      <TouchableOpacity style={[styles.container]} onPress={onPress}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 15, marginRight: 10 }}>{formatHour(date)}</Text>
          <Timer1 size="20" color="#FF8A65" />
        </View>
        <Controller
          control={control}
          name={name ?? ''}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              locale="vi"
              is24hourSource="device"
              mode={mode}
              modal
              open={visible}
              date={date}
              onConfirm={(date) => {
                setVisible?.(false);
                setDate(date);
                setValue?.(name as keyof NewEventType, date);
              }}
              onCancel={() => {
                setVisible(false);
              }}
              onDateChange={(item) => {
                setDate(item);
              }}
            />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',

    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
  },
});
