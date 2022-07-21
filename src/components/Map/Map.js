import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  const {height} = useWindowDimensions();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 34.404608,
        longitude: 133.192858,
        latitudeDelta: 0.005,
        longitudeDelta: 0.008,
      }}
      style={[styles.map, {height: height * 0.9}]}
      customMapStyle={mapStyle}
    />
  );
};

const styles = StyleSheet.create({
  map: {},
});

const mapStyle = [
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

export default Map;
