import React from 'react';
import {Text, View} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const TaskDetailScreen = ({route}) => {
  return (
    <View>
      <Text>TaskDetailScreen {route.params.id}</Text>
    </View>
  );
};

export default gestureHandlerRootHOC(TaskDetailScreen);
