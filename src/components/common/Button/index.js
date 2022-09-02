import React from 'react';
import {Text, TouchableHighlight, StyleSheet, View} from 'react-native';

const Button = props => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.button}>
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Button;
