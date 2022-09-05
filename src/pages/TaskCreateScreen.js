import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TaskCreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Task Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default TaskCreateScreen;
