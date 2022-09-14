import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

const Action = ({width, text, style, onAction}) => {
  return (
    <Animated.View
      style={[
        styles.actionContainer,
        style,
        {
          width: width,
        },
      ]}>
      <TouchableOpacity onPress={onAction}>
        <Text style={styles.actionText}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 15,
  },
  action1: {
    right: 0,
  },
  action2: {
    right: '20%',
  },
});

export default Action;
