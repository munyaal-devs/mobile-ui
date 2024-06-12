import { factory } from '../factory';
import { View as NativeView } from 'react-native';
import type { InputProps } from './types';

export type { InputFactoryConfiguration, InputProps } from './types';

export const Input = factory<InputProps>(NativeView, 'input');
