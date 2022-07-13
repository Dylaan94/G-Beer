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

const RegistrationScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onSignUpPressed = () => {
    console.warn('Sign up');
  };

  const onSignInPressed = () => {
    console.warn('sign in ');
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <View style={styles.nameRoot}>
          <CustomInput
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            type="HALF"
          />
          <CustomInput
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            type="HALF"
          />
        </View>

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
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
          <CustomButton text="Sign Up" onPress={onSignUpPressed} />
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
