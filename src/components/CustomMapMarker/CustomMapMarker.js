import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const CustomMapMarker = data => {
  const onMarkerPressed = () => {
    console.log('marker pressed');
  };
  const {
    data: {latitude, longitude, title},
  } = data;
  return (
    <Marker
      coordinate={{latitude: latitude, longitude: longitude}}
      title={title}
      onPress={onMarkerPressed}>
    </Marker>
  );
};

export default CustomMapMarker;
