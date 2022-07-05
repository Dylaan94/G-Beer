import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/Logo_HQ.png';

import CustomInputFull from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const RegistrationScreen = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const onSignUpPressed = () => {
    console.warn('Sign up');
  };

  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.15}]}
        resizeMode="contain"
      />
      <Text style={styles.text}> Register for G Beer</Text>
      <CustomInputFull
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInputFull
        placeholder="First Name"
        value={firstName}
        setValue={setFirstName}
        type="HALF"
      />
      <CustomInputFull
        placeholder="Last Name"
        value={lastName}
        setValue={setLastName}
        type="HALF"
      />
      <CustomInputFull
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInputFull placeholder="Confirm Password" secureTextEntry={true} />

      <CustomButton text="Sign Up" onPress={onSignUpPressed} />
    </View>
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
  text: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 30,
  },
});

export default RegistrationScreen;
