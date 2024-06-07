import { factory } from '../factory';
import type { ViewVariants } from './types';
import type { ViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { ViewSpecificStyles } from '../../types';

export { shadows } from './shadows';
export type { ViewFactoryConfiguration } from './types';

export const View = factory<ViewProps, ViewVariants, ViewSpecificStyles>(
  NativeView,
  'view'
);
