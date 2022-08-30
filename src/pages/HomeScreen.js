import React from 'react';
import {Button, Text, View} from 'react-native';
import {clearStore} from '../utils/store';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="清理"
        onPress={async () => {
          await clearStore();
        }}
      />
    </View>
  );
};

export default HomeScreen;
