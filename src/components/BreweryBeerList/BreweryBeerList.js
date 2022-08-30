import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen imports
import BeerListItem from '../../components/BeerListItem';

const BreweryBeerList = ({route}) => {
     let data = route.params.key;

  const Stack = createNativeStackNavigator();

  const navigation = useNavigation();

  // need to map the results here
    let testBeer = data.beerList[0];

  const onBeerPressed = () => {
    navigation.navigate('BeerInfo');
    console.warn('beer pressed');
  };

  return (
    <ScrollView>
      {console.log(data)}
      <Pressable onPress={onBeerPressed}>
        {console.log(data.beerList[1])}
        <BeerListItem
          beerName={testBeer.name}
          beerType={testBeer.beerType}
          alcoholPercentage={testBeer.alcoholPercentage}
          ubi={testBeer.ubi}
          tastingNotes={testBeer.tastingNotes}
          hops={testBeer.hops}
          image={testBeer.image}
        />
      </Pressable>
    </ScrollView>
  );
};

export default BreweryBeerList;
