import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import ControllerInput from '../../components/ControllerInput';
import { useForm } from 'react-hook-form';
import { NewEventType } from '../../types/event';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowRight2, EyeSlash, Location } from 'iconsax-react-native';

const AddScreen = () => {
  const { control, watch, register } = useForm<NewEventType>({
    defaultValues: {
      name: '',
      description: '',
    },
  });
  const [name, description] = watch(['name', 'description']);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <ControllerInput
          control={control}
          name="name"
          register={register}
          placeholder="Type name"
        />
        <ControllerInput
          style={{ marginTop: 20 }}
          control={control}
          name="description"
          register={register}
          placeholder="Type description"
        />
        <TouchableOpacity style={styles.location}>
          <View style={styles.nameLocation}>
            <Location size="20" color="#FF8A65" />
            <Text style={styles.text}>New york, USA</Text>
          </View>
          <View>
            <ArrowRight2 size="20" color="#FF8A65" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 15,
  },
  nameLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
});
