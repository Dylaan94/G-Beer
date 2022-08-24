import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  name,
  control,
  rules = {},
  placeholder,
  secureTextEntry,
  type = 'FULL',
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              styles[`container_${type}`],
              {borderColor: error ? '#DD4D44' : '#d9d9d9'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error ? <Text style={styles.error}> {error.message || "Error: Please try again"}</Text> : <></>}
        </>
      )}
    />
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

  error: {
    width: '80%',
    color: '#DD4D44',
    marginBottom: 10,
  },
});

export default CustomInput;
