import React, { forwardRef, memo } from 'react';
import { Text as NativeText } from 'react-native';
import type { ForwardComponentTextType } from './types';
import { useComponentText } from './hook';

const ComponentText: ForwardComponentTextType = (props, ref) => {
  const { children, ...propsWithoutChildren } = props;

  const { styles, nativeProps } = useComponentText(propsWithoutChildren);

  return (
    <NativeText ref={ref} style={styles} {...nativeProps}>
      {children}
    </NativeText>
  );
};

export default memo(forwardRef(ComponentText));
