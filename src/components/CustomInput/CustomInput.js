import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  name,
  control,
  placeholder,
  secureTextEntry,
  type = 'FULL',
}) => {
  return (
    <View style={[styles.container, styles[`container_${type}`]]}>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
        )}
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
    width: '39%',
    marginRight: '1%',
    marginLeft: '1%',
  },
  input: {
    textAlign: 'center',
    color: 'gray',
  },
});

export default CustomInput;
