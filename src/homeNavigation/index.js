import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigation from '../tabNavigation';
import HomeScreen from '../screens/HomeScreen';
import BeerListScreen from '../components/BreweryBeerList';
import FoodListScreen from '../components/BreweryFoodList';
import PhotoListScreen from '../components/BreweryPhotoList';

import BreweryHomeScreen from '../screens/BreweryHomeScreen';
import breweryNavigation from '../breweryNavigation';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="BreweryHomeScreen" component={BreweryHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigation;
