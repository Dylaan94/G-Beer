import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/Logo_HQ.png';

const WelcomeScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.welcomeText}>Welcome to G Beer</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    width: '80%',
    height: 400,
  },
  welcomeText: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 30,
  },
});

export default WelcomeScreen;
