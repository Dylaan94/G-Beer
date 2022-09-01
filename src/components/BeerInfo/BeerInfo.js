import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

// component imports
import BackButtonChevron from '../BackButtonChevron/BackButtonChevron';

// icon imports
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import {useNavigation, useRoute} from '@react-navigation/native';

const BeerInfo = ({route}) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  
  let beerData = route.params.beerData;

  const goBackPressed = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      {console.log(beerData)}
      <View style={styles.root}>
        <BackButtonChevron onPressed={goBackPressed} />
        <Image
          source={{uri: beerData.image}}
          style={[{height: height * 0.4}, styles.image]}></Image>
        <Text style={styles.title}>{beerData.name}</Text>
        <View style={[{width: width * 0.9}, styles.beerInfo]}>
          <View style={[styles.beerInfoLeft]}>
            <Text>
              <Text style={styles.boldText}>Beer Type: </Text>
              {beerData.beerType}
            </Text>
            <Text>
              <Text style={styles.boldText}>Alcohol Percentage: </Text>{' '}
              {beerData.alcoholPercentage}
            </Text>
            <Text>
              <Text style={styles.boldText}>UBI: </Text> {beerData.ubi}
            </Text>
            <Text>
              <Text style={styles.boldText}>Tasting Notes: </Text>
              {beerData.tastingNotes.join(', ')}
            </Text>
            <Text>
              <Text style={styles.boldText}>Hops: </Text>{' '}
              {beerData.hops.join(', ')}
            </Text>
          </View>
          <View style={[styles.beerInfoRight]}>
            <View style={styles.star}>
              <FontAwesomeIcon icon={faStar} color="orange" size={24} />
            </View>

            <Text>
              {beerData.rating}
              <Text> Rating</Text>
            </Text>
          </View>
        </View>
        <View style={[{width: width * 0.9}, styles.description]}>
          <View>
            <Text style={styles.boldText}>Description</Text>
          </View>
          <View>
            <Text>{beerData.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  beerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  beerInfoLeft: {
    alignItems: 'center',
  },
  beerInfoRight: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {padding: 5},
  description: {
    paddingTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default BeerInfo;
