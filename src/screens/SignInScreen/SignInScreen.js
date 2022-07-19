import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Logo from '../../../assets/images/Logo_HQ.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import {useNavigation} from '@react-navigation/native';

import {useForm} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  const onSignInPressed = data => {
    console.log(data);
    navigation.navigate('HomeScreen');
  };

  const onForgotPassword = () => {
    navigation.navigate('ResetPasswordScreen');
  };

  const onNoAccount = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.15}]}
          resizeMode="contain"
        />
        <Text style={styles.text}>Welcome back!</Text>
        <CustomInput
          name={'username'}
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 5,
              message: 'Username must be at least 5 characters long',
            },
          }}
          placeholder="Username"
        />
        <CustomInput
          name={'password'}
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 7,
              message: 'Password must be at least 7 characters long',
            },
          }}
          placeholder="Password"
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton
          text="Forgot Password?"
          bgColor="white"
          textColor="gray"
          onPress={onForgotPassword}
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Click here to register"
          bgColor="white"
          textColor="gray"
          onPress={onNoAccount}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    width: '30%',
    maxWidth: '50%',
    maxHeight: 100,
  },
  text: {
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Medium',
    marginTop: 30,
    marginBottom: 50,
  },
});

export default SignInScreen;
