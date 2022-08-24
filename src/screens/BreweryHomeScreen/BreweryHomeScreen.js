import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import BreweryHeader from '../../components/BreweryHeader';

import BreweryNavigation from '../../breweryNavigation';

const BreweryHomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <BreweryHeader />
      </SafeAreaView>
      <BreweryNavigation />
    </>
  );
};

export default BreweryHomeScreen;
