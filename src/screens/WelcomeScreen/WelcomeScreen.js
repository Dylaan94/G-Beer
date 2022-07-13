import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import Logo from '../../../assets/images/Logo_HQ.png';
import RegisterSignIn from '../../components/RegisterSignIn';

import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onPressRegister = () => {
    navigation.navigate('RegistrationScreen')
  };

  const onPressSignIn = () => {
    navigation.navigate('SignInScreen')
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.5}]}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Welcome to G Beer</Text>
        <RegisterSignIn
          onPressRegister={onPressRegister}
          onPressSignIn={onPressSignIn}></RegisterSignIn>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    width: '80%',
    maxWidth: '80%',
  },
  welcomeText: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 30,
  },
});

export default WelcomeScreen;
