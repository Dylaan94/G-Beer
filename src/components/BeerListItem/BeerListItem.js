import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React from 'react';

const BeerListItem = ({
  beerName,
  beerType,
  alcoholPercentage,
  ubi,
  image,
  tastingNotes,
  hops,
}) => {
  const {height, width} = useWindowDimensions();

  return (
    <View style={[styles.root, {height: height * 0.2}]}>
      {console.log(image)}
      <Image source={{uri: image}} style={styles.image}></Image>
      <View style={styles.textView}>
        <Text style={styles.title}>{beerName}</Text>
        <Text>
          <Text style={styles.boldText}>Beer Type: </Text>
          {beerType}
        </Text>
        <Text>
          <Text style={styles.boldText}>Alcohol Percentage: </Text>
          {alcoholPercentage}
        </Text>
        <Text>
          <Text style={styles.boldText}>UBI: </Text>
          {ubi}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
  },
  textView: {
    marginLeft: '5%',
  },
  image: {
    height: '80%',
    width: '35%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 1,
  },
  boldText: {fontWeight: 'bold'},
});

export default BeerListItem;
