import {Auth} from 'aws-amplify';
import React from 'react';
import {View, Text} from 'react-native';

import CustomButton from '../../components/CustomButton';

const HomeScreen = () => {
  const onSignOut = () => {
    Auth.signOut();
  };
  return (
    <View>
      <Text> This is the Home Screen!</Text>
      <CustomButton text="sign out" onPress={onSignOut}></CustomButton>
    </View>
  );
};

export default HomeScreen;
