import React, { forwardRef, memo } from 'react';
import { Text as NativeText } from 'react-native';
import type { ForwardComponentHeadingType } from './types';
import { useComponentHeading } from './hook';

const ComponentText: ForwardComponentHeadingType = (props, ref) => {
  const { children, ...propsWithoutChildren } = props;

  const { styles, nativeProps } = useComponentHeading(propsWithoutChildren);

  return (
    <NativeText ref={ref} style={styles} {...nativeProps}>
      {children}
    </NativeText>
  );
};

export default memo(forwardRef(ComponentText));
