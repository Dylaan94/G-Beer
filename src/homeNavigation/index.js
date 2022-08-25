import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import BreweryHomeScreen from '../screens/BreweryHomeScreen';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BreweryHomeScreen" component={BreweryHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigation;
