import React from 'react';
import {StyleSheet, View} from 'react-native';
import Like from './src/assets/icon/like.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <Like width={40} height={40} />
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

export default App;
