import React, { type FC, useMemo } from 'react';
import { Path, Svg } from 'react-native-svg';
import { View } from '../theme';
import type { ColorKey, SizeKey } from '../utils';
import { useToken } from '../hooks';

type IconProps = {
  path: string;
  size?: `$${SizeKey}`;
  color?: `$${ColorKey}`;
};

const Icon: FC<IconProps> = (props) => {
  const { path, size = '$8', color = '$text800' } = props;

  const { fetch } = useToken();

  const fill = useMemo(() => {
    return fetch('colors', `${color}`);
  }, [fetch, color]);

  return (
    <View w={size} h={size}>
      <Svg height="100%" width="100%" viewBox="0 0 24 24">
        <Path d={path} fill={fill} />
      </Svg>
    </View>
  );
};

export default Icon;
