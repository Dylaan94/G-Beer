import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import CustomMapMarker from '../CustomMapMarker';
import BreweryPopupModal from '../BreweryPopupModal';

const Map = () => {
  const {height} = useWindowDimensions();
  const tabBarHeight = useBottomTabBarHeight();

  const testData = [
    {
      latitude: 34.41101071638228,
      longitude: 133.20350768653674,
      name: 'Onomichi Brewery',
      key: 0,
      imageSource:
        'https://onomichibeer.com/wp-content/uploads/2021/04/top01-2.jpg',
    },
    {
      latitude: 34.40855942896555,
      longitude: 133.20135394609633,
      name: 'Clue',
      key: 1,
    },
  ];

  const onMarkerPressed = key => {
    console.log('marker pressed from key:' + key);
  };

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 34.404608,
          longitude: 133.192858,
          latitudeDelta: 0.005,
          longitudeDelta: 0.008,
        }}
        style={[styles.map, {height: height - tabBarHeight}]}
        customMapStyle={mapStyle}>
        <CustomMapMarker data={testData[0]} onMarkerPressed={onMarkerPressed} />
      </MapView>
      <BreweryPopupModal data={testData[0]} />
    </>
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
