import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//component imports
import BreweryBeerList from '../components/BreweryBeerList';
import BreweryFoodList from '../components/BreweryFoodList';
import BreweryPhotoList from '../components/BreweryPhotoList';

const Tab = createMaterialTopTabNavigator();

// Top Navigator when viewing Brewery Homepage, displays beer, food and photos

const breweryNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="BreweryBeerList"
        screenOptions={{
          tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
          tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen
          name="BreweryFoodList"
          component={BreweryFoodList}
          options={{tabBarLabel: '料理'}}
        />
        <Tab.Screen
          name="BreweryBeerList"
          component={BreweryBeerList}
          options={{tabBarLabel: 'ビール'}}
        />
        <Tab.Screen
          name="BreweryPhotoList"
          component={BreweryPhotoList}
          options={{tabBarLabel: '写真'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default breweryNavigation;
