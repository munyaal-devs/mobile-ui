import { factory } from '../factory';
import type { ViewProps as NativeViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { DividerVariants } from './types';
import type { ComponentVariantProps } from '../../types';

export type { DividerFactoryConfiguration } from './types';

export type DividerProps = ComponentVariantProps<DividerVariants> &
  NativeViewProps;

export const Divider = factory<DividerProps>(NativeView, 'divider');
