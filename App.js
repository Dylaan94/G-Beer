/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthNavigation from './src/authNavigation';
import TabNavigation from './src/tabNavigation';
import {Amplify, Auth, Hub} from 'aws-amplify';
import config from '../gbeerapp/src/aws-exports';

Amplify.configure(config);

const App = () => {
  // checks if user is logged in, if logged in show TabNavigator, if not show AuthNavigator
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  });

  return (
    <View style={styles.root}>
      {user ? (
        <>
          <TabNavigation />
        </>
      ) : (
        <AuthNavigation />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
