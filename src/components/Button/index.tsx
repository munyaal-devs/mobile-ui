import React, { forwardRef, memo } from 'react';
import { Pressable, View } from 'react-native';
import type { ForwardComponentHeadingType } from './types';
import { useComponentHeading } from './hook';
import { defaultStyles } from './styles';

const Button: ForwardComponentHeadingType = (props) => {
  const { children, ...propsWithoutChildren } = props;

  const { styles, nativeProps } = useComponentHeading(propsWithoutChildren);

  return (
    <Pressable {...nativeProps}>
      {({ pressed }) => (
        <View style={[...styles, pressed ? defaultStyles.pressed : null]}>
          {children}
        </View>
      )}
    </Pressable>
  );
};

export default memo(forwardRef(Button));
