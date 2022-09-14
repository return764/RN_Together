import {StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {SlideInLeft, SlideOutRight} from 'react-native-reanimated';

const CardView = ({children, ...props}) => {
  return (
    <Animated.View {...props} entering={SlideInLeft} exiting={SlideOutRight}>
      <View onLayout={props.onLayout} style={[styles.cardWrap]}>
        {children}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#dee',
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.05,
    elevation: 5,
  },
});

export default CardView;
