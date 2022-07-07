import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, bgColor, textColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, bgColor ? {backgroundColor: bgColor} : {}]}>
      <Text style={[styles.text, textColor ? {color: textColor} : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00AACA',
    minWidth: '80%',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});

export default CustomButton;
