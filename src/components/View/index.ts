import { factory } from '../factory';
import type { ViewProps as NativeViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { ComponentVariantProps, ViewSpecificStyles } from '../../types';
import type { ViewVariants } from './types';

export { shadows } from './shadows';
export type { ViewFactoryConfiguration } from './types';

export type ViewProps = ComponentVariantProps<ViewVariants> &
  NativeViewProps &
  ViewSpecificStyles;

export const View = factory<ViewProps>(NativeView, 'view');
