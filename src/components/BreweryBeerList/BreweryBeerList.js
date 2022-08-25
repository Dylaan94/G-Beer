import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BeerListItem from '../BeerListItem';

const BreweryBeerList = ({route}) => {
  let data = route.params.key;

  let testBeer = data.beerList[0];

  return (
    <>
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
    </>
  );
};

export default BreweryBeerList;
