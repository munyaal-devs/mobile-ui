import React, { type FC, memo, useMemo } from 'react';
import { Path, Svg } from 'react-native-svg';
import { View, type ViewProps } from 'react-native';
import type { ColorKey } from '../utils';
import { useToken } from '../hooks';

export type IconProps = {
  path: string;
  fill?: `$${ColorKey}`;
} & ViewProps;

const Icon: FC<IconProps> = (props) => {
  const { path, fill = '$text900', ...viewProps } = props;

  const { fetch } = useToken();

  const color = useMemo(() => {
    return fetch('colors', `${fill}`);
  }, [fetch, fill]);

  return (
    <View {...viewProps}>
      <Svg height="100%" width="100%" viewBox="0 0 24 24">
        <Path d={path} fill={color} />
      </Svg>
    </View>
  );
};

export default memo(Icon);
