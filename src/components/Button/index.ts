import { factory } from '../factory';
import { TouchableOpacity as NativeTouchableOpacity } from 'react-native';
import type { ButtonProps } from './types';

export type { ButtonFactoryConfiguration, ButtonProps } from './types';

export const Button = factory<ButtonProps>(NativeTouchableOpacity, 'button');
