import React from 'react';
import {Text, View} from 'react-native';
import {withScreenTransition} from '../components/hoc';

const TaskScreen = () => {
  return (
    <View>
      <Text>TaskScreen</Text>
    </View>
  );
};

export default withScreenTransition(TaskScreen);
