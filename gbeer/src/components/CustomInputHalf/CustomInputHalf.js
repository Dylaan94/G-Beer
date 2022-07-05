import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInputHalf = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '35%',
    height: 50,
    borderColor: '#d9d9d9',
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
  input: {
    textAlign: 'center',
  },
});

export default CustomInputHalf;
