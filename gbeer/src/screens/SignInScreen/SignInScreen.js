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

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
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
        <CustomButton text="Sign In" />
        <CustomButton
          text="Forgot Password?"
          bgColor="white"
          textColor="gray"
        />
        <View style={styles.socialBtns}>
          <CustomButton
            text="Sign in with Google"
            bgColor="#FAE9EA"
            textColor="#DD4D44"
          />
          <CustomButton
            text="Sign in with FaceBook"
            bgColor="#E7EAF4"
            textColor="#4765A9"
          />
          <CustomButton
            text="Sign in with Apple"
            bgColor="#E3E3E3"
            textColor="#363636"
          />
        </View>
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
  signInBtn: {},
  socialBtns: {marginTop: 50},
});

export default SignInScreen;
