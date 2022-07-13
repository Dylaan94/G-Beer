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

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignIn = () => {
    console.warn('sign in');
  };

  const onForgotPassword = () => {
    console.warn('forgot password');
  };

  const onNoAccount = () => {
    console.warn('No account');
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignIn} />
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
