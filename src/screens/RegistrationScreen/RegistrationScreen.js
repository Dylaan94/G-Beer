import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Alert,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_HQ.png';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native';

import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const RegistrationScreen = () => {
  const EMAIL_REGEX = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );

  const {control, handleSubmit, watch} = useForm();
  const navigation = useNavigation();

  const password = watch('password');

  const onSignUpPressed = async data => {
    const {username, password, email} = data;

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      // moves to confirmation screen and sends username so user does not have to input again
      navigation.navigate('ConfirmSignUpScreen', {username});
    } catch (e) {
      Alert.alert('Oops!', e.message);
    }
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
    <SafeAreaView>
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
            rules={{
              required: 'Username is required',
              minLength: {
                value: 5,
                message: 'Username must be at least 5 characters',
              },
              maxLength: {
                value: 10,
                message: 'Username must not be longer than 10 characters',
              },
            }}
            placeholder="Username"
          />
          <CustomInput
            name={'email'}
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Invalid email address'},
            }}
            placeholder="Email"
          />

          <CustomInput
            name={'password'}
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            }}
            placeholder="Password"
            secureTextEntry
          />
          <CustomInput
            name={'confirmPassword'}
            control={control}
            rules={{
              validate: value =>
                value === password ? true : 'Passwords do not match',
            }}
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
    </SafeAreaView>
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
