import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00AACA',
    width: '80%',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});

export default CustomButton;
