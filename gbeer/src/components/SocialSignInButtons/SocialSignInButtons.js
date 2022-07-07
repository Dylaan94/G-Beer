import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../components/CustomButton';

const SocialSignInButtons = () => {
  const onSignInGoogle = () => {
    console.warn('sign in google');
  };

  const onSignInFacebook = () => {
    console.warn('sign in facebook');
  };

  const onSignInApple = () => {
    console.warn('sign in apple');
  };

  return (
    <>
      <CustomButton
        text="Sign in with Google"
        bgColor="#FAE9EA"
        textColor="#DD4D44"
        onPress={onSignInGoogle}
      />
      <CustomButton
        text="Sign in with FaceBook"
        bgColor="#E7EAF4"
        textColor="#4765A9"
        onPress={onSignInFacebook}
      />
      <CustomButton
        text="Sign in with Apple"
        bgColor="#E3E3E3"
        textColor="#363636"
        onPress={onSignInApple}
      />
    </>
  );
};

export default SocialSignInButtons;
