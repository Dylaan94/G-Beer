/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigation from '../gbeerapp/src/navigation';
import {Amplify} from 'aws-amplify';
import config from '../gbeerapp/src/aws-exports';

Amplify.configure(config);

const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
