import React from 'react';

import {SafeAreaView} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//component imports
import BreweryHeader from '../../components/BreweryHeader';
import BreweryBeerList from '../../components/BreweryBeerList';
import BreweryFoodList from '../../components/BreweryFoodList';
import BreweryPhotoList from '../../components/BreweryPhotoList';

const Tab = createMaterialTopTabNavigator();

// gets data from BreweryModal to be rendered to each page
const BreweryHomeScreen = ({ route }) => {
  
  let data = route.params.data
  return (
    <>
      <SafeAreaView>
        <BreweryHeader />
      </SafeAreaView>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="BreweryBeerList"
          screenOptions={{
            tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
            tabBarStyle: {backgroundColor: 'powderblue'},
            tabBarIndicatorStyle: {backgroundColor: 'orange'},
          }}>
          <Tab.Screen
            name="BreweryFoodList"
            component={BreweryFoodList}
            options={{tabBarLabel: '料理'}}
          />
          <Tab.Screen
            name="BreweryBeerList"
            component={BreweryBeerList}
            options={{ tabBarLabel: 'ビール' }}
            initialParams={{key:data}}
          />
          <Tab.Screen
            name="BreweryPhotoList"
            component={BreweryPhotoList}
            options={{tabBarLabel: '写真'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default BreweryHomeScreen;
