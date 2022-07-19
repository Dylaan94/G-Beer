import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_HQ.png';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native';

import {useForm} from 'react-hook-form';

const RegistrationScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSignUpPressed = data => {
    console.log(data);
    navigation.navigate('ConfirmSignUpScreen');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignInScreen');
  };

  const onTermsOfUsePressed = () => {
    console.warn('terms of use');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('privacy policy');
  };

  const {height} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.15}]}
          resizeMode="contain"
        />
        <Text style={styles.title}> Register for G Beer</Text>
        <CustomInput
          name={'username'}
          control={control}
          placeholder="Username"
        />
        <CustomInput name={'email'} control={control} placeholder="Email" />
        <View style={styles.nameRoot}>
          <CustomInput
            name={'firstName'}
            control={control}
            placeholder="First Name"
            type="HALF"
          />
          <CustomInput
            name={'lastName'}
            control={control}
            placeholder="Last Name"
            type="HALF"
          />
        </View>

        <CustomInput
          name={'password'}
          control={control}
          placeholder="Password"
          secureTextEntry
        />
        <CustomInput
          name={'confirmPassword'}
          control={control}
          placeholder="Confirm Password"
          secureTextEntry
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text onPress={onTermsOfUsePressed} style={styles.textLink}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text onPress={onPrivacyPolicyPressed} style={styles.textLink}>
            Privacy Policy
          </Text>
          .
        </Text>

        <View style={styles.signUpBtn}>
          <CustomButton
            text="Sign Up"
            onPress={handleSubmit(onSignUpPressed)}
          />
        </View>

        <Text style={styles.text}>
          Already have an account?{' '}
          <Text onPress={onSignInPressed} style={styles.signInLink}>
            Sign in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  nameRoot: {
    flexDirection: 'row',
  },
  logo: {
    marginTop: 10,
    width: '30%',
    maxWidth: '50%',
    maxHeight: 100,
  },
  title: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
    width: '80%',
    marginVertical: 10,
    color: 'gray',
  },
  textLink: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  signInLink: {
    color: '#00AACA',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  signUpBtn: {
    marginTop: 10,
  },
});

export default RegistrationScreen;
