import { factory } from '../factory';
import type { ViewProps } from 'react-native';
import { View as NativeView } from 'react-native';

export type { InputFactoryConfiguration } from './types';

export const Input = factory<ViewProps>(NativeView, 'input');
