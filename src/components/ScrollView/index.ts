import { factory } from '../factory';
import type { ScrollViewProps as NativeScrollViewProps } from 'react-native';
import { ScrollView as NativeScrollView } from 'react-native';
import type { ComponentVariantProps } from '../../types';

export type { ScrollViewFactoryConfiguration } from './types';

export type ScrollViewProps = ComponentVariantProps & NativeScrollViewProps;

export const ScrollView = factory<ScrollViewProps>(
  NativeScrollView,
  'scrollView'
);
