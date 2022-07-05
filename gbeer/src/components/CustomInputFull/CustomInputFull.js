import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomInputHalf from '../CustomInputHalf';

const CustomInputFull = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
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

export default CustomInputFull;
