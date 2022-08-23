import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';


//component imports

import BreweryHeader from '../../components/BreweryHeader';

const BeerListScreen = () => {
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <BreweryHeader />

        </SafeAreaView>
      </ScrollView>
    </>
  );
};


export default BeerListScreen;
