import { factory } from '../factory';
import { View as NativeView } from 'react-native';
import type { DividerProps } from './types';

export type { DividerFactoryConfiguration, DividerProps } from './types';

export const Divider = factory<DividerProps>(NativeView, 'divider');
