import {Dimensions, Easing, StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  SlideInDown,
  SlideOutRight,
  withTiming,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const CardView = ({children}) => {
  const customSlideInDown = values => {
    'worklet';
    const animations = {
      translateY: withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      }),
    };
    const initialValues = {
      translateY: height + values.targetOriginY,
    };
    return {
      initialValues,
      animations,
    };
  };

  return (
    <Animated.View entering={SlideInDown} exiting={SlideOutRight}>
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
