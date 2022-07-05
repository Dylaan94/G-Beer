import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  type = 'FULL',
}) => {
  return (
    <View style={[styles.container, styles[`container_${type}`]]}>
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
    padding: 20,
    borderColor: '#d9d9d9',
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },

  container_FULL: {
    width: '80%',
  },
  container_HALF: {
    width: '35%',
  },
  input: {
    textAlign: 'center',
  },
});

export default CustomInput;
