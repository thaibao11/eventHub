import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ArrowRight, Lock, Sms } from 'iconsax-react-native';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { images } from '../../assets/images/images';
import InputComponent from '../../components/InputComponent';
import { AuthStackNavigator } from '../../type/navigation';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={images.icon_home} style={styles.logo} />
      </View>
      <View style={{ alignSelf: 'flex-start', marginVertical: 20 }}>
        <Text style={{ fontWeight: '500', fontSize: 30 }}>Sign in</Text>
      </View>
      <InputComponent
        placeholder="Email"
        value={email ?? ''}
        onChange={(value) => setEmail(value)}
        affix={<Sms size={20} color="red" />}
      />
      <InputComponent
        style={{ marginTop: 20 }}
        isPassword
        placeholder="Password"
        value={password ?? ''}
        onChange={(value) => setPassword(value)}
        affix={<Lock size={20} color="red" />}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          marginVertical: 20,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch
            trackColor={{ false: '#767577', true: '#3D56F0' }}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={{ marginLeft: 10 }}>Remember me</Text>
        </View>
        <View>
          <Text>Forgot password?</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#3D56F0',
          width: '80%',
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}
      >
        <View style={{ width: '100%' }}>
          <Text style={{ textTransform: 'uppercase', color: 'white', textAlign: 'center' }}>
            Sign in
          </Text>
        </View>
        <ArrowRight size="28" color="#FF8A65" style={{ position: 'absolute', right: 20 }} />
      </TouchableOpacity>
      <View style={{ width: '100%', marginVertical: 20 }}>
        <Text style={{ textTransform: 'uppercase', textAlign: 'center' }}>Or</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: '80%',
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}
      >
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={images.icon_google} />
          <Text style={{ color: 'black', textAlign: 'center', marginLeft: 20 }}>
            Login with Google
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: '80%',
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginVertical: 20,
        }}
      >
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={images.icon_facebook} />
          <Text style={{ color: 'black', textAlign: 'center', marginLeft: 20 }}>
            Login with Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ color: '#1977F3' }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  logo: {},
});
