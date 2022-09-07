import React from 'react';
import {Text, View} from 'react-native';
import {withScreenTransition} from '../components/hoc';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const ShopScreen = () => {
  return (
    <View>
      <Text>ShopScreen</Text>
    </View>
  );
};

export default gestureHandlerRootHOC(withScreenTransition(ShopScreen));
