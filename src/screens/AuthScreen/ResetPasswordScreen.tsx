import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackNavigator } from '../../types/navigation';
import { ArrowLeft, ArrowRight, Sms } from 'iconsax-react-native';
import InputComponent from '../../components/InputComponent';

const ResetPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size="28" color="black" />
      </TouchableOpacity>
      <View style={{ alignSelf: 'flex-start', marginVertical: 20 }}>
        <Text style={{ fontWeight: '500', fontSize: 30 }}>Reset Password</Text>
        <Text style={{ fontWeight: '300', fontSize: 15, marginVertical: 20 }}>
          Please enter your email address to request reset password
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <InputComponent
          placeholder="Email"
          value={''}
          onChange={(value) => {}}
          affix={<Sms size={20} color="black" />}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: '#3D56F0',
            width: '50%',
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginVertical: 40,
          }}
        >
          <View style={{ width: '100%' }}>
            <Text style={{ textTransform: 'uppercase', color: 'white', textAlign: 'center' }}>
              Sign in
            </Text>
          </View>
          <ArrowRight size="28" color="#FF8A65" style={{ position: 'absolute', right: 20 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
