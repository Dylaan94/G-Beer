import {View, Text} from 'react-native';
import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screen imports
import OtherScreen from '../screens/OtherScreen';
import HomeNavigation from '../homeNavigation';
import ProfileScreen from '../screens/ProfileScreen';

// icon imports
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

const Tab = createBottomTabNavigator();

const iconFunc = icon => {
  return <FontAwesomeIcon icon={icon} size={18} />;
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarLabelStyle: {fontSize: 12}}}
        initialRouteName="HomeNavigation">
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'プロファイル',
            tabBarIcon: () => iconFunc(faUser),
          }}
        />
        <Tab.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{title: 'マップ', tabBarIcon: () => iconFunc(faLocationDot)}}
        />
        <Tab.Screen
          name="OtherScreen"
          component={OtherScreen}
          options={{title: 'その他', tabBarIcon: () => iconFunc(faEllipsis)}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
