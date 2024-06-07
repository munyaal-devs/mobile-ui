import { factory } from '../factory';
import type { ViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { HStackVariants } from './types';
import type { ViewSpecificStyles } from '../../types';

export type { HStackFactoryConfiguration } from './types';

export const HStack = factory<ViewProps, HStackVariants, ViewSpecificStyles>(
  NativeView,
  'hStack'
);
