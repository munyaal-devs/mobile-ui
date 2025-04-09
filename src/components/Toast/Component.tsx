import React, { memo, useEffect, useRef, useState, type FC } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import type { ToastProps } from '../../providers/ToastProvider/types';
import Toast from './Toast';
import type { ToastContentProps } from './types';

const Component: FC<ToastContentProps> = (props: ToastProps) => {
  const { time, message, icon, style } = props;
  const [visible, setVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    // Fade in y animación de subida
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    // Fade out después de `duration` ms
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 20, // Vuelve a bajar antes de desaparecer
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start(() => setVisible(false));
    }, time);

    return () => clearTimeout(timer);
  }, [fadeAnim, translateY, time]);

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.toast,
          { opacity: fadeAnim, transform: [{ translateY }] },
        ]}
      >
        <Toast message={message} icon={icon} style={style} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  toast: {
    width: '90%',
  },
});

export default memo(Component);
