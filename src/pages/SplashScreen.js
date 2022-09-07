import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>加载中</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default gestureHandlerRootHOC(SplashScreen);
