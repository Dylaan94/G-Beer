import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

//icon imports
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons/faCaretLeft';

const CustomBackButtonMini = () => {
  const tabBarHeight = useBottomTabBarHeight();

  const onPressed = () => {
    console.warn('back button pressed');
  };

  return (
    <Pressable
      style={[
        styles.button,
        {height: tabBarHeight / 3, width: tabBarHeight / 3},
      ]}
      onPress={onPressed}>
      <FontAwesomeIcon
        icon={faCaretLeft}
        size={tabBarHeight / 4}
        color={'white'}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00AACA',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomBackButtonMini;
