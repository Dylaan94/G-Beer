import React, {useState} from 'react';

import {SafeAreaView} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//component imports
import BreweryHeader from '../../components/BreweryHeader';
import BreweryBeerHomeScreen from '../BreweryBeerHomeScreen';
import BreweryFoodHomeScreen from '../BreweryFoodHomeScreen';
import BreweryPhotoHomeScreen from '../BreweryPhotoHomeScreen';
import BeerInfoScreen from '../../components/BeerInfo';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

// gets data from BreweryModal to be rendered to each page
const BreweryHomeScreen = ({route}) => {
  let data = route.params.data;
  return (
    <>
      <SafeAreaView>
        <BreweryHeader />
      </SafeAreaView>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="BreweryBeerHomeScreen"
          screenOptions={{
            tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
            tabBarStyle: {backgroundColor: 'powderblue'},
            tabBarIndicatorStyle: {backgroundColor: 'orange'},
          }}>
          <Tab.Screen
            name="BreweryFoodHomeScreen"
            component={BreweryFoodHomeScreen}
            options={{tabBarLabel: '料理'}}
          />
          <Tab.Screen
            name="BreweryBeerHomeScreen"
            component={BreweryBeerHomeScreen}
            options={{tabBarLabel: 'ビール'}}
            initialParams={{key: data}}
          />
          <Tab.Screen
            name="BreweryPhotoHomeScreen"
            component={BreweryPhotoHomeScreen}
            options={{tabBarLabel: '写真'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default BreweryHomeScreen;
