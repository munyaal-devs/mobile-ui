import { factory } from '../factory';
import type { ViewProps as NativeViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { ComponentVariantProps } from '../../types';

export type { CenterFactoryConfiguration } from './types';

export type CenterProps = ComponentVariantProps & NativeViewProps;

export const Center = factory<CenterProps>(NativeView, 'center');
