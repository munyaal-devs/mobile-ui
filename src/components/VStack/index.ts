import { factory } from '../factory';
import { View as NativeView, type ViewProps } from 'react-native';
import type { VStackVariants } from './types';
import type { ViewSpecificStyles } from '../../types';

export type { VStackFactoryConfiguration } from './types';

export const VStack = factory<ViewProps, VStackVariants, ViewSpecificStyles>(
  NativeView,
  'vStack'
);
