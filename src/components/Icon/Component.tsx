import React, { type FC, memo, useMemo } from 'react';
import { Path, Svg } from 'react-native-svg';
import { View } from 'react-native';
import { useThemeToolsProvider } from '../../providers/ThemeProvider';
import type { IconProps } from './types';

const Component: FC<IconProps> = (props) => {
  const { path, fill = '$text900', ...viewProps } = props;

  const { fetchTokenValue } = useThemeToolsProvider();

  const color = useMemo(() => {
    if (typeof fill === 'string' && fill.startsWith('$')) {
      return `${fetchTokenValue('colors', `${fill}`)}`;
    }
    return fill;
  }, [fetchTokenValue, fill]);

  return (
    <View {...viewProps}>
      <Svg height="100%" width="100%" viewBox="0 0 24 24">
        <Path d={path} fill={color} />
      </Svg>
    </View>
  );
};

export default memo(Component);
