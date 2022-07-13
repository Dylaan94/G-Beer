import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ConfirmSignUpScreen from '../screens/ConfirmSignUpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Confirm Sign Up" component={ConfirmSignUpScreen} />
        <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
        <Stack.Screen name="New Password" component={NewPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
