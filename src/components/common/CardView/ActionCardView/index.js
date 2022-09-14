import React, {useState} from 'react';
import CardView from '../index';
import {GestureDetector} from 'react-native-gesture-handler/src/handlers/gestures/GestureDetector';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture} from 'react-native-gesture-handler';
import {Dimensions, StyleSheet} from 'react-native';
import Action from './Action';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.2;

const EMPTY_FUNC = () => {};

const ActionCardView = ({
  children,
  simultaneousHandlers = EMPTY_FUNC,
  onLeftAction = EMPTY_FUNC,
  onRightAction = EMPTY_FUNC,
  ...props
}) => {
  const [cardWidthHeight, setCardWidthHeight] = useState({
    height: null,
    width: null,
  });
  const cardStartX = useSharedValue(0);
  const actionOpacity = useSharedValue(0);
  const isPressed = useSharedValue(false);
  const onLeft = useSharedValue(false);
  const offsetX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offsetX.value}],
    };
  });
  const gesture = Gesture.Pan()
    .maxPointers(1)
    .simultaneousWithExternalGesture(simultaneousHandlers)
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offsetX.value = e.translationX + cardStartX.value;
      actionOpacity.value = interpolate(
        offsetX.value,
        [TRANSLATE_X_THRESHOLD, 0],
        [1, 0],
      );
    })
    .onEnd(e => {
      const leftPan = e.translationX < TRANSLATE_X_THRESHOLD;
      const rightPan = e.translationX > -TRANSLATE_X_THRESHOLD;
      if (leftPan && !onLeft.value) {
        cardStartX.value = -cardWidthHeight.width * 0.4;
        offsetX.value = withTiming(cardStartX.value);
        actionOpacity.value = withTiming(1);
        onLeft.value = true;
      } else if (rightPan) {
        offsetX.value = withTiming(0);
        cardStartX.value = 0;
        actionOpacity.value = withTiming(0);
        onLeft.value = false;
      } else {
        offsetX.value = withTiming(cardStartX.value);
        onLeft.value = false;
      }
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const actionAnimated = useAnimatedStyle(() => {
    return {
      opacity: actionOpacity.value,
    };
  });

  const setWidthHeight = e => {
    e.persist();
    setCardWidthHeight(() => {
      return {
        width: e.nativeEvent.layout.width,
        height: e.nativeEvent.layout.height,
      };
    });
  };
  const cardActionStyle = {
    height: cardWidthHeight.height,
    width: cardWidthHeight.height,
  };

  const resetCardViewAnimation = () => {
    cardStartX.value = 0;
    actionOpacity.value = withTiming(0);
    offsetX.value = withTiming(0);
    onLeft.value = false;
  };

  const wrapperAction = action => {
    return () => {
      action();
      resetCardViewAnimation();
    };
  };

  return (
    <Animated.View>
      <Action
        text="详情"
        onAction={wrapperAction(onRightAction)}
        style={[styles.action1, actionAnimated]}
        width={cardActionStyle.width}
      />
      <Action
        text="完成"
        onAction={wrapperAction(onLeftAction)}
        style={[styles.action2, actionAnimated]}
        width={cardActionStyle.width}
      />
      <GestureDetector gesture={gesture}>
        <CardView
          {...props}
          style={[animatedStyles, props.style]}
          onLayout={setWidthHeight}>
          {children}
        </CardView>
      </GestureDetector>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  outerWrap: {
    overflow: 'hidden',
    borderRadius: 15,
  },
  cardWrap: {
    position: 'relative',
    zIndex: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#dee',
  },
  action1: {
    right: 0,
  },
  action2: {
    right: '18%',
  },
});

export default ActionCardView;
