import { factory } from '../factory';
import type { ViewProps as NativeViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { HStackVariants } from './types';
import type { ComponentVariantProps, ViewSpecificStyles } from '../../types';

export type { HStackFactoryConfiguration } from './types';

export type HStackProps = ComponentVariantProps<HStackVariants> &
  NativeViewProps &
  ViewSpecificStyles;

export const HStack = factory<HStackProps>(NativeView, 'hStack');
