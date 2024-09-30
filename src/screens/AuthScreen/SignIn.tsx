import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Lock, Sms, User } from 'iconsax-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackNavigator } from '../../type/navigation';
import InputComponent from '../../components/InputComponent';
import { useRegister } from '../../hook/useRegister';

const SignIn = () => {
  const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const { mutateAsync: onRegister } = useRegister();

  const handleRegister = async () => {
    try {
      const res = await onRegister({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirm,
      });
    } catch (err) {
      console.log('err', err);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size="28" color="black" />
      </TouchableOpacity>
      <View style={{ alignSelf: 'flex-start', marginVertical: 20 }}>
        <Text style={{ fontWeight: '500', fontSize: 30 }}>Sign up</Text>
      </View>
      <InputComponent
        placeholder="Full name"
        value={name ?? ''}
        onChange={(value) => setName(value)}
        affix={<User size="20" color="#807A7A" />}
      />
      <InputComponent
        style={{ marginVertical: 20 }}
        placeholder="Email"
        value={email ?? ''}
        onChange={(value) => setEmail(value)}
        affix={<Sms size={20} color="red" />}
      />
      <InputComponent
        isPassword
        placeholder="Password"
        value={password ?? ''}
        onChange={(value) => setPassword(value)}
        affix={<Lock size="20" color="#807A7A" />}
      />
      <InputComponent
        isPassword
        style={{ marginVertical: 20 }}
        placeholder="Confirm password"
        value={confirm ?? ''}
        onChange={(value) => setConfirm(value)}
        affix={<Lock size="20" color="#807A7A" />}
      />
      <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => handleRegister()}
          style={{
            backgroundColor: '#3D56F0',
            width: '70%',
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}
        >
          <View style={{ width: '100%' }}>
            <Text style={{ textTransform: 'uppercase', color: 'white', textAlign: 'center' }}>
              Send
            </Text>
          </View>
          <ArrowRight size="28" color="#FF8A65" style={{ position: 'absolute', right: 20 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
