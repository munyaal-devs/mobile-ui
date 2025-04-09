import React, { type FC } from 'react';
import { Icon, Text, View } from '..';
import type { ToastProps } from './types';

const Toast: FC<ToastProps> = (props) => {
  const { message, icon, style = {} } = props;

  const {
    iconSize = 'lg',
    iconColor = '$primary600',
    messageColor = '$text900',
    messageSize = 'lg',
    contentRounded = '$lg',
    contentPadding = '$3',
    contentBackgroundColor = '$background100',
  } = style;

  return (
    <View
      gap={'$2'}
      p={contentPadding}
      bg={contentBackgroundColor}
      rounded={contentRounded}
      alignItems={'center'}
      flexDirection={'row'}
      justifyContent={'center'}
    >
      {!!icon && <Icon path={icon} size={iconSize} fill={iconColor} />}

      <Text size={messageSize} color={messageColor}>
        {message}
      </Text>
    </View>
  );
};

export default Toast;
