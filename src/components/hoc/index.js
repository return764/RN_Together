import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

export const withScreenTransition = Component => {
  return () => {
    const opacity = useSharedValue(0);
    const navigation = useNavigation();

    const animStyle = useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
      };
    });

    useEffect(() => {
      return navigation.addListener('focus', () => {
        opacity.value = withTiming(1, {
          duration: 200,
        });
      });
    }, [opacity, navigation]);

    useEffect(() => {
      return navigation.addListener('blur', () => {
        opacity.value = 0;
      });
    }, [opacity, navigation]);

    return (
      <Animated.View style={[animStyle]}>
        <View style={{height: '100%'}}>
          <Component />
        </View>
      </Animated.View>
    );
  };
};
