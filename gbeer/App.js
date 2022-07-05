/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import SignInScreen from "./src/screens/SignInScreen"
import WelcomeScreen from "./src/screens/WelcomeScreen"
import RegistrationScreen from './src/screens/RegistrationScreen';



const App = () => {

  return (
    <SafeAreaView style={styles.root}>
      {/* <WelcomeScreen></WelcomeScreen> */}
      <RegistrationScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
