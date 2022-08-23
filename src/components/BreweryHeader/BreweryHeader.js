import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {useWindowDimensions} from 'react-native';

// component imports
import CustomButtonMini from '../CustomButtonMini';

const BreweryHeader = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.header}>
      <View style={[styles.button, {width: width * 0.2}]}>
        <CustomButtonMini />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Onomichi Brewery</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  title: {
    width: '100%',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default BreweryHeader;
