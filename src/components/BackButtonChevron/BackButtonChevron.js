import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

//icon imports
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const BackButtonChevron = ({onPressed}) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <Pressable
      onPress={onPressed}
      style={[styles.root, {height: tabBarHeight * 0.3}]}>
      <FontAwesomeIcon icon={faChevronLeft} color={'#00AACA'} />
      <Text style={styles.text}>ビールリストへ</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginLeft: '2.5%',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: '#484848',
  },
});

export default BackButtonChevron;
