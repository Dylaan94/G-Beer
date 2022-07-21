import {Auth} from 'aws-amplify';
import React from 'react';
import {View, Text} from 'react-native';

import CustomButton from '../../components/CustomButton';
import Map from '../../components/Map'

const HomeScreen = () => {
  const onSignOut = () => {
    Auth.signOut();
  };
  return (
    <>
      <Map></Map>
      <CustomButton text="sign out" onPress={onSignOut}></CustomButton>
      <Text> This is the Home Screen!</Text>
    </>
  );
};

export default HomeScreen;
