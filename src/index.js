import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigators from './navigator';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <Navigators />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default gestureHandlerRootHOC(App);
