import { factory } from '../factory';
import type { ViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { DividerVariants } from './types';

export type { DividerFactoryConfiguration } from './types';

export const Divider = factory<ViewProps, DividerVariants>(
  NativeView,
  'divider'
);
