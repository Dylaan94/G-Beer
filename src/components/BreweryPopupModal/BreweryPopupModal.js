import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import testPhoto from '../../../assets/images/OnomichiBreweryTest.png';
import CustomButton from '../CustomButton';

const onEnterPressed = () => {
  console.warn('Enter pressed');
};

const onDirectionsPressed = () => {
  console.warn('Directions pressed');
};

const BreweryPopupModal = ({data}) => {
  const {name, key, imageSource} = data;

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Image source={testPhoto} style={styles.image}></Image>
        <View style={styles.nameView}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.distance}>1.2km</Text>
        </View>

        <Text style={styles.ratings}>4.9 / 808 reviews</Text>
        <Text style={styles.price}>$$</Text>
        <CustomButton
          text="Enter"
          onPress={onEnterPressed}
          fontWeight="bold"
          width={'95%'}
          padding={25}></CustomButton>
        <CustomButton
          text="Directions"
          onPress={onDirectionsPressed}
          textColor="#495057"
          bgColor="#D9D9D9"
          width={'95%'}
          padding={25}></CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  content: {
    alignItems: 'center',
    height: '70%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
  },
  image: {
    height: '40%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
  },
  nameView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  distance: {
    color: 'gray',
  },
  ratings: {
    alignSelf: 'stretch',
    color: 'gray',
  },
  price: {
    alignSelf: 'stretch',
    color: 'gray',
  },
});

export default BreweryPopupModal;
