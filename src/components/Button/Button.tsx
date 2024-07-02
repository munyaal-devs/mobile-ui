import React, {
  type FC,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  type GestureResponderEvent,
  Pressable as NativePressable,
  type PressableProps as NativePressableProps,
  StyleSheet,
  View,
} from 'react-native';

const Button: FC<PropsWithChildren<NativePressableProps>> = (props) => {
  const { children, style, ...othersProps } = props;

  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const rippleRef = useRef(new Animated.Value(0)).current;

  const startAnimation = useCallback(
    (value: number) => {
      Animated.spring(rippleRef, {
        toValue: value,
        friction: 7,
        useNativeDriver: true,
      }).start();
    },
    [rippleRef]
  );

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      const {
        nativeEvent: { locationY, locationX },
      } = event;

      setPosition({ x: locationX, y: locationY });
      setIsAnimated(true);
    },
    [setIsAnimated]
  );

  const handlePressOut = useCallback(
    (_: GestureResponderEvent) => {
      setIsAnimated(false);
    },
    [setIsAnimated]
  );

  useEffect(() => {
    const value = isAnimated ? 30 : 0;

    startAnimation(value);
  }, [isAnimated, startAnimation]);

  return (
    <NativePressable
      {...othersProps}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style as any, styles.button]}
    >
      <View style={styles.rippleContainer}>
        <Animated.View
          style={[
            styles.element,
            {
              transform: [{ scale: rippleRef }],
              left: position.x - 5,
              top: position.y - 5,
            },
          ]}
        />
      </View>
      {children}
    </NativePressable>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
  },
  rippleContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  element: {
    position: 'absolute',
    zIndex: 0,
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default Button;
