import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import CustomMapMarker from '../CustomMapMarker';

const Map = () => {
  const {height} = useWindowDimensions();

  const testData = [
    {
      latitude: 34.41101071638228,
      longitude: 133.20350768653674,
      title: 'Onomichi Brewery',
    },
    {
      latitude: 34.40855942896555,
      longitude: 133.20135394609633,
      title: 'Clue',
    },
  ];

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
      customMapStyle={mapStyle}>
      <CustomMapMarker data={testData[0]} />
    </MapView>
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
