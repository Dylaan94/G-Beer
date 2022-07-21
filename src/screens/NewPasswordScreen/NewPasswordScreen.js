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

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();
  const route = useRoute();
  const username = route?.params?.username;

  const password = watch('newPassword');

  const onSubmitPressed = async data => {
    try {
      await Auth.forgotPasswordSubmit(
        username,
        data.confirmationCode,
        password,
      );
      navigation.navigate('SignInScreen');
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
          <Text style={styles.title}> New Password </Text>

          <CustomInput
            name={'confirmationCode'}
            control={control}
            placeholder="Confirmation Code"
          />

          <CustomInput
            name={'newPassword'}
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            }}
            placeholder="New Password"
            secureTextEntry
          />
          <CustomInput
            name={'confirmNewPassword'}
            control={control}
            rules={{
              validate: value =>
                value === password ? true : 'Passwords do not match',
            }}
            placeholder="Confirm New Password"
            secureTextEntry
          />

          <View style={styles.submitBtn}>
            <CustomButton
              onPress={handleSubmit(onSubmitPressed)}
              text="Submit"
            />
          </View>

          <Text style={styles.text}>
            <Text onPress={onSignInPressed} style={styles.signInLink}>
              Back to Sign In
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
  submitBtn: {
    marginTop: 10,
  },
});

export default NewPasswordScreen;
