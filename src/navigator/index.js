import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoreContext from '../store/StoreContext';
import HomeBaseTabStack from './HomeBaseTabStack';
import SignStack from './SignStack';
import SplashScreen from '../pages/SplashScreen';

const TopStack = createNativeStackNavigator();

const MyNavigator = () => {
  const {
    state: {isSignIn, isLoading},
  } = useContext(StoreContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <TopStack.Navigator screenOptions={{headerShown: false}}>
      {isSignIn ? (
        <TopStack.Screen name="A" component={HomeBaseTabStack} />
      ) : (
        <TopStack.Screen name="B" component={SignStack} />
      )}
    </TopStack.Navigator>
  );
};

export default MyNavigator;
