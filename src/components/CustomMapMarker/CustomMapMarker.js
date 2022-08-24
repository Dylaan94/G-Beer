import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const CustomMapMarker = ({data, onMarkerPressed}) => {
  const {latitude, longitude, name, key} = data;

  return (
    <Marker
      coordinate={{latitude: latitude, longitude: longitude}}
      title={name}
      onPress={() => onMarkerPressed(key)}></Marker>
  );
};

export default CustomMapMarker;
