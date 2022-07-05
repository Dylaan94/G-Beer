import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const RegisterSignIn = () => {
  return (
    <View style={styles.root}>
      <Pressable style={styles.register} title="Register">
        <Text style={styles.registerText}> Register </Text>
      </Pressable>

      <Pressable style={styles.signIn} title="Sign In">
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80,
  },
  register: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 180,
    backgroundColor: '#00AACA',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  registerText: {
    color: 'white',
    fontSize: 15,
  },
  signIn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 120,
    backgroundColor: '#D9D9D9',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  signInText: {
    color: '#747474',
    fontSize: 15,
  },
});

export default RegisterSignIn;
