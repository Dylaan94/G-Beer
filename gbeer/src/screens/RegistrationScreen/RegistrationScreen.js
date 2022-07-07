import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_HQ.png';

import CustomInput from '../../components/CustomInput';
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
      <ScrollView>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.15}]}
            resizeMode="contain"
          />
          <Text style={styles.text}> Register for G Beer</Text>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
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
            secureTextEntry={true}
          />
          <CustomInput placeholder="Confirm Password" secureTextEntry={true} />

          <View style={styles.signUpBtn}>
            <CustomButton text="Sign Up" onPress={onSignUpPressed} />
          </View>
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
  text: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 30,
  },
  signUpBtn: {
      marginTop: 150,
  },
});

export default RegistrationScreen;
