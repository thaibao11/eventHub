import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { images } from '../assets/images/images';
import { dimensionDevice } from '../constants/dimension';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.logo_splash} style={styles.image} />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: dimensionDevice.WIDTH * 0.7,
  },
});
