import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AuthStackNavigator } from '../../types/navigation';
import { NavigationProp, useNavigation, RouteProp } from '@react-navigation/native';
import { ArrowLeft } from 'iconsax-react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useRoute } from '@react-navigation/native';
import { useVerifyOTP } from '../../hook/useVerifyOTP';
import IconLoading from '../../components/IconLoading';

const VerifyScreen = () => {
  const navPayload = useRoute<RouteProp<AuthStackNavigator, 'Verify'>>().params;
  const [counter, setCounter] = useState<number>(30);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(true);
  const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();
  const { mutateAsync: onVerifyOTP, isLoading } = useVerifyOTP();

  useEffect(() => {
    if (isCodeSent && counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      if (counter === 0) {
        setIsCodeSent(false);
      }

      return () => clearInterval(timer);
    }
  }, [isCodeSent, counter]);

  const sendVerificationCode = () => {
    setIsCodeSent(true);
    setCounter(30);
    console.log('Verification code sent!');
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      {isLoading && <IconLoading />}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size="28" color="black" />
      </TouchableOpacity>
      <View style={{ alignSelf: 'flex-start', marginVertical: 20 }}>
        <Text style={{ fontWeight: '500', fontSize: 30 }}>Verification</Text>
        <Text style={{ fontWeight: '300', fontSize: 15, marginVertical: 20 }}>
          We sent you the verification code on {`${navPayload?.email}`}
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <OTPInputView
          selectionColor="black"
          placeholderCharacter=""
          placeholderTextColor="black"
          style={{ width: '80%', height: 200 }}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={async (code) => {
            console.log(`Code is ${code}, you are good to go!`);
            const res = await onVerifyOTP({ email: navPayload?.email ?? '', otp: code });
            if (res && res.verified) {
              navigation.navigate('Login');
            }
          }}
        />
        <Text style={{ fontWeight: '300', fontSize: 15, marginVertical: 20 }}>
          {isCodeSent && (
            <>
              <Text>
                {counter > 0 && `Code has been sent. You can resend in: ${counter} seconds`}
              </Text>
            </>
          )}
          {counter === 0 && <Button title="Resend Code" onPress={sendVerificationCode} />}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#3D56F0',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: '#3D56F0',
  },
});
