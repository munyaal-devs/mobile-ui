import { factory } from '../factory';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity as NativeTouchableOpacity } from 'react-native';
import type { ButtonVariants } from './types';
import type { ComponentVariantProps } from '../../types';

export type { ButtonFactoryConfiguration } from './types';

export type ButtonProps = ComponentVariantProps<ButtonVariants> &
  TouchableOpacityProps;

export const Button = factory<ButtonProps>(NativeTouchableOpacity, 'button');
