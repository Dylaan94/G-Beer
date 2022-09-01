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
      beerList: [
        {
          name: 'Onomichi Pale Ale',
          beerType: 'Pale Ale',
          alcoholPercentage: '5%',
          ubi: '20',
          tastingNotes: ['Fruity', 'Hoppy'],
          hops: ['Mukaishima', 'Onomichi'],
          rating: '4.5',
          image:
            'https://s3-ap-northeast-1.amazonaws.com/public-my-beer-2/uploads/beer/image/4315/fc7a1019-2292-483d-8e48-4be17b593bab.png',
          description:
            'Here there should be a more in depth description of the beer - given by the brewery Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
          key: 0,
        },
        {
          name: 'Shimanami Golden Ale',
          beerType: 'Golden Ale',
          alcoholPercentage: '5%',
          ubi: '25',
          tastingNotes: ['Fruity', 'Sweet'],
          hops: ['Onomichi', 'Hokkaido'],
          rating: '4.8',
          image:
            'https://assets.untappd.com/photos/2021_04_17/eab098cb22125fbd6b3802d7b6537034_640x640.jpg',
          description:
            'Here there should be a more in depth description of the beer - given by the brewery Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
          key: 1,
        },
      ],
      foodList: [{}],
      photoList: [{}],
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
