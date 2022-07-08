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

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn('submitted ');
  };

  const onSendPressed = () => {
    console.warn('send');
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
        <Text style={styles.title}> New Password </Text>

        <CustomInput
          placeholder="Confirmation Code"
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder="New Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm New Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />

        <View style={styles.submitBtn}>
          <CustomButton onPress={onSubmitPressed} text="Submit" />
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
