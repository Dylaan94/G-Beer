import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen imports
import BreweryBeerList from '../../components/BreweryBeerList';
import BeerInfo from '../../components/BeerInfo';

const BreweryBeerHomeScreen = ({route}) => {
  let data = route.params.key;
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="BreweryBeerList"
          component={BreweryBeerList}
          initialParams={{key: data}}
        />
        <Stack.Screen name="BeerInfo" component={BeerInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BreweryBeerHomeScreen;
