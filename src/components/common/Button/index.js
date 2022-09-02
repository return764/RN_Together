import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {colors} from '../../../utils/setting';

const Button = props => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={'#ddd'}
      style={styles.wrapButton}
      onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapButton: {
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: colors.secondary,
  },
});

export default Button;
