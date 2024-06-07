import { factory } from '../factory';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity as NativeTouchableOpacity } from 'react-native';
import type { ButtonVariants } from './types';

export type { ButtonFactoryConfiguration } from './types';

export const Button = factory<TouchableOpacityProps, ButtonVariants>(
  NativeTouchableOpacity,
  'button'
);
