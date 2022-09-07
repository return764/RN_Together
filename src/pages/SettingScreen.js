import React from 'react';
import {Text, View} from 'react-native';
import {withScreenTransition} from '../components/hoc';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const SettingScreen = () => {
  return (
    <View>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default gestureHandlerRootHOC(withScreenTransition(SettingScreen));
