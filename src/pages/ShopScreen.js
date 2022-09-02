import React from 'react';
import {Text, View} from 'react-native';
import {withScreenTransition} from '../components/hoc';

const ShopScreen = () => {
  return (
    <View>
      <Text>ShopScreen</Text>
    </View>
  );
};

export default withScreenTransition(ShopScreen);
