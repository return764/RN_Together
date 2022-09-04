import {StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {SlideInDown, SlideOutRight} from 'react-native-reanimated';

const CardView = ({children, ...props}) => {
  return (
    <Animated.View {...props} entering={SlideInDown} exiting={SlideOutRight}>
      <View style={[styles.cardWrap]}>{children}</View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#dee',
  },
});

export default CardView;
