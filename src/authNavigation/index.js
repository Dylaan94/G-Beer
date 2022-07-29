import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ConfirmSignUpScreen from '../screens/ConfirmSignUpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import {Auth, Hub} from 'aws-amplify';
const Stack = createNativeStackNavigator();

// theme for setting background colour - Navigation Container has default theme
// which auto sets background to grey
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const AuthNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <Stack.Screen
              name="ConfirmSignUpScreen"
              component={ConfirmSignUpScreen}
            />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
            <Stack.Screen
              name="NewPasswordScreen"
              component={NewPasswordScreen}
            />
            <Stack.Screen name="OtherScreen" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
