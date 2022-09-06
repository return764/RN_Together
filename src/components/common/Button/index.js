import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {colors} from '../../../utils/setting';

const Button = props => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={'#ddd'}
      style={[styles.wrapButton, props.style]}
      onPress={props.onPress}
      {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapButton: {
    borderRadius: 5,
    height: 40,
  },
  button: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    textAlignVertical: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: colors.secondary,
  },
});

export default Button;
