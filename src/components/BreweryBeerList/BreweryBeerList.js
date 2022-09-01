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

  const onBeerPressed = key => {
      let beerData = data.beerList[key];
      

    //console.log(beerData);
    navigation.navigate('BeerInfo', (params = {beerData: beerData}));

  };

  return (
    <ScrollView>
      {data.beerList.map(beer => {
        return (
          <Pressable onPress={() => onBeerPressed(beer.key)}>
            <BeerListItem
              beerName={beer.name}
              beerType={beer.beerType}
              alcoholPercentage={beer.alcoholPercentage}
              ubi={beer.ubi}
              tastingNotes={beer.tastingNotes}
              hops={beer.hops}
              image={beer.image}
              key={beer.key}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default BreweryBeerList;
