import { factory } from '../factory';
import type { ViewProps as NativeViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { VStackVariants } from './types';
import type { ComponentVariantProps, ViewSpecificStyles } from '../../types';

export type { VStackFactoryConfiguration } from './types';

export type VStackProps = ComponentVariantProps<VStackVariants> &
  NativeViewProps &
  ViewSpecificStyles;

export const VStack = factory<VStackProps>(NativeView, 'vStack');
