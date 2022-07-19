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

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onSignInPressed = () => {
    navigation.navigate('SignInScreen');
  };

  const onSendPressed = data => {
    console.log(data);
    navigation.navigate('NewPasswordScreen');
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
        <Text style={styles.title}> Reset Password </Text>

        <Text style={styles.text}>
          Please input the email associated with your account and we will send a
          new confirmation code to your inbox
        </Text>

        <CustomInput name={'email'} control={control} placeholder="Email" />

        <View style={styles.sendBtn}>
          <CustomButton onPress={handleSubmit(onSendPressed)} text="Send" />
        </View>

        <Text style={styles.text}>
          <Text onPress={onSignInPressed} style={styles.signInLink}>
            Back to Sign In
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
    marginBottom: 30,
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
    width: '80%',
    marginBottom: 30,
    color: 'gray',
  },
  signInLink: {
    color: '#00AACA',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  sendBtn: {
    marginTop: 10,
  },
});

export default ResetPasswordScreen;
