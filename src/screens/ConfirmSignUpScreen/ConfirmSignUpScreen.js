import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/Logo_HQ.png';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation, useRoute} from '@react-navigation/native';

import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import Navigation from '../../navigation';

const ConfirmSignUpScreen = () => {
  const route = useRoute();
  // takes username from previous page
  const username = route?.params?.username;

  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onConfirmPressed = async data => {
    try {
      const response = await Auth.confirmSignUp(
        username,
        data.confirmationCode,
      );
      console.log(response);
    } catch (e) {
      Alert.alert('Oops!', e.message);
    }
  };

  const onResendCodePressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Code resent', 'Please check your email');
    } catch (e) {
      Alert.alert('Oops!', e.message);
    }
  };

  const onSignInPressed = () => {
    navigation.navigate('SignInScreen');
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
          <Text style={styles.title}> Confirm Sign Up</Text>

          <CustomInput
            name={'confirmationCode'}
            control={control}
            placeholder="Confirmation Code"
          />

          <View style={styles.confirmBtn}>
            <CustomButton
              onPress={handleSubmit(onConfirmPressed)}
              text="Confirm"
            />
          </View>

          <Text style={styles.text}>
            {' '}
            <Text onPress={onResendCodePressed} style={styles.textLink}>
              Resend code?
            </Text>
          </Text>

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
  confirmBtn: {
    marginTop: 20,
  },
});

export default ConfirmSignUpScreen;
